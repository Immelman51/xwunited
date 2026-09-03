/**
 * integration_police_xwing.js
 * ----------------------------------------------------------------
 * Intègre la police custom XWingIcons.ttf (générée à partir de tes icônes
 * PNG/JPG vectorisées) dans pdfmake, et adapte le parseur HTML pour que les
 * balises <img> dans les textes de compétence/effet deviennent des
 * caractères de cette police au lieu de tenter d'insérer une image (ce qui
 * ne fonctionne pas de façon fiable dans un texte qui doit passer à la ligne).
 *
 * ORDRE DE CHARGEMENT DANS TON HTML (à ajouter/adapter) :
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/pdfmake.min.js"></script>
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.9/vfs_fonts.js"></script>
 *   <script src="xwing_icon_font_map.js"></script>   <!-- table de correspondance -->
 *   <script src="integration_police_xwing.js"></script>  <!-- CE FICHIER -->
 *   <script src="xwing-pdf-example.js"></script>
 *   <script src="print_squad_pdfmake.js"></script>
 *   <script src="print_squad.js"></script>
 *
 * Le fichier XWingIcons.ttf doit être accessible par HTTP à la racine de ton
 * site (ou adapte le chemin dans le fetch ci-dessous).
 */

// ---------------------------------------------------------------------
// 1. Enregistrement de la police custom dans pdfmake
// ---------------------------------------------------------------------
/**
 * Charge XWingIcons.ttf, l'enregistre dans le système de fichiers virtuel de
 * pdfmake (vfs) et déclare la police auprès de pdfMake.fonts. À appeler une
 * fois au démarrage de l'appli, avant toute génération de PDF (ex: dans le
 * même bloc async que le chargement de ships.json/pilots.json etc.).
 */
let _policeXWingIconsChargee = false;

async function chargerPoliceXWingIcons() {
  if (_policeXWingIconsChargee) return;

  const reponse = await fetch('XWingIcons.ttf');
  const buffer = await reponse.arrayBuffer();
  const base64 = arrayBufferToBase64(buffer);

  pdfMake.vfs['XWingIcons.ttf'] = base64;

  // On mappe les 4 variantes (normal/bold/italics/bolditalics) vers le MÊME
  // fichier : la police n'a qu'une seule graisse, donc même un texte en gras
  // autour de l'icône affichera le même glyphe (pas de gras artificiel).
  pdfMake.fonts = pdfMake.fonts || {};
  pdfMake.fonts.XWingIcons = {
    normal: 'XWingIcons.ttf',
    bold: 'XWingIcons.ttf',
    italics: 'XWingIcons.ttf',
    bolditalics: 'XWingIcons.ttf',
  };

  _policeXWingIconsChargee = true;
}

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// ---------------------------------------------------------------------
// 2. parseHtmlToPdfmakeText
// ---------------------------------------------------------------------
// La fonction parseHtmlToPdfmakeText a été mise à jour DIRECTEMENT dans
// xwing-pdf-example.js (pour éviter d'avoir 2 définitions concurrentes selon
// l'ordre de chargement des scripts) : elle convertit maintenant les <img>
// en caractères de la police XWingIcons via XWING_ICON_FONT_MAP, au lieu
// d'images. Rien à faire ici en plus.
