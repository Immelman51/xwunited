const pilots = [ //ne pas metre de parenthèses ( ou ) dans les noms de pilotes car elles sont utilisées pour les cout dans les menus pilote

//################################################################""REBEL_ALLIANCE    
        
        {
            name: "Vétéran de l'Escadron Rouge",
            name_ENG: "Red Squadron Veteran",
            id: 0,
            faction: "Rebel_Alliance",
            max_per_squad: 8,
            ship: "T-65 X-wing",
            modify: false,
	       force: 0,
            shipId: 0,
            skill: 3,
            points: 6,
            loadout: 5,
            slots: []
        },
        {
            name: "Luke Skywalker",
            name_ENG: "Luke Skywalker",
            id: 1,
            modify: false,
	        max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            shipId: 0,
            skill: 5,
            points: 9,
            loadout: 10,
            force: 2,
            ability: "Après être devenu le défenseur (avant que les dés ne soient lancés), vous pouvez récupérer 1 #fo# .",
            ability_ENG: "After being a defender (before dice are rolled), you may recover 1 #fo#.",
            slots: [
                "Talent",
                "Force"               
            ]
        },
        
        {
            name: "Wedge Antilles",
            name_ENG: "Wedge Antilles",
            id: 2,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            modify: false,
		    force: 0,
            shipId: 0,
            skill: 6,
            points: 8,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, le défenseur lance 1 dé de défense en moins.",
            ability_ENG: "While you perform an attack, the defender rolls 1 less attack die.",
            slots: [
                "Talent",
                "Talent",
                "Talent"
            ]
        },
       
        {
            name: "Biggs Darklighter",
            name_ENG: "Biggs Darklighter",
            id: 3,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            modify: false,
		    force: 0,
            shipId: 0,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Tant qu’un autre vaisseau allié à portée 0–1 défend, avant l’étape « Neutraliser les résultats », si vous êtes dans l’arc de l’attaque, vous pouvez subir 1 dégât #hit# ou #crit# pour annuler 1 dégât correspondant.",
            ability_ENG: "While another friendly ship at range 0-1 defends, before the Neutralize results step, if you are in the attack arc, you may suffer 1 #hit# or #crit# damage to cancel 1 equivalent damage.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Wes Janson",
            name_ENG: "Wes Janson",
            id: 4,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            modify: false,
		    force: 0,
            shipId: 0,
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 5,
            loadout: 15,
            ability: "Après avoir effectué une attaque, vous pouvez dépenser 1 #ch# pour assigner au défenseur 1 marqueur de brouillage. Après avoir défendu, vous pouvez dépenser 1 #ch# pour assigner à l'attaquant 1 marqueur de brouillage.",
            ability_ENG: "After performing an attack, you may spend 1 #ch# to assign 1 jam token to the defender. After defending, you may spend 1 #ch# to assign 1 jam token to the defender.",
            slots: [
                "Talent",
                "Talent"
               
            ]
        },
{
            name: "Norra Wexley",
            name_ENG: "Norra Wexley",
            id: 5,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            modify: false,    
	        force: 0,
            shipId: 1,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez, si un vaisseau ennemi est à portée 0–1, ajoutez 1 résultat #evd# à vos résultats de dés.",
            ability_ENG: "While defending, if an anemy ship is at range 0-1, add 1 #evd# result to your dice results.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
{
            name: "Horton Salm",
            name_ENG: "Horton Salm",
            id: 6,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            modify: false,    
	        ship: "BTL-A4 Y-wing",
            force: 0,
            shipId: 1,
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, vous pouvez relancer 1 dé d’attaque pour chaque autre vaisseau allié à portée 0–1 du défenseur.",
            ability_ENG: "While you perform an attack, you may reroll 1 attack dice for each other friendly ship at range 0-1 of the defender.", 
            slots: [
                "Talent",
                "Talent"
              
            ]
        },
        {
            name: '"Dutch" Vander',
            name_ENG: '"Dutch" Vander',
            id: 7,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            modify: false,
		    force: 0,
            shipId: 1,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué l’action #TL#, vous pouvez choisir 1 vaisseau allié à portée 1–3. Ce vaisseau allié peut verrouiller l’objet que vous avez verrouillé, en ignorant les restrictions de portée",
            ability_ENG: "After performing a #TL# action, you may choose 1 friendly ship at range 1-3. This friendly ship may lock the object you have locked, ignoring range restrictions.",
            slots: [
                "Talent",
            
            ]
        },
        {
            name: "Evaan Verlaine",
            name_ENG: "Evaan Verlaine",
            id: 8,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            modify: false,
		    force: 0,
            shipId: 1,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez dépenser 1 marqueur de concentration pour choisir un vaisseau allié à portée 0–1. Dans ce cas, ce vaisseau allié lance 1 dé de défense supplémentaire tant qu’il défend, jusqu’à la fin du round.",
            ability_ENG: "At the beginning of Engagement Phase, you may spend 1 focus token to choose a friendly ship at range 0-1. If you do, this friendly ship rolls 1 additional defense die while defending until then end of the round.",
            slots: [
                "Talent",
                
            ]
        },
        {
            name: "Vétéran de l'Escadron Or",
            name_ENG: "Gold Squadron Veteran",
            id: 9,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            max_per_squad: 8,
            modify: false,
		    force: 0,
            shipId: 1,
            skill: 3,
            points: 5,
            loadout: 5,
            slots: []
        },
{
            name: "Bodhi Rook",
            name_ENG: "Bodhi Rook",
            id: 10,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            modify: false,    
	        force: 0,
            shipId: 34,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Les vaisseaux alliés peuvent verrouiller des objets à portée 0–3 de n’importe quel vaisseau allié.",
            ability_ENG: "Friendly ships may lock objects at range 0-3 of any friendly ship.",
            slots: [
                "Talent"
                
            ]
        },
        {
            name: "Cassian Andor",
            name_ENG: "Cassian Andor",
            id: 11,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            modify: false,
		    force: 0,
            shipId: 34,
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’activation, vous pouvez choisir 1 vaisseau allié à portée 1–3. Dans ce cas, ce vaisseau allié retire 1 marqueur de stress.",
            ability_ENG: "At the beginning of Activation Phase, you may choose 1 friendly ship at range 1-3. If you do, this friendly ship removes 1 stress token.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
        {
            name: "Heff Tobber",
            name_ENG: "Heff Tobber",
            id: 12,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            modify: false,
		    force: 0,
            shipId: 34,
            skill: 2,
            points: 7,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a exécuté une manœuvre, s’il est à portée 0, vous pouvez effectuer une action.",
            ability_ENG: "After an enemy ship executes a maneuver, if it is at range 0, you may perform an action.",
            slots: [
                "Talent"
            ]
                
        },
{
            name: "K-2SO",
            name_ENG: "K-2SO",
            id: 13,
            faction: "Rebel_Alliance",
            max_per_squad: 1,
            skill: 3,
            ship: "UT-60D U-wing",
            modify: true,    
	        force: 0,
            shipId: 34,
            points: 7,
            loadout: 10,
            ability: "Après avoir gagné un marqueur de stress, gagnez 1 marqueur de calcul.",
            ability_ENG: "After you receive a stress token, receive 1 calculate token.",
            slots: [

            ],
	        modifier_func: [
		        () => droid()
		]
        },
        {
            name: "Jan Ors",
            name_ENG: "Jan Ors",
            id: 14,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            modify: true,
		    force: 0,
            shipId: 8,
            skill: 5,
            points: 7,
            loadout: 15,
            title: ["Moldy Crow"],
            ability: "Tant qu’un vaisseau allié situé dans votre arc de tir effectue une attaque principale, si vous n’êtes pas stressé, vous pouvez gagner 1 marqueur de stress. Dans ce cas, ce vaisseau peut lancer 1 dé d’attaque supplémentaire.",
            ability_ENG: "While a friendly ship in your firing arc performs a primary attack, if you are not stressed, you may receive 1 stress token. If you do, this ship may roll 1 additional attack die.",
            slots: [
                "Talent",
                "Talent",
                "Title"          
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Illicit"),
                () => add_slots("Cannon"),
                () => also_Occupies("Modification",146),
                    ]
        },
        {
            name: "Roark Garnet",
            name_ENG: "Roark Garnet",
            id: 15,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            modify: false,
		    force: 0,
            shipId: 8,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau situé dans votre arc de tir. Dans ce cas, pendant cette phase, il s’engage à l’initiative 7 au lieu de le faire à sa valeur d’initiative standard.",
            ability_ENG: "At the beginning of Engagement phase, you may choose 1 ship in your firing arc. If you do, during this phase, it engages at initiative 7 instead engaging at its original initiative.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
        {
            name: "Kyle Katarn",
            name_ENG: "Kyle Katarn", 
            id: 16,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            modify: true,
		    force: 0,
            shipId: 8,
            skill: 3,
            points: 6,
            loadout: 15,
            title: ["Moldy Crow"],
            ability: "Au début de la phase d’engagement, vous pouvez transférer 1 de vos marqueurs de concentration à un vaisseau allié situé dans votre arc de tir.",
            ability_ENG: "At the beginning of Engagement Phase, you may transfer 1 of your focus tokens to a friendly ship in your firing arc.",
            slots: [
                "Talent",
               "Title"
                
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Illicit"),
                () => add_slots("Cannon"),
                () => also_Occupies("Modification",146),
                    ]
        },
        {
            name: "Palob Godalhi",
            name_ENG: "Palob Godalhi",
            id: 17,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            modify: true,
		    force: 0,
            shipId: 8,
            skill: 3,
            points: 8,
            loadout: 15,
            title: ["Moldy Crow"],
            ability: "Au début de la phase d’engagement, vous pouvez transférer un marqueur de stress de votre vaisseau vers un vaisseau allié dans votre arc de tir. Lorsque vous retirez un marqueur de stress de votre vaisseau, vous pouvez effectuer une action.",
            ability: "At the beginning of Engagement Phase, you may transfer 1 stress token from you to a friendly ship in your firing arc. When you remove a stress token from you, you may perform an action.",
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Illicit"),
                () => add_slots("Cannon"),
                () => also_Occupies("Modification",146),
                    ]
        },
        {
            name: "Jake Farell",
            name_ENG: "Jake Farell",
            id: 18,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            modify: false,
		    force: 0,
            shipId: 2,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué une action #BR# ou #BO#, vous pouvez choisir un vaisseau allié à portée 0–1. Ce vaisseau peut effectuer une action #FS# .",
            ability_ENG: "After performing a #BR# or #BO# action, you may choose a friendly ship at range 0-1. This ship may perform a #FS# action.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
        {
            name: "Arvel Crynyd",
            name_ENG: "Arvel Crynyd",
            id: 19,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            modify: false,
	        force: 0,
            shipId: 2,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Vous pouvez effectuer des attaques principales à portée 0. Si vous deviez échouer une action #BO# qui vous amènerait à chevaucher un autre vaisseau, résolvez-la comme si vous exécutiez partiellement une manœuvre à la place.",
            ability_ENG: "You may perform primary attacks at range 0. If you would fail a #BO# action because you would overlap an other ship, perform it as you would execute partially a maneuver instead.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
 {
            name: "Tycho Celchu",
            name_ENG: "Tycho Celchu",
            id: 20,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            modify: false,   
	        force: 0,
            shipId: 2,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez exécuter des actions, même si vous êtes stressé.",
            ability_ENG: "While you have 2 stress tokens or less, you may perform actions, even while stressed.",
            slots: [
                "Talent",
                "Talent",
                "Talent"
                
                
            ]
        },
        {
            name: "Gemmer Sojan",
            name_ENG: "Gemmer Sojan",
            id: 21,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            modify: false,
		    force: 0,
            shipId: 2,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Tant que vous êtes à portée 1 d’un vaisseau ennemi, augmentez votre agilité de 1.",
            ability_ENG: "While you are at range 1 of an enemy ship, increase your agility by 1.",
            slots: [
                "Talent",
                "Talent"
                
                
            ]
        },
        {
            name: "Pilote de l'Escadron Vert",
            name_ENG: "Green Squadron Pilot",
            id: 22,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            max_per_squad: 8,
            modify: false,
	        force: 0,
            shipId: 2,
            skill: 3,
            points: 5,
            loadout: 5,
            slots: [
                "Talent"
                
            ]
        },
        {
            name: "Braylen Stramm",
            name_ENG: "Braylen Stramm",
            id: 23,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            modify: false,
		    force: 0,
            shipId: 10,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez relancer jusqu’à 2 de vos dés.",
            ability_ENG: "While you defend or perform an attack, if you are stressed, you may reroll up to 2 of your dice.", 
            slots: [
                "Talent"
            ]
        },
        {
            name: "Ten Numb",
            name_ENG: "Ten Numb",
            id: 24,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            modify: false,
		    force: 0,
            shipId: 10,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de stress pour changer tous vos résultats #eye# en résultats #hit# ou #evd# .",
            ability_ENG: "While you defend or perform an attack, you may spend 1 stress token to change all your #eye# results into #hit# or #evd# results.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
{
            name: "Netrem Pollard",
            name_ENG: "Netrem Pollard", 
            id: 25,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            modify: false,    
	        force: 0,
            shipId: 10,
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Après avoir effectué un tonneau, vous pouvez choisir 1 vaisseau allié qui n’est pas stressé à portée 0–1. Ce vaisseau gagne 1 marqueur de stress, puis vous pouvez pivoter à 180°.",
            ability_ENG: "After you perform a barell roll, you may choose 1 friendly ship with no stress at range 0-1. This ship receives 1 stress token, then you may rotate at 180°.",
            slots: [
                "Talent"            
            ]
        },
{
            name: "Gina Moonsong",
            name_ENG: "Gina Moonsong",
            id: 26,
            faction: "Rebel_Alliance",
            modify: false,    
	        max_per_squad: 1,
            skill: 5,
            ship: "A/SF-01 B-wing",
            force: 0,
            shipId: 10,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous devez transférer 1 de vos marqueurs de stress à un autre vaisseau allié à portée 0–2.", 
            ability_ENG: "At the beginning of Engagement phase, you must transfer 1 of your stress tokens to another friendly ship at range 0-2.",
            slots: [
                "Talent",
                "Talent"]
               
        },
 {
            name: "Pilote de l'Escadron Bleu",
            name_ENG: "Blue Squadron Pilot",
            id: 27,
            faction: "Rebel_Alliance",
            max_per_squad: 8,
            ship: "A/SF-01 B-wing",
            modify: false,   
	        force: 0,
            shipId: 10,
            skill: 2,
            points: 7,
            loadout: 5,
            slots: []
        },
        {
            name: "Shara Bey",
            name_ENG: "Shara Bey",
            id: 28,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "ARC-170 Starfighter",
            modify: false,
		    force: 0,
            shipId: 30,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque principale, vous pouvez dépenser 1 marqueur de verrouillage que vous avez sur le vaisseau ennemi pour ajouter 1 résultat #eye# aux résultats de vos dés.",
            ability_ENG: "While you defend or perform a primary attack, you may spend 1 lock token you have on the defender to add 1 #eye# result to your dice.",
            slots: [
                "Talent",
                "Talent"                
            ]
        },
        {
            name: "Garven Dreis",
            name_ENG: "Garven Dreis",
            id: 29,
            max_per_squad: 1,
            faction: "Rebel_Alliance",
            ship: "ARC-170 Starfighter",
            modify: false,
		    force: 0,
            shipId: 30,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Après avoir dépensé un marqueur de concentration, vous pouvez choisir 1 vaisseau allié à portée 1–3. Ce vaisseau allié gagne 1 marqueur de concentration.",
            ability_ENG: "After you spend a focus token, you may choose 1 friendly ship at range 1-3. This friendly ship receives 1 focus token.",
            slots: [
                "Talent"                
            ]
        },

//############################################################# IMPERIAL_Academy

       {
            name: "Capitaine Kagi",
            name_ENG: "Captain Kagi",
            id: 30,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            modify: false,
	        force: 0,
            shipId: 9,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 ou plusieurs vaisseaux alliés à portée 0–3. Dans ce cas, transférez tous les marqueurs de verrouillage ennemis des vaisseaux choisis vers vous.", 
            ability: "At the beginning of Engagement Phase, you may choose 1 or several friendly ships at range 0-3. If you do, transfer all enemy lock tokens from the chosen ships to you.",
            slots: [                
                "Talent"                
            ]
        },
        {
            name: "Lieutenant Sai",
            name_ENG: "Lieutenant Sai",
            id: 31,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            modify: false,
		    force: 0,
            shipId: 9,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué une action #CO#, si le vaisseau que vous avez choisi effectue une action de votre barre d’action, vous pouvez effectuer cette action.",
            ability_ENG: "After you perform a #CO# action, if the ship you chose performs an action that is on your action bar, you may perform that action.",
            slots: [
                    ]
        },
        {
            name: "Colonel Jendon",
            name_ENG: "Colonel Jendon",
            id: 32,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            modify: false,
		    force: 0,
            shipId: 9,
            skill: 3,
            charge: 2,
            points: 7,
            loadout: 10,
            ability: "Au début de la phase d’activation, vous pouvez dépenser 1 #ch#. Dans ce cas, lorsqu’un vaisseau allié verrouille une cible à ce round, il doit le faire au-delà de la portée 3 à la place de la portée 0–3.",
            ability_ENG: "At the beginning of Activation Phase, you may spend 1 #ch#. If you do, when a friendly ship locks a target this round, he must do it beyond range 3 instead of range 0-3.",
            slots: [
                ]
        }, 
        {
            name: "Dark Vador",
            name_ENG: "Darth Vader",
            id: 33,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            modify: false,
            shipId: 5,
            skill: 6,
            points: 10,
            loadout: 10,
            force: 3,
            ability: "Tant que vous effectuez une attaque, vous pouvez dépenser 1 #fo# pour changer 1 résultat vierge en un résultat #hit#.",
            ability_ENG: "While you perform an attack, you may spend 1 #fo# to change 1 blank result into a #hit# result.",
            slots: [
                "Force",
                "Force",
                "Talent"
            ]
        },
        {
            name: "Maarek Stele",
            name_ENG: "Maarek Stele",
            id: 34,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            modify: false,
		    force: 0,
            shipId: 5,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, si une carte de dégât devrait être attribuée face visible au défenseur, piochez 3 cartes de dégât à la place, choisissez-en 1, et défaussez les autres.",
            ability: "When you perform an attack, if a damage card would be dealt face up to the defender, draw 3 damage card instead, choose 1, and discard the others.",
            slots: [
                "Talent"               
            ]
        },
        {
            name: "Zertik Strom",
            name_ENG: "Zertik Strom",
            id: 35,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            modify: false,
		    force: 0,
            shipId: 5,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Pendant la phase de dénouement, vous pouvez dépenser un marqueur de verrouillage que vous avez sur un vaisseau ennemi pour exposer 1 carte de dégât de ce dernier.",
            ability: "During End Phase, you may spend a lock token you have on an enemy ship to expose 1 of its damage card.",  
            slots: [
                "Talent",
            ]
        },
        {
            name: "Juno Eclipse",
            name_ENG: "Juno Eclipse",
            id: 36,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            modify: false,
		    force: 0,
            shipId: 5,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Tant que vous exécutez une manœuvre, vous pouvez exécuter une manœuvre de même direction et de même difficulté mais avec une vitesse supérieure ou inférieure de 1 à la place.",
            ability_ENG: "While you execute a maneuver, you may execute a maneuver of the same direction and same difficulty but with a speed greater or lower by 1 instead.",
            slots: [
                "Talent"
        
            ]
        },
        {
            name: "Pilote de l'Escadron Alpha",
            name_ENG: "Alpha Squadron Pilot",
            id: 37,
            faction: "Imperial_Academy",
            max_per_squad: 8,
            ship: "TIE/in Interceptor",
            modify: false,
		    force: 0,
            shipId: 6,
            skill: 1,
            points: 5,
            loadout: 5,
            slots: [
                "Talent"
            ]
        },
        {
            name: "Lieutenant Lorrir",
            name_ENG: "Lieutenant Lorrir",
            id: 38,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            modify: false,
		    force: 0,
            shipId: 6,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez un tonneau, vous devez utiliser le gabarit #Lbank# ou #Rbank# à la place du gabarit #straight#.",
            ability_ENG: "While you perform a barell roll, you must use the template #Lbank# or #Rbank# instead of the #straight# template.",
            slots: [
                "Talent",
                "Talent"

            ]
        },
 {
            name: "Nash Windrider",
            name_ENG: "Nash Windrider",
            id: 39,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            modify: false,   
	        force: 0,
            shipId: 6,
            skill: 2,
            charge: 1,
            recurring: 1,
            points: 6,
            loadout: 10,
            ability: "Pendant la phase d’engagement, après qu’un petit vaisseau allié à portée 0–3 a été détruit, s’il ne s’était pas déjà engagé à cette phase, vous pouvez dépenser 1 #ch#. Dans ce cas, il s’engage à l’initiative actuelle.",
            ability_ENG: "During Engagement Phase, after a small friendly ship at range 0-3 is destroyed, if he hasn't engaged yet during this phase, you may spend 1 #ch#. If you do, he engages with the current initiative.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
{
            name: "Vult Skerris",
            name_ENG: "Vult Skerris",
            id: 40,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            modify: false,    
	        force: 0,
            shipId: 6,
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, et s’il y a un vaisseau allié à portée 1 du vaisseau ennemi attaquant ou défendant, vous pouvez dépenser 1 #ch#. Dans ce cas, vous pouvez dépenser 1 marqueur vert appartenant à ce vaisseau allié.",
            ability_ENG: "While you defend or perform an attack, and if there's a friendly ship at range 1 of the enemy ship attacking or defending, you may spend 1 #ch#. If you do, you may spend 1 green token owned by this friendly ship.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
 {
            name: "Commandant Goran",
            name_ENG: "Commandant Goran",
            id: 41,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            modify: false,   
	        force: 0,
            shipId: 6,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Au début de la Phase d'Engagement, choisissez un vaisseau allié à portée 0–3 avec une initiative plus faible que la vôtre. Le vaisseau choisi gagne 1 marqueur d'évasion et retire 1 marqueur rouge non-stress.",
            ability_ENG: "At the beginning of Engagement Phase, choose a friendly ship at range 0-3 with a lower initiative than you. The chose ship receives 1 evade token and removes 1 non-stress red token.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
         {
            name: "Capitaine Jonus",
            name_ENG: "Captain Jonus",
            id: 42,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            modify: false,
		    force: 0,
            shipId: 11,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–1 effectue une attaque spéciale, il peut relancer jusqu’à 2 dés d’attaque.",
            ability_ENG: "While a friendly ship at range 0-1 performs a special attack, it can reroll up to 2 attack dice.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Major Rhymer",
            name_ENG: "Major Rhymer",
            id: 43,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            modify: false,
		    force: 0,
            shipId: 11,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque spéciale, vous pouvez augmenter ou réduire de 1 le prérequis de portée, dans une limite de 0–3.",
            ability_ENG: "While performing a special attack, you may increase or decrease the range restriction by 1, within a limit of 0-3.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Tomax Bren",
            name_ENG: "Tomax Bren",
            id: 44,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            modify: false,
		    force: 0,
            shipId: 11,
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Après avoir effectué une action #RD#, vous pouvez récupérer 1 #ch# d’une de vos cartes améliorations.",
            ability_ENG: "After you perform a #RD# action, you may recover 1 #ch# from 1 of you upgrade cards.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
        {
            name: '"Deathfire"',
            name_ENG: '"Deathfire"',
            id: 45,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            modify: false,
		    force: 0,
            shipId: 11,
            skill: 2,
            charge: 2,
            recurring: true, 
            points: 6,
            loadout: 10,
            ability: "Après avoir entièrement exécuté une manœuvre à vitesse 3-5, si vous n'avez pas largué ou lancé d'engin à ce round, vous pouvez dépenser 2#ch# pour larguer ou lancer une bombe en utilisant le gabarit 3#straight#.",
            ability_ENG: "After you execute a speed 3-5 maneuver, if you haven't dropped or launched any device this round, you may spend 2 #ch# to drop or launch a bomb using the 3 #straight# template.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Pilote de l'Escadron Cimeterre",
            name_ENG: "Scimitar Squadron Pilot",
            id: 46,
            faction: "Imperial_Academy",
            max_per_squad: 8,
            ship: "TIE/sa Bomber",
            modify: false,
		    force: 0,
            shipId: 11,
            skill: 2,
            points: 5,
            loadout: 5,
            slots: []
        },
        {
            name: '"Howlrunner"',
            name_ENG: '"Howlrunner"',
            id: 47,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            modify: false,
		    force: 0,
            shipId: 4,
            skill: 5,
            points: 5,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–1 effectue une attaque principale, il peut relancer 1 dé d’attaque.",
            ability_ENG: "While a friendly ship at range 0-1 performs a primary attack, it can reroll 1 attack die.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
{
            name: '"Mauler" Mithel',
            name_ENG: '"Mauler" Mithel',
            id: 48,
            max_per_squad: 1,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            modify: false,    
	        force: 0,
            shipId: 4,
            skill: 5,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, si un allié Dark Vador ou 'Backstabber' est dans votre arc #Larc# ou #Rarc# à portée 0-1, lancez 1 dé d'attaque supplémentaire.",
            ability_ENG: "While you perform a primary attack, if a friendly Darth Vader or 'Backstabber' is in your #Larc# or #Rarc# at range 0-1, roll 1 additional 1 attack die.",
            slots: [
                "Talent"
            ]
        },
 {
            name: '"Backstabber"',
            name_ENG: '"Backstabber"',
            max_per_squad: 1,
            id: 49,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            modify: false,   
	        force: 0,
            shipId: 4,
            skill: 5,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, si un allié Dark Vador ou 'Mauler' Mithel est dans votre arc #Larc# ou #Rarc# à portée 0-1, lancez 1 dé d'attaque supplémentaire.",
            ability_ENG: "While you perform a primary attack, if a friendly Darth Vader or 'Mauler' Mithel is in your #Larc# or #Rarc# at range 0-1, roll 1 additional 1 attack die.",
            upgrades: [
                "Talent"
            ]
        },
 {
            name: '"Dark Curse"'  ,          
            name_ENG: 'Dark Curse"', 
            max_per_squad: 1,
            id: 50,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            modify: false,   
	        force: 0,
            shipId: 4,
            skill: 6,
            points: 4,
            loadout: 10,
            ability: "Tant que vous défendez, les dés de l’attaquant ne peuvent pas être modifiés.",
            ability_ENG: "While you defend, the attacker's dice cannot be modified.",
            upgrades: [
                "Talent"
            ]
        },
{
            name: "Pilote de l'Académie",
            name_ENG: "Academy Pilot",
            id: 51,
            faction: "Imperial_Academy",
            max_per_squad: 8,
            ship: "TIE/ln Fighter",
            modify: false,    
	        force: 0,
            shipId: 4,
            skill: 1,
            points: 3,
            loadout: 0,
            slots: []
        },
{
            
            name: "Cadet de l'Académie Carida",
            name_ENG: "Carida Academy Cadet",
            id: 52,
            max_per_squad: 8,
            faction: "Imperial_Academy",
            modify: false,    
	        skill: 1,
            ship: "TIE/rb Heavy",
            force: 0,
            shipId: 69,
            points: 5,
            loadout: 5,
            slots: []
        },
        
        {
            name: "Lyttan Dree",
            name_ENG: "Lyttan Dree", 
            id: 53,
            faction: "Imperial_Academy",
            skill: 3,
            modify: false,
		    max_per_squad: 1,
            ship: "TIE/rb Heavy",
            force: 0,
            shipId: 69,
            points: 6,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–2 effectue une attaque, si vous êtes dans le #Larc# ou #Rarc# du défenseur, l’attaquant peut relancer 1 dé d’attaque.",
            ability_ENG: "While a friendly ship at range 0-2 performs an attack, if you are in the #Larc# or #Rarc# of the defender, the attacker may reroll 1 attack die.", 
            slots: [
                "Talent"
            ]
        },
        {
            name: '"Rampage"',
            name_ENG: '"Rampage"',
            id: 54,
            faction: "Imperial_Academy",
            skill: 4,
            max_per_squad: 1,
            modify: false,
		    ship: "TIE/rb Heavy",
            force: 0,
            shipId: 69,
            points: 6,
            loadout: 10,
            ability: "Après avoir exécuté une manœuvre à vitesse 3–4, vous pouvez choisir un vaisseau situé dans votre #tur# à portée 0–1. Dans ce cas, ce vaisseau gagne 1 marqueur de contrainte, ou 2 marqueurs de contrainte si vous êtes endommagé.",
            ability_ENG: "After you execute a speed 3-4 maneuver, you may choose a ship in your #tur# at range 0-1. If you do, this ship receives 1 strain token, or 2 strain tokens if you are damaged.", 
            slots: [
                "Talent"
            ]
        },
 {
            name: "Leader d'Escadron Ubbel",
            name_ENG: "Flight Leader Ubbel",
            id: 55,
            max_per_squad: 1,
            modify: false,   
	        faction: "Imperial_Academy",
            ship: "TIE/rb Heavy",
            force: 0,
            shipId: 69,
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Après qu'un vaisseau allié à portée 0-2 a défendu, si une carte de dégât lui a été attribuée, vous pouvez effectuer une attaque bonus contre l'attaquant.",
            ability_ENG: "After a friendly ship at range 0-2 defends, if a damage card was dealt to him, you may perform a bonus attack against the attacker.", 
            slots: [
                "Talent",
                "Talent"
            ]
        },



//############################################################ MANDALORIAN_CLANS

 {
            name: "Fenn Rau",
            name_ENG: "Fenn Rau",
            id: 56,
            max_per_squad: 1,
            modify: false,   
	        faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            force: 0,
            shipId: 31,
            skill: 6,
            points: 10,
            loadout: 10,
            ability: "Lorsque vous attaquez ou défendez, si l’attaque est à portée 1, vous pouvez lancer 1 dé supplémentaire.",
            ability_ENG: "While you attack or defend, if the attack is at range 1, you may roll 1 additional die.", 
            slots: [
                "Talent",
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Old Teroch",
            name_ENG: "Old Teroch",
            id: 57,
            max_per_squad: 1,
            modify: false,
		    faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            force: 0,
            shipId: 31,
            skill: 5,
            points: 9,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau ennemi à portée 1. Dans ce cas, et si vous êtes dans son #Farc# , il retire tous ses marqueurs verts.",
            ability_ENG: "At the start of Engagement Phase, you may choose 1 enemy ship at range 1. If you do, and if you are in its #Farc#, it removes all its green tokens.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Kad Solus",
            name_ENG: "Kad Solus",
            id: 58,
            max_per_squad: 1,
            modify: false,
		    faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            force: 0,
            shipId: 31,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Après avoir entièrement effectué une manœuvre rouge, gagnez 2 marqueurs de concentration.",
            ability_ENG: "After you fully execute a red maneuver, receive 2 focus tokens.", 
            slots: [
                "Talent"
            ]
        },
        
        {
            name: "Pilote de l'Escadron Skull",
            name_ENG: "Skull Squadron Pilot",
            id: 59,
            modify: false,
		    max_per_squad: 8,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            force: 0,
            shipId: 31,
            skill: 4,
            points: 7,
            loadout: 5 ,
            slots: []
        },
        {
            name: "Tor Phun",
            name_ENG: "Tor Phun",
            id: 60,
            max_per_squad: 1,
            modify: false,
		    faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            force: 0,
            shipId: 31,
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Après avoir effectué une attaque, si le défenseur a été détruit, vous pouvez effectuer une action, même stressé. Puis vous pouvez recevoir 2 marqueurs de stress pour effectuer une attaque bonus.",
            ability_ENG: "After you perform an attack, if the defender is destroyed, you may perform a action, even stressed. Then you may receive 2 stress tokens to perform a bonus attack.", 
            slots: [
                "Talent"
            ]
        },
        {
            name: "Pre Vizsla",
            name_ENG: "Pre Vizsla",
            id: 61,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            modify: false,
		    force: 0,
            shipId: 77,
            skill: 3,
            points: 11,
            loadout: 10,
            charge: 2,
            recurring: 1,
            max_per_squad: 1,
            ability: "Tant que vous effectuez une attaque, si l’initiative du défenseur est égale ou plus grande que la vôtre, vous pouvez dépenser 2#ch# pour lancer 1 dé supplémentaire.",
            ability_ENG: "While you perform an attack, if the defender's initiative is equal or greater than yours, you may spend 2 #ch# to roll 1 additional attack die.", 
            slots: [
                "Talent"
            ]
        },
        {
            name: "Bo-Katan Kryze",
            name_ENG: "Bo-Katan Kryze", 
            id: 62,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            modify: false,
		    force: 0,
            shipId: 77,
            skill: 4,
            points: 11,
            loadout: 10,
            max_per_squad: 1,
            ability: "Après avoir entièrement exécuté une manœuvre, vous pouvez gagner 1 marqueur d’épuisement pour choisir un objet dans votre #Farc# à portée 1-2. Dans ce cas, un autre vaisseau allié peut effectuer une action #TL# pour verrouiller cet objet.",
            ability_ENG: "After you fully execute a maneuver, you may receive 1 deplete token to choose an object in your #Farc# at range 1-2. If you do, another friendly ship may perform a #TL# action to lock this object.", 
            slots: [
                "Talent"
            ]
        },
        {
            name: "Tiber Saxon",
            name_ENG: "Tiber Saxon",
            id: 63,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            modify: false,
		    force: 0,
            shipId: 77,
            skill: 4,
            points: 11,
            loadout: 10,
            max_per_squad: 1,
            ability: "Après avoir effectué une attaque qui a touché, si le défenseur n’a pas de carte de dégât face visible, il gagne un marquer de contrainte.",
            ability_ENG: "After you perform an attack that hits, if the defender has no damage card face up, it receives a strain token.", 
            slots: [
                "Talent"               
            ]
        },
        {
            name: "Ursa Wren",
            name_ENG: "Ursa Wren", 
            id: 64,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            modify: false,
		    force: 0,
            shipId: 77,
            skill: 3,
            points: 11,
            loadout: 10,
            max_per_squad: 1,
            ability: "Lorsque vous recevez un marqueur rouge, vous pouvez dépenser un marqueur bleu pour le retirer.",
            ability_ENG: "When you receive a red token, you may spend a blue token to remove it.", 
            slots: [
                "Talent"]                
        },
        {
            name: "Libérateur Nite Owl",
            name_ENG: "Nite Owl Liberator",
            id: 65,
            faction: "Mandalorian_Clans",
            max_per_squad: 8,
            modify: false,
		    ship: "Gauntlet Fighter",
            force: 0,
            shipId: 77,
            skill: 2,
            points: 10,
            loadout: 5,
            max_per_squad: 1,
            slots: []
        },
        {
            name: "Maul",
            name_ENG: "Maul", 
            id: 66,
            faction: "Shadow Collective", //Customiser le leader Maul             
			ship: "Gauntlet Fighter",
            modify: true,
            shipId: 77,
            skill: 5,
            points: 12,
            loadout: 15,
            max_per_squad: 1,
            force: 3,
            title: ["Nightbrother"],
            ability: "Lorsque vous effectuez une action #CO# , vous pouvez dépenser 1#fo# . Dans ce cas, considérez l’action comme blanche et vous pouvez coordonner 1 vaisseau allié supplémentaire ; chaque vaisseau allié que vous avez coordonné ainsi gagne 1 marqueur de contrainte.",
            ability_ENG: "While you perform a #CO# action, you may spend 1#fo#. If you do, consider it as a white action, and you may coordinate 1 additional friendly ship; each friendly ship you have coordinated this way receives 1 strain token.", 
            slots: [
                "Force",
                "Talent",
                "Title"
                ],
            modifier_func: [
            	() => auto_equip("Title",1,202)
                    ]
        },
        {
            name: "Din Djarin",
            name_ENG: "Din Djarin", 
            id: 67,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            modify: true,
		    force: 0,
            shipId: 78,
            skill: 5,
            points: 9,
            loadout: 15,
            title: ["Razor Crest"],
            max_per_squad: 1,
            ability: "Lorsque vous défendez ou effectuez une attaque, si vous êtes dans le  #Farc#  à portée 1-2 de 2 vaisseaux ennemis ou plus, vous pouvez changer 1 de vos résultats vierges en résultat #eye#.",
            ability_ENG: "While you defend or perform an attack, if you are in the #Farc# at range 1-2 of 2 enemy ships or more, you may change 1 of your blank results into a #eye# result.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            
            ],
            modifier_func: [
            	() => auto_equip("Title",1)
                    ]
        },
        {
            name: "L'Armurière",
            name_ENG: "The Armorer",
            id: 68,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            modify: true,
		    force: 0,
            shipId: 78,
            skill: 3,
            points: 8,
            loadout: 10,
            max_per_squad: 1,
            title: ["Razor Crest"],
            ability: "MISE EN PLACE : L’amélioration  #mod# que vous équipez est gratuite. Si elle possède 1 ou plusieurs charges, ajoutez en une supplémentaire.",
            ability_ENG: "SETUP : the #mod# upgrade you equip is free. If it has 1 or more charges, add 1 additional #ch#.", 
            slots: [
        		"Talent",
               "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => free_upg("Modification")
                    ]
        },
        {
            name: "Paz Vizsla",
            name_ENG: "Paz Vizsla",
            id: 69,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            modify: true,
		    force: 0,
            shipId: 78,
            skill: 3,
            points: 7,
            loadout: 15,
            max_per_squad: 1,
            title: ["Razor Crest"],
            ability: "Lorsque vous attaquez vous pouvez dépenser 1#ch# sur l’une de vos cartes #ill#  pour lancer 1 dé d’attaque supplémentaire.",
            ability_ENG: "While you attack, you may spend 1 #ch# from 1 of your #ill# upgrade card. If you do, roll 1 additional attack die.",
            slots: [
                "Talent",
                "Title",
            ],
            modifier_func: [
            	() => auto_equip("Title",1)
                    ]
        },
        {
            name: "Din Djarin",
            name_ENG: "Din Djarin", 
            id: 70,
            faction: "Mandalorian_Clans",
            ship: "Naboo Royal N-1 Starfighter",
            modify: true,
		    force: 0,
            shipId: 58,
            skill: 5,
            points: 6,
            loadout: 15,
            max_per_squad: 1,
            title: ["Din Djarin's N1"],
            ability: "Lorsque vous défendez ou effectuez une attaque, si vous êtes dans le  #Farc#  à portée 1-2 de 2 vaisseaux ennemis ou plus, vous pouvez changer 1 de vos résultats vierges en résultat #eye#.",
            ability_ENG: "While you defend or perform an attack, if you are in the #Farc# at range 1-2 of 2 enemy ships or more, you may change 1 of your blank results into a #eye# result.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Crew"),
                    () => add_slots("Tech"),
                    () => add_slots("Illicit"),
                    () => also_Occupies("Astromech",144),
                    () => also_Occupies("Torpedo",144),
                    ]
        },
        {
            name: "Grogu",
            name_ENG: "Grogu",
            id: 71,
            faction: "Mandalorian_Clans",
            ship: "Naboo Royal N-1 Starfighter",
            shipId: 58,
            force: 2,
            modify: true,
		    skill: 0,
            points: 5,
            loadout: 15,
            max_per_squad: 1,
            title: ["Din Djarin's N1"],
            ability: "Lorsqu’un vaisseau à portée 0-2 subit des dégâts, vous pouvez récupérer 1#fo#",
            ability_ENG: "While a friendly ship at range 0-2 suffers any damage, you may recover 1#fo#", 
            slots: [
                "Force",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Crew"),
                    () => add_slots("Tech"),
                    () => add_slots("Illicit"),
                    () => also_Occupies("Astromech",144),
                    () => also_Occupies("Torpedo",144),
                    ]
        },
        {
            name: "Sabine Wren",
            name_ENG: "Sabine Wren", 
            id: 72,
            faction: "Mandalorian_Clans",
             ship: "Naboo Royal N-1 Starfighter",
             force: 0,
             shipId: 58,
            modify: false,
		    skill: 3,
            points: 5,
            loadout: 10,
            max_per_squad: 1,
            ability: "Avant de vous activer, vous pouvez effectuer une action #BR# ou #BO#",
            ability_ENG: "Before you activate, you may perform a #BR# or #BO# action.", 
            slots: [
                "Talent"
            ]
        },
        {
            name: "R5-D4",
            name_ENG: "R5-D4",
            id: 73,
            faction: "Mandalorian_Clans",
             ship: "Naboo Royal N-1 Starfighter",
             force: 0,
             shipId: 58,
            skill: 2,
            modify: true,
		    points: 4,
            loadout: 15,
            max_per_squad: 1,
            title: ["Din Djarin's N1"],
            keyword: ["Droid"],
            ability: "Lorsqu’une attaque contre vous échoue, gagnez 1 marqueur de calcul.",
            ability_ENG: "While an attack against you fails, receive 1 calculate token.", 
            slots: [
                "Title"

            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => droid(),
                () => add_slots("Crew"),
                    () => add_slots("Tech"),
                    () => add_slots("Illicit"),
                    () => also_Occupies("Astromech",144),
                    () => also_Occupies("Torpedo",144),
                    ]
        },
        {
            name: "Bardan Jusik",
            name_ENG: "Bardan Jusik",
            id: 74,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            modify: false,
		    force: 0,
            shipId: 20,
            skill: 4,
            points: 12,
            loadout: 10,
            ability: "Après avoir effectué une attaque #can#, vous pouvez dépenser le marqueur bleu d’un vaisseau allié à portée 0-1 de vous pour effectuer une attaque principale bonus.",
            ability_ENG: "After you perform a #can# attack, you may spend a blue token from a friendly ship at range 0-1 of you to perform a bonus primary attack.",
            slots: [
                "Talent"                               
            ]
        },
        {
            name: "Spar",
            name_ENG: "Spar",
            id: 75,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            modify: false,
		    force: 0,
            shipId: 20,
            skill: 3,
            points: 12,
            loadout: 10,
            ability_ENG: "While you perform a #can# attack, you may reroll an attack die.",
            ability: "Lorsque vous effectuez une attaque #can# , vous pouvez relancer un dé d’attaque.",
            slots: [
                "Talent"
               
            ]
        },

        {
            name: "Fenn Shysa",
            name_ENG: "Fenn Shysa",
            id: 76,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            modify: false,
		    force: 0,
            shipId: 20,
            skill: 5,
            points: 13,
            loadout: 10,
            ability: "Après avoir effectué une manœuvre (même partiellement), vous pouvez recevoir un marqueur de contrainte. Dans ce cas, vous pouvez effectuer une action #BR# et passer votre phase « effectuer une action ».",
            ability_ENG: "After you execute a maneuver (even partially), you may receive a strain token. If you do, youmay perform a #BR# action and skip your 'Perform an action' step.",
            slots: [
                "Talent",
                "Talent"               
            ]
        },
        {
            name: "Tobi Dala",
            name_ENG: "Tobi Dala",
            id: 77,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            modify: false,
		    force: 0,
            shipId: 20,
            skill: 2,
            charge: 1,
            recurring: true,
            points: 12,
            loadout: 10,
            ability: "Après avoir défendu contre un vaisseau dans votre #Farc# , vous pouvez dépenser 1 #ch#. Dans ce cas, vous pouvez verrouiller l’attaquant et effectuer une attaque bonus de #can# contre lui.",
            ability_ENG: "After you defend against a ship in your #Farc#, you may spend 1 #ch#. If you do, you may lock the attacker and perform a bonus #can# attack against him.",
            slots: [
                "Talent"          
                
            ]
        },
        {
            name: "Rook Rast",
            name_ENG: "Rook Rast",
            id: 78,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            modify: false,
		    ship: "Commando Team",
            force: 0,
            shipId: 81,
            skill: 2,
            points: 2,
            loadout: 0,
            ability: "Lorsque vous attaquez un vaisseau stressé, lancez 1 dé supplémentaire.",
            ability_ENG: "While you attack a stressed ship, roll 1 additional attack die.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Tristan Wren",
            name_ENG: "Tristan Wren",
            id: 79,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            modify: false,
		    ship: "Commando Team",
            force: 0,
            shipId: 81,
            skill: 1,
            points: 2,
            loadout: 0,
            ability: "Lorsqu’un vaisseau allié à portée 0-3 attaque un vaisseau à portée 0, ce vaisseau peut modifier jusqu’à 2 de ses résultats #hit# en résultats #crit# .",
            ability_ENG: "While a friendly ship at range 0-3 attacks a ship at range 0, this ship may modify up to 2 of your #hit# results into #crit# results.",
            slots: [
                "Talent"
                
            ]
        },
        {
            name: "Axe Woves",
            name_ENG: "Axe Woves",
            id: 80,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            modify: false,
		    ship: "Commando Team",
            force: 0,
            shipId: 81,
            skill: 1,
            points: 2,
            loadout: 0,
            ability: "Au début de la phase d’engagement, chaque autre vaisseau à portée 0 gagne un marqueur de stress.",
            ability_ENG: "At the beginning of Engagement Phase, each other ships at range 0 receives a stress token.",
            slots: [
                "Talent"
                
            ]
        },
        {
            name: "Gar Saxon",
            name_ENG: "Gar Saxon",
            id: 81,
            max_per_squad: 1,
            faction: "Mandalorian_Clans",
            ship: "Commando Team",
            modify: false,
		    force: 0,
            shipId: 81,
            skill: 4,
            charge: 1,
            recurring: true,
            points: 3,
            loadout: 5,
            ability: "Lorsqu’un vaisseau allié à portée 0-2 effectue une attaque principale, si l’attaquant est dans le #Farc# du défenseur, vous pouvez dépenser 1 #ch#. Dans ce cas, l’attaquant lance 1 dé d’attaque supplémentaire.",
            ability_ENG: "While a friendly ship at range 0-2 performs a primary attack, if the attacker is in the #Farc# of the defender, you may spend 1 #ch#. If you do, the attacker roll 1 additional attack die.",
            slots: [
                "Talent",
                "Talent"
            ]
        },

//###############################################################PIRATES_AND_Smugglers

{
            name: "Dash Rendar",
            name_ENG: "Dash Rendar",
            id: 82,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            modify: true,    
	        force: 0,
            shipId: 16,
            skill: 5,
            points: 10,
            loadout: 15,
            title: ["Outrider"],
            ability: "Lorsque vous vous déplacez, ignorez les obstacles",
            ability_ENG: "While you move, ignore obstacles",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Gunner"),
                    () => add_slots("Cannon"),
                    ]            
        },
        {
            name: '"Leebo"',
            name_ENG: '"Leebo"',
            id: 83,
            modify: true,
		    max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            force: 0,
            shipId: 16,
            skill: 3,
            points: 8,
            loadout: 15,
            title: ["Outrider"],
            keyword: ["Droid"],
            ability: "Après avoir défendu ou attaqué, si vous avez dépensé un marqueur de calcul, recevez un jeton calcul.",
            ability_ENG: "After you defend or perform an attack, if you spend a calculate token, receive a calculate token.",
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Gunner"),
                    () => add_slots("Cannon"),
                    () => droid()
                    ]
        },
        {
            name: "Frontalier de l'Espace Sauvage",
            name_ENG: "Wild Space Fringer",
            id: 84,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            max_per_squad: 8,
            modify: false,
		    force: 0,
            shipId: 16,
            skill: 1,
            points: 7,
            loadout: 5,
            slots: []
        
        },
        {
            name: "Han Solo",
            name_ENG: "Han Solo", 
            id: 85,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            title: ["Millenium Falcon"],
            modify: false,
	        force: 0,
            shipId: 3,
            skill: 6,
            points: 9,
            loadout: 10,
            ability: "Tant que vous attaquez ou défendez, si l’attaque est obstruée par un obstacle, vous pouvez lancer un dé supplémentaire.<br>Si vous défendez ou attaquez en étant à portée 0 d'un obstacle, vous pouvez lancer 1 dé supplémentaire",
            ability_ENG: "While you defend or perform an attack, if the attack is obstructed by an obstacle, you may roll 1 additional die.<br>If you defend or perform an attack while being at range 0 of an obstacle, you may roll 1 additional die.", 
            slots: [
                "Talent",
                "Talent",
                "Talent",                
                "Title"
            ]
        },
        {
            name: "Lando Calrissian",
            name_ENG: "Lando Calrissian", 
            id: 86,
            max_per_squad: 1,
		    modify: false,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            title: ["Millenium Falcon"],
            force: 0,
            shipId: 3,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Après avoir lancé des dés, si vous n’êtes pas stressé, vous pouvez gagner 1 jeton stress pour relancer tous vos résultats vierges.",
            ability_ENG: "After rolling dice, if you are not stressed, you may receive a stress token to reroll all you blank results.", 
            slots: [
                "Talent",
                "Talent",
                "Title"
            ]
        },
        {
            name: "Chewbacca",
            name_ENG: "Chewbacca",
            id: 87,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            title: ["Millenium Falcon"],
            force: 0,
            shipId: 3,
		    modify: false,
            skill: 4,
            charge: 1,
            recurring: 1,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous devriez recevoir une carte de dégât face visible, vous pouvez dépenser 1 #ch# pour la recevoir face cachée à la place.",
            ability_ENG: "When you would receive a face up damage card, you may spend 1 #ch# to receive it facedown instead.", 
            slots: [
                "Talent",
                "Title"
            ]
        },
       
 
        {
            name: "L3-37",
            name_ENG: "L3-37",
            id: 88,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            force: 0,
            shipId: 3,
		    modify: true,
            skill: 2,
            points: 7,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Si vous n’êtes pas protégé, réduisez la difficulté de vos virages légers.",
            ability_ENG: "If you are not protected, reduce the difficulty of your bank turns.",
            slots: [
                "Talent"               
            ],
            modifier_func: [
                () => droid()
                ]
        },
        {
            name: "Capitaine de Cargo",
            name_ENG: "Freighter Captain",
            modify: false,
		    id: 89,
            max_per_squad: 8,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            force: 0,
            shipId: 3,
            skill: 1,
            points: 6,
            loadout: 5,
            slots: []
        },
        {
            name: "Lando Calrissian",
            name_ENG: "Lando Calrissian",
            id: 90,
            max_per_squad: 1,
            modify: false,
		    faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            force: 0,
            shipId: 43,
            skill: 4,
            points: 2,
            loadout: 10,
            ability: "Après avoir lancé des dés, si vous n’êtes pas stressé, vous pouvez gagner 1 jeton stress pour relancer tous vos résultats vierges.",
            ability_ENG: "After rolling dice, if you are not stressed, you may receive 1 stress token to reroll all your blank results.",
            slots: [
                "Talent",
                "Talent"                
            ]
        },
        {
            name: "Pionnier de la Bordure Extérieure",
            name_ENG: "Outer Rim Pioneer",
            id: 91,
            max_per_squad: 1,
            modify: false,
		    faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            force: 0,
            shipId: 43,
            skill: 3,
            points: 2,
            loadout: 5,
            ability: "Les vaisseaux alliés à portée 0-1 peuvent effectuer des attaques à portée 0 des obstacles.",
            ability_ENG: "Friendly ships at range 0-1 may perform attacks at range 0 of obstacles.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "L3-37",
            name_ENG: "L3-37",
            id: 92,
            max_per_squad: 1,
            modify: true,
		    faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            force: 0,
            shipId: 43,
            skill: 2,
            points: 2,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Si vous n’êtes pas protégé, réduisez la difficulté de vos virages légers.",
            ability_ENG: "If you are not protected, reduce the difficulty of your bank turns.",
            slots: [
                "Talent"                
            ],
            modifier_func: [
                () => droid()
                ]
        },
        {
            name: "Drone Autopiloté",
            name_ENG: "Autopilot Drone",
            id: 93,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            modify: true,
		    force: 0,
            shipId: 43,
            skill: 1,
            charge: 3,
            points: 2,
            loadout: 0,
            keyword: ["Droid"],
            modifier_func: [
                () => change_chassis("Rigged Energy Cells"),  //créer fonction
                () => droid()
                ],
            slots: [
                
            ]
        },
        {
            name: "Kath Scarlet",
            name_ENG: "Kath Scarlet",
            id: 94,
            max_per_squad: 1,
            modify: false,
		    faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            force: 0,
            shipId: 7,
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, s’il y a au moins 1 vaisseau allié non-limité à portée 0 du défenseur, lancez 1 dé supplémentaire.",
            ability_ENG: "While you perform a primary attack, if there is at least 1 friendly non limited ship ship at range 0 of the defender, roll 1 additional die.",
            slots: [
                "Talent"
               ]
        },
{
            name: "Hondo Ohnaka",
            name_ENG: "Hondo Ohnaka",
            id: 95,
            max_per_squad: 1,
	        modify: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            force: 0,
            shipId: 7,
            skill: 1,
            points: 12,
            loadout: 15,
            title: ["Slave 1"],
            ability: "ACTION : Choisissez 2 vaisseaux non énormes à portée 0-3 de vous qui ne sont pas alliés l’un l’autre. Chaque vaisseau peut effectuer une action qui se trouve sur votre barre d’action, même stressé, dans l’ordre de votre choix. Puis gagner 1 jeton calcul.",
            ability_ENG: "ACTION : Choose 2 non huge ships at range 0-3 of you who are not friendly to each other. Each ship may perform an action which is on its action bar, even stressed, in the order of your choice. Then receive 1 calculate token.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1), //le chiffre correspond à l'index de l'upgrade dans le menu
                () => add_slots("Gunner"),
                () => add_slots("Cannon"),
                () => add_slots("Illicit"),
                    ]
        },
{
            name: "Emon Azzameen",
            name_ENG: "Emon Azzameen",
            id: 96,
            max_per_squad: 1,
	        modify: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            force: 0,
            shipId: 7,
            skill: 4,
            points: 12,
            loadout: 15,
            title: ["Andrasta"],
            ability: "Si vous devez larguer un engin en utilisant le gabarit 1#straight#, vous pouvez utiliser à la place un gabarit 3#Lturn# ou 3#straight# ou 3#Rturn#",
            ability_ENG: "If you would drop a device using the 1 #straight# template, you may use a 3 #Lturn# or #straight# or #Rturn# template instead.",
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Payload"),
                () => add_slots("Payload"),
                () => add_slots("Illicit")
                    ]
        },
         {
            name: "Sana Starros",
            name_ENG: "Sana Starros",
            id: 97,
            max_per_squad: 1,
		    modify: false,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            force: 0,
            shipId: 7,
            charge: 1,
            recurring: 1,
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "À tout moment, choisissez un vaisseau allié à portée 0-1. Vous pouvez dépenser 1#ch# pour échanger une de vos améliorations avec une de ses améliorations du même type", 
            ability_ENG: "At any moment, you may spend 1 #ch# to choose a friendly ship at range 0-1. If you do, exchange 1 of your upgrades with 1 of its upgrade of the same type",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Serissu",
            name_ENG: "Serissu",
            id: 98,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            force: 0,
            shipId: 19,
		    modify: true,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Lorsqu’un vaisseau allié à portée 0-1 défend, il peut relancer l’un de ses dés.",
            ability_ENG: "While a friendly ship at range 0-1 defends, it may reroll one die.",
            slots: [
                "Talent",
                "Talent"               
            ],
            modifier_func: [
            	() => weapon_Hardpoint()
                    ]
        },
{
            name: "Laetin A'shera",
            name_ENG: "Laetin A'shera",
            id: 99,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            force: 0,
            shipId: 19,
	        modify: true,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après avoir défendu ou attaqué, si l’attaque a échoué, gagnez 1 jeton évasion.",
            ability_ENG: "After you defend of perform an attack, if the attack failed, receive 1 evade token.",
            slots: [
                "Talent"                
            ],
            modifier_func: [
            	() => weapon_Hardpoint()
                    ]
        },
 {
            name: "Vétéran de Tansarii Point",
            name_ENG: "Tansarii Point Veteran",
            id: 100,
            faction: "Pirates_and_Smugglers",
            max_per_squad: 8,
            ship: "M3-A Interceptor",
            force: 0,
            shipId: 19,
	        modify: true,
            skill: 3,
            points: 5,
            loadout: 5,
            slots: [],
            modifier_func: [
            	() => weapon_Hardpoint()
                    ]
        },
 {
            name: "Inaldra",
            name_ENG: "Inaldra",
            id: 101,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            force: 0,
            shipId: 19,
	        modify: true,
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Lorsque vous attaquez ou défendez, vous pouvez subir 1 #hit# pour relancer autant de dés que souhaité.",
            ability_ENG: "While you defend or perform an attack, you may suffer 1 #hit# to reroll as many dice as needed.",
            slots: [
                "Talent"                
            ],
            modifier_func: [
            	() => weapon_Hardpoint()
                    ]
        },
        {
            name: "Aleas Rans'ery",
            name_ENG: "Aleas Rans'ery",
            id: 102,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            force: 0,
            shipId: 19,
		    modify: true,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Lorsque vous défendez, si l’attaque est à portée 3 ou obstruée, lancez un dé supplémentaire.",
            ability_ENG: "While you defend, if the attack is at range 3 or obstructed, roll 1 additional die.", 
            slots: [
                "Talent"                
            ],
            modifier_func: [
            	() => weapon_Hardpoint()
                    ]
        },
        {
            name: "Capitaine Nym",
            name_ENG: "Captain Nym",
            id: 103,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            title: ["Havoc"],
            force: 0,
            shipId: 37,
		    modify: false,
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 10,
            ability: "Avant qu’un engin allié n’explose, vous pouvez dépenser 1 #ch# pour l’empêcher d’exploser.<br>Lorsque vous vous défendez contre une attaque obstruée par une bombe ou une mine, lancez 1 dé de défense supplémentaire.",
            ability_ENG: "Before a friendly device detonates, you may spend 1 #ch# to prevent its detonation.<br>While you defend against an attack obstructed by a device, roll 1 additional defense die.", 
            slots: [
                "Talent",
                "Talent",               
                "Title"
            ]
        },
        {
            name: "Sol Sixxa",
            name_ENG: "Sol Sixxa",
            id: 104,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            force: 0,
            shipId: 37,
		    modify: false,
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Lorsque vous devez larguer un engin avec le gabarit 1#straight#, vous pouvez le larguer en utilisant n’importe lequel des gabarit de vitesse 1.",
            ability_ENG: "When you would drop a device with the 1#straight# template, you may drop it using any speed 1 template instead",
            slots: [
                "Talent"
                  ]
        },
        {
            name: "Revenant de Lok",
            name_ENG: "Lok Revenant",
            id: 105,
            faction: "Pirates_and_Smugglers",
            max_per_squad: 8,
            ship: "Scurrg H-6 Bomber",
            title: ["Havoc"],
            force: 0,
            shipId: 37,
		    modify: false,
            skill: 2,
            points: 5,
            loadout: 7,
            slots: [
                "Title"
            ]
        },
        {
            name: "Jinkins",
            name_ENG: "Jinkins",
            id: 106,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            title: ["Havoc"],
            force: 0,
            shipId: 37,
		    modify: false,
            skill: 1,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 10,
            ability: "Lorsque vous larguez ou lancez une bombe, placez un marqueur « Puissance » dessus. Lorsqu’elle explose, augmentez la portée de l’explosion de 1.", 
            ability_ENG: "While you drop or launch a bomb, place a 'power' token on it. When a bomb with a 'power' token detonates, increase its effect range by 1.",
            slots: [
                "Talent",                
                "Title"
            ]
        },
        {
            name: "N'dru Suhlak",
            name_ENG: "N'dru Suhlak",
            id: 107,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            force: 0,
            shipId: 12,
		    modify: false,
            skill: 4,
            points: 4,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, s’il n’y a pas d’autres vaisseaux alliés à portée 0-2, lancez 1 dé d’attaque supplémentaire.",
            ability_ENG: "While you perform a primary attack, if there is no other friendly ships at range 0-2, roll 1 additional attack die.", 
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Kaa'to Leeachos",
            name_ENG: "Kaa'to Leeachos",
            id: 108,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            force: 0,
            shipId: 12,
		    modify: false,
            skill: 3,
            points: 4,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 0-2. Dans ce cas, transférez 1 jeton concentration ou évasion de ce vaisseau vers vous.",
            ability_ENG: "At the beginning of Engagement Phase, you may choose 1 friendly ship at range 0-2. If you do, transfer 1 focus or evade token from this ship to yourself.",
            slots: [
                "Talent"                
            ]
        },
{
            name: "Pirate Binayre",
            name_ENG: "Binayre Pirate",
            id: 109,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            force: 0,
            shipId: 12,
	        modify: false,
            skill: 1,
            points: 3,
            loadout: 5,
            slots: []
        },
        {
            name: "Kanan Jarrus",
            name_ENG: "Kanan Jarrus",
            id: 110,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "HWK-290 Light Freighter",
            shipId: 8,
		    modify: false,
            skill: 3,
            force: 1,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous ou un vaisseau dans votre #tur# défend, vous pouvez dépenser 1#fo#. Dans ce cas, l’attaquant lance 1 dé d’attaque de moins.",
            ability_ENG: "While you or a friendly ship in your #tur# defends, you may spend 1 #fo#. If you do, the attacker roll 1 attack die less",
            slots: [
                "Force"            
                ]
        },
 {
            name: "Tápusk",
            name_ENG: "Tapusk",
            id: 111,
            max_per_squad: 1,
            faction: "Pirates_and_Smugglers",
            ship: "HWK-290 Light Freighter",
            force: 0,
            shipId: 8,
	        modify: false,
            skill: 5,
            charge: 2,
            recurring: 1,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase de fin, vous pouvez dépenser 2 #ch# pour vous choisir ou un vaisseau dans votre #tur# avec 1 ou plusieurs jetons circulaires. Pendant la phase de fin, ces jetons circulaires ne sont pas retirés.",
            ability_ENG: "At the beginning of End Phase, you may spend 2 #ch# to choose yourself or a ship in your #tur# with 1 circular token or more. During End Phase, those circular tokens are not removed.",
            slots: [
                "Talent"               
            ]
        },


//##############################################################BOUNTY_HUNTERS_Guild

 {
            name: "IG-88A",
            name_ENG: "IG-88A",
            id: 112,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            force: 0,
            shipId: 20,
	        modify: true,
            skill: 4,
            points: 11,
            loadout: 10,
            title: ["IG-2000"],
            keyword: ["Droid"],
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 1–3 avec #CA# dans sa barre d’action. Dans ce cas, transférez-lui 1 de vos jetons calcul.",
            ability_ENG: "At the beginning of Engagement Phase, you may choose 1 friendly ship at range 1-3 with #CA# in its action bar. If you do, transfer 1 of your calculate tokens to him.",
            slots: [
                "Talent",
                "Title"
                
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => droid(),
                () => add_slots("Calculator"),
                () => also_Occupies("Modification",143),
                    ]
        },
        {
            name: "IG-88B",
            name_ENG: "IG-88B",
            id: 113,
            max_per_squad: 1,
		    modify: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            force: 0,
            shipId: 20,
            skill: 4,
            points: 11,
            title: ["IG-2000"],
            loadout: 10,
            keyword: ["Droid"],
            ability: "Après avoir effectué une attaque ratée, vous pouvez effectuer une attaque bonus #can#",
            ability_ENG: "After you perform a failed attack, you may perform a bonus #can# attack", 
            slots: [
                "Talent",
                "Title"               
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => droid(),
                () => add_slots("Calculator"),
                () => also_Occupies("Modification",143),
                    ]
        },
        {
            name: "IG-88C",
            name_ENG: "IG-88C",
            id: 114,
            max_per_squad: 1,
		    modify: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            force: 0,
            shipId: 20,
            skill: 4,
            points: 11,
            title: ["IG-2000"],
            loadout: 10,
            keyword: ["Droid"],
            ability: "Après avoir effectué une action #BO# , vous pouvez effectuer une action #EV# .",
            ability_ENG: "After you perform a #BO# action, you mau perform a #EV# action.",
            slots: [
                "Talent",
                "Title"
                
            ],
            modifier_func: [
                () => droid(),
                () => auto_equip("Title",1),
                () => add_slots("Calculator"),
                () => also_Occupies("Modification",143),
                    ]
        },
        {
            name: "IG-88D",
            name_ENG: "IG-88D",
            id: 115,
            max_per_squad: 1,
		    modify: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            force: 0,
            shipId: 20,
            skill: 4,
            points: 10,
            loadout: 10,
            title: ["IG-2000"],
            keyword: ["Droid"],
            ability: "Tant que vous exécutez une manœuvre Boucle de Segnor #Sleft# ou #Sright# ), vous pouvez utiliser un autre gabarit de même vitesse mais de même direction à la place.",
            ability_ENG: "While you execute a Segnor Loop #Sleft# or #Sright# maneuver, you may use another template of the same speed and same direction instead.",
            slots: [
                "Talent",
                "Title"
                
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => droid(),
                () => add_slots("Calculator"),
                () => also_Occupies("Modification",143),
                    ]
        },
        {
            name: "Le Mandalorien",
            name_ENG: "The Mandalorian",
            id: 116,
            faction: "Bounty_Hunters_Guild",
            ship: "ST-70 Assault Ship",
            force: 0,
            shipId: 78,
		    modify: true,
            skill: 5,
            points: 8,
            loadout: 15,
            max_per_squad: 1,
            title: ["Razor Crest"],
            ability: "Tant que vous défendez ou effectuez une attaque si vous êtes dans le #Farc# à portée 1-2 d'au moins 2 vaisseaux ennemis, vous pouvez changer 1 de vos résultats vierges en un résultat #eye#.",
            ability_ENG: "While you defend or perform an attack, if you are in the #Farc# at range 1-2 of at least 2 enemy ships, you may change 1 of your blank results into a #eye# result.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1)
                    ]
        },
        {
            name: "Q9-0",
            name_ENG: "Q9-0",
            id: 117,
            faction: "Bounty_Hunters_Guild",
            ship: "ST-70 Assault Ship",
            force: 0,
            shipId: 78,
		    modify: true,
            skill: 5,
            points: 7,
            loadout: 15,
            max_per_squad: 1,
            title: ["Razor Crest"],
            keyword: ["Droid"],
            ability_ENG: "After you fully execute an advanced maneuver, you may perform a #CA# or #BR# action, even while stressed. If you do, receive a strain token.",
            ability: "Après avoir entièrement exécuté une manœuvre avancée, vous pouvez effectuer une action #CA# ou #BR#, même si vous êtes stressé. Dans ce cas, gagnez 1 jeton contrainte.", 
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => droid()
                    ]
        },
        {
            name: "4-LOM",
            name_ENG: "4-LOM",
            id: 118,
            modify: true,
		    max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "G-1A Starfighter",
            force: 0,
            shipId: 28,
            skill: 3,
            points: 8,
            loadout: 15,
            keyword: ["Droid"] ,
            title: ["Mist Hunter"],
            ability: "Après avoir entièrement exécuté une manœuvre rouge, gagnez 1 jeton calcul. Au début de la phase de fin, vous pouvez choisir un vaisseau à portée 0–1. Dans ce cas, transférez 1 de vos jetons stress à ce vaisseau.",
            ability_ENG: "After you fully execute a red maneuver, receive 1 calculate token. At the beginning of End Phase, you may choose 1 ship at range 0-1. If you do, transfer 1 of your stress tokens to this ship.",
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => droid()
                    ]
        },
{
            name: "Zuckuss",
            name_ENG: "Zuckus",
	        modify: true,
	        id: 119,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "G-1A Starfighter",
            title: ["Mist Hunter"],
            force: 0,
            shipId: 28,
            skill: 3,
            points: 8,
            loadout: 15,
            ability: "Tant que vous effectuez une attaque principale, vous pouvez lancer 1 dé d’attaque supplémentaire. Dans ce cas, le défenseur lance 1 dé de défense supplémentaire.",
            ability_ENG: "While you perform a primary attack, you may roll 1 additional attack die. If you do, the defender roll 1 additional defense die.",
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1)
                    ]
        },
        {
            name: "Dengar",
            name_ENG: "Dengar",
            id: 120,
            modify: true,
		    max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            force: 0,
            shipId: 29,
            skill: 6,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 15,
            title: ["Punishing One"],
            ability: "Après avoir défendu, si l’attaquant est dans votre #Farc#, vous pouvez dépenser 1 #ch# pour effectuer une attaque bonus contre cet attaquant.",
            ability_ENG: "After you defend, if the attacker is in yout #Farc#, you may spend 1 #ch# to perform a bonus attack against this attacker.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Astromech"),
                () => change_stat("attackt",1),
                () => also_Occupies("Crew",142),
                    ]
        },
        {
            name: "Tel Trevura",
            name_ENG: "Tel Trevura",
            id: 121,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            force: 0,
            shipId: 29,
            skill: 4,
            charge: 1,
            points: 7,
            loadout: 10,
            ability: "Si vous devez être détruit, vous pouvez dépenser 1 #ch#. Dans ce cas, défaussez toutes vos cartes de dégât, subissez 5 dégâts #hit#, et placez-vous en réserve à la place. Au début de la prochaine phase de préparation, placez-vous intégralement à portée 1 de votre bord Joueur.",
            ability_ENG: "If you would be destroyed, you may spend 1 #ch#. If you do, discard all your damage card, then suffer 5 #hit# damage, and place yourself in reserve instead. At the beginning of the next planning phase, place yourself within range 1 of your board edge.", 
            slots: [
                "Talent"
                
            ]
        },
{
            name: "Manaroo",
            name_ENG: "Manaroo",
            id: 122,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            force: 0,
            shipId: 29,
	        modify: true,
            skill: 3,
            points: 7,
            loadout: 15,
            title: ["Punishing One"],
            ability: "Au début de la phase d’engagement, vous pouvez choisir un vaisseau allié à portée 0–2. Dans ce cas, transférez à ce vaisseau tout ou partie de vos marqueurs verts.",
            ability_ENG: "At the beginning of Engagement Phase, you may choose a friendly ship at range 0-2. If you do, transfer any number of your green tokens to this ship.",
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Astromech"),
                () => change_stat("attackt",1),
                () => also_Occupies("Crew",142),
                    ]
        },
        {
            name: "Beilert Valance",
            name_ENG: "Beilert Valance",
            id: 123,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            force: 0,
            shipId: 29,
		    modify: false,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Lorsque vous révélez une manœuvre rouge, vous pouvez effectuer une action (avant de vous déplacer)",
            ability_ENG: "When you reveal a red maneuver, you may perform an action (before you move)",
            slots: [
                "Talent",
                "Talent"                
            ]
        },
        {
            name: "Graz",
            name_ENG: "Graz",
            id: 124,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
            force: 0,
            shipId: 22,
		    modify: false,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Tant que vous défendez, si vous êtes derrière l’attaquant, lancez 1 dé de défense supplémentaire.<br>Tant que vous attaquez, si vous êtes derrière le défenseur, lancez 1 dé d’attaque supplémentaire.",
            ability_ENG: "While you defend, if you are behind the attacker, roll 1 additional attack die.<br>While you perform an attack, if you are behind the defender, roll 1 additional attack die.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
{
            name: "Viktor Hel",
            name_ENG: "Viktor Hel",
            id: 125,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
	        modify: false,
            force: 0,
            shipId: 22,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Après avoir défendu, si vous n’avez pas lancé exactement 2 dés de défense, l’attaquant gagne 1 jeton stress.",
            ability_ENG: "After you defend, if you haven't rolled exactly 2 defense dice, the attacker receives 1 stress token",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
 {
            name: "Capitaine Jostero",
            name_ENG: "Captain Jostero",
            id: 126,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
	        modify: false,
            force: 0,
            shipId: 22,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a subi des dégâts, s’il n’est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
            ability_ENG: "After an enemy ship suffer damage, if it is not defending, you may perform a bonus attack against this ship.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Bossk",
            name_ENG: "Bossk",
            id: 127,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "YV-666 Light Freighter",
            force: 0,
            shipId: 21,
		    modify: true,
            skill: 4,
            points: 10,
            loadout: 15,
            title: ["Hound's Tooth"],
            ability: "Tant que vous effectuez une attaque principale, après l’étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat #crit# pour ajouter 2 résultats #hit# .",
            ability_ENG: "While you perform a primary attack, after the 'Neutralize Results' step, you may spend 1 #crit# result to add 2 #hit# results.",
            slots: [
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Gunner"),
                () => add_slots("Cannon"),
                () => also_Occupies("Illicit",137),
                    ]
        },
{
            name: "Nashtah Pup",
            name_ENG: "Nashtah Pup",
            id: 128,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Z-95-AF4 Headhunter",
            force: 0,
            shipId: 12,
	        modify: false,
            skill: 0,
            points: 2,
            loadout: 0,
            ability: "Ne peut être joué que si un YV666 avec le titre Hound’s Tooth est dans votre escadron. Vous ne pouvez vous déployez que lorsque le Hound's Tooth est détruit. Vous pouvez copier :<br>- Le texte de sa capacité de pilote ou<br>-  Le texte de l’une de ses améliorations #crew# ",
            ability_ENG: "Cannot be played if there's no YV666 with the Hound's Tooth title in your squad. You may deploy only when the Hound's Tooth is destroyed. You may copy :<br>- Its Pilot ability or<br>- The text of one of its #crew# upgrade",
            slots: [
            ],
            
            

        },
{
            name: "Bossk",
            name_ENG: "Bossk",
            id: 129,
            faction: "Bounty_Hunters_Guild",
            max_per_squad: 1,
            skill: 4,
            ship: "Z-95-AF4 Headhunter",
            force: 0,
            shipId: 12,
	        modify: false,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, après l’étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat #crit# pour ajouter 2 résultats #hit# .",
            ability_ENG: "While you perform a primary attack, after the 'Neutralize Results' stem, you may spend 1 #crit# result to add 2 #hit# results.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Cad Bane",
            name_ENG: "Cad Bane",
            id: 130,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            force: 0,
            shipId: 80,
		    modify: true,
            skill: 4,
            charge: 2,
            recurring: 1,
            points: 7,
            loadout: 15,
            title: ["Xanadu Blood"],
            ability: "Après avoir effectué une attaque qui a touché, vous pouvez dépenser 2 #ch# pour transférer 1 de vos jetons rouges non-verrouillage ou orange au défenseur.",
            ability_ENG: "After you perform an attack that hits, you may spend 2 #ch# to transfer 1 of your non lock red tokens or orange tokens to the defender.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Payload"),
                () => add_slots("Crew"),
                    ]
        },
{
            name: "Nom Lumb",
            name_ENG: "Nom Lumb",
            id: 131,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            force: 0,
            shipId: 80,
	        modify: false,
            skill: 1,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau ennemi dans votre #Farc#. Dans ce cas, considérez votre initiative comme étant égale à celle de ce vaisseau jusqu’à la fin du round.",
            ability_ENG: "At the beginning of Engagement Phase, you may choose 1 enemy ship in your #Farc#. If you do, consider your initiative as equal to this ship's initiative until the end of the round.",
            slots: [
                "Talent"                
            ]
        },
 {
            name: "Durge",
            name_ENG: "Durge",
            id: 132,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            force: 0,
            shipId: 80,
	        modify: false,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez, après l'étape Neutraliser les Résultats, s'il y a plus de résultats #hit#/#crit# que vos boucliers actifs, vous pouvez changer 1 résultat #hit# en 1 résultat #crit# et annuler 1 résultat #hit#.",
            ability_ENG: "While you defend, after the 'Neutralize Results' step, if there are more #hit#/#crit# results than your active shields, you may change 1 #hit# result into 1 #crit# result to cancel 1 #hit# result",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Boba Fett",
            name_ENG: "Boba Fett",
            id: 133,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
		    modify: true,
            force: 0,
            shipId: 7,
            skill: 5,
            points: 14,
            loadout: 15,
            title: ["Slave 1"],
            ability: "Tant que vous défendez ou effectuez une attaque, vous pouvez relancer 1 de vos dés pour chaque vaisseau ennemi à portée 0–1.",
            ability_ENG: "While you defend or perform an attack, you may reroll 1 of your dice for each enemy ship at range 0-1",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Gunner"),
                () => add_slots("Cannon"),
                () => add_slots("Illicit"),
                    ]
        },
         {
            name: "Aurra Sing",
            name_ENG: "Aurra Sing",
            id: 134,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            skill: 4,
            force: 1,
            points: 13,
            loadout: 15,
		    modify: true,
            title: ["Slave 1"],
            ability: "Avant de vous engager, vous pouvez dépenser 1 #fo# pour choisir 2 vaisseaux ennemis à portée 0-1. Transférez n'importe quel nombre de jetons orange et rouges entre ces 2 vaisseaux.",
            ability_ENG: "Before you engage, you may spend 1 #fo# to choose 2 enemy ships at range 0-1. Tranfer as many orange or red tokens between those 2 ships",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ],
            modifier_func: [
            	() => auto_equip("Title",1),
                () => add_slots("Gunner"),
                () => add_slots("Cannon"),
                () => add_slots("Illicit"),
                    ]
        },
         {
            name: "Capitaine Jostero",
            name_ENG: "Captain Jostero",
            id: 135,
            max_per_squad: 1,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            force: 0,
            shipId: 7,
            skill: 3,
            points: 12,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a subi des dégâts, s’il n’est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
            ability_ENG: "After an enemy ship suffers damage, if it is not defending, you may perform a bonus attack against this ship",
            slots: [
                "Talent"                
            ]
        },
///////////////////PHOENIX CELL /////////////////////
{
            name: "Hera Syndulla",
            id: 136,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "VCX-100 Light Freighter",
            force: 0,
            shipId: 25,
	        modify: true,
            skill: 6,
            title: ["Ghost"],
            points: 12,
            loadout: 15,
            ability: "Après avoir révélé une manoeuvre rouge ou bleue, vous pouvez modifier votre cadran pour une autre manoeuvre de même difficulté.",
            ability_ENG: "After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,203)
                    ]
        },
        {
            name: "Kanan Jarrus",
            id: 137,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "VCX-100 Light Freighter",
            shipId: 25,
		    modify: true,
            skill: 3,
            force: 2,
            recurring: true,
            title: ["Ghost"],
            points: 12,
            loadout: 15,
            ability: "Lorsqu'un vaisseau allié dans votre arc de tir défend, vous pouvez dépenser 1 #fo#. Dans ce cas, l'attaquant lance 1 dé d'attaque en moins.",
            ability_ENG: "While a friendly ship in your firing arc defends, you may spend 1 force. If you do, the attacker rolls 1 fewer attack die.",
            slots: [
                "Talent",
                "Force",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,203)
                    ]
        },
        {
            name: "Chopper",
            id: 138,
            max_per_squad: 1,
		    modify: true,
            faction: "Phoenix_Cell",
            ship: "VCX-100 Light Freighter",
            force: 0,
            shipId: 25,
            skill: 2,
            title: ["Ghost"],
            points: 10,
            loadout: 15,
            ability: "Au début de la phase d'engagement, chaque vaisseau ennemi à portée 0 reçoit 2 jetons brouillage.",
            ability_ENG: "At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.",
            slots: [
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,203),
		    () => droid()
                    ]
        },
        {
            name: "Alexsandr Kallus",
            id: 139,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "VCX-100 Light Freighter",
            modify: true,
		    force: 0,
            shipId: 25,
            skill: 4,
            title: ["Ghost"],
            points: 10,
            loadout: 15,
            ability: "Lorsque vous défendez, si l'attaquant a modifié au moins 1 dé d'attaque, vous pouvez lancer 1 dé de défense supplémentaire.",
            ability_ENG: "While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.", 
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,203)
                    ]
        },
        {
            name: "Hera Syndulla",
            id: 140,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Attack Shuttle",
            force: 0,
            shipId: 26,
            skill: 6,
            modify: true,
		    title: ["Phantom 1"],
            points: 6,
            loadout: 15,
            ability: "Après avoir révélé une manoeuvre rouge ou bleue, vous pouvez modifier votre cadran pour une autre manoeuvre de même difficulté.",
            ability_ENG: "After you reveal a red or blue maneuver, you may set your dial to another maneuver of the same difficulty.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,198)
                    ]
        },
        {
            name: "Sabine Wren",
            id: 141,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Attack Shuttle",
            force: 0,
            shipId: 26,
            skill: 3,
            modify: true,
		    title: ["Phantom 1"],
            points: 6,
            loadout: 15,
            ability: "Avant de vous activer, vous pouvez effectuer une action de #BR# ou #BO#.",
            ability_ENG: "Before you activate, you may perform a #BR# or #BO# action.",
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,198)
                    ]
        },
        {
            name: "Kanan Jarrus",
            id: 142,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Attack Shuttle",
            shipId: 26,
            skill: 3,
            force: 2,
            modify: true,
            title: ["Phantom 1"],
            points: 6,
            loadout: 15,
            ability: "Lorsqu'un vaisseau allié dans votre arc de tir défend, vous pouvez dépenser 1 #fo#. Dans ce cas, l'attaquant lance 1 dé d'attaque en moins.",
            ability_ENG: "While a friendly ship in your firing arc defends, you may spend 1 #fo#. If you do, the attacker rolls 1 fewer attack die.",
            slots: [
                "Talent",
                "Force",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,198)
                    ]
        },
        {
            name: "Zeb Orellios",
            id: 143,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Attack Shuttle",
            force: 0,
            shipId: 26,
            skill: 2,
            modify: true,
		    title: ["Phantom 1"],
            points: 5,
            loadout: 15,
            ability: "Lorsque vous défendez, les résultat #crit# sont neutralisés avant les résultats #hit#.",
            ability_ENG: "While you defend, #crit# results are neutralized before #hit# results.",
            slots: [
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,198)
                    ]
        },
        {
            name: "AP5",
            id: 144,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Sheathipede-Class Shuttle",
            force: 0,
            shipId: 41,
            skill: 1,
            modify: true,
		    title: ["Phantom 2"],
            points: 5,
            loadout: 15,
            ability: "Lorsque vous coordonnez, si vous choisissez un vaisseau avec exactement 1 jeton stress, il peut effectuer des actions.", 
            ability_ENG: "While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.",
            slots: [
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,199),
		    () => droid()
                    ]
        },
        {
            name: "Alexsandr Kallus",
            id: 145,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Sheathipede-Class Shuttle",
            force: 0,
            shipId: 41,
            skill: 4,
            modify: true,
		    title: ["Phantom 2"],
            points: 6,
            loadout: 15,
            ability: "Lorsque vous défendez, si l'attaquant a modifié au moins 1 dé d'attaque, vous pouvez lancer 1 dé de défense supplémentaire.",
            ability_ENG: "While you defend, if the attacker modified any attack dice, you may roll 1 additional defense die.", 
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,199)
                    ]
        },
        
        {
            name: "Ahsoka Tano",
            id: 146,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Sheathipede-Class Shuttle",
            shipId: 41,
            skill: 5,
            force: 3,
            modify: true,
            title: ["Phantom 2"],
            points: 6,
            loadout: 15,
            ability: "Après avoir entièrement effectué une manoeuvre, vous pouvez choisir un vaisseau allié à portée 1-2 et dépenser 2 #fo#. Ce vaisseau peut effectuer une action, même stressé.",
            ability_ENG: "After you fully execute a maneuver, you may choose a friendly ship at range 1-2 and spend 2 #fo# . That ship may perform an action, even while stressed.",
            slots: [
                "Talent",
                "Force",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,199)
                    ]
        },
        {
            name: "Capitaine Rex",
            name_ENG: "Captain Rex",
            id: 147,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Sheathipede-Class Shuttle",
            force: 0,
            shipId: 41,
            skill: 2,
            points: 5,
            modify: true,
		    title: ["Phantom 2"],
            loadout: 15,
            ability: "Après avoir attaqué, assignez la condition 'Tir de Suppression' au défenseur.",
            ability_ENG: "After you perform an attack, assign the Suppressive Fire condition to the defender.",
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,199)
                    ]
        },
        {
            name: "Sabine Wren",
            id: 148,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "TIE/ln Fighter",
            force: 0,
            shipId: 4,
            skill: 3,
            points: 4,
            modify: true,
		    title: ["Sabine's Masterpiece"],
            loadout: 15,
            ability: "Avant de vous activer, vous pouvez effectuer une action #BR# ou #BO#.", 
            ability_ENG: "Before you activate, you may perform a #BR# or #BO# action.",
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,196),
                () => add_slots("Illicit"),
                    ]
        },
        {
            name: "Ezra Bridger",
            id: 149,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "TIE/ln Fighter",
            shipId: 4,
            skill: 3,
            force: 1,
            modify: true,
            points: 4,
            title: ["Sabine's Masterpiece"],
            loadout: 15,
            ability: "Lorsque vous défendez ou attaquez, si vous êtes stressé, vous pouvez dépenser 1 #fo# pour modifier jusqu'à 2 de vos résultats #eye# en #hit# ou #evd#.",
            ability_ENG: "While you defend or perform an attack, if you are stressed, you may spend 1 #fo# to change up to 2 of your #eye# results to #hit# or #evd# results.",
            slots: [
                "Talent",
                "Force",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,196),
                () => add_slots("Illicit"),
                    ]
        },
        {
            name: "Capitaine Rex",
            name_ENG: "Captain Rex",
            id: 150,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "TIE/ln Fighter",
            force: 0,
            shipId: 2,
            skill: 2,
            points: 3,
            modify: true,
		    title: ["Sabine's Masterpiece"],
            loadout: 15,
            ability: "Après avoir attaqué, assignez la condition 'Tir de Suppression' au défenseur.",
            ability_ENG: "After you perform an attack, assign the Suppressive Fire condition to the defender.",
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,196),
                () => add_slots("Illicit"),
                    ]
        },
        {
            name: "Zeb Orellios",
            id: 151,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "TIE/ln Fighter",
            force: 0,
            shipId: 2,
            skill: 2,
            points: 3,
            modify: true,
		    title: ["Sabine's Masterpiece"],
            loadout: 15,
            ability: "Lorsque vous défendez, les résultats #crit# sont neutralisés avant les #hit#.",
            ability_ENG: "While you defend, #crit# results are neutralized before #hit# results.",
            slots: [
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,196),
                () => add_slots("Illicit")
                    ]
        },
        {
            name: "Ezra Bridger",
            id: 152,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Gauntlet Fighter",
            shipId: 77,
            skill: 3,
            points: 11,
            force: 1,
            modify: true, 
            title: ["Nightbrother"],
            loadout: 15,
            ability: "Lorsque vous défendez ou attaquez, si vous êtes stressé, vous pouvez dépenser 1 #fo# pour modifier jusqu'à 2 de vos résultats #eye# en #hit# ou #evd#.",
            ability_ENG: "While you defend or perform an attack, if you are stressed, you may spend 1 #fo# to change up to 2 of your #eye# results to #hit# or #evd# results.",
            slots: [
                "Talent",
                "Force",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,202)
                    ]
        },
        {
            name: "Chopper",
            id: 153,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "Gauntlet Fighter",
            force: 0,
            shipId: 77,
            skill: 3,
            points: 10,
            title: ["Nightbrother"],
            modify: true,
		    loadout: 15,
            ability: "Au début de la phase d'engagement, chaque vaisseau ennemi à portée 0 reçoit 2 jeton brouillage.", 
            ability_ENG: "At the start of the Engagement Phase, each enemy ship at range 0 gains 2 jam tokens.",
            slots: [
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,202),
		    () => droid()
                    ]
        },
        {
            name: "Mart Mattin",
            id: 154,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "YT-2400 Light Freighter",
            force: 0,
            shipId: 16,
            skill: 2,
            points: 9,
            title: ["Sato's Hammer"],
		    modify: true,
            loadout: 15,
            ability: "Au début de la phase d'engagement, vous pouvez effectuer une action rouge #BR#.",
            ability_ENG: "At the start of engagement phase, you may perform a Red #BR# action.",
            slots: [
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,200)
                    ]
        },
        {
            name: "Gooti Terez",
            id: 155,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "YT-2400 Light Freighter",
            force: 0,
            shipId: 16,
            skill: 1,
            points: 8,
            modify: true,
		    title: ["Sato's Hammer"],
            loadout: 15,
            ability: "Après avoir défendu contre une attaque portée 1, l'attaquant reçoit 1 jeton de contrainte.",
            ability_ENG: "After you defend against a Range 1 attack, the attacker gains 1 strain token.",
            slots: [
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,200)
                    ]
        },
        {
            name: "Lohgarra",
            id: 156,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "YT-2400 Light Freighter",
            force: 0,
            shipId: 16,
            skill: 5,
            points: 9,
            modify: true,
		    title: ["Mighty Oak Apocalypse"],
            loadout: 15,
            ability: "Tant que vous êtes stressé, ignorez Sensor Blackout.", 
            ability_ENG: "While you are stressed, you ignore the Sensor Blackout ability.",
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,201)
                    ]
        },
        {
            name: "Thane Kyrell",
            id: 157,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "YT-2400 Light Freighter",
            force: 0,
            shipId: 16,
            skill: 4,
            points: 8,
            modify: true,
		    title: ["Mighty Oak Apocalypse"],
            loadout: 15,
            ability: "Lorsque vous attaquez, vous pouvez dépenser 1 résultat #eye#, #crit# ou #hit# pour regarder les cartes de dégat face cachée du défenseur, en choisir 1, et l'exposer.",
            ability_ENG: "While you perform an attack, you may spend 1 #eye#, #crit#, or #hit# result to look at the defender's facedown damage cards, choose 1, and expose it.",
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,201)
                    ]
        },
        {
            name: "Ahsoka Tano",
            id: 158,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "RZ-1 A-wing",
            shipId: 2,
            skill: 5,
            force: 3,
            modify: false,
            points: 8,
            loadout: 10,
            ability: "Après avoir entièrement effectué une manoeuvre, vous pouvez choisir un vaisseau allié à portée 1-2 et dépenser 2 #fo#. Ce vaisseau peut effectuer une action, même stressé.",
            ability_ENG: "After you fully execute a maneuver, you may choose a friendly ship at range 1-2 and spend 2 #fo# . That ship may perform an action, even while stressed.",
            slots: [
                "Talent",
                "Talent",
                "Force",              
            ]
        },
        {
            name: "Lieutenant Dicer",
            id: 159,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "RZ-1 A-wing",
            modify: false,
		    force: 0,
            shipId: 2,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Tant que vous défendez ou attaquez, si l'attaque est à portée 1 et que vous êtes dans le #Farc# de l'ennemi, vous pouvez changer un de vos résultats #eye# en #hit# ou #evd#.",
            ability_ENG: "While you defend or perform an attack, if the attack range is 1 and you are in the enemy's (Farc), you may change 1 of your #eye# results to an #hit# or #evd# result.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Fenn Rau",
            id: 160,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "RZ-1 A-wing",
            modify: false,
		    force: 0,
            shipId: 2,
            skill: 6,
            points: 8,
            loadout: 10,
            ability: "Avant qu'un vaisseau allié à portée 1-2 ne s'engage, si un vaisseau ennemi se trouve dans son #Farc# à portée 1, ce vaisseau allié peut retirer 1 jeton rouge.",
            ability_ENG: "Before a friendly ship at range 1-2 engages, if there is an enemy ship in its #Farc# at range 1, that friendly ship may remove 1 red token.",
            slots: [
                "Talent",
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Derek Klivian",
            id: 161,
            max_per_squad: 1,
            faction: "Phoenix_Cell",
            ship: "RZ-1 A-wing",
            modify: false,
		    force: 0,
            shipId: 2,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après avoir gagné un marqueur d'acquisition ou après en avoir dépensé 1, vous pouvez vous retirer 1 jeton rouge.",
            ability_ENG: "After you acquire or spend a lock, you may remove 1 red token from yourself.",
            slots: [
                "Talent",
                "Talent"               
            ]
        },
        {
            name: "Pilote de l'Escadron Phoenix",
            name_ENG: "Phoenix Squadron Pilot",
            id: 162,
            max_per_squad: 8,
            faction: "Phoenix_Cell",
            max_per_squad: 8,
            modify: false,
		    ship: "RZ-1 A-wing",
            force: 0,
            shipId: 2,
            skill: 1,
            points: 5,
            loadout: 10,
            slots: [
                "Talent"
            ]
        },
        
//////////////////////C.I.S /////////////
		{
            name: "General Grievous",
            id: 163,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Belbullab-22 Starfighter",
            modify: true,
			force: 0,
            shipId: 57,
            skill: 4,
            points: 8,
            title: ["Soulless One"],
            loadout: 15,
            ability: "Lorsque vous effectuez une attaque principale, si vous n'êtes pas dans l'arc de tir du défenseur, vous pouvez relancer jusqu'à 2 dés d'attaque.",
            ability_ENG: "While you perform a primary attack, if you are not in the defender's firing arc, you may reroll up to 2 attack dice.",
            slots: [
                "Talent",
                "Talent",
                "Title"                
            ],
            modifier_func: [
            	() => auto_equip("Title",1,204)
                    ]
        },
        {
            name: "Capitaine Sear",
            name_ENG: "Captain Sear",
            id: 164,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Belbullab-22 Starfighter",
            modify: false,
		    force: 0,
            shipId: 57,
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Lorsqu'un vaisseau allié à portée 0-3 effectue une attaque principale, si le défenseur est dans son #bulls#, avant l'étape 'Neutraliser les résultats', le vaisseau allié peut dépenser 1 jeton calcul pour annuler un résultat #evd#.",
            ability_ENG: "While a friendly ship at range 0-3 performs a primary attack, if the defender is in its #bulls#, before the Neutralize Results step, the friendly ship may spend 1 calculate token to cancel 1 #evd# result.",
            slots: [
                "Talent"               
            ]
        },
		{
            name: "Wat Tambor",
            id: 165,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Belbullab-22 Starfighter",
            force: 0,
            shipId: 57,
	        modify: false,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, vous pouvez relancer 1 dé pour chaque vaisseau allié calculateur à portée 1 du défenseur.",
            ability_ENG: "While you perform a primary attack or defend, you may reroll 1 die for each calculating friendly ship at range 1 of the defender.",
            slots: [
                "Talent"                
            ]
        },
  		{
            name: "General Kleeve",
            id: 166,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Belbullab-22 Starfighter",
            force: 0,
            shipId: 57,
	        modify: false,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Lorsqu'un vaisseau à portée 0-3 effectue une attaque principale, s'il n'est pas dans l'arc de tir du défenseur et qu'il est calculateur, il peut relancer 1 dé d'attaque.",
            ability_ENG: "While a friendly ship at range 0-3 performs a primary attack, if it is not in the defender's firing arc and if it is calculating, it may reroll 1 attack die.",
            slots: [
                "Talent",
                "Talent"                
            ]
        },
        {
            name: "Autopilote Feethan Ottraw",
            name_ENG: "Feethan Ottraw Autopilot",
            id: 167,
            max_per_squad: 8,
            faction: "C.I.S",
            ship: "Belbullab-22 Starfighter",
            force: 0,
            shipId: 57,
		modify: true,
            skill: 1,
            points: 5,
            keyword: ["Droid"],
            loadout: 0,
            slots: [                
            ],
            modifier_func: [
                () => droid()
                ]
        },
  		
  		{
            name: "AP5",
            id: 168,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Sheathipede-Class Shuttle",
            force: 0,
            shipId: 41,
	        modify: true,
            skill: 1,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous coordonnez, is vous choisissez un vaisseau avec exactement 1 jeton stress, il peut effectuer une action.",
            ability_ENG: "While you coordinate, if you chose a ship with exactly 1 stress token, it can perform actions.",
            keyword: ["Droid"],
            slots: [
                "Talent"                
            ],
		modifier_func: [
			() => droid()
			]
        },
		{
            name: "Rune Haako",
            id: 169,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Sheathipede-Class Shuttle",
	        modify: false,
            force: 0,
            shipId: 41,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque #Barc#, avant l'étape 'Neutralisez les résultats', vous pouvez recevoir un jeton stress pour annuler 1 résultat #evd#.",
            ability_ENG: "While you perform a #Barc# attack, before the Neutralize results step, you may receive a stress token to cancel 1 #evd# result.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Nute Gunray",
            id: 170,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Sheathipede-Class Shuttle",
            force: 0,
            shipId: 41,
		    modify: false,
            skill: 2,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous êtes détruit, vous devez déployer la navette de secours de Nute Gunray depuis votre vaisseau (Coque 2 Agilité 2). Pendant la phase Système, déplacez vous vers l'avant avec un gabarit de vitesse 1, ou le gabarit 2 #straight#. Vous pouvez être placé sous un vaisseau si vous les chevauchez. Lorsque vous défendez, vous pouvez modifier vos résultats #eye# en #evd#. Si vous deviez fuir du tapis de jeu, votre adversaire perd 2 points de Scénario.", 
            ability_ENG: "When you would be destroyed, you must deploy Nute Gunray's escape pod from your ship (2 Hull 3 agility). During System phase, you move forward with any 1 speed template, or the 2 straight template. You may be placed under any ship if you overlap them. When you defend, you may change your #eye# results into #evd# results. If you would flee from the Battlefield, your opponent lose 2 Scenario points.",
            slots: [
                "Talent"                
            ]
        },
		{
            name: "Riff Tamson",
            id: 171,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "Sheathipede-Class Shuttle",
            force: 0,
            shipId: 41,
			modify: false,
            skill: 2,
            points: 7,
            loadout: 10,
            ability: "Les améliorations que vous équipez perdent la restriction 'Solitary'.",
            ability_ENG: "The upgrades you equip lose the 'Solitary' restriction.",
            slots: [
                "Talent"                
            ]
        },
    	{
            name: "Autopilote de Droïde Tactique",
            name_ENG: "Tactical Droid Autopilot",
            id: 172,
            max_per_squad: 8,
            faction: "C.I.S",
            max_per_squad: 8,
            ship: "Sheathipede-Class Shuttle",
            force: 0,
            shipId: 41,
		    modify: true,
            skill: 1,
            points: 6,
            loadout: 6,
            keyword: ["Droid"],
            slots: [                
            ],
            modifier_func: [
                () => droid()
                ]
        },
  
        {
            name: "Oppresseur d'Onderon",
            name_ENG: "Onderon Oppressor",
            id: 173,
            max_per_squad: 3,
            faction: "C.I.S",
            ship: "HMP Droid Gunship",
            force: 0,
            shipId: 67,
		    modify: false,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué un tonneau ou un dérapage, si vous êtes stressé, recevez un jeton calcul.",
            ability_ENG: "After you barrel roll or sideslip, if you are stressed, gain 1 calculate token.",
            keyword: ["Droid"],
            slots: [
                "Talent"                
            ]
        },
		{
            name: "Prototype Géonosien",
            name_ENG: "Geonosian Prototype",
            id: 174,
            max_per_squad: 2,
            faction: "C.I.S",
            ship: "HMP Droid Gunship",
            force: 0,
            shipId: 67,
			modify: false,
            skill: 2,
            points: 7,
            loadout: 10,
            ability: "F	ace A : Lorsque vous vous engagez, s'il y a un vaisseau avec un jeton tracté dans votre arc de tir, recevez 1 jeton calcul.<br>Face B : Après avoir dérapé, si vous vous êtes déplacé à travers un vaisseau, il gagne un jeton tracté.",
            ability_ENG: "Face A : When you engage, if there is a ship with a tractor token in your firing arc, gain 1 calculate token.<br>Face B : After you sideslip, if you moved through a ship, it gains 1 tractor token.",
            keyword: ["Droid"],
            slots: [
                "Talent"                
            ]
        },
  		{
            name: "DGS-286",
            id: 175,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "HMP Droid Gunship",
            force: 0,
            shipId: 67,
			modify: false,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Avant de vous engager, vous pouvez choisir un autre vaisseau allié à portée 0-1. Transférez un 1 jeton calcul de ce vaisseau vers vous.",
            ability_ENG: "Before you engage, you may choose another friendly ship at range 0-1. That ship transfers 1 calculate token to you.",
            keyword: ["Droid"],
            slots: [
                "Talent"                
            ]
        },
    	{
            name: "DGS-047",
            id: 176,
            max_per_squad: 1,
            faction: "C.I.S",
            ship: "HMP Droid Gunship",
            force: 0,
            shipId: 67,
		    modify: false,
            skill: 1,
            points: 7,
            loadout: 10,
            ability: "Après avoir attaqué, si le défenseur se trouve dans votre #Farc#, vous pouvez acquisitionner ce vaisseau. Puis, si le défenseur est dans votre #bulls#, il reçoit un jeton contrainte.",
            ability_ENG: "After you perform an attack, if the defender is in your #Farc# , you may acquire a lock on it. Then, if the defender is in your #bulls#, it gains 1 strain token.",
            keyword: ["Droid"],
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Prédateur Séparatiste",
            name_ENG: "Separatist Predator",
            id: 177,
            max_per_squad: 8,
            faction: "C.I.S",
            max_per_squad: 8,
            ship: "HMP Droid Gunship",
            force: 0,
            shipId: 67,
		    modify: false,
            skill: 1,
            points: 6,
            loadout: 0,
            keyword: ["Droid"],
            slots: [                
            ]
        },
     
        {
            name: "Prototype Phlac Arphocc",
            name_ENG: "Phlac Arphocc Prototype",
            id: 178,
            max_per_squad: 2,
            faction: "C.I.S",
            ship: "Droid Tri-fighter",
		    modify: false,
            force: 0,
            shipId: 70,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Face A : Pendant la phase Système, vous pouvez regarder le cadran d'un vaisseau que vous avez acquisitionné.<br>Face B : Au début de la phase d'Engagement, s'il y a un vaisseau dans votre #bulls#, recevez 1 jeton calcul.",
            ability_ENG: "Face A : During System Phase, you may look at the dial of a ship you have a lock on.<br>Face B : At the beginning of engagement phase, if there's an enemy ship in your #bulls#, gain 1 calculate token.",
            keyword: ["Droid"],
            slots: [
                "Talent"                
            ]
        },
		{
            name: "Prédateur Effrayant",
            name_ENG: "Fearsome Predator",
            id: 179,
            max_per_squad: 3,
            faction: "C.I.S",
            ship: "Droid Tri-fighter",
			modify: false,
            force: 0,
            shipId: 70,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Mise en place: Après avoir placé les forces, assignez la condition 'Proie Apeurée' à un vaisseau ennemi.",
            ability_ENG: "Setup: After placing forces, assign the 'Fearful Prey' condition to 1 enemy ship.",
            keyword: ["Droid"],
            slots: [
                "Talent"                
            ]
        },
  		{
            name: "Intercepteur Colicoïde",
            name_ENG: "Colicoid Interceptor",
            id: 180,
            max_per_squad: 8,
            faction: "C.I.S",
            max_per_squad: 8,
            ship: "Droid Tri-fighter",
			modify: false,
            force: 0,
            shipId: 70,
            skill: 1,
            points: 6,
            loadout: 5,
            keyword: ["Droid"],
            slots: [                
            ]
        },
  		
        {
            name: "Drone de Bombardement",
            name_ENG: "Bombardment Drone",
            id: 181,
            max_per_squad: 3,
            faction: "C.I.S",
            ship: "Hyena-class Droid Bomber",
            force: 0,
            shipId: 59,
		    modify: false,
            skill: 3,
            points: 6,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Si vous deviez larguer un engin, vous pouvez le lancer à la place en utilisant le même gabarit.",
            ability_ENG: "If you would drop a device, you may launch that device instead, using the same template.",
            slots: [
                "Talent"                
            ]
        },
    	{
            name: "Prototype Baktoïd",
            name_ENG: "Baktoid Prototype",
            id: 182,
            max_per_squad: 2,
            faction: "C.I.S",
            ship: "Hyena-class Droid Bomber",
            force: 0,
            shipId: 59,
		    modify: false,
            skill: 1,
            points: 6,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Face A : Au début de la phase d'Engagement, vous pouvez dépenser 1 jeton calcul pour effectuer une action #CD#. Vous ne pouvez pas coordonner les vaisseaux qui n'ont pas la compétence 'Calculs en Réseau'.<br>Lorsque vous attaquez à portée 1, vous devez lancer 1 dé supplémentaire. Après que l'attaque touche, subissez 1 dégat #crit#.",
            ability_ENG: "Face A : At the start of the Engagement Phase, you may spend 1 calculate token to perform a #CD# action. You cannot coordinate ships that do not have the Networked Calculations ship ability.<br>Face B : While you perform an attack at range 1, you must roll 1 additional die. After the attack hits, suffer 1 #crit# damage.",
            slots: [
                "Talent"                
            ]
        },
      	{
            name: "Bombardier du Techno Syndicat",
            name_ENG: "Techno Union Bomber",
            id: 183,
            max_per_squad: 8,
            faction: "C.I.S",
            ship: "Hyena-class Droid Bomber",
            force: 0,
            shipId: 59,
		    max_per_squad: 8,
            modify: false,
            skill: 1,
            points: 5,
            loadout: 2,
            keyword: ["Droid"],
            slots: [
                            
            ]
        },
       	{
            name: "Drone de la Fédération du Commerce",
            name_ENG: "Trade Federation Drone",
            id: 184,
            max_per_squad: 8,
            faction: "C.I.S",
            ship: "Vulture-class Droid Fighter",
            force: 0,
            shipId: 56,
		    max_per_squad: 8,
            modify: false,
            skill: 1,
            points: 3,
            loadout: 0,
            keyword: ["Droid"],
            slots: [
                            
            ]
        },
        {
            name: "Prototype Haor Chall",
            name_ENG: "Haor Chall Prototype",
            id: 185,
            max_per_squad: 2,
            faction: "C.I.S",
            ship: "Vulture-class Droid Fighter",
            force: 0,
            shipId: 56,
		    modify: false,
            skill: 1,
        	keyword: ["Droid"],
            points: 4,
            loadout: 10,
            ability: "Face A : Après qu'un vaisseau ennemi dans votre #bulls# à portée 0-2 déclare un autre vaisseau allié comme cible, vous pouvez effectuer une action #CA# ou #TL#.<br>Face B : Après qu'un vaisseau ennemi se déplace, s'il se retrouve dans votre #bulls#, vous pouvez effectuer une attaque bonus principale.",
            ability_ENG: "Face A : After an enemy ship in your #bulls# at range 0-2 declares another friendly ship as the defender, you may perform a #CA# or #TL# action.<br>Face B : After an enemy ship moves, if it is in your #bulls#, you may perform a bonus primary attack.",
            slots: [
                            
            ]
        },
        {
            name: "Chasseur Précis",
            name_ENG: "Precise Hunter",
            id: 186,
            max_per_squad: 3,
            faction: "C.I.S",
            ship: "Vulture-class Droid Fighter",
            force: 0,
            shipId: 56,
		    modify: false,
            skill: 3,
            points: 4,
            keyword: ["Droid"],
            loadout: 10,
            ability: "Lorsque vous attaquez, si le défenseur est dans votre #bulls#, vous pouvez relancer 1 résultat vierge.",
            ability_ENG: "While you perform an attack, if the defender is in your #bulls#, you may reroll 1 blank result.",
            slots: [
                "Talent"            
            ]
        },

///////////////////////////First Order /////////////////////////
/////////////////////////////////////////////////////////////////

        {
            name: "Lin Gaava",
            id: 187,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/fo Fighter",
            force: 0,
            shipId: 46,
		    modify: false,
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Mise en Place : Après avoir placé les forces, assignez la condition 'Primed for Speed' à vous même et 2 autres vaisseaux TIE/fo ou TIE/fs alliés qui n'ont pas d'amélioration #mod# équipée.",
            ability_ENG: "Setup: After placing forces, assign the Primed for Speed condition to yourself and up to 2 other friendly TIE/fo or TIE/sf Fighters that have no equipped #mod# upgrades.",
            slots: [
                "Talent"            
            ]
        },
		{
            name: "Jace Rucklin",
            id: 188,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/fo Fighter",
            force: 0,
            shipId: 46,
			modify: false,
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Lorsqu'un autre vaisseau allié attaque, si vous êtes à portée 0-1 du défenseur, vous pouvez subir 1 dégat #hit# pour changer 1 des résultats de l'attaquant en #crit#.",
            ability_ENG: "While another friendly ship performs an attack, if you are at range 0-1 of the defender, you may suffer 1 #hit# damage to change 1 of the attacker's results to a #crit# result.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Lieutenant Galek",
            id: 189,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/fo Fighter",
            force: 0,
            shipId: 46,
		    modify: false,
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Après qu'un autre vaisseau allié à portée 0-2 a été détruit, vous pouvez effectuer une action #CD#, même stressé. Lorsque vous coordonnez, le vaisseau que vous choississez peut effectuer uniquement une action qui se trouve aussi sur votre barre d'action.",
            ability_ENG: "After another friendly ship at range 0-2 is destroyed, you may perform a #CD# action, even while stressed. While you coordinate, the ship you choose can perform an action only if that action is also on your action bar.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "'Muse'",
            id: 190,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/fo Fighter",
            force: 0,
            shipId: 46,
		    modify: false,
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Au début de la phase d'engagement, vous pouvez choisir un vaisseau allié à portée 0-1. Dans ce cas, ce vaisseau retire 1 jeton stress",
            ability_ENG: "At the start of the Engagement Phase, you may choose a friendly ship at range 0-1. If you do, that ship removes 1 stress token.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Cadet de l'Escadron Epsilon",
            name_ENG: "Epsilon Squadron Cadet",
            id: 191,
            max_per_squad: 8,
            faction: "First_Order",
            ship: "TIE/fo Fighter",
            force: 0,
            shipId: 46,
		    modify: false,
            skill: 1,
            points: 4,
            loadout: 0,
            slots: [            
            ]
        },
		{
            name: "Capitaine Phasma",
            name_ENG: "Captain Phasma",
            id: 192,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/sf Fighter",
            force: 0,
            shipId: 48,
			modify: false,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous défendez, après l'étape 'Neutralisez les résultats', un autre vaisseau à portée 0-1 doit subir un dégat #hit#/#crit# pour annuler un résultat correspondant",
            ability_ENG: "While you defend, after the Neutralize Results step, another friendly ship at range 0-1 must suffer 1 #hit#/#crit# damage to cancel 1 matching result.",
            slots: [
                "Talent"            
            ]
        },
		{
            name: "'Backdraft'",
            id: 193,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/sf Fighter",
            force: 0,
            shipId: 48,
			modify: false,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale #tur#, si le défenseur est dans votre #Barc#, lancez 1 dé supplémentaire.",
            ability_ENG: "While you perform a  #tur# primary attack, if the defender is in your #Barc#, roll 1 additional die.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "'Quickdraw'",
            id: 194,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/sf Fighter",
            force: 0,
            shipId: 48,
		    modify: false,
            skill: 6,
            points: 8,
            charge: 1,
            reccurring: true,
            loadout: 10,
            ability: "Après que vous avez perdu un bouclier, vous pouvez dépenser 1 #ch#. Dans ce cas, vous pouvez effectuer une attaque principale bonus.",
            ability_ENG: "After you lose a shield, you may spend 1 charge. If you do, you may perform a bonus primary attack.",
            slots: [
                "Talent",
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Lieutenant LeHuse",
            id: 195,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/sf Fighter",
            force: 0,
            shipId: 48,
		    modify: false,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Lorsqu'un vaisseau allié dans votre arc de tir perd son dernier bouclier, il peut vérouiller l'attaquant.",
            ability_ENG: "When a friendly ship in your firing arc loses its last shield, it may acquire a lock against its attacker.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Survivant de l'Escadron Zeta",
            name_ENG: "Zeta Squadron Survivor",
            id: 196,
            max_per_squad: 8,
		    modify: false,
            faction: "First_Order",
            ship: "TIE/sf Fighter",
            force: 0,
            shipId: 48,
            skill: 3,
            points: 4,
            loadout: 10,
            slots: [            
            ]
        },
        {
            name: "'Breach'",
            id: 197,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/se Bomber",
            force: 0,
            shipId: 76,
		    modify: false,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après avoir entièremement effectué une manoeuvre ou effectué une action, si vous vous êtes déplacé à travers un vaisseau ennemi, vous pouvez vérouiller le vaisseau,",
            ability_ENG: "After you fully execute a maneuver or perform a action, if you moved through an enemy ship, you may acquire a lock on that ship.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Jul Jerjerrod",
            id: 198,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/se Bomber",
            force: 0,
            shipId: 76,
		    modify: false,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après avoir effectué une action #BO#, vous pouvez retirer 1 jeton rouge ou orange.",
            ability_ENG: "After you perform a #BO# action, you may remove 1 red or orange token.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "'Dread'",
            id: 199,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/se Bomber",
            force: 0,
            shipId: 76,
		    modify: false,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après avoir rechargé, chaque vaisseau ennemi dans votre #Farc# à portée 1-2 reçoit un jeton épuisement, et s'ils sont dans votre #bulls#, ils gagnent 1 jeton épuisement supplémentaire.",
            ability_ENG: "After you reload, each enemy ship in your #Farc# at range 1-2 gains 1 deplete token, and they are in your #bulls#, they gain 1 additional deplete token",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "'Grudge'",
            id: 200,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/se Bomber",
            force: 0,
            shipId: 76,
		    modify: false,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Lorsqu'une bombe ou mine alliée à portée 0-2 explose, chaque fois que des dés d'attaque sont lancés pour leur effet, vous pouvez relancer 1 de ces dés.",
            ability_ENG: "While a friendly bomb or mine at range 0-2 detonates, each time attack dice are rolled to resolve its effect, you may reroll up to 1 of those dice.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Capitaine Cardinal",
            name_ENG: "Captain Cardinal",
            id: 201,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "Upsilon-Class Command Shuttle",
            force: 0,
            shipId: 49,
		    modify: false,
            skill: 3,
            charge: 2,
            points: 9,
            loadout: 10,
            ability: "Lorsqu'un vaisseau allié à portée 1-2 avec une initiative inférieure à la votre défend ou attaque, si vous avez au moins 1 #ch# active, ce vaisseau peut relancer 1 résultat #eye#. Après qu'un vaisseau ennemi à portée 0-3 est détruit, perdez 1 #ch#",
            ability_ENG: "While a friendly ship at range 1-2 with lower initiative than you defends or performs an attack, if you have at least 1 active #ch#, that ship may reroll 1 #eye# result. After an enemy ship at range 0-3 is destroyed, lose 1 #ch#.",
            slots: [
                "Talent"            
            ]
        },
         {
            name: "Lieutenant Tavson",
            id: 202,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "Upsilon-Class Command Shuttle",
            force: 0,
            shipId: 49,
		    modify: false,
            skill: 3,
            points: 10,
            charge: 1,
            recurring: true,
            loadout: 10,
            ability: "Après avoir subi des dégats, vous pouvez dépenser 1 #ch# pour effectuer une action.",
            ability_ENG: "After you suffer damage, you may spend 1  to perform an action.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Lieutenant Dormitz",
            id: 203,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "Upsilon-Class Command Shuttle",
            force: 0,
            shipId: 49,
		    modify: false,
            skill: 3,
            points: 9,
            loadout: 10,
            ability: "Mise en place : Après vous être déployé, les autres petits vaisseaux peuvent être placés n'importe où dans l'aire de jeu à portée 0-2 de vous.",
            ability_ENG: "Setup: After you are placed, other friendly small ships can be placed anywhere in the play area at range 0-2 of you.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Major Stridan",
            id: 204,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "Upsilon-Class Command Shuttle",
            force: 0,
            shipId: 49,
		    modify: false,
            skill: 3,
            points: 9,
            loadout: 10,
            ability: "Lorsque vous coordonnez ou résolvez l'effet de l'une de vos améliorations, vous pouvez traiter vos vaisseaux alliés à portée 2-3 comme étant à portée 0 ou 1.",
            ability_ENG: "While you coordinate or resolve the effect of one of your upgrades, you may treat friendly ships at range 2-3 as being at range 0 or range 1.",
            slots: [
                "Talent"            
            ]
        },
		{
            name: "'Blackout'",
            id: 205,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/vn Silencer",
            force: 0,
            shipId: 47,
			modify: false,
            skill: 3,
            points: 4,
            loadout: 10,
            ability: "Lorsque vous attaquez, si l'attaque est obstruée par un obstacle, le défenseur lance 2 dés de défense en moins.",
            ability_ENG: "While you perform an attack, if the attack is obstructed by an obstacle, the defender rolls 2 fewer defense dice.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "'Recoil'",
            id: 206,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/vn Silencer",
            force: 0,
            shipId: 47,
		    modify: false,
            skill: 3,
            points: 4,
            loadout: 10,
            ability: "Tant que vous êtes stressé, vous pouvez considérer les vaisseaux ennemis dans votre #Farc# comme étant dans votre #bulls#",
            ability_ENG: "While you are stressed, you may treat enemy ships in your #Farc# as being in your #bulls#.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "'Rush'",
            id: 207,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/vn Silencer",
            force: 0,
            shipId: 47,
		    modify: false,
            skill: 3,
            points: 4,
            loadout: 10,
            ability: "Tant que vous êtes endommagé, considérez votre initiative étant à 6.",
            ability_ENG: "While you are damaged, treat your initiative as 6.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Kylo Ren",
            id: 208,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE/vn Silencer",
            shipId: 47,
		    modify: false,
            force: 2,
            skill: 3,
            points: 4,
            loadout: 10,
            ability: "Avant qu'un vaisseau ennemi dans votre #bulls# ne reçoive une carte de dégat face cachée, vous pouvez dépenser 1 #fo#. Dans ce cas, cette carte de dégat est reçue face révélée à la place.",
            ability_ENG: "Before an enemy ship in your #bulls# is dealt a facedown damage card, you may spend 1 #fo#. If you do, that damage card is dealt face up instead.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Ingénieur Sienar-Jamus",
            name_ENG: "Sienar-Jamus Engineer",
            id: 209,
            max_per_squad: 8,
            faction: "First_Order",
            ship: "TIE/vn Silencer",
            force: 0,
            shipId: 47,
		    modify: false,
            skill: 1,
            points: 4,
            loadout: 10,
            slots: [            
            ]
        },
        {
            name: "Premier Lieutenant Agnon",
            name_ENG: "First Lieutenant Agnon",
            id: 210,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE Echelon",
            force: 0,
            shipId: 93,
		    modify: false,
            skill: 3,
            points: 10,
            loadout: 10,
            ability: "Lorsqu'un vaisseau allié à portée 0-3 avec 1 seul point de coque attaque ou défend, il peut relancer 1 dé.",
            ability_ENG: "When a friendly ship at range 0-3 with only 1 hull left attacks or defends, it can reroll 1 die.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Lieutenant Shakel",
            id: 211,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE Echelon",
            force: 0,
            shipId: 93,
		    modify: false,
            skill: 3,
            points: 9,
            loadout: 10,
            ability: "Tant que vous avez 2 cartes de dégat, vous lancez 1 dé supplémentaire lorsque vous attaquez ou défendez.",
            ability_ENG: "When you have 2 damage card, you roll 1 additional die  while you defend or attack.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Officier Anjay",
            name_ENG: "Officer Anjay",
            id: 212,
            max_per_squad: 1,
            faction: "First_Order",
            ship: "TIE Echelon",
            force: 0,
            shipId: 93,
		    modify: false,
            skill: 3,
            points: 9,
            charge: 2,
            recurring: true,
            loadout: 10,
            ability: "Lorsque vous subissez des dégats, vous pouvez dépenser 1 #ch# pour coordonner un vaisseau. Ce vaisseau reçoit 1 jeton stress ou contrainte.",
            ability_ENG: "When you suffer damage, you may spend 1 #ch# to coordinate a ship. It gains 1 stress or strain token.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Officier de la Fureur Rouge",
            name_ENG: "Red Fury Officer",
            id: 213,
		    modify: false,
            max_per_squad: 8,
            faction: "First_Order",
            ship: "TIE Echelon",
            force: 0,
            shipId: 93,
            skill: 2,
            points: 8,
            loadout: 4,
            slots: [            
            ]
        },
///////////////////////////////////RESISTANCE/////////////////
//////////////////////////////////////////////////////////////
		{
            name: "Poe Dameron",
            name_ENG: "Poe Dameron",
            id: 214,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "T-70 X-wing",
            force: 0,
            shipId: 44,
			modify: true,
            skill: 6,
            points: 9,
            charge: 1,
            recurring: true,
            loadout: 15,
            title: ["Black One"],
            ability: "Après avoir effectué une action, vous pouve dépenser 1 #ch# pour effectuer une action blanche, en la considérant comme rouge.",
            ability_ENG: "After you perform an action, you may spend 1 charge to perform a white action, treating it as red.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Title"            
            ],
			modifier_func: [
				() => auto_equip("Title",1,197),
                () => add_slots("Turret")
				]
        },
        {
            name: "Temmin Wexley",
            name_ENG: "Temmin Wexley",
            id: 215,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "T-70 X-wing",
		    modify: false,
            force: 0,
            shipId: 44,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir exécuté entièrement une manoeuvre de vitesse 2-4, vous pouvez effectuer une action #BO#.",
            ability_ENG: "After you fully execute a speed 2-4 maneuver, you may perform a #BO# action.",
            slots: [
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "Jess Pava",
            name_ENG: "Jess Pava",
            id: 216,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "T-70 X-wing",
            force: 0,
            shipId: 44,
		    modify: false,
            skill: 3,
            points: 7,
            charge: 1,
            recurring: true,
            loadout: 10,
            ability: "Lorsque vous défendez ou attaquez, vous pouvez depenser 1 #ch# pour relancer jusqu'à 1 de vos dés pour chaque autre vaisseau allié à portée 0-1.",
            ability_ENG: "While you defend or perform an attack, you may spend 1 charge to reroll up to 1 of your dice for each other friendly ship at range 0-1.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Ello Asty",
            name_ENG: "Ello Asty",
            id: 217,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "T-70 X-wing",
            force: 0,
            shipId: 44,
		    modify: false,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Après avoir révélé une manoeuvre rouge #Ltal# ou #Rtal#, si vous avez 2 jetons stress ou moins, considérez cette manoeuvre comme blanche.",
            ability_ENG: "After you reveal a red #Ltal# or #Rtal# maneuver, if you have 2 or fewer stress tokens, treat that maneuver as white.",
            slots: [
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "Paige Tico",
            name_ENG: "Paige Tico",
            id: 218,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "MG-100 StarFortress",
            force: 0,
            shipId: 50,
		    modify: false,
            skill: 5,
            points: 9,
            charge: 2,
            loadout: 10,
            ability: "Après avoir largué ou lancé un engin, vous pouvez dépensez 1 #ch# pour larguer ou lancer un engin supplémentaire",
            ability_ENG: "After you drop or launch a device, you may spend 1 charge to drop or launch an additional device.",
            slots: [
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "Ben Teene",
            name_ENG: "Ben Teene",
            id: 219,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "MG-100 StarFortress",
            force: 0,
            shipId: 50,
		    modify: false,
            skill: 3,
            points: 9,
            loadout: 10,
            ability: "Après avoir attaqué, si le défenseur est dans votre #tur#, assignez la condition 'Rattled' au défenseur.",
            ability_ENG: "After you perform an attack, if the defender is in your #tur# , assign the 'Rattled' condition to the defender.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Finch Dallow",
            name_ENG: "Finch Dallow",
            id: 220,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "MG-100 StarFortress",
            force: 0,
            shipId: 50,
		    modify: false,
            skill: 4,
            points: 9,
            loadout: 10,
            ability: "Avant que vous ne larguiez une bombe, vous pouvez la placer sur l'aire de jeu touchant votre socle à la place",
            ability_ENG: "Before you would drop a bomb, you may place it in the play area touching you instead.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Edon Kappehl",
            name_ENG: "Edon Kappehl",
            id: 221,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "MG-100 StarFortress",
            force: 0,
            shipId: 50,
		    modify: false,
            skill: 3,
            points: 9,
            loadout: 10,
            ability: "Après avoir entièrement effectué une manoeuvre bleu ou blanche, si vous n'avez pas largué ou lancé d'engin ce tour, vous pouvez larguer un engin",
            ability_ENG: "After you fully execute a blue or white maneuver, if you have not dropped or launched a device this round, you may drop 1 device.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "L'ulo L'ampar",
            name_ENG: "L'ulo L'ampar",
            id: 222,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "RZ-2 A-wing",
            force: 0,
            shipId: 45,
		    modify: false,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous défendez ou effectuez une attaque principale, si vous êtes stressé, vous DEVEZ lancer 1 dé de défense en moins ou 1 dé d'attaque en plus.",
            ability_ENG: "While you defend or perform a primary attack, if you are stressed, you must roll 1 fewer defense die or 1 additional attack die.",
            slots: [
                "Talent",
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "Tallissan Lintra",
            name_ENG: "Tallissan Lintra",
            id: 223,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "RZ-2 A-wing",
            force: 0,
            shipId: 45,
		    modify: false,
            skill: 5,
            charge: 1,
            recurring: true,
            points: 6,
            loadout: 10,
            ability: "Lorsqu'un vaisseau ennemi dans votre #bulls# attaque, vous pouvez dépenser 1 #ch#. Dans ce cas, le défenseur lance 1 dé de défense supplémentaire",
            ability_ENG: "While an enemy ship in your #bulls# performs an attack, you may spend 1 charge. If you do, the defender rolls 1 additional die.",
            slots: [
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "Zizi Tlo",
            name_ENG: "Zizi Tlo",
            id: 224,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "RZ-2 A-wing",
            force: 0,
            shipId: 45,
		    modify: false,
            skill: 5,
            points: 7,
            charge: 1,
            recurring: true,
            loadout: 10,
            ability: "Après avoir défendu ou attaqué, vous pouvez dépenser 1 #ch# pour gagner un jeton concentration ou évasion.",
            ability_ENG: "After you defend or perform an attack, you may spend 1 #ch# to gain 1 focus or evade token.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Seftin Vanik",
            name_ENG: "Seftin Vanik",
            id: 225,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "RZ-2 A-wing",
            force: 0,
            shipId: 45,
		    modify: false,
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Après avoir effectué une action #BO#, vous pouvez transférer 1 de vos jetons à un autre vaisseau allié à portée 1.",
            ability_ENG: "After you perform a #BO# action, you may transfer 1 token to a friendly ship at range 1.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Han Solo",
            name_ENG: "Han Solo",
            id: 226,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "YT-1300 Light Freighter",
            force: 0,
            shipId: 3,
		    modify: true,
            skill: 6,
            points: 9,
            loadout: 15,
            title: ["Millenium Falcon"],
            ability: "Mise en place : Vous pouvez vous placer n'importe où sur l'aire de jeu, au delà de la portée 3 des vaisseaux ennemis.",
            ability_ENG: "Setup: You can be placed anywhere in the play area beyond range 3 of enemy ships.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Title"            
            ],
            modifier_func: [
            	() => auto_equip("Title",1,135),
                () => also_Occupies("Missile",135),
                () => lose_chassis("Docking Ship"),
                () => add_slots("Sensor"),
                () => add_slots("Calculator"),
                () => change_stat("attackt",1),
                () => change_stat("loadout",5),
                () => change_stat("points",1)
                    ]
        },
        {
            name: "Rey",
            name_ENG: "Rey",
            id: 227,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "YT-1300 Light Freighter",
            force: 2,
            shipId: 3,
		    modify: true,
            skill: 5,
            points: 10,
            loadout: 15,
            title: ["Millenium Falcon"],
            ability: "Lorsque vous défendez ou attaquez, si le vaisseau ennemi est dans votre #Farc#, vous pouvez dépenser 1 #fo# pour modifier l'un de vos résultats vierge en #evd# ou #hit#.",
            ability_ENG: "While you defend or perform an attack, if the enemy ship is in your #Farc# , you may spend 1 force to change 1 of your blank results to an #evd# or #hit# result.",
            slots: [
                "Talent",
                "Force",
                "Title"            
            ],
            modifier_func: [
            	() => auto_equip("Title",1,135),
                () => also_Occupies("Missile",135),
                    () => lose_chassis("Docking Ship"),
                    () => add_slots("Sensor"),
                    () => add_slots("Calculator"),
                    () => change_stat("attackt",1),
                    () => change_stat("loadout",5),
                    () => change_stat("points",1)
                    ]            
        },
        {
            name: "Chewbacca",
            name_ENG: "Chewbacca",
            id: 228,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "YT-1300 Light Freighter",
            force: 0,
            shipId: 3,
		    modify: true,
            skill: 4,
            points: 8,
            loadout: 15,
            ability: "Après qu'un vaisseau allié à portée 0-3 est détruit, avant que le vaisseau ne soit retiré, vous pouvez effectuer une action. Puis, vous pouvez effectuer une attaque bonus.",
            ability_ENG: "After a friendly ship at range 0-3 is destroyed, before that ship is removed, you may perform an action. Then you may perform a bonus attack.",
        	title: ["Millenium Falcon"],
            slots: [
                "Talent",
                "Title"            
            ],
            modifier_func: [
            	() => auto_equip("Title",1,135),
                () => also_Occupies("Missile",135),
                    () => lose_chassis("Docking Ship"),
                    () => add_slots("Sensor"),
                    () => add_slots("Calculator"),
                    () => change_stat("attackt",1),
                    () => change_stat("loadout",5),
                    () => change_stat("points",1)
                    ]            
        },
        {
            name: "Lando Calrissian",
            name_ENG: "Lando Calrissian",
            id: 229,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "YT-1300 Light Freighter",
            force: 0,
            shipId: 3,
		    modify: true,
            skill: 5,
            points: 10,
            loadout: 15,
            ability: "Après avoir exécuté entièrement une manoeuvre rouge ou effectué une action rouge, vous pouvez dépenser n'importe quel nombre de #ch# pour choisir autant de vaisseaux alliés à portée 0-2. Ces vaisseaux peuvent effectuer une action, même stressés.",
            ability_ENG: "After you fully execute a red maneuver or perform a red action, you may spend any number of Charge to choose that many friendly ships at range 0-2. The chosen ships may perform an action, even while stressed. ",
            title: ["Millenium Falcon"],
            slots: [
                "Talent",
                "Talent",
                "Title"            
            ],
            modifier_func: [
            	() => auto_equip("Title",1,135),
                () => also_Occupies("Missile",135),
                    () => lose_chassis("Docking Ship"),
                    () => add_slots("Sensor"),
                    () => add_slots("Calculator"),
                    () => change_stat("attackt",1),
                    () => change_stat("loadout",5),
                    () => change_stat("points",1)
                    ]            
        },
        {
            name: "Cova Nell",
            name_ENG: "Cova Nell",
            id: 230,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport",
            force: 0,
            shipId: 61,
		    modify: false,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous défendez ou effectuez une attaque principale, si votre manoeuvre révélée est rouge, lancez 1 dé supplémentaire.",
            ability_ENG: "While you defend or perform a primary attack, if your revealed maneuver is red, roll 1 additional die.",
            slots: [
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "Nodin Chavdri",
            name_ENG: "Nodin Chavdri",
            id: 231,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport",
            force: 0,
            shipId: 61,
		    modify: false,
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Après avoir coordonné ou avoir été coordonné, si vous avez 2 jeteons stress ou moins, vous pouvez effectuer 1 action de votre barre d'action en la considérant comme rouge, même stressé.",
            ability_ENG: "After you coordinate or are coordinated, if you have 2 or fewer stress tokens, you may perform 1 action on your action bar as a red action, even if you are stressed.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Pammich Nerro Goode",
            name_ENG: "Pammich Nerro Goode",
            id: 232,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport",
            force: 0,
            shipId: 61,
		    modify: false,
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Lorsque vous avez 2 jetons stress ou moins, vous pouvez effectuer des manoeuvre rouges même stressé.",
            ability_ENG: "While you have 2 or fewer stress tokens, you may execute red maneuvers even while stressed.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Taka Jamoreesa",
            name_ENG: "Taka Jamoreesa",
            id: 233,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport",
            force: 0,
            shipId: 61,
		    modify: false,
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Après avoir brouillé, vous devez assigner 1 jeton brouillage à un autre vaisseau à portée 0-1 du vaisseau brouillé, si possible.",
            ability_ENG: "After you jam, you must assign 1 jam token to another ship at range 0-1 of the jammed ship, if able.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Finn",
            name_ENG: "Finn",
            id: 234,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport Pod",
            force: 0,
            shipId: 60,
		    modify: false,
            skill: 3,
            points: 3,
            loadout: 5,
            ability: "Lorsque vous défendez ou attaquez, vous pouvez ajouter un résultat vierge, ou vous pouvez gagner 1 jeton contrainte pour ajouter un résultat #eye# à la place.",
            ability_ENG: "While you defend or perform an attack, you may add 1 blank result, or you may gain 1 strain token to add 1 #eye# result instead.",
            slots: [
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "Rose Tico",
            name_ENG: "Rose Tico",
            id: 235,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport Pod",
            force: 0,
            shipId: 60,
		    modify: false,
            skill: 3,
            points: 3,
            loadout: 5,
            ability: "Lorsque vous défendez ou attaquez, vous pouvez relancer jusqu'à 1 de vos résultats pour chaque autre vaisseau allié dans l'arc de tir",
            ability_ENG: "While you defend or perform an attack, you may reroll up to 1 of your results for each other friendly ship in the attack arc.",
            slots: [
                "Talent",
                "Talent",            
            ]
        },
        {
            name: "BB-8",
            name_ENG: "BB-8",
            id: 236,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport Pod",
            force: 0,
            shipId: 60,
		    modify: true,
            skill: 1,
            points: 2,
            loadout: 5,
            ability: "Pendant la phase système, vous pouvez effectuer une action rouge #BR# ou #BO#.",
            ability_ENG: "During the System Phase, you may perform a red #BR# or #BO# action.",
            slots: [
            ],
		modifier_func: [
			() => droid()
			]
        },
        {
            name: "Vi Moradi",
            name_ENG: "Vi Moradi",
            id: 237,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "Resistance Transport Pod",
            modify: false,
		    force: 0,
            shipId: 60,
            skill: 1,
            points: 2,
            loadout: 5,
            ability: "Mise en place : Après avoir placé les forces, assignez la condition 'Information Compromettante' à un vaisseau ennemi.",
            ability_ENG: "Setup: After placing forces, assign the Compromising Intel condition to 1 enemy ship.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Zori Bliss",
            name_ENG: "Zori Bliss",
            id: 238,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "BTA-NR2 Y-wing",
            modify: false,
		    force: 0,
            shipId: 74,
            skill: 5,
            points: 8,
            charge: 1,
            recurring : true,
            loadout: 10,
            ability: "Après qu'un vaisseau à portée 1 effectue une action pendant son étape 'Effectuer une action', si cette action est aussi sur votre barre d'action, vous pouvez dépenser 1 #ch# pour effectuer cette action, en la considérant comme rouge.",
            ability_ENG: "After a ship at range 1 performs an action during its Perform Action step, if that action is on your action bar, you may spend 1 charge to perform that action, treating it as red.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Aftab Ackbar",
            name_ENG: "Aftab Ackbar",
            id: 239,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "BTA-NR2 Y-wing",
            modify: false,
		    force: 0,
            shipId: 74,
            skill: 2,
            points: 7,
            loadout: 10,
            ability: "Après avoir executé une manoeuvre basique rouge ou effectué une action rouge, si vous avez exactement 1 jeton stress, vous pouvez gagner 1 jeton contrainte pour retirer ce jeton stress.",
            ability_ENG: "After you execute a red basic maneuver or perform a red action, if you have exactly 1 stress token, you may gain 1 strain token to remove that stress token.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Lega Fossang",
            name_ENG: "Lega Fossang",
            id: 240,
            max_per_squad: 1,
            faction: "Resistance",
            modify: false,
		    ship: "BTA-NR2 Y-wing",
            force: 0,
            shipId: 74,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué une attaque principale ou une attaque #tur#, vous pouvez relancer 1 dé d'attaque pour chaque engin allié ou vaisseau allié calculateur dans l'arc d'attaque.",
            ability_ENG: "While you perform a primary or  (tur) attack, you may reroll 1 attack die for each friendly device or calculating friendly ship in the attack arc.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Tesa Nasz",
            name_ENG: "Tesa Nasz",
            id: 241,
            max_per_squad: 1,
            faction: "Resistance",
            ship: "BTA-NR2 Y-wing",
            modify: false,
		    force: 0,
            shipId: 74,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Lorsqu'un vaisseau allié à portée 0-2 attaque, si le défenseur a un vaisseau allié (à vous) dans son #Larc# ET son #Rarc#, l'attaquant peut relancer 1 dé d'attaque.",
            ability_ENG: "While a friendly ship at range 0-2 performs an attack, if the defender has a ship friendly to the attacker in its #Larc# AND #Rarc#, the attacker may reroll 1 attack die.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Trafiquant d'Epice Kimiji",
            name_ENG: "Kimiji Spice Runner",
            id: 242,
            max_per_squad: 8,
            modify: false,
		    faction: "Resistance",
            ship: "BTA-NR2 Y-wing",
            force: 0,
            shipId: 74,
            skill: 2,
            points: 6,
            loadout: 3,
            slots: [            
            ]
        },

////////////////////////////Imperial Elite Forces/////////////
//////////////////////////////////////////////////////////////
		{
            name: "Rear Admiral Chiraneau",
            id: 243,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "VT-49 Decimator",
            modify: false,
			force: 0,
            shipId: 17,
            skill: 5,
            points: 12,
            loadout: 10,
            ability: "Lorsque vous attaquez, si vous êtes renforcés et que le défenseur est dans le #F180# ou #B180# correspondant à votre jeton renforcefment, vous pouvez changez un de vos résultats #eye# en résultat #crit#.",
            ability_ENG: "While you perform an attack, if you are reinforced and the defender is in the #F180# or #B180# matching your reinforce token, you may change 1 of your #eye# results to a #crit# result.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Capitaine Oicunn",
            name_ENG: "Captain Oicunn",
            id: 244,
            modify: false,
		    max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "VT-49 Decimator",
            force: 0,
            shipId: 17,
            skill: 3,
            points: 11,
            loadout: 10,
            ability: "Vous pouvez attaquer à portée 0. Considérez vos attaques à portée 0 comme des attaques à portée 1.",
            ability_ENG: "You may attack at range 0. While you perform an attack at attack range 0, treat it as an attack at attack range 1.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Morna Kee",
            id: 245,
            max_per_squad: 1,
            modify: false,
		    faction: "Imperial_Elite_Forces",
            ship: "VT-49 Decimator",
            force: 0,
            shipId: 17,
            skill: 4,
            charge: 1,
            recurring: true,
            points: 11,
            loadout: 10,
            ability: "Pendant la phase de fin, vous pouvez retourner votre jeton renforcement de l'autre côté. Lorsque vous recevez un jeton épuisement, vous pouvez dépenser 1 #ch# pour le retirer.",
            ability_ENG: "During the End Phase, you may flip your reinforce token to the other full arc. When you receive a deplete token, you may spend 1 charge to remove it.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Iden Versio",
            id: 246,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            modify: false,
		    ship: "TIE/ln Fighter",
            force: 0,
            shipId: 4,
            skill: 4,
            charge: 2,
            recurring: true,
            points: 5,
            loadout: 10,
            ability: "Lorsqu'un TIE allié à portée 0-1 devrait subir des dégats, vous pouvez dépenser 2 #ch#. Dans ce cas, prévenez 1 dégat.",
            ability_ENG: "Before a friendly TIE at range 0-1 would suffer damage, you may spend 2 #ch#. If you do, prevent 1 damage",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Gideon Hask",
            id: 247,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            modify: false,
		    ship: "TIE/ln Fighter",
            force: 0,
            shipId: 4,
            skill: 4,
            points: 4,
            loadout: 10,
            ability: "Lorsque vous attaquez un vaisseau endommagé, lancez 1 dé d'attaque supplémentaire.",
            ability_ENG: "While you perform an attack against a damaged defender, roll 1 additional attack die.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Del Meeko",
            id: 248,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/ln Fighter",
            modify: false,
		    force: 0,
            shipId: 4,
            skill: 4,
            points: 4,
            loadout: 10,
            ability: "Lorsqu'un vaissdeau allié à portée 0-2 défend contre un vaisseau endommagé, le défenseur peut relancer 1 dé de défense.",
            ability_ENG: "While a friendly ship at range 0-2 defends against a damaged attacker, the defender may reroll 1 defense die.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Seyn Marana",
            id: 249,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/ln Fighter",
            modify: false,
		    force: 0,
            shipId: 4,
            skill: 4,
            points: 4,
            loadout: 10,
            ability: "Lorsque vous attaquez, vous pouvez dépenser 1 résultat #crit#. Dans ce cas, distribuez 1 carte de dégat face cachée au défenseur, puis annulez les résultats restants.",
            ability_ENG: "While you perform an attack, you may spend 1 #crit# result. If you do, deal 1 facedown damage card to the defender, then cancel your remaining results.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Soontir Fel",
            id: 250,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/in Interceptor",
            force: 0,
            shipId: 6,
            modify: false,
		    skill: 6,
            points: 9,
            loadout: 10,
            ability: "Au début de la phase d'engagement, s'il y a un vaisseau ennemi dans votre #bulls#, recevez un jeton concentration.",
            ability_ENG: "At the start of the Engagement Phase, if there is an enemy ship in your #bulls#, gain 1 focus token.",
            slots: [
                "Talent",
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Ciena Ree",
            id: 251,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/in Interceptor",
            modify: false,
		    force: 0,
            shipId: 6,
            skill: 6,
            points: 8,
            loadout: 10,
            ability: "Après avoir attaqué, si le défenseur a été détruit, recevez un jeton stress.<br>Après qu'un vaisseau allié à portée 0-3 a été détruit, retirez 1 jeton stress et effectuez une action",
            ability_ENG: "After you perform an attack, if the defender was destroyed, gain 1 stress token.<br>After a friendly ship at range 0-3 is destroyed, remove 1 stress token and perform an action.",
            slots: [
                "Talent",
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Deuxième Soeur",
            name_ENG: "Second Sister",
            id: 252,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            modify: false,
		    ship: "TIE/in Interceptor",
            shipId: 6,
            skill: 4,
            force: 2,
            points: 8,
            loadout: 10,
            ability: "Lorsque vous attaquez, après l'étape 'Neutralisez les Résultats', si l'attaque touche, vous pouvez dépenser 2 #fo#. Dans ce cas, modifiez tous vos résultats #hit# en #crit#.",
            ability_ENG: "While you perform an attack, after the Neutralize Results step, if the attack hits, you may spend 2 #fo#. If you do, change all of your #hit# results to #crit# results.",
            slots: [
                "Talent",
                "Talent",
                "Force"            
            ]
        },
        {
            name: "Turr Phenir",
            id: 253,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/in Interceptor",
            modify: false,
		    force: 0,
            shipId: 6,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir attaqué, vous pouvez effectuer une action #BR# ou #BO#, même stressé.",
            ability_ENG: "After you perform an attack, you may perform a #BR# or #BO# action, even if you are stressed.",
            slots: [
                "Talent",
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "As de l'Escadron Sabre",
            name_ENG: "Saber Squadron Ace",
            id: 254,
            max_per_squad: 8,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/in Interceptor",
            modify: false,
		    force: 0,
            shipId: 6,
            skill: 4,
            points: 6,
            loadout: 0,
            ability: "",
            ability_ENG: "",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "'Deathrain'",
            id: 255,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/ca Punisher",
            modify: false,
		    force: 0,
            shipId: 24,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Après avoir largué ou lancé un engin, vous pouvez effectuer une action.",
            ability_ENG: "After you drop or launch a device, you may perform an action.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "'Redline'",
            id: 256,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/ca Punisher",
            modify: false,
		    force: 0,
            shipId: 24,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Vous pouvez maintenir jusqu'à 2 verrouillages.<br>Après avoir effectué une action, vous pouvez verrouiller une cible.",
            ability_ENG: "You can maintain up to 2 locks.<br>After you perform an action, you may acquire a lock.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Rexler Brath",
            id: 257,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/d Defender",
            modify: false,
		    force: 0,
            shipId: 13,
            skill: 5,
            points: 12,
            loadout: 10,
            ability: "Après avoir effectué une attaque qui touche, si vous êtes évasif, exposez 1 des cartes de dégat du défenseur.",
            ability_ENG: "After you perform an attack that hits, if you are evading, expose 1 of the defender's damage cards.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
        {
            name: "Colonel Vessery",
            id: 258,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/d Defender",
            modify: false,
		    force: 0,
            shipId: 13,
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "Lorsque vous attaquez un vaisseau verrouillé, après avoir lancé les dés d'attaque, vous pouvez verrouiller le défenseur.",
            ability_ENG: "While you perform an attack against a locked ship, after you roll attack dice, you may acquire a lock on the defender.",
            slots: [
                "Talent"            
            ]
        },		
        {
            name: "Comtesse Ryad",
            name_ENG: "Countess Ryad",
            id: 259,
            max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            modify: false,
		    ship: "TIE/d Defender",
            force: 0,
            shipId: 13,
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "Quand vous devriez exécuter une manoeuvre #straight#, vous pouvez augementer sa difficulté. Dans ce cas, exécutez une manoeuvre #Kturn# de même vitesse à la place.",
            ability_ENG: "While you would execute a #straight# maneuver, you may increase the difficulty of the maneuver. If you do, execute it as a #Kturn# maneuver instead.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Capitaine Dobbs",
            name_ENG: "Captain Dobbs",
            id: 260,
            modify: false,
		    max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE/d Defender",
            force: 0,
            shipId: 13,
            skill: 5,
            points: 11,
            loadout: 10,
            ability: "Lorsqu'un autre vaisseau à portée 0-1 défend, avant l'étape 'Neutralisez les Résultats', si vous êtes dans l'arc de tir et que vous n'êtes pas ionisé, vous pouvez gagnez 1 jeton ion pour annuler 1 résultat #hit#.",
            ability_ENG: "While another friendly ship at range 0-1 defends, before the Neutralize Results step, if you are in the attack arc and are not ionized, you may gain 1 ion token to cancel 1 #hit# result.",
            slots: [
                "Talent"            
            ]
        },
        {
            name: "Grand Inquisiteur",
            name_ENG: "Grand Inquisitor",
            id: 261,
            max_per_squad: 1,
            modify: false,
		    faction: "Imperial_Elite_Forces",
            ship: "TIE Advanced v1",
            shipId: 27,
            skill: 5,
            force: 3,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous défendez à portée 1, vous pouvez dépenser 1 #fo# pour annuler le bonus de portée.<br>Lorsque vous attaquez à portée 2-3, vous pouvez dépenser 1 #fo# pour appliquer le bonus de portée 1.",
            ability_ENG: "While you defend at attack range 1, you may spend 1 force to prevent the range 1 bonus.<br>While you perform an attack against a defender at attack range 2-3, you may spend 1 force to apply the range 1 bonus.",
            slots: [
                "Talent",
                "Force"            
            ]
        },
        {
            name: "Cinquième Frère",
            name_ENG: "Fifth Brother",
            id: 262,
            modify: false,
		    max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE Advanced v1",
            shipId: 27,
            skill: 4,
            points: 6,
            force: 2,
            loadout: 10,
            ability: "Lorsque vous attaquez, après l'étape 'Neutralisez les Résultats', si l'attaque touche, vous pouvez dépenser 2 #fo# pour ajouter 1 résultat #crit#.",
            ability_ENG: "While you perform an attack, after the Neutralize Results step, if the attack hits, you may spend 2 #fo# to add 1 #crit# result.",
            slots: [
                "Force"            
            ]
        },
        {
            name: "Septième Soeur",
            name_ENG: "Seventh Sister",
            id: 263,
            modify: false,
		    max_per_squad: 1,
            faction: "Imperial_Elite_Forces",
            ship: "TIE Advanced v1",
            shipId: 27,
            skill: 4,
            points: 6,
            force: 2,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, avant l'étape 'Neutralisez les Résultats', vous pouvez dépenser 2 #fo# pour annuler 1 résultat #evd#.",
            ability_ENG: "While you perform a primary attack, before the Neutralize Results step, you may spend 2 #fo# to cancel 1 #evd# result.",
            slots: [
                "Force"            
            ]
        },
        {
            name: "Valen Rudor",
            id: 264,
            max_per_squad: 1,
            modify: false,
		    faction: "Imperial_Elite_Forces",
            ship: "TIE Advanced v1",
            force: 0,
            shipId: 27,
            skill: 4,
            points: 5,
            loadout: 10,
            ability: "Après qu'un vaisseau allié à portée 0-1 a défendu (après que les éventuels dégats ont été distribués), vous pouvez effectuer une action.",
            ability_ENG: "After a friendly ship at range 0-1 defends (after damage is resolved, if any), you may perform an action.",
            slots: [
                "Talent",
                "Talent"            
            ]
        },
  
        

    ];