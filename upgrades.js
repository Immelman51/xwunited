const upgrades = [
    // ##############################################      GENERIC UPGRADE ##########################""
        {
            name: "Astromech R2",
            name_ENG: "R2 Astromech",
            id: 0,
            available: true,
            modify: false,
            slot: "Astromech",
            points: 6,
            charge: 2,
            effect: "Après avoir révélé votre cadran, vous pouvez dépenser 1 #ch# et gagner 1 marqueur de désarmement pour récupérer 1 bouclier.",
            faction: ""
        },
        {
            name:"Astromech R3",
            name_ENG: "R3 Astromech",
            modify: false,
            id: 1,
            available: true,
            slot: "Astromech",
            points: 3,
            effect: "Vous pouvez maintenir jusqu’à 2 cibles verrouillées. Chaque verrouillage doit être sur un objet différent. Après avoir effectué une action #TL# , vous pouvez verrouiller une cible.",
            faction: ""
        },
        {
            name:"Astromech R4",
            name_ENG: "R4 Astromech",
            id: 2,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Astromech",
            points: 2,
            effect: "Réduisez la difficulté de vos manoeuvres de vitesse 1 et 2",
            faction: ""
            
         },
        {
            name:"Astromech R5",
            name_ENG: "R5 Astromech",
            id: 3,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Astromech",
            points: 4,
            charge: 2,
            effect: "Action : dépensez 1 #ch# pour réparer 1 carte de dégât face cachée.<br>Action : réparez 1 carte de dégât Vaisseau face visible.",
            faction: ""
        },
        {
            name: "Astromech Vigilant",
            name_ENG: "Watchful Astromech",
            id: 4,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Astromech",
            points: 2,
            effect: "Après avoir effectué une action #RT# ou #RD#, si vous êtes dans l'arc de tir d'un vaisseau ennemi, vous pouvez effectuer une action #CA# rouge.",
            faction: ""
        },
        
 {
            name: "Tireur Hors-Pair",
            name_ENG: "Crack Shot",
            id: 5,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 3,
            charge: 1,
            effect: "Tant que vous effectuez une attaque principale, si le défenseur est dans votre #bulls#, avant l’étape « Neutraliser les résultats », vous pouvez dépenser 1 #ch# pour annuler 1 résultat #hit#.",
            faction: ""
        },
{
            name: "Insaisissable",
            name_ENG: "Elusive",
            id: 6,
            max_per_squad: 8,
            available: false,
            modify: true,
            slot: "Talent",
            points: 5,
            effect: "Lorsque vous défendez contre une attaque à portée 3 ou contre une attaque de #tur#, vous pouvez améliorer un dé de défense.",
            restrictions: [2,"upgrade","Talent",""],
            faction: "",
            modifier_func: [
                () => also_Occupies("Talent",6)
    
            ]       
        },
{
            name: "Loup Solitaire",
            name_ENG: "Lone Wolf",
            id: 7,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 3,
            recurring: 1,
            charge: 1,
            effect: "Tant que vous défendez ou que vous effectuez une attaque, s’il n’y a aucun autre vaisseau allié à portée 0–2, vous pouvez dépenser 1 #ch# pour relancer 1 de vos dés.",
            faction: ""
        },
        {
            name: "Intimidation",
            name_ENG: "Intimidation",
            id: 8,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 2,
            effect: "Tant qu’un vaisseau ennemi à portée 0 défend, il lance un dé de défense en moins.",
            faction: ""
        },
 {
            name:"Adresse au Tir",
            name_ENG: "Marksmanship",
            id: 9,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 1,
            effect: "Tant que vous effectuez une attaque, si le défenseur est dans votre #bulls#, vous pouvez changer 1 résultat #hit# en un résultat #crit#.",
            faction: ""
        },
{
            name: "Manoeuvre Improbable",
            name_ENG: "Outmaneuver",
            id: 10,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 8,
            effect: "Tant que vous effectuez une attaque #Farc#, si vous n’êtes pas dans l’arc de tir du défenseur, il lance 1 dé de défense en moins.",
            faction: ""
        },
 {
            name: "Prédateur",
            name_ENG: "Predator",
            id: 11,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 3,
            effect: "Tant que vous effectuez une attaque principale, si le défenseur est dans votre #bulls#, vous pouvez relancer 1 dé d’attaque.",
            faction: ""
        },
 {
            name: "Chef d'Escouade",
            name_ENG: "Squad Leader",
            id: 12,
            available: true,
            modify: true,
            slot: "Talent",
            points: 5,
            max_per_squad: 1,
            effect: "Tant que vous coordonnez, le vaisseau que vous avez choisi peut effectuer une action seulement si celle-ci est également dans votre barre d’action.<br>Ajoute l'action (CO)",
            faction: "",
            modifier_func: [
                () => add_action("R-Coordinate")
            ]
        },
 {
            name: "Tactique de Nuée",
            name_ENG: "Swarm Tactics",
            id: 13,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 2,
            effect: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 1. Dans ce cas, considérez que son initiative est égale à la vôtre jusqu’à la fin du round.",
            faction: ""
        },
{
            name: "Tir Habile",
            name_ENG: "Trick Shot",
            id: 14,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 3,
            effect: "Tant que vous effectuez une attaque qui est gênée par un obstacle, lancez 1 dé d’attaque supplémentaire.",
            faction: ""
        },
 {
            name:"Tir Instantané",
            name_ENG: "Snap Shot",
            id: 15,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 6,
            attack: 2,
            range: [2],
            rangebonus: true,
            effect: "Après qu’un vaisseau ennemi a exécuté une manœuvre, vous pouvez effectuer cette attaque contre lui en tant qu’attaque bonus.<br>Attaque : vos dés ne peuvent pas être modifiés.",
            faction: ""
        },
{
            name: "Officier Tactique",
            name_ENG: "Tactical Officer",
            id: 16,
            max_per_squad: 8,
            available: false,
            modify: true,
            slot: "Crew",
            points: 3,
            effect: "Ajoute l'action #CO# blanche",
            restrictions: [1,"action", "R-Coordinate",""],
            faction: "",
            modifier_func: [
                () => add_action("Coordinate")
            ]
        },
 {
            name: "Copilote Perspicace",
            name_ENG: "Perceptive Copilot",
            id: 17,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Crew",
            points: 8,
            effect: "Après avoir effectué une action #FS#, gagnez 1 marqueur de concentration.",
            faction: ""
        },
{
            name: "Apprenti Technicien",
            name_ENG: "Novice Technician",
            id: 18,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Crew",
            points: 2,
            effect: "À la fin du round, vous pouvez lancer 1 dé d’attaque pour réparer 1 carte de dégât face visible. Puis, sur un résultat #hit#, exposez 1 carte de dégât.",
            faction: ""
        },
{
            name: "Droïde 'Gonk' GNK",
            name_ENG: 'GNK "Gonk" Droid',
            id: 19,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Crew",
            points: 4,
            charge: 1,
            effect: "Action : récupérez 1 #ch#.<br>Action : dépensez 1 #ch# pour récupérer 1 bouclier.",
            faction: ""
        },
{
            name: "Slicer Freelance",
            name_ENG: "Freelance Slicer",
            id: 20,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Crew",
            points: 2,
            effect: "Tant que vous défendez et avant que les dés d’attaque ne soient lancés, vous pouvez dépenser un marqueur de verrouillage que vous avez sur l’attaquant pour lancer 1 dé d’attaque. Dans ce cas, l’attaquant gagne 1 marqueur de brouillage. Puis, sur un résultat #hit# ou #crit#, gagnez 1 marqueur de brouillage.",
            faction: ""
        },
 {
            name: "Cannonier Adroit",
            name_ENG: "Agile Gunner",
            id: 21,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 1,
            effect: "Pendant la phase de dénouement, vous pouvez faire pivoter votre indicateur #tur#",
            faction: ""
        },
 {
            name: "Artilleur Hors-Pair",
            name_ENG: "Hotshot Gunner",
            id: 22,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 6,
            effect: "Après avoir effectué une attaque de #tur#, retirez un marqueur de concentration, de calcul, ou d’évasion du défenseur.",
            faction: ""
        },
 {
            
            name: "Bombardier Compétent",
            name_ENG: "Skilled Bombardier",
            id: 23,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 2,
            effect: "Si vous devez larguer ou lancer un engin, vous pouvez utiliser un gabarit de même direction mais avec une vitesse supérieure ou inférieure de 1.",
            faction: ""
        },
 {
            name: "Artilleur Vétéran",
            name_ENG: "Veteran Gunner",
            id: 24,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 5,
            effect: "Après avoir effectué une attaque, vous pouvez effectuer une attaque bonus #tur# ou #can#, avec une #tur# ou un #can# que vous n’avez pas encore utilisé.",
            faction: ""
          },
  {
            name: "Officier des Systèmes d'Armement",
            name_ENG: "Weapons Systems Officer",
            id: 25,
            max_per_squad: 8,
            available: true,
            modify: false,
            points: 6,
            slot: "Gunner",
            effect: "Après avoir effectué une attaque, vous pouvez dépenser un marqueur vert ou recevoir un marqueur de stress pour verrouiller le défenseur.",
            faction: ""
        },
{
            name: "Ciblage Prioritaire Automatisé",
            name_ENG: "Automated Target Priority",
            id: 26,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Tech",
            points: 2,
            effect: "Tant que vous effectuez une attaque, vous devez choisir un défenseur à la plus courte portée d’attaque valide.<br>Après avoir effectué une attaque qui a raté, placez 1 marqueur de calcul sur cette carte.<br>Avant de vous engager, vous pouvez retirer 1 marqueur de calcul de cette carte pour gagner le marqueur correspondant",
            faction: ""
        },
 {
            name: "Analyseur de Modèles",
            name_ENG: "Pattern Analyzer",
            id: 27,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Tech",
            points: 5,
            effect: "Tant que vous exécutez entièrement une manœuvre rouge, avant l’étape « Vérifier la difficulté », vous pouvez effectuer 1 action.",
            faction: ""
        },
 {
            name: "Optiques Avancées",
            name_ENG: "Advanced Optics",
            id: 28,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Tech",
            points: 5,
            effect: "Tant que vous effectuez une attaque, vous pouvez dépenser 1 marqueur de concentration pour changer 1 de vos résultats vierges en un résultat #hit#.",
            faction: ""
        },
 
 {
            name: "Synchroniseur Télémétrique",
            name_ENG: "Targeting Synchronizer",
            id: 29,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Tech",
            points: 2,
            effect: "Tant qu’un vaisseau allié à portée 1–3 effectue une attaque contre une cible que vous avez verrouillée, ce vaisseau allié ignore le prérequis d’attaque #TL#.",
            faction: ""

        },
 {
            name: "Missiles Ioniques",
            name_ENG: "Ion Missiles",
            id: 30,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Missile",
            points: 4,
            attack: 3,
            range: [2,3],
            charge: 3,
            effect: "Attaque (#TL#) portée 2-3 #Farc# 3 dés : dépensez 1 #ch#. Si cette attaque touche, dépensez 1 résultat #hit# ou #crit# pour faire subir 1 dégât #hit# au défenseur. Tous les résultats #hit#/#crit# restants infligent des marqueurs ioniques au lieu des dégâts.",
            faction: ""
        },
{
            name: "Missiles à Tête Chercheuse",
            name_ENG: "Homing Missiles",
            id: 31,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Missile",
            points: 4,
            attack: 4,
            range: [2,3],
            charge: 2,
            effect: "Attaque (#TL#) Portée 2-3 #Farc# 4 dés: dépensez 1 #ch#. Après que vous avez déclaré le défenseur, il peut choisir de subir 1 dégât #hit#. Dans ce cas, sautez les étapes « Dés d’attaque » et « Dés de défense » et considérez que l’attaque a touché.",
            faction: ""
        },
{
            name: "Missiles Groupés",
            name_ENG: "Cluster Missiles",
            id: 32,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Missile",
            points: 4,
            attack: 3,
            range: [1,2],
            charge: 2,
            effect: "Attaque (#TL#) Portée 1-2 #Farc# 3 dés. Après avoir résolu l’attaque, vous pouvez choisir un autre vaisseau à portée 0-1 du défenseur. Lancez 3 dés d’attaque : assignez autant de marqueurs de contrainte que de résultats #eye#, puis le vaisseau ciblé doit se défendre en considérant les autres résultats comme un jet d’attaque.",
            faction: ""
        },
{
            name: "Roquettes de Barrage",
            name_ENG: "Barrage Rockets",
            id: 33,
            max_per_squad: 8,
            available: false,
            modify: true,
            slot: "Missile",
            points: 7,
            attack: 3,
            range: [2,3],
            charge: 5,
            effect: "Attaque (#FS#) Portée 2-3 #Farc# 3 dés: Dépensez 1 #ch#. Si le défenseur est dans votre #bulls#, vous pouvez dépenser 1 ou plusieurs ch pour relancer autant de dés d’attaque.",
            restrictions: [1,"upgrade", "Torpedo",""],
            faction: "",
            modifier_func: [
                () => also_Occupies("Torpedo",33)
            ]
        },
{
            name: "Traceurs XX-23 S",
            name_ENG: "XX-23 S-Thread Tracers",
            id: 34,
            available: true,
            modify: false,
            slot: "Missile",
            attack: 3,
            range: [1,3],
            max_per_squad: 2,
            charge: 2,
            points: 3,
            effect: "Attaque (#CA#, #FS# ou #TL#) Portée 1-3 #Farc# 3dés: dépensez 1 #ch#. Si cette attaque touche, chaque vaisseau allié à portée 1–3 du défenseur peut verrouiller le défenseur. Puis annulez tous les résultats des dés.",
            faction: ""
        },
        {
            name: "Missile Harpon",
            name_ENG: "Harpoon Missile",
            id: 35,
            available: true,
            modify: false,
            slot: "Missile",
            attack: 3,
            range: [1,3],
            charge: 1,
            points: 5,
            effect: "Attaque (#FS#) Portée 1-2 #Farc# 3 dés. Si l’attaque touche, annulez tous les dés. Puis le défenseur reçoit une carte de dégât face cachée et marqueur de Rayon Tracteur.",
            faction: ""
        },
{
            name: "Torpilles à Plasma",
            name_ENG: "Plasma Torpedoes",
            id: 36,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Torpedo",
            points: 6,
            attack: 3,
            range: [2,3],
            charge: 2,
            effect: "Attaque (#TL#) 3dés #Farc# portée 2-3: dépensez 1 Ch. Lors de l’étape « Neutraliser les résultats », les résultats #crit# sont annulés avant les résultats #hit#. Après que cette attaque a touché, le défenseur perd 1 bouclier.",
            faction: ""
        },
 {
            name: "Torpille à Proton Avancée",
            name_ENG: "Adv. Proton Torpedo",
            id: 37,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Torpedo",
            points: 8,
            attack: 5,
            range: [1],
            charge: 1,
            effect: "Attaque (#TL#) : Portée 1 #Farc# 4 dés: dépensez 1 #ch#. ATTAQUE PRECISE.",
            faction: ""
        },
         {
            name: "Torpilles à Concussion",
            name_ENG: "Concussion Torpedoes",
            id: 38,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Torpedo",
            points: 6,
            attack: 3,
            range: [2,3],
            charge: 3,
            effect: "Attaque (lock) : Portée 2-3 #Farc# 3 dés. dépensez 1 #ch#. Après que cette attaque a touché, chaque vaisseau à portée 0–1 du défenseur expose 1 de ses cartes de dégât.",
            faction: ""
        },
        
       
        {
            name: "Roquette à Proton",
            name_ENG: "Proton Rocket",
            id: 39,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Torpedo",
            points: 8,
            attackbull: 5,
            range: [1,2],
            charge: 1,
            effect: "Attaque (#TL#) Portée 1-2 #bulls# 5 dés: dépensez 1 Ch.",
            faction: ""
        },
        {
            name: "Générateur de Sous-Munitions",
            name_ENG: "Bomblet Generator",
            id: 40,
            max_per_squad: 8,
            available: false,
            modify: true,
            slot: "Payload",
            points: 2,
            charge: 2,
            effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une sous-munition avec le gabarit 1#straight#. Au début de la phase d’activation, vous pouvez dépenser 1 bouclier pour récupérer 2 #ch#.",
            //applies_condition: 'Bomblet'.canonicalize(),
            restrictions: [2,"upgrade", "Payload",""],
            faction: "",
            modifier_func: [
                () => also_Occupies("Payload",40)
            ]
        },
 {
            name: "Filet Conner",
            name_ENG: "Conner Nets",
            id: 41,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Payload",
            points: 3,
            charge: 1,
            effect: "Pendant la phase de système, vous pouvez dépenser 1#ch# pour larguer un filet Conner en utilisant le gabarit 1#straight#.<br>La #ch# de cette carte ne peut pas être récupérée.",
            faction: ""
            //applies_condition: 'Conner Net'.canonicalize()
        },
 {
            name: "Bombes à Proton",
            name_ENG: "Proton Bombs",
            id: 42,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Payload",
            points: 4,
            charge: 2,
            effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une bombe à protons en utilisant le gabarit 1#straight#.",
            faction: ""
            //applies_condition: 'Proton Bomb'.canonicalize()
        },
 {
            name: "Mines de Proximité",
            name_ENG: "Proximity Mines",
            id: 43,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Payload",
            points: 6,
            charge: 2,
            effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une mine de proximité en utilisant le gabarit 1#straight#.<br>Les #ch# de cette carte ne peuvent pas être récupérées.",
            faction: ""
            //applies_condition: 'Proximity Mine'.canonicalize()
        },
{
            name: "Charges Sismiques",
            name_ENG: "Seismic Charges",
            id: 44,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Payload",
            points: 2,
            charge: 2,
            effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une charge sismique en utilisant le gabarit 1#straight#.",
            faction: ""
            //applies_condition: 'Seismic Charge'.canonicalize()
        },
{
            name: "Bombes Ioniques",
            name_ENG: "Ion Bombs",
            id: 45,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Payload",
            points: 3,
            charge: 2,
            effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une charge sismique en utilisant le gabarit 1#straight#.",
            faction: ""
            //applies_condition: 'Ion Bomb'.canonicalize()
        },
 {
            name: 'Rayon de Brouillage',
            name_ENG: "Jamming Beam",
            id: 46,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Cannon",
            points: 1,
            attack: 3,
            range: [1,2],
            effect: "Portée 1-2 #Farc# 3 dés Attaque : si cette attaque touche, tous les résultats #hit#/#crit# infligent des marqueurs de brouillage au lieu des dégâts.",
            faction: ""
        },
 {
            name: "Rayon Tracteur",
            name_ENG: "Tractor Beam",
            id: 47,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Cannon",
            points: 4,
            attack: 3,
            range: [1,3],
            effect: "Portée 1-3 #Farc# 3 dés, Attaque : si cette attaque touche, tous les résultats #hit#/#crit# infligent des marqueurs de rayon tracteur au lieu des dégâts.",
            faction: ""
        },
{
            name: "Canon Ionique",
            name_ENG: "Ion Cannon",
            id: 48,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Cannon",
            points: 5,
            attack: 3,
            range: [1,3],
            effect: "Portée 1-3 #Farc# 3 dés Attaque : si cette attaque touche, dépensez 1 résultat #hit# ou #crit# pour faire subir 1 dégât au défenseur. Tous les résultats #hit#/#crit# restants infligent des marqueurs ioniques au lieu des dégâts.",
            faction: ""
        },
{
            name: "Canon Laser Lourd",
            name_ENG: "Heavy Laser Cannon",
            id: 49,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Cannon",
            points: 4,
            attackbull: 4,
            range: [2,3],
            effect: "Portée 2-3 #Farc# 4 dés. Si le défenseur n’est pas dans le #bulls#, alors l’attaque devient IMPRECISE.",
            faction: ""
        },
        {
            name: "Canons Laser Jumelés",
            name_ENG: "Synced Laser Cannons",
            id: 50,
            available: false,
            modify: true,
            slot: "Cannon",
            points: 7,
            attack: 3,
            range: [2,3],
            effect: "Portée 2-3 #Farc# 3 dés Attaque : si vous êtes calculateur, vous pouvez améliorer 1 dé d’attaque",
            restrictions: [2,"upgrade", "Cannon",""],
            faction: "",
            modifier_func: [
                () => also_Occupies("Cannon",50)
            ]
        },
{
            name: "Tourelle à Canon Ionique",
            name_ENG: "Ion Cannon Turret",
            id: 51,
            max_per_squad: 8,
            available: true,
            modify: true,
            slot: "Turret",
            points: 5,
            attackt: 3,
            range: [1,2],
            effect: "Portée 1-2 #Farc# 3 dés Attaque : si cette attaque touche, dépensez 1 résultat #hit# ou #crit# pour faire subir 1 dégât #hit# au défenseur. Tous les résultats #hit#/#crit# restants infligent des marqueurs ioniques au lieu des dégâts.",
            faction: "",
            modifier_func: [
                () => add_action("Rotate Arc")
            ]
               
        },
 {
            name: "Tourelle Dorsale",
            name_ENG: "Dorsal Turret",
            id: 52,
            max_per_squad: 8,
            available: true,
            modify: true,
            slot: "Turret",
            points: 2,
            attackt: 2,
            range: [1,2],
            effect: "Portée 1-2 #tur# 2 dés, Attaque",
            faction: "",
            modifier_func: [
                () => add_action("Rotate Arc")
            ]
        },
 {
            name: "Autoblasters",
            name_ENG: "Autoblasters",
            id: 53,
            available: true,
            modify: true,
            max_per_squad: 8,
            slot: "Turret",
            points: 4,
            attackt: 2,
            range: [0,1],
            effect: "Portée 0-1 #tur# 2 dés. ATTAQUE PRECISE",
            faction: "",
            modifier_func: [
                () => add_action("Rotate Arc")
            ]
        },
        {
            name: "Tourelle Laser Jumelé",
            name_ENG: "Twin Laser Turrets",
            id: 54,
            max_per_squad: 8,
            available: true,
            modify: true,
            slot: "Turret",
            points: 4,
            attackt: 3,
            range: [2,3],
            effect: "Portée 2-3 #tur# 3 dés Attaque : attaque IMPRECISE<br>puis Attaque: attaque IMPRECISE.",
            faction: "",
            modifier_func: [
                () => add_action("Rotate Arc")
            ]
        },
         {
            name : "Support pour Canon Rotatif",
            name_ENG: "Cannon Turret Support",
            id: 55,
            max_per_squad: 8,
            available: true,
            modify: true,
            slot: "Turret",
            points: 3,
            effect: "Choisissez une amélioration #can# équipée et placez un marqueur canon rotatif dessus. La restriction #Farc# de votre #can# devient #tur#. Vous pouvez tourner l’arc de votre #can# avec l’action #RT#.",
            faction: "",
            modifier_func: [
                () => add_action("Rotate Arc")
            ]
        },
         {
            name: "Appareil d'Occultation",
            name_ENG: "Cloaking Device",
            id: 56,
            available: false,
            modify: false,
            slot: "Illicit",
            points: 4,
            max_per_squad: 1,
            charge: 2,
            effect: "Action : Dépensez 1 #ch# pour effectuer une action #CK#.<br>Au début de la phase de préparation, lancez 1 dé d’attaque. Sur un résultat #eye#, désoccultez-vous ou défaussez votre marqueur d’occultation.",
            restrictions: [1,"base","Small", "Medium"],
            faction: ""
        },
        {
            name: "Cybernétiques de Contrebande",
            name_ENG: "Contraband Cybernetics",
            id: 57,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Illicit",
            points: 3,
            charge: 1,
            effect: "Avant votre activation, vous pouvez dépenser 1 #ch#. Dans ce cas, jusqu’à la fin du round, vous pouvez effectuer des actions et exécuter des manœuvres rouges, même si vous êtes stressé.",
            faction: ""
        },
        {
            name: "Salve Automatique",
            name_ENG: "Deadman's Switch",
            id: 58,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Illicit",
            points: 2,
            effect: "Après que vous avez été détruit, chaque autre vaisseau à portée 0–1 subit 1 dégât #hit#.",
            faction: ""
        },
 {
            name: "Hypercarburant Coaxium",
            name_ENG: "Coaxium Hyperfuel",
            id: 59,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Illicit",
            points: 5,
            effect: "ACTION : dépensez 1 #ch#. Vous pouvez effectuer une action #MASL#. Vous pouvez effectuer cette action même après avoir partiellement effectué une manoeuvre ou sous l’effet du stress. Puis exposez 1 carte de dégât ou prenez 1 dégât critique.",
            faction: ""
            
        },
 {
            name: "Codes Transpondeur Falsifiés",
            name_ENG: "False Transponder Codes",
            id: 60,
            max_per_squad: 8,
            available: true,
            modify: false,
            points: 3,
            charge: 1,
            slot: "Illicit",
            effect: "Après avoir verrouillé un objet ou qu'un objet vous a verrouillé, si vous avez 1 #ch# active, perdez 1 #ch# et brouillez cet objet, en ignorant les restrictions de portée.",
            faction: ""
        },
         {
            name: "Blindage Ablatif", 
            name_ENG: "Ablative Plating",
            id: 61,
            max_per_squad: 8,
            available: false,
            modify: false,
            slot: "Modification",
            points: 4,
            charge: 2,
            effect: "Avant de subir des dégâts à cause d’un obstacle ou de l’explosion d’une bombe alliée, vous pouvez dépenser 1 #ch#. Dans ce cas, prévenez 1 dégât.",
            restrictions: 
                [1,"base", "Medium", "Large"],
            faction: ""
        },
{
            name: "Postcombustion",
            name_ENG: "Afterburners",
            id: 62,
            available: false,
            modify: false,
            slot: "Modification",
            points: 6,
            charge: 2,
            effect: "Après avoir entièrement exécuté une manœuvre à vitesse 3–5, vous pouvez dépenser 1 #ch# pour effectuer une action #BO#, même tant que vous êtes stressé.",
            restrictions: 
                [1, "base", "Small",""],
            faction: ""
        },
{
            name: "Moteur Amélioré",
            name_ENG: "Engine Upgrade",
            id: 63,
            available: false,
            modify: true,
            slot: "Modification",
            points: 3,
            effect: "Donne l'action #BO# blanche",
            restrictions: 
                [1,"action", "R-Boost",""]
            ,
            faction: "",
            modifier_func: [
                () => add_action("Boost")
            ]
        },
        {
            name: "Munitions à Sûreté Intégrée",
            name_ENG: "Munitions Failsafe",
            modify: false,
            id: 64,
            max_per_squad: 8,
            available: true,
            slot: "Modification",
            points: 1,
            effect: "Tant que vous effectuez une attaque #mi# ou #to#, après avoir lancé les dés d’attaque, vous pouvez annuler tous les résultats des dés pour récupérer 1 #ch# que vous avez dépensée comme coût pour l’attaque.",
            faction: ""
        },
{
            name: "Brouilleur Tactique",
            name_ENG: "Tactical Scrambler",
            id: 65,
            max_per_squad: 8,
            available: false,
            modify: false,
            slot: "Modification",
            points: 2,
            effect: "Tant que vous gênez l’attaque d’un vaisseau ennemi, le défenseur lance 1 dé de défense supplémentaire.",
            restrictions: [1,"base", "Medium", "Large"],
            faction: ""
        },
{
            name: "Coque Améliorée",
            name_ENG: "Hull Upgrade",
            id: 66,
            available: true,
            modify: true,
            max_per_squad: 8,
            slot: "Modification",
            points: 6,
            effect: "+1 Coque",
            faction: "",
            modifier_func: [
                () => change_stat("Hull",1)
            ]
        },
{
            name: "Bouclier Amélioré",
            name_ENG: "Shield Upgrade",
            id: 67,
            max_per_squad: 8,
            available: true,
            modify: true,
            slot: "Modification",
            points: 7,
            effect: "+1 Bouclier",
            faction: "",
            modifier_func: [
                () => change_stat("Shield",1)
            ]
        },
        {
            name: "Système d'Occultation",
            name_ENG: "Stealth Device",
            id: 68,
            available: true,
            max_per_squad: 8,
            modify: false,
            slot: "Modification",
            points: 6,
            charge: 1,
            effect: "Tant que vous défendez, si votre #ch# est active, lancez 1 dé de défense supplémentaire. Après avoir subi des dégâts, perdez 1#ch#.",
            faction: ""
        },
 {
            name: "Détonateur à Retardement",
            name_ENG: "Delayed Fuses",
            id: 69,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Modification",
            points: 1,
            effect: "Après avoir largué, lancé ou placé une bombe ou une mine, vous pouvez placer dessus 1 marqueur d’amorce.",
            faction: ""
        },
{
            name: "Ordinateur de Visée",
            name_ENG: "Targeting Computer",
            id: 70,
            max_per_squad: 8,
            available: true,
            modify: true,
            slot: "Modification",
            points: 2,
            effect: "Donne accès l'action #TL#",
            faction: "",
            modifier_func: [
                () => add_action("Target Lock")
            ]
        },
{
            name: "Senseurs Avancés",
            name_ENG: "Advanced Sensors",
            id: 71,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Sensor",
            points: 8,
            effect: "Après avoir révélé votre cadran, vous pouvez effectuer 1 action. Dans ce cas, vous ne pouvez pas effectuer d’autre action pendant votre activation.",
            faction: ""
        },
        {
            name: "Détecteur Anticollision",
            name_ENG: "Collision Detector",
            id: 72,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Sensor",
            points: 5,
            charge: 2,
            effect: "Tant que vous accélérez ou que vous effectuez un tonneau, vous pouvez vous déplacer à travers ou chevaucher les obstacles. Après vous être déplacé à travers ou avoir chevauché un obstacle, vous pouvez dépenser 1 #ch# pour ignorer ses effets jusqu’à la fin du round.",
            faction: ""
        },
        {
            name: "Système de Controle de Tir",
            name_ENG: "Fire-Control System",
            id: 73,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Sensor",
            points: 2,
            effect: "Tant que vous effectuez une attaque, si vous avez un verrouillage sur le défenseur, vous pouvez relancer 1 dé d’attaque. Dans ce cas, vous ne pouvez pas dépenser votre marqueur de verrouillage pendant cette attaque.",
            faction: ""
        },
         {
            name: "Scanner Longue Portée",
            name_ENG: "Long Range Scanner",
            id: 74,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Sensor",
            points: 5,
            effect: "Vous pouvez verrouiller des cibles au-delà de la portée 3. Lorsque vous verrouillez une cible à portée 2 ou moins, recevez 1 marqueur d’épuisement.",
            faction: ""
        },
         {
            name: "Brouilleur de Senseur",
            name_ENG: "Sensor Jammer",
            id: 75,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Sensor",
            points: 8,
            effect: "Augmentez les portées de l’action brouillage de 1. Lorsque vous défendez, vous pouvez dépenser 1 #ch# pour dégrader 1 dé d’attaque.",
            faction: ""
        },
{
            name: "Patience",
            name_ENG: "Patience",
            id: 76,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Force",
            points: 2,
            effect: "Au début de la phase d’engagement, s’il y a un vaisseau ennemi dans votre #Farc#, vous pouvez gagner 1 marqueur d’épuisement pour récupérer 1 #fo#.",
            faction: ""           
            
        },
 {
            name: "Réflexes Prémonitoires",
            name_ENG: "Precognitive Reflexes",
            id: 77,
            available: false,
            max_per_squad: 8,
            modify: false,
            slot: "Force",
            points: 9,
            effect: "Après avoir révélé votre cadran, vous pouvez dépenser 1 #fo# pour effectuer une action #BR# ou #BO#. Puis, si vous avez effectué une action qui n’est pas sur votre barre d’action, recevez 2 marqueurs de contrainte. Dans ce cas, vous ne pouvez pas effectuer une autre action pendant votre activation.",
            restrictions: [1,"base", "Small",""],
            faction: ""
        },
{
            name: "As de la Manoeuvre",
            name_ENG: "Brilliant Evasion",
            id: 78,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Force",
            points: 2,
            effect: "Tant que vous défendez, si vous n’êtes pas dans le #bulls# de l’attaquant, vous pouvez dépenser 1 #fo# pour changer 2 de vos résultats #eye# en résultats #evd#.",
            faction: ""
        },
{
            name: "Sens",
            name_ENG: "Sense",
            id: 79,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Force",
            points: 5,
            effect: "Pendant la phase de système, vous pouvez choisir 1 vaisseau à portée 0–1 et regarder son cadran. Si vous dépensez 1 #fo#, vous pouvez choisir un vaisseau à portée 0–3 à la place.",
            faction: ""
        },
{
            name: "Visée Instinctive",
            name_ENG: "Instinctive Aim",
            id: 80,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Force",
            points: 1,
            effect: "Tant que vous effectuez une attaque spéciale, vous pouvez dépenser 1 #fo# pour ignorer le prérequis #TL# ou #FS#.",
            faction: ""
        },
        {
            name: "Système de Tir Automatique",
            name_ENG: "Automatic Gunning System",
            id: 81,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Calculator",
            points: 3,
            effect: "Après avoir effectué une attaque principale, vous pouvez effectuer une attaque bonus d’arme secondaire. Lors de cette attaque, vous ne pouvez pas ajouter ou modifier des dés d’attaque.",
            faction: ""
        },
         {
            name: "Calculs en Réseau Avancés",
            name_ENG: "Advanced Networked Calculations",
            id: 82,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Calculator",
            points: 2,
            effect: "Lorsque vous défendez ou attaquez, vous pouvez dépenser 1 marqueur de calcul d’un vaisseau allié à portée 0-2 pour changer 1 résultat #eye# en résultat #evd# ou #hit#.",
            faction: ""
        },
         {
            name: "Données de Pistage Hyperspatial",
            name_ENG: "Hyperspace Tracking Data",
            id: 83,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Calculator",
            points: 4,
            max_per_squad: 1,
            effect: "Mise en place : vous pouvez considérer votre initiative comme étant 0 ou 7. A la fin de la phase de mise en place, tous les vaisseaux alliés à portée 0-2 de vous gagne 1 marqueur de calcul. Ces marqueurs de calcul ne sont pas nettoyés en phase de fin.",
            faction: ""
        },
         {
            name: "Ordinateur de Vol Avancé",
            name_ENG: "Advanced Flight Computer",
            id: 84,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Calculator",
            points: 3,
            max_per_squad: 1,
            effect: "Mise en place : vous commencez en réserve. Vous pouvez dépenser entre 0 et 2 charges.<br>Au début de la phase de planification, s’il n’y a plus de charge sur cette carte, retournez là face cachée, puis placez votre vaisseau intégralement à portée 1 d’un bord de l’aire de jeu.",
            faction: ""
        },
         {
            name: "Crypteur de Données",
            name_ENG: "Encrypter",
            id: 85,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Calculator",
            points: 5,
            effect: "Vous pouvez coordonner jusqu’à la portée 3. Lorsque vous coordonnez un vaisseau, recevez 1 marqueur de calcul.",
            faction: ""
        },

//################################################################# REBEL ALLIANCE ##########################""""

        {
            name: "R2-D2",
            name_ENG: "R2-D2",
            id: 86,
            available: true,
            modify: false,
            max_per_squad: 1,
            slot: "Astromech",
            points: 8,
            charge: 2,
            effect: "Après votre activation, vous pouvez dépenser 1 #ch# et gagner 1 marqueur d’épuisement pour réparer 1 carte de dégât, récupérer 1 bouclier ou retirer 1 engin à portée 0–1.",
            faction: ["Rebel_Alliance","Jedi_Order","Resistance"]
        },
         {
            name: "R5-D8",
            name_ENG: "R5-D8",
            id: 87,
            available: true,
            modify: false,
            max_per_squad: 1,
            slot: "Astromech",
            points: 6,
            charge: 3,
            effect: "Action : dépensez 1 #ch# pour réparer 1 carte de dégât face cachée.<br>Action : réparez 1 carte de dégât Vaisseau face visible.",
            faction: ["Rebel_Alliance"]
        },
         {
            name: "C-3PO",
            name_ENG: "C-3PO",
            id: 88,
            available: true,
            modify: true,
            slot: "Crew",
            points: 7,
            max_per_squad: 1,
            effect: "Avant de lancer les dés de défense, vous pouvez dépenser 1 marqueur de calcul pour dire à voix haute un nombre supérieur ou égal à 1. Dans ce cas et si vous obtenez exactement cette quantité de résultats #evd# sur votre lancer, ajoutez 1 résultat #evd#.",
            faction: ["Rebel_Alliance","New_Republic","Resistance"],
            modifier_func: [
                () => add_action("Calculate")
            ]
        },
         {
            name: "Cassian Andor",
            name_ENG: "Cassian Andor",
            id: 89,
            available: true,
            modify: false,
            slot: "Crew",
            points: 5,
            max_per_squad: 1,
            effect: "Pendant la phase de système, vous pouvez choisir 1 vaisseau ennemi à portée 1–2, dire à voix haute une direction et une vitesse. Votre adversaire vous confirme si la direction puis la vitesse sont correctes. Si les 2 sont correctes, vous pouvez modifier votre cadran de manœuvre.",
            faction: ["Rebel_Alliance"]
        },
        {
            name: "Leia Organa",
            name_ENG: "Leia Organa",
            id: 90,
            available: true,
            modify: false,
            slot: "Crew",
            points: 6,
            max_per_squad: 1,
            faction: ["Rebel_Alliance"],
            charge: 3,
            effect: "Au début de la phase de fin, vous pouvez dépenser 3 #ch#. Chaque vaisseau allié peut retirer 1 marqueur de stress.",
            recurring: 1
        },
        {
            name: "R2-D2",
            name_ENG: "R2-D2",
            id: 91,
            available: true,
            modify: false,
            slot: "Crew",
            points: 8,
            max_per_squad: 1,
            effect: "Pendant la phase de dénouement, si vous êtes endommagé et n’êtes pas protégé, vous pouvez lancer 1 dé d’attaque pour récupérer 1 bouclier. Sur un résultat #hit#, exposez 1 de vos cartes de dégât.",
            faction: ["Rebel_Alliance"]
        },
        {
            name: "Bistan",
            name_ENG: "Bistan",
            id: 92,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 7,
            max_per_squad: 1,
            effect: "Après avoir effectué une attaque principale, si vous êtes concentré, vous pouvez gagner 1 marqueur d’épuisement pour effectuer une attaque bonus.",
            faction: ["Rebel_Alliance"]
        },
{
            name: "Luke Skywalker",
            name_ENG: "Luke Skywalker",
            id: 93,
            available: true,
            modify: true,
            slot: "Gunner",
            points: 8,
            force: 1,
            max_per_squad: 1,
            effect: "Tant que vous effectuez une attaque qui n’est pas une attaque #Farc#, vous pouvez dépenser 1 #fo#. Si vous le faites, lancez 1 dé d’attaque supplémentaire.",
            faction: ["Rebel_Alliance"],
            modifier_func: [
                () => change_stat("Force",1)
            ]
        },
{
            name: "Altruisme",
            name_ENG: "Selfless",
            id: 94,
            
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 3,
            effect: "Tant qu’un autre vaisseau allié à portée 0–1 défend, avant l’étape « Neutraliser les résultats », si vous êtes dans l’arc de l’attaque, vous pouvez subir 1 dégât #crit# pour annuler 1 résultat #crit#.",
            faction: ["Rebel_Alliance"]
        },
 {
            name: "K-2SO",
            name_ENG: "K-2SO",
            id: 95,
            max_per_squad: 8,
            available: true,
            modify: true,
            slot: "Crew",
            faction: ["Rebel_Alliance"],
            effect: "Pendant la phase de système, vous pouvez choisir un vaisseau allié à portée 0–3. Ce vaisseau gagne 1 marqueur de calcul et 1 marqueur de stress.<br>Ajoute l’action #CA# et #JM#",
            max_per_squad: 1,
            points: 7,
            modifier_func: [
                () => add_action("Calculate"),
                () => add_action("Jam")
            ]
        }
        ,

//########################################################IMPERIAL ACADEMY

        {
            name: "Dark Vador",
            name_ENG: "Darth Vader",
            id: 96,
            available: true,
            modify: false,
            slot: "Crew",
            points: 10,
            force: 1,
            max_per_squad: 1,
            effect: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau dans votre arc de tir à portée 0–2 et dépenser 1 #fo#. Dans ce cas, ce vaisseau subit 1 dégât #hit# sauf s’il choisit de retirer 1 marqueur vert.",
            faction: ["Imperial_Academy"],
            modifier_func: [
                () => change_stat("Force",1)
            ]
        },
{
            name: "Grand Moff Tarkin",
            name_ENG: "Grand Moff Tarkin",
            id: 97,
            available: true,
            modify: false,
            slot: "Crew",
            points: 3,
            max_per_squad: 1,
            faction: ["Imperial_Academy"],
            effect: "Pendant la phase de système, vous pouvez dépenser 2 #ch#. Dans ce cas, chaque vaisseau allié peut verrouiller un vaisseau que vous avez verrouillé.",
            charge: 2,
            recurring: 1
        },
 {
            name: "Impitoyable",
            name_ENG: "Ruthless",
            id: 98,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            effect: "Tant que vous effectuez une attaque, vous pouvez choisir un autre vaisseau allié à portée 0–1 du défenseur. Dans ce cas, le vaisseau choisi subit 1 dégât #hit# et vous pouvez changer 1 de vos résultats de dé en un résultat #hit#.",
            points: 1,
            faction: ["Imperial_Academy"]
        },
{
            name: "Moteurs Ioniques de Précision",
            name_ENG: "Precision Ion Engines",
            id: 99,
            max_per_squad: 8,
            available: false,
            modify: false,
            slot: "Modification",
            points: 2,
            effect: "Avant d’exécuter une manœuvre de Virage Koiogran à vitesse 1–3, vous pouvez dépenser 1 #ch# pour exécuter cette manœuvre en tant que #Sleft# ou #Sright# de même vitesse à la place, et vice-versa.",
            charge: 2,
            faction: "",
            restrictions: [1,"keyword", "TIE",""]
        },
        {
            name: "Moteur Ionique Jumelé Mk2",
            name_ENG: "Twin Ion Engine Mk2",
            id: 100,
            max_per_squad: 8,
            available: false,
            modify: false,
            slot: "Modification",
            points: 2,
            effect: "Après avoir effectué une manœuvre rouge, vous pouvez dépenser 1 #ch# pour effectuer un tonneau.",
            restrictions: [1,"keyword", "TIE",""],
            faction: ""
        },
        {
            name: "Chassis Allégé",
            name_ENG: "Lightweight Frame",
            id: 101,
            max_per_squad: 8,
            available: false,
            modify: false,
            slot: "Modification",
            points: 3,
            effect: "Lorsqu’un adversaire vous attaque, il peut modifier un résultat #hit# en #crit# . Si vous deviez lancer 2 dés de défense ou moins, vous pouvez lancer 1 dé de défense supplémentaire.",
            restrictions: [1,"keyword", "TIE",""],
            faction: ""
        },
 {
            name: "Migs Mayfeld",
            name_ENG: "Migs Mayfeld",
            id: 102,
            available: true,
            modify: false,
            points: 5,
            slot: "Gunner",
            max_per_squad: 1,
            effect: "Après avoir effectué une attaque qui n’est pas une attaque #Barc# , vous pouvez effectuer une attaque bonus #Barc# AFFUTEE.",
            faction: ["Pirates_and_Smugglers","Imperial_Academy"]
        },
        {
            name: "Artilleur Impérial",
            nam_ENG: "Imperial Gunner",
            id: 103,
            max_per_squad: 8,
            available: true,
            modify: false,
            points: 5,
            slot: "Gunner",
            effect: "Après avoir effectué une attaque qui a échoué, le défenseur gagne un marqueur d’épuisement.",
            faction: ["Imperial_Academy","ISB","Imperial_Elite_Forces"]
        }
,

//######################################################BOUNTY_HUNTERS_Guild

        {
            name: "Boba Fett",
            name_ENG: "Boba Fett",
            id: 104,
            available: true,
            modify: false,
            slot: "Crew",
            points: 2,
            max_per_squad: 1,
            effect: "Mise en Place : débutez en réserve.<br>À la fin de la Mise en place, placez-vous à portée 0 d’un obstacle et au-delà de la portée 3 de tout vaisseau ennemi",
            faction: ["Bounty_Hunters_Guild"]
        },
         {
            name: "Cad Bane",
            name_ENG: "Cad Bane",
            id: 105,
            available: true,
            modify: false,
            slot: "Crew",
            points: 3,
            max_per_squad: 1,
            effect: "Avant ou après avoir largué ou lancé un engin, vous pouvez effectuer une action d’accélération rouge.",
            faction: ["Bounty_Hunters_Guild"]
        },
        {
            name: "4-LOM",
            name_ENG: "4-LOM",
            id: 106,
            available: true,
            modify: false,
            slot: "Crew",
            points: 4,
            max_per_squad: 1,
            effect: "Tant que vous effectuez une attaque, après avoir lancé les dés d’attaque, vous pouvez nommer un type de marqueur vert. Dans ce cas, gagnez 2 marqueurs ioniques et, pendant cette attaque, le défenseur ne peut pas dépenser de marqueur du type nommé.",
            faction: ["Bounty_Hunters_Guild"]
        },
        {
            name: "IG-88D",
            name_ENG: "IG-88D",
            id: 107,
            available: true,
            modify: true,
            slot: "Crew",
            points: 4,
            max_per_squad: 1,
            effect: "Vous avez la capacité de pilote de chaque autre vaisseau allié qui possède la capacité IG-2000.<br>Après avoir effectué une action #CA#, gagnez 1 marqueur de calcul.",
            faction: ["Bounty_Hunters_Guild"],
            modifier_func: [
                () => add_action("Calculate")
            ]

        },
        {
            name: "Zuckuss",
            name_ENG: "Zuckuss",
            id: 108,
            available: true,
            modify: false,
            slot: "Crew",
            points: 4,
            max_per_squad: 1,
            effect: "",
            faction: ["Bounty_Hunters_Guild"]
        },
 {
            name: "Bossk",
            name_ENG: "Bossk",
            id: 109,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 4,
            max_per_squad: 1,
            effect: "Après avoir effectué une attaque principale ratée, si vous n’êtes pas stressé, vous devez recevoir 1 marqueur de stress pour effectuer une attaque principale bonus contre la même cible",
            faction: ["Bounty_Hunters_Guild"]
        },
 {
            name: "Dengar",
            name_ENG: "Dengar",
            id: 110,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 6,
            max_per_squad: 1,
            faction: ["Bounty_Hunters_Guild"],
            effect: "Après avoir défendu, si l’attaquant est dans votre arc de tir, vous pouvez dépenser 1 #ch# . Dans ce cas, lancez 1 dé d’attaque sauf si l’attaquant choisit de retirer 1 marqueur vert. Sur un résultat #hit# ou #crit#, l’attaquant subit 1 dégât #hit#.",
            recurring: 1,
            charge: 1

        },
 {
            name: "Greedo",
            name_ENG: "Greedo",
            id: 111,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 1,
            max_per_squad: 1,
            faction: ["Bounty_Hunters_Guild"],
            charge: 1,
            effect: "Tant que vous attaquez, vous dépensez 1#ch# pour modifier un résultat #hit# en #crit#.<br>Tant que vous défendez, si la charge est active, l'attaquant peut modifier un résultat #hit# en #crit#.", 
            recurring: 1
        },
 {
            name: "Capteur de Positionnement",
            name_ENG: "Tracking Fob",
            id: 112,
            available: true,
            modify: true,
            points: 3,
            slot: "Illicit",
            max_per_squad: 3,
            effect: "Mise en Place : avant de placer les forces, choisissez un adversaire ; il assigne l'état 'Désigné pour Mourir' à 1 de ses vaisseaux. Il doit l'assigner à un vaisseau limité, si possible.<br>Vous ignorez les restrictions de portée lorsque vous verrouillez le vaisseau qui a l'état Désigné pour Mourir.",
            faction: ["Bounty_Hunters_Guild"],
            modifier_func: [
               () => add_condition("Marked for Elimination")
            ]
        },
        {
            name: "Célèbre",
            name_ENG: "Notorious",
            id: 113,
            max_per_squad: 8,
            available: true,
            modify: false,
            points: 4,
            charge: 2,
            faction: ["Bounty_Hunters_Guild"],
            recurring: 1,
            effect: "", 
            slot: "Talent"
        },
{
            name: "Super Blaster de Poupe",
            name_ENG: "Hotshot Tail Blaster",
            id: 114,
            max_per_squad: 8,
            available: true,
            modify: false,
            points: 2,
            attackb: 2,
            range: [0,1],
            charge: 2,
            slot: "Illicit",
            faction: ["Bounty_Hunters_Guild","Hutt_Cartel","Crime_Syndicates"],
            effect: "Cette attaque peut être effectuée à portée 0.<br>Attaque #Barc#: dépensez 1 #ch#"
           
            
        },

//###################################################MANDALORIAN_CLANS
         {
            name: "Intrépide",
            name_ENG: "Fearless",
            id: 115,
            available: true,
            modify: false,
            slot: "Talent",
            points: 3,
            effect: "Lorsque vous effectuez une attaque principale (Farc), si la portée de l’attaque est 1 et que vous êtes dans le (Farc) du défenseur, vous pouvez modifier l’un de vos résultats en #hit#.",
            faction: ["Mandalorian_Clans"]
        },
 {
            name: "Bo-Katan Kryze",
            name_ENG: "Bo-Katan Kryze",
            id: 116,
            available: true,
            modify: false,
            points: 3,
            slot: "Crew",
            max_per_squad: 1,
            effect: "Après avoir effectué une attaque, si le défenseur a été détruit, tous les vaisseaux alliés à portée 0-2 de vous peuvent retirer un marqueur orange ou rouge.",
            faction: ["Mandalorian_Clans"]
        },
 {
            name: "Fenn Rau",
            name_ENG: "Fenn Rau",
            id: 117,
            available: true,
            modify: false,
            points: 5,
            slot: "Crew",
            max_per_squad: 1,
            effect: "Avant qu'un vaisseau allié à portée 0-2 ne s'engage, si sa maneouvre révélée est au moins de vitesse 1 et qu'il y a un vaisseau ennemi dans son #Farc# à portée 1, ce vaisseau allié peut retirer 1 jeton rouge non acquisition.",
            effect_ENG: "Before a friendly ship at range 0-2 engages, if its revealed maneuver is 1 speed or higher and there is an enemy ship in its (Farc) at range 1, that friendly ship may remove 1 non-lock red token.", 
            faction: ["Mandalorian_Clans","Phoenix_Cell"]
        },
{
            name: "Gar Saxon",
            name_ENG: "Gar Saxon",
            id: 118,
            available: true,
            modify: false,
            points: 6,
            slot: "Crew",
            faction: ["Mandalorian_Clans"],
            effect: "Tant que vous effectuez l'action #TL# vous pouvez choisir uniquement un objet dans votre #Farc# ou votre #Barc# tant que vous effectuez une attaque principale, si le défenseur est dans votre #Farc# ou votre #Barc#, vous pouvez retirer 1 marqueur rouge ou orange du défenseur pour lancer 1 de supplémentaire, pour un maximum de 4.",
            max_per_squad: 1
        },
        {
            name: "Korkie Kryze",
            name_ENG: "Korkie Kryze",
            id: 119,
            available: true,
            modify: false,
            points: 5,
            slot: "Crew",
            faction: ["Mandalorian_Clans"],
            effect: "Après qu’un vaisseau allié dans votre #F180# à portée 1-2 est devenu le défenseur, vous pouvez lui transférer 1 marqueur vert. Tant qu'un vaisseau allié dans votre #F180# à portée 1-2 défend, si vous gênez l'attaque, le défenseur lance 1 dé de défense supplémentaire.",
            max_per_squad: 1
        },
 {
            name: "Pre Vizsla",
            name_ENG: "Pre Vizsla",
            id: 120,
            available: true,
            modify: true,
            points: 5,
            slot: "Crew",
            faction: ["Mandalorian_Clans"],
            effect: "ACTION : Déployez un Super Commando qui est arrimé avec vous.<br>ACTION : Choisissez un Super Commando à portée 0-3. Il peut alors accélérer, même partiellement.",
            max_per_squad: 1,
            modifier_func: [
                add_action("Coordinate")
            ]
        },
{
            name: "Ursa Wren",
            name_ENG: "Ursa Wren",
            id: 121,
            available: true,
            modify: false,
            points: 6,
            slot: "Crew",
            max_per_squad: 1,
            effect: "Vous pouvez maintenir 2 verrouillages qui doivent être sur des objets différents. Lorsqu’un vaisseau allié à portée 0-3 est verrouillé par un ennemi, vous pouvez effectuer une action de verrouillage.",
            faction: ["Mandalorian_Clans"]
        },
{
            name: "Tiber Saxon",
            name_ENG: "Tiber Saxon",
            id: 122,
            available: true,
            modify: false,
            points: 6,
            charge: 2,
            recurring: 1,
            slot: "Gunner",
            effect: "Après avoir effectué une attaque à portée 1-2 qui a touché, si le défenseur n’a pas de carte de dégât face visible, vous pouvez dépenser 1 ou plusieurs charges. Pour chaque charge dépensée, le défenseur gagne un marqueur de contrainte.",
            faction: ["Mandalorian_Clans"],
            max_per_squad: 1
        },
 {
            name: "Blindage Renforcé en Beskar",
            name_ENG: "Beskar Reinforced Plating",
            id: 123,
            max_per_squad: 8,
            available: true,
            modify: false,
            points: 3,
            slot: "Modification",
            charge: 3,
            effect: "Tant que vous défendez si l'attaquant est dans votre #Farc# , avant qu'une carte de dégât ne vous soit attribuée face visible, vous pouvez dépenser 1 #ch# pour recevoir cette carte face cachée à la place ou dépenser 2 #ch# pour la défausser.",
            faction: ["Mandalorian_Clans"]
            
        },
        {
            name: "Optiques Mandaloriennes",
            name_ENG: "Mandalorian Optics",
            id: 124,
            max_per_squad: 8,
            available: true,
            modify: false,
            points: 3,
            slot: "Modification",
            charge: 2,
            effect: "Pendant la phase de système, vous pouvez dépenser 1#ch# pour verrouiller un objet dans votre #Farc#. Tant que vous effectuez une attaque principale, si vous avez un verrouillage sur le défenseur, ignorez les obstacles au-delà de la portée O qui gênent cette attaque.",
            faction: ["Mandalorian_Clans"]
        },


//###########################################################PIRATES_AND_Smugglers
        {
            name: "Chewbacca",
            name_ENG: "Chewbacca",
            id: 125,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 7,
            max_per_squad: 1,
            faction: ["Pirates_and_Smugglers"],
            effect: "Après avoir effectué une attaque, vous pouvez dépenser 2#ch# pour effectuer une attaque améliorée bonus depuis un arc de tir qui n’a pas encore été utilisé ce tour.",
            charge: 2,
            recurring: 1
        },
{
            name: "Cikatro Vizago",
            name_ENG: "Cikatro Vizago",
            id: 126,
            available: true,
            modify: false,
            slot: "Crew",
            points: 1,
            max_per_squad: 1,
            effect: "Pendant la phase de dénouement, vous pouvez choisir 2 améliorations #ill# équipant des vaisseaux alliés à portée 0–2. Dans ce cas, vous pouvez échanger ces améliorations. Fin de Partie : remettez toutes les améliorations #ill# sur leurs vaisseaux d’origine.",
            faction: ["Pirates_and_Smugglers"],
        },
{
            name: "L3-37",
            name_ENG: "L3-37",
            id: 127,
            available: true,
            modify: false,
            slot: "Crew",
            points: 4,
            max_per_squad: 1,
            effect: "Mise en Place : équipez-vous avec cette face visible.<br>Tant que vous défendez, vous pouvez retourner cette carte. Dans ce cas, l’attaquant doit relancer tous les dés d’attaque.<br>Face retournée : Si vous n’êtes pas protégé, diminuez la difficulté de vos manœuvres #Lbank# et #Rbank#.",
            faction: ["Pirates_and_Smugglers"]
        },
 {
            name: "Han Solo",
            name_ENG: "Han Solo",
            id: 128,
            available: true,
            modify: false,
            slot: "Gunner",
            points: 9,
            max_per_squad: 1,
            effect: "Avant de vous engager, vous pouvez effectuer une action #FS# rouge.",
            faction: ["Pirates_and_Smugglers"],
        },
  {
            name: "Largage de Cargaison",
            name_ENG: "Rigged Cargo Chute",
            id: 129,
            available: false,
            modify: false,
            max_per_squad: 8,
            slot: "Illicit",
            points: 4,
            charge: 1,
            effect: "Action : dépensez 1 #ch#. Larguez 1 cargaison égarée en utilisant le gabarit 1#straight#.",
            faction: ["Pirates_and_Smugglers","Hutt_Cartel","Crime_Syndicates"],
            restrictions: [1,"base", "Medium", "Large"]
            
        },
{
            name: "Havoc",
            name_ENG: "Havoc",
            id: 130,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: ["Pirates_and_Smugglers"],
            ship: "Scurrg H-6 Bomber",
            effect: "Retire en emplacement #crew#. Ajoute #tech# et #astromech#. Ajoute 5 points de Loadout et augmente le coût du vaisseau de 1",
            restrictions: [1,"title", "Havoc",""],
            modifier_func: [
                () => also_Occupies("Crew",130),
                () => add_slots("Tech"),
                () => add_slots("Astromech"),
                () => change_stat("loadout",5),
                () => change_stat("points",1),
                () => may_remove_slots("Astromech"), //WARNING ! The order of the slots to remove is very important. You have to start removing the last slot, and keep on removing them starting from the last one. Or Else the function 'may_remove_slot' will fail. The reason is a bit tricky, but to make it simple, this function will remove (splice) elements in the array upgrades_Objets and upgrades_Type thinking the position is the last digit of the slotmenu.id. 
                () => may_remove_slots("Tech")
                
            ]
            
        },
{
            name: "Lando Calrissian",
            name_ENG: "Lando Calrissian",
            id: 131,
            available: true,
            modify: false,
            slot: "Crew",
            points: 2,
            max_per_squad: 1,
            effect: "Action : lancez 2 dés de défense. Pour chaque résultat #eye# obtenu, gagnez 1 marqueur de concentration. Pour chaque résultat #evd# obtenu, gagnez 1 marqueur d’évasion. Si les deux résultats sont vierges, le joueur adverse choisit concentration ou évasion. Vous gagnez 1 marqueur de ce type.",
            faction: ["Pirates_and_Smugglers"]
        },
 {
            name: "Hondo Ohnaka",
            name_ENG: "Hondo Ohnaka",
            id: 132,
            available: true,
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            points: 5,
            effect: "Action : choisissez 2 vaisseaux à portée 1–3 de vous qui sont alliés entre eux. Coordonnez l’un des vaisseaux choisis, puis brouillez l’autre, en ignorant les restrictions de portée.",
            faction: ["Pirates_and_Smugglers"]
        },

        //##Migs Mayfeld id 101

{
            name: "Compartiment de Contrebande",
            name_ENG: "Smuggling Compartment",
            id: 133,
            max_per_squad: 8,
            available: false,
            modify: true,
            slot: "Modification",
            points: 2,
            faction: ["Pirates_and_Smugglers"],
            effect: "Gagnez 1 autre emplacement #mod# et un emplacement #ill#",
            restrictions: [1,"base", "Medium", "Large"],
            modifier_func: [
                () => add_slots("Illicit"),
                () => add_slots("Modification"),
                () => may_remove_slots("Modification"),
                () => may_remove_slots("Illicit")
            ]
            
        },
        {
            name: "Roublard",
            name_ENG: "Cunning",
            id: 134,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Talent",
            points: 3,
            effect: "Après avoir traversé un obstacle ou un engin, gagnez 1 marqueur de concentration et retirez un marqueur rouge.",
            faction: ["Pirates_and_Smugglers"]
        },
        {
            name: "Millenium Falcon",
            name_ENG: "Millenium Falcon",
            id: 135,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: ["Pirates_and_Smugglers"],
            ship: "YT-1300 Light Freighter",
            restrictions: [1, "title", "Millenium Falcon",""],
            effect: "Retire en emplacement #missile# et la capacité 'Vaisseau-Mère'. Ajoute #sensor# et #calculator#. Ajoute 5 points de Loadout et augmente le coût du vaisseau de 1",
            modifier_func: [
                () => also_Occupies("Missile",135),
                () => lose_chassis("Docking Ship"),
                () => add_slots("Sensor"),
                () => add_slots("Calculator"),
                () => change_stat("attackt",1),
                () => change_stat("loadout",5),
                () => change_stat("points",1),
                () => may_remove_slots("Calculator"),
                () => may_remove_slots("Sensor")
            ]
           
        },
        {
            name: "Torpilles à Proton",
            name_ENG: "Proton Torpedoes",
            id: 136,
            max_per_squad: 8,
            available: true,
            modify: false,
            slot: "Torpedo",
            points: 10,
            faction: "",
            effect: "4 dés #Farc# portée 2-3, Attaque #TL#: Dépensez 1 #ch#. Changez 1 résultat #hit# en un résultat #crit#.",
            charge: 2,
            attack: 4,
            range: [2,3],
        },
        {
            name: "Xanadu Blood",
            name_ENG: "Xanadu Blood",
            id: 137,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "Rogue-class Starfighter",
            restrictions: [1,"title", "Xanadu Blood",""],
            effect: "",
            modifier_func: [
                () => add_slots("Payload"),
                () => add_slots("Crew"),
         
            ]
            
        },
        {
            name: "Hound's Tooth",
            name_ENG: "Hound's Tooth",
            id: 138,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "YV-666 Light Freighter",
            restrictions: [1,"title", "Hound's Tooth",""],
            effect: "",
            modifier_func: [
                () => add_slots("Gunner"),
                () => add_slots("Cannon"),
                () => also_Occupies("Illicit",138),
             
            ]
        },
        {
            name: "Slave 1",
            name_ENG: "Slave 1",
            id: 139,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "Firespray-class Patrol Craft",
            restrictions: [1,"title", "Slave 1",""],
            effect: "",
            modifier_func: [
                () => add_slots("Gunner"),
                () => add_slots("Cannon"),
                () => add_slots("Illicit"),
               
            ]
            
        },
        {
            name: "Andrasta",
            name_ENG: "Andrasta",
            id: 140,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "Firespray-class Patrol Craft",
            restrictions: [1,"title", "Andrasta",""],
            effect: "",
            modifier_func: [
                () => add_slots("Payload"),
                () => add_slots("Payload"),
                () => add_slots("Illicit")
              
            ]
            
        },
        {
            name: "Outrider",
            name_ENG: "Outrider",
            id: 141,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "YT-2400 Light Freighter",
            
            restrictions: [1,"title", "Outrider",""],
            effect: "",
            modifier_func: [
                () => add_slots("Gunner"),
                () => add_slots("Cannon"),
                
            ]
        },
        {
            name: "Mist Hunter",
            name_ENG: "Mist Hunter",
            id: 142,
            available: false,
            modify: false,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "G-1A Starfighter",
            restrictions: [1,"title", "Mist Hunter",""],
            effect: "",
            /*modifier_func: [
                [() => change_stat,["points",1]],
                [() => change_stat,["loadout",5]]
            ]*/
        },
        {
            name: "Punishing One",
            name_ENG: "Punishing One",
            id: 143,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "JumpMaster 5000",
           
            restrictions: [1,"title", "Punishing One",""],
            effect: "",
            modifier_func: [
                () => add_slots("Astromech"),
                () => change_stat("attackt",1),
                () => also_Occupies("Crew",143),
               
            ]
        },
        {
            name: "IG-2000",
            name_ENG: "IG-2000",
            id: 144,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 8,
            faction: "",
            ship: "Aggressor Assault Fighter",
            restrictions: [1,"title", "IG-2000",""],
            effect: "",
            modifier_func: [
                () => add_slots("Calculator"),
                () => also_Occupies("Modification",144),
                
            ]
        },
        {
            name: "N1 de Din Djarin",
            name_ENG: "Din Djarin's N1",
            id: 145,
            available: false,
            modify: true,
            slot: "Title",
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "Naboo Royal N-1 Starfighter",
            restrictions: [1,"title", "Din Djarin's N1",""],
            effect: "",
            modifier_func: [
                () => add_slots("Crew"),
                () => add_slots("Tech"),
                () => add_slots("Illicit"),
                () => also_Occupies("Astromech",145),
                () => also_Occupies("Torpedo",145),
             
            ]
        },
        {
            name: "Razor Crest",
            name_ENG: "Razor Crest",
            id: 146,
            slot: "Title",
            available: false,
            modify: false,
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "ST-70 Assault Ship",
            restrictions: [1,"title", "Razor Crest",""],
            effect: "",
            /*modifier_func: [
                [() => change_stat,["points",1]],
                [() => change_stat,["loadout",5]]
            ]*/
        },
        {
            name: "Moldy Crow",
            name_ENG: "Moldy Crow",
            id: 147,
            slot: "Title",
            available: false,
            modify: true,
            points: 0,
            max_per_squad: 1,
            faction: "",
            ship: "HWK-290 Light Freighter",
            restrictions: [1,"title", "Moldy Crow",""],
            effect: "",
            modifier_func: [
                () => add_slots("Illicit"),
                () => add_slots("Cannon"),
                () => also_Occupies("Modification",147),
            ]
        },
        {
            name: "Simulateur de Trajectoire",
            name_ENG: "Trajectory Simulator",
            id: 148,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Tech",
            points: 4,
            faction: "",
            effect: "Pendant la phase de système, si vous êtes censé larguer ou lancer une bombe, vous pouvez la lancer en utilisant le gabarit 5#straight# à la place."
        },
//////////////////Phoenix Cell/////////////////////////
////////////////////////////////////////////////
        {
            name: "Courageux",
            name_ENG: "Brave",
            id: 149,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Talent",
            points: 2,
            faction: ["Phoenix_Cell"],
            effect: "Quand vous défendez à portée, vous pouvez relancer un dé de défense, ou vous pouvez retourner la carte pour relancer plus de dés de défense.",
            effect_ENG: "While defending at range 1, you can reroll a defense die, or you can flip the card to reroll more defense dice."
        },
        {
            name: "Chopper",
            name_ENG: "Chopper",
            id: 150,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            points: 3,
            faction: ["Phoenix_Cell"],
            effect: "Action : Vous pouvez utiliser 1 #ch# pour récupérer un bouclier.<br>Action : Dépenser un bouclier pour récupérer 1 #ch#.",
            effect_ENG: "Action : You can use a charge to recover a shield.<br>Action : Spend a Shield to recover a charge."
        },
           {
            name: "C1-10P",
            name_ENG: "C1-10P",
            id: 151,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Astromech",
            charge: 2,
            points: 3,
            faction: ["Phoenix_Cell","Galactic_Senate","Jedi_Order"],
            effect: "Mise en place : Equipez cette carte face normale. Après que vous exécutez entièrement une manoeuvre, vous pouvez dépenser 1 #ch# pour effectuer une action rouge, même stressé.<br>(Erratique): Après avoir entièrement exécuté une manoeuvre, vous devez choisir un vaisseau à portée 0-1. Il gagne 1 jeton brouillage.",
            effect_ENG: "Setup: Equip this side faceup. After you fully execute a maneuver, you may spend 1 #ch# to perform a red action, even while stressed.<br>(Erratic): After you fully execute a maneuver, you must choose a ship at range 0-1. It gains 1 jam token."
        },
       
/////Fenn rau Mandalorian clans////////
        {
            name: "Ezra Bridger",
            name_ENG: "Ezra Bridger",
            id: 152,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Gunner",
            force: 1,
            points: 10,
            faction: ["Phoenix_Cell"],
            modifier_func: [
                () => change_stat("Force",1)
            ],
            effect: "Après avoir attaqué, vous pouvez dépenser 1 #fo#. Dans ce cas, vous pouvez effectuer une attaque bonus PRECISE de tourelle.",
            effect_ENG: "After you perform an attack, you can spend 1 Force. If you do, you can perform a SHARPENED bonus Turret attack." 
        },
        {
            name: "Kanan Jarrus",
            name_ENG: "Kanan Jarrus",
            id: 153,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            force: 1,
            points: 10,
            faction: ["Phoenix_Cell"],
            modifier_func: [
                () => change_stat("Force",1)
            ],
            effect: "Après qu'un vaisseau allié à portée 0-2 exécute entièrement une manoeuvre blanche, vous pouvez dépenser 1 #fo# pour retirer 1 jeton stress de ce vaisseau.",
            effect_ENG: "After a friendly ship at range 0-2 fully executes a white maneuver, you may spend 1 #fo# to remove 1 stress token from that ship."
        },
        {
            name: "Hera Syndulla",
            name_ENG: "Hera Syndulla",
            id: 154,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Crew",
            points: 4,
            faction: ["Phoenix_Cell","New_Republic"],
            effect: "Vous pouvez exécuter des manoeuvres rouges même stressé. Après avoir entièrement exécuté une manoeuvre rouge, si vous avez 3 jetons stress ou plus, retirez 1 jeton stress et subissez 1 dégat.",
            effect_ENG: "You can execute red maneuvers even while stressed. After you fully execute a red maneuver, if you have 3 or more stress tokens, remove 1 stress token and suffer 1 damage."
        },
        {
            name: "Zeb Orellios",
            name_ENG: "Zeb Orellios",
            id: 155,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Crew",
            points: 1,
            faction: ["Phoenix_Cell"],
            effect: "Vous pouvez attaquer à portée 0. Les vaisseaux ennemis peuvent effectuer des attaques #Farc# à portée 0 contre vous.",
            effect_ENG: "You may perform attacks at range 0. Enemy ships may perform #Farc# attacks at range 0 against you."
        },
        {
            name: "Sabine Wren",
            name_ENG: "Sabine Wren",
            id: 156,
            max_per_squad: 1,
            available: true, 
            modify: false,
            slot: "Gunner",
            points: 5,
            faction: ["Phoenix_Cell","New_Republic"],
            effect: "Lorsque vous effectuez une attaque #tur#, si l'attaque touche, chaque vaisseau allié à portée 0-2 du défenseur retire 1 jeton rouge.",
            effect_ENG: "When you perform a #tur# attack, if the attack hits, each ally ships at range 0-2 of the defender loses 1 red Token."
        },
/////////////////////////CIS////////////////////////////
//////////////////////////////////////////////////////
        {
            name: "Infatigable",
            name_ENG: "Relentless",
            id: 157,
            available: false, 
            modify: false,
            slot: "Talent",
            points: 2,
            faction: ["C.I.S"],
            effect: "Lorsque vous recevez 1 jeton rouge (non-Acquisition), vous pouvez le placer sur cette carte à la place pour l'ignorer (1 max par carte). Lorsque vous exécutez une manoeuvre bleue, vous ne pouvez retirer qu'un seul marqueur rouge. Vous pouvez retirer, le marqueur présent sur la carte.",
            effect_ENG: "When you would receive 1 red token (non Lock), you may place it on this card instead to ignore it (1 max per card). When you execute a blue maneuver, you may remove only one red token. You may remove the red token on this card.",
            restrictions: ['keyword','Droid']
        },
        {
            name: "Nute Gunray",
            name_ENG: "Nute Gunray",
            id: 158,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            points: 5,
            faction: ["C.I.S"],
            effect: "A la fin de la partie, si votre vaisseau est toujours en jeu, gagnez 2 points de scénario.",
            effect_ENG: "At the end of the game, if your ship is still in the play area, win 2 scenario points."
        },
        {
            name: "Poggle le Bref",
            name_ENG: "Poggle the Lesser",
            id: 159,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            points: 0,
            faction: ["Agents_of_Chaos"],
            effect: "",
            effect_ENG: ""
        },
        {
            name: "Missile Discorde",
            name_ENG: "Discord Missile",
            id: 160,
            max_per_squad: 3,
            available: true, 
            modify: false,
            slot: "Missile",
            points: 3,
            faction: ["C.I.S","Agents_of_Chaos"],
            effect: "Au début de la phase d’engagement, vous pouvez dépenser 1 marqueur de calcul et 1 #ch# pour lancer 1 nuée de droïdes buzz en utilisant le gabarit 3 #Lbank#, #straight# ou #Rbank#.<br>La #ch# de cette carte ne peut pas être récupérée",
            effect_ENG: ""
        },
        {
            name: "Droïde Sonde DRK1",
            name_ENG: "DRK1 Probe Droid",
            id: 161,
            available: true, 
            modify: false,
            slot: "Missile",
            max_per_squad: 2,
            points: 2,
            faction: ["C.I.S","Agents_of_Chaos"],
            effect: "Pendant la phase de dénouement, vous pouvez dépenser 1 #ch# pour larguer ou lancer 1 droïde sonde DRK-1 en utilisant un gabarit de vitesse 3. Les #ch# de cette carte ne peuvent pas être récupérées.",
            effect_ENG: ""
        },
        {
            name: "Obus Energétiques",
            name_ENG: "Energy Cell Charge",
            id: 162,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Missile",
            charge: 1,
            points: 4,
            faction: ["C.I.S"],
            effect: "Attaque #CA# portée 2-3, 3 dés : dépensez 1 #ch#. Tant que vous effectuez cette attaque, vous pouvez dépenser 1 marqueur de calcul pour changer 1 résultat #eye# en un résultat #crit#.<br>Action : rechargez cette carte.",
            effect_ENG: ""
        },
        {
            name: "Calculs Indépendants",
            name_ENG: "Independant Calculation",
            id: 163,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Modification",
            points: 2,
            faction: ["C.I.S"],
            effect: "Remplacez votre capacité de vaisseau Calculs en Réseau par la suivante : Calculs Indépendants : tant que vous effectuez une action blanche , vous pouvez la considérer comme rouge pour gagner 1 marqueur de calcul supplémentaire. Les autres vaisseaux ne peuvent pas dépenser vos marqueurs de calcul en utilisant la capacité de vaisseau Calculs en Réseau.",
            effect_ENG: "",
            restrictions: [1,"chassis","Networked Calculations",""]
        },
        {
            name: "Kalani",
            name_ENG: "Kalani",
            id: 164,
            available: true, 
            modify: true,
            slot: "Crew",
            max_per_squad: 1,
            points: 5,
            faction: ["C.I.S"],
            effect: "Après qu’un vaisseau ennemi a exécuté une manœuvre, s’il est dans le d’un vaisseau allié à portée 0–3, vous pouvez dépenser 1 . Dans ce cas, ce vaisseau allié verrouille ce vaisseau ennemi, puis gagne 1 marqueur de stress.",
            effect_ENG: "",
            modifier_func: [
            () => also_Occupies("Calculator",164),
            () => add_action("Calculate")
            ]
        },
        {
            name: "Kraken",
            name_ENG: "Kraken",
            id: 165,
            available: true, 
            modify: true,
            slot: "Crew",
            points: 10,
            max_per_squad: 1,
            faction: ["C.I.S"],
            effect: "Pendant la phase de dénouement, vous pouvez choisir jusqu’à 3 vaisseaux alliés à portée 0-3. Dans ce cas, chacun de ces vaisseaux ne retire pas 1 marqueur de calcul.",
            effect_ENG: "",
            modifier_func: [
            () => also_Occupies("Calculator",165),
            () => add_action("Calculate")
            ]
        },
        {
            name: "AUT-0",
            name_ENG: "AUT-0",
            id: 166,
            available: true, 
            modify: true,
            slot: "Crew",
            max_per_squad: 1,
            points: 3,
            faction: ["C.I.S"],
            effect: "Avant de vous engager, vous pouvez transférer un jeton calcul à un vaisseau calculateur à portée 0-3. Dans ce cas, ce vaisseau effectue une attaque bonus. Vous gagnez 1 jeton désarmé.",
            effect_ENG: "",
            modifier_func: [
            () => also_Occupies("Calculator",166),
            () => add_action("Calculate")
            ]
        },
        {
            name: "Linwodo",
            name_ENG: "Linwodo",
            id: 167,
            available: true, 
            modify: true,
            slot: "Crew",
            max_per_squad: 1,
            points: 5,
            faction: ["C.I.S"],
            effect: "Vous gagnez la capacité 'Calculs en Réseau'. Après qu'un vaisseau allié à portée 0-3 avec #CA# dans sa barre d'action a été détruit, chaque vaisseau allié à portée 0-3 avec #CA# dans sa barre d'action gagne 1 marqueur de calcul.",
            effect_ENG: "You gain the 'Networked Calculation' ship ability. After a friendly ship at range 0-3 with #CA# in its action bar has been destroyed, each friendly ship at range 0-3 with #CA# in its action bar receives 1 calculate token.",
            modifier_func: [
            () => also_Occupies("Calculator",167),
            () => add_action("Calculate"),
            () => add_chassis("Networked Calculations")
            ]
        },
        {
            name: "Général Grievous",
            name_ENG: "General Grievous",
            id: 168,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Crew",
            points: 5,
            faction: ["C.I.S"],
            effect: "Tant que vous défendez, après l’étape « Neutraliser les résultats », s’il y a au moins 2 résultats #hit#/#crit#, vous pouvez dépenser 1 #ch# pour annuler 1 résultat #hit# ou #crit#.<br>Après qu’un vaisseau allié a été détruit, récupérez 1 #ch#.",
            effect_ENG: "",
        },
//////////////////////////RESISTANCE////////////////////////
//////////////////////////////////////////////////
        {
            name: "Héroïque",
            name_ENG: "Heroic",
            id: 169,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Talent",
            points: 2,
            faction: ["Resistance"],
            effect: "Tant que vous défendez ou effectuez une attaque, si vous n'avez que des résultats vierges et au moins 2 résultats, vous pouvez relancer n'importe quel nombre de vos dés.",
            effect_ENG: "When you defend or perform an attack, if all of your results are blank and there are at least 2 results, you may reroll any number of your dice.",
        },
        {
            name: "Kaydel Connix",
            name_ENG: "Kaydel Connix",
            id: 170,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Crew",
            points: 5,
            faction: ["Resistance"],
            effect: "Après avoir révélé votre cadran, vous pouvez régler votre cadran sur une manoeuvre basique de vitesse +1. Lorsque vous exécutez cette manoeuvre, augmentez sa difficulté.",
            effect_ENG: "After you reveal your dial, you may set your dial to a basic maneuver of the next higher speed. While you execute that maneuver, increase its difficulty.",
        },
        {
            name: "Rose Tico",
            name_ENG: "Rose Tico",
            id: 171,
            max_per_squad: 1,
            available: true, 
            modify: false,
            slot: "Crew",
            points: 9,
            faction: ["Resistance"],
            effect: "Lorsque vous défendez ou attaquez, vous pouvez dépenser 1 de vos résultats pour verrouiller l'adversaire.",
            effect_ENG: "While you defend or perform an attack, you may spend 1 of your results to acquire a lock on the enemy ship."
        },
        {
            name: "Peinture Ferrosphère",
            name_ENG: "Ferrosphere Paint",
            id: 172,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Tech",
            points: 2,
            faction: ["Resistance"],
            effect: "Après qu'un ennemi vous a verrouillé, si vous n'êtes pas dans le #bulls# de ce vaisseau, alors il choisit de gagner un jeton stress ou de retirer son verrouillage.",
            effect_ENG: "After an enemy ship locks you, if you are not in that ship's #bulls#, that ship gains 1 stress token unless it chooses to break its lock."
        },
        {
            name: "Finn",
            name_ENG: "Finn",
            id: 173,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Gunner",
            points: 7,
            faction: ["Resistance"],
            effect: "Lorsque vous attaquez ou effectuez une attaque principale, si le vaisseau ennemi est dans votre #Farc#, vous pouvez ajouter 1 résultat vierge (ce dé peut être relancé ou modifié)",
            effect_ENG: "While you defend or perform a primary attack, if the enemy ship is in your #Farc#, you may add 1 blank result to your roll (this die can be rerolled or otherwise modified)"
        },
        {
            name: "Rey",
            name_ENG: "Rey",
            id: 174,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Gunner",
            force: 1,
            points: 11,
            faction: ["Resistance"],
            modifier_func: [
                () => change_stat("Force",1)
            ],
            effect: "Lorsque vous défendez ou attaquez, si le vaisseau ennemi est dans votre #tur#, vous pouvez dépenser 1 #fo# pour modifier l'un de vos résultats vierges en #hit# ou #evd#.",
            effect_ENG: "While you defend or perform an attack, if the enemy ship is in your #tur#, you may spend 1 #fo# to change 1 of your blank results to a #hit# or #evd# result."
        },
        {
            name: "M9-G8",
            name_ENG: "M9-G8",
            id: 175,
            available: true, 
            modify: false,
            slot: "Astromech",
            max_per_squad: 1,
            points: 4,
            faction: ["Resistance"],
            effect: "Lorsqu'un vaisseau que vous avez verrouillé attaque, vous pouvez choisir 1 dé d'attaque. Dans ce cas, l'attaquant relance ce dé.",
            effect_ENG: "While a ship you are locking performs an attack, you may choose 1 attack die. If you do, the attacker rerolls that die."
        },
        {
            name: "Astromech BB",
            name_ENG: "BB Astromech",
            id: 176,
            available: true, 
            modify: false,
            slot: "Astromech",
            charge: 2,
            points: 2,
            faction: ["Resistance"],
            effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour effectuer une action #BR#.",
            effect_ENG: "During System Phase, you may spend 1 #ch# to perform a #BR# action."
        },
        {
            name: "BB-8",
            name_ENG: "BB-8",
            id: 177,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Astromech",
            charge: 2,
            points: 6,
            faction: ["Resistance"],
            effect: "Avant d'excuter une manoeuvre, vous pouvez dépenser 1 #ch# pour effectuer une action #BR# ou #BO#",
            effect_ENG: "Before executing a maneuver, you may spend 1 #ch# to perform a #BR# or #BO# action"
        },
        {
            name: "R6-D8",
            name_ENG: "R6-D8",
            id: 178,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Astromech",
            points: 4,
            faction: ["Resistance"],
            effect: "Tant que vous effectuez une attaque, vous pouvez relancer un nombre de dés d’attaque inférieur ou égal au nombre de vaisseaux alliés à portée 0–3 qui ont le défenseur dans leur #bulls#.",
            effect_ENG: "While you perform an attack, you may reroll as many attack dice as the number of friendly ships which has the defender in their #bulls# at range 0-3."
        },
        {
            name: "R5-X3",
            name_ENG: "R5-X3",
            id: 179,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Astromech",
            charge: 2,
            points: 4,
            faction: ["Resistance"],
            effect: "Avant votre activation ou avant de vous engager, vous pouvez dépenser 1 #ch# pour ignorer les obstacles jusqu’à la fin de cette phase.",
            effect_ENG: "Before you activate or engage, you may spend 1 #ch# to ignore obstacles until the end of this phase."
        },
/////////////////////////First Order//////////////
///////////////////////////////////////////////////
        {
            name: "Fanatique",
            name_ENG: "Fanatical",
            id: 180,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Talent",
            points: 1,
            faction: ["First_Order"],
            effect: "Lorsque vous effectuez une attaque principale, si vous n'êtes pas protégé, vous pouvez modifier 1 résultat #eye# en #hit#",
            effect_ENG: "While you perform a primary attack, if you are not shielded, you may change 1 #eye# result to a #hit# result."
        },
        {
            name: "Général Hux",
            name_ENG: "General Hux",
            id: 181,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            points: 3,
            faction: ["First_Order"],
            effect: "Lorsque vous effectuez une action blanche #CD#, vous pouvez la traiter comme rouge. Dans ce cas, vous pouvez coordonner jusqu'à 2 vaisseaux supplémentaires du même type, et chaque vaisseau coordonné doit effectuer la même action en la considérant comme rouge.",
            effect_ENG: "While you perform a white #CD# action, you may treat it as red. If you do, you may coordinate up to 2 additional ships of the same ship type, and each ship you coordinate must perform the same action, treating that action as red."
        },
        {
            name: "Jace Rucklin",
            name_ENG: "Jace Rucklin",
            id: 182,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Gunner",
            points: 3,
            faction: ["First_Order"],
            effect: "Au début de la phase d'engagement, vous pouvez choisir un vaisseau allié dans votre arc de tir. Dans ce cas, ce vaisseau gagne 1 jeton contrainte.<br>Lorsque vous attaquez, vous pouvez relancer jusqu'à 1 dé pour chaque vaisseau dans votre arc de tir avec 1 ou plusieurs jeton rouge ou orange (non lock).",
            effect_ENG: "At the start of the Engagement Phase, you may choose a friendly ship in your firing arc. If you do, that ship gains 1 strain token.<br>While you perform an attack, you may reroll up to 1 die for each ship in the attack arc with 1 or more non-lock red or orange tokens.", 
        },
        {
            name: "Technicien en Munition du Premier Ordre",
            name_ENG: "First Order Ordnance Tech",
            id: 183,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Gunner",
            points: 2,
            faction: ["First_Order"],
            effect: "ajoute #RL# -> #TL#",
            effect_ENG: "Adds #RL# -> #TL#",
            modifier_func: [
            () => add_action("Reload R-> Lock")
            ]
        },
        {
            name: "Artilleur des Forces Spéciales",
            name_ENG: "Special Forces Gunner",
            id: 184,
            max_per_squad: 8,
            available: false, 
            modify: false,
            slot: "Gunner",
            points: 2,
            faction: ["First_Order"],
            effect: "Lorsque vous effectuez une attaque principale #Farc#, si votre #tur# est dans votre #Farc#, vous pouvez relancez 1 dé d'attaque supplémentaire.<br>Après avoir effectué une attaque principale #Farc#, si votre #tur# est dans votre #Barc#, vous pouvez effectuer une attaque bonus principale #tur#",
            effect_ENG: "While you perform a primary #Farc# attack, if your #tur# is in your #Farc# , you may roll 1 additional attack die.<br>After you perform a primary #Farc# attack, if your #tur# is in your #Barc#, you may perform a bonus primary #tur# attack. ",
            restrictions: [1,"ship","TIE/sf Fighter",""]
        
        }, 
        {
            name: "Kylo Ren",
            name_ENG: "Kylo Ren",
            id: 185,
            available: true, 
            modify: true,
            max_per_squad: 1,
            slot: "Crew",
            force: 1,
            points: 8,
            faction: ["First_Order"],
            modifier_func: [
                () => change_stat("Force",1)
            ],
            effect: "Action: Choisissez 1 vaisseau ennemi à portée 1-3. Dans ce cas, dépensez 1 #fo# pour assigner la condition 'Je vais te montrer le côté obscur' à ce vaisseau",
            effect_ENG: "Action: Choose 1 enemy ship at range 1-3. If you do, spend 1 #fo# to assign the I'll Show You The Dark Side condition to the ship."
            
        },
        {
            name: "Cellules Energétiques au Deuterium",
            name_ENG: "Deuterium Power Cells",
            max_per_squad: 8,
            id: 186,
            available: true, 
            modify: true,
            slot: "Tech",
            charge: 2,
            points: 6,
            faction: ["First_Order","Shadow_Specialists"],
            effect: "Pendant la phase système, vous pouvez dépenser 1 #ch# et gagner 1 jeton désarmé pour récupérer 1 bouclier.<br>Lorsque vous devriez recevoir 1 jeton non lock, si vous n'êtes pas stressé, vous pouvez dépenser 1 #ch# pour gagner 1 jeton stress à la place.",
            effect_ENG: "During the System Phase, you may spend 1 #ch# and gain 1 disarm token to recover 1 shield.<br>Before you would gain 1 non-lock token, if you are not stressed, you may spend 1 #ch# to gain 1 stress token instead.",
            modifier_func: [
            () => also_Occupies('Modification',186)
            ]
            
        },
        {
            name: "Codes Biohexacrypt",
            name_ENG: "Biohexacrypt Codes",
            id: 187,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Calculator",
            points: 1,
            faction: ["First_Order","Shadow_Specialists"],
            effect: "Lorsque vous coordonnez ou brouillez, si vous avez un verrouillage sur un vaisseau, vous pouvez choisir ce vaisseau en ignorant les restrictions de portée.",
            effect_ENG: "While you coordinate or jam, if you have a lock on a ship, you may choose that ship, ignoring range restrictions."
    
        },
        {
            name: "Capitaine Phasma",
            name_ENG: "Captain Phasma",
            id: 188,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            points: 4,
            faction: ["First_Order"],
            effect: "A la fin de la phase d'engagement, chaque vaisseau ennemi à portée 0-1 qui n'est pas stressé reçoit un jeton stress",
            effect_ENG: "At the end of the Engagement Phase, each enemy ship at range 0-1 that is not stressed gains 1 stress token."
    
        },
        {
            name: "Officier de Pont Thanison",
            name_ENG: "Petty Officer Thanison",
            id: 189,
            available: true, 
            modify: false,
            max_per_squad: 1,
            slot: "Crew",
            points: 2,
            faction: ["First_Order"],
            effect: "Pendant la phase d'activation ou d'engagement, après qu'un vaisseau ennemi dans votre #Farc# à portée 0-1 reçoit 1 jeton rouge ou orange, si vous n'êtes pas stressé, vous pouvez recevoir 1 jeton stress. Dans ce cas, ce vaisseau reçoit 1 jeton supplémentaire du même type.",
            effect_ENG: "During the Activation or Engagement Phase, after an enemy ship in your #Farc# at range 0-1 gains a red or orange token, if you are not stressed, you may gain 1 stress token. If you do, that ship gains 1 additional token of the type that it gained."
    
        },
//////////////////////////Imperial Elite Forces////////////
//////////////////////////////////////////////////////
        {
            name: "Efficace",
            name_ENG: "Efficient",
            id: 190,
            max_per_squad: 8,
            available: true, 
            modify: false,
            slot: "Talent",
            points: 2,
            faction: ["Imperial_Elite_Forces"],
            effect: "Lorsque vous détruisez un vaisseau ennemi après l'avoir attaqué, vous pouvez retirer un jeton orange ou rouge, puis vous pouvez effectuer une action.",
            effect_ENG: "When you destroy an enemy ship, you may remove an orange or red token from yourself, then perform an action."
    
        },
        {
            name: "Rukh",
            name_ENG: "Rukh",
            id: 191,
            available: true, 
            max_per_squad: 1,
            modify: false,
            slot: "Crew",
            points: 6,
            faction: ["Imperial_Elite_Forces"],
            effect: "Mise en place : Assignez la condition 'Proie' à un vaisseau. A la fin de la phase d'activation, si vous êtes à portée 0-1 du vaisseau avec la condition 'Proie', il gagne 1 jeton épuisement et 1 jeton contrainte. Lorsque ce vaisseau est détruit, vous devez assigner la condition 'Proie' à un vaisseau au delà de la portée 3 de vous. S'il n'y en a pas, assignez la à un vaisseau à portée 3. Répétez cette opération en réduisant la portée jusqu'à trouver une cible potentielle.",
            effect_ENG: "SETUP : assign the 'Prey' condition to a ship. At the end of activation phase, if you are at range 0-1 of the ship with the prey condition, it gains 1 deplete and 1 strain token. When the ship is destroyed, you MUST assign the prey condition to a ship beyond range 3 of you. If there's none, assign it to a ship at range 3. Continue this operation by reducing the range until there's a suitable target."
    
        },
        {
            name: "Grand Inquisiteur",
            name_ENG: "Grand Inquisitor",
            id: 192,
            available: true, 
            modify: true,
            max_per_squad: 1,
            slot: "Crew",
            force: 1,
            points: 12,
            faction: ["Imperial_Elite_Forces"],
            modifier_func: [
                () => change_stat("Force",1)
            ],
            effect: "Après qu'un vaisseau ennemi à portée 0-2 a révélé son cadran, vous pouvez dépenser 1 #fo# pour effectuer 1 action blanche de votre barre d'action, en considérant cette action comme rouge.",
            effect_ENG: "After an enemy ship at range 0-2 revealed its dial, you may spend 1 #fo# to perform a white action of your action bar, considering it as red."

    
        },
        {
            name: "Ciena Ree",
            name_ENG: "Ciena Ree",
            id: 193,
            max_per_squad: 1,
            available: true, 
            modify: false,
            slot: "Crew",
            points: 4,
            faction: ["Imperial_Elite_Forces"],
            effect: "Après avoir attaqué, vous pouvez derrouiller le défenseur",
            effect_ENG: "After you perform an attack, you can acquire a lock on the defender"
    
        },
        {
            name: "Septième Soeur",
            name_ENG: "Seventh Sister",
            id: 194,
            available: true, 
            max_per_squad: 1,
            modify: true,
            slot: "Crew",
            force: 1,
            points: 8,
            faction: ["Imperial_Elite_Forces"],
            modifier_func: [
                () => change_stat("Force",1)
            ],
            effect: "Si un vaisseau ennemi à portée 0-1 est censé gagner un marqueur de stress, vous pouvez dépenser 1 #fo# pour qu'il gagne 1 jeton brouillage ou tracté à la place.",
            effect_ENG: "When an enemy ship at range 0-1 would receive a stress token, you may spend 1 #fo# so that it receives 1 jam or tractored token instead."
    
        },
        {
            name: "Cinquième Frère",
            name_ENG: "Fifth Brother",
            id: 195,
            available: true, 
            max_per_squad: 1,
            modify: true,
            slot: "Gunner",
            points: 9,
            force: 1,
            faction: ["Imperial_Elite_Forces"],
            modifier_func: [
                () => change_stat("Force",1)
            ],
            effect: "Tant que vous effectuez une attaque, vous pouvez dépenser 1 #fo# pour changer 1 de vos résultats #eye# en #crit#.",
            effect_ENG: "When you perform an attack, you may spend 1 #fo# to change 1 #eye# result into 1 #crit## result."
    
        },
        //////twin ion engine mk2////////
///////////////// Precision Ion Engine/////////
///////////Lightweight Frame/////////////
////////////Imperial Gunner///////////////
{
name: "Sabine's Masterpiece",
name_ENG: "Sabine's Masterpiece",
id: 196,
available: false,
modify: true,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Phoenix_Cell"],
ship: "TIE/ln Fighter",
effect: "",
restrictions: [1,"title", "Sabine's Masterpiece",""],
modifier_func: [
    () => add_slots("Illicit"),        
]

},
{
name: "Black One",
name_ENG: "Black One",
id: 197,
available: false,
modify: true,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Resistance"],
ship: "T-70 X-Wing",
effect: "",
restrictions: [1,"title", "Black One",""],
modifier_func: [
    () => add_slots("Turret"),        
]

},
{
name: "Phantom 1",
name_ENG: "Phantom 1",
id: 198,
available: false,
modify: false,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Phoenix_Cell"],
ship: "Attack Shuttle",
effect: "",
restrictions: [1,"title", "Phantom 1",""],

},
{
name: "Phantom 2",
name_ENG: "Phantom 2",
id: 199,
available: false,
modify: false,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Phoenix_Cell"],
ship: "Sheathipede-Class Shuttle",
effect: "",
restrictions: [1,"title", "Phantom 2",""],

},
{
name: "Sato's Hammer",
name_ENG: "Sato's Hammer",
id: 200,
available: false,
modify: false,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Phoenix_Cell"],
ship: "YT-2400 Light Freighter",
effect: "",
restrictions: [1,"title", "Sato's Hammer",""],

},
{
name: "Mighty Oak Apocalypse",
name_ENG: "Mighty Oak Apocalypse",
id: 201,
available: false,
modify: false,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Phoenix_Cell"],
ship: "YT-2400 Light Freighter",
effect: "",
restrictions: [1,"title", "Mighty Oak Apocalypse",""],

},
{
name: "Nightbrother",
name_ENG: "Nightbrother",
id: 202,
available: false,
modify: true,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Phoenix_Cell"],
ship: "Gauntlet Fighter",
effect: "",
restrictions: [1,"title", "Nightbrother",""],
modifier_func: [
    () => add_slots("Turret"),        
]
},
{
name: "Ghost",
name_ENG: "Ghost",
id: 203,
available: false,
modify: false,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["Phoenix_Cell"],
ship: "VCX-100 Light Freighter",
effect: "",
restrictions: [1,"title", "Ghost",""],
       
},
{
name: "Soulless One",
name_ENG: "Soulless One",
id: 204,
available: false,
modify: true,
slot: "Title",
points: 0,
max_per_squad: 1,
faction: ["C.I.S"],
ship: "Belbullab-22 Starfighter",
effect: "",
restrictions: [1,"title", "Soulless One",""],
modifier_func: [
    () => add_slots("Turret"),  
]       
},


]   