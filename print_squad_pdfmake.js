/**
 * print_squad_pdfmake.js
 * ----------------------------------------------------------------
 * Adaptation de print_squad.js : au lieu de manipuler le DOM
 * (createElement/appendChild/innerHTML), ces fonctions construisent
 * des objets pdfmake (tables, cellules, stacks).
 *
 * Hypothèses / points à vérifier (je n'ai pas pilots.json/upgrades.json
 * sous les yeux) :
 *  - Pour 'removeclass' et 'changeChassis', add_Data[1] est supposé être
 *    une chaîne qui identifie le chassis concerné (ex: "C123", basé sur
 *    ton "C"+cid dans le code original). Si le format réel diffère,
 *    la fonction matchesChassisMarker() ci-dessous est à ajuster.
 *  - Le fond d'écran du pilote (.pilotImg) n'est PAS reproduit ici :
 *    à traiter séparément (voir discussion).
 *
 * Ce fichier suppose que xwing-pdf-example.js est chargé avant
 * (pour cm(), parseHtmlToPdfmakeText(), preloadImages(), etc.)
 */

// ---------------------------------------------------------------------
// 1. LEADER
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

  const widths = [cm(1), cm(1.5), cm(1.5), cm(7.45), cm(7.45)];

  return {
    table: {
      widths,
      heights: (rowIndex) => (rowIndex === 0 ? cm(1) : 'auto'),
      body: [
        [
          factionImgs[0] ? { image: factionImgs[0], fit: [cm(0.9), cm(0.9)] } : {},
          factionImgs[1] ? { image: factionImgs[1], fit: [cm(1.4), cm(1.4)] } : {},
          factionImgs[2] ? { image: factionImgs[2], fit: [cm(1.4), cm(1.4)] } : {},
          { text: leaderName, colSpan: 2, style: 'leaderName', alignment: 'center' },
          {},
        ],
        [
          {
            text: parseHtmlToPdfmakeText(leaders[lID]['leaderability_' + language]),
            colSpan: 4,
            style: 'competenceText',
          },
          {},
          {},
          {},
          chargeImgPath
            ? {
                stack: Array.from({ length: nbrOfLeaderCharges }, () => ({
                  image: chargeImgPath,
                  width: cm(1.2),
                })),
                alignment: 'center',
              }
            : {},
        ],
      ],
    },
    layout: 'noBorders',
    margin: [0, 0, 0, cm(0.3)],
  };
}

// ---------------------------------------------------------------------
// 2. ACTIONS D'UN PILOTE (avec prise en compte du "droid" et "add_action")
// ---------------------------------------------------------------------
function buildPilotActionsArray(x) {
  const pilotID = pilotdata[x][0];
  const shipID = pilots[pilotID]['shipId'];
  const actionsArray = ships[shipID]['actions'];
  const result = []; // chaque élément : {type:'simple', code} ou {type:'linked', code1, code2}

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

/**
 * Applique la logique 'droid' (remplace les actions Fo W / Fo R par Cc W / Cc R)
 * en post-traitement, une fois qu'on sait si le pilote a un upgrade droid équipé.
 */
function applyDroidOverride(actionsArray, droidEquipped) {
  if (!droidEquipped) return actionsArray;
  const swap = (code) => (code === 'Fo W' ? 'Cc W' : code === 'Fo R' ? 'Cc R' : code);
  return actionsArray.map((a) =>
    a.type === 'simple'
      ? { ...a, code: swap(a.code) }
      : { ...a, code1: swap(a.code1), code2: swap(a.code2) }
  );
}

/**
 * Construit le contenu pdfmake (stack vertical) de la case "actions", en
 * poussant les images utilisées dans cheminsImagesActions.
 */
function buildActionsCellContent(actionsArray) {
  const items = actionsArray.map((a) => {
    if (a.type === 'simple') {
      const chemin = `img/${a.code}.jpg`;
      cheminsImagesActions.push(chemin);
      return { image: chemin, width: cm(0.9), alignment: 'center' };
    }
    // linked : image - flèche - image, sur une même ligne
    const chemin1 = `img/${a.code1}.jpg`;
    const chemin2 = `img/${a.code2}.jpg`;
    cheminsImagesActions.push(chemin1, 'img/fleche.jpg', chemin2);
    return {
      columns: [
        { image: chemin1, width: cm(0.7) },
        { image: 'img/fleche.jpg', width: cm(0.5) },
        { image: chemin2, width: cm(0.7) },
      ],
      columnGap: 2,
    };
  });
  return { stack: items, alignment: 'center' };
}

// ---------------------------------------------------------------------
// 3. CAPACITÉS DE CHASSIS (reproduit exactement le switch(cid.length) original)
// ---------------------------------------------------------------------
function computeChassisTexts(cid, language) {
  // on retourne {chs1, chs2, chs3} + de quel cid chaque case provient (pour 'removeclass'/'changeChassis')
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
    // nbrOfEffects === 0 : tout reste vide
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

/** Reproduit removeElementsByClass(className) : on vide la case chsX si elle vient du chassis visé */
function applyRemoveClassToChassis(chassisTexts, chassisFrom, chassisIdVise) {
  ['chs1', 'chs2', 'chs3'].forEach((k) => {
    if (chassisFrom[k] === chassisIdVise) chassisTexts[k] = '';
  });
}

/** Reproduit changeChassis : remplace le texte de la case chsX visée par une nouvelle valeur */
function applyChangeChassis(chassisTexts, chassisFrom, chassisIdVise, nouveauTexte) {
  ['chs1', 'chs2', 'chs3'].forEach((k) => {
    if (chassisFrom[k] === chassisIdVise) chassisTexts[k] = nouveauTexte;
  });
}

// ---------------------------------------------------------------------
// 4. STATS DU VAISSEAU (attaque x1-2, agilité, coque, bouclier)
// ---------------------------------------------------------------------
function buildStatsCellContent(sid) {
  const lignes = [];

  lignes.push({
    columns: [
      { text: String(ships[sid]['attack'][0][1]), style: 'attackText' },
      { image: `img/attack${ships[sid]['attack'][0][0]}.jpg`, width: cm(0.5) },
    ],
    columnGap: 3,
  });

  if (ships[sid]['attack'].length === 2) {
    lignes.push({
      columns: [
        { text: String(ships[sid]['attack'][1][1]), style: 'attackText' },
        { image: `img/attack${ships[sid]['attack'][1][0]}.jpg`, width: cm(0.5) },
      ],
      columnGap: 3,
    });
  }

  lignes.push({
    columns: [
      { text: String(ships[sid]['agility']), style: 'agilityText' },
      { image: 'img/agility.jpg', width: cm(0.5) },
    ],
    columnGap: 3,
  });
  lignes.push({
    columns: [
      { text: String(ships[sid]['hull']), style: 'hullText' },
      { image: 'img/hull.jpg', width: cm(0.5) },
    ],
    columnGap: 3,
  });
  lignes.push({
    columns: [
      { text: String(ships[sid]['shields']), style: 'shieldText' },
      { image: 'img/shield.jpg', width: cm(0.5) },
    ],
    columnGap: 3,
  });

  // NB : img/attackX.jpg, agility.jpg, hull.jpg, shield.jpg font partie de
  // cheminsImagesStats (liste fixe déjà préchargée) -> pas besoin de les
  // repousser dans un tableau de chemins ici.

  return { stack: lignes, alignment: 'center' };
}

// ---------------------------------------------------------------------
// 5. UNE AMÉLIORATION (upgrade) ÉQUIPÉE
// ---------------------------------------------------------------------
/**
 * Construit le contenu d'une case upgrade (logo + nom + charges/force),
 * et retourne aussi les effets de bord (removeclass / changeChassis / add_action / droid)
 * à appliquer sur chassisTexts / actionsArray / droidEquipped.
 *
 * @returns { cellContent: object|null, sideEffects: {...} }
 *          cellContent === null signifie "ne pas afficher de case" (ex: changeChassis)
 */
function buildUpgradeCell(uid, x, context) {
  const items = [
    {
      columns: [
        { image: `img/${upgrades[uid]['slot']}.png`, width: cm(0.5) },
        { text: upgrades[uid]['name_' + language], style: 'upgradeName' },
      ],
      columnGap: 3,
    },
  ];

  let hideCell = false;

  switch (upgrades[uid]['add_Data'][0]) {
    case 'removeclass': // Millenium Falcon
      applyRemoveClassToChassis(context.chassisTexts, context.chassisFrom, upgrades[uid]['add_Data'][1]);
      break;
    case 'changeChassis': // Autopilot Drone
      applyChangeChassis(
        context.chassisTexts,
        context.chassisFrom,
        upgrades[uid]['add_Data'][1],
        upgrades[uid]['add_Data'][2]
      );
      hideCell = true; // équivalent de mdiv.setAttribute('class','toDelete') + removeElementsByClass
      break;
    case 'droid': // tous les pilotes droïdes
      context.droidEquipped = true; // sera appliqué en post-traitement sur les actions
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

  // Charges / force / +/- de l'upgrade lui-même
  const nbrcharge = upgrades[uid]['charge'][0];
  for (let j = 0; j < nbrcharge; j++) {
    items.push({ image: 'img/chargestat.png', width: cm(0.4) });
  }
  if (upgrades[uid]['charge'][1] === '+') {
    items.push({ image: 'img/chargeplus.png', width: cm(0.3) });
  } else if (upgrades[uid]['charge'][1] === '-') {
    items.push({ image: 'img/chargeminus.png', width: cm(0.3) });
  }
  for (let j = 0; j < upgrades[uid]['force']; j++) {
    items.push({ image: 'img/forcestat.png', width: cm(0.4) });
  }

  return hideCell ? null : { stack: items, alignment: 'center' };
}

// ---------------------------------------------------------------------
// 6. TABLEAU COMPLET D'UN PILOTE
// ---------------------------------------------------------------------
function buildPilotTable(x) {
  getPilotData(x);
  const pid = pilotdata[x][0];
  const sid = pilots[pid]['shipId'];
  const cid = ships[sid]['chassis'];

  // -- Faction du pilote
  const factionChemin = `img/${pilots[pid]['faction']}mini.jpg`;
  cheminsImagesPilot.push(factionChemin);

  // -- Chassis (avant les upgrades, car les upgrades peuvent le modifier)
  const { texts: chassisTexts, from: chassisFrom } = computeChassisTexts(cid, language);

  // -- Actions de base du vaisseau
  let actionsArray = buildPilotActionsArray(x);

  // -- Upgrades équipées : on construit les cases ET on applique les effets de bord
  const context = { chassisTexts, chassisFrom, actionsArray, droidEquipped: false };
  const upgradeCells = [];
  for (let i = 0; i < pilotdata[x].length - 1; i++) {
    const uid = pilotdata[x][i + 1];
    upgradeCells.push(buildUpgradeCell(uid, x, context));
  }
  actionsArray = context.actionsArray; // peut avoir été complété par 'add_action'
  actionsArray = applyDroidOverride(actionsArray, context.droidEquipped);
  const actionsCellContent = buildActionsCellContent(actionsArray);

  // -- Charges/force du pilote lui-même, à ajouter au nom ou à l'ability selon ton HTML d'origine
  const pilotForceIcons = Array.from({ length: pilots[pid]['force'] }, () => ({
    image: 'img/forcestat.png',
    width: cm(0.4),
  }));
  const pilotChargeIcons = Array.from({ length: pilots[pid]['charge'][0] }, () => ({
    image: 'img/chargestat.png',
    width: cm(0.4),
  }));
  let pilotChargeEvolutionIcon = null;
  if (pilots[pid]['charge'][1] === '+') pilotChargeEvolutionIcon = { image: 'img/chargeplus.png', width: cm(0.3) };
  if (pilots[pid]['charge'][1] === '-') pilotChargeEvolutionIcon = { image: 'img/chargeminus.png', width: cm(0.3) };

  const abilityContent = [
    { text: parseHtmlToPdfmakeText(pilots[pid]['ability_' + language]) },
    ...pilotChargeIcons,
    ...(pilotChargeEvolutionIcon ? [pilotChargeEvolutionIcon] : []),
  ];

  // -- Largeurs des 8 colonnes (identiques au CSS .squad)
  const widths = [cm(1), cm(0.5), cm(4.8), cm(2.6), cm(3.7), cm(3.8), cm(2), cm(0.6)];

  const body = [];

  // Row A (CSS row1)
  body.push([
    { image: factionChemin, fit: [cm(0.9), cm(0.9)] },
    { text: String(pilots[pid]['skill']), alignment: 'center', style: 'pskill' },
    { text: pilots[pid]['name_' + language], colSpan: 3, style: 'pilotName' }, {}, {},
    { text: ships[sid]['name'], colSpan: 2, style: 'shipName', alignment: 'center' }, {},
    { text: '<span>' + pilots[pid]['points'] + '</span>'.replace(/<[^>]+>/g, ''), alignment: 'center', style: 'cost' },
  ]);
  // NB : pilotForceIcons n'a pas d'emplacement dédié dans ce CSS (le JS les
  // ajoutait sur pilotName) -> on les ajoute à la suite du nom si besoin :
  if (pilotForceIcons.length) {
    body[0][2] = {
      stack: [{ text: pilots[pid]['name_' + language] }, { columns: pilotForceIcons }],
      style: 'pilotName',
      colSpan: 3,
    };
  }

  // Row B (CSS row2, spacer .2cm) : col1-2 & col7-8 = début du rowSpan stat/actions
  body.push([
    { rowSpan: 5, ...buildStatsCellContent(sid), style: 'statsBox' },
    {},
    { text: '', colSpan: 4 }, {}, {}, {},
    { rowSpan: 5, ...actionsCellContent, style: 'actionsBox' },
    {},
  ]);

  // Row C (CSS row3) : ability
  body.push([
    {}, {},
    { stack: abilityContent, colSpan: 4, style: 'abilityDescription' }, {}, {}, {},
    {}, {},
  ]);

  // Row D (CSS row4, spacer .2cm)
  body.push([
    {}, {},
    { text: '', colSpan: 4 }, {}, {}, {},
    {}, {},
  ]);

  // Row E (CSS row5) : upg0 (col3-4) / upg1 (col5-6)
  body.push([
    {}, {},
    upgradeCells[0] ? { ...upgradeCells[0], colSpan: 2 } : { text: '', colSpan: 2 }, {},
    upgradeCells[1] ? { ...upgradeCells[1], colSpan: 2 } : { text: '', colSpan: 2 }, {},
    {}, {},
  ]);

  // Row F (CSS row6, dernière ligne du rowSpan) : upg2 / upg3
  body.push([
    {}, {},
    upgradeCells[2] ? { ...upgradeCells[2], colSpan: 2 } : { text: '', colSpan: 2 }, {},
    upgradeCells[3] ? { ...upgradeCells[3], colSpan: 2 } : { text: '', colSpan: 2 }, {},
    {}, {},
  ]);

  // Row G (CSS row7) : upg4 (col1-3) / upg5 (col4-5) / upg6 (col6-8) -- pleine largeur
  body.push([
    upgradeCells[4] ? { ...upgradeCells[4], colSpan: 3 } : { text: '', colSpan: 3 }, {}, {},
    upgradeCells[5] ? { ...upgradeCells[5], colSpan: 2 } : { text: '', colSpan: 2 }, {},
    upgradeCells[6] ? { ...upgradeCells[6], colSpan: 3 } : { text: '', colSpan: 3 }, {}, {},
  ]);

  // Row H (CSS row8) : upg7 / upg8 / upg9
  body.push([
    upgradeCells[7] ? { ...upgradeCells[7], colSpan: 3 } : { text: '', colSpan: 3 }, {}, {},
    upgradeCells[8] ? { ...upgradeCells[8], colSpan: 2 } : { text: '', colSpan: 2 }, {},
    upgradeCells[9] ? { ...upgradeCells[9], colSpan: 3 } : { text: '', colSpan: 3 }, {}, {},
  ]);

  // Row I (CSS row11) : chs1, pleine largeur
  body.push([
    { text: parseHtmlToPdfmakeText(chassisTexts.chs1), colSpan: 8, alignment: 'center', style: 'chassisText' },
    {}, {}, {}, {}, {}, {}, {},
  ]);

  // Row J (CSS row12) : chs2 (col1-4) / chs3 (col5-8)
  body.push([
    { text: parseHtmlToPdfmakeText(chassisTexts.chs2), colSpan: 4, style: 'chassisText' }, {}, {}, {},
    { text: parseHtmlToPdfmakeText(chassisTexts.chs3), colSpan: 4, style: 'chassisText' }, {}, {}, {},
  ]);

  return {
    table: {
      widths,
      heights: (rowIndex) => {
        const fixed = { 1: cm(0.2), 3: cm(0.2), 4: cm(1.5), 5: cm(1.5), 6: cm(1.5), 7: cm(1.5) };
        if (fixed[rowIndex] !== undefined) return fixed[rowIndex];
        if (rowIndex === 8 && !chassisTexts.chs1) return 0;
        if (rowIndex === 9 && !chassisTexts.chs2 && !chassisTexts.chs3) return 0;
        return 'auto';
      },
      body,
    },
    layout: 'noBorders',
    margin: [0, 0, 0, cm(0.3)],
  };
}

// ---------------------------------------------------------------------
// 7. ORCHESTRATION : construit le document complet
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
    pageMargins: [cm(1), cm(1), cm(1), cm(1)],
    content,
    styles: {
      leaderName: { fontSize: 12, bold: true },
      competenceText: { fontSize: 8, italics: true },
      pilotName: { fontSize: 10, bold: true },
      shipName: { fontSize: 9 },
      pskill: { fontSize: 14, bold: true },
      cost: { fontSize: 11, bold: true },
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

/** À appeler depuis le bouton PRINT, à la place de html2pdf().set(opt).from(element).save(); */
async function genererPdfDepuisApp() {
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
  // On remplace les chemins par leur base64 directement dans docDefinition
  const docDefinitionResolved = JSON.parse(
    JSON.stringify(docDefinition, (key, value) => {
      if (key === 'image' && typeof value === 'string' && imagesBase64[value]) {
        return imagesBase64[value];
      }
      return value;
    })
  );
  pdfMake.createPdf(docDefinitionResolved).download(
    leaders[lID]['leadername_' + language] + '.pdf'
  );
}
