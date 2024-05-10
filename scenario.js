// Object to store translations
const translations = {
    skirmish_title: {
        FRA: "<h1>L'Escarmouche</h1>",
        ENG: "<h1>The Skirmish</h1>",
        },
    skirmish_description: {
        FRA: "<h2>Setup</h2>Au centre du tapis de jeu (Portée 4,5 de chaque bord), placez un carton de petit vaisseau sans sa base. Il représente une tourelle automatique. Chaque joueur peut en prendre le controle en effectuant une action de Scénario à portée 0-1 d'elle.<br>ACTION SCENARIO : si vous êtes à portée 0-1 de la tourelle centrale, vous pouvez en prendre le controle (placez un marqueur). Vous pouvez la tourner de 90° ou 180° (possible mais si vous la controlez déjà).<br> Elle attaque comme un vaisseau à initiative 0 : 3 dés d'attaque, portée 1-3 Attaque Spéciale. Le défenseur peut également annuler les résultats #eye# avec des résultats #evd# (les résultats #crit# peuvent être annulés avant les résultats #eye#). Le défenseur reçoit 1 jeton d'épuisement pour chaque résultat #eye# non annulés.",
        ENG: "<h2>Setup</h2>In the center of playmat (Range 4,5 of each border), place a small ship token without its base. It represents an automatic Turret. Each player may take control of the turret by performing a Scenario Action at range 0-1 of it.<br> SCENARIO ACTION: if you are at range 0-1 of the central turret, you gain control of it (place a token). You can rotate it 90° or 180° (if you already control it you can rotate it).<br>It attacks like a ship at Initiative 0 : 3 attack dice range 1-3 Special Attack. The defender may also cancel #eye# results with #evd# results (#crit# results can be canceled before #eye# results). If he doesn't, he receives 1 deplete token per each remaining #eye# results.",
        },
    skirmish_obj: {
        FRA: "<h2>Objectif</h2>Détruisez les vaisseaux adverses. Lorsque vous détruisez la moitié d'un vaisseau, vous gagnez autant de points de scénario que sa moitié de valeure arrondie au supérieure. La partie se termine à la fin du temps, ou lorsqu'un joueur n'a plus de vaisseau.",
        ENG: "<h2>Objective</h2>Destroy your opponent ships. When you destroy half a ship, you gain scenario points equal to half the value of the ship (rounded up). The game ends at the end of the clock, or if a player has no more ships on the battlefield.",
        },
    skirmish_strbon: {
        FRA: "<h2>Bonus Combatif</h2>Le perdant gagne un point de tournoi s'il a au moins un vaisseau restant en jeu, et que la différence de points de scénario entre le gagnant et le perdant est de 5 points ou moins.",
        ENG: "<h2>Struggle Bonus</h2>The Loser gains a Tournament Point if he has at least 1 remaining ship on the battlefield, and the difference between the winner and the losers's scenario points is 5 Points or less.",
        },
    skirmish_dombon: {
        FRA: "<h2>Bonus Domination</h2>Le vainqueur gagne un point de tournoi supplémentaire si il a marqué au moins 30 points et que le perdant a marqué 15 points de scénario au plus",
        ENG: "<h2>Domination Bonus</h2>The winner gains a Tournament point if he scored 30 Points or more and the loser has won less than 15 scenario points",
        },
    hunt_title: {
        FRA: "<h1>La Traque</h1>",
        ENG: "<h1>The Hunt</h1>",
        },
    hunt_description: {
        FRA: "<h2>Setup</h2>En plus de ses vaisseaux, le premier joueur place un carton de vaisseau 'contrat' (carton de petit vaisseau) à initiative 7 au mileu du tapis de jeu, faisant face à un côté du tapis qui n'et pas un camp de joueur.<br>Ses valeurs sont (COQUE 12 Agilité 2). Il attaque TOUS les vaisseaux à portée 3 et en dessous; lancez 3 dés d'attaque : les vaisseaux à portée 3 se défendent d'abord. Puis améliorez 1 dé d'attaque (oeuil d'abord, puis hit, puis vierge). Les vaisseaux à portée 2 défendent. Puis améliorez encore un dé (oeil>hit>vierge). Les vaisseaux à portée 1 défendent.<br>Les joueurs peuvent proposer n'importe quel cadran de vaisseau pour diriger le vaisseau 'contrat'. Durant la phase de planification, le premier joueur peut choisir n'importe lequel des cadrans proposés, puis il choisit au hasard une manoeuvre. L'autre joueur reprend le même cadran et fait de même. Le vaisseau 'contrat' ne peut pas stresser. S'il y a un doute concernant la manoeuvre sélectoionnée, le premier joueur choisit une des 2 manoeuvre possibles.",
        ENG: "<h2>Setup</h2>In addition to his ships, starting player places a bounty ship token (small ship token) at initiative 7 in the middle of the battlefield, facing a side which is not a player side.<br>Its stats are (HULL 12 Agility 2). It shoots EVERY ships within range 3 at initiative 7 : roll 3 attack dice : ships at range 3 defend first. Then upgrade 1 attack dice (eye first, else hit, else blank). Ships at range 2 defend. Then upgrade again a die (eye first, else hit, else blank). Ships at range 1 defend.<br> Each player may bring any dials to control the Bounty Ship. During planning phase, Starting player chooses 1 of the dials brought by both players, then he picks randomly a maneuver. Then the other player randomizes also the maneuver. The Bounty Ship cannot stress. If there's a doubt on the maneuver indicated on the dial, the starting player chooses 1 of 2 possible maneuvers.",
        },
    hunt_obj: {
        FRA: "<h2>Objectif</h2>Lorsque le vaisseau 'contrat' est détruit, chaque joueur gagne autat de points de scénario que le nombre de cartes de dégat qu'il lui a infligé.<br>ACTION SCENARIO : CAPTURE : (à portée 0-1 du vaisseau 'contrat') Placez 1 jeton Capture sur le vaisseau 'contrat'. Dès qu'un joueur a 3 jetons Capture de plus que son adversaire, il capture ce vaisseau et gagne 10 points de scénario.",
        ENG: "<h2>Objective</h2>When the bounty ship is destroyed, each player gains as many scenario points as the number of damage cards he has inflicted him.<br>SCENARIO ACTION : CAPTURE : (At range 0-1 of the bounty ship) Place 1 Capture Token on the Bounty ship. As soon as the difference of Capture Tokens between the 2 players is 3, the bounty ship is 'captured' by the player, who wins 10 scenario points. <br>When you destroy an enemy ship, if the bounty ship has been destroyed or captured, you score as many scenario points as the value of the destroyed ship ; if the opponent bounty ship is still on the board, you score only half value.",
        },
    hunt_strbon: {
        FRA: "<h2>Bonus Combatif</h2>Le perdant gagne un point de tournoi s'il lui reste au moins un vaisseau en jeu, et que la différence de points de scénario entre le vainqueur et le perdant est de 5 points ou moins.",
        ENG: "<h2>Struggle Bonus</h2>the Loser gains a Tournament Point if he has at least 1 remaining ship on the battlefield, and the difference between the winner and the losers's scenario points is 5 Points or less.",
        },
    hunt_dombon: {
        FRA: "<h2>Bonus Domination</h2>Le vainqueur gagne 1 point de tournoi supplémentaire si :<br>- Il a capturé le vaisseau 'contrat' OU il lui a infligé au moins 8 cartes de dégat lorsqu'il est détruit<br>- ET le vainqueur a plus de 15 points de scénario d'écart avec le perdant.",
        ENG: "<h2>Domination Bonus</h2>The winner gains an additional Tournament Point if :<br>- He has captured the bounty ship OR he has inflicted at least 8 damage cards on the bounty ship<br>- AND the difference in Scenario points between the loser and the winner is 15 points or more.",
        },
    escort_title: {
        FRA: "<h1>L'Escorte</h1>",
        ENG: "<h1>The Escort</h1>",
        },
    escort_description: {
        FRA: "<h2>Setup</h2>Chaque joueur controle un carton de petit vaisseau (ou un carton de navette de sénateur) (COQUE 8 AGILITE 2). Ils la place dans leur zone de départ à initiative 7. Puis chaque joueur place une caisse sur le tapis.<br>Chaque vaisseau peut effectuer une action d'escorte. ACTION SCENARIO : à portée 0-1 du carton, le vaisseau à escorter gagne un jeton de concentration. Lorsque ce vaisseau est touché, vous pouvez transférer un dégat (non crit) vers un vaisseau ayant effectué une action d'escorte.<br>Maneuvres disponibles pour le vaisseau à escorter : DROIT : 1, 2, 3, 4 : LEGER : 1, 2, 3 ; SUR L'AILE : 2. Pas de virage Koyogran.",
        ENG: "<h2>Setup</h2>Each player controls a small ship token (or a senator shuttle) (HULL 8 Agility 2). They place it in their starting zone at initiative 7. Then each player place a crate anywhere on the playmat. <br>Any ship can do an Escort Action. ACTION SCENARIO: at range 0/1 of the token ship. The ship Token gains a focus token. When the ship token is being hit, you can transfer 1 damage (non crit) to a ship which has done an escort action.<br>Maneuvers available for the ship token : Straight : 1, 2, 3, 4 : Bank : 1, 2, 3 ; Turn : 2. No K Turn.",
        },    
	escort_obj: {
        FRA: "<h2>Objectif</h2>Le carton de vaisseau doit voler à portée 0-1 de la caisse alliée. Puis il doit voler jusqu'en dehors du tapis de jeu. Si le carton réussit à fuir avec la caisse, le joueur gagne 15 points. Si un joueur détruit le carton de l'adversaire, il gagne 5 points. Lorsqu'un vaisseau normal est détruit, l'adversaire gagne autant de points de scénario que la moitié de la valeur du vaisseau arrondie au supérieur.",
        ENG: "<h2>Objective</h2>The ship token must fly at range 0/1  of the allied crate. Then he must fly out of the playing area to flee. If a ship token succeeds fleeing with the crate, the player gains 15 points. If a player destroys the opponents' token ship, he gains 5 points.  When a regular ship is destroyed, the opponent gains scenario points equal to the half value of the ship (rounded up).",
        },
    escort_strbon: {
        FRA: "<h2>Bonus Combatif</h2>Le perdant gagne 1 point de Tournoi s'il a au moins un vaisseau encore en jeu, et que la différence de points de scénario entre le vainqueur et le perdant est de 5 points ou moins.",
        ENG: "<h2>Struggle Bonus</h2>The Loser gains a Tournament Point if he has at least 1 remaining ship on the battlefield, and the difference between the winner and the losers's scenario points is 5 Points or less.",
        },
    escort_dombon: {
        FRA: "<h2>Bonus Domination</h2>Le vainqueur gagne 1 point de tournoi supplémentaire si le carton de l'adversaire est détruit et que son carton allié a fui le tapis de jeu avec la caisse.",
        ENG: "<h2>Domination Bonus</h2>You have destroyed tho opponent's ship token and your ship token has fled the battlefield with the crate",
        },    
	salvage_title: {
        FRA: "<h1>Le Sauvetage</h1>",
        ENG: "<h1>The Salvage</h1>",
        },
    salvage_description: {
        FRA: "<h2>Setup</h2>Au début de l'étape 'Placer les Obstacles', placez 1 jeton de cache au centre du tapis. Puis, en commençant par le premier joueur, chaque joueur place un jeton de cache à portée 3 de la cache centrale, et au delà de la portée 2 de l'autre jeton de cache. Les obstacles ne peuvent pas être placés sur les jetons de cache. <br>ACTION SCENARIO : Remorquer : lorsqu'un vaisseau effectue l'action 'remorquer' à portée 0-1 d'un jeton de cache, il prend le jeton de cache et le place sur sa carte de pilote. Un vaisseau ne peut avoir qu'un seul jeton de cache à la fois. Après qu'un vaisseau a effectué l'action 'remorquer', il retire les éventuels jetons d'occultation.<br> Avant de révéler le cadran d'un vaisseau transportant une cache, son propriétaire peut larguer le jeton de cache en le plaçant dans la portée 1 de ce vaisseau. Tant qu'un vaisseau remorque une cache, s'il effectue une action #BR# ou #BO# ou #CK# ou #SLAM#, il gagne un jeton d'épuisement et de contrainte. Si un vaisseau remorquant une cache subit un dégat #crit#, il doit larguer sa cache",
        ENG: "<h2>Setup</h2>At the start of the Place Obstacles step of Setup, place onesupply cache in the center of the play area (centered at range 4.5 of all board edges). Then, starting with the first player, players take turns placing the remaining 2 supply caches at range 3 of the center supply cache marker and beyond range 2 of each other supply cache. The Obstacles cannot be placed overlapping any supply cache.<br> Scenario Action: [Tow]<br>Tow: When a ship performs a tow action, choose a supply cache at range 0–1. Remove the chosen supply cache from the play area and place it on the ship’s card. A ship can have only one supply cache on its card. After a ship performs a tow action, it removes any cloak tokens it has.<br> Before revealing the dial of a ship carrying a cache, its owner may jettison its cache by placing the cache marker within range 1 of the ship. While a ship is towing a supply cache, if it performs a #BR# or #BO# or #CK# or #SLAM# action, it gains a deplete token and a strain token. If a ship towing a supply cache takes a #crit# damage, it must jettison the cache.",
        },
    salvage_obj: {
        FRA: "<h2>Objectif</h2>Au début de la phase de fin, gagnez 2 points de scenario pour chaque jeton de cache sur une carte de vaisseau allié. Lorsqu'un vaisseau est détruit, s'il avait un jeton de cache sur sa carte, il doit le larguer. Lorsqu'un vaisseau est détruit, son adversaire remporte la moitié de sa valeur (arrondie au supérieur) en points de scénario. La partie se termine lorsqu'un joueur n'a plus de vaisseau ou que le temps est terminé.",
        ENG: "<h2>Objective</h2>At the start of the End Phase, earn 2 scenario points for each supply cache on a friendly ship’s card. Only half points are scored when ships are destroyed. The game ends at the end of the clock or when a player has no more ships on the battlefield.",
        },
    salvage_strbon: {
        FRA: "<h2>Bonus Combatif</h2>Le perdant gagne 1 point de tournoi s'il lui reste au moins un vaisseau en jeu, et que la différence de points de scenario entre le vainqueur et le perdant est de 5 points ou moins.",
        ENG: "<h2>Struggle Bonus</h2>The Loser gains a Tournament Point if he has at least 1 remaining ship on the battlefield, and the difference between the winner and the losers's scenario points is 5 Points or less.",
        },
    salvage_dombon: {
        FRA: "<h2>Bonus Domination</h2>Le vainqueur gagne un point de tournoi supplémentaire s'il a marqué 30 points ou plus et que le perdant a gagné moins de 20 points de scénario.",
        ENG: "<h2>Domination Bonus</h2>The winner gains a Tournament point if he scored 30 Points or more and the losers has won less than 20 scenario points",
        },
    assault_title: {
        FRA: "<h1>L'Assaut</h1>",
        ENG: "<h1>The Assault</h1>",
        },
	assault_description: {
        FRA: "<h2>Setup</h2>Scénario assymétrique. Le joueur attaquant et le joueur défenseur sont choisi au hasard. Le joueur défenseur place la totalité des 4 satellites où il le souhaite, à condition qu'ils ne soient pas sur des obstacles.<br>Le joueur attaquant doit détruire les 4 satellites (Coque 3 Agilité 1).<br>Pendant la phase de système, le joueur défenseur peut relocaliser l'un des satellites. Pour relocaliser, un satellite utilise un gabarit de vitesse 3. Puis chaque satellite peut effectuer une action de brouillage (portée 0-1).",
        ENG: "<h2>Setup</h2>Assymetrical scenario. The Attack player and the defense player are chosen randomly. The defense player place all 4 satellites wherever he wants, but they must not overlap with obstacles.<br>The attack player must destroy 4 Satellites (3Hull 1Agility).<br>During System Phase, the defense player may relocate 1 of the satellites. To relocate, 1 satellite uses a speed 3 template. Then all satellites may perform a jam action (Range 0-1)",
        },
    assault_obj: {
        FRA: "<h2>Objectif</h2>Quand un satellite est détruit, le joueur attaquant gagne 5 points de scénario. Lorsque le joueur détruit un vaisseau adverse, il gagne autant de points de scénario que la moitié de la valeur de ce vaisseau (arrondie au supérieur). Lorsque le joueur défenseur détruit un vaisseau adverse, il gagne autant de points de scénario que la valeur du vaisseau détruit.",
        ENG: "<h2>Objective</h2>When a Satellite is destroyed, he gains 5 scenario points. The attack player scores half value for any enemy ship destroyed.<br>The defense player scores full value for any enemy ship destroyed.<br>The game ends at the end of the clock, or if a player has no more ships on the board. ",
        },
    assault_strbon: {
        FRA: "<h2>Bonus Combatif</h2>Le perdant gagne un point de tournoi s'il a au moins 1 vaisseau encore en jeu, et que la différence de points de scénario entre le vainqueur et le perdant est de 5 points ou moins.",
        ENG: "<h2>Struggle Bonus</h2>The Loser gains a Tournament Point if he has at least 1 remaining ship on the battlefield, and the difference between the winner and the losers's scenario points is 5 Points or less.",
        },
    assault_dombon: {
        FRA: "<h2>Bonus Domination</h2>Le vainqueur gagne un point de tournoi supplémentaire si:<br>- ATTAQUE : Tous les objectifs ont été détruits et le joueur défenseur a moins de 10 points de scénario<br>- DEFENSE : tous les vaisseaux ennemis ont été détruits et le joueur attaquant a moins de 20 points de scénario.",
        ENG: "<h2>Domination Bonus</h2>The winner gains a Tournament point if :<br>- ATTACK : All objectives have been destroyed and DEFENSE player has less than 10 scenario points<br>- DEFENSE : All enemy ships have been destroyed and ATTACK player has less than 20 scenario points",
        },
};

// Function to update the content based on selected language
function updateContent() {
language = document.getElementById('language').value;
document.getElementById('skirmish_title').innerHTML = translations.skirmish_title[language];

document.getElementById('skirmish_description').innerHTML = translations.skirmish_description[language];

document.getElementById('skirmish_obj').innerHTML = translations.skirmish_obj[language];

document.getElementById('skirmish_strbon').innerHTML = translations.skirmish_strbon[language];

document.getElementById('skirmish_dombon').innerHTML = translations.skirmish_dombon[language];

document.getElementById('hunt_title').innerHTML = translations.hunt_title[language];

document.getElementById('hunt_description').innerHTML = translations.hunt_description[language];

document.getElementById('hunt_obj').innerHTML = translations.hunt_obj[language];

document.getElementById('hunt_strbon').innerHTML = translations.hunt_strbon[language];

document.getElementById('hunt_dombon').innerHTML = translations.hunt_dombon[language];

document.getElementById('escort_title').innerHTML = translations.escort_title[language];

document.getElementById('escort_description').innerHTML = translations.escort_description[language];

document.getElementById('escort_obj').innerHTML = translations.escort_obj[language];

document.getElementById('escort_strbon').innerHTML = translations.escort_strbon[language];

document.getElementById('escort_dombon').innerHTML = translations.escort_dombon[language];

document.getElementById('salvage_title').innerHTML = translations.salvage_title[language];

document.getElementById('salvage_description').innerHTML = translations.salvage_description[language];

document.getElementById('salvage_obj').innerHTML = translations.salvage_obj[language];

document.getElementById('salvage_strbon').innerHTML = translations.salvage_strbon[language];

document.getElementById('salvage_dombon').innerHTML = translations.salvage_dombon[language];

document.getElementById('assault_title').innerHTML = translations.assault_title[language];

document.getElementById('assault_description').innerHTML = translations.assault_description[language];

document.getElementById('assault_obj').innerHTML = translations.assault_obj[language];

document.getElementById('assault_strbon').innerHTML = translations.assault_strbon[language];

document.getElementById('assault_dombon').innerHTML = translations.assault_dombon[language];

}

// Event listener for dropdown menu change
document.getElementById('language').addEventListener('input', updateContent );

//Initialisation
updateContent();






