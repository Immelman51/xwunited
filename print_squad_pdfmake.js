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
  // NB : on ne gère ici qu'une image de faction affichée (colonne 1, 1cm)
  // comme décrit dans la nouvelle grille. Si plusieurs images de faction
  // existent, on les empile verticalement dans cette même colonne.

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
    text: [
      { text: leaderName + ' ', style: 'leaderName' },
      ...(chargeImgPath
        ? Array.from({ length: nbrOfLeaderCharges }, () => ({ image: chargeImgPath, width: cm(0.8) }))
        : []),
    ],
    alignment: 'center',
  };

  // 18 colonnes : 17 de 1cm + 1 de 2cm (= 19cm au total)
  const widths = [...Array(17).fill(cm(1)), cm(2)];

  return {
    table: {
      widths,
      heights: [cm(1.5), cm(1.5)], // ligne 1-3 (1,5cm) puis ligne 4-6 (1,5cm)
      body: [
        // Ligne 1-3 : [faction (1 col)] [nom + charges (17 col)]
        [
          factionImgs[0]
            ? { stack: factionImgs.map((c) => ({ image: c, width: cm(0.9) })) }
            : {},
          { ...celluleLargeurFixe(nomEtCharges, 17), colSpan: 17 },
          ...Array(16).fill({}),
        ],
        // Ligne 4-6 : compétence, pleine largeur (18 col)
        [
          {
            ...celluleLargeurFixe(
              {
                text: parseHtmlToPdfmakeText(leaders[lID]['leaderability_' + language]),
                style: 'competenceText',
                alignment: 'center',
              },
              18
            ),
            colSpan: 18,
          },
          ...Array(17).fill({}),
        ],
      ],
    },
    layout: LAYOUT_SANS_PADDING,
    margin: [0, 0, 0, cm(1)], // 2 lignes vides (1cm) avant le 1er pilote
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
 * Construit le contenu pdfmake d'UNE seule action (occupe désormais 1 seule
 * ligne/colonne dans la nouvelle grille, plus de stack ni de rowSpan).
 */
function buildSingleActionCell(action) {
  if (!action) return { text: '' };
  if (action.type === 'simple') {
    const chemin = `img/${action.code}.jpg`;
    cheminsImagesActions.push(chemin);
    return { image: chemin, fit: [cm(0.45), cm(0.45)], alignment: 'center' };
  }
  // linked : image - flèche - image, sur une même ligne
  const chemin1 = `img/${action.code1}.jpg`;
  const chemin2 = `img/${action.code2}.jpg`;
  cheminsImagesActions.push(chemin1, 'img/fleche.jpg', chemin2);
  return {
    columns: [
      { image: chemin1, fit: [cm(0.28), cm(0.28)] },
      { image: 'img/fleche.jpg', fit: [cm(0.2), cm(0.2)] },
      { image: chemin2, fit: [cm(0.28), cm(0.28)] },
    ],
    columnGap: 1,
  };
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
// 4. STATS DU VAISSEAU (attaque x1-2, agilité, coque, bouclier) — une par ligne
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
  return stats; // 4 ou 5 éléments selon si le vaisseau a 1 ou 2 valeurs d'attaque
}

function buildSingleStatCell(stat) {
  if (!stat) return { text: '' };
  return {
    columns: [
      { text: String(stat.valeur), style: stat.style },
      { image: stat.chemin, fit: [cm(0.35), cm(0.35)] },
    ],
    columnGap: 2,
  };
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
  const columnItems = [
    { image: `img/${upgrades[uid]['slot']}.png`, width: cm(0.5) },
    { text: upgrades[uid]['name_' + language], style: 'upgradeName', width: '*' },
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

  // Charges / force / +/- de l'upgrade lui-même, sur la MÊME ligne, à la suite
  const nbrcharge = upgrades[uid]['charge'][0];
  for (let j = 0; j < nbrcharge; j++) {
    columnItems.push({ image: 'img/chargestat.png', width: cm(0.4) });
  }
  if (upgrades[uid]['charge'][1] === '+') {
    columnItems.push({ image: 'img/chargeplus.png', width: cm(0.3) });
  } else if (upgrades[uid]['charge'][1] === '-') {
    columnItems.push({ image: 'img/chargeminus.png', width: cm(0.3) });
  }
  for (let j = 0; j < upgrades[uid]['force']; j++) {
    columnItems.push({ image: 'img/forcestat.png', width: cm(0.4) });
  }

  return hideCell ? null : { columns: columnItems, columnGap: 3, alignment: 'left' };
}

// ---------------------------------------------------------------------
// 6. TABLEAU COMPLET D'UN PILOTE — grille fixe 19 colonnes x 1cm
// ---------------------------------------------------------------------
/**
 * Répartit les capacités de chassis et les upgrades dans les emplacements
 * fixes de la ligne 7-9 (2 emplacements larges) et des lignes 10-12/13-15
 * (3+3 emplacements plus étroits).
 *
 * Règle : si une seule capacité de chassis existe (chs1 seul), elle occupe
 * TOUTE la ligne 7-9 (les 2 emplacements réunis, colSpan 16). Si deux
 * capacités existent (chs2+chs3), elles occupent chacune un emplacement
 * (comme avant). Dans les deux cas, les upgrades commencent alors en
 * ligne 10-12 (6 emplacements disponibles pour elles).
 * Si aucune capacité de chassis, les 2 emplacements de la ligne 7-9
 * accueillent les 2 premières upgrades (8 emplacements disponibles au total).
 */
function buildEquipmentLayout(chassisTexts, upgradeCells) {
  const validUpgrades = upgradeCells.filter(Boolean);
  const chassisItem = (texte) => ({
    text: parseHtmlToPdfmakeText(texte),
    style: 'chassisText',
    alignment: 'center',
  });

  let ligne7_9;
  let upgradesRestantes;

  if (chassisTexts.chs1) {
    // 1 seule capacité : occupe les 2 emplacements réunis
    ligne7_9 = { type: 'unique', content: chassisItem(chassisTexts.chs1) };
    upgradesRestantes = validUpgrades.slice(0, 6);
  } else if (chassisTexts.chs2 || chassisTexts.chs3) {
    // 2 capacités : 1 par emplacement
    ligne7_9 = {
      type: 'paire',
      a: chassisTexts.chs2 ? chassisItem(chassisTexts.chs2) : null,
      b: chassisTexts.chs3 ? chassisItem(chassisTexts.chs3) : null,
    };
    upgradesRestantes = validUpgrades.slice(0, 6);
  } else {
    // Aucune capacité de chassis : les upgrades occupent aussi ces 2 emplacements
    ligne7_9 = { type: 'paire', a: validUpgrades[0] || null, b: validUpgrades[1] || null };
    upgradesRestantes = validUpgrades.slice(2, 8);
  }

  return { ligne7_9, emplacementsBas: upgradesRestantes }; // jusqu'à 6 upgrades pour ligne10-12 + 13-15
}

/**
 * Contournement d'un bug connu de pdfmake : dans une ligne de tableau qui
 * mélange une cellule en rowSpan (notre barre stats/actions) et une autre
 * en colSpan (notre texte de compétence/chassis), le calcul de la largeur
 * disponible pour le retour à la ligne du texte colSpan peut être faux.
 * On force la largeur exacte via un mini-tableau imbriqué à 1 colonne.
 */
/** Layout sans bordure NI padding, pour un contrôle précis des hauteurs/largeurs sur nos tableaux imbriqués. */
const LAYOUT_SANS_PADDING = {
  hLineWidth: () => 0,
  vLineWidth: () => 0,
  paddingLeft: () => 0,
  paddingRight: () => 0,
  paddingTop: () => 0,
  paddingBottom: () => 0,
};

function ligneLargeurFixe(cellules, largeursCm) {
  return {
    table: {
      widths: largeursCm.map(cm),
      body: [cellules],
    },
    layout: LAYOUT_SANS_PADDING,
  };
}
function celluleLargeurFixe(contenu, largeurCm) {
  return ligneLargeurFixe([contenu], [largeurCm]);
}
/** Empile plusieurs éléments verticalement (une ligne interne par élément), largeur fixe. */
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
  console.log(`[diagnostic] Pilote index ${x} (pid=${pid}) : actionsArray =`, JSON.stringify(actionsArray));
  if (actionsArray.length > 6) {
    console.warn(
      `[buildPilotTable] pilote index ${x} : ${actionsArray.length} actions à afficher mais seulement 6 emplacements disponibles.`
    );
  }

  // -- Charges/force du pilote, affichés à côté de sa compétence
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

  const abiliteEtMarqueurs = {
    stack: [
      { text: parseHtmlToPdfmakeText(pilots[pid]['ability_' + language]) },
      ...(pilotChargeIcons.length || pilotForceIcons.length || pilotChargeEvolutionIcon
        ? [
            {
              columns: [
                ...pilotChargeIcons,
                ...(pilotChargeEvolutionIcon ? [pilotChargeEvolutionIcon] : []),
                ...pilotForceIcons,
              ],
              alignment: 'center',
            },
          ]
        : []),
    ],
  };

  const nomEtVaisseau = {
    text: [
      { text: pilots[pid]['name_' + language] + '  ', style: 'pilotName' },
      { text: ships[sid]['name'], style: 'shipName' },
    ],
  };

  const statsList = buildStatsList(sid); // 4 ou 5 éléments
  const { ligne7_9, emplacementsBas } = buildEquipmentLayout(chassisTexts, upgradeCells);
  const emptyCell = () => ({ text: '' });

  // 18 colonnes : 17 de 1cm + 1 de 2cm
  const widths = [...Array(17).fill(cm(1)), cm(2)];

  const body = [];

  // Ligne 1 (1cm) : faction / skill / nom+vaisseau (15col) / cout
  body.push([
    { image: factionChemin, fit: [cm(0.9), cm(0.9)] },
    { text: String(pilots[pid]['skill']), alignment: 'center', style: 'pskill' },
    { ...nomEtVaisseau, colSpan: 15 },
    ...Array(14).fill({}),
    { text: String(pilots[pid]['points']), alignment: 'center', style: 'cost' },
  ]);

  // Bloc "lignes 2-4" (1.5cm, UNE SEULE ligne extérieure) : aucun rowSpan nulle part.
  // stat/action = mini-tableaux empilés (3 lignes internes de 0,5cm) ; compétence = colSpan seul.
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
    statBlockHaut,
    { ...celluleLargeurFixe(abiliteEtMarqueurs, 16), colSpan: 16, style: 'abilityDescription' },
    ...Array(15).fill({}),
    actionBlockHaut,
  ]);

  // Bloc "lignes 5-7" (1.5cm, UNE SEULE ligne extérieure) : stat/action empilés, chassis-ou-upgrades = colSpan seul.
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
      ? [{ ...celluleLargeurFixe(ligne7_9.content, 16), colSpan: 16 }, ...Array(15).fill({})]
      : [
          ligne7_9.a ? { ...celluleLargeurFixe(ligne7_9.a, 8), colSpan: 8 } : { ...emptyCell(), colSpan: 8 },
          ...Array(7).fill({}),
          ligne7_9.b ? { ...celluleLargeurFixe(ligne7_9.b, 8), colSpan: 8 } : { ...emptyCell(), colSpan: 8 },
          ...Array(7).fill({}),
        ];
  body.push([statBlockBas, ...ligneMilieu5, actionBlockBas]);

  // Lignes 8-9 (1,5cm chacune, ou 0 si vide) : 3 emplacements upgrades (6/6/7col)
  body.push([
    {
      ...ligneLargeurFixe(
        [emplacementsBas[0] || emptyCell(), emplacementsBas[1] || emptyCell(), emplacementsBas[2] || emptyCell()],
        [6, 6, 7]
      ),
      colSpan: 18,
    },
    ...Array(17).fill({}),
  ]);
  body.push([
    {
      ...ligneLargeurFixe(
        [emplacementsBas[3] || emptyCell(), emplacementsBas[4] || emptyCell(), emplacementsBas[5] || emptyCell()],
        [6, 6, 7]
      ),
      colSpan: 18,
    },
    ...Array(17).fill({}),
  ]);

  return {
    table: {
      widths,
      heights: [
        cm(1), // ligne 1
        cm(1.5), // lignes 2-4 (bloc unique)
        cm(1.5), // lignes 5-7 (bloc unique)
        emplacementsBas.length > 0 ? cm(1.5) : 0, // ligne 8
        emplacementsBas.length > 3 ? cm(1.5) : 0, // ligne 9
      ],
      body,
    },
    layout: LAYOUT_SANS_PADDING,
    margin: [0, 0, 0, cm(1)], // 2 lignes vides (1cm) avant le pilote suivant
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
    pageMargins: [cm(1), cm(1.35), cm(1), cm(1.35)],
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
  /**
   * Parcourt récursivement le docDefinition et remplace chaque chemin
   * d'image par son équivalent base64. Si l'image est introuvable, on
   * remplace l'OBJET ENTIER (pas juste la clé "image") par un élément
   * neutre valide ({text:''}) : laisser un objet {width:...} sans image
   * associée n'est pas une structure reconnue par pdfmake et fait planter
   * le rendu (et corrompt potentiellement le texte autour).
   */
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

  // -- DIAGNOSTIC : on compare la largeur réelle de chaque tableau à la
  // largeur de page disponible, pour repérer précisément un dépassement.
  window.__lastDocDefinition = docDefinitionResolved; // consultable dans la console
  const A4WidthPt = 595.28;
  const contentWidthPt =
    A4WidthPt - docDefinitionResolved.pageMargins[0] - docDefinitionResolved.pageMargins[2];
  console.log(`[diagnostic] Largeur de contenu disponible : ${contentWidthPt.toFixed(2)}pt (${(contentWidthPt / 28.3465).toFixed(2)}cm)`);
  docDefinitionResolved.content.forEach((item, i) => {
    if (item.table && item.table.widths) {
      const total = item.table.widths.reduce((a, b) => a + b, 0);
      const depasse = total > contentWidthPt;
      console.log(
        `[diagnostic] Tableau #${i} : largeur totale = ${total.toFixed(2)}pt (${(total / 28.3465).toFixed(2)}cm)` +
          (depasse ? `  ⚠️ DÉPASSE de ${(total - contentWidthPt).toFixed(2)}pt` : '')
      );
    }
  });

  pdfMake.createPdf(docDefinitionResolved).download(
    leaders[lID]['leadername_' + language] + '.pdf'
  );
}
