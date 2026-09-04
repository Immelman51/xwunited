/**
 * print_squad_pdfmake.js
 * ----------------------------------------------------------------
 * Adaptation de print_squad.js : au lieu de manipuler le DOM
 * (createElement/appendChild/innerHTML), ces fonctions construisent
 * des objets pdfmake (tables, cellules, stacks).
 *
 * Ce fichier suppose que xwing-pdf-example.js est chargé avant
 * (pour cm(), parseHtmlToPdfmakeText(), preloadImages(), etc.)
 */

// ---------------------------------------------------------------------
// 1. LEADER — grille fixe 19 colonnes de 1cm, blocs de lignes de 0,5cm
// ---------------------------------------------------------------------
function buildLeaderTable() {
  const factionImgs = [];
  for (let i = 0; i < 3; i++) {
    if (leaders[lID]['leaderfaction'][i] !== '') {
      const chemin = `img/${leaders[lID]['leaderfaction'][i]}mini.jpg`;
      cheminsImagesLeader.push(chemin);
      factionImgs.push(chemin);
    }
  }
  const leaderName =
    leaders[lID]['leadername_' + language] + (listValidity === false ? ' (NOT VALID)' : '');

  const nbrOfLeaderCharges = leaders[lID]['charge'][0];
  let chargeImgPath = null;
  switch (leaders[lID]['charge'][1]) {
    case 'Red':
      chargeImgPath = 'img/chargestatRed.png';
      break;
    case 'Yellow':
      chargeImgPath = 'img/chargestat.png';
      break;
    default:
      console.log(
        'This leader charge configuration has not been programmed in buildLeaderTable(). There might be a mistake in leaders.json.'
      );
  }
  if (chargeImgPath) cheminsImagesLeader.push(chargeImgPath);

  const nomEtCharges = {
    columns: [
      { text: leaderName + ' ', style: 'leaderName', width: 'auto' },
      { text: '', width: '*' },
      ...(chargeImgPath
        ? Array.from({ length: nbrOfLeaderCharges }, () => ({ image: chargeImgPath, width: cm(1.5) }))
        : []),
    ],
    verticalAlignment: 'center',
  };

  const widths = [...Array(17).fill(cm(1)), cm(2)];

  return {
    table: {
      widths,
      heights: [cm(1.5), cm(1.5)],
      body: [
        [
          factionImgs[0]
            ? { stack: factionImgs.map((c) => ({ image: c, width: cm(0.9) })) }
            : {},
          { ...celluleLargeurFixe(nomEtCharges, 17, 1.5), colSpan: 17 },
          ...Array(16).fill({}),
        ],
        [
          {
            ...celluleLargeurFixe(
              {
                text: parseHtmlToPdfmakeText(leaders[lID]['leaderability_' + language]),
                style: 'competenceText',
                alignment: 'left',
                verticalAlignment: 'center',
              },
              18,
              1.5
            ),
            colSpan: 18,
          },
          ...Array(17).fill({}),
        ],
      ],
    },
    layout: LAYOUT_BORDURE_EXTERIEURE,
    margin: [0, 0, 0, cm(1)],
  };
}

// ---------------------------------------------------------------------
// 2. ACTIONS D'UN PILOTE
// ---------------------------------------------------------------------
function buildPilotActionsArray(x) {
  const pilotID = pilotdata[x][0];
  const shipID = pilots[pilotID]['shipId'];
  const actionsArray = ships[shipID]['actions'];
  const result = [];

  for (let g = 0; g < actionsArray.length; g++) {
    if (actionsArray[g][0] === 0) {
      result.push({ type: 'simple', code: actionsArray[g][1] });
    } else if (actionsArray[g][0] === 1) {
      result.push({ type: 'linked', code1: actionsArray[g][1], code2: actionsArray[g][2] });
    } else {
      console.log('there is a mistake in ships.json for ship ID n°' + shipID);
    }
  }
  return result;
}

function applyDroidOverride(actionsArray, droidEquipped) {
  if (!droidEquipped) return actionsArray;
  const swap = (code) => (code === 'Fo W' ? 'Cc W' : code === 'Fo R' ? 'Cc R' : code);
  return actionsArray.map((a) =>
    a.type === 'simple'
      ? { ...a, code: swap(a.code) }
      : { ...a, code1: swap(a.code1), code2: swap(a.code2) }
  );
}

function buildSingleActionCell(action) {
  if (!action) return { text: '' };
  if (action.type === 'simple') {
    const chemin = `img/${action.code}.jpg`;
    cheminsImagesActions.push(chemin);
    return { image: chemin, fit: [cm(0.45), cm(0.45)], alignment: 'center', verticalAlignment: 'center' };
  }
  const chemin1 = `img/${action.code1}.jpg`;
  const chemin2 = `img/${action.code2}.jpg`;
  cheminsImagesActions.push(chemin1, 'img/fleche.jpg', chemin2);
  return {
    columns: [
      { image: chemin1, fit: [cm(0.45), cm(0.45)] },
      { image: 'img/fleche.jpg', fit: [cm(0.2), cm(0.45)] },
      { image: chemin2, fit: [cm(0.45), cm(0.45)] },
    ],
    columnGap: 1,
    verticalAlignment: 'center',
  };
}

// ---------------------------------------------------------------------
// 3. CAPACITÉS DE CHASSIS
// ---------------------------------------------------------------------
function computeChassisTexts(cid, language) {
  const texts = { chs1: '', chs2: '', chs3: '' };
  const from = { chs1: null, chs2: null, chs3: null };

  if (cid.length === 1) {
    const c0 = chassis[cid[0]];
    if (c0['nbrOfEffects'] === 1) {
      texts.chs1 = c0['effect1_' + language];
      from.chs1 = cid[0];
    } else if (c0['nbrOfEffects'] === 2) {
      texts.chs2 = c0['effect2_' + language];
      texts.chs3 = c0['effect3_' + language];
      from.chs2 = cid[0];
      from.chs3 = cid[0];
    }
  } else if (cid.length === 2) {
    const c0 = chassis[cid[0]];
    const c1 = chassis[cid[1]];
    if (c0['nbrOfEffects'] === 2) {
      texts.chs1 = c1['effect1_' + language];
      texts.chs2 = c0['effect2_' + language];
      texts.chs3 = c0['effect3_' + language];
      from.chs1 = cid[1];
      from.chs2 = cid[0];
      from.chs3 = cid[0];
    }
    if (c1['nbrOfEffects'] === 2) {
      texts.chs1 = c0['effect1_' + language];
      texts.chs2 = c1['effect2_' + language];
      texts.chs3 = c1['effect3_' + language];
      from.chs1 = cid[0];
      from.chs2 = cid[1];
      from.chs3 = cid[1];
    }
    if (c0['nbrOfEffects'] === 1 && c1['nbrOfEffects'] === 1) {
      texts.chs2 = c0['effect1_' + language];
      texts.chs3 = c1['effect1_' + language];
      from.chs2 = cid[0];
      from.chs3 = cid[1];
    }
  }

  return { texts, from };
}

function applyRemoveClassToChassis(chassisTexts, chassisFrom, chassisIdVise) {
  ['chs1', 'chs2', 'chs3'].forEach((k) => {
    if (chassisFrom[k] === chassisIdVise) chassisTexts[k] = '';
  });
}

function applyChangeChassis(chassisTexts, chassisFrom, chassisIdVise, nouveauTexte) {
  ['chs1', 'chs2', 'chs3'].forEach((k) => {
    if (chassisFrom[k] === chassisIdVise) chassisTexts[k] = nouveauTexte;
  });
}

// ---------------------------------------------------------------------
// 4. STATS DU VAISSEAU
// ---------------------------------------------------------------------
function buildStatsList(sid) {
  const stats = [];
  stats.push({
    valeur: ships[sid]['attack'][0][1],
    chemin: `img/attack${ships[sid]['attack'][0][0]}.jpg`,
    style: 'attackText',
  });
  if (ships[sid]['attack'].length === 2) {
    stats.push({
      valeur: ships[sid]['attack'][1][1],
      chemin: `img/attack${ships[sid]['attack'][1][0]}.jpg`,
      style: 'attackText',
    });
  }
  stats.push({ valeur: ships[sid]['agility'], chemin: 'img/agility.jpg', style: 'agilityText' });
  stats.push({ valeur: ships[sid]['hull'], chemin: 'img/hull.jpg', style: 'hullText' });
  stats.push({ valeur: ships[sid]['shields'], chemin: 'img/shield.jpg', style: 'shieldText' });
  return stats;
}

function buildSingleStatCell(stat) {
  if (!stat) return { text: '' };
  return {
    columns: [
      // Largeur fixe + alignement à droite : le chiffre se décale vers la
      // droite (loin de la bordure gauche) SANS déplacer l'image, puisque
      // la position de l'image dépend de la largeur totale de ce qui la
      // précède (ici : largeur fixe du chiffre + columnGap), qui elle ne
      // change pas. Augmente/réduis LARGEUR_CHIFFRE pour ajuster le décalage.
      { text: String(stat.valeur), style: stat.style, width: cm(0.35), alignment: 'right' },
      { image: stat.chemin, fit: [cm(0.35), cm(0.35)] },
    ],
    columnGap: 0,
    verticalAlignment: 'center',
  };
}

// ---------------------------------------------------------------------
// 5. UNE AMÉLIORATION (upgrade) ÉQUIPÉE
// ---------------------------------------------------------------------
function buildUpgradeCell(uid, x, context) {
  const columnItems = [
    { image: `img/${upgrades[uid]['slot']}.png`, width: cm(0.5) },
    { text: upgrades[uid]['name_' + language], style: 'upgradeName', width: '*' },
  ];

  let hideCell = false;

  switch (upgrades[uid]['add_Data'][0]) {
    case 'removeclass':
      applyRemoveClassToChassis(context.chassisTexts, context.chassisFrom, upgrades[uid]['add_Data'][1]);
      break;
    case 'changeChassis':
      applyChangeChassis(
        context.chassisTexts,
        context.chassisFrom,
        upgrades[uid]['add_Data'][1],
        upgrades[uid]['add_Data'][2]
      );
      hideCell = true;
      break;
    case 'droid':
      context.droidEquipped = true;
      break;
    case 'add_action': {
      const actionToAdd = upgrades[uid]['add_Data'][1];
      if (actionToAdd[0] === 0) {
        context.actionsArray.push({ type: 'simple', code: actionToAdd[1] });
      } else if (actionToAdd[0] === 1) {
        context.actionsArray.push({ type: 'linked', code1: actionToAdd[1], code2: actionToAdd[2] });
      } else {
        console.log('there is a mistake in add_data in pilots.json');
      }
      break;
    }
    default:
      break;
  }

  const nbrcharge = upgrades[uid]['charge'][0];
  for (let j = 0; j < nbrcharge; j++) {
    columnItems.push({ image: 'img/chargestat.png', width: cm(1.5) });
  }
  if (upgrades[uid]['charge'][1] === '+') {
    columnItems.push({ image: 'img/chargeplus.png', width: cm(0.3) });
  } else if (upgrades[uid]['charge'][1] === '-') {
    columnItems.push({ image: 'img/chargeminus.png', width: cm(0.3) });
  }
  for (let j = 0; j < upgrades[uid]['force']; j++) {
    columnItems.push({ image: 'img/forcestat.png', width: cm(1.5) });
  }

  return hideCell ? null : { columns: columnItems, columnGap: 3, alignment: 'left' };
}

// ---------------------------------------------------------------------
// 6. TABLEAU COMPLET D'UN PILOTE — grille fixe 18 colonnes
// ---------------------------------------------------------------------
function buildEquipmentLayout(chassisTexts, upgradeCells) {
  const validUpgrades = upgradeCells.filter(Boolean);
  const chassisItem = (texte) => ({
    text: parseHtmlToPdfmakeText(texte),
    style: 'chassisText',
    alignment: 'center',
    verticalAlignment: 'center',
  });

  let ligne7_9;
  let upgradesRestantes;

  if (chassisTexts.chs1) {
    ligne7_9 = { type: 'unique', content: chassisItem(chassisTexts.chs1) };
    upgradesRestantes = validUpgrades.slice(0, 6);
  } else if (chassisTexts.chs2 || chassisTexts.chs3) {
    ligne7_9 = {
      type: 'paire',
      a: chassisTexts.chs2 ? chassisItem(chassisTexts.chs2) : null,
      b: chassisTexts.chs3 ? chassisItem(chassisTexts.chs3) : null,
    };
    upgradesRestantes = validUpgrades.slice(0, 6);
  } else {
    ligne7_9 = { type: 'paire', a: validUpgrades[0] || null, b: validUpgrades[1] || null };
    upgradesRestantes = validUpgrades.slice(2, 8);
  }

  return { ligne7_9, emplacementsBas: upgradesRestantes };
}

const LAYOUT_SANS_PADDING = {
  hLineWidth: () => 0,
  vLineWidth: () => 0,
  paddingLeft: () => 0,
  paddingRight: () => 0,
  paddingTop: () => 0,
  paddingBottom: () => 0,
};

const LAYOUT_BORDURE_EXTERIEURE = {
  hLineWidth: (i, node) => (i === 0 || i === node.table.body.length ? 1 : 0),
  vLineWidth: (i, node) => (i === 0 || i === node.table.widths.length ? 1 : 0),
  hLineColor: () => 'black',
  vLineColor: () => 'black',
  paddingLeft: () => 0,
  paddingRight: () => 0,
  paddingTop: () => 0,
  paddingBottom: () => 0,
};

function ligneLargeurFixe(cellules, largeursCm, hauteurCm) {
  return {
    table: {
      widths: largeursCm.map(cm),
      heights: hauteurCm !== undefined ? [cm(hauteurCm)] : undefined,
      body: [cellules],
    },
    layout: LAYOUT_SANS_PADDING,
  };
}
function celluleLargeurFixe(contenu, largeurCm, hauteurCm) {
  return ligneLargeurFixe([contenu], [largeurCm], hauteurCm);
}
function celluleEmpileeLargeurFixe(items, largeurCm, hauteurUniteCm) {
  return {
    table: {
      widths: [cm(largeurCm)],
      heights: items.map(() => cm(hauteurUniteCm)),
      body: items.map((it) => [it]),
    },
    layout: LAYOUT_SANS_PADDING,
  };
}

function buildPilotTable(x) {
  getPilotData(x);
  const pid = pilotdata[x][0];
  const sid = pilots[pid]['shipId'];
  const cid = ships[sid]['chassis'];

  const factionChemin = `img/${pilots[pid]['faction']}mini.jpg`;
  cheminsImagesPilot.push(factionChemin);

  const { texts: chassisTexts, from: chassisFrom } = computeChassisTexts(cid, language);

  let actionsArray = buildPilotActionsArray(x);

  const context = { chassisTexts, chassisFrom, actionsArray, droidEquipped: false };
  const upgradeCells = [];
  for (let i = 0; i < pilotdata[x].length - 1; i++) {
    const uid = pilotdata[x][i + 1];
    upgradeCells.push(buildUpgradeCell(uid, x, context));
  }
  actionsArray = context.actionsArray;
  actionsArray = applyDroidOverride(actionsArray, context.droidEquipped);
  console.log(`[diagnostic] Pilote index ${x} (pid=${pid}) : actionsArray =`, JSON.stringify(actionsArray));
  if (actionsArray.length > 6) {
    console.warn(
      `[buildPilotTable] pilote index ${x} : ${actionsArray.length} actions à afficher mais seulement 6 emplacements disponibles.`
    );
  }

  // -- Charges/force du pilote : maintenant placés APRES le nom du pilote / nom du vaisseau
  const pilotForceIcons = Array.from({ length: pilots[pid]['force'] }, () => ({
    image: 'img/forcestat.png',
    width: cm(1.5),
  }));
  const pilotChargeIcons = Array.from({ length: pilots[pid]['charge'][0] }, () => ({
    image: 'img/chargestat.png',
    width: cm(1.5),
  }));
  let pilotChargeEvolutionIcon = null;
  if (pilots[pid]['charge'][1] === '+') pilotChargeEvolutionIcon = { image: 'img/chargeplus.png', width: cm(0.3) };
  if (pilots[pid]['charge'][1] === '-') pilotChargeEvolutionIcon = { image: 'img/chargeminus.png', width: cm(0.3) };

  // -- Compétence seule (les marqueurs de charge/force du pilote ne sont plus ici)
  const abiliteEtMarqueurs = {
    text: [{ text: parseHtmlToPdfmakeText(pilots[pid]['ability_' + language]) }],
    verticalAlignment: 'center',
  };

  // -- Nom + vaisseau ensemble dans un `text` inline (bon alignement sur la ligne
  // de base malgré des tailles de police différentes), puis un espaceur `*` qui
  // pousse les icônes de charge/force tout à droite de la colonne.
  const nomEtVaisseau = {
    columns: [
      {
        text: [
          { text: pilots[pid]['name_' + language] + '  ', style: 'pilotName' },
          { text: ships[sid]['name'], style: 'shipName' },
        ],
        width: 'auto',
      },
      { text: '', width: '*' },
      ...pilotChargeIcons,
      ...(pilotChargeEvolutionIcon ? [pilotChargeEvolutionIcon] : []),
      ...pilotForceIcons,
    ],
    verticalAlignment: 'center',
  };

  const statsList = buildStatsList(sid);
  const { ligne7_9, emplacementsBas } = buildEquipmentLayout(chassisTexts, upgradeCells);
  const emptyCell = () => ({ text: '' });

  const widths = [...Array(17).fill(cm(1)), cm(2)];

  const body = [];

  body.push([
    { image: factionChemin, fit: [cm(0.9), cm(0.9)], alignment: 'center', verticalAlignment: 'center' },
    { text: String(pilots[pid]['skill']), alignment: 'center', verticalAlignment: 'center', style: 'pskill' },
    { ...nomEtVaisseau, colSpan: 15 },
    ...Array(14).fill({}),
    { text: String(pilots[pid]['points']), alignment: 'center', verticalAlignment: 'center', style: 'cost' },
  ]);

  const statBlockHaut = celluleEmpileeLargeurFixe(
    [buildSingleStatCell(statsList[0]), buildSingleStatCell(statsList[1]), buildSingleStatCell(statsList[2])],
    1,
    0.5
  );
  const actionBlockHaut = celluleEmpileeLargeurFixe(
    [buildSingleActionCell(actionsArray[0]), buildSingleActionCell(actionsArray[1]), buildSingleActionCell(actionsArray[2])],
    2,
    0.5
  );
  body.push([
    { ...statBlockHaut, verticalAlignment: 'center' },
    { ...celluleLargeurFixe(abiliteEtMarqueurs, 16, 1.5), colSpan: 16, style: 'abilityDescription', verticalAlignment: 'center' },
    ...Array(15).fill({}),
    { ...actionBlockHaut, verticalAlignment: 'center' },
  ]);

  const statBlockBas = celluleEmpileeLargeurFixe(
    [buildSingleStatCell(statsList[3]), buildSingleStatCell(statsList[4]), emptyCell()],
    1,
    0.5
  );
  const actionBlockBas = celluleEmpileeLargeurFixe(
    [buildSingleActionCell(actionsArray[3]), buildSingleActionCell(actionsArray[4]), buildSingleActionCell(actionsArray[5])],
    2,
    0.5
  );
  const ligneMilieu5 =
    ligne7_9.type === 'unique'
      ? [
          { ...celluleLargeurFixe(ligne7_9.content, 16, 1.5), colSpan: 16, verticalAlignment: 'center' },
          ...Array(15).fill({}),
        ]
      : [
          ligne7_9.a
            ? { ...celluleLargeurFixe(ligne7_9.a, 8, 1.5), colSpan: 8, verticalAlignment: 'center' }
            : { ...emptyCell(), colSpan: 8 },
          ...Array(7).fill({}),
          ligne7_9.b
            ? { ...celluleLargeurFixe(ligne7_9.b, 8, 1.5), colSpan: 8, verticalAlignment: 'center' }
            : { ...emptyCell(), colSpan: 8 },
          ...Array(7).fill({}),
        ];
  body.push([{ ...statBlockBas, verticalAlignment: 'center' }, ...ligneMilieu5, { ...actionBlockBas, verticalAlignment: 'center' }]);

  const heights = [cm(1), cm(1.5), cm(1.5)];

  if (emplacementsBas.length > 0) {
    body.push([
      {
        ...ligneLargeurFixe(
          [emplacementsBas[0] || emptyCell(), emplacementsBas[1] || emptyCell(), emplacementsBas[2] || emptyCell()],
          [6, 6, 7],
          1.5
        ),
        colSpan: 18,
        verticalAlignment: 'center',
      },
      ...Array(17).fill({}),
    ]);
    heights.push(cm(1.5));
  }

  if (emplacementsBas.length > 3) {
    body.push([
      {
        ...ligneLargeurFixe(
          [emplacementsBas[3] || emptyCell(), emplacementsBas[4] || emptyCell(), emplacementsBas[5] || emptyCell()],
          [6, 6, 7],
          1.5
        ),
        colSpan: 18,
        verticalAlignment: 'center',
      },
      ...Array(17).fill({}),
    ]);
    heights.push(cm(1.5));
  }

  return {
    table: {
      widths,
      heights,
      body,
    },
    layout: LAYOUT_BORDURE_EXTERIEURE,
    margin: [0, 0, 0, cm(1)],
  };
}

// ---------------------------------------------------------------------
// 7. ORCHESTRATION
// ---------------------------------------------------------------------
async function buildFullDocDefinitionFromApp() {
  await getIndexesFromHash();
  language = indexes[indexes.length - 1];
  lID = indexes[0];
  testListValidity();

  const content = [buildLeaderTable()];
  for (let k = 1; k < indexes.length - 1; k++) {
    content.push(buildPilotTable(k));
  }

  return {
    pageSize: 'A4',
    pageMargins: [cm(1), cm(1.35), cm(1), cm(1.35)],
    content,
    styles: {
      leaderName: { fontSize: 16, bold: true },
      competenceText: { fontSize: 8, italics: true },
      pilotName: { fontSize: 14, bold: true },
      shipName: { fontSize: 11 },
      pskill: { fontSize: 15, bold: true, color: 'orange' },
      cost: { fontSize: 15, bold: true, color: 'red' },
      statsBox: { fontSize: 9, bold: true },
      actionsBox: { fontSize: 8 },
      abilityDescription: { fontSize: 8 },
      upgradeName: { fontSize: 7 },
      chassisText: { fontSize: 8 },
      attackText: { fontSize: 10, bold: true, color: '#d6291d' },
      agilityText: { fontSize: 10, bold: true, color: '#357c15' },
      hullText: { fontSize: 10, bold: true, color: '#d1b92e' },
      shieldText: { fontSize: 10, bold: true, color: '#3f1dd6' },
    },
  };
}

async function genererPdfDepuisApp() {
  await chargerPoliceXWingIcons();
  const docDefinition = await buildFullDocDefinitionFromApp();
  const cheminsUniques = [
    ...new Set([
      ...cheminsImagesLeader,
      ...cheminsImagesActions,
      ...cheminsImagesPilot,
      ...cheminsImagesStats,
      ...cheminsImagesUpgrades,
      ...cheminsImagesGen,
    ]),
  ];
  const imagesBase64 = await preloadImages(cheminsUniques);

  function nettoyerImagesManquantes(node) {
    if (Array.isArray(node)) {
      return node.map(nettoyerImagesManquantes);
    }
    if (node && typeof node === 'object') {
      if (typeof node.image === 'string') {
        if (imagesBase64[node.image]) {
          return { ...node, image: imagesBase64[node.image] };
        }
        console.warn(`[genererPdfDepuisApp] Image manquante, retirée du PDF : "${node.image}"`);
        return { text: '' };
      }
      const clone = {};
      for (const cle of Object.keys(node)) {
        clone[cle] = nettoyerImagesManquantes(node[cle]);
      }
      return clone;
    }
    return node;
  }

  const docDefinitionResolved = nettoyerImagesManquantes(docDefinition);

  pdfMake.createPdf(docDefinitionResolved).download(
    leaders[lID]['leadername_' + language] + hash + '.pdf'
  );
}
