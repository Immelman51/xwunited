/**
 * Exemple de génération de liste d'escadron X-Wing avec pdfmake
 * ----------------------------------------------------------------
 * Installation :
 *   npm install pdfmake
 *
 * Ce fichier montre :
 *  1. Un helper de conversion cm -> points (pdfmake travaille en points)
 *  2. Le tableau "leader" (2 lignes x 5 colonnes)
 *  3. Une fonction générique buildPilotTable() qui reproduit la structure
 *     à 8 colonnes / 11 lignes que tu as décrite, avec :
 *       - la case "stats" (col 1-2) et "actions" (col 7-8) en rowSpan
 *         sur les lignes 3 à 6
 *       - les lignes d'équipement conditionnelles (jusqu'à 11 slots,
 *         par lots de 3, hauteur 0 si le slot est vide)
 *       - les 2 lignes de description de capacité du chassis en pleine largeur
 *
 * ATTENTION : la gestion des hauteurs de ligne (`heights`) via une fonction
 * dépend de la version de pdfmake installée. Si ta version ne supporte pas
 * heights sous forme de fonction, remplace-la par un tableau de valeurs
 * fixes (voir commentaire plus bas) ou force la hauteur via les marges
 * verticales des cellules (margin: [gauche, haut, droite, bas]).
 */

const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require('pdfmake/build/vfs_fonts');
pdfMake.vfs = pdfFonts.pdfMake.vfs;


  
].filter(Boolean);
// ---------------------------------------------------------------------
// 1. Helper de conversion : 1 cm = 28.3465 points
// ---------------------------------------------------------------------
const cm = (valeurCm) => valeurCm * 28.3465;

// ---------------------------------------------------------------------
// 2. Table "leader" : 2 lignes x 5 colonnes, largeur totale 18,9 cm
// ---------------------------------------------------------------------
function buildLeaderTable(leader) {
  // largeurs : 1 + 1.5 + 1.5 + 7.45 + 7.45 = 18.9 cm
  const widths = [cm(1), cm(1.5), cm(1.5), cm(7.45), cm(7.45)];

  return {
    table: {
      widths,
      heights: (rowIndex) => (rowIndex === 0 ? cm(1) : 'auto'),
      body: [
        // Ligne 1 : icônes factions (1, 2, 3) + nom du leader (colSpan 2)
        [
          { image: leader.factionImg1, width: cm(0.8), fit: [cm(0.8), cm(0.8)] },
          { image: leader.factionImg2, width: cm(1.2), fit: [cm(1.2), cm(1.2)] },
          { image: leader.factionImg3, width: cm(1.2), fit: [cm(1.2), cm(1.2)] },
          { text: leader.nom, colSpan: 2, style: 'leaderName', alignment: 'center' },
          {}, // cellule fusionnée (colSpan 2 ci-dessus)
        ],
        // Ligne 2 : compétence (colSpan 4) + marqueurs de charge
        [
          { text: leader.competence, colSpan: 4, style: 'competenceText' },
          {},
          {},
          {},
          buildChargeMarkersCell(leader.nbMarqueursCharge),
        ],
      ],
    },
    layout: 'noBorders', // remplace par ton propre layout (bordures custom) si besoin
  };
}

// Petite grille interne pour empiler plusieurs icônes de marqueur de charge
function buildChargeMarkersCell(nb) {
  const icones = Array.from({ length: nb }, () => ({
    image: 'chargeMarkerIcon',
    width: cm(0.4),
  }));
  return {
    stack: icones,
    alignment: 'center',
  };
}

// ---------------------------------------------------------------------
// 3. Table "pilote" : 8 colonnes, structure décrite dans le message
// ---------------------------------------------------------------------
function buildPilotTable(pilot) {
  // Largeurs des 8 colonnes (en cm, telles que tu les as données)
  const widths = [
    cm(1), cm(0.5), cm(4.8), cm(2.6), cm(3.7), cm(3.8), cm(2), cm(0.6),
  ];

  const equipements = pilot.equipements || []; // tableau jusqu'à 11 éléments

  const body = [];

  // --- Ligne 1 : faction / initiative / nom pilote (colSpan3) / nom vaisseau (colSpan2) / coût
  body.push([
    { image: pilot.factionImg, fit: [cm(0.9), cm(0.9)] },
    { text: String(pilot.initiative), alignment: 'center' },
    { text: pilot.nom, colSpan: 3, style: 'pilotName' }, {}, {},
    { text: pilot.vaisseau, colSpan: 2, style: 'shipName' }, {},
    { text: String(pilot.cout), alignment: 'center' },
  ]);

  // --- Ligne 2 : spacer 0,2 cm (pleine largeur)
  body.push(spacerRow(8));

  // --- Ligne 3 : stats (rowSpan 4, col1-2) / description compétence (colSpan4, col3-6) / actions (rowSpan4, col7-8)
  body.push([
    { text: pilot.statsText || '', rowSpan: 4, style: 'statsBox' },
    {},
    { text: pilot.descriptionCompetence || '', colSpan: 4, style: 'abilityDescription' },
    {}, {}, {},
    { text: pilot.actionsText || '', rowSpan: 4, style: 'actionsBox' },
    {},
  ]);

  // --- Ligne 4 : spacer 0,2 cm, mais col1-2 et col7-8 = continuation du rowSpan -> cellules vides {}
  body.push([
    {}, {},
    { text: '', colSpan: 4 }, {}, {}, {},
    {}, {},
  ]);

  // --- Ligne 5 : équipements 1 et 2 (hauteur 1,6 cm), col1-2/7-8 = suite du rowSpan
  body.push([
    {}, {},
    equipmentCell(equipements[0], 2), {},
    equipmentCell(equipements[1], 2), {},
    {}, {},
  ]);

  // --- Ligne 6 : spacer variable, col1-2/7-8 = fin du rowSpan
  body.push([
    {}, {},
    { text: '', colSpan: 4 }, {}, {}, {},
    {}, {},
  ]);

  // --- Lignes 7, 8, 9 : équipements 3-5, 6-8, 9-11 (pleine largeur, plus de stats/actions séparées)
  // Chaque ligne : colSpan3 / colSpan2 / colSpan3, hauteur 0 si le slot n'existe pas
  for (const startIdx of [2, 5, 8]) {
    const e1 = equipements[startIdx];
    const e2 = equipements[startIdx + 1];
    const e3 = equipements[startIdx + 2];
    const ligneVide = !e1 && !e2 && !e3;

    body.push([
      equipmentCell(e1, 3, ligneVide), {}, {},
      equipmentCell(e2, 2, ligneVide), {},
      equipmentCell(e3, 3, ligneVide), {}, {},
    ]);
  }

  // --- Ligne 10 : description capacité chassis n°1 (pleine largeur, centré)
  body.push(fullWidthRow(pilot.capaciteChassis1, 8, 'center'));

  // --- Ligne 11 : description capacité chassis n°2 (pleine largeur)
  body.push(fullWidthRow(pilot.capaciteChassis2, 8, 'left'));

  return {
    table: {
      widths,
      // hauteurs fixes pour les lignes qui en ont besoin, 'auto' pour les variables
      // NB : si ta version de pdfmake ne supporte pas heights en fonction,
      // remplace par un tableau : [ 'auto', cm(0.2), 'auto', cm(0.2), cm(1.6), 'auto',
      //                             (equip 3-5 vide ? 0 : cm(1.6)), ... ]
      heights: (rowIndex) => {
        const fixedHeights = {
          1: cm(0.2), // ligne 2 (index 1) : spacer
          4: cm(1.6), // ligne 5 (index 4) : équipements 1-2
        };
        if (fixedHeights[rowIndex] !== undefined) return fixedHeights[rowIndex];
        // lignes 7,8,9 (index 6,7,8) -> 1.6cm ou 0 si vide
        if ([6, 7, 8].includes(rowIndex)) {
          const idx = [2, 5, 8][rowIndex - 6];
          const vide = !equipements[idx] && !equipements[idx + 1] && !equipements[idx + 2];
          return vide ? 0 : cm(1.6);
        }
        return 'auto';
      },
      body,
    },
    layout: 'noBorders',
    margin: [0, 0, 0, cm(0.3)], // petit espace entre deux tableaux pilotes
  };
}

function equipmentCell(equip, colSpan, forceEmpty = false) {
  if (forceEmpty || !equip) return { text: '', colSpan };
  return {
    columns: [
      { image: equip.logo, width: cm(0.6) },
      { text: equip.nom, style: 'equipmentName' },
    ],
    colSpan,
  };
}

function spacerRow(nbColonnes) {
  const row = [{ text: '', colSpan: nbColonnes }];
  for (let i = 1; i < nbColonnes; i++) row.push({});
  return row;
}

function fullWidthRow(texte, nbColonnes, alignment) {
  const row = [{ text: texte || '', colSpan: nbColonnes, alignment }];
  for (let i = 1; i < nbColonnes; i++) row.push({});
  return row;
}

// ---------------------------------------------------------------------
// 3bis. Conversion d'une image (chemin ou URL) en base64, côté navigateur
// ---------------------------------------------------------------------
/**
 * Charge une image depuis une URL/chemin relatif (ex: "img/leaderfaction1.jpg")
 * et retourne une Promise qui résout avec la chaîne base64 au format
 * "data:image/jpeg;base64,...." exploitable directement par pdfmake.
 */
function loadImageAsBase64(cheminImage) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous'; // utile si les images sont servies depuis un autre domaine/CDN
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      // 'image/png' fonctionne aussi pour des sources jpg, mais le plus fidèle
      // est de garder le même format que le fichier d'origine :
      const mime = cheminImage.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';
      resolve(canvas.toDataURL(mime));
    };
    img.onerror = (err) => reject(err);
    img.src = cheminImage;
  });
}

/**
 * Précharge toutes les images utilisées par une liste d'escadron et retourne
 * un objet { cheminOriginal: base64 } pour pouvoir remplacer facilement
 * les chemins dans tes données avant de construire le docDefinition.
 */
async function preloadImages(cheminsImages /* tableau de chemins, ex: ['img/leaderfaction1.jpg', ...] */) {
  const entrees = await Promise.all(
    cheminsImages.map(async (chemin) => [chemin, await loadImageAsBase64(chemin)])
  );
  return Object.fromEntries(entrees);
}

// ---------------------------------------------------------------------
// 4. Exemple d'assemblage du document complet (jusqu'à 8 tableaux pilotes)
// ---------------------------------------------------------------------
function buildDocDefinition(leader, pilotes /* max 8 */) {
  const content = [buildLeaderTable(leader)];
  pilotes.slice(0, 8).forEach((pilot) => {
    content.push(buildPilotTable(pilot));
  });

  return {
    pageSize: 'A4',
    pageMargins: [cm(1), cm(1), cm(1), cm(1)],
    content,
    styles: {
      leaderName: { fontSize: 12, bold: true },
      competenceText: { fontSize: 8, italics: true },
      pilotName: { fontSize: 10, bold: true },
      shipName: { fontSize: 9 },
      statsBox: { fontSize: 8, alignment: 'center' },
      actionsBox: { fontSize: 8, alignment: 'center' },
      abilityDescription: { fontSize: 8 },
      equipmentName: { fontSize: 7 },
    },
  };
}

// ---------------------------------------------------------------------
// 5. Génération et téléchargement (côté navigateur)
// ---------------------------------------------------------------------
async function genererEtTelecharger(leaderData, pilotesData) {
  // 1. Récupérer tous les chemins d'images utilisés dans tes données (already done : cheminsImages is defined and filled in print_squad.js )


  // 2. Les convertir toutes en base64 en une fois
  const imagesBase64 = await preloadImages(cheminsImages);

  // 3. Remplacer les chemins par les base64 correspondants dans une copie des données
  const leader = {
    ...leaderData,
    factionImg1: imagesBase64[leaderData.factionImg1],
    factionImg2: imagesBase64[leaderData.factionImg2],
    factionImg3: imagesBase64[leaderData.factionImg3],
  };
  const pilotes = pilotesData.map((p) => ({
    ...p,
    factionImg: imagesBase64[p.factionImg],
    equipements: (p.equipements || []).map((e) => ({
      ...e,
      logo: imagesBase64[e.logo],
    })),
  }));

  // 4. Construire et télécharger le PDF
  const docDefinition = buildDocDefinition(leader, pilotes);
  pdfMake.createPdf(docDefinition).download('liste-escadron.pdf');
}

module.exports = { buildDocDefinition, genererEtTelecharger, loadImageAsBase64, preloadImages, cm };
