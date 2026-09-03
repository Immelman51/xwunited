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
  if (!reponse.ok) {
    throw new Error(
      `[chargerPoliceXWingIcons] Impossible de récupérer XWingIcons.ttf (HTTP ${reponse.status}). ` +
        `Vérifie le chemin utilisé dans le fetch() de cette fonction : le fichier doit être exactement à cet endroit sur ton serveur.`
    );
  }
  const buffer = await reponse.arrayBuffer();

  // Vérifie que le contenu récupéré est bien un fichier TTF (et pas, par
  // exemple, une page d'erreur HTML renvoyée par le serveur avec un code 200).
  // Un TTF valide commence par l'un de ces 4 octets magiques.
  const magiques = [
    [0x00, 0x01, 0x00, 0x00], // TrueType classique
    [0x4f, 0x54, 0x54, 0x4f], // "OTTO" (OpenType/CFF)
    [0x74, 0x72, 0x75, 0x65], // "true"
    [0x74, 0x74, 0x63, 0x66], // "ttcf" (collection)
  ];
  const premiers = new Uint8Array(buffer.slice(0, 4));
  const estValide = magiques.some((sig) => sig.every((octet, i) => premiers[i] === octet));
  if (!estValide) {
    throw new Error(
      `[chargerPoliceXWingIcons] Le fichier récupéré à l'URL "XWingIcons.ttf" n'est pas un fichier de police valide ` +
        `(en-tête inattendu : ${Array.from(premiers).join(', ')}). Le fetch a probablement récupéré une page d'erreur ` +
        `au lieu du vrai fichier — vérifie le chemin.`
    );
  }

  const base64 = arrayBufferToBase64(buffer);

  pdfMake.vfs['XWingIcons.ttf'] = base64;

  // On mappe les 4 variantes (normal/bold/italics/bolditalics) vers le MÊME
  // fichier : la police n'a qu'une seule graisse, donc même un texte en gras
  // autour de l'icône affichera le même glyphe (pas de gras artificiel).
  // IMPORTANT : sur cette version de pdfmake, `pdfMake.fonts` n'est pas
  // pré-rempli avec Roboto par défaut (Roboto est géré en interne tant qu'on
  // ne touche pas à `pdfMake.fonts`). Si on se contente de faire
  // `pdfMake.fonts = pdfMake.fonts || {}`, on crée un objet VIDE la première
  // fois, et Roboto disparaît complètement du document -> erreur
  // "Font 'Roboto' ... is not defined". On déclare donc les deux polices.
  pdfMake.fonts = {
    ...(pdfMake.fonts || {}),
    Roboto: (pdfMake.fonts && pdfMake.fonts.Roboto) || {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf',
    },
  };
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
