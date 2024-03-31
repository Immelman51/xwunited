const chassis = [
    {
        name: "Docking Ship",
        effect1: "<em><strong>Vaisseau-Mère :</strong></em> MISE EN PLACE: vous <mark>DEVEZ</mark> avoir un vaisseau arrimé avec vous avec la capacité <em>Co-Pilot</em>. Considérez les boucliers de votre vaisseau arrimé comme les vôtres.",
    },
    {
        name: "Copilot",
        effect1: "<em><strong>Copilote :</strong></em> Tant que vous êtes arrimé, votre Vaisseau-Mère considère aussi votre capacité de pilote comme étant le sien."
    },
    {
        name: "Sensor Blindspot",
        effect1: "<em><strong>Angle-Mort des Senseurs :</strong></em> Tant que vous effectuez une attaque principale à portée 0-1, lancez 1 dé d'attaque en moins. Tant que vous défendez à portée 1, lancez 1 dé de défense en moins"

    },
    {
        name: "Servomotor S-Foils",
        effect1: "<em><strong>Servomoteurs S-Foils :</strong></em> Avant de vous activez, vous pouvez retourner cette carte",
        effect2: ""
    },
    {
        name: "",
        effect1: "<em><strong>Aile Pivot (Baissée):</strong></em> ",
        effect2: "<em><strong>Aile Pivot (Relevée):</strong></em> "
    },
    {
        name: "Vectored Thrusters",
        effect1: "<em><strong>Propulseurs Vectorisés :</strong></em> "
    },
    {
        name: "Stabilized S-Foils",
        effect1: "<em><strong>S-Foils Stabilisés :</strong></em> ",
        effect2: "<em><strong>S-Foils Stabilisés :</strong></em> "
    },
    {
        name: "Advanced Targetting Computer",
        effect1: "<em><strong>Ordinateur de Visée Avancé:</strong></em> Tant que vous effectuez une attaque principale contre un défenseur que vous avez vérouillé, lancez 1 dé d'attaque supplémentaire et changez 1 résultat #hit# en un résultat #crit#"
    },
    {
        name: "Nimble Bomber",
        effect1: "<em><strong>Bombardier Agile :</strong></em> Si vous devez utiliser un gabarit #straight# pour larguer un engin, vous pouvez utiliser un gabarit #Lbank# ou #Rbank# de même vitesse à la place."
    },
    {
       name: "Swivel Wing",
       effect1: "<em><strong>Aile Basculante (Baissée):</strong></em> Après avoir executé une manoeuvre [0#stop#], vous pouvez pivoter votre vaisseau de 90° ou 180°. Dans ce cas vous <strong>devez</strong> retourner cette carte.",
       effect2: "<em><strong>Aile Basculante (Relevée):</strong></em> Tant que vous défendez, lancez 1 dé de défense en moins. Après avoir entièrement executé une manoeuvre non-stationnaire [0#stop#], vous pouvez retourner cette carte." 
    },
    {
        name: "Autothrusters",
        effect1: "<em><strong>Autopropulseurs :</strong></em> Après avoir effectué une action, vous pouvez effectuer une action #BR# rouge ou #BO# rouge."
    },
    {
        name: "Full Throttle",
        effect1: "<em><strong>Plein Gaz :</strong></em> Après avoir entièrement executé une manoeuvre à vitesse 3-5, vous pouvez gagner un jeton évasion."
    },
    {
        name: "Controlled Ailerons",
        effect1: "<em><strong>Ailerons Contrôlables :</strong></em> Avant de révéler votre cadran, si vous n'êtes pas stressé, vous pouvez accélérer."
    },
    {
        name: "Rotating Cannons",
        effect1: "<em><strong>Canons Rotatifs :</strong></em> Vous pouvez pivoter votre indicateur #tur# uniquement, vers votre #Farc# ou #Barc#. Vous <strong>devez</strong> considérer le prérequis #Farc# de cos améliorations #can# équipées comme étant #tur#."
    },
    {
        name: "Adaptative Ailerons",
        effect1: "<em><strong>Ailerons Adaptables :</strong></em> Avant de révéler votre cadran, si vous n'êtes pas stressé, vous <strong>devez</strong> accélérer."
    },
    {
        name: "Rigged Energy Cells",
        effect1: "<em><strong>Cellules Énergétiques Bidouillées :</strong></em> Pendant la phase de système, si vous n’êtes pas arrimé, perdez 1 #ch# . À la fin de la phase d’activation, vous êtes détruit si vous avez 0 #ch#. Avant de retirer votre figurine, chaque vaisseau à porté 0–1 subit 1 dégât #crit#"
    },








]
const ships = 
[
    {
            name: "T-65 X-wing",
            factions: [ "Rebel_Alliance", "Partisans", "New_Republic" ],
            attack: 3,
            agility: 2,
            hull: 4,
            shields: 2,
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll"
            ],
            chassis: "Servomotor S-Foils",
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 2, 2, 2, 2, 0, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0]
            ]
        },
        {    
            
            name: "BTL-A4 Y-wing",
            factions: [ "Rebel_Alliance", "Hutt_Cartel", "Shadow_Specialists" ],
            attack: 2,
            agility: 1,
            hull: 6,
            shields: 2,
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "R-Reload"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 1, 1, 1, 0, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 3, 2, 2, 2, 3, 0],
                [ 0, 0, 3, 0, 0, 3]
            ]
        },
        {
        
            name: "RZ-1 A-wing",
            factions: [ "Rebel_Alliance", "Phoenix_Cell" ],
            attack: 2,
            agility: 3,
            hull: 2,
            shields: 2,
            chassis: "Vectored Thrusters",
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 3, 3],
                [ 0, 0, 1, 0, 0, 0, 0, 0],
                [ 0, 0, 1, 0, 0, 3, 0, 0]
            ]
        },
        {
        
            name: "YT-1300 Light Freighter",
            factions: [ "Pirates_and_Smugglers", "Resistance" ],
            attackt: 2,
            agility: 1,
            hull: 8,
            shields: 5,
            chassis: "Docking Ship",
            actions: [
                "Focus",
                "Lock",
                "Rotate Arc",
                "R-Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0]
            ],
            base: "Large"
        },
        {
        
            name: "TIE/ln Fighter",
            factions: ["Phoenix_Cell", "Imperial_Academy", "Imperial_Elite_Forces", "Imperial_Remnants"],
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 0,
            keyword: ["TIE"],
            actions: [
                "Focus",
                "Barrel Roll",
                "Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 3],
                [ 0, 0, 2, 0, 0, 3],
                [ 0, 0, 2, 0, 0, 0]
            ]
        },
        {
    
            name: "TIE Advanced x1",
            factions: [ "Imperial_Academy" ],
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 2,
            keyword: ["TIE"],
            chassis: "Advanced Targeting Computer",
            actions: [
                "Focus",
                "R-> Barrel Roll",
                "Lock",
                "Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 1, 2, 1, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
        
            name: "TIE/in Interceptor",
            factions: [ "Imperial_Academy", "Imperial_Elite_Forces", "Imperial_Remnants" ],
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 0,
            keyword: ["TIE"],
            chassis: "Autothrusters",
            actions: [
                "Focus",
                "Barrel Roll",
                "Boost",
                "Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 3, 3],
                [ 0, 0, 1, 0, 0, 3, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0]
            ]
        },
        {
        
            name: "Firespray-class Patrol Craft",
            factions: [ "Pirates_and_Smugglers", "Bounty_Hunters_Guild", "Agents_of_Chaos"],
            attack: 3,
            attackb: 3,
            agility: 2,
            hull: 6,
            shields: 4,
            base: "Medium",
            actions: [
                "Focus",
                "Lock",
                "Boost",
                "R-Reinforce"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0]
            ]
        },
        {
        
            name: "HWK-290 Light Freighter",
            factions: [ "Rebel_Alliance", "Pirates_and_Smugglers", "Hutt_Cartel" ],
            attackt: 1,
            agility: 2,
            hull: 3,
            shields: 2,
            actions: [
                "Focus",
                "R-> Rotate Arc",
                "Lock",
                "R-> Rotate Arc",
                "Rotate Arc",
                "R-Boost",
                "R-Jam"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0],
                [ 0, 1, 1, 1, 0],
                [ 2, 2, 1, 2, 2],
                [ 3, 2, 1, 2, 3],
                [ 0, 0, 2, 0, 0]
            ]
        },
        {
        
            name: "Lambda-class T-4a Shuttle",
            factions: [ "Imperial_Academy", "ISB" ],
            attack: 3,
            agility: 1,
            hull: 6,
            shields: 4,
            chassis: "Tail Canon",
            actions: [
                "Focus",
                "Coordinate",
                "Reinforce",
                "R-Jam"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0],
                [ 0, 1, 1, 1, 0],
                [ 3, 2, 1, 2, 3],
                [ 0, 3, 2, 3, 0]
            ],
            base: "Large"
        },
        {
   
            name: "A/SF-01 B-wing",
            factions: [ "Rebel_Alliance" ],
            attack: 3,
            agility: 1,
            hull: 4,
            shields: 4,
            chassis: "Stabilized S-Foils",
            actions: [
                "Focus",
                "R-> Barrel Roll",
                "Lock",
                "Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 1, 1, 1, 3, 0, 0, 0, 3, 3],
                [ 2, 2, 1, 2, 2, 3, 0, 0, 0, 0],
                [ 0, 3, 1, 3, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
            
            name: "TIE/sa Bomber",
            factions: [ "Imperial_Academy" ],
            attack: 2,
            agility: 2,
            hull: 6,
            shields: 0,
            keyword: ["TIE"],
            chassis: "Nimble Bomber",
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "R-> Lock",
                "R-Reload"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 3],
                [ 0, 0, 2, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 3]
            ]
        },
        {
      
        
            name: "Z-95-AF4 Headhunter",
            factions: [ "Partisans", "Bounty_Hunters_Guild", "Black_Sun", "Pirates_and_Smugglers"  ],
            attack: 2,
            agility: 2,
            hull: 2,
            shields: 2,
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 3],
                [ 0, 0, 2, 0, 0, 3]
            ]
        },
        {
    
        
            name: "TIE/d Defender",
            factions: [ "Imperial_Elite_Forces" ],
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 4,
            keyword: ["TIE"],
            chassis: "Full Throttle",
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 3, 1, 0, 1, 3, 0],
                [ 3, 2, 1, 2, 3, 3],
                [ 2, 2, 1, 2, 2, 0],
                [ 0, 0, 1, 0, 0, 2],
                [ 0, 0, 1, 0, 0, 0]
            ]
        },
        {
     
    
            name: "E-wing",
            factions: [ "New_Republic" ],
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 3,
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll",
                "R-> Lock",
                "Boost",
                "R-> Lock"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 3, 1, 1, 1, 3, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 3, 3 ],
                [ 0, 0, 1, 0, 0, 3, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    
            name: "TIE/ph Phantom",
            factions: [ "ISB" ],
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 2,
            keyword: ["TIE"],
            chassis: "Stygium Array",
            actions: [
                "Focus",
                "Evade",
                "Barrel Roll",
                "Cloak"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 2, 2, 0, 2, 2, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 3],
                [ 0, 0, 2, 0, 0, 3]
            ]
        },
        {
    
        
            name: "YT-2400 Light Freighter",
            factions: [ "Phoenix_Cell", "Pirates_and_Smugglers" ],
            agility: 2,
            hull: 6,
            shields: 4,
            chassis: "Sensor Blackout",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "Rotate Arc"
            ],
            base: "Large",
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 2, 2, 2, 2, 2, 0],
                [ 0, 0, 2, 0, 0, 3]
            ]
        },
        {
       
            name: "VT-49 Decimator",
            factions: [ "Imperial_Elite_Forces" ],
            attackt: 3,
            agility: 0,
            hull: 12,
            shields: 4,
            actions: [
                "Focus",
                "Lock",
                "Reinforce",
                "Rotate Arc",
                "R-Coordinate"
            ],
            base: "Large",
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 3, 1, 1, 1, 3, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 2, 2, 2, 2, 2, 0],
                [ 0, 0, 2, 0, 0, 0]
            ]
        },
        {
     
        
            name: "StarViper-class Attack Platform",
            factions: ["Black_Sun"],
            attack: 3,
            agility: 3,
            hull: 4,
            shields: 1,
            chassis: "Microthrusters",
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "R-> Focus",
                "Boost",
                "R-> Focus"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 0, 0, 0]
            ]
        },
        {
     
        
            name: "M3-A Interceptor",
            factions: [ "Hutt_Cartel", "Pirates_and_Smugglers" ],
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 1,
            chassis: "Weapon Hardpoint",
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 0, 1, 2, 0 ],
                [ 2, 2, 1, 2, 2, 0 ],
                [ 0, 2, 1, 2, 0, 3 ],
                [ 0, 0, 2, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3 ]
            ]
        },
        {
    
       
            name: "Aggressor Assault Fighter",
            factions: [ "Bounty_Hunters_Guild", "Mandalorian_Clans" ],
            attack: 3,
            agility: 3,
            hull: 5,
            shields: 3,
            actions: [
                "Calculate",
                "Evade",
                "Lock",
                "Boost",
            ],
            base: "Medium",
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0, 3, 3 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0 ]
            ]
        },
        {
    
            name: "YV-666 Light Freighter",
            factions: [ "Hutt_Cartel", "Crime Syndicate", "Bounty_Hunters_Guild" ],
            attackf: 3,
            agility: 1,
            hull: 9,
            shields: 3,
            base: "Large",
            actions: [
                "Focus",
                "Reinforce",
                "Lock",
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0 ],
                [ 3, 2, 1, 2, 3, 0 ],
                [ 2, 2, 1, 2, 2, 0 ],
                [ 0, 0, 2, 0, 0, 0 ]
            ]
        },
        {
    
       
            name: "Kihraxz Fighter",
            factions: ["Black_Sun", "Hutt_Cartel", "Bounty_Hunters_Guild"],
            attack: 3,
            agility: 2,
            hull: 5,
            shields: 1,
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 0, 1, 2, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 3, 3 ],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ]
            ]
        },
        {
  
            name: "BTL-S8 K-wing",
            factions: ["New_Republic"],
            attackt: 2,
            agility: 1,
            hull: 6,
            shields: 3,
            base: "Medium",
            actions: [
                "Focus",
                "Lock",
                "Slam",
                "Rotate Arc",
                "Reload",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0 ],
                [ 0, 2, 2, 2, 0, 0 ]
            ]
        },
        {
    
    
            name: "TIE/ca Punisher",
            factions: ["Imperial_Elite_Forces"],
            attack: 2,
            agility: 1,
            hull: 6,
            shields: 3,
            keyword: ["TIE"],
            base: "Medium",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "Boost",
                "R-> Lock",
                "Reload",
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0 ],
                [ 3, 2, 2, 2, 3, 0 ],
                [ 0, 0, 0, 0, 0, 3 ]
            ]
        },
        {
   
        
            name: "VCX-100 Light Freighter",
            factions: ["Phoenix_Cell", "New_Republic"],
            attack: 4,
            agility: 0,
            hull: 10,
            shields: 4,
            base: "Large",
            chassis: "???",
            actions: [
                "Focus",
                "Lock",
                "Reinforce",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0 ],
                [ 3, 2, 1, 2, 3, 0 ],
                [ 2, 1, 1, 1, 2, 0 ],
                [ 3, 2, 2, 2, 3, 0 ],
                [ 0, 0, 2, 0, 0, 3 ]
            ]
        },
        {
     
      
            name: "Attack Shuttle",
            factions: ["Phoenix_Cell"],
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 1,
            chassis: "Locked and Loaded",
            actions: [
                "Focus",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0 ],
                [ 3, 1, 1, 1, 3, 0 ],
                [ 2, 2, 1, 2, 2, 0 ],
                [ 3, 2, 2, 2, 3, 0 ],
                [ 0, 0, 2, 0, 0, 3 ]
            ]
        },
        {
  
            name: "TIE Advanced v1",
            factions: ["Imperial_Elite_Forces"],
            attack: 2,
            agility: 3,
            hull: 2,
            shields: 2,
           keyword: ["TIE"],
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll",
                "R-> Focus",
                "Boost",
                "R-> Focus"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 1, 1, 0, 1, 1, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 3, 3 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    
       
            name: "G-1A Starfighter",
            factions: ["Bounty_Hunters_Guild"],
            attack: 3,
            agility: 1,
            hull: 5,
            shields: 4,
            base: "Medium",
            actions: [
                "Focus",
                "Lock",
                "Jam",
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0 ],
                [ 3, 1, 1, 1, 3, 0 ],
                [ 2, 2, 1, 2, 2, 3 ],
                [ 0, 3, 2, 3, 0, 0 ],
                [ 0, 0, 3, 0, 0, 3 ]
            ]
        },
        {
    
            name: "JumpMaster 5000",
            factions: ["Bounty_Hunters_Guild"],
            base: "Large",
            attackt: 2,
            agility: 2,
            hull: 6,
            shields: 3,
            actions: [
                "Focus",
                "R-> Rotate Arc",
                "Lock",
                "R-> Rotate Arc",
                "R-Barrel Roll",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 2, 3, 0, 0, 0 ],
                [ 2, 1, 1, 2, 3, 0, 0, 0 ],
                [ 0, 1, 1, 2, 0, 0, 3, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0 ]
            ]
        },
        {
 
            name: "ARC-170 Starfighter",
            factions: ["Rebel_Alliance","Galactic_Senate"],
            attack: 3,
            attackb: 2,
            agility: 1,
            hull: 6,
            shields: 3,
            base: "Medium",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0 ],
                [ 3, 2, 2, 2, 3, 0 ],
                [ 0, 0, 3, 0, 0, 3 ]
            ]
        },
        {
   
      
            name: "Fang Fighter",
            factions: ["Mandalorian_Clans"],
            attack: 3,
            agility: 3,
            hull: 4,
            shields: 0,
            chassis: "Concordia Faceoff",
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "R-> Focus",
                "Boost",
                "R-> Focus",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 0, 0, 0, 2, 0, 0, 0, 0, 0 ],
                [ 1, 1, 1, 1, 1, 0, 0, 0, 3, 3 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    
            name: "Lancer-Class Pursuit Craft",
            factions: ["Black_Sun", "Crime_Syndicates"],
            base: "Large",
            attack: 3,
            attackt: 2,
            agility: 2,
            hull: 8,
            shields: 2,
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Rotate Arc",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 2, 2, 2, 0, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 1, 1, 1, 1, 1, 0],
                [ 0, 0, 1, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 3]
            ]
        },
        {
      
     
            name: "Quadrijet Transfer Spacetug",
            factions: ["Hutt_Cartel"],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            chassis: "Spacetug Tractor Array",
            actions: [
                "Focus",
                "R-Evade",
                "Barrel Roll",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 3, 0, 3 ],
                [ 2, 1, 1, 1, 2, 0, 3, 3, 0, 0, 0, 3, 0 ],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
     
 
            name: "UT-60D U-wing",
            factions: ["Rebel_Alliance", "Partisans"],
            base: "Medium",
            attack: 3,
            agility: 2,
            hull: 5,
            shields: 3,
            chassis: "Pivot Wing",
            actions: [
                "Focus",
                "Lock",
                "R-Coordinate"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0 ],
                [ 0, 1, 1, 1, 0 ],
                [ 2, 1, 1, 1, 2 ]
                [ 0, 2, 2, 2, 0 ],
                [ 0, 0, 2, 0, 0 ]
            ]
        },
        {
           
    
            name: "TIE/sk Striker",
            factions: ["ISB"],
            attack: 3,
            agility: 2,
            hull: 4,
            shields: 0,
            keyword: ["TIE"],
            chassis: "Adaptive Ailerons",
            actions: [
                "Focus",
                "Evade",
                "Barrel Roll",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 3, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 3, 3 ],
                [ 0, 2, 1, 2, 0, 0, 0, 0 ]
            ]
        },
        {
    

            name: "Auzituck Gunship",
            factions: ["Partisans"],
            attackf: 3,
            agility: 1,
            hull: 6,
            shields: 2,
            actions: [
                "Focus",
                "R-Barrel Roll",
                "Reinforce",
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    

            name: "Scurrg H-6 Bomber",
            factions: ["Pirates_and_Smugglers"],
            attack: 3,
            agility: 1,
            hull: 6,
            shields: 4,
            base: "Medium",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 3, 2, 2, 2, 3, 0, 0, 0, 3, 3 ],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
  
 
            name: "TIE/ag Aggressor",
            factions: ["ISB"],
            attack: 2,
            agility: 2,
            hull: 4,
            keyword: ["TIE"],
            shields: 1,
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "R-> Evade",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ]
            ]
        },
        {
     
   
            name: "Alpha-Class Star Wing",
            factions: ["ISB"],
            attack: 2,
            agility: 2,
            hull: 4,
            shields: 3,
            chassis: "???",
            actions: [
                "Focus",
                "Lock",
                "Slam",
                "Reload",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 2, 1, 2, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0 ],
                [ 2, 2, 2, 2, 2, 0, 0, 0 ],
                [ 0, 0, 3, 0, 0, 0, 0, 0 ]
            ]
        },
        {

            name: "M12-L Kimogila Fighter",
            factions: ["Hutt_Cartel"],
            attack: 3,
            agility: 1,
            hull: 7,
            shields: 2,
            base: "Medium",
            chassis: "Dead to Rights",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "Reload",
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 3, 2, 1, 2, 3, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 0, 0, 0, 0, 0, 3]
            ]
        },
        {
 
            name: "Sheathipede-Class Shuttle",
            factions: ["Phoenix_Cell", "C.I.S"],
            attack: 2,
            attackb: 2,
            agility: 2,
            hull: 4,
            shields: 1,
            chassis: "Comms Shuttle",
            actions: [
                "Focus",
                "Coordinate"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 2, 1, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
    

            name: "TIE Reaper",
            factions: ["ISB"],
            attack: 3,
            agility: 1,
            hull: 6,
            shields: 2,
            base: "Medium",
            keyword: ["TIE"],
            chassis: "Controlled Ailerons",
            actions: [
                "Focus",
                "Evade",
                "Jam",
              "R-Coordinate"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0 ],
                [ 3, 1, 1, 1, 3, 0, 3, 3 ],
                [ 3, 2, 1, 2, 3, 0, 0, 0 ],
                [ 0, 2, 1, 2, 0, 0, 0, 0 ]
            ]
        },
        {
     
  
            name: "Escape Craft",
            factions: ["Pirates_and_Smugglers"],
            attack: 1,
            agility: 2,
            hull: 2,
            shields: 2,
            chassis: "Co-Pilot",
            actions: [
                "Focus",
                "Barrel Roll",
                "R-Coordinate"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0, 0, 0 ],
                [ 3, 2, 1, 2, 3, 0, 0, 0 ],
                [ 0, 2, 2, 2, 0, 3, 0, 0 ]
            ]
        },
        {
  

            name: "T-70 X-wing",
            factions: [ "Resistance", "Colossus"],
            attack: 3,
            agility: 2,
            hull: 4,
            shields: 3,
            chassis: "Integrated S-Foils",
            actions: [
                "Focus",
                "Lock",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0]
            ]
        },
        {
           

            name: "RZ-2 A-wing",
            factions: ["Resistance", "New_Republic"],
            attackt: 2,
            agility: 3,
            hull: 2,
            shields: 2,
            chassis: "Refined Gyrostabilizers",
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 3, 3],
                [ 0, 0, 1, 0, 0, 0, 0, 0],
                [ 0, 0, 1, 0, 0, 3, 0, 0]
            ]
        },
        {
      

            name: "TIE/fo Fighter",
            factions: ["First_Order", "Shadow_Specialists"],
            attack: 2,
            agility: 3,
            hull: 3,
            keyword: ["TIE"],
            shields: 1,
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 0, 3, 3],
                [ 2, 2, 1, 2, 2, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 3, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0]
            ]
        },
        {
    

            name: "TIE/vn Silencer",
            factions: ["First_Order"],
            attack: 3,
            agility: 3,
            hull: 4,
            shields: 2,
            keyword: ["TIE"],
            chassis: "Autothrusters",
            actions: [
                "Focus",
                "Boost",
                "Lock",
                "Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0, 0, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 3, 3],
                [ 0, 0, 1, 0, 0, 3, 0, 0, 0, 0],
                [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
     
            name: "TIE/sf Fighter",
            factions: ["First_Order"],
            attack: 2,
            attackt: 2,
            agility: 2,
            hull: 3,
            shields: 3,
            keyword: ["TIE"],
            chassis: "Heavy Weapon Turret",
            actions: [
                "Focus",
                "> Rotate Arc",
                "Evade",
                "> Rotate Arc",
                "Lock",
                "> Rotate Arc",
                "Barrel Roll",
                "> Rotate Arc"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 3, 3, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
     
 
            name: "Upsilon-Class Command Shuttle",
            factions: ["First_Order"],
            attack: 4,
            agility: 1,
            hull: 6,
            shields: 6,
            chassis: "???",
            actions: [
                "Focus",
                "Lock",
                "Reinforce",
                "Coordinate",
                "Jam"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 2, 1, 2, 3, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 3, 2, 2, 2, 3, 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            base: "Large"
        },
        {
    
   
            name: "MG-100 StarFortress",
            factions: ["Resistance"],
            attack: 3,
            attackt: 2,
            agility: 1,
            hull: 9,
            shields: 3,
            actions: [
                "Focus",
                "Lock",
                "Rotate Arc",
                "Reload"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0],
                [ 0, 3, 2, 3, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            base: "Large"
        },
        {
      
 
            name: "Modified TIE/ln Fighter",
            factions: ["Crime_Syndicates"],
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 0,
            chassis: "Notched Stabilizers",
            keyword: ["TIE"],
            actions: [
                "Focus",
                "Barrel Roll",
                "Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 3],
                [ 0, 0, 2, 0, 0, 0],
                [ 0, 0, 3, 0, 0, 0]
            ]
        },
        {
       

            name: "V-19 Torrent Starfighter",
            factions: ["Galactic_Senate"],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 3, 3],
                [ 0, 3, 1, 3, 0, 3, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {

            name: "Delta-7 Aethersprite",
            factions: ["Jedi_Order"],
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 1,
            chassis: "Fine-Tuned Controls",
            actions: [
                "Focus",
                "F-Evade",
                "Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 0, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 3, 3, 0, 0],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0]
            ],
            autoequip: [
                "Calibrated Laser Targeting"
            ]
        },
        {
      
    
            name: "Delta-7b Aethersprite",
            factions: ["Jedi_Order"],
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 3,
            chassis: "Fine-Tuned Controls",
            actions: [
                "Focus",
                "F-Evade",
                "Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 0, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 3, 3, 0, 0],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0]
            ]
        },
        {
    
            name: "Sith Infiltrator",
            factions: ["Agents_of_Chaos"],
            attack: 3,
            agility: 1,
            hull: 6,
            base: "Large",
            shields: 4,
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 3, 3, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 3, 0, 0, 0, 0]
            ]
        },
        {
     
  
            name: "Vulture-class Droid Fighter",
            factions: ["C.I.S", "Agents_of_Chaos"],
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 0,
            chassis: "Grappling Struts",
            actions: [
                "Calculate",
                "Lock",
                "Barrel Roll",
                "R-> Calculate"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 3, 0, 0, 0, 0],
                [ 1, 2, 1, 2, 1, 0, 0, 0, 3, 3],
                [ 2, 3, 1, 3, 2, 0, 0, 0, 0, 0],
                [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
            
 
            name: "Belbullab-22 Starfighter",
            factions: ["C.I.S"],
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 2,
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "R-> Focus",
                "Boost",
                "R-> Focus"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 2, 0, 2, 2, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 3, 2, 1, 2, 3, 0, 3, 3, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
      
 
            name: "Naboo Royal N-1 Starfighter",
            factions: ["Galactic_Senate", "Mandalorian_Clans"],
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 2,
            chassis: "Full Throttle",
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {

            name: "Hyena-class Droid Bomber",
            factions: ["C.I.S"],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            chassis: "Landing Struts",
            actions: [
                "Calculate",
                "Lock",
                "Barrel Roll",
                "R-> Lock",
                "R-Reload"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 3, 2, 3, 2, 0, 0, 0, 0, 0],
                [ 1, 2, 1, 2, 1, 3, 0, 0, 3, 3],
                [ 2, 0, 1, 0, 2, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
 
            name: "Resistance Transport Pod",
            factions: ["Resistance"],
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 1,
            chassis: "Co-Pilot",
            actions: [
                "Focus",
                "R-Lock",
                "R-Barrel Roll",
                "R-Jam"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 3, 1, 1, 1, 3, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0],
                [ 0, 3, 2, 3, 0, 3, 0, 0, 0, 0],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0]
            ]
        },
        {
     
 
            name: "Resistance Transport",
            factions: ["Resistance"],
            attack: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            chassis: "Docking Ship",
            actions: [
                "Focus",
                "Lock",
                "R-Coordinate",
                "R-Jam"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 3 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    
            name: "Nantex-Class Starfighter",
            factions: ["Agents_of_Chaos"],
            attackbull: 3,
            attackt: 2,
            agility: 3,
            hull: 4,
            shields: 0,
            chassis: "Pinpoint Tractor Array",
            actions: [
                "Focus",
                "Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 0, 1, 2, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 3, 0, 0]
            ]
        },
        {
    
  
            name: "BTL-B Y-wing",
            factions: ["Jedi_Order"],
            attack: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            chassis: "Plated Hull",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "R-Reload"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 3, 2, 2, 2, 3, 0],
                [ 0, 0, 3, 0, 0, 3],
                [ 0, 0, 0, 0, 0, 0]
            ]
        },
        {

            name: "Fireball",
            factions: ["Colossus"],
            attack: 2,
            agility: 2,
            hull: 6,
            shields: 0,
            chassis: "Explosion with Wings",
            actions: [
                "Focus",
                "Evade",
                "Barrel Roll",
                "Slam"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 3, 2, 2, 2, 3, 0, 0, 0, 3, 3 ],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {

            name: "TIE/ba Interceptor",
            factions: ["Shadow_Specialists"],
            attack: 3,
            agility: 3,
            hull: 2,
            shields: 2,
            keyword: ["TIE"],
            chassis: "Fine-Tuned Thrusters",
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 1, 1, 0, 1, 1, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 3, 3, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ]
            ]
        },
        {

            name: "Xi-class Light Shuttle",
            factions: ["Shadow_Specialists"],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 2,
            base: "Medium",
            actions: [
                "Focus",
                "R-Lock",
                "R-Coordinate",
                "Jam"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0 ],
                [ 3, 2, 2, 2, 3, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {

            name: "HMP Droid Gunship",
            factions: ["C.I.S"],
            attackf: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            chassis: "Repulsorlift Stabilizers",
            actions: [
                "Calculate",
                "Lock",
                "R-Barrel Roll",
                "Reload",
                "R-> Calculate"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 3, 1, 3, 0, 0, 0, 0, 0, 0 ],
                [ 1, 2, 1, 2, 1, 0, 0, 0, 0, 0 ],
                [ 2, 3, 2, 3, 2, 0, 0, 0, 0, 0 ],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {

            name: "LAAT/i Gunship",
            factions: ["Jedi_Order"],
            agility: 1,
            hull: 8,
            shields: 2,
            base: "Medium",
            chassis: "Fire Convergence",
            actions: [
                "Focus",
                "Lock",
                "Rotate Arc",
                "R-Reinforce",
                "Reload"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 2, 1, 2, 0, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 3, 2, 2, 2, 3, 0, 0, 0, 0, 0 ],
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {

            name: "TIE/rb Heavy",
            factions: ["Imperial_Academy"],
            attackt: 2,
            agility: 1,
            hull: 8,
            shields: 0,
            base: "Medium",
            keyword: ["TIE"],
            chassis: "Rotating Canons",
            actions: [
                "Focus",
                "Reinforce",
                "Lock",
                "R-Barrel Roll",
                "Rotate Arc",
                "R-> Calculate"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 3, 2, 1, 2, 3, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0 ],
                [ 3, 2, 2, 2, 3, 0, 0, 0, 3, 3 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
     
            name: "Droid Tri-fighter",
            factions: ["C.I.S"],
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 0,
            chassis: "Networked Calculations",
            actions: [
                "Calculate",
                "Evade",
                "Lock",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Calculate"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 0, 0, 0, 2, 0, 0, 0, 3, 3 ],
                [ 1, 2, 1, 2, 1, 0, 0, 0, 0, 0 ],
                [ 1, 2, 1, 2, 1, 3, 0, 0, 0, 0 ],
                [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ]
            ]
        },
        {
      
      
            name: "Nimbus-class V-wing",
            factions: ["Galactic_Senate"],
            attack: 2,
            agility: 3,
            hull: 2,
            shields: 2,
            keyword: ["TIE"],
            chassis: "Twin Ion Engines",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "Boost",
                "R-> Lock"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 3, 0, 3, 2, 0, 0, 0, 0, 0 ],
                [ 1, 1, 1, 1, 1, 3, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
     
            name: "Eta-2 Actis",
            factions: ["Jedi_Order"],
            attackbull: 3,
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 0,
            chassis: "Intuitive Controls",
            actions: [
                "Focus",
                "Evade",
                "F-Lock",
                "Barrel Roll",
                "Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 0, 0, 0, 2, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 4, 4 ]
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0 ],
                [ 0, 0, 1, 0, 0, 3, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    
            name: "Syliure-class Hyperspace Ring",
            factions: ["Jedi_Order"],
            agility: 1,
            hull: 1,
            shields: 2,
            actions: [
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
     
            name: "BTA-NR2 Y-wing",
            factions: ["Resistance"],
            attack: 2,
            agility: 1,
            hull: 4,
            shields: 3,
            chassis: "Intuitive Interface",
            actions: [
                "Focus",
                "R-Lock",
                "R-Barrel Roll",
                "R-Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 1, 1, 1, 0, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 3, 2, 1, 2, 3, 0],
                [ 0, 0, 3, 0, 0, 0],
                [ 0, 0, 0, 0, 0, 3]
            ]
        },
        {
     
 
            name: "TIE/wi Whisper Modified Interceptor",
            factions: ["Shadow_Specialists"],
            attackbull: 3,
            attackt: 2,
            agility: 2,
            hull: 3,
            shields: 2,
            keyword: ["TIE"],
            chassis: "Heavy Weapon Turret",
            actions: [
                "Focus",
                "> Rotate Arc",
                "Evade",
                "Lock",
                "Barrel Roll",
                "> Rotate Arc",
                "Boost",
                "> Rotate Arc"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 0, 0, 0, 2, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 3, 3, 0, 0 ],
                [ 0, 0, 1, 0, 0, 3, 0, 0, 0, 0 ],
                [ 0, 0, 1, 0, 0, 3, 0, 0, 0, 0 ]
            ]
        },
        {
 
            name: "TIE/se Bomber",
            factions: ["First_Order"],
            attack: 2,
            agility: 2,
            hull: 4,
            shields: 2,
            keyword: ["TIE"],
            chassis: "Pursuit Thrusters",
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "R-> Lock",
                "R-Boost",
                "Reload",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 3, 2, 1, 2, 3, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 3, 3, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    
    
            name: "Gauntlet Fighter",
            factions: ["Mandalorian_Clans"],
            attack: 3,
            attackb: 2,
            agility: 2,
            hull: 9,
            shields: 2,
            base: "Large",
            chassis: "Troop Bay , Swivel Wing" ,
            actions: [
                "Focus",
                "R-Reinforce",
                "Lock",
                "R-Coordinate"
            ],
          
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 1, 0, 1, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0 ],
                [ 3, 2, 2, 2, 3, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
    
            name: "ST-70 Assault Ship",
            factions: ["Bounty_Hunters_Guild", "Mandalorian_Clans"],
            attack: 3,
            agility: 2,
            hull: 7,
            shields: 2,
            base: "Medium",
            chassis: "Hidden Devices",
            actions: [
                "Focus",
                "Evade",
                "Lock",
                "R-Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 3, 2, 1, 2, 3, 0, 0, 0, 0, 0 ],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 3, 3 ],
                [ 3, 2, 1, 2, 3, 0, 0, 0, 0, 0 ],
                [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 3, 0, 0, 0, 0 ]
            ]
        },
        {
  
            name: "Clone Z-95 Headhunter",
            factions: [ "Galactic_Senate" ],
            attack: 2,
            agility: 2,
            hull: 2,
            shields: 2,
            chassis: "Versatile Frame",
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 3],
                [ 0, 0, 2, 0, 0, 3]
            ]
        },
        {

            name: "Rogue-class Starfighter",
            factions: [ "Bounty_Hunters_Guild", "Agents_of_Chaos" ],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 2,
            chassis: "Dead to Rights",
            actions: [
                "Focus",
                "R-> Boost",
                "Focus",
                "R-> Barrel Roll",
                "Evade",
                "R-> Barrel Roll",
                "Lock",
                "R-Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 0, 1, 2, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 3, 3 ],
                [ 3, 2, 1, 2, 3, 0, 0, 0, 0, 0 ],
                [ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0 ]
            ]
        },
        {

   
            name: "Commando Team",
            factions: [ "Mandalorian_Clans", "Imperial_Remnants" ],
            sattack: 2,
            srange: [1,2],
            agility: 2,
            hull: 2,
            shields: 0,
            chassis: "Boarding, Multiple Targets",
            actions: [
                "Focus",
                "Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 2, 1, 1, 1, 2, 2, 0, 0, 0, 0, 2, 2, 2 ],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        }
    ];
      
const pilots = [ //ne pas metre de parenthèses ( ou ) dans les noms de pilotes car elles sont utilisées pour les cout dans les menus pilote

//################################################################""REBEL_ALLIANCE    
        
        {
            name: "Red Squadron Veteran",
            id: 0,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            skill: 3,
            points: 6,
            loadout: 5,
            slots: [
                "Torpedo",
                "Astromech",
                "Modification"
            ]
        },
        {
            name: "Luke Skywalker",
            id: 1,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            skill: 5,
            points: 9,
            loadout: 10,
            force: 2,
            ability: "Après être devenu le défenseur (avant que les dés ne soient lancés), vous pouvez récupérer 1 #fo# .",
            slots: [
                "Talent",
                "Force",
                "Torpedo",
                "Astromech",
                "Modification"
            ]
        },
        
        {
            name: "Wedge Antilles",
            id: 2,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            skill: 6,
            points: 8,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, le défenseur lance 1 dé de défense en moins.",
            slots: [
                "Talent",
                "Talent",
                "Torpedo",
                "Astromech",
                "Modification"
            ]
        },
       
        {
            name: "Biggs Darklighter",
            id: 3,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Tant qu’un autre vaisseau allié à portée 0–1 défend, avant l’étape « Neutraliser les résultats », si vous êtes dans l’arc de l’attaque, vous pouvez subir 1 dégât #hit# ou #crit# pour annuler 1 dégât correspondant.",
            slots: [
                "Talent",
                "Torpedo",
                "Astromech",
                "Modification"
            ]
        },
        {
            name: "Wes Janson",
            id: 4,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 5,
            loadout: 15,
            ability: "Après avoir effectué une attaque, vous pouvez dépenser 1 #ch# pour assigner au défenseur 1 marqueur de brouillage. Après avoir défendu, vous pouvez dépenser 1 #ch# pour assigner à l'attaquant 1 marqueur de brouillage.",
            slots: [
                "Talent",
                "Talent",
                "Torpedo",
                "Astromech",
                "Modification"
            ]
        },
{
            name: "Norra Wexley",
            id: 5,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez, si un vaisseau ennemi est à portée 0–1, ajoutez 1 résultat #evd# à vos résultats de dés.",
            slots: [
                "Talent",
                "Talent",
                "Torpedo",
                "Payload",
                "Turret",
                "Astromech",
                "Modification"
            ]
        },
{
            name: "Horton Salm",
            id: 6,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, vous pouvez relancer 1 dé d’attaque pour chaque autre vaisseau allié à portée 0–1 du défenseur.",
            slots: [
                "Talent",
                "Talent",
                "Torpedo",
                "Payload",
                "Turret",
                "Astromech",
                "Modification"
            ]
        },
        {
            name: '"Dutch" Vander',
            id: 7,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué l’action #TL#, vous pouvez choisir 1 vaisseau allié à portée 1–3. Ce vaisseau allié peut verrouiller l’objet que vous avez verrouillé, en ignorant les restrictions de portée",
            slots: [
                "Talent",
                "Torpedo",
                "Payload",
                "Turret",
                "Astromech",
                "Modification"
            ]
        },
        {
            name: "Evaan Verlaine",
            id: 8,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez dépenser 1 marqueur de concentration pour choisir un vaisseau allié à portée 0–1. Dans ce cas, ce vaisseau allié lance 1 dé de défense supplémentaire tant qu’il défend, jusqu’à la fin du round.",
            slots: [
                "Talent",
                "Torpedo",
                "Payload",
                "Turret",
                "Astromech",
                "Modification",
            ]
        },
        {
            name: "Gold Squadron Veteran",
            id: 9,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            skill: 3,
            points: 5,
            loadout: 5,
            slots: [
                "Torpedo",
                "Payload",
                "Turret",
                "Astromech",
                "Modification"
            ]
        },
{
            name: "Bodhi Rook",
            id: 10,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Les vaisseaux alliés peuvent verrouiller des objets à portée 0–3 de n’importe quel vaisseau allié.",
            slots: [
                "Talent",
                "Sensor",
                "Crew",
                "Crew",
                "Modification"
            ]
        },
        {
            name: "Cassian Andor",
            id: 11,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’activation, vous pouvez choisir 1 vaisseau allié à portée 1–3. Dans ce cas, ce vaisseau allié retire 1 marqueur de stress.",
            slots: [
                "Talent",
                "Talent",
                "Sensor",
                "Crew",
                "Crew",
                "Modification"
            ]
        },
        {
            name: "Heff Tobber",
            id: 12,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            skill: 2,
            points: 7,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a exécuté une manœuvre, s’il est à portée 0, vous pouvez effectuer une action.",
            slots: [
                "Talent",
                "Sensor",
                "Crew",
                "Crew",
                "Modification"
            ]
        },
{
            name: "K-2SO",
            id: 13,
            faction: "Rebel_Alliance",
            unique: true,
            skill: 3,
            ship: "UT-60D U-wing",
            points: 7,
            loadout: 10,
            ability: "Après avoir gagné un marqueur de stress, gagnez 1 marqueur de calcul.",
            slots: [
                "Sensor",
                "Crew",
                "Crew",
                "Modification"
            ]
        },
        {
            name: "Jan Ors",
            id: 14,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            skill: 5,
            points: 7,
            loadout: 15,
            title: "Moldy Crow",
            ability: "Tant qu’un vaisseau allié situé dans votre arc de tir effectue une attaque principale, si vous n’êtes pas stressé, vous pouvez gagner 1 marqueur de stress. Dans ce cas, ce vaisseau peut lancer 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "Crew",
                "Payload",
                "Turret",
                "Canon",
                "Illicit",
                "Modification",
                "Calculator"
            ]
        },
        {
            name: "Roark Garnet",
            id: 15,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau situé dans votre arc de tir. Dans ce cas, pendant cette phase, il s’engage à l’initiative 7 au lieu de le faire à sa valeur d’initiative standard.",
            slots: [
                "Talent",
                "Talent",
                "Crew",
                "Payload",
                "Turret",
                "Illicit",
                "Modification",
                "Modification",
                "Calculator"
            ]
        },
        {
            name: "Kyle Katarn",
            id: 16,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            skill: 3,
            points: 6,
            loadout: 15,
            title: "Moldy Crow",
            ability: "Au début de la phase d’engagement, vous pouvez transférer 1 de vos marqueurs de concentration à un vaisseau allié situé dans votre arc de tir.",
            slots: [
                "Talent",
                "Crew",
                "Payload",
                "Turret",
                "Canon",
                "Illicit",
                "Modification",
                "Calculator"
            ]
        },
        {
            name: "Palob Godalhi",
            id: 17,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            skill: 3,
            points: 8,
            loadout: 15,
            title: "Moldy Crow",
            ability: "Au début de la phase d’engagement, vous pouvez transférer un marqueur de stress de votre vaisseau vers un vaisseau allié dans votre arc de tir. Lorsque vous retirez un marqueur de stress de votre vaisseau, vous pouvez effectuer une action.",
            slots: [
                "Talent",
                "Crew",
                "Payload",
                "Turret",
                "Canon",
                "Illicit",
                "Modification",
                "Calculator"
            ]
        },
        {
            name: "Jake Farrell",
            id: 18,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué une action #BR# ou #BO#, vous pouvez choisir un vaisseau allié à portée 0–1. Ce vaisseau peut effectuer une action #FS# .",
            slots: [
                "Talent",
                "Talent",
                "Missile",
                "Modification"
            ]
        },
        {
            name: "Arvel Crynyd",
            id: 19,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Vous pouvez effectuer des attaques principales à portée 0. Si vous deviez échouer une action #BO# qui vous amènerait à chevaucher un autre vaisseau, résolvez-la comme si vous exécutiez partiellement une manœuvre à la place.",
            slots: [
                "Talent",
                "Talent",
                "Missile",
                "Modification"
            ]
        },
 {
            name: "Tycho Celchu",
            id: 20,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez exécuter des actions, même si vous êtes stressé.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Missile",
                "Modification"
                
            ]
        },
        {
            name: "Gemmer Sojan",
            id: 21,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Tant que vous êtes à portée 1 d’un vaisseau ennemi, augmentez votre agilité de 1.",
            slots: [
                "Talent",
                "Talent",
                "Missile",
                "Modification"
                
            ]
        },
        {
            name: "Green Squadron Pilot",
            id: 22,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            skill: 3,
            points: 5,
            loadout: 5,
            slots: [
                "Talent",
                "Missile",
                "Modification"
            ]
        },
        {
            name: "Braylen Stramm",
            id: 23,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez relancer jusqu’à 2 de vos dés.",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Torpedo",
                "Gunner",
                "Payload",
                "Modification"
                
            ]
        },
        {
            name: "Ten Numb",
            id: 24,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de stress pour changer tous vos résultats #eye# en résultats #hit# ou #evd# .",
            slots: [
                "Talent",
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Torpedo",
                "Gunner",
                "Payload",
                "Modification"
            ]
        },
{
            name: "Netrem Pollard",
            id: 25,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Après avoir effectué un tonneau, vous pouvez choisir 1 vaisseau allié qui n’est pas stressé à portée 0–1. Ce vaisseau gagne 1 marqueur de stress, puis vous pouvez pivoter à 180°.",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Torpedo",
                "Gunner",
                "Payload",
                "Modification"
            ]
        },
{
            name: "Gina Moonsong",
            id: 26,
            faction: "Rebel_Alliance",
            unique: true,
            skill: 5,
            ship: "A/SF-01 B-wing",
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous devez transférer 1 de vos marqueurs de stress à un autre vaisseau allié à portée 0–2.", 
            slots: [
                "Talent",
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Torpedo",
                "Gunner",
                "Payload",
                "Modification"
            ]
        },
 {
            name: "Blue Squadron Pilot",
            id: 27,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            skill: 2,
            points: 7,
            loadout: 5,
            lots: [
                
                "Sensor",
                "Canon",
                "Canon",
                "Torpedo",
                "Gunner",
                "Payload",
                "Modification"
            ]
        },
        {
            name: "Shara Bey",
            id: 28,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "ARC-170 Starfighter",
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque principale, vous pouvez dépenser 1 marqueur de verrouillage que vous avez sur le vaisseau ennemi pour ajouter 1 résultat #eye# aux résultats de vos dés.",
            slots: [
                "Talent",
                "Talent",
                "Crew",
                "Gunner",
                "Astromech",
                "Modification"
            ]
        },
        {
            name: "Garven Dreis",
            id: 29,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "ARC-170 Starfighter",
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Après avoir dépensé un marqueur de concentration, vous pouvez choisir 1 vaisseau allié à portée 1–3. Ce vaisseau allié gagne 1 marqueur de concentration.",
            slots: [
                "Talent",
                "Crew",
                "Gunner",
                "Astromech",
                "Modification"
            ]
        },

//############################################################# IMPERIAL_Academy

       {
            name: "Captain Kagi",
            id: 30,
            unique: true,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 ou plusieurs vaisseaux alliés à portée 0–3. Dans ce cas, transférez tous les marqueurs de verrouillage ennemis des vaisseaux choisis vers vous.", 
            slots: [                
                "Talent",
                "Sensor",
                "Canon",
                "Crew",
                "Crew",
                "Gunner",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Lieutenant Sai",
            id: 31,
            unique: true,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué une action #CO#, si le vaisseau que vous avez choisi effectue une action de votre barre d’action, vous pouvez effectuer cette action.",
            slots: [
                "Sensor",
                "Canon",
                "Crew",
                "Crew",
                "Gunner",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Colonel Jendon",
            id: 32,
            unique: true,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            skill: 3,
            charge: 2,
            points: 7,
            loadout: 10,
            ability: "Au début de la phase d’activation, vous pouvez dépenser 1 #ch#. Dans ce cas, lorsqu’un vaisseau allié verrouille une cible à ce round, il doit le faire au-delà de la portée 3 à la place de la portée 0–3.",
            slots: [
                "Sensor",
                "Canon",
                "Crew",
                "Crew",
                "Gunner",
                "Modification",
                "Modification"
            ]
        }, 
        {
            name: "Darth Vader",
            id: 33,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            skill: 6,
            points: 10,
            loadout: 10,
            force: 3,
            ability: "Tant que vous effectuez une attaque, vous pouvez dépenser 1 #fo# pour changer 1 résultat vierge en un résultat #hit#.",
            slots: [
                "Force",
                "Force",
                "Talent",
                "Tech",
                "Sensor",
                "Missile",
                "Modification"
            ]
        },
        {
            name: "Maarek Stele",
            id: 34,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, si une carte de dégât devrait être attribuée face visible au défenseur, piochez 3 cartes de dégât à la place, choisissez-en 1, et défaussez les autres.",
            slots: [
                "Talent",
                "Sensor",
                "Missile",
                "Tech",
                "Modification"
            ]
        },
        {
            name: "Zertik Strom",
            id: 35,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Pendant la phase de dénouement, vous pouvez dépenser un marqueur de verrouillage que vous avez sur un vaisseau ennemi pour exposer 1 carte de dégât de ce dernier.",
            slots: [
                "Talent",
                "Sensor",
                "Missile",
                "Tech",
                "Modification"
            ]
        },
        {
            name: "Juno Eclipse",
            id: 36,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Tant que vous exécutez une manœuvre, vous pouvez exécuter une manœuvre de même direction et de même difficulté mais avec une vitesse supérieure ou inférieure de 1 à la place.",
            slots: [
                "Talent",
                "Sensor",
                "Missile",
                "Tech",
                "Modification"
            ]
        },
        {
            name: "Alpha Squadron Pilot",
            id: 37,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            skill: 1,
            points: 5,
            loadout: 5,
            slots: [
                "Talent",
                "Modification"
            ]
        },
        {
            name: "Lieutenant Lorrir",
            id: 38,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez un tonneau, vous devez utiliser le gabarit #Lbank# ou #Rbank# à la place du gabarit #straight#.",
            slots: [
                "Talent",
                "Modification"
            ]
        },
 {
            name: "Nash Windrider",
            id: 39,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            skill: 2,
            charge: 1,
            recurring: 1,
            points: 6,
            loadout: 10,
            ability: "Pendant la phase d’engagement, après qu’un petit vaisseau allié à portée 0–3 a été détruit, s’il ne s’était pas déjà engagé à cette phase, vous pouvez dépenser 1 #ch#. Dans ce cas, il s’engage à l’initiative actuelle.",
            slots: [
                "Talent",
                "Modification"
            ]
        },
{
            name: "Vult Skerris",
            id: 40,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, et s’il y a un vaisseau allié à portée 1 du vaisseau ennemi attaquant ou défendant, vous pouvez dépenser 1 #ch#. Dans ce cas, vous pouvez dépenser 1 marqueur vert appartenant à ce vaisseau allié.",
            slots: [
                "Talent",
                "Talent",
                "Modification"
            ]
        },
 {
            name: "Commandant Goran",
            id: 41,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Au début de la Phase d'Engagement, choisissez un vaisseau allié à portée 0–3 avec une initiative plus faible que la vôtre. Le vaisseau choisi gagne 1 marqueur d'évasion et retire 1 marqueur rouge non-stress.",
            slots: [
                "Talent",
                "Talent",
                "Modification"
            ]
        },
         {
            name: "Captain Jonus",
            id: 42,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–1 effectue une attaque spéciale, il peut relancer jusqu’à 2 dés d’attaque.",
            slots: [
                "Talent",
                "Torpedo",
                "Missile",
                "Payload",
                "Gunner",
                "Modification"
            ]
        },
        {
            name: "Major Rhymer",
            id: 43,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque spéciale, vous pouvez augmenter ou réduire de 1 le prérequis de portée, dans une limite de 0–3.",
            slots: [
                "Talent",
                "Torpedo",
                "Missile",
                "Payload",
                "Gunner",
                "Modification"
            ]
        },
        {
            name: "Tomax Bren",
            id: 44,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Après avoir effectué une action de rechargement, vous pouvez récupérer 1 charge d’une de vos cartes améliorations.",
            slots: [
                "Talent",
                "Talent",
                "Torpedo",
                "Missile",
                "Payload",
                "Gunner",
                "Modification"
            ]
        },
        {
            name: '"Deathfire"',
            id: 45,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Après avoir entièrement exécuté une manœuvre à vitesse 3-5, si vous n'avez pas largué ou lancé d'engin à ce round, vous pouvez dépenser 2#ch# pour larguer ou lancer une bombe en utilisant le gabarit 3#straight#.",
            slots: [
                "Talent",
                "Torpedo",
                "Missile",
                "Payload",
                "Gunner",
                "Modification"
            ]
        },
        {
            name: "Scimitar Squadron Pilot",
            id: 46,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            skill: 2,
            points: 5,
            loadout: 5,
            slots: [
                "Torpedo",
                "Missile",
                "Payload",
                "Gunner",
                "Modification"
            ]
        },
        {
            name: '"Howlrunner"',
            id: 47,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            skill: 5,
            points: 5,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–1 effectue une attaque principale, il peut relancer 1 dé d’attaque.",
            slots: [
                "Talent",
                "Talent",
                "Modification"
            ]
        },
{
            name: '"Mauler" Mithel',
            id: 48,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            skill: 5,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, si un allié Dark Vador ou 'Backstabber' est dans votre arc #Larc# ou #Rarc# à portée 0-1, lancez 1 dé d'attaque supplémentaire.",
            slots: [
                "Talent",
                "Modification"
            ]
        },
 {
            name: '"Backstabber"',
            unique: true,
            id: 49,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            skill: 5,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, si un allié Dark Vador ou 'Mauler' Mithel est dans votre arc #Larc# ou #Rarc# à portée 0-1, lancez 1 dé d'attaque supplémentaire.",
            upgrades: [
                "Talent",
                "Modification"
            ]
        },
 {
            name: '"Dark Curse"'  ,          
            unique: true,
            id: 50,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            skill: 6,
            points: 4,
            loadout: 10,
            ability: "Tant que vous défendez, les dés de l’attaquant ne peuvent pas être modifiés.",
            upgrades: [
                "Talent",
                "Modification"
            ]
        },
{
            name: "Academy Pilot",
            id: 51,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            skill: 1,
            points: 3,
            loadout: 0,
            slots: [
                "Modification"
            ]
        },
{
            name: "Carida Academy Cadet",
            id: 52,
            faction: "Imperial_Academy",
            skill: 1,
            ship: "TIE/rb Heavy",
            points: 5,
            loadout: 5,
            slots: [
                "Canon",
                "Canon",
                "Modification",
                "Calculator"
            ]
        },
        
        {
            name: "Lyttan Dree",
            id: 53,
            faction: "Imperial_Academy",
            skill: 3,
            unique: true,
            ship: "TIE/rb Heavy",
            points: 6,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–2 effectue une attaque, si vous êtes dans le #Larc# ou #Rarc# du défenseur, l’attaquant peut relancer 1 dé d’attaque.",
            slots: [
                "Talent",
                "Canon",
                "Canon",
                "Modification",
                "Calculator"
            ]
        },
        {
            name: '"Rampage"',
            id: 54,
            faction: "Imperial_Academy",
            skill: 4,
            unique: true,
            ship: "TIE/rb Heavy",
            points: 6,
            loadout: 10,
            ability: "Après avoir exécuté une manœuvre à vitesse 3–4, vous pouvez choisir un vaisseau situé dans votre #tur# à portée 0–1. Dans ce cas, ce vaisseau gagne 1 marqueur de contrainte, ou 2 marqueurs de contrainte si vous êtes endommagé.",
            slots: [
                "Talent",
                "Canon",
                "Canon",
                "Modification",
                "Calculator"
            ]
        },
 {
            name: "Flight Leader Ubbel",
            id: 55,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/rb Heavy",
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Après qu'un vaisseau allié à portée 0-2 a défendu, si une carte de dégât lui a été attribuée, vous pouvez effectuer une attaque bonus contre l'attaquant.",
            slots: [
                "Talent",
                "Talent",
                "Canon",
                "Canon",
                "Modification",
                "Calculator"
            ]
        },



//############################################################ MANDALORIAN_CLANS

 {
            name: "Fenn Rau",
            id: 56,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            skill: 6,
            points: 10,
            loadout: 10,
            ability: "Lorsque vous attaquez ou défendez, si l’attaque est à portée 1, vous pouvez lancer 1 dé supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Torpedo",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Old Teroch",
            id: 57,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            skill: 5,
            points: 9,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau ennemi à portée 1. Dans ce cas, et si vous êtes dans son #Farc# , il retire tous ses marqueurs verts. .",
            slots: [
                "Talent",
                "Talent",
                "Torpedo",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Kad Solus",
            id: 58,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Après avoir entièrement effectué une manœuvre rouge, gagnez 2 marqueurs de concentration.",
            slots: [
                "Talent",
                "Missile",
                "Modification",
                "Modification"
            ]
        },
        
        {
            name: "Skull Squadron Pilot",
            id: 59,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            skill: 4,
            points: 7,
            loadout: 5 ,
            slots: [
                "Torpedo",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Tor Phun",
            id: 60,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Après avoir effectué une attaque, si le défenseur a été détruit, vous pouvez effectuer une action, même stressé. Puis vous pouvez recevoir 2 marqueurs de stress pour effectuer une attaque bonus.",
            slots: [
                "Talent",
                "Torpedo",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Pre Vizsla",
            id: 61,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            skill: 3,
            points: 11,
            loadout: 10,
            charge: 2,
            recurring: 1,
            unique: true,
            ability: "Tant que vous effectuez une attaque, si l’initiative du défenseur est égale ou plus grande que la vôtre, vous pouvez dépenser 2#ch# pour lancer 1 dé supplémentaire.",
            slots: [
                "Talent",
                "Crew",
                "Gunner",
                "Payload",
                "Canon",
                "Modification"
            ]
        },
        {
            name: "Bo-Katan Kryze",
            id: 62,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            skill: 4,
            points: 11,
            loadout: 10,
            unique: true,
            ability: "Après avoir entièrement exécuté une manœuvre, vous pouvez gagner 1 marqueur d’épuisement pour choisir un objet dans votre #Farc# à portée 1-2. Dans ce cas, un autre vaisseau allié peut effectuer une action  #TL# pour verrouiller cet objet.",
            slots: [
                "Talent",
                "Crew",
                "Gunner",
                "Payload",
                "Canon",
                "Modification"
            ]
        },
        {
            name: "Tiber Saxon",
            id: 63,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            skill: 4,
            points: 11,
            loadout: 10,
            unique: true,
            ability: "Après avoir effectué une attaque qui a touché, si le défenseur n’a pas de carte de dégât face visible, il gagne un marquer de contrainte.",
            slots: [
                "Talent",
                "Crew",
                "Gunner",
                "Payload",
                "Canon",
                "Modification"
            ]
        },
        {
            name: "Ursa Wren",
            id: 64,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            skill: 3,
            points: 11,
            loadout: 10,
            unique: true,
            ability: "Lorsque vous recevez un marqueur rouge, vous pouvez dépenser un marqueur bleu pour le retirer.",
            slots: [
                "Talent",
                "Crew",
                "Gunner",
                "Payload",
                "Canon",
                "Modification"
            ]
        },
        {
            name: "Nite Owl Liberator",
            id: 65,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            skill: 2,
            points: 10,
            loadout: 5,
            unique: true,
            slots: [
                "Crew",
                "Gunner",
                "Payload",
                "Canon",
                "Modification"
            ]
        },
        {
            name: "Maul",
            id: 66,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            skill: 5,
            points: 12,
            loadout: 15,
            unique: true,
            force: 3,
            title: "Nightbrother",
            ability: "Lorsque vous effectuez une action #CO# , vous pouvez dépenser 1#fo# . Dans ce cas, considérez l’action comme blanche et vous pouvez coordonner 1 vaisseau allié supplémentaire ; chaque vaisseau allié que vous avez coordonné ainsi gagne 1 marqueur de contrainte.",
            funtion: "disponible uniquement si leader Maul",
            slots: [
                "Force",
                "Talent",
                "Crew",
                "Crew",
                "Gunner",
                "Payload",
                "Canon",
                "Modification"
            ]
        },
        {
            name: "Din Djarin",
            id: 67,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            skill: 5,
            points: 9,
            loadout: 15,
            title: "Razor Crest",
            unique: true,
            ability: "Lorsque vous défendez ou effectuez une attaque, si vous êtes dans le  #Farc#  à portée 1-2 de 2 vaisseaux ennemis ou plus, vous pouvez changer 1 de vos résultats vierges en résultat #eye#.",
            slots: [
                "Talent",
                "Talent",
                "Crew",
                "Tech",
                "Illicit",
                "Illicit",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "The Armorer",
            id: 68,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            skill: 3,
            points: 8,
            loadout: 10,
            unique: true,
            title: "Razor Crest",
            ability: "MISE EN PLACE : L’amélioration  #mod# que vous équipez est gratuite. Si elle possède 1 ou plusieurs charges, ajoutez en une supplémentaire.",
            slots: [
                
                "Talent",
                "Crew",
                "Tech",
                "Illicit",
                "Illicit",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Paz Vizsla",
            id: 69,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            skill: 3,
            points: 7,
            loadout: 15,
            unique: true,
            title: "Razor Crest",
            ability: "Lorsque vous attaquez vous pouvez dépenser 1#ch# sur l’une de vos cartes #ill#  pour lancer 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "Crew",
                "Tech",
                "Illicit",
                "Illicit",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Din Djarin",
            id: 70,
            faction: "Mandalorian_Clans",
             ship: "Naboo Royal N-1 Starfighter",
            skill: 5,
            points: 6,
            loadout: 15,
            unique: true,
            title: "Din Djarin's N1",
            ability: "Lorsque vous défendez ou effectuez une attaque, si vous êtes dans le  #Farc#  à portée 1-2 de 2 vaisseaux ennemis ou plus, vous pouvez changer 1 de vos résultats vierges en résultat #eye#.",
            slots: [
                "Talent",
                "Talent",
                "Tech",
                "Crew",
                "Illicit",
                "Sensor",
            ]
        },
        {
            name: "Grogu",
            id: 71,
            faction: "Mandalorian_Clans",
            ship: "Naboo Royal N-1 Starfighter",
            force: 2,
            skill: 0,
            points: 5,
            loadout: 15,
            unique: true,
            title: "Din Djarin's N1",
            ability: "Lorsqu’un vaisseau à portée 0-2 subit des dégâts, vous pouvez récupérer 1#fo#",
            slots: [
                "Force",
                "Tech",
                "Crew",
                "Illicit",
                "Sensor",
            ]
        },
        {
            name: "Sabine Wren",
            id: 72,
            faction: "Mandalorian_Clans",
             ship: "Naboo Royal N-1 Starfighter",
            skill: 3,
            points: 5,
            loadout: 10,
            unique: true,
            ability: "Avant de vous activer, vous pouvez effectuer une action #BR# ou #BO#",
            slots: [
                "Talent",
                "Torpedo",
                "Astromech",
                "Illicit",
                "Sensor"
            ]
        },
        {
            name: "R5-D4",
            id: 73,
            faction: "Mandalorian_Clans",
             ship: "Naboo Royal N-1 Starfighter",
            skill: 2,
            points: 4,
            loadout: 15,
            unique: true,
            title: "Din Djarin's N1",
            keyword: ["Droid"],
            ability: "Lorsqu’une attaque contre vous échoue, gagnez 1 marqueur de calcul.",
            slots: [
                "Tech",
                "Crew",
                "Illicit",
                "Sensor"

            ]
        },
        {
            name: "Bardan Jusik",
            id: 74,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            skill: 4,
            points: 12,
            loadout: 10,
            ability: "Après avoir effectué une attaque #can#, vous pouvez dépenser le marqueur bleu d’un vaisseau allié à portée 0-1 pour effectuer une attaque principale bonus.",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Modification",
                "Modification"
                
            ]
        },
        {
            name: "Spar",
            id: 75,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            skill: 3,
            points: 12,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque #can# , vous pouvez relancer un dé d’attaque.",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Modification",
                "Modification"
                
            ]
        },

        {
            name: "Fenn Shysa",
            id: 76,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            skill: 5,
            points: 13,
            loadout: 10,
            ability: "Après avoir effectué une manœuvre (même partiellement), vous pouvez recevoir un marqueur de contrainte. Dans ce cas, vous pouvez effectuer une action #BR# et passer votre phase « effectuer une action ».",
            slots: [
                "Talent",
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Modification",
                "Modification",
                
            ]
        },
        {
            name: "Tobi Dala",
            id: 77,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            skill: 2,
            points: 12,
            loadout: 10,
            ability: "Après avoir défendu contre un vaisseau dans votre #Farc# , vous pouvez dépenser 1 #ch#. Dans ce cas, vous pouvez verrouiller l’attaquant et effectuer une attaque bonus de #can# contre lui.",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                 "Canon",
                "Modification",
                "Modification"
                
            ]
        },
        {
            name: "Rook Rast",
            id: 78,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Commando Team",
            skill: 2,
            points: 2,
            loadout: 0,
            ability: "Lorsque vous attaquez un vaisseau stressé, lancez 1 dé supplémentaire.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Tristan Wren",
            id: 79,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Commando Team",
            skill: 1,
            points: 2,
            loadout: 0,
            ability: "Lorsqu’un vaisseau allié à portée 1-3 attaque un vaisseau à portée 0, ce vaisseau peut modifier jusqu’à 2 de ses résultats #hit# en résultats #crit# .",
            slots: [
                "Talent"
                
            ]
        },
        {
            name: "Axe Woves",
            id: 80,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Commando Team",
            skill: 1,
            points: 2,
            loadout: 0,
            ability: "Au début de la phase d’engagement, chaque autre vaisseau à portée 0 gagne un marqueur de stress.",
            slots: [
                "Talent"
                
            ]
        },
        {
            name: "Gar Saxon",
            id: 81,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Commando Team",
            skill: 4,
            points: 3,
            loadout: 5,
            ability: "Lorsqu’un vaisseau allié à portée 0-2 effectue une attaque principale, si l’attaquant est dans le #Farc# du défenseur, vous pouvez dépenser 1 #ch#. Dans ce cas, l’attaquant lance 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "Talent"
            ]
        },

//###############################################################PIRATES_AND_Smugglers

{
            name: "Dash Rendar",
            id: 82,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            skill: 5,
            points: 10,
            loadout: 15,
            title: "Outrider",
            ability: "Lorsque vous vous déplacez, ignorez les obstacles",
            slots: [
                "Talent",
                "Talent",
                "Crew",
                "Gunner",
                "Gunner",
                "Canon",
                "Canon",
                "Turret",
                "Illicit",
                "Modification"
            ]            
        },
        {
            name: '"Leebo"',
            id: 83,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            skill: 3,
            points: 8,
            loadout: 15,
            title: "Outrider",
            keyword: ["Droid"],
            ability: "Après avoir défendu ou attaqué, si vous avez dépensé un marqueur de calcul, recevez un marqueur de calcul.",
            slots: [
                "Talent",
                "Crew",
                "Gunner",
                "Gunner",
                "Canon",
                "Canon",
                "Turret",
                "Illicit",
                "Modification"
            ]
        },
        {
            name: "Wild Space Fringer",
            id: 84,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            skill: 1,
            points: 7,
            loadout: 5,
            slots: [
                "Crew",
                "Gunner",
                "Canon",
                "Turret",
                "Illicit",
                "Modification"
            ]
        
        },
        {
            name: "Han Solo",
            id: 85,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            skill: 6,
            points: 9,
            loadout: 10,
            ability: "Tant que vous attaquez ou défendez, si l’attaque est obstruée par un obstacle, vous pouvez lancer un dé supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Missile",
                "Crew",
                "Crew",
                "Gunner",
                "Modification",
                "Title"
            ]
        },
        {
            name: "Lando Calrissian",
            id: 86,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Après avoir lancé des dés, si vous n’êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour relancer tous vos résultats vierges.",
            slots: [
                "Talent",
                "Talent",
                "Missile",
                "Crew",
                "Crew",
                "Gunner",
                "Modification",
                "Title"
            ]
        },
        {
            name: "Chewbacca",
            id: 87,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            skill: 4,
            charge: 1,
            recurring: 1,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous devriez recevoir une carte de dégât face visible, vous pouvez dépenser 1 #ch# pour la recevoir face cachée à la place.",
            slots: [
                "Talent",
                "Missile",
                "Crew",
                "Crew",
                "Gunner",
                "Modification",
                "Title"
            ]
        },
       
 
        {
            name: "L3-37",
            id: 88,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            skill: 2,
            points: 7,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Si vous n’êtes pas protégé, réduisez la difficulté de vos virages légers.",
            slots: [
                "Talent",
                "Missile",
                "Crew",
                "Crew",
                "Gunner",
                "Modification"
            ]
        },
        {
            name: "Freighter Captain",
            id: 89,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            skill: 1,
            points: 6,
            loadout: 5,
            slots: [
                "Missile",
                "Crew",
                "Crew",
                "Gunner",
                "Modification"
            ]
        },
        {
            name: "Lando Calrissian -Escape Craft-",
            id: 90,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            skill: 4,
            points: 2,
            loadout: 10,
            ability: "Après avoir lancé des dés, si vous n’êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour relancer tous vos résultats vierges.",
            slots: [
                "Talent",
                "Talent",
                "Crew",
                "Illicit"
            ]
        },
        {
            name: "Outer Rim Pioneer",
            id: 91,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            skill: 3,
            points: 2,
            loadout: 5,
            ability: "Les vaisseaux alliés à portée 0-1 peuvent effectuer des attaques à portée 0 des obstacles.",
            slots: [
                "Talent",
                "Crew",
                "Illicit"
            ]
        },
        {
            name: "L3-37 -Escape Craft-",
            id: 92,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            skill: 2,
            points: 2,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Si vous n’êtes pas protégé, réduisez la difficulté de vos virages légers.",
            slots: [
                "Talent",
                "Crew",
                "Illicit"
            ]
        },
        {
            name: "Autopilot Drone",
            id: 93,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            skill: 1,
            charge: 3,
            points: 2,
            loadout: 0,
            keyword: ["Droid"],
            function: "changer chassis",
            slots: [
                "Illicit"
            ]
        },
        {
            name: "Kath Scarlet",
            id: 94,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, s’il y a au moins 1 vaisseau allié non-limité à portée 0 du défenseur, lancez 1 dé supplémentaire.",
            slots: [
                "Talent",
                "Crew",
                "Torpedo",
                "Payload",
                "Modification"
            ]
        },
{
            name: "Hondo Ohnaka",
            id: 95,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            skill: 1,
            points: 12,
            loadout: 15,
            title: "Slave 1",
            ability: "ACTION : Choisissez 2 vaisseaux non énormes à portée 0-3 de vous qui ne sont pas alliés l’un l’autre. Chaque vaisseau peut effectuer une action qui se trouve sur votre barre d’action, même stressé, dans l’ordre de votre choix. Puis gagner 1 marqueur de calcul.",
            slots: [
                "Talent",
                "Talent",
                "Canon",
                "Crew",
                "Gunner",
                "Payload",
                "Torpedo",
                "Modification"
            ]
        },
{
            name: "Emon Azzameen",
            id: 96,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            skill: 4,
            points: 12,
            loadout: 15,
            title: "Andrasta",
            ability: "Si vous devez larguer un engin en utilisant un gabarit 1#straight#, vous pouvez utiliser à la place un gabarit 3#Lturn# ou 3#straight# ou 3#Rturn#",
            slots: [
                "Talent",
                "Crew",
                "Torpedo",
                "Payload",
                "Payload",
                "Payload",
                "Illicit",
                "Modification"
            ]
        },
         {
            name: "Sana Starros",
            id: 97,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            charge: 1,
            recurring: 1,
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "À tout moment, choisissez un vaisseau allié à portée 0-1. Vous pouvez dépenser 1#ch# pour échanger une de vos améliorations avec une de ses améliorations du même type", 
            slots: [
                "Talent",
                "Crew",
                "Payload",
                "Torpedo",
                "Modification"
            ]
        },
        {
            name: "Serissu",
            id: 98,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Lorsqu’un vaisseau allié à portée 0-1 défend, il peut relancer l’un de ses dés.",
            slots: [
                "Talent",
                "Talent",
                "Modification",
                "HardpointShip"
            ]
        },
{
            name: "Laetin A'shera",
            id: 99,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après avoir défendu ou attaqué, si l’attaque a échoué, gagnez 1 marqueur d’évasion.",
            slots: [
                "Talent",
                "Modification",
                "HardpointShip"
            ]
        },
 {
            name: "Tansarii Point Veteran",
            id: 100,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            skill: 3,
            points: 5,
            loadout: 5,
            slots: [
                "Modification",
                "HardpointShip"
            ]
        },
 {
            name: "Inaldra",
            id: 101,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Lorsque vous attaquez ou défendez, vous pouvez subir 1 #hit# pour relancer autant de dés que souhaité.",
            slots: [
                "Talent",
                "Modification",
                "HardpointShip"
            ]
        },
        {
            name: "Aleas Rans'ery",
            id: 102,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Lorsque vous défendez, si l’attaque est à portée 3 ou obstruée, lancez un dé supplémentaire.",
            slots: [
                "Talent",
                "Modification",
                "HardpointShip"
            ]
        },
        {
            name: "Captain Nym",
            id: 103,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 10,
            ability: "Avant qu’un engin allié n’explose, vous pouvez dépenser 1 #ch# pour l’empêcher d’exploser.<br>Lorsque vous vous défendez contre une attaque obstruée par une bombe ou une mine, lancez 1 dé de défense supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "Turret",
                "Crew",
                "Gunner",
                "Payload",
                "Payload",
                "Modification",
                "Title"
            ]
        },
        {
            name: "Sol Sixxa",
            id: 104,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Lorsque vous devez larguer un engin avec le gabarit 1#straight#, vous pouvez le larguer en utilisant n’importe lequel des gabarit de vitesse 1.",
            slots: [
                "Talent",
                "Turret",
                "Crew",
                "Gunner",
                "Payload",
                "Payload",
                "Modification"
            ]
        },
        {
            name: "Lok Revenant",
            id: 105,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            skill: 2,
            points: 5,
            loadout: 7,
            slots: [
                "Turret",
                "Crew",
                "Gunner",
                "Payload",
                "Payload",
                "Modification",
                "Title"
            ]
        },
        {
            name: "Jinkins",
            id: 106,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            skill: 1,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 10,
            ability: "Lorsque vous larguez ou lancez une bombe, placez un marqueur « Puissance » dessus. Lorsqu’elle explose, augmentez la portée de l’explosion de 1.", 
            slots: [
                "Talent",
                "Turret",
                "Crew",
                "Gunner",
                "Payload",
                "Payload",
                "Modification",
                "Title"
            ]
        },
        {
            name: "N'dru Suhlak",
            id: 107,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            skill: 4,
            points: 4,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, s’il n’y a pas d’autres vaisseaux alliés à portée 0-2, lancez 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "Missile",
                "Illicit"
            ]
        },
        {
            name: "Kaa'to Leeachos",
            id: 108,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            skill: 3,
            points: 4,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 0-2. Dans ce cas, transférez 1 marqueur concentration ou évasion de ce vaisseau vers vous.",
            slots: [
                "Talent",
                "Missile",
                "Illicit"
            ]
        },
{
            name: "Binayre Pirate",
            id: 109,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            skill: 1,
            points: 3,
            loadout: 5,
            slots: [
                "Missile",
                "Illicit"
            ]
        },
        {
            name: "Kanan Jarrus -HWK-290-",
            id: 110,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "HWK-290 Light Freighter",
            skill: 3,
            force: 1,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous ou un vaisseau dans votre #tur# défend, vous pouvez dépenser 1#fo#. Dans ce cas, l’attaquant lance 1 dé d’attaque de moins.",
            slots: [
                "Force",
                "Crew",
                "Gunner",
                "Payload",
                "Illicit",
                "Turret",
                "Modification",
                "Calculator"
            ]
        },
 {
            name: "Tápusk",
            id: 111,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "HWK-290 Light Freighter",
            skill: 5,
            charge: 2,
            recurring: 1,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase de fin, vous pouvez dépenser 2 charges pour vous choisir ou un vaisseau dans votre #tur#  avec 1 ou plusieurs marqueurs circulaires. Pendant la phase de fin, ces jetons circulaires ne sont pas retirés.",
            slots: [
                "Talent",
                "Crew",
                "Gunner",
                "Payload",
                "Illicit",
                "Turret",
                "Modification",
                "Calculator"
            ]
        },


//##############################################################BOUNTY_HUNTERS_Guild

 {
            name: "IG-88A",
            id: 112,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            skill: 4,
            points: 11,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 1–3 avec #CA# dans sa barre d’action. Dans ce cas, transférez-lui 1 de vos marqueurs de calcul.",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Modification",
                "Calculator",
                
            ]
        },
        {
            name: "IG-88B",
            id: 113,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            skill: 4,
            points: 11,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Après avoir effectué une attaque ratée, vous pouvez effectuer une attaque bonus #can#",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Modification",
                "Calculator"
                
            ]
        },
        {
            name: "IG-88C",
            id: 114,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            skill: 4,
            points: 11,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Après avoir effectué une action #BO# , vous pouvez effectuer une action #EV# .",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Modification",
                "Calculator"
                
            ]
        },
        {
            name: "IG-88D",
            id: 115,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            skill: 4,
            points: 10,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Tant que vous exécutez une manœuvre Boucle de Segnor #Sleft# ou #Sright# ), vous pouvez utiliser un autre gabarit de même vitesse mais de même direction à la place.",
            slots: [
                "Talent",
                "Sensor",
                "Canon",
                "Canon",
                "Modification",
                "Calculator"
                
            ]
        },
        {
            name: "The Mandalorian",
            id: 116,
            faction: "Bounty_Hunters_Guild",
            ship: "ST-70 Assault Ship",
            skill: 5,
            points: 8,
            loadout: 15,
            unique: true,
            title: "Razor Crest",
            ability: "Tant que vous défendez ou effectuez une attaque si vous êtes dans le #Farc# à portée 1-2 d'au moins 2 vaisseaux ennemis, vous pouvez changer 1 de vos résultats vierges en un résultat #eye#.",
            slots: [
                "Talent",
                "Talent",
                "Tech",
                "Crew",
                "Illicit",
                "Illicit",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "Q9-0",
            id: 117,
            faction: "Bounty_Hunters_Guild",
            ship: "ST-70 Assault Ship",
            skill: 5,
            points: 7,
            loadout: 15,
            unique: true,
            title: "Razor Crest",
            keyword: ["Droid"],
            
            ability: "Après avoir entièrement exécuté une manœuvre avancée, vous pouvez effectuer une action #CA# ou #BR#, même si vous êtes stressé. Dans ce cas, gagnez 1 marqueur de contrainte.", 
            slots: [
                "Talent",
                "Tech",
                "Crew",
                "Illicit",
                "Illicit",
                "Modification",
                "Modification"
            ]
        },
        {
            name: "4-LOM",
            id: 118,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "G-1A Starfighter",
            skill: 3,
            points: 8,
            loadout: 15,
            keyword: ["Droid"] ,
            title: "Mist Hunter",
            ability: "Après avoir entièrement exécuté une manœuvre rouge, gagnez 1 marqueur de calcul. Au début de la phase de dénouement, vous pouvez choisir un vaisseau à portée 0–1. Dans ce cas, transférez 1 de vos marqueurs de stress à ce vaisseau.",
            slots: [
                "Talent",
                "Sensor",
                "Crew",
                "Illicit",
                "Modification",
                "Calculator",
            ]
        },
{
            name: "Zuckuss",
            id: 119,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "G-1A Starfighter",
            skill: 3,
            points: 8,
            loadout: 15,
            ability: "Tant que vous effectuez une attaque principale, vous pouvez lancer 1 dé d’attaque supplémentaire. Dans ce cas, le défenseur lance 1 dé de défense supplémentaire.",
            slots: [
                "Talent",
                "Sensor",
                "Crew",
                "Illicit",
                "Modification",
                "Calculator"
            ]
        },
        {
            name: "Dengar",
            id: 120,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            skill: 6,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 15,
            title: "Punishing One",
            ability: "Après avoir défendu, si l’attaquant est dans votre #Farc#, vous pouvez dépenser 1 #ch# pour effectuer une attaque bonus contre cet attaquant.",
            slots: [
                "Talent",
                "Talent",
                "Talent",
                "Astromech",
                "Torpedo",
                "Canon",
                "Gunner",
                "Illicit",
                "Modification"
            ]
        },
        {
            name: "Tel Trevura",
            id: 121,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            skill: 4,
            charge: 1,
            points: 7,
            loadout: 10,
            ability: "Si vous devez être détruit, vous pouvez dépenser 1 #ch#. Dans ce cas, défaussez toutes vos cartes de dégât, subissez 5 dégâts #hit#, et placez-vous en réserve à la place. Au début de la prochaine phase de préparation, placez-vous intégralement à portée 1 de votre bord Joueur.",
            slots: [
                "Talent",
                "Torpedo",
                "Crew",
                "Gunner",
                "Illicit",
                "Modification"
            ]
        },
{
            name: "Manaroo",
            id: 122,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            skill: 3,
            points: 7,
            loadout: 15,
            title: "Punishing One",
            ability: "Au début de la phase d’engagement, vous pouvez choisir un vaisseau allié à portée 0–2. Dans ce cas, transférez à ce vaisseau tous vos marqueurs verts.",
            slots: [
                "Talent",
                "Astromech",
                "Torpedo",
                "Canon",
                "Gunner",
                "Illicit",
                "Modification"
            ]
        },
        {
            name: "Beilert Valance",
            id: 123,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Lorsque vous révélez une manœuvre rouge, vous pouvez effectuer une action (avant de vous déplacer)",
            slots: [
                "Talent",
                "Talent",
                "Torpedo",
                "Crew",
                "Gunner",
                "Illicit",
                "Modification"
            ]
        },
        {
            name: "Graz",
            id: 124,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Tant que vous défendez, si vous êtes derrière l’attaquant, lancez 1 dé de défense supplémentaire.<br>Tant que vous effectuez une attaque, si vous êtes derrière le défenseur, lancez 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "Missile",
                "Illicit",
                "Modification"
            ]
        },
{
            name: "Viktor Hel",
            id: 125,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Après avoir défendu, si vous n’avez pas lancé exactement 2 dés de défense, l’attaquant gagne 1 marqueur de stress.",
            slots: [
                "Talent",
                "Talent",
                "Missile",
                "Illicit",
                "Modification"
            ]
        },
 {
            name: "Captain Jostero",
            id: 126,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a subi des dégâts, s’il n’est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
            slots: [
                "Talent",
                "Missile",
                "Illicit",
                "Modification",
            ]
        },
        {
            name: "Bossk",
            id: 127,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "YV-666 Light Freighter",
            skill: 4,
            points: 10,
            loadout: 15,
            title: "Hound's Tooth",
            ability: "Tant que vous effectuez une attaque principale, après l’étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat #crit# pour ajouter 2 résultats #hit# .",
            slots: [
                "Talent",
                "Crew",
                "Crew",
                "Gunner",
                "Illicit",
                "Canon",
                "Modification"
            ]
        },
{
            name: "Nashtah Pup",
            id: 128,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Z-95-AF4 Headhunter",
            skill: 0,
            points: 2,
            loadout: 0,
            ability: "Ne peut être joué que si un YV666 avec le titre Hound’s Tooth est dans votre escadron. Quand le Hound’s Tooth est détruit, vous devez vous déployer. Vous pouvez copier :<br>- Le texte de sa capacité de pilote<br>-  Le texte de l’une de ses améliorations #crew# ",
            slots: [
                "Missile",
                "Illicit"
            ],
            restrictions: [
                ["Unique", "Hound's Tooth"]
            ],
            restriction_func: ""/*(ship) -> builder = ship.builder
                for t, things of builder.uniques_in_use
                    if t != 'Slot'
                        if 'houndstooth' in (thing.canonical_name.getXWSBaseName() for thing in things)
                            for shiplist in ship.builder.ships
                                for upgrade in shiplist.upgrades
                                    if upgrade.data? and ship.pilot?
                                        if upgrade.data.name == "Hound's Tooth"
                                            ship.pilot.skill = shiplist.pilot.skill
                                            break
                            return true 
                false*/

        },
{
            name: "Bossk -Z-95-",
            id: 129,
            faction: "Bounty_Hunters_Guild",
            unique: true,
            skill: 4,
            ship: "Z-95-AF4 Headhunter",
            points: 4,
            loadout: 10,
            chassis: "Pursuit Craft",
            ability: "Tant que vous effectuez une attaque principale, après l’étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat #crit# pour ajouter 2 résultats #hit# .",

            slots: [
                "Talent",
                "Missile",
                "Illicit"
            ]
        },
        {
            name: "Cad Bane -Scum-",
            id: 130,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            skill: 4,
            charge: 2,
            recurring: 1,
            points: 7,
            loadout: 15,
            title: "Xanadu Blood",
            ability: "Après avoir effectué une attaque qui a touché, vous pouvez dépenser 2 #ch# pour transférer 1 de vos marqueurs rouges non-verrouillage ou orange au défenseur.",
            slots: [
                "Talent",
                "Talent",
                "Canon",
                "Canon",
                "Illicit",
                "Illicit",
                "Crew",
                "Payload",
                "Modification"
            ]
        },
{
            name: "Nom Lumb",
            id: 131,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            skill: 1,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau ennemi dans votre #Farc#. Dans ce cas, considérez votre initiative comme étant égale à celle de ce vaisseau jusqu’à la fin du round.",
            slots: [
                "Talent",
                "Canon",
                "Canon",
                "Illicit",
                "Illicit",
                "Modification"
            ]
        },
 {
            name: "Durge",
            id: 132,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez, après l'étape Neutraliser les Résultats, s'il y a plus de résultats #hit#/#crit# que vos boucliers actifs, vous pouvez changer 1 résultat #hit# en 1 résultat #crit# et annuler 1 résultat #hit#.",
            slots: [
                "Talent",
                "Canon",
                "Canon",
                "Illicit",
                "Illicit",
                "Modification"
            ]
        },
        {
            name: "Boba Fett",
            id: 133,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            skill: 5,
            points: 14,
            loadout: 15,
            title: "Slave 1",
            ability: "Tant que vous défendez ou effectuez une attaque, vous pouvez relancer 1 de vos dés pour chaque vaisseau ennemi à portée 0–1.",
            slots: [
                "Talent",
                "Talent",
                "Canon",
                "Crew",
                "Gunner",
                "Payload",
                "Torpedo",
                "Modification"
            ]
        },
         {
            name: "Aurra Sing",
            id: 134,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            skill: 4,
            force: 1,
            points: 13,
            loadout: 15,
            title: "Slave 1",
            ability: "Avant de vous engager, vous pouvez dépenser 1 #fo# pour choisir 2 vaisseaux ennemis à portée 0-1. Transférez n'importe quel nombre de marqueurs orange et rouges entre ces 2 vaisseaux.",
            slots: [
                "Talent",
                "Talent",
                "Canon",
                "Crew",
                "Gunner",
                "Payload",
                "Torpedo",
                "Modification"
            ]
        },
         {
            name: "Captain Jostero -Firespray-",
            id: 135,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            skill: 3,
            points: 12,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a subi des dégâts, s’il n’est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
            slots: [
                "Talent",
                "Crew",
                "Payload",
                "Torpedo",
                "Modification"
            ]
        }
    ];
 
const upgrades = [
        // ##############################################      GENERIC UPGRADE ##########################""
            {
                name: "R2 Astromech",
                id: 0,
                slot: "Astromech",
                points: 6,
                charge: 2,
                effect: "Après avoir révélé votre cadran, vous pouvez dépenser 1 #ch# et gagner 1 marqueur de désarmement pour récupérer 1 bouclier.",
                faction: ""
            },
            {
                name: "R3 Astromech",
                id: 1,
                slot: "Astromech",
                points: 3,
                effect: "Vous pouvez maintenir jusqu’à 2 cibles verrouillées. Chaque verrouillage doit être sur un objet différent. Après avoir effectué une action #TL# , vous pouvez verrouiller une cible.",
                faction: ""
            },
            {
                name: "R4 Astromech",
                id: 2,
                slot: "Astromech",
                points: 2,
                effect: "Réduisez la difficulté de vos manoeuvres de vitesse 1 et 2",
                faction: ""
                /*modifier_func: (stats) ->
                    if stats.maneuvers[1]?
                        for turn in [0 ... stats.maneuvers[1].length]
                            if turn > 4
                                continue
                            if stats.maneuvers[1][turn] > 1
                                stats.maneuvers[1][turn]--
                            if stats.maneuvers[2][,turn] > 1
                                stats.maneuvers[2][turn]--*/
             },
            {
                name: "R5 Astromech",
                id: 3,
                slot: "Astromech",
                points: 4,
                charge: 2,
                effect: "Action : dépensez 1 #ch# pour réparer 1 carte de dégât face cachée.<br>Action : réparez 1 carte de dégât Vaisseau face visible.",
                faction: ""
            },
            {
                name: "Watchful Astromech",
                id: 4,
                slot: "Astromech",
                points: 2,
                effect: "Après avoir effectué une action #RT# ou #RD#, si vous êtes dans l'arc de tir d'un vaisseau ennemi, vous pouvez effectuer une action #CA# rouge.",
                faction: ""
            },
            
     {
                name: "Crack Shot",
                id: 5,
                slot: "Talent",
                points: 3,
                charge: 1,
                effect: "Tant que vous effectuez une attaque principale, si le défenseur est dans votre #bulls#, avant l’étape « Neutraliser les résultats », vous pouvez dépenser 1 #ch# pour annuler 1 résultat #hit#.",
                faction: ""
            },
    {
                name: "Elusive",
                id: 6,
                slot: "Talent",
                points: 5,
                effect: "Lorsque vous défendez contre une attaque à portée 3 ou contre une attaque de #tur#, vous pouvez améliorer un dé de défense.",
                restrictions: [
                    ["Slot", "Modification"]
                ],
                faction: ""
                /*validation_func: (ship, upgrade_obj) ->
                    upgrade_obj.occupiesAnUpgradeSlot "Modification"
                also_occupies_upgrades: [ "Modification" ]  */         
            },
    {
                name: "Lone Wolf",
                id: 7,
                slot: "Talent",
                points: 3,
                recurring: 1,
                charge: 1,
                effect: "Tant que vous défendez ou que vous effectuez une attaque, s’il n’y a aucun autre vaisseau allié à portée 0–2, vous pouvez dépenser 1 #ch# pour relancer 1 de vos dés.",
                faction: ""
            },
            {
                name: "Intimidation",
                id: 8,
                slot: "Talent",
                points: 2,
                effect: "Tant qu’un vaisseau ennemi à portée 0 défend, il lance un dé de défense en moins.",
                faction: ""
            },
     {
                name: "Marksmanship",
                id: 9,
                slot: "Talent",
                points: 1,
                effect: "Tant que vous effectuez une attaque, si le défenseur est dans votre #bulls#, vous pouvez changer 1 résultat #hit# en un résultat #crit#.",
                faction: ""
            },
    {
                name: "Outmaneuver",
                id: 10,
                slot: "Talent",
                points: 8,
                effect: "Tant que vous effectuez une attaque #Farc#, si vous n’êtes pas dans l’arc de tir du défenseur, il lance 1 dé de défense en moins.",
                faction: ""
            },
     {
                name: "Predator",
                id: 11,
                slot: "Talent",
                points: 3,
                effect: "Tant que vous effectuez une attaque principale, si le défenseur est dans votre #bulls#, vous pouvez relancer 1 dé d’attaque.",
                faction: ""
            },
     {
                name: "Squad Leader",
                id: 12,
                slot: "Talent",
                points: 5,
                unique: true,
                effect: "Tant que vous coordonnez, le vaisseau que vous avez choisi peut effectuer une action seulement si celle-ci est également dans votre barre d’action.<br>Ajoute l'action (CO)",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'R-Coordinate' if 'R-Coordinate' not in stats.actions*/
            },
     {
                name: "Swarm Tactics",
                id: 13,
                slot: "Talent",
                points: 2,
                effect: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 1. Dans ce cas, considérez que son initiative est égale à la vôtre jusqu’à la fin du round.",
                faction: ""
            },
    {
                name: "Trick Shot",
                id: 14,
                slot: "Talent",
                points: 3,
                effect: "Tant que vous effectuez une attaque qui est gênée par un obstacle, lancez 1 dé d’attaque supplémentaire.",
                faction: ""
            },
     {
                name: "Snap Shot",
                id: 15,
                slot: "Talent",
                points: 6,
                attack: 2,
                range: [2],
                rangebonus: true,
                effect: "Après qu’un vaisseau ennemi a exécuté une manœuvre, vous pouvez effectuer cette attaque contre lui en tant qu’attaque bonus.<br>Attaque : vos dés ne peuvent pas être modifiés.",
                faction: ""
            },
    {
                name: "Tactical Officer",
                id: 16,
                slot: "Crew",
                points: 3,
                effect: "Ajoute l'action #CO# blanche",
                restrictions: [
                    ["Action", "R-Coordinate"]
                ],
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Coordinate' if 'Coordinate' not in stats.actions*/
            },
     {
                name: "Perceptive Copilot",
                id: 17,
                slot: "Crew",
                points: 8,
                effect: "Après avoir effectué une action #FS#, gagnez 1 marqueur de concentration.",
                faction: ""
            },
    {
                name: "Novice Technician",
                id: 18,
                slot: "Crew",
                points: 2,
                effect: "À la fin du round, vous pouvez lancer 1 dé d’attaque pour réparer 1 carte de dégât face visible. Puis, sur un résultat #hit#, exposez 1 carte de dégât.",
                faction: ""
            },
    {
                name: 'GNK "Gonk" Droid',
                id: 19,
                slot: "Crew",
                points: 4,
                charge: 1,
                effect: "Action : récupérez 1 #ch#.<br>Action : dépensez 1 #ch# pour récupérer 1 bouclier.",
                faction: ""
            },
    {
                name: "Freelance Slicer",
                id: 20,
                slot: "Crew",
                points: 2,
                effect: "Tant que vous défendez et avant que les dés d’attaque ne soient lancés, vous pouvez dépenser un marqueur de verrouillage que vous avez sur l’attaquant pour lancer 1 dé d’attaque. Dans ce cas, l’attaquant gagne 1 marqueur de brouillage. Puis, sur un résultat #hit# ou #crit#, gagnez 1 marqueur de brouillage.",
                faction: ""
            },
     {
                name: "Agile Gunner",
                id: 21,
                slot: "Gunner",
                points: 1,
                effect: "Pendant la phase de dénouement, vous pouvez faire pivoter votre indicateur #tur#",
                faction: ""
            },
     {
                name: "Hotshot Gunner",
                id: 22,
                slot: "Gunner",
                points: 6,
                effect: "Après avoir effectué une attaque de #tur#, retirez un marqueur de concentration, de calcul, ou d’évasion du défenseur.",
                faction: ""
            },
     {
                name: "Skilled Bombardier",
                id: 23,
                slot: "Gunner",
                points: 2,
                effect: "Si vous devez larguer ou lancer un engin, vous pouvez utiliser un gabarit de même direction mais avec une vitesse supérieure ou inférieure de 1.",
                faction: ""
            },
     {
                name: "Veteran Gunner",
                id: 24,
                slot: "Gunner",
                points: 5,
                effect: "Après avoir effectué une attaque, vous pouvez effectuer une attaque bonus #tur# ou #can#, avec une #tur# ou un #can# que vous n’avez pas encore utilisé.",
                faction: ""
              },
      {
                name: "Weapons Systems Officer",
                id: 25,
                points: 6,
                slot: "Gunner",
                effect: "Après avoir effectué une attaque, vous pouvez dépenser un marqueur vert ou recevoir un marqueur de stress pour verrouiller le défenseur.",
                faction: ""
            },
    {
                name: "Automated Target Priority",
                id: 26,
                slot: "Tech",
                points: 2,
                effect: "Tant que vous effectuez une attaque, vous devez choisir un défenseur à la plus courte portée d’attaque valide.<br>Après avoir effectué une attaque qui a raté, placez 1 marqueur de calcul sur cette carte.<br>Avant de vous engager, vous pouvez retirer 1 marqueur de calcul de cette carte pour gagner le marqueur correspondant",
                faction: ""
            },
     {
                name: "Pattern Analyzer",
                id: 27,
                slot: "Tech",
                points: 5,
                effect: "Tant que vous exécutez entièrement une manœuvre rouge, avant l’étape « Vérifier la difficulté », vous pouvez effectuer 1 action.",
                faction: ""
            },
     {
                name: "Advanced Optics",
                id: 28,
                slot: "Tech",
                points: 5,
                effect: "Tant que vous effectuez une attaque, vous pouvez dépenser 1 marqueur de concentration pour changer 1 de vos résultats vierges en un résultat #hit#.",
                faction: ""
            },
     
     {
                name: "Targeting Synchronizer",
                id: 29,
                slot: "Tech",
                points: 2,
                effect: "Tant qu’un vaisseau allié à portée 1–3 effectue une attaque contre une cible que vous avez verrouillée, ce vaisseau allié ignore le prérequis d’attaque #TL#.",
                faction: ""
    
            },
     {
                name: "Ion Missiles",
                id: 30,
                slot: "Missile",
                points: 4,
                attack: 3,
                range: [2,3],
                charge: 3,
                effect: "Attaque (#TL#) portée 2-3 #Farc# 3 dés : dépensez 1 #ch#. Si cette attaque touche, dépensez 1 résultat #hit# ou #crit# pour faire subir 1 dégât #hit# au défenseur. Tous les résultats #hit#/#crit# restants infligent des marqueurs ioniques au lieu des dégâts.",
                faction: ""
            },
    {
                name: "Homing Missiles",
                id: 31,
                slot: "Missile",
                points: 4,
                attack: 4,
                range: [2,3],
                charge: 2,
                effect: "Attaque (#TL#) Portée 2-3 #Farc# 4 dés: dépensez 1 #ch#. Après que vous avez déclaré le défenseur, il peut choisir de subir 1 dégât #hit#. Dans ce cas, sautez les étapes « Dés d’attaque » et « Dés de défense » et considérez que l’attaque a touché.",
                faction: ""
            },
    {
                name: "Cluster Missiles",
                id: 32,
                slot: "Missile",
                points: 4,
                attack: 3,
                range: [1,2],
                charge: 2,
                effect: "Attaque (#TL#) Portée 1-2 #Farc# 3 dés. Après avoir résolu l’attaque, vous pouvez choisir un autre vaisseau à portée 0-1 du défenseur. Lancez 3 dés d’attaque : assignez autant de marqueurs de contrainte que de résultats #eye#, puis le vaisseau ciblé doit se défendre en considérant les autres résultats comme un jet d’attaque.",
                faction: ""
            },
    {
                name: "Barrage Rockets",
                id: 33,
                slot: "Missile",
                points: 7,
                attack: 3,
                range: [2,3],
                charge: 5,
                effect: "Attaque (#FS#) Portée 2-3 #Farc# 3 dés: Dépensez 1 #ch#. Si le défenseur est dans votre #bulls#, vous pouvez dépenser 1 ou plusieurs ch pour relancer autant de dés d’attaque.",
                restrictions: [
                    ["Slot", "Missile"]
                ],
                faction: ""
                /*validation_func: (ship, upgrade_obj) ->
                    upgrade_obj.occupiesAnUpgradeSlot "Missile"
                also_occupies_upgrades: [ "Missile" ]*/
            },
    {
                name: "XX-23 S-Thread Tracers",
                id: 34,
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
                name: "Harpoon Missiles",
                id: 35,
                slot: "Missile",
                attack: 3,
                range: [1,3],
                charge: 1,
                points: 5,
                effect: "Attaque (#FS#) Portée 1-2 #Farc# 3 dés. Si l’attaque touche, annulez tous les dés. Puis le défenseur reçoit une carte de dégât face cachée et marqueur de Rayon Tracteur.",
                faction: ""
            },
    {
                name: "Plasma Torpedoes",
                id: 36,
                slot: "Torpedo",
                points: 6,
                attack: 3,
                range: [2,3],
                charge: 2,
                effect: "Attaque (#TL#) 3dés #Farc# portée 2-3: dépensez 1 Ch. Lors de l’étape « Neutraliser les résultats », les résultats #crit# sont annulés avant les résultats #hit#. Après que cette attaque a touché, le défenseur perd 1 bouclier.",
                faction: ""
            },
     {
                name: "Adv. Proton Torpedoes",
                id: 37,
                slot: "Torpedo",
                points: 8,
                attack: 5,
                range: [1],
                charge: 1,
                effect: "Attaque (#TL#) : Portée 1 #Farc# 4 dés: dépensez 1 #ch#. ATTAQUE PRECISE.",
                faction: ""
            },
             {
                name: "Concussion Torpedoes",
                id: 38,
                slot: "Torpedo",
                points: 6,
                attack: 3,
                range: [2,3],
                charge: 3,
                effect: "Attaque (lock) : Portée 2-3 #Farc# 3 dés. dépensez 1 #ch#. Après que cette attaque a touché, chaque vaisseau à portée 0–1 du défenseur expose 1 de ses cartes de dégât.",
                faction: ""
            },
            
           
            {
                name: "Proton Rockets",
                id: 39,
                slot: "Torpedo",
                points: 8,
                attackbull: 5,
                range: [1,2],
                charge: 1,
                effect: "Attaque (#TL#) Portée 1-2 #bulls# 5 dés: dépensez 1 Ch.",
                faction: ""
            },
            {
                name: "Bomblet Generator",
                id: 40,
                slot: "Payload",
                points: 2,
                charge: 2,
                effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une sous-munition avec le gabarit 1#straight#. Au début de la phase d’activation, vous pouvez dépenser 1 bouclier pour récupérer 2 #ch#.",
                //applies_condition: 'Bomblet'.canonicalize(),
                restrictions: [
                    ["Slot", "Payload"]
                ],
                faction: ""
                /*validation_func: (ship, upgrade_obj) ->
                    upgrade_obj.occupiesAnUpgradeSlot "Payload"
                also_occupies_upgrades: [ "Payload" ]*/
            },
     {
                name: "Conner Nets",
                id: 41,
                slot: "Payload",
                points: 3,
                charge: 1,
                effect: "Pendant la phase de système, vous pouvez dépenser 1#ch# pour larguer un filet Conner en utilisant le gabarit 1#straight#.<br>La #ch# de cette carte ne peut pas être récupérée.",
                faction: ""
                //applies_condition: 'Conner Net'.canonicalize()
            },
     {
                name: "Proton Bombs",
                id: 42,
                slot: "Payload",
                points: 4,
                charge: 2,
                effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une bombe à protons en utilisant le gabarit 1#straight#.",
                faction: ""
                //applies_condition: 'Proton Bomb'.canonicalize()
            },
     {
                name: "Proximity Mines",
                id: 43,
                slot: "Payload",
                points: 6,
                charge: 2,
                effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une mine de proximité en utilisant le gabarit 1#straight#.<br>Les #ch# de cette carte ne peuvent pas être récupérées.",
                faction: ""
                //applies_condition: 'Proximity Mine'.canonicalize()
            },
    {
                name: "Seismic Charges",
                id: 44,
                slot: "Payload",
                points: 2,
                charge: 2,
                effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une charge sismique en utilisant le gabarit 1#straight#.",
                faction: ""
                //applies_condition: 'Seismic Charge'.canonicalize()
            },
    {
                name: "Ion Bombs",
                id: 45,
                slot: "Payload",
                points: 3,
                charge: 2,
                effect: "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une charge sismique en utilisant le gabarit 1#straight#.",
                faction: ""
                //applies_condition: 'Ion Bomb'.canonicalize()
            },
     {
                name: "Jamming Beam",
                id: 46,
                slot: "Canon",
                points: 1,
                attack: 3,
                range: [1-2],
                effect: "Portée 1-2 #Farc# 3 dés Attaque : si cette attaque touche, tous les résultats #hit#/#crit# infligent des marqueurs de brouillage au lieu des dégâts.",
                faction: ""
            },
     {
                name: "Tractor Beam",
                id: 47,
                slot: "Canon",
                points: 4,
                attack: 3,
                range: [1-3],
                effect: "Portée 1-3 #Farc# 3 dés, Attaque : si cette attaque touche, tous les résultats #hit#/#crit# infligent des marqueurs de rayon tracteur au lieu des dégâts.",
                faction: ""
            },
    {
                name: "Ion Canon",
                id: 48,
                slot: "Canon",
                points: 5,
                attack: 3,
                range: [1,3],
                effect: "Portée 1-3 #Farc# 3 dés Attaque : si cette attaque touche, dépensez 1 résultat #hit# ou #crit# pour faire subir 1 dégât au défenseur. Tous les résultats #hit#/#crit# restants infligent des marqueurs ioniques au lieu des dégâts.",
                faction: ""
            },
    {
                name: "Heavy Laser Canon",
                id: 49,
                slot: "Canon",
                points: 4,
                attackbull: 4,
                range: [2,3],
                effect: "Portée 2-3 #Farc# 4 dés. Si le défenseur n’est pas dans le #bulls#, alors l’attaque devient IMPRECISE.",
                faction: ""
            },
            {
                name: "Synced Laser Canons",
                id: 50,
                slot: "Canon",
                points: 7,
                attack: 3,
                range: [2,3],
                effect: "Portée 2-3 #Farc# 3 dés Attaque : si vous êtes calculateur, vous pouvez améliorer 1 dé d’attaque",
                restrictions: [
                    ["Slot", "Canon"]
                ],
                faction: ""
                /*validation_func: (ship, upgrade_obj) ->
                    upgrade_obj.occupiesAnUpgradeSlot "Canon"
                also_occupies_upgrades: [ "Canon" ]*/
            },
    {
                name: "Ion Canon Turret",
                id: 51,
                slot: "Turret",
                points: 5,
                attackt: 3,
                range: [1,2],
                effect: "Portée 1-2 #Farc# 3 dés Attaque : si cette attaque touche, dépensez 1 résultat #hit# ou #crit# pour faire subir 1 dégât #hit# au défenseur. Tous les résultats #hit#/#crit# restants infligent des marqueurs ioniques au lieu des dégâts.",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Rotate Arc' if 'Rotate Arc' not in stats.actions*/
            },
     {
                name: "Dorsal Turret",
                id: 52,
                slot: "Turret",
                points: 2,
                attackt: 2,
                range: [1,2],
                effect: "Portée 1-2 #tur# 2 dés, Attaque",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Rotate Arc' if 'Rotate Arc' not in stats.actions*/
            },
     {
                name: "Autoblasters",
                id: 53,
                slot: "Turret",
                points: 4,
                attackt: 2,
                range: [0,1],
                effect: "Portée 0-1 #tur# 2 dés. ATTAQUE PRECISE",
                faction: ""
            },
            {
                name: "Twin Laser Turret",
                id: 54,
                slot: "Turret",
                points: 4,
                attackt: 3,
                range: [2,3],
                effect: "Portée 2-3 #tur# 3 dés Attaque : attaque IMPRECISE<br>puis Attaque: attaque IMPRECISE.",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Rotate Arc' if 'Rotate Arc' not in stats.actions*/
            },
             {
                name: "Canon Turret Support",
                id: 55,
                slot: "Turret",
                points: 3,
                effect: "Choisissez une amélioration #can# équipée et placez un marqueur canon rotatif dessus. La restriction #Farc# de votre #can# devient #tur#. Vous pouvez tourner l’arc de votre #can# avec l’action #RT#.",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Rotate Arc' if 'Rotate Arc' not in stats.actions*/
            },
             {
                name: "Cloaking Device",
                id: 56,
                slot: "Illicit",
                points: 4,
                unique: true,
                charge: 2,
                effect: "Action : Dépensez 1 #ch# pour effectuer une action #CK#.<br>Au début de la phase de préparation, lancez 1 dé d’attaque. Sur un résultat #eye#, désoccultez-vous ou défaussez votre marqueur d’occultation.",
                restrictions: [
                    ["Base", "Small", "Medium"]
                ],
                faction: ""
            },
            {
                name: "Contraband Cybernetics",
                id: 57,
                slot: "Illicit",
                points: 3,
                charge: 1,
                effect: "Avant votre activation, vous pouvez dépenser 1 #ch#. Dans ce cas, jusqu’à la fin du round, vous pouvez effectuer des actions et exécuter des manœuvres rouges, même si vous êtes stressé.",
                faction: ""
            },
            {
                name: "Deadman's Switch",
                id: 58,
                slot: "Illicit",
                points: 2,
                effect: "Après que vous avez été détruit, chaque autre vaisseau à portée 0–1 subit 1 dégât #hit#.",
                faction: ""
            },
     {
                name: "Coaxium Hyperfuel",
                id: 59,
                slot: "Illicit",
                points: 5,
                effect: "ACTION : dépensez 1 #ch#. Vous pouvez effectuer une action #MASL#. Vous pouvez effectuer cette action même après avoir partiellement effectué une manoeuvre ou sous l’effet du stress. Puis exposez 1 carte de dégât ou prenez 1 dégât critique.",
                faction: ""
                
            },
     {
                name: "False Transponder Codes",
                id: 60,
                points: 3,
                charge: 1,
                slot: "Illicit",
                effect: "Après avoir verrouillé un objet ou qu'un objet vous a verrouillé, si vous avez 1 #ch# active, perdez 1 #ch# et brouillez cet objet, en ignorant les restrictions de portée.",
                faction: ""
            },
             {
                name: "Ablative Plating",
                id: 61,
                slot: "Modification",
                points: 4,
                charge: 2,
                effect: "Avant de subir des dégâts à cause d’un obstacle ou de l’explosion d’une bombe alliée, vous pouvez dépenser 1 #ch#. Dans ce cas, prévenez 1 dégât.",
                restrictions: [
                    ["Base", "Medium", "Large"]
                ],
                faction: ""
            },
    {
                name: "Afterburners",
                id: 62,
                slot: "Modification",
                points: 6,
                charge: 2,
                effect: "Après avoir entièrement exécuté une manœuvre à vitesse 3–5, vous pouvez dépenser 1 #ch# pour effectuer une action #BO#, même tant que vous êtes stressé.",
                restrictions: [
                    ["Base", "Small"]
                ],
                faction: ""
            },
    {
                name: "Engine Upgrade",
                id: 63,
                slot: "Modification",
                points: 3,
                effect: "Donne l'action #BO# blanche",
                restrictions: [
                    ["Action", "R-Boost",]
                ],
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Boost' if 'Boost' not in stats.actions*/
            },
            {
                name: "Munitions Failsafe",
                id: 64,
                slot: "Modification",
                points: 1,
                effect: "Tant que vous effectuez une attaque #mi# ou #to#, après avoir lancé les dés d’attaque, vous pouvez annuler tous les résultats des dés pour récupérer 1 #ch# que vous avez dépensée comme coût pour l’attaque.",
                faction: ""
            },
    {
                name: "Tactical Scrambler",
                id: 65,
                slot: "Modification",
                points: 2,
                effect: "Tant que vous gênez l’attaque d’un vaisseau ennemi, le défenseur lance 1 dé de défense supplémentaire.",
                restrictions: [
                    ["Base", "Medium", "Large"]
                ],
                faction: ""
            },
    {
                name: "Hull Upgrade",
                id: 65,
                slot: "Modification",
                points: 6,
                effect: "+1 Coque",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.hull += 1*/
            },
    {
                name: "Shield Upgrade",
                id: 66,
                slot: "Modification",
                points: 7,
                effect: "+1 Bouclier",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.shields += 1*/
            },
            {
                name: "Stealth Device",
                id: 67,
                slot: "Modification",
                points: 6,
                charge: 1,
                effect: "Tant que vous défendez, si votre #ch# est active, lancez 1 dé de défense supplémentaire. Après avoir subi des dégâts, perdez 1#ch#.",
                faction: ""
            },
     {
                name: "Delayed Fuses",
                id: 68,
                slot: "Modification",
                points: 1,
                effect: "Après avoir largué, lancé ou placé une bombe ou une mine, vous pouvez placer dessus 1 marqueur d’amorce.",
                faction: ""
            },
    {
                name: "Targeting Computer",
                id: 69,
                slot: "Modification",
                points: 2,
                effect: "Donne accès l'action #TL#",
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Lock' if 'Lock' not in stats.actions*/
            },
    {
                name: "Advanced Sensors",
                id: 70,
                slot: "Sensor",
                points: 8,
                effect: "Après avoir révélé votre cadran, vous pouvez effectuer 1 action. Dans ce cas, vous ne pouvez pas effectuer d’autre action pendant votre activation.",
                faction: ""
            },
            {
                name: "Collision Detector",
                id: 71,
                slot: "Sensor",
                points: 5,
                charge: 2,
                effect: "Tant que vous accélérez ou que vous effectuez un tonneau, vous pouvez vous déplacer à travers ou chevaucher les obstacles. Après vous être déplacé à travers ou avoir chevauché un obstacle, vous pouvez dépenser 1 #ch# pour ignorer ses effets jusqu’à la fin du round.",
                faction: ""
            },
            {
                name: "Fire-Control System",
                id: 72,
                slot: "Sensor",
                points: 2,
                effect: "Tant que vous effectuez une attaque, si vous avez un verrouillage sur le défenseur, vous pouvez relancer 1 dé d’attaque. Dans ce cas, vous ne pouvez pas dépenser votre marqueur de verrouillage pendant cette attaque.",
                faction: ""
            },
             {
                name: "Long Range Scanner",
                id: 73,
                slot: "Sensor",
                points: 5,
                effect: "Vous pouvez verrouiller des cibles au-delà de la portée 3. Lorsque vous verrouillez une cible à portée 2 ou moins, recevez 1 marqueur d’épuisement.",
                faction: ""
            },
             {
                name: "Sensor Jammer",
                id: 74,
                slot: "Sensor",
                points: 8,
                effect: "Augmentez les portées de l’action brouillage de 1. Lorsque vous défendez, vous pouvez dépenser 1 #ch# pour dégrader 1 dé d’attaque.",
                faction: ""
            },
    {
                name: "Patience",
                id: 75,
                slot: "Force",
                points: 2,
                effect: "Au début de la phase d’engagement, s’il y a un vaisseau ennemi dans votre #Farc#, vous pouvez gagner 1 marqueur d’épuisement pour récupérer 1 #fo#.",
                faction: ""           
                
            },
     {
                name: "Precognitive Reflexes",
                id: 76,
                slot: "Force",
                points: 9,
                effect: "Après avoir révélé votre cadran, vous pouvez dépenser 1 #fo# pour effectuer une action #BR# ou #BO#. Puis, si vous avez effectué une action qui n’est pas sur votre barre d’action, recevez 2 marqueurs de contrainte. Dans ce cas, vous ne pouvez pas effectuer une autre action pendant votre activation.",
                restrictions: [
                    ["Base", "Small"]
                ],
                faction: ""
            },
    {
                name: "Brilliant Evasion",
                id: 77,
                slot: "Force",
                points: 2,
                effect: "Tant que vous défendez, si vous n’êtes pas dans le #bulls# de l’attaquant, vous pouvez dépenser 1 #fo# pour changer 2 de vos résultats #eye# en résultats #evd#.",
                faction: ""
            },
    {
                name: "Sense",
                id: 78,
                slot: "Force",
                points: 5,
                effect: "Pendant la phase de système, vous pouvez choisir 1 vaisseau à portée 0–1 et regarder son cadran. Si vous dépensez 1 #fo#, vous pouvez choisir un vaisseau à portée 0–3 à la place.",
                faction: ""
            },
    {
                name: "Instinctive Aim",
                id: 79,
                slot: "Force",
                points: 1,
                effect: "Tant que vous effectuez une attaque spéciale, vous pouvez dépenser 1 #fo# pour ignorer le prérequis #TL# ou #FS#.",
                faction: ""
            },
            {
                name: "Automatic Gunning System",
                id: 80,
                slot: "Calculator",
                points: 3,
                effect: "Après avoir effectué une attaque principale, vous pouvez effectuer une attaque bonus d’arme secondaire. Lors de cette attaque, vous ne pouvez pas ajouter ou modifier des dés d’attaque.",
                faction: ""
            },
             {
                name: "Advanced Networked Calculations",
                id: 81,
                slot: "Calculator",
                points: 2,
                effect: "Lorsque vous défendez ou attaquez, vous pouvez dépenser 1 marqueur de calcul d’un vaisseau allié à portée 0-2 pour changer 1 résultat #eye# en résultat #evd# ou #hit#.",
                faction: ""
            },
             {
                name: "Hyperspace Tacking Data",
                id: 82,
                slot: "Calculator",
                points: 4,
                unique: true,
                effect: "Mise en place : vous pouvez considérer votre initiative comme étant 0 ou 7. A la fin de la phase de mise en place, tous les vaisseaux alliés à portée 0-2 de vous gagne 1 marqueur de calcul. Ces marqueurs de calcul ne sont pas nettoyés en phase de fin.",
                faction: ""
            },
             {
                name: "Advanced Flight Computer",
                id: 83,
                slot: "Calculator",
                points: 3,
                unique: true,
                effect: "Mise en place : vous commencez en réserve. Vous pouvez dépenser entre 0 et 2 charges.<br>Au début de la phase de planification, s’il n’y a plus de charge sur cette carte, retournez là face cachée, puis placez votre vaisseau intégralement à portée 1 d’un bord de l’aire de jeu.",
                faction: ""
            },
             {
                name: "Encrypter",
                id: 84,
                slot: "Calculator",
                points: 5,
                effect: "Vous pouvez coordonner jusqu’à la portée 3. Lorsque vous coordonnez un vaisseau, recevez 1 marqueur de calcul.",
                faction: ""
            },
    
    //################################################################# REBEL ALLIANCE ##########################""""
    
            {
                name: "R2-D2",
                id: 85,
                unique: true,
                slot: "Astromech",
                points: 8,
                charge: 2,
                effect: "Après votre activation, vous pouvez dépenser 1 #ch# et gagner 1 marqueur d’épuisement pour réparer 1 carte de dégât, récupérer 1 bouclier ou retirer 1 engin à portée 0–1.",
                faction: ["Rebel_Alliance","Jedi_Order","Resistance"]
            },
             {
                name: "R5-D8",
                id: 86,
                unique: true,
                slot: "Astromech",
                points: 6,
                charge: 3,
                effect: "Action : dépensez 1 #ch# pour réparer 1 carte de dégât face cachée.<br>Action : réparez 1 carte de dégât Vaisseau face visible.",
                faction: ["Rebel_Alliance"]
            },
             {
                name: "C-3PO",
                id: 87,
                slot: "Crew",
                points: 7,
                unique: true,
                effect: "Avant de lancer les dés de défense, vous pouvez dépenser 1 marqueur de calcul pour dire à voix haute un nombre supérieur ou égal à 1. Dans ce cas et si vous obtenez exactement cette quantité de résultats #evd# sur votre lancer, ajoutez 1 résultat #evd#.",
                faction: ["Rebel_Alliance","New_Republic","Resistance"]
                /*modifier_func: (stats) ->
                    stats.actions.push 'Calculate' if 'Calculate' not in stats.actions*/
            },
             {
                name: "Cassian Andor",
                id: 88,
                slot: "Crew",
                points: 5,
                unique: true,
                effect: "Pendant la phase de système, vous pouvez choisir 1 vaisseau ennemi à portée 1–2, dire à voix haute une direction et une vitesse. Votre adversaire vous confirme si la direction puis la vitesse sont correctes. Si les 2 sont correctes, vous pouvez modifier votre cadran de manœuvre.",
                faction: ["Rebel_Alliance"]
            },
            {
                name: "Leia Organa",
                id: 89,
                slot: "Crew",
                points: 6,
                unique: true,
                faction: ["Rebel_Alliance"],
                charge: 3,
                effect: "Au début de la phase de fin, vous pouvez dépenser 3 #ch#. Chaque vaisseau allié peut retirer 1 marqueur de stress.",
                recurring: 1
            },
            {
                name: "R2-D2 -Crew-",
                id: 90,
                slot: "Crew",
                points: 8,
                unique: true,
                effect: "Pendant la phase de dénouement, si vous êtes endommagé et n’êtes pas protégé, vous pouvez lancer 1 dé d’attaque pour récupérer 1 bouclier. Sur un résultat #hit#, exposez 1 de vos cartes de dégât.",
                faction: ["Rebel_Alliance"]
            },
            {
                name: "Bistan",
                id: 91,
                slot: "Gunner",
                points: 7,
                unique: true,
                effect: "Après avoir effectué une attaque principale, si vous êtes concentré, vous pouvez gagner 1 marqueur d’épuisement pour effectuer une attaque bonus.",
                faction: ["Rebel_Alliance"]
            },
    {
                name: "Luke Skywalker",
                id: 92,
                slot: "Gunner",
                points: 8,
                force: 1,
                unique: true,
                effect: "Tant que vous effectuez une attaque qui n’est pas une attaque #Farc#, vous pouvez dépenser 1 #fo#. Si vous le faites, lancez 1 dé d’attaque supplémentaire.",
                faction: ["Rebel_Alliance"],
                /*modifier_func: (stats) ->
                    stats.force += 1*/
            },
    {
                name: "Selfless",
                id: 93,
                slot: "Talent",
                points: 3,
                effect: "Tant qu’un autre vaisseau allié à portée 0–1 défend, avant l’étape « Neutraliser les résultats », si vous êtes dans l’arc de l’attaque, vous pouvez subir 1 dégât #crit# pour annuler 1 résultat #crit#.",
                faction: ["Rebel_Alliance"]
            },
     {
                name: "K-2SO",
                id: 94,
                slot: "Crew",
                faction: ["Rebel_Alliance"],
                effect: "Pendant la phase de système, vous pouvez choisir un vaisseau allié à portée 0–3. Ce vaisseau gagne 1 marqueur de calcul et 1 marqueur de stress.<br>Ajoute l’action #CA# et #JM#",
                unique: true,
                points: 7,
                /*modifier_func: (stats) ->
                    stats.actions.push 'Calculate'
                    stats.actions.push 'Jam'*/
            }
            ,
    
    //########################################################IMPERIAL ACADEMY
    
            {
                name: "Darth Vader",
                id: 95,
                slot: "Crew",
                points: 10,
                force: 1,
                unique: true,
                effect: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau dans votre arc de tir à portée 0–2 et dépenser 1 #fo#. Dans ce cas, ce vaisseau subit 1 dégât #hit# sauf s’il choisit de retirer 1 marqueur vert.",
                faction: ["Imperial_Academy"],
                /*modifier_func: (stats) ->
                    stats.force += 1*/
            },
    {
                name: "Grand Moff Tarkin",
                id: 96,
                slot: "Crew",
                points: 3,
                unique: true,
                faction: ["Imperial_Academy"],
                effect: "Pendant la phase de système, vous pouvez dépenser 2 #ch#. Dans ce cas, chaque vaisseau allié peut verrouiller un vaisseau que vous avez verrouillé.",
                charge: 2,
                recurring: 1
            },
     {
                name: "Ruthless",
                id: 97,
                slot: "Talent",
                effect: "Tant que vous effectuez une attaque, vous pouvez choisir un autre vaisseau allié à portée 0–1 du défenseur. Dans ce cas, le vaisseau choisi subit 1 dégât #hit# et vous pouvez changer 1 de vos résultats de dé en un résultat #hit#.",
                points: 1,
                faction: ["Imperial_Academy"]
            },
    {
                name: "Precision Ion Engines",
                id: 98,
                slot: "Modification",
                points: 2,
                effect: "Avant d’exécuter une manœuvre de Virage Koiogran à vitesse 1–3, vous pouvez dépenser 1 #ch# pour exécuter cette manœuvre en tant que #Sleft# ou #Sright# de même vitesse à la place, et vice-versa.",
                charge: 2,
                faction: "",
                restrictions: [
                    ["Keyword", "TIE"]
                ]
            },
            {
                name: "Twin Ion Engine Mk2",
                id: 99,
                slot: "Modification",
                points: 2,
                effect: "Après avoir effectué une manœuvre rouge, vous pouvez dépenser 1 #ch# pour effectuer un tonneau.",
                restrictions: [
                    ["Keyword", "TIE"]
                ],
                faction: ""
            },
            {
                name: "Lightweight Frame",
                id: 100,
                slot: "Modification",
                points: 3,
                effect: "Lorsqu’un adversaire vous attaque, il peut modifier un résultat #hit# en #crit# . Si vous deviez lancer 2 dés de défense ou moins, vous pouvez lancer 1 dé de défense supplémentaire.",
                restrictions: [
                    ["Keyword", "TIE"]
                ],
                faction: ""
            },
     {
                name: "Migs Mayfeld",
                id: 101,
                points: 5,
                slot: "Gunner",
                unique: true,
                effect: "Après avoir effectué une attaque qui n’est pas une attaque #Barc# , vous pouvez effectuer une attaque bonus #Barc# AFFUTEE.",
                faction: ["Pirates_and_Smugglers","Imperial_Academy"]
            },
            {
                name: "Imperial Gunner",
                id: 102,
                points: 5,
                slot: "Gunner",
                effect: "Après avoir effectué une attaque qui a échoué, le défenseur gagne un marqueur d’épuisement.",
                faction: ["Imperial_Academy","ISB","Imperial_Elite_Forces"]
            }
    ,
    
    //######################################################BOUNTY_HUNTERS_Guild
    
            {
                name: "Boba Fett",
                id: 103,
                slot: "Crew",
                points: 2,
                unique: true,
                effect: "Mise en Place : débutez en réserve.<br>À la fin de la Mise en place, placez-vous à portée 0 d’un obstacle et au-delà de la portée 3 de tout vaisseau ennemi",
                faction: ["Bounty_Hunters_Guild"]
            },
             {
                name: "Cad Bane",
                id: 104,
                slot: "Crew",
                points: 3,
                unique: true,
                effect: "Avant ou après avoir largué ou lancé un engin, vous pouvez effectuer une action d’accélération rouge.",
                faction: ["Bounty_Hunters_Guild"]
            },
            {
                name: "4-LOM",
                id: 105,
                slot: "Crew",
                points: 4,
                unique: true,
                effect: "Tant que vous effectuez une attaque, après avoir lancé les dés d’attaque, vous pouvez nommer un type de marqueur vert. Dans ce cas, gagnez 2 marqueurs ioniques et, pendant cette attaque, le défenseur ne peut pas dépenser de marqueur du type nommé.",
                faction: ["Bounty_Hunters_Guild"]
            },
            {
                name: "IG-88D",
                id: 106,
                slot: "Crew",
                points: 4,
                unique: true,
                effect: "Vous avez la capacité de pilote de chaque autre vaisseau allié qui possède la capacité IG-2000.<br>Après avoir effectué une action #CA#, gagnez 1 marqueur de calcul.",
                faction: ["Bounty_Hunters_Guild"],
                /*modifier_func: (stats) ->
                    stats.actions.push 'Calculate' if 'Calculate' not in stats.actions*/
    
            },
            {
                name: "Zuckuss",
                id: 107,
                slot: "Crew",
                points: 4,
                unique: true,
                effect: "",
                faction: ["Bounty_Hunters_Guild"]
            },
     {
                name: "Bossk",
                id: 108,
                slot: "Gunner",
                points: 4,
                unique: true,
                effect: "Après avoir effectué une attaque principale ratée, si vous n’êtes pas stressé, vous devez recevoir 1 marqueur de stress pour effectuer une attaque principale bonus contre la même cible",
                faction: ["Bounty_Hunters_Guild"]
            },
     {
                name: "Dengar",
                id: 109,
                slot: "Gunner",
                points: 6,
                unique: true,
                faction: ["Bounty_Hunters_Guild"],
                effect: "Après avoir défendu, si l’attaquant est dans votre arc de tir, vous pouvez dépenser 1 #ch# . Dans ce cas, lancez 1 dé d’attaque sauf si l’attaquant choisit de retirer 1 marqueur vert. Sur un résultat #hit# ou #crit#, l’attaquant subit 1 dégât #hit#.",
                recurring: 1,
                charge: 1
    
            },
     {
                name: "Greedo",
                id: 110,
                slot: "Gunner",
                points: 1,
                unique: true,
                faction: ["Bounty_Hunters_Guild"],
                charge: 1,
                effect: "", 
                recurring: 1
            },
     {
                name: "Tracking Fob",
                id: 111,
                points: 3,
                slot: "Illicit",
                max_per_squad: 3,
                effect: "Mise en Place : avant de placer les forces, choisissez un adversaire ; il assigne l'état 'Désigné pour Mourir' à 1 de ses vaisseaux. Il doit l'assigner à un vaisseau limité, si possible.<br>Vous ignorez les restrictions de portée lorsque vous verrouillez le vaisseau qui a l'état Désigné pour Mourir.",
                faction: ["Bounty_Hunters_Guild"],
                /*applies_condition: '''Marked for Elimination'''.canonicalize()*/
            },
            {
                name: "Notorious",
                id: 112,
                points: 4,
                charge: 2,
                faction: ["Bounty_Hunters_Guild"],
                recurring: 1,
                effect: "", 
                slot: "Talent"
            },
    {
                name: "Hotshot Tail Blaster",
                id: 113,
                points: 2,
                attackb: 2,
                range: [0,1],
                charge: 2,
                slot: "Illicit",
                faction: ["Bounty_Hunters_Guild","Hutt_Cartel","Crime_Syndicates"],
                effect: "Cette attaque peut être effectuée à portée 0.<br>Attaque #Barc#: dépensez 1 #ch#",
                restrictions: [
                    ["Base", "Medium", "Large"]
                ]
            },
    
    //###################################################MANDALORIAN_CLANS
             {
                name: "Fearless",
                id: 114,
                slot: "Talent",
                points: 3,
                effect: "Lorsque vous effectuez une attaque principale (Farc), si la portée de l’attaque est 1 et que vous êtes dans le (Farc) du défenseur, vous pouvez modifier l’un de vos résultats en #hit#.",
                faction: ["Mandalorian_Clans"]
            },
     {
                name: "Bo-Katan Kryze",
                id: 115,
                points: 3,
                slot: "Crew",
                unique: true,
                effect: "Après avoir effectué une attaque, si le défenseur a été détruit, tous les vaisseaux alliés à portée 0-2 de vous peuvent retirer un marqueur orange ou rouge.",
                faction: ["Mandalorian_Clans"]
            },
     {
                name: "Fenn Rau",
                id: 116,
                points: 5,
                slot: "Crew",
                unique: true,
                effect: "", 
                faction: ["Mandalorian_Clans","Phoenix_Cell"]
            },
    {
                name: "Gar Saxon",
                id: 117,
                points: 6,
                slot: "Crew",
                faction: ["Mandalorian_Clans"],
                effect: "Tant que vous effectuez l'action #TL# vous pouvez choisir uniquement un objet dans votre #Farc# ou votre #Barc# tant que vous effectuez une attaque principale, si le défenseur est dans votre #Farc# ou votre #Barc#, vous pouvez retirer 1 marqueur rouge ou orange du défenseur pour lancer 1 de supplémentaire, pour un maximum de 4.",
                unique: true
            },
            {
                name: "Korkie Kryze",
                id: 118,
                points: 5,
                slot: "Crew",
                faction: ["Mandalorian_Clans"],
                effect: "Après qu’un vaisseau allié dans votre #F180# à portée 1-2 est devenu le défenseur, vous pouvez lui transférer 1 marqueur vert. Tant qu'un vaisseau allié dans votre #F180# à portée 1-2 défend, si vous gênez l'attaque, le défenseur lance 1 dé de défense supplémentaire.",
                unique: true
            },
     {
                name: "Pre Vizsla",
                id: 119,
                points: 5,
                slot: "Crew",
                faction: ["Mandalorian_Clans"],
                effect: "ACTION : Déployez un Super Commando qui est arrimé avec vous.<br>ACTION : Choisissez un Super Commando à portée 0-3. Il peut alors accélérer, même partiellement.",
                unique: true,
                /*modifier_func: (stats) ->
                    stats.actions.push 'Coordinate' if 'Coordinate' not in stats.actions*/
            },
    {
                name: "Ursa Wren",
                id: 120,
                points: 6,
                slot: "Crew",
                unique: true,
                effect: "Vous pouvez maintenir 2 verrouillages qui doivent être sur des objets différents. Lorsqu’un vaisseau allié à portée 0-3 est verrouillé par un ennemi, vous pouvez effectuer une action de verrouillage.",
                faction: ["Mandalorian_Clans"]
            },
    {
                name: "Tiber Saxon",
                id: 121,
                points: 6,
                charge: 2,
                recurring: 1,
                slot: "Gunner",
                effect: "Après avoir effectué une attaque à portée 1-2 qui a touché, si le défenseur n’a pas de carte de dégât face visible, vous pouvez dépenser 1 ou plusieurs charges. Pour chaque charge dépensée, le défenseur gagne un marqueur de contrainte.",
                faction: ["Mandalorian_Clans"],
                unique: true
            },
     {
                name: "Beskar Reinforced Plating",
                id: 122,
                points: 3,
                slot: "Modification",
                charge: 3,
                effect: "Tant que vous défendez si l'attaquant est dans votre #Farc# , avant qu'une carte de dégât ne vous soit attribuée face visible, vous pouvez dépenser 1 #ch# pour recevoir cette carte face cachée à la place ou dépenser 2 #ch# pour la défausser.",
                faction: ["Mandalorian_Clans"]
                
            },
            {
                name: "Mandalorian Optics",
                id: 123,
                points: 3,
                slot: "Modification",
                charge: 2,
                effect: "Pendant la phase de système, vous pouvez dépenser 1#ch# pour verrouiller un objet dans votre #Farc#. Tant que vous effectuez une attaque principale, si vous avez un verrouillage sur le défenseur, ignorez les obstacles au-delà de la portée O qui gênent cette attaque.",
                faction: ["Mandalorian_Clans"]
            },
    
    
    //###########################################################PIRATES_AND_Smugglers
            {
                name: "Chewbacca",
                id: 124,
                slot: "Gunner",
                points: 7,
                unique: true,
                faction: ["Pirates_and_Smugglers"],
                effect: "Après avoir effectué une attaque, vous pouvez dépenser 2#ch# pour effectuer une attaque améliorée bonus depuis un arc de tir qui n’a pas encore été utilisé ce tour.",
                charge: 2,
                recurring: 1
            },
    {
                name: "Cikatro Vizago",
                id: 125,
                slot: "Crew",
                points: 1,
                unique: true,
                effect: "Pendant la phase de dénouement, vous pouvez choisir 2 améliorations #ill# équipant des vaisseaux alliés à portée 0–2. Dans ce cas, vous pouvez échanger ces améliorations. Fin de Partie : remettez toutes les améliorations #ill# sur leurs vaisseaux d’origine.",
                faction: ["Pirates_and_Smugglers"],
            },
    {
                name: "L3-37",
                id: 126,
                slot: "Crew",
                points: 4,
                unique: true,
                effect: "Mise en Place : équipez-vous avec cette face visible.<br>Tant que vous défendez, vous pouvez retourner cette carte. Dans ce cas, l’attaquant doit relancer tous les dés d’attaque.<br>Face retournée : Si vous n’êtes pas protégé, diminuez la difficulté de vos manœuvres #Lbank# et #Rbank#.",
                faction: ["Pirates_and_Smugglers"]
            },
     {
                name: "Han Solo",
                id: 127,
                slot: "Gunner",
                points: 9,
                unique: true,
                effect: "Avant de vous engager, vous pouvez effectuer une action #FS# rouge.",
                faction: ["Pirates_and_Smugglers"],
            },
      {
                name: "Rigged Cargo Chute",
                id: 128,
                slot: "Illicit",
                points: 4,
                charge: 1,
                effect: "Action : dépensez 1 #ch#. Larguez 1 cargaison égarée en utilisant le gabarit 1#straight#.",
                faction: ["Pirates_and_Smugglers","Hutt_Cartel","Crime_Syndicates"]
                /*applies_condition: '''Loose Cargo'''.canonicalize()
                restrictions: [
                    ["Base", "Medium", "Large"]
                ]*/
            },
    {
                name: "Havoc",
                id: 129,
                slot: "Title",
                points: 0,
                unique: true,
                faction: ["Pirates_and_Smugglers"],
                ship: "Scurrg H-6 Bomber",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "Retire en emplacement #crew#. Ajoute #sensor# et #astromech#. Ajoute 5 points de Loadout et augmente le coût du vaisseau de 1",
                unequips_upgrades: [
                    'Crew'
                ],
                also_occupies_upgrades: [
                    'Crew'
                ],
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: 'Sensor'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: 'Astromech'
                    }
                ]
            },
    {
                name: "Lando Calrissian",
                id: 130,
                slot: "Crew",
                points: 2,
                unique: true,
                effect: "Action : lancez 2 dés de défense. Pour chaque résultat #eye# obtenu, gagnez 1 marqueur de concentration. Pour chaque résultat #evd# obtenu, gagnez 1 marqueur d’évasion. Si les deux résultats sont vierges, le joueur adverse choisit concentration ou évasion. Vous gagnez 1 marqueur de ce type.",
                faction: ["Pirates_and_Smugglers"]
            },
     {
                name: "Hondo Ohnaka",
                id: 131,
                unique: true,
                slot: "Crew",
                points: 5,
                effect: "Action : choisissez 2 vaisseaux à portée 1–3 de vous qui sont alliés entre eux. Coordonnez l’un des vaisseaux choisis, puis brouillez l’autre, en ignorant les restrictions de portée.",
                faction: ["Pirates_and_Smugglers"]
            },
    
            //##Migs Mayfeld id 101
    
    {
                name: "Smuggling Compartment",
                id: 132,
                slot: "Modification",
                points: 2,
                faction: ["Pirates_and_Smugglers"],
                effect: "Gagnez 1 autre emplacement #mod# et un emplacement #ill#",
                restrictions: [
                    ["Base", "Medium", "Large"]
                ],
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: 'Modification'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: 'Illicit'
                    }
                ]
            },
            {
                name: "Cunning",
                id: 133,
                slot: "Talent",
                points: 3,
                effect: "Après avoir traversé un obstacle ou un engin, gagnez 1 marqueur de concentration et retirez un marqueur rouge.",
                faction: ["Pirates_and_Smugglers"]
            },
            {
                name: "Millenium Falcon",
                id: 134,
                slot: "Title",
                points: 0,
                unique: true,
                faction: ["Pirates_and_Smugglers"],
                ship: "YT-1300 Light Freighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "Retire en emplacement #missile# et la capacité 'Vaisseau-Mère'. Ajoute #sensor# et #calculator#. Ajoute 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    'Missile'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: 'Sensor'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: 'Calculator'
                    }
                ]
            }
    
    ]   
    
    
 let shipquantity = 0; //compteur qui ne sert pas à compter mais à numéroter les id des menus
 let ship_available = [];
 let ship_selected_list = ["","","","","","","",""]; // Dans ce tableau, on va stocker la valeur sélectée de chaque menu_ship
 let pilot_id_available =[];
 let factionno1 = "";
 let factionno2 = "";
 let factionno3 = "";
 let totalcostvalue = 0;

 let pilot_selected_list = ["","","","","","","",""]; // Dans ce tableau, on va stocker la valeur sélectée de chaque menu_pilot
 let pilot_list = [{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0}]; //Dans ce tableau, on stocker les objets pilotes
 
 let overCostTab = [0,0,0,0,0,0,0,0]; //Cette variable va stocker les augmentations des couts des pilotes dûs aux emports d'upgrade supérieurs au loadout de base
 
 function populateMenu(menuId, options) {//fonction qui permet de remplir un menu avec un tableau d'options
    const menu = document.getElementById(menuId);
    menu.innerHTML="";
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        menu.appendChild(optionElement);
    });
}
function factionnameget() {//permet d'afficher les logos de faction et leur nom
    factionno1 = document.querySelector(".faction1").textContent;
    factionno2 = document.querySelector(".faction2").textContent;
    factionno3 = document.querySelector(".faction3").textContent;
    if (factionno1 === "") {
        factionno1 = "nofaction"
    };
    if (factionno2 === "") {
        factionno2 = "nofaction"
    };
    if (factionno3 === "") {
        factionno3 = "nofaction"
    };
}
function select_ship_list() {//permet de remplir la liste des vaisseaux disponibles

    factionnameget();
    
    ship_available = ["Select Ship"];
    for (let i = 0; i < ships.length; i++) {
        if (ships[i]["factions"].includes(factionno1) || ships[i]["factions"].includes(factionno2) || ships[i]["factions"].includes(factionno3)) {
        ship_available.push(ships[i]["name"]) ;
        }
       
        };
        
};
function removeElementsByClass() {//permet de supprimer tous les éléments qui possèdent la class "new". Utile lorsqu'on change de leader
            // Get all elements with the specified class name
            const elements = document.getElementsByClassName("new");
        
            // Convert HTMLCollection to array for easier manipulation
            const elementsArray = Array.from(elements);
        
            // Remove each element from its parent node
            elementsArray.forEach(element => {
                element.parentNode.removeChild(element);
            });
            shipquantity = 0;
            costpilots = [0,0,0,0,0,0,0,0];
}       
function populateShip0() {//fonction qu'on déclenche sur le premier pilote. On pourrait s'en passer en ne créant pas de vaisseau par défaut
    select_ship_list();
    populateMenu("menu_ship_0",ship_available);
    select_pilot_list("0");
    removeElementsByClass();
} 
function select_pilot_list(x) {//permet de remplir la liste des pilotes disponibles correspondant au vaisseau sélectionné
    factionnameget();
    let pilot_available = ["Select Pilot"];
    ship_selected_list[x] = document.getElementById("menu_ship_"+ x).value;
    for (let i= 0; i< pilots.length; i++) {
    if ((pilots[i]["faction"]===factionno1 || pilots[i]["faction"]===factionno2 || pilots[i]["faction"]===factionno3) && (pilots[i]["ship"]===ship_selected_list[x])) {
        pilot_available.push(pilots[i]["name"] + ' (' + pilots[i]["points"] + ')' );//on ajoute dans la liste le nom des pilotes avec leur cout
        
    }
   } 
   populateMenu("menu_pilot_" + x, pilot_available);
  
  
}
function dataGetFromPilot(y) { //On prend le pilote et on recopie l'objet pilote dans pilot_list, et on va incrémenter le totalcost
    pilot_selected_list[y] = document.getElementById("menu_pilot_"+y).value;
    costcount = document.getElementById("shipcost"+y);
    loadoutcount= document.getElementById("shiploadout"+y);
    totalcount= document.getElementById("totalcost");
    totalcostvalue = 0; //remise à 0 sinon il s'incrémente à chaque saisie de pilote
    for (i=0; i<pilots.length; i++) {
        let endIndex = pilot_selected_list[y].indexOf(" ("); // Find the index of " (" 
        let nomPilote = pilot_selected_list[y].substring(0, endIndex); //On retire les parenthèses avec le cout pour pouvoir faire une comparaison stricte dans la ligne d'après
        if (nomPilote===pilots[i]["name"]) {
            pilot_list[y] = pilots[i];
            costcount.textContent = pilots[i]["points"];
            loadoutcount.textContent = pilots[i]["loadout"];
            for (j=0; j<8 ;j++) {
                totalcostvalue = totalcostvalue + pilot_list[j]["points"];
                };
         totalcount.textContent = totalcostvalue;   
         return
            }
    }
}
function displayslots(y) { //crée les menus de slot et contient l'écoute des modification des slots
     // Get the parent element
    shipslot = document.getElementById('shipslots'+y);
     // Clear any existing child elements
     shipslot.innerHTML = '';
      // Create and append new select elements
    for (i = 0 ; i<pilot_list[y]["slots"].length; i++)  {
    slotmenu = document.createElement('select');
    slotmenu.setAttribute('id', 'slot'+y+"_"+i);
    slotmenu.setAttribute('class', 'slotElement');
    shipslot.appendChild(slotmenu);
    slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            updateUpgradeCount(y);
            updateTotalCost();
            displayDescriptionUpgrade(event);
    }) 
               
    }  
}
function updateUpgradeCount(y) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
    let newLoadoutValue = pilot_list[y]["loadout"];
    costcount = document.getElementById("shipcost"+y);
    loadoutcount= document.getElementById("shiploadout"+y);
    for (k=0; k<pilot_list[y]["slots"].length ; k++) {
        let slotMenu = document.getElementById('slot'+y+"_"+k);
        let slotString = slotMenu.value;
        let startIndex = slotString.indexOf("(") + 1; // Find the index of '(' and add 1 to skip '('
        let endIndex = slotString.indexOf(")"); // Find the index of ')'
        let extractedString = slotString.substring(startIndex, endIndex); // Extract the substring between '(' and ')'
        let upgValue = parseInt(extractedString) || 0; //transforme la chaine en entier, et si elle est vide elle renvoir 0 (utile pour toutes les string type <crew> qui ne contiennent pas de parenthèses)
        newLoadoutValue = newLoadoutValue - upgValue;
    }
    loadoutcount.textContent = newLoadoutValue;
    if ((newLoadoutValue<0) && (newLoadoutValue>-6) ) {
        overCostTab[y]=1;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y]; //Si le loadout value est entre -1 et -5 compris, le cost du pilote augmente de 1
        
        return;
    }
    if ((newLoadoutValue<-5) && (newLoadoutValue>-11) ) {
        overCostTab[y]=2;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y] ; //Si le loadout value est entre -6 et -9 compris, le cost du pilote augmente de 2
        
        return;
    }
    if ((newLoadoutValue<-10) && (newLoadoutValue>-16) ) {
        overCostTab[y]=3;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y] ; //Si le loadout value est entre -10 et -15 compris, le cost du pilote augmente de 3
        
        return;
    }
    if ((newLoadoutValue<-15) && (newLoadoutValue>-21) ) {
        overCostTab[y]=4;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y]; //Si le loadout value est entre -16 et -20 compris, le cost du pilote augmente de 4
        
        return;
    }
    if ((newLoadoutValue<-20) && (newLoadoutValue>-26) ) {
        overCostTab[y]=5;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y] ; //Si le loadout value est entre -21 et -25 compris, le cost du pilote augmente de 5
        
        return;
    }
    if ((newLoadoutValue<-25) && (newLoadoutValue>-31) ) {
        overCostTab[y]=6;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y] ; 
        
        return;
     }
    if ((newLoadoutValue<-30) && (newLoadoutValue>-36) ) {
        overCostTab[y]=7;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y] ; 
        
        return;
    }
    if ((newLoadoutValue<-35) && (newLoadoutValue>-41) ) {
        overCostTab[y]=8;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y] ; 
        
        return;
    }
    if ((newLoadoutValue<-40) && (newLoadoutValue>-46) ) {
        overCostTab[y]=9;
        costcount.textContent = pilot_list[y]["points"] + '+' + overCostTab[y];
        
        return; 
    }

}
function updateTotalCost() {
    totalcostvalue = 0 ;
    for (j=0; j<8; j++){
        totalcostvalue = totalcostvalue + pilot_list[j]["points"] + overCostTab[j];
    }
    totalcount= document.getElementById("totalcost");
    totalcount.textContent = totalcostvalue; 
}



function upgradeListGet(y) { //va chercher les options pour populate les menus de slots crées avec displaylots()
for (i=0 ; i<pilot_list[y]["slots"].length;i++) {
    let slotlist =[];
    slotlist.push("<"+pilot_list[y]["slots"][i]+">");
    for (k=0 ; k<upgrades.length ; k++) {
        if ((pilot_list[y]["slots"][i]===upgrades[k]["slot"]) && ((upgrades[k]["faction"]==="")||(upgrades[k]["faction"].includes(factionno1))||(upgrades[k]["faction"].includes(factionno2))||(upgrades[k]["faction"].includes(factionno3)))) {
            slotlist.push(upgrades[k]["name"] + ' (' + upgrades[k]["points"] + ')' ); //on ajoute dans le menu slotlist le nom de l'upgrade suivi de son cout entre parenthèses
            
        }

    }      
    populateMenu('slot'+y+'_'+i,slotlist);
}
}

function add_ship() {//fonction qui permet d'ajouter un nouveau vaisseau. S'active via le bouton Addship
    shipquantity++;
    let numero = String(shipquantity);
    const squad = document.getElementById("squad");
    let newpara = document.createElement('p');
    let newdiv = document.createElement('div');
    let newship = document.createElement('select');
    let newpilot = document.createElement('select');
    let newslots = document.createElement('div');
    let newcost = document.createElement('div');
    let newloadout = document.createElement('div');
    newpara.setAttribute('class','new');
    newdiv.setAttribute('id','ship'+numero);
    newdiv.setAttribute('class','ship');
    newship.setAttribute('id','menu_ship_'+numero );
    newship.setAttribute('class','menu shipmenu' );
    newpilot.setAttribute('id','menu_pilot_'+numero);
    newpilot.setAttribute('class','menu shipmenu pilotmenu');
    newslots.setAttribute('id','shipslots'+numero);
    newslots.setAttribute('class','slot');
    newcost.setAttribute('id','shipcost'+numero);
    newcost.setAttribute('class','count cost');
    newloadout.setAttribute('id','shiploadout'+numero);
    newloadout.setAttribute('class','count loadout');

    squad.appendChild(newpara);
    newpara.appendChild(newdiv);
    newdiv.appendChild(newship);
    newdiv.appendChild(newpilot);
    newpara.appendChild(newslots);
    newdiv.appendChild(newcost);
    newdiv.appendChild(newloadout);
    
    populateMenu("menu_ship_"+numero, ship_available);
    //ajout de l'écoute d'un input sur le nouveau menu newship
    newship.addEventListener('input', function() {
        select_pilot_list(numero);
    }) ;
    newpilot.addEventListener('input', function() {
        dataGetFromPilot(numero);
        displayslots(numero)  ;
        upgradeListGet(numero);
        displayDescriptionPilot(numero);
    });  
   

}
function displayDescriptionPilot(i) { //permet d'afficher la capacité du pilote en bas de page
    description_upg_pil_Field=document.getElementById("descript_upg");
    description_upg_pil_Field.innerHTML="";
    description_upg_pil_Field.textContent = pilot_list[i]["ability"];

}
function displayDescriptionUpgrade(event){ //permet d'afficher l'effet de l'amélioration sélectionée
    description_upg_pil_Field=document.getElementById("descript_upg");
    description_upg_pil_Field.innerHTML="";
    
    for (k=0; k<upgrades.length; k++){
        if (event.target.value.slice(0, -4) === upgrades[k]["name"]) { //il faut pas oublier de virer les (x) dans les menus
            description_upg_pil_Field.textContent = upgrades[k]["effect"];
            return
        }
}
}



//On écoute les changements sur selection leader pour "populate" le menu ship0
leaderselect = document.getElementById("menu_leader");
leaderselect.addEventListener("input", populateShip0); 

//on écoute les changements sur sélection du premier vaisseau et pilote. On aurait pu ne pas faire une exception du premier vaisseau, mais j'ai la flemme
shipselect0 = document.getElementById("menu_ship_0");
shipselect0.addEventListener("input",function() {
    select_pilot_list("0");
});
pilotselect0 = document.getElementById("menu_pilot_0");
pilotselect0.addEventListener("input",function() {
   dataGetFromPilot("0");
   displayslots("0");
   upgradeListGet("0");
   displayDescriptionPilot("0")
});
   



//permet d'associer la fonction add_ship au bouton addship
const addMenuButton = document.getElementById("addshipbutton");
addMenuButton.addEventListener('click', add_ship);







 
 
    //##############################################################PHOENIX_Cell
 /*
others = [
 {
            name: "Sabine Wren (TIE Fighter)"
            id: 13
            unique: true
            xwsship: true
            faction: "Rebel_Alliance"
            ship: "TIE/ln Fighter"
            skill: 3
            points: 2
            loadout: 3
            keyword: ["Spectre", "Mandalorian"]
            slots: [
                "Talent"
                "Modification"
            ]
        },
        {
            name: "Ezra Bridger (TIE Fighter)"
            id: 14
            unique: true
            faction: "Rebel_Alliance"
            ship: "TIE/ln Fighter"
            skill: 3
            force: 1
            points: 3
            loadout: 6
            keyword: ["Light Side","Spectre"]
            slots: [
                "Force"
                "Crew"
                "Modification"
            ]
        },
        {
            name: '"Zeb" Orrelios (TIE Fighter)'
            id: 15
            unique: true
            faction: "Rebel_Alliance"
            ship: "TIE/ln Fighter"
            skill: 2
            points: 3
            loadout: 8
            keyword: ["Spectre"]
            slots: [
                "Crew"
                "Modification"
            ]
        },
        {
            name: "Captain Rex"
            id: 16
            unique: true
            faction: "Rebel_Alliance"
            ship: "TIE/ln Fighter"
            skill: 2
            points: 3
            loadout: 8
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Talent"
                "Modification"
            ]
            applies_condition: 'Suppressive Fire'.canonicalize()
        },
         {
            name: "Phoenix Squadron Pilot"
            id: 53
            faction: "Rebel_Alliance"
            ship: "RZ-1 A-wing"
            skill: 1
            points: 4
            loadout: 3
            slots: [
                "Talent"
                "Configuration"
            ]
        },
        {
            name: "Hera Syndulla (VCX-100)"
            id: 61
            unique: true
            faction: "Rebel_Alliance"
            ship: "VCX-100 Light Freighter"
            skill: 5
            points: 7
            loadout: 20
            keyword: ["Spectre"]
            slots: [
                "Talent"
                "Sensor"
                "Turret"
                "Torpedo"
                "Crew"
                "Crew"
                "Gunner"
                "Modification"
                "Title"
            ]
        },
        {
            name: "Kanan Jarrus"
            id: 62
            unique: true
            faction: "Rebel_Alliance"
            ship: "VCX-100 Light Freighter"
            skill: 3
            keyword: ["Light Side", "Jedi", "Spectre"]
            force: 2
            points: 7
            loadout: 20
            slots: [
                "Force"
                "Sensor"
                "Turret"
                "Torpedo"
                "Crew"
                "Crew"
                "Gunner"
                "Modification"
                "Title"
            ]
        },
        {
            name: '"Chopper"'
            id: 63
            unique: true
            faction: "Rebel_Alliance"
            ship: "VCX-100 Light Freighter"
            skill: 2
            points: 6
            loadout: 14
            keyword: ["Droid","Spectre"]
            slots: [
                "Sensor"
                "Turret"
                "Torpedo"
                "Crew"
                "Crew"
                "Gunner"
                "Modification"
                "Title"
            ]
        },
        {
            name: "Lothal Rebel"
            id: 64
            faction: "Rebel_Alliance"
            ship: "VCX-100 Light Freighter"
            skill: 2
            points: 7
            loadout: 8
            slots: [
                "Turret"
                "Torpedo"
                "Gunner"
            ]
        },
        {
            name: "Hera Syndulla"
            id: 65
            unique: true
            faction: "Rebel_Alliance"
            ship: "Attack Shuttle"
            skill: 5
            points: 4
            loadout: 9
            keyword: ["Spectre"]
            slots: [
                "Talent"
                "Turret"
                "Crew"
                "Modification"
                "Title"
            ]
        },
        {
            name: "Sabine Wren"
            id: 66
            unique: true
            faction: "Rebel_Alliance"
            ship: "Attack Shuttle"
            skill: 3
            points: 4
            loadout: 6
            keyword: ["Mandalorian","Spectre"]
            slots: [
                "Talent"
                "Turret"
                "Crew"
                "Modification"
                "Title"
            ]
        },
        {
            name: "Ezra Bridger"
            id: 67
            unique: true
            faction: "Rebel_Alliance"
            ship: "Attack Shuttle"
            skill: 3
            keyword: ["Light Side","Spectre"]
            force: 1
            points: 4
            loadout: 7
            slots: [
                "Force"
                "Turret"
                "Crew"
                "Modification"
                "Title"
            ]
        },

        {
            name: '"Zeb" Orrelios'
            id: 68
            unique: true
            faction: "Rebel_Alliance"
            ship: "Attack Shuttle"
            skill: 2
            points: 3
            loadout: 10
            keyword: ["Spectre"]
            slots: [
                "Talent"
                "Turret"
                "Crew"
                "Modification"
                "Title"
            ]
        },
        {
            name: "Fenn Rau (Sheathipede)"
            id: 69
            unique: true
            faction: "Rebel_Alliance"
            ship: "Sheathipede-Class Shuttle"
            skill: 6
            points: 5
            loadout: 10
            keyword: ["Mandalorian","Spectre"]
            slots: [
                "Talent"
                "Crew"
                "Astromech"
                "Modification"
                "Title"
            ]
        },
        {
            name: "Ezra Bridger (Sheathipede)"
            id: 70
            unique: true
            faction: "Rebel_Alliance"
            ship: "Sheathipede-Class Shuttle"
            skill: 3
            force: 1
            points: 4
            loadout: 6
            keyword: ["Light Side","Spectre"]
            slots: [
                "Force"
                "Crew"
                "Astromech"
                "Modification"
                "Title"
            ]
        },
        {
            name: '"Zeb" Orrelios (Sheathipede)'
            id: 71
            unique: true
            faction: "Rebel_Alliance"
            ship: "Sheathipede-Class Shuttle"
            skill: 2
            points: 3
            loadout: 3
            keyword: ["Spectre"]
            slots: [
                "Talent"
                "Crew"
                "Astromech"
                "Modification"
                "Title"
            ]
        },
        {
            name: "AP-5"
            id: 72
            unique: true
            faction: "Rebel_Alliance"
            ship: "Sheathipede-Class Shuttle"
            skill: 1
            points: 3
            loadout: 5
            keyword: ["Droid","Spectre"]
            slots: [
                "Crew"
                "Modification"
                "Astromech"
                "Title"
            ]
        },

//##################################################################"CIS





//###################################################################RESISTANCE





//######################################################################FIRST_ORDER





//######################################################################IMPERIAL_ELITE_FORCES





//########################################################################PARTISANS

{
            name: "Edrio Two Tubes"
            id: 8
            unique: true
            faction: "Partisans"
            ship: "T-65 X-wing"
            skill: 2
            points: 4
            loadout: 10
            slots: [
                "Missile"
                "Illicit"
                "Configuration"
            ]
        },
        
        {
            name: "Leevan Tenza"
            id: 10
            unique: true
            faction: "Partisans"
            ship: "T-65 X-wing"
            skill: 3
            points: 4
            loadout: 8
            slots: [
                "Talent"
                "Missile"
                "Astromech"
                "Illicit"
                "Configuration"
            ]
        },
        
        
        {
            name: "Kullbee Sperado"
            id: 12
            unique: true
            faction: "Partisans"
            ship: "T-65 X-wing"
            skill: 4
            points: 4
            loadout: 7
            keyword: ["Partisan"]
            slots: [
                "Talent"
                "Missile"
                "Astromech"
                "Illicit"
                "Configuration"
            ]
        },
{
            name: "Magva Yarro"
            id: 34
            unique: true
            faction: "Partisans"
            ship: "UT-60D U-wing"
            skill: 3
            points: 5
            loadout: 14
            keyword: ["Partisans"]
            slots: [
                "Talent"
                "Sensor"
                "Crew"
                "Crew"
                "Illicit"
                "Modification"
                "Configuration"
            ]
        },
        {
            name: "Saw Gerrera"
            id: 35
            unique: true
            faction: "Partisans"
            ship: "UT-60D U-wing"
            skill: 4
            points: 5
            loadout: 18
            keyword: ["Partisans"]
            slots: [
                "Talent"
                "Sensor"
                "Crew"
                "Crew"
                "Illicit"
                "Modification"
                "Configuration"
            ]
        },
        {
            name: "Benthic Two Tubes"
            id: 36
            unique: true
            faction: "Partisans"
            ship: "UT-60D U-wing"
            skill: 2
            points: 5
            loadout: 16
            keyword: ["Partisans"]
            slots: [
                "Talent"
                "Sensor"
                "Crew"
                "Crew"
                "Illicit"
                "Modification"
                "Configuration"
            ]
        },
{
            name: "Wullffwarro"
            id: 58
            unique: true
            faction: "Partisans"
            ship: "Auzituck Gunship"
            skill: 4
            points: 5
            loadout: 11
            slots: [
                "Talent"
                "Crew"
                "Crew"
                "Modification"
            ]
        },
        {
            name: "Lowhhrick"
            id: 59
            unique: true
            faction: "Partisans"
            ship: "Auzituck Gunship"
            skill: 3
            points: 5
            loadout: 10
            slots: [
                "Talent"
                "Crew"
                "Crew"
                "Modification"
            ]
        },
        {
            name: "Kashyyyk Defender"
            id: 60
            faction: "Partisans"
            ship: "Auzituck Gunship"
            skill: 1
            points: 5
            loadout: 6
            slots: [
                "Crew"
                "Modification"
            ]
        }

//########################################################################""#JEDI_ORDER






//###########################################################################NEW_REPUBLIC

 {
            name: "Miranda Doni"
            id: 17
            unique: true
            faction: "Rebel_Alliance"
            ship: "BTL-S8 K-wing"
            skill: 4
            points: 5
            loadout: 14
            slots: [
                "Torpedo"
                "Missile"
                "Gunner"
                "Crew"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Esege Tuketu"
            id: 18
            unique: true
            faction: "Rebel_Alliance"
            ship: "BTL-S8 K-wing"
            skill: 3
            points: 5
            loadout: 16
            slots: [
                "Torpedo"
                "Missile"
                "Missile"
                "Gunner"
                "Crew"
                "Device"
                "Modification"
            ]
        }
        {
            name: "empty"
            id: 19
            skip: true
        }
        {
            name: "Warden Squadron Pilot"
            id: 20
            faction: "Rebel_Alliance"
            ship: "BTL-S8 K-wing"
            skill: 2
            points: 5
            loadout: 7
            slots: [
                "Torpedo"
                "Missile"
                "Gunner"
                "Device"
                "Device"
            ]
        }
  {
            name: "Corran Horn"
            id: 21
            unique: true
            faction: "Rebel_Alliance"
            ship: "E-wing"
            skill: 5
            points: 6
            loadout: 20
            slots: [
                "Talent"
                "Tech"
                "Sensor"
                "Sensor"
                "Torpedo"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Gavin Darklighter"
            id: 22
            unique: true
            faction: "Rebel_Alliance"
            ship: "E-wing"
            skill: 4
            points: 5
            loadout: 18
            slots: [
                "Talent"
                "Tech"
                "Sensor"
                "Torpedo"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Rogue Squadron Escort"
            id: 23
            faction: "Rebel_Alliance"
            ship: "E-wing"
            skill: 4
            points: 5
            loadout: 12
            slots: [
                "Sensor"
                "Torpedo"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Knave Squadron Escort"
            id: 24
            faction: "Rebel_Alliance"
            ship: "E-wing"
            skill: 2
            points: 5
            loadout: 14
            slots: [
                "Tech"
                "Torpedo"
                "Astromech"
                "Modification"
            ]
        }



//#########################################################################""SHADOW_SPECIALISTS

{
            name: "Crymorah Goon"
            id: 88
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 1
            points: 4
            loadout: 4
            slots: [
                "Turret"
                "Missile"
                "Device"
                "Illicit"
            ]
        }


//###########################################################################HUTT_Cartel

{
            name: "Kavil"
            id: 85
            unique: true
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 5
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Turret"
                "Torpedo"
                "Missile"
                "Astromech"
                "Device"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Drea Renthal"
            id: 86
            unique: true
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 4
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Turret"
                "Torpedo"
                "Missile"
                "Astromech"
                "Device"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Hired Gun"
            id: 87
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 2
            points: 4
            loadout: 6
            slots: [
                "Turret"
                "Torpedo"
                "Missile"
                "Device"
                "Illicit"
            ]
        }


//###########################################################################"#AGENTS_OF_CHAOS






//######################################################################GALACTIC_Senate




//######################################################################IMPERIAL_REMNANTS






//##########################################################################BLACK_Sun





//#############################################################################ISB






//#############################################################################COLOSSUS





//###########################################################################CRIME_Syndicates
    ]





        
       
       
      
       
        
      
        
        
      
        
      
       
        {
            name: "Airen Cracken"
            id: 54
            unique: true
            faction: "Rebel_Alliance"
            ship: "Z-95-AF4 Headhunter"
            skill: 5
            points: 4
            loadout: 11
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Modification"
            ]
        }
        {
            name: "Lieutenant Blount"
            id: 55
            unique: true
            faction: "Rebel_Alliance"
            ship: "Z-95-AF4 Headhunter"
            skill: 4
            points: 3
            loadout: 11
            slots: [
                "Talent"
                "Talent"
                "Modification"
            ]
        }
        
        
        
        
        
       
        
        
        {
            name: "Ibtisam"
            id: 80
            unique: true
            faction: "Rebel_Alliance"
            ship: "ARC-170 Starfighter"
            skill: 3
            points: 4
            loadout: 9
            slots: [
                "Talent"
                "Torpedo"
                "Gunner"
                "Astromech"
                "Modification"
            ]
        }
       
        
        
       
       
        
        
        {
            name: "Koshka Frost"
            id: 106
            unique: true
            faction: "Scum and Villainy"
            ship: "Firespray-class Patrol Craft"
            skill: 3
            points: 7
            loadout: 16
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Missile"
                "Crew"
                "Device"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Krassis Trelix"
            id: 107
            unique: true
            faction: "Scum and Villainy"
            ship: "Firespray-class Patrol Craft"
            skill: 3
            points: 7
            loadout: 18
            slots: [
                "Talent"
                "Canon"
                "Canon"
                "Missile"
                "Crew"
                "Device"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Bounty Hunter"
            id: 108
            faction: "Scum and Villainy"
            ship: "Firespray-class Patrol Craft"
            skill: 2
            points: 7
            loadout: 10
            keyword: ["Bounty Hunter"]
            slots: [
                "Canon"
                "Missile"
                "Device"
                "Illicit"
            ]
        }
        
        
        {
            name: "Gand Findsman"
            id: 111
            faction: "Scum and Villainy"
            ship: "G-1A Starfighter"
            skill: 1
            points: 5
            loadout: 3
            keyword: ["Bounty Hunter"]
            slots: [
                "Illicit"

            ]
        }
       
        {
            name: "Dace Bonearm"
            id: 113
            unique: true
            faction: "Scum and Villainy"
            ship: "HWK-290 Light Freighter"
            skill: 4
            charge: 3
            recurring: 1
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Crew"
                "Device"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Torkil Mux"
            id: 114
            unique: true
            faction: "Scum and Villainy"
            ship: "HWK-290 Light Freighter"
            skill: 2
            points: 5
            loadout: 8
            slots: [
                "Crew"
                "Device"
                "Illicit"
                "Modification"
                "Modification"
            ]
        }
        
        
        
        {
            name: "Contracted Scout"
            id: 118
            faction: "Scum and Villainy"
            ship: "JumpMaster 5000"
            skill: 2
            points: 5
            loadout: 4
            slots: [
                "Torpedo"
                "Canon"
                "Illicit"

            ]
        }
        {
            name: "Talonbane Cobra"
            id: 119
            unique: true
            faction: "Scum and Villainy"
            ship: "Kihraxz Fighter"
            skill: 5
            points: 5
            loadout: 12
            slots: [
                "Talent"
                "Missile"
                "Illicit"
                "Illicit"
                "Modification"
                "Modification"
            ]
        }
       
        
       
        {
            name: "Black_Sun Ace"
            id: 123
            faction: "Scum and Villainy"
            ship: "Kihraxz Fighter"
            skill: 3
            points: 4
            loadout: 3
            slots: [
                "Talent"
            ]
        }
        {
            name: "Cartel Marauder"
            id: 124
            faction: "Scum and Villainy"
            ship: "Kihraxz Fighter"
            skill: 2
            points: 4
            loadout: 7
            slots: [
                "Illicit"
            ]
        }
        {
            name: "Asajj Ventress"
            id: 125
            unique: true
            faction: "Scum and Villainy"
            ship: "Lancer-Class Pursuit Craft"
            skill: 4
            points: 8
            loadout: 20
            force: 2
            keyword: ["Bounty Hunter","Dark Side"]
            slots: [
                "Force"
                "Talent"
                "Crew"
                "Illicit"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Ketsu Onyo"
            id: 126
            unique: true
            faction: "Scum and Villainy"
            ship: "Lancer-Class Pursuit Craft"
            skill: 5
            points: 7
            loadout: 15
            keyword: ["Bounty Hunter","Mandalorian"]
            slots: [
                "Talent"
                "Crew"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Sabine Wren (Scum)"
            id: 127
            unique: true
            faction: "Scum and Villainy"
            ship: "Lancer-Class Pursuit Craft"
            skill: 3
            points: 6
            loadout: 9
            keyword: ["Bounty Hunter","Mandalorian"]
            slots: [
                "Talent"
                "Crew"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Shadowport Hunter"
            id: 128
            faction: "Scum and Villainy"
            ship: "Lancer-Class Pursuit Craft"
            skill: 2
            points: 6
            loadout: 6
            keyword: ["Bounty Hunter"]
            slots: [
                "Illicit"
                "Illicit"
            ]
        }
        {
            name: "Torani Kulda"
            id: 129
            unique: true
            faction: "Scum and Villainy"
            ship: "M12-L Kimogila Fighter"
            skill: 4
            points: 5
            loadout: 10
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Torpedo"
                "Missile"
                "Astromech"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Dalan Oberos"
            id: 130
            unique: true
            faction: "Scum and Villainy"
            ship: "M12-L Kimogila Fighter"
            skill: 3
            charge: 2
            points: 5
            loadout: 12
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Torpedo"
                "Missile"
                "Astromech"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Cartel Executioner"
            id: 131
            faction: "Scum and Villainy"
            ship: "M12-L Kimogila Fighter"
            skill: 3
            points: 5
            loadout: 3
            slots: [
                "Missile"
            ]
        }
        
        {
            name: "Genesis Red"
            id: 133
            unique: true
            faction: "Scum and Villainy"
            ship: "M3-A Interceptor"
            skill: 4
            points: 4
            loadout: 14
            slots: [
                "Talent"
                "Illicit"
                "Modification"
                "HardpointShip"
            ]
        }
        
        {
            name: "Quinn Jast"
            id: 135
            unique: true
            faction: "Scum and Villainy"
            ship: "M3-A Interceptor"
            skill: 3
            points: 3
            loadout: 12
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Modification"
                "HardpointShip"
            ]
        }
       
       
        {
            name: "Sunny Bounder"
            id: 138
            unique: true
            faction: "Scum and Villainy"
            ship: "M3-A Interceptor"
            skill: 1
            points: 3
            loadout: 8
            slots: [
                "Modification"
                "HardpointShip"
            ]
        }
        {
            name: "Cartel Spacer"
            id: 139
            faction: "Scum and Villainy"
            ship: "M3-A Interceptor"
            skill: 1
            points: 3
            loadout: 4
            slots: [
                "Modification"
                "HardpointShip"
            ]
        }
        {
            name: "Constable Zuvio"
            id: 140
            unique: true
            faction: "Scum and Villainy"
            ship: "Quadrijet Transfer Spacetug"
            skill: 4
            points: 4
            loadout: 13
            slots: [
                "Talent"
                "Tech"
                "Device"
                "Device"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Sarco Plank"
            id: 141
            unique: true
            faction: "Scum and Villainy"
            ship: "Quadrijet Transfer Spacetug"
            skill: 2
            points: 4
            loadout: 6
            keyword: ["Bounty Hunter"]
            slots: [
                "Tech"
                "Crew"
                "Device"
                "Illicit"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Unkar Plutt"
            id: 142
            unique: true
            faction: "Scum and Villainy"
            ship: "Quadrijet Transfer Spacetug"
            skill: 2
            points: 4
            loadout: 7
            slots: [
                "Tech"
                "Crew"
                "Device"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Jakku Gunrunner"
            id: 143
            faction: "Scum and Villainy"
            ship: "Quadrijet Transfer Spacetug"
            skill: 1
            points: 4
            loadout: 4
            slots: [
                "Device"
                "Illicit"
                "Illicit"
            ]
        }
       
        {
            name: "Guri"
            id: 147
            unique: true
            faction: "Scum and Villainy"
            ship: "StarViper-class Attack Platform"
            skill: 5
            points: 7
            loadout: 20
            keyword: ["Droid"]
            slots: [
                "Talent"
                "Tech"
                "Torpedo"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Prince Xizor"
            id: 148
            unique: true
            faction: "Scum and Villainy"
            ship: "StarViper-class Attack Platform"
            skill: 4
            points: 5
            loadout: 7
            slots: [
                "Talent"
                "Tech"
                "Torpedo"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Dalan Oberos (StarViper)"
            id: 149
            unique: true
            faction: "Scum and Villainy"
            ship: "StarViper-class Attack Platform"
            skill: 4
            points: 5
            loadout: 10
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Tech"
                "Torpedo"
                "Modification"
            ]
        }
        {
            name: "Black_Sun Assassin"
            id: 150
            faction: "Scum and Villainy"
            ship: "StarViper-class Attack Platform"
            skill: 3
            points: 5
            loadout: 6
            slots: [
                "Tech"
            ]
        }
        {
            name: "Black_Sun Enforcer"
            id: 151
            faction: "Scum and Villainy"
            ship: "StarViper-class Attack Platform"
            skill: 2
            points: 5
            loadout: 6
            slots: [
                "Tech"
            ]
        }
        {
            name: "Moralo Eval"
            id: 152
            unique: true
            faction: "Scum and Villainy"
            ship: "YV-666 Light Freighter"
            skill: 4
            charge: 2
            points: 7
            loadout: 20
            slots: [
                "Talent"
                "Canon"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Illicit"
                "Modification"
            ]
        }
        
        {
            name: "Latts Razzi"
            id: 154
            unique: true
            faction: "Scum and Villainy"
            ship: "YV-666 Light Freighter"
            skill: 3
            points: 6
            loadout: 22
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Trandoshan Slaver"
            id: 155
            faction: "Scum and Villainy"
            ship: "YV-666 Light Freighter"
            skill: 2
            points: 6
            loadout: 6
            slots: [
                "Canon"
                "Missile"
                "Modification"
            ]
        }
        
        {
            name: "Black_Sun Soldier"
            id: 158
            faction: "Scum and Villainy"
            ship: "Z-95-AF4 Headhunter"
            skill: 3
            points: 3
            loadout: 4
            slots: [
                "Illicit"
                "Modification"
            ]
        }
        
        
        {
            name: "Major Vynder"
            id: 161
            unique: true
            faction: "Imperial_Academy"
            ship: "Alpha-Class Star Wing"
            skill: 4
            points: 5
            loadout: 16
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Lieutenant Karsabi"
            id: 162
            unique: true
            faction: "Imperial_Academy"
            ship: "Alpha-Class Star Wing"
            skill: 3
            points: 5
            loadout: 14
            slots: [
                "Talent"
                "Sensor"
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Rho Squadron Pilot"
            id: 163
            faction: "Imperial_Academy"
            ship: "Alpha-Class Star Wing"
            skill: 3
            points: 5
            loadout: 9
            slots: [
                "Talent"
                "Sensor"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Nu Squadron Pilot"
            id: 164
            faction: "Imperial_Academy"
            ship: "Alpha-Class Star Wing"
            skill: 2
            points: 5
            loadout: 7
            slots: [
                "Sensor"
                "Canon"
                "Modification"
                "Configuration"
            ]
        }
       
        {
            name: "Omicron Group Pilot"
            id: 168
            faction: "Imperial_Academy"
            ship: "Lambda-class T-4a Shuttle"
            skill: 1
            points: 5
            loadout: 8
            slots: [
                "Sensor"
                "Canon"
                "Modification"
            ]
        }
        {
            name: "Grand Inquisitor"
            id: 169
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE Advanced v1"
            skill: 5
            points: 5
            loadout: 10
            force: 2
            keyword: ["Dark Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Sensor"
                "Missile"
            ]
        }
        {
            name: "Seventh Sister"
            id: 170
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE Advanced v1"
            skill: 4
            points: 4
            loadout: 6
            force: 2
            keyword: ["Dark Side"]
            slots: [
                "Force"
                "Talent"
                "Sensor"
                "Missile"
            ]
        }
        {
            name: "Inquisitor"
            id: 171
            faction: "Imperial_Academy"
            ship: "TIE Advanced v1"
            skill: 3
            points: 4
            loadout: 5
            force: 1
            keyword: ["Dark Side"]
            slots: [
                "Force"
                "Sensor"
            ]
        }
        {
            name: "Baron of the Empire"
            id: 172
            faction: "Imperial_Academy"
            ship: "TIE Advanced v1"
            skill: 3
            points: 4
            loadout: 4
            slots: [
                "Talent"
                "Sensor"
                "Missile"
            ]
        }
        
        {
            name: "Soontir Fel"
            id: 179
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/in Interceptor"
            skill: 6
            points: 5
            loadout: 10
            slots: [
                "Talent"
                "Talent"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Turr Phennir"
            id: 180
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/in Interceptor"
            skill: 4
            points: 4
            loadout: 9
            slots: [
                "Talent"
                "Talent"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Saber Squadron Ace"
            id: 181
            faction: "Imperial_Academy"
            ship: "TIE/in Interceptor"
            skill: 4
            points: 4
            loadout: 3
            slots: [
                "Talent"
                "Configuration"
            ]
        }
        
        {
            name: "Major Vermeil"
            id: 183
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE Reaper"
            skill: 4
            points: 5
            loadout: 16
            slots: [
                "Talent"
                "Crew"
                "Crew"
                "Modification"
            ]
        }
        {
            name: "Captain Feroph"
            id: 184
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE Reaper"
            skill: 3
            points: 4
            loadout: 5
            slots: [
                "Talent"
                "Crew"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Vizier"'
            id: 185
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE Reaper"
            skill: 2
            points: 4
            loadout: 12
            slots: [
                "Crew"
                "Crew"
                "Modification"
            ]
        }
        {
            name: "Scarif Base Pilot"
            id: 186
            faction: "Imperial_Academy"
            ship: "TIE Reaper"
            skill: 1
            points: 4
            loadout: 6
            slots: [
                "Crew"
                "Modification"
            ]
        }
        {
            name: "Lieutenant Kestal"
            id: 187
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ag Aggressor"
            skill: 4
            points: 5
            loadout: 19
            slots: [
                "Talent"
                "Turret"
                "Missile"
                "Missile"
                "Gunner"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Double Edge"'
            id: 188
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ag Aggressor"
            skill: 2
            points: 4
            loadout: 13
            slots: [
                "Talent"
                "Turret"
                "Missile"
                "Missile"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: "Onyx Squadron Scout"
            id: 189
            faction: "Imperial_Academy"
            ship: "TIE/ag Aggressor"
            skill: 3
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Turret"
                "Missile"
                "Gunner"
            ]
        }
        {
            name: "Sienar Specialist"
            id: 190
            faction: "Imperial_Academy"
            ship: "TIE/ag Aggressor"
            skill: 2
            points: 4
            loadout: 8
            slots: [
                "Turret"
                "Missile"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: '"Redline"'
            id: 191
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ca Punisher"
            skill: 5
            points: 7
            loadout: 25
            slots: [
                "Sensor"
                "Torpedo"
                "Missile"
                "Missile"
                "Gunner"
                "Device"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Deathrain"'
            id: 192
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ca Punisher"
            skill: 4
            points: 6
            loadout: 20
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Missile"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Cutlass Squadron Pilot"
            id: 193
            faction: "Imperial_Academy"
            ship: "TIE/ca Punisher"
            skill: 2
            points: 5
            loadout: 6
            slots: [
                "Sensor"
                "Torpedo"
                "Missile"
                "Gunner"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Colonel Vessery"
            id: 194
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            skill: 4
            points: 7
            loadout: 10
            slots: [
                "Talent"
                "Sensor"
                "Canon"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Countess Ryad"
            id: 195
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            skill: 4
            points: 7
            loadout: 12
            slots: [
                "Talent"
                "Sensor"
                "Sensor"
                "Canon"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Rexler Brath"
            id: 196
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            skill: 5
            points: 7
            loadout: 13
            slots: [
                "Talent"
                "Sensor"
                "Canon"
                "Missile"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Onyx Squadron Ace"
            id: 197
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            skill: 4
            points: 7
            loadout: 6
            slots: [
                "Talent"
                "Sensor"
                "Canon"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Delta Squadron Pilot"
            id: 198
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            skill: 1
            points: 7
            loadout: 4
            slots: [
                "Sensor"
                "Canon"
                "Configuration"
            ]
        }
        {
            name: '"Whisper"'
            id: 199
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ph Phantom"
            skill: 5
            points: 5
            loadout: 8
            slots: [
                "Talent"
                "Sensor"
                "Gunner"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Echo"'
            id: 200
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ph Phantom"
            skill: 4
            points: 5
            loadout: 9
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: "Sigma Squadron Ace"
            id: 201
            faction: "Imperial_Academy"
            ship: "TIE/ph Phantom"
            skill: 4
            points: 6
            loadout: 9
            slots: [
                "Talent"
                "Sensor"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: "Imdaar Test Pilot"
            id: 202
            faction: "Imperial_Academy"
            ship: "TIE/ph Phantom"
            skill: 3
            points: 5
            loadout: 6
            slots: [
                "Sensor"
                "Gunner"
                "Modification"
            ]
        }
       
        {
            name: '"Countdown"'
            id: 209
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/sk Striker"
            skill: 4
            points: 4
            loadout: 11
            slots: [
                "Talent"
                "Talent"
                "Gunner"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Pure Sabacc"'
            id: 210
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/sk Striker"
            skill: 4
            points: 4
            loadout: 9
            slots: [
                "Talent"
                "Gunner"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Duchess"'
            id: 211
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/sk Striker"
            skill: 5
            points: 5
            loadout: 18
            slots: [
                "Talent"
                "Talent"
                "Gunner"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Black Squadron Scout"
            id: 212
            faction: "Imperial_Academy"
            ship: "TIE/sk Striker"
            skill: 3
            points: 4
            loadout: 5
            slots: [
                "Talent"
                "Gunner"
                "Device"
            ]
        }
        {
            name: "Planetary Sentinel"
            id: 213
            faction: "Imperial_Academy"
            ship: "TIE/sk Striker"
            skill: 1
            points: 4
            loadout: 4
            slots: [
                "Gunner"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Rear Admiral Chiraneau"
            id: 214
            unique: true
            faction: "Imperial_Academy"
            ship: "VT-49 Decimator"
            skill: 5
            points: 7
            loadout: 20
            slots: [
                "Talent"
                "Torpedo"
                "Crew"
                "Crew"
                "Crew"
                "Gunner"
                "Device"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Captain Oicunn"
            id: 215
            unique: true
            faction: "Imperial_Academy"
            ship: "VT-49 Decimator"
            skill: 3
            points: 7
            loadout: 19
            slots: [
                "Talent"
                "Talent"
                "Torpedo"
                "Crew"
                "Crew"
                "Gunner"
                "Device"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Patrol Leader"
            id: 216
            faction: "Imperial_Academy"
            ship: "VT-49 Decimator"
            skill: 2
            points: 7
            loadout: 12
            slots: [
                "Torpedo"
                "Crew"
                "Gunner"
                "Device"
                "Modification"
            ]
        }
        
        {
            name: "Iden Versio"
            id: 218
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 4
            charge: 1
            points: 4
            loadout: 8
            slots: [
                "Talent"
                "Talent"
                "Canon"
                "Missile"
                "Modification"
            ]
        }
        
        {
            name: '"Scourge" Skutu'
            id: 220
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 5
            points: 3
            loadout: 3
            slots: [
                "Talent"
            ]
        }
        {
            name: '"Wampa"'
            id: 221
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 1
            recurring: 1
            charge: 1
            points: 3
            loadout: 5
            slots: [
                "Talent"
                "Modification"
            ]
        }
        {
            name: "Del Meeko"
            id: 222
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 4
            points: 3
            loadout: 10
            slots: [
                "Talent"
                "Canon"
                "Modification"
            ]
        }
        {
            name: "Gideon Hask"
            id: 223
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 4
            points: 3
            loadout: 12
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Seyn Marana"
            id: 224
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 4
            points: 3
            loadout: 12
            slots: [
                "Talent"
                "Canon"
                "Modification"
            ]
        }
        {
            name: "Valen Rudor"
            id: 225
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 3
            points: 3
            loadout: 5
            slots: [
                "Talent"
                "Talent"
            ]
        }
        {
            name: '"Night Beast"'
            id: 226
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 2
            points: 3
            loadout: 4
            slots: [
                "Talent"
                "Talent"
            ]
        }
        {
            name: "Black Squadron Ace"
            id: 227
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 3
            points: 2
            loadout: 0
            slots: [
            ]
        }
        {
            name: "Obsidian Squadron Pilot"
            id: 228
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 2
            points: 2
            loadout: 0
            slots: [
            ]
        }
        
        {
            name: "Spice Runner"
            id: 230
            faction: "Scum and Villainy"
            ship: "HWK-290 Light Freighter"
            skill: 1
            points: 3
            loadout: 4
            slots: [
                "Device"
                "Illicit"
            ]
        }
        {
            name: "Poe Dameron"
            id: 231
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 6
            points: 7
            loadout: 25
            charge: 1
            recurring: 1
            slots: [
                "Talent"
                "Astromech"
                "Tech"
                "Torpedo"
                "Modification"
                "Modification"
                "Configuration"
                "Title"
                "HardpointShip"
            ]
        }
        {
            id: 232 # duplicate, has been removed
            skip: true
        }
        {
            name: '"Midnight"'
            id: 233
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 6
            points: 3
            loadout: 7
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Longshot"'
            id: 234
            skip: true
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 3
            points: 3
            loadout: 3
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Modification"
            ]
        }
        {
            name: '"Muse"'
            id: 235
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 2
            points: 3
            loadout: 9
            slots: [
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Kylo Ren"
            id: 236
            unique: true
            faction: "First_Order"
            ship: "TIE/vn Silencer"
            skill: 5
            force: 2
            keyword: ["Dark Side"]
            points: 7
            loadout: 22
            applies_condition: '''I'll Show You the Dark Side'''.canonicalize()
            slots: [
                "Force"
                "Talent"
                "Tech"
                "Torpedo"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: '"Blackout"'
            id: 237
            unique: true
            faction: "First_Order"
            ship: "TIE/vn Silencer"
            skill: 5
            points: 5
            loadout: 12
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Torpedo"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Lieutenant Dormitz"
            id: 238
            unique: true
            faction: "First_Order"
            ship: "Upsilon-Class Command Shuttle"
            skill: 2
            points: 8
            loadout: 20
            slots: [
                "Sensor"
                "Sensor"
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Crew"
                "Canon"
                "Modification"
            ]
        }
        {
            name: "L'ulo L'ampar"
            id: 239
            unique: true
            faction: "Resistance"
            ship: "RZ-2 A-wing"
            skill: 5
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Tallissan Lintra"
            id: 240
            unique: true
            faction: "Resistance"
            ship: "RZ-2 A-wing"
            skill: 5
            charge: 1
            recurring: 1
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Talent"
                "Talent"
                "Torpedo"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "blanks"
            id: 241
            skip: true
        }
        {
            name: '"Backdraft"'
            id: 242
            unique: true
            faction: "First_Order"
            ship: "TIE/sf Fighter"
            skill: 4
            points: 4
            loadout: 5
            slots: [
                "Talent"
                "Sensor"
                "Tech"
                "Missile"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: '"Quickdraw"'
            id: 243
            unique: true
            faction: "First_Order"
            ship: "TIE/sf Fighter"
            skill: 6
            charge: 1
            recurring: 1
            points: 5
            loadout: 12
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Gunner"
                "Sensor"
                "Modification"
            ]
        }
        {
            name: "Rey"
            id: 244
            unique: true
            faction: "Resistance"
            ship: "Scavenged YT-1300"
            keyword: ["Light Side"]
            skill: 5
            points: 7
            loadout: 25
            force: 2
            slots: [
                "Force"
                "Talent"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Han Solo (Resistance)"
            id: 245
            unique: true
            faction: "Resistance"
            ship: "Scavenged YT-1300"
            skill: 6
            points: 6
            loadout: 15
            slots: [
                "Talent"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Illicit"
                "Illicit"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Chewbacca (Resistance)"
            id: 246
            unique: true
            faction: "Resistance"
            ship: "Scavenged YT-1300"
            skill: 4
            points: 6
            loadout: 18
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Captain Seevor"
            id: 247
            unique: true
            faction: "Scum and Villainy"
            ship: "Modified TIE/ln Fighter"
            skill: 3
            charge: 1
            recurring: 1
            points: 3
            loadout: 7
            slots: [
                "Talent"
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Mining Guild Surveyor"
            id: 248
            faction: "Scum and Villainy"
            ship: "Modified TIE/ln Fighter"
            skill: 2
            points: 3
            loadout: 1
            slots: [
                "Talent"
            ]
        }
        {
            name: "Ahhav"
            id: 249
            unique: true
            faction: "Scum and Villainy"
            ship: "Modified TIE/ln Fighter"
            skill: 3
            points: 3
            loadout: 8
            slots: [
                "Talent"
                "Illicit"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Finch Dallow"
            id: 250
            unique: true
            faction: "Resistance"
            ship: "MG-100 StarFortress"
            skill: 4
            points: 6
            loadout: 22
            slots: [
                "Sensor"
                "Tech"
                "Missile"
                "Crew"
                "Gunner"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Major Stridan"
            id: 251
            unique: true
            faction: "First_Order"
            ship: "Upsilon-Class Command Shuttle"
            skill: 4
            points: 7
            loadout: 13
            slots: [
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Crew"
                "Canon"
                "Sensor"
                "Modification"
            ]
        }
        {
            name: "Kare Kun"
            id: 252
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 4
            points: 4
            loadout: 8
            slots: [
                "Talent"
                "Tech"
                "Canon"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Joph Seastriker"
            id: 253
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 3
            points: 5
            loadout: 13
            slots: [
                "Talent"
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Lieutenant Bastian"
            id: 254
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 2
            points: 5
            loadout: 14
            slots: [
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Jaycris Tubbs"
            id: 255
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 1
            points: 4
            loadout: 8
            slots: [
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Black Squadron Ace (T-70)"
            id: 256
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 4
            points: 5
            loadout: 10
            slots: [
                "Talent"
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Red Squadron Expert"
            id: 257
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 3
            points: 5
            loadout: 2
            slots: [
                "Talent"
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Blue Squadron Rookie"
            id: 258
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 1
            points: 5
            loadout: 4
            slots: [
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Zeta Squadron Survivor"
            id: 259
            faction: "First_Order"
            ship: "TIE/sf Fighter"
            skill: 2
            points: 4
            loadout: 4
            slots: [
                "Talent"
                "Tech"
                "Gunner"
                "Sensor"
            ]
        }
        {
            name: "Cobalt Squadron Bomber"
            id: 260
            faction: "Resistance"
            ship: "MG-100 StarFortress"
            skill: 1
            points: 6
            loadout: 11
            slots: [
                "Sensor"
                "Tech"
                "Gunner"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "TN-3465"
            id: 261
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 2
            points: 3
            loadout: 5
            slots: [
                "Tech"
                "Modification"
            ]
        }
        {
            name: '"Scorch"'
            id: 262
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 4
            points: 3
            loadout: 6
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Modification"
            ]
        }
        {
            name: '"Longshot"'
            id: 263
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 3
            points: 3
            loadout: 8
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Modification"
            ]
        }
        {
            name: '"Static"'
            id: 264
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 4
            points: 3
            loadout: 8
            slots: [
                "Talent"
                "Talent"
                "Tech" 
                "Canon"
                "Modification"
            ]
        }
        {
            name: "Lieutenant Rivas"
            id: 265
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 1
            points: 3
            loadout: 4
            slots: [ 
                "Talent"
                "Tech" 
                "Modification"
            ]
        }
        {
            name: "Commander Malarus"
            id: 266
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 5
            points: 3
            loadout: 4
            charge: 2
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Omega Squadron Ace"
            id: 267
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 3
            points: 3
            loadout: 4
            slots: [
                "Talent"
                "Tech"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Zeta Squadron Pilot"
            id: 268
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 2
            points: 3
            loadout: 3
            slots: [
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Epsilon Squadron Cadet"
            id: 269
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 1
            points: 3
            loadout: 2
            slots: [
                "Tech"
            ]
        }
        {
            name: "Greer Sonnel"
            id: 270
            unique: true
            faction: "Resistance"
            ship: "RZ-2 A-wing"
            skill: 4
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Missile"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Zari Bangel"
            id: 271
            unique: true
            faction: "Resistance"
            ship: "RZ-2 A-wing"
            skill: 3
            points: 4
            loadout: 11
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Tech"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Darth Maul"
            id: 272
            unique: true
            faction: "Separatist Alliance"
            ship: "Sith Infiltrator"
            skill: 5
            force: 3
            keyword: ["Dark Side","Sith"]
            points: 7
            loadout: 19
            slots: [
                "Force"
                "Force"
                "Canon"
                "Torpedo"
                "Crew"
                "Crew"
                "Device"
                "Modification"
                "Title"
                "Tactical Relay"
            ]
        }
        {
            name: "Anakin Skywalker"
            id: 273
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 6
            force: 3
            points: 6
            loadout: 10
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Luminara Unduli"
            id: 274
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 4
            force: 2
            points: 4
            loadout: 7
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Barriss Offee"
            id: 275
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 4
            force: 1
            points: 4
            loadout: 9
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Ahsoka Tano"
            id: 276
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 3
            force: 2
            points: 4
            loadout: 7
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Jedi Knight"
            id: 277
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 3
            force: 1
            points: 4
            loadout: 3
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Configuration"
                "Modification"
            ]
        }
        {
            name: "Obi-Wan Kenobi"
            id: 278
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 5
            force: 3
            points: 5
            loadout: 10
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Astromech"
                "Configuration"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Trade Federation Drone"
            id: 279
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 1
            points: 2
            loadout: 0
            keyword: ["Droid"]
            slots: [
                "Configuration"
                "Modification"
            ]
        }
        {
            name: '"Sinker"'
            id: 280
            unique: true
            faction: "Galactic Republic"
            ship: "ARC-170 Starfighter"
            skill: 3
            points: 5
            loadout: 15
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Torpedo"
                "Crew"
                "Gunner"
                "Gunner"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Petty Officer Thanisson"
            id: 281
            unique: true
            faction: "First_Order"
            ship: "Upsilon-Class Command Shuttle"
            skill: 1
            points: 7
            loadout: 14
            charge: 1
            recurring: 1
            slots: [
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Crew"
                "Canon"
                "Canon"
                "Sensor"
                "Modification"
            ]
        }
        {
            name: "Captain Cardinal"
            id: 282
            unique: true
            faction: "First_Order"
            ship: "Upsilon-Class Command Shuttle"
            skill: 4
            points: 7
            loadout: 12
            charge: 2
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Crew"
                "Canon"
                "Sensor"
                "Modification"
            ]
        }
        {
            name: '"Avenger"'
            id: 283
            unique: true
            faction: "First_Order"
            ship: "TIE/vn Silencer"
            skill: 3
            points: 5
            loadout: 10
            slots: [
                "Talent"
                "Tech"
                "Torpedo"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: '"Recoil"'
            id: 284
            unique: true
            faction: "First_Order"
            ship: "TIE/vn Silencer"
            skill: 4
            points: 5
            loadout: 10
            slots: [
                "Talent"
                "Tech"
                "Torpedo"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Omega Squadron Expert"
            id: 285
            faction: "First_Order"
            ship: "TIE/sf Fighter"
            skill: 3
            points: 4
            loadout: 3
            slots: [
                "Tech"
                "Missile"
                "Gunner"
                "Sensor"
                "Modification"
            ]
        }
        {
            name: "Sienar-Jaemus Engineer"
            id: 286
            faction: "First_Order"
            ship: "TIE/vn Silencer"
            skill: 1
            points: 5
            loadout: 5
            slots: [
                "Tech"
                "Torpedo"
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "First_Order Test Pilot"
            id: 287
            faction: "First_Order"
            ship: "TIE/vn Silencer"
            skill: 4
            points: 5
            loadout: 5
            slots: [
                "Talent"
                "Tech"
                "Torpedo"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Starkiller Base Pilot"
            id: 288
            faction: "First_Order"
            ship: "Upsilon-Class Command Shuttle"
            skill: 2
            points: 7
            loadout: 8
            slots: [
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Canon"
                "Sensor"
                "Modification"
            ]
        }
        {
            name: "Lieutenant Tavson"
            id: 289
            unique: true
            faction: "First_Order"
            ship: "Upsilon-Class Command Shuttle"
            skill: 3
            charge: 2
            recurring: 1
            points: 8
            loadout: 17
            slots: [
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Canon"
                "Sensor"
                "Modification"
            ]
        }
        {
            name: '"Null"'
            id: 290
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 0
            points: 3
            loadout: 5
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Tech"
            ]
        }
        {
            name: "Cat"
            id: 291
            unique: true
            faction: "Resistance"
            ship: "MG-100 StarFortress"
            skill: 1
            points: 5
            loadout: 17
            slots: [
                "Talent"
                "Sensor"
                "Tech"
                "Crew"
                "Gunner"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Ben Teene"
            id: 292
            unique: true
            faction: "Resistance"
            ship: "MG-100 StarFortress"
            skill: 3
            points: 5
            loadout: 19
            slots: [
                "Sensor"
                "Tech"
                "Tech"
                "Crew"
                "Gunner"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
            applies_condition: 'Rattled'.canonicalize()
        }
        {
            name: "Edon Kappehl"
            id: 293
            unique: true
            faction: "Resistance"
            ship: "MG-100 StarFortress"
            skill: 3
            points: 6
            loadout: 22
            slots: [
                "Sensor"
                "Tech"
                "Canon"
                "Crew"
                "Gunner"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Vennie"
            id: 294
            unique: true
            faction: "Resistance"
            ship: "MG-100 StarFortress"
            skill: 2
            points: 6
            loadout: 18
            slots: [
                "Sensor"
                "Torpedo"
                "Crew"
                "Gunner"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Resistance Sympathizer"
            id: 295
            faction: "Resistance"
            ship: "Scavenged YT-1300"
            skill: 2
            points: 6
            loadout: 10
            slots: [
                "Talent"
                "Missile"
                "Gunner"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Jessika Pava"
            id: 296
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 3
            points: 4
            loadout: 6
            charge: 1
            recurring: 1
            slots: [
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Temmin Wexley"
            id: 297
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 4
            points: 4
            loadout: 9
            slots: [
                "Talent"
                "Tech"
                "Astromech"
                "Modification"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Nien Nunb"
            id: 298
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 5
            points: 5
            loadout: 16
            slots: [
                "Talent"
                "Tech"
                "Missile"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Ello Asty"
            id: 299
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 5
            points: 4
            loadout: 8
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Green Squadron Expert"
            id: 300
            faction: "Resistance"
            ship: "RZ-2 A-wing"
            skill: 3
            points: 4
            loadout: 2
            slots: [
                "Talent"
                "Talent"
                "Tech"
            ]
        }
        {
            name: "Blue Squadron Recruit"
            id: 301
            faction: "Resistance"
            ship: "RZ-2 A-wing"
            skill: 1
            points: 4
            loadout: 4
            slots: [
                "Talent"
                "Tech"
            ]
        }
        {
            name: "Foreman Proach"
            id: 302
            unique: true
            faction: "Scum and Villainy"
            ship: "Modified TIE/ln Fighter"
            skill: 4
            points: 3
            loadout: 6
            slots: [
                "Talent"
                "Talent"
                "Modification"
            ]
        }
        {
            name: "Overseer Yushyn"
            id: 303
            unique: true
            faction: "Scum and Villainy"
            ship: "Modified TIE/ln Fighter"
            skill: 2
            loadout: 7
            charge: 1
            recurring: 1
            points: 3
            slots: [
                "Talent"
                "Modification"
            ]
        }
        {
            name: "Mining Guild Sentry"
            id: 304
            faction: "Scum and Villainy"
            ship: "Modified TIE/ln Fighter"
            skill: 1
            points: 3
            loadout: 3
            slots: [
                "Illicit"
            ]
        }
        {
            name: "General Grievous"
            id: 305
            faction: "Separatist Alliance"
            ship: "Belbullab-22 Starfighter"
            unique: true
            skill: 4
            points: 5
            loadout: 11
            slots: [
                "Talent"
                "Missile"
                "Modification"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Wat Tambor"
            id: 306
            faction: "Separatist Alliance"
            ship: "Belbullab-22 Starfighter"
            unique: true
            skill: 3
            points: 4
            loadout: 9
            slots: [
                "Talent"
                "Tactical Relay"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Feethan Ottraw Autopilot"
            id: 307
            faction: "Separatist Alliance"
            ship: "Belbullab-22 Starfighter"
            skill: 1
            points: 4
            loadout: 5
            keyword: ["Droid"]
            slots: [
                "Tactical Relay"
                "Modification"
            ]
        }
        {
            name: "Captain Sear"
            id: 308
            faction: "Separatist Alliance"
            ship: "Belbullab-22 Starfighter"
            unique: true
            skill: 2
            points: 5
            loadout: 17
            slots: [
                "Tactical Relay"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Precise Hunter"
            id: 309
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 3
            points: 3
            loadout: 8
            max_per_squad: 3
            keyword: ["Droid"]
            slots: [
                "Canon"
                "Configuration"
                "Modification"
            ]
        }
        {
            name: "Haor Chall Prototype"
            id: 310
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 1
            points: 2
            loadout: 4
            max_per_squad: 2
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "DFS-081"
            id: 311
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 3
            points: 2
            loadout: 7
            unique: true
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Plo Koon"
            id: 312
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 5
            force: 2
            points: 5
            loadout: 14
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Talent"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Saesee Tiin"
            id: 313
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 4
            force: 2
            points: 4
            loadout: 8
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Mace Windu"
            id: 314
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 4
            force: 3
            points: 4
            loadout: 7
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Force"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: '"Kickback"'
            id: 315
            unique: true
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 4
            points: 3
            loadout: 8
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Modification"
            ]
        }
        {
            name: '"Odd Ball"'
            id: 316
            unique: true
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 5
            points: 4
            loadout: 16
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Torpedo"
                "Missile"
                "Modification"
            ]
        }
        {
            name: '"Swoop"'
            id: 317
            unique: true
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 3
            points: 4
            loadout: 13
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Missile"
                "Modification"
            ]
        }
        {
            name: '"Axe"'
            id: 318
            unique: true
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 3
            points: 3
            loadout: 8
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Modification"
            ]
        }
        {
            name: '"Tucker"'
            id: 319
            unique: true
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 2
            points: 4
            loadout: 13
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Blue Squadron Protector"
            id: 320
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 3
            points: 4
            loadout: 4
            keyword: ["Clone"]
            slots: [
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Gold Squadron Trooper"
            id: 321
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 2
            points: 4
            loadout: 6
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Anakin Skywalker (N-1 Starfighter)"
            id: 322
            unique: true
            faction: "Galactic Republic"
            ship: "Naboo Royal N-1 Starfighter"
            skill: 4
            force: 1
            points: 5
            loadout: 20
            keyword: ["Light Side"]
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Astromech"
            ]
        }
        {
            name: "Bravo Flight Officer"
            id: 323
            faction: "Galactic Republic"
            ship: "Naboo Royal N-1 Starfighter"
            skill: 2
            points: 4
            loadout: 8
            slots: [
                "Sensor"
                "Torpedo"
                "Astromech"
            ]
        }
        {
            name: "Techno Union Bomber"
            id: 324
            faction: "Separatist Alliance"
            ship: "Hyena-class Droid Bomber"
            skill: 1
            points: 3
            loadout: 6
            keyword: ["Droid"]
            slots: [
                "Torpedo"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Bombardment Drone"
            id: 325
            faction: "Separatist Alliance"
            ship: "Hyena-class Droid Bomber"
            skill: 3
            max_per_squad: 3
            keyword: ["Droid"]
            points: 3
            loadout: 8
            slots: [
                "Device"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "DBS-404"
            id: 326
            unique: true
            faction: "Separatist Alliance"
            ship: "Hyena-class Droid Bomber"
            skill: 4
            points: 4
            loadout: 10
            keyword: ["Droid"]
            slots: [
                "Torpedo"
                "Missile"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Separatist Bomber"
            id: 327
            faction: "Separatist Alliance"
            ship: "Hyena-class Droid Bomber"
            skill: 3
            points: 3
            loadout: 4
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "DBS-32C"
            id: 328
            unique: true
            faction: "Separatist Alliance"
            ship: "Hyena-class Droid Bomber"
            skill: 3
            points: 4
            loadout: 16
            keyword: ["Droid"]
            slots: [
                "Sensor"
                "Tactical Relay"
                "Modification"
                "Configuration"
            ]
            ship_override:
                actions: [
                    "Calculate",
                    "Lock",
                    "Barrel Roll",
                    "R-> Lock"
                    "R-Jam"
   ,             ]
        }
        {
            name: "Baktoid Prototype"
            id: 329
            max_per_squad: 2
            faction: "Separatist Alliance"
            ship: "Hyena-class Droid Bomber"
            skill: 1
            points: 3
            loadout: 9
            keyword: ["Droid"]
            slots: [
                "Sensor"
                "Missile"
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Naboo Handmaiden"
            id: 330
            max_per_squad: 2
            faction: "Galactic Republic"
            ship: "Naboo Royal N-1 Starfighter"
            skill: 1
            points: 4
            loadout: 8
            applies_condition: '''Decoyed'''.canonicalize()
            slots: [
                "Sensor"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Dineé Ellberger"
            id: 331
            xws: "dineeellberger"
            unique: true
            faction: "Galactic Republic"
            ship: "Naboo Royal N-1 Starfighter"
            skill: 3
            points: 4
            loadout: 14
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Astromech"
            ]
        }
        {
            name: "Padmé Amidala"
            id: 332
            xws: "padmeamidala"
            unique: true
            faction: "Galactic Republic"
            ship: "Naboo Royal N-1 Starfighter"
            skill: 4
            points: 4
            loadout: 16
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Astromech"
            ]
        }
        {
            name: "Ric Olié"
            id: 333
            xws: "ricolie"
            unique: true
            faction: "Galactic Republic"
            ship: "Naboo Royal N-1 Starfighter"
            skill: 5
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Torpedo"
                "Astromech"
            ]
        }
        {
            name: "Count Dooku"
            id: 334
            unique: true
            faction: "Separatist Alliance"
            ship: "Sith Infiltrator"
            skill: 3
            force: 3
            points: 7
            loadout: 24
            keyword: ["Dark Side","Sith"]
            slots: [
                "Force"
                "Canon"
                "Torpedo"
                "Crew"
                "Crew"
                "Device"
                "Modification"
                "Title"
                "Tactical Relay"
            ]
        }
        {
            name: "0-66"
            id: 335
            unique: true
            faction: "Separatist Alliance"
            ship: "Sith Infiltrator"
            skill: 3
            points: 5
            loadout: 12
            keyword: ["Droid"]
            slots: [
                "Talent"
                "Canon"
                "Torpedo"
                "Crew"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Dark Courier"
            id: 336
            faction: "Separatist Alliance"
            ship: "Sith Infiltrator"
            skill: 2
            points: 6
            loadout: 9
            slots: [
                "Canon"
                "Torpedo"
                "Device"
                "Modification"
            ]
        }
        {
            name: "DFS-311"
            id: 337
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 1
            points: 3
            loadout: 10
            unique: true
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: '"Odd Ball" (ARC-170)'
            id: 338
            unique: true
            faction: "Galactic Republic"
            ship: "ARC-170 Starfighter"
            skill: 5
            points: 4
            loadout: 7
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Torpedo"
                "Gunner"
                "Gunner"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: '"Jag"'
            id: 339
            unique: true
            faction: "Galactic Republic"
            ship: "ARC-170 Starfighter"
            skill: 3
            points: 4
            loadout: 9
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Torpedo"
                "Gunner"
                "Gunner"
                "Astromech"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Squad Seven Veteran"
            id: 340
            faction: "Galactic Republic"
            ship: "ARC-170 Starfighter"
            skill: 3
            points: 5
            loadout: 10
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Gunner"
                "Gunner"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "104th Battalion Pilot"
            id: 341
            faction: "Galactic Republic"
            ship: "ARC-170 Starfighter"
            skill: 2
            points: 5
            loadout: 8
            keyword: ["Clone"]
            slots: [
                "Torpedo"
                "Gunner"
                "Gunner"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: '"Wolffe"'
            id: 342
            unique: true
            faction: "Galactic Republic"
            ship: "ARC-170 Starfighter"
            skill: 4
            charge: 1
            points: 4
            loadout: 9
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Torpedo"
                "Gunner"
                "Gunner"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Separatist Drone"
            id: 343
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 3
            points: 2
            loadout: 3
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Configuration"
                "Modification"
            ]
        }
        {
            name: "Skakoan Ace"
            id: 344
            faction: "Separatist Alliance"
            ship: "Belbullab-22 Starfighter"
            skill: 3
            points: 4
            loadout: 4
            slots: [
                "Talent"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Rose Tico"
            id: 345
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport Pod"
            skill: 3
            points: 3
            loadout: 9
            slots: [
                "Talent"
                "Tech"
                "Crew"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Logistics Division Pilot"
            id: 346
            faction: "Resistance"
            ship: "Resistance Transport"
            skill: 1
            points: 4
            loadout: 6
            slots: [
                "Canon"
                "Crew"
                "Astromech"
                "Astromech"
            ]
        }
        {
            name: "Pammich Nerro Goode"
            id: 347
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport"
            skill: 3
            points: 4
            loadout: 12
            slots: [
                "Tech"
                "Sensor"
                "Canon"
                "Canon"
                "Torpedo"
                "Crew"
                "Crew"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Vi Moradi"
            id: 348
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport Pod"
            skill: 1
            points: 3
            loadout: 6
            applies_condition: '''Compromising Intel'''.canonicalize()
            slots: [
                "Tech"
                "Crew"
                "Modification"
            ]
        }
        {
            name: "BB-8"
            id: 349
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport Pod"
            skill: 3
            points: 2
            loadout: 4
            keyword: ["Droid"]
            slots: [
                "Tech"
                "Tech"
                "Crew"
                "Modification"
            ]
        }
        {
            name: "Finn"
            id: 350
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport Pod"
            skill: 2
            points: 4
            loadout: 15
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Crew"
                "Modification"
            ]
        }
        {
            name: "Cova Nell"
            id: 351
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport"
            skill: 4
            points: 5
            loadout: 20
            slots: [
                "Talent"
                "Tech"
                "Canon"
                "Canon"
                "Torpedo"
                "Crew"
                "Crew"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Nodin Chavdri"
            id: 352
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport"
            skill: 2
            points: 5
            loadout: 20
            slots: [
                "Tech"
                "Canon"
                "Canon"
                "Torpedo"
                "Missile"
                "Crew"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Stalgasin Hive Guard"
            id: 353
            faction: "Separatist Alliance"
            ship: "Nantex-Class Starfighter"
            skill: 3
            points: 4
            loadout: 4
            slots: [
                "Talent"
            ]
        }
        {
            name: "Petranaki Arena Ace"
            id: 354
            faction: "Separatist Alliance"
            ship: "Nantex-Class Starfighter"
            skill: 4
            points: 4
            loadout: 6
            slots: [
                "Talent"
                "Talent"
            ]
        }
        {
            name: "Gorgol"
            unique: true
            id: 355
            faction: "Separatist Alliance"
            ship: "Nantex-Class Starfighter"
            skill: 2
            points: 4
            loadout: 9
            slots: [
                "Talent"
                "Modification"
            ]
        }
        {
            name: "Chertek"
            unique: true
            id: 356
            faction: "Separatist Alliance"
            ship: "Nantex-Class Starfighter"
            skill: 4
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Talent"
            ]
        }
        {
            name: "Sun Fac"
            unique: true
            id: 357
            faction: "Separatist Alliance"
            ship: "Nantex-Class Starfighter"
            skill: 6
            points: 5
            loadout: 15
            slots: [
                "Talent"
                "Talent"
                "Talent"
                "Modification"
            ]
        }
        {
            name: "Berwer Kret"
            unique: true
            id: 358
            faction: "Separatist Alliance"
            ship: "Nantex-Class Starfighter"
            skill: 5
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Talent"
            ]
        }
        {
            name: "Anakin Skywalker (Y-Wing)"
            unique: true
            id: 359
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 6
            force: 3
            points: 6
            loadout: 20
            keyword: ["Jedi", "Light Side"]
            slots: [
                "Force"
                "Turret"
                "Torpedo"
                "Gunner"
                "Astromech"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Shadow Squadron Veteran"
            id: 360
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 3
            points: 4
            loadout: 4
            keyword: ["Clone"]
            slots: [
                "Turret"
                "Torpedo"
                "Gunner"
                "Astromech"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Red Squadron Bomber"
            id: 361
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 2
            points: 4
            loadout: 6
            keyword: ["Clone"]
            slots: [
                "Turret"
                "Torpedo"
                "Gunner"
                "Astromech"
                "Device"
            ]
        }
        {
            name: "R2-D2"
            id: 362
            unique: true
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 2
            points: 3
            loadout: 9
            keyword: ["Droid"]
            slots: [
                "Sensor"
                "Turret"
                "Torpedo"
                "Crew"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Goji"'
            id: 363
            unique: true
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 2
            points: 4
            loadout: 16
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Turret"
                "Gunner"
                "Astromech"
                "Device"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Broadside"'
            id: 364
            unique: true
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 3
            points: 3
            loadout: 10
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Matchstick"'
            id: 365
            unique: true
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 4
            points: 3
            loadout: 9
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Odd Ball" (Y-Wing)'
            id: 366
            unique: true
            faction: "Galactic Republic"
            ship: "BTL-B Y-wing"
            skill: 5
            points: 4
            loadout: 18
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Turret"
                "Torpedo"
                "Torpedo"
                "Gunner"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Republic Judiciary"
            id: 367
            faction: "Galactic Republic"
            ship: "CR90 Corellian Corvette"
            skill: 8
            engagement: 0
            points: 14
            loadout: 40
            slots: [
                "Command"
                "Hardpoint"
                "Hardpoint"
                "Crew"
                "Crew"
                "Gunner"
                "Team"
                "Team"
                "Cargo"
            ]
        }
        {
            name: "Alderaanian Guard"
            id: 368
            faction: "Rebel_Alliance"
            ship: "CR90 Corellian Corvette"
            skill: 8
            engagement: 0
            points: 14
            loadout: 40
            slots: [
                "Command"
                "Hardpoint"
                "Hardpoint"
                "Crew"
                "Crew"
                "Gunner"
                "Team"
                "Team"
                "Cargo"
                "Title"
            ]
        }
        {
            name: "Outer Rim Patrol"
            id: 369
            faction: "Imperial_Academy"
            ship: "Raider-class Corvette"
            skill: 8
            engagement: 0
            points: 15
            loadout: 50
            slots: [
                "Command"
                "Torpedo"
                "Missile"
                "Hardpoint"
                "Hardpoint"
                "Crew"
                "Crew"
                "Team"
                "Team"
                "Cargo"
                "Title"
            ]
        }
        {
            name: "First_Order Collaborators"
            id: 370
            faction: "First_Order"
            ship: "Raider-class Corvette"
            skill: 8
            engagement: 0
            points: 15
            loadout: 50
            slots: [
                "Command"
                "Torpedo"
                "Missile"
                "Hardpoint"
                "Hardpoint"
                "Crew"
                "Crew"
                "Team"
                "Team"
                "Cargo"
            ]
        }
        {
            name: "Echo Base Evacuees"
            id: 371
            faction: "Rebel_Alliance"
            ship: "GR-75 Medium Transport"
            skill: 7
            engagement: 1
            points: 10
            loadout: 25
            slots: [
                "Command"
                "Hardpoint"
                "Turret"
                "Crew"
                "Crew"
                "Team"
                "Cargo"
                "Cargo"
                "Title"
            ]
        }
        {
            name: "New_Republic Volunteers"
            id: 372
            faction: "Resistance"
            ship: "GR-75 Medium Transport"
            skill: 7
            engagement: 1
            points: 10
            loadout: 25
            slots: [
                "Command"
                "Hardpoint"
                "Turret"
                "Crew"
                "Crew"
                "Team"
                "Cargo"
                "Cargo"
            ]
        }
        {
            name: "Outer Rim Garrison"
            id: 373
            faction: "Imperial_Academy"
            ship: "Gozanti-class Cruiser"
            skill: 7
            engagement: 1
            points: 11
            loadout: 40
            slots: [
                "Command"
                "Hardpoint"
                "Crew"
                "Crew"
                "Gunner"
                "Team"
                "Cargo"
                "Cargo"
                "Title"
            ]
        }
        {
            name: "First_Order Sympathizers"
            id: 374
            faction: "First_Order"
            ship: "Gozanti-class Cruiser"
            skill: 7
            engagement: 1
            points: 11
            loadout: 40
            slots: [
                "Command"
                "Hardpoint"
                "Crew"
                "Crew"
                "Gunner"
                "Team"
                "Cargo"
                "Cargo"
            ]
        }
        {
            name: "Separatist Privateers"
            id: 375
            faction: "Separatist Alliance"
            ship: "C-ROC Cruiser"
            skill: 7
            engagement: 1
            points: 10
            loadout: 30
            slots: [
                "Command"
                "Hardpoint"
                "Crew"
                "Crew"
                "Tactical Relay"
                "Team"
                "Cargo"
                "Device"
                "Configuration"
            ]
        }
        {
            name: "Syndicate Smugglers"
            id: 376
            faction: "Scum and Villainy"
            ship: "C-ROC Cruiser"
            skill: 7
            engagement: 1
            points: 10
            loadout: 30
            slots: [
                "Command"
                "Hardpoint"
                "Crew"
                "Crew"
                "Team"
                "Cargo"
                "Device"
                "Illicit"
                "Title"
                "Configuration"
            ]
        }
        {
            name: "Jarek Yeager"
            id: 377
            faction: "Resistance"
            unique: true
            ship: "Fireball"
            skill: 5
            points: 3
            loadout: 9
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Astromech"
                "Illicit"
                "Modification"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Kazuda Xiono"
            id: 378
            faction: "Resistance"
            unique: true
            ship: "Fireball"
            skill: 4
            points: 4
            loadout: 14
            slots: [
                "Talent"
                "Missile"
                "Astromech"
                "Illicit"
                "Modification"
                "Modification"
                "Title"
            ]
        }
        {
            name: "R1-J5"
            id: 379
            faction: "Resistance"
            unique: true
            ship: "Fireball"
            skill: 1
            points: 3
            loadout: 8
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Crew"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Colossus Station Mechanic"
            id: 380
            faction: "Resistance"
            ship: "Fireball"
            skill: 2
            points: 3
            loadout: 5
            slots: [
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Major Vonreg"
            id: 381
            faction: "First_Order"
            unique: true
            skill: 6
            ship: "TIE/ba Interceptor"
            points: 5
            loadout: 14
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Missile"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Holo"'
            id: 382
            faction: "First_Order"
            unique: true
            skill: 5
            ship: "TIE/ba Interceptor"
            points: 5
            loadout: 12
            slots: [
                "Talent"
                "Tech"
                "Missile"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Ember"'
            id: 383
            faction: "First_Order"
            unique: true
            skill: 4
            ship: "TIE/ba Interceptor"
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Missile"
                "Modification"
            ]
        }
        {
            name: "First_Order Provocateur"
            id: 384
            faction: "First_Order"
            skill: 3
            ship: "TIE/ba Interceptor"
            points: 4
            loadout: 3
            slots: [
                "Talent"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Captain Phasma"
            id: 385
            faction: "First_Order"
            unique: true
            skill: 4
            ship: "TIE/sf Fighter"
            points: 4
            loadout: 6
            slots: [
                "Talent"
                "Sensor"
                "Tech"
                "Missile"
                "Gunner"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Rush"'
            id: 386
            faction: "First_Order"
            unique: true
            skill: 2
            ship: "TIE/vn Silencer"
            points: 5
            loadout: 11
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Zizi Tlo"
            id: 387
            faction: "Resistance"
            unique: true
            skill: 5
            charge: 1
            recurring: 1
            ship: "RZ-2 A-wing"
            points: 5
            loadout: 10
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Ronith Blario"
            id: 388
            faction: "Resistance"
            unique: true
            skill: 2
            ship: "RZ-2 A-wing"
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Missile"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Paige Tico"
            id: 389
            faction: "Resistance"
            unique: true
            skill: 5
            ship: "MG-100 StarFortress"
            points: 6
            loadout: 23
            charge: 1
            recurring: 1
            slots: [
                "Talent"
                "Sensor"
                "Tech"
                "Crew"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
       
        {
            name: "Alexsandr Kallus"
            id: 392
            faction: "Rebel_Alliance"
            unique: true
            skill: 4
            ship: "VCX-100 Light Freighter"
            points: 7
            loadout: 16
            keyword: ["Spectre"]
            slots: [
                "Talent"
                "Torpedo"
                "Sensor"
                "Turret"
                "Crew"
                "Crew"
                "Modification"
                "Gunner"
                "Title"
            ]
        }
        {
            name: "Leia Organa"
            id: 393
            faction: "Rebel_Alliance"
            unique: true
            skill: 5
            ship: "Modified YT-1300 Light Freighter"
            keyword: ["Light Side"]
            points: 7
            loadout: 24
            force: 1
            slots: [
                "Force"
                "Missile"
                "Gunner"
                "Crew"
                "Crew"
                "Modification"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Fifth Brother"
            id: 394
            faction: "Imperial_Academy"
            unique: true
            skill: 4
            keyword: ["Dark Side"]
            ship: "TIE Advanced v1"
            points: 4
            loadout: 7
            force: 2
            slots: [
                "Force"
                "Talent"
                "Sensor"
                "Missile"
            ]
        }
        {
            name: '"Vagabond"'
            id: 395
            faction: "Imperial_Academy"
            unique: true
            skill: 2
            ship: "TIE/sk Striker"
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Morna Kee"
            id: 396
            faction: "Imperial_Academy"
            unique: true
            skill: 4
            ship: "VT-49 Decimator"
            points: 7
            loadout: 22
            charge: 3
            slots: [
                "Talent"
                "Torpedo"
                "Crew"
                "Crew"
                "Gunner"
                "Device"
                "Modification"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Lieutenant LeHuse"
            id: 397
            faction: "First_Order"
            unique: true
            skill: 5
            ship: "TIE/sf Fighter"
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Tech"
                "Missile"
                "Missile"
                "Gunner"
                "Sensor"
                "Modification"
            ]
        }
        
        {
            name: "G4R-GOR V/M"
            id: 399
            faction: "Scum and Villainy"
            unique: true
            skill: 0
            ship: "M3-A Interceptor"
            points: 3
            loadout: 9
            keyword: ["Droid"]
            slots: [
                "Modification"
                "HardpointShip"
            ]
        }
        {
            name: "Nom Lumb"
            id: 400
            faction: "Scum and Villainy"
            unique: true
            skill: 1
            ship: "JumpMaster 5000"
            points: 5
            loadout: 11
            keyword: ["Bounty Hunter"]
            slots: [
                "Canon"
                "Canon"
                "Torpedo"
                "Crew"
                "Gunner"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "First_Order Courier"
            id: 401
            faction: "First_Order"
            skill: 2
            ship: "Xi-class Light Shuttle"
            points: 4
            loadout: 10
            slots: [
                "Tech"
                "Tech"
                "Crew"
                "Modification"
            ]
        }
        {
            name: "Agent Terex"
            id: 402
            faction: "First_Order"
            unique: true
            skill: 3
            ship: "Xi-class Light Shuttle"
            points: 4
            loadout: 13
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Crew"
                "Illicit"
                "Illicit"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Gideon Hask (Xi Shuttle)"
            id: 403
            faction: "First_Order"
            unique: true
            skill: 4
            ship: "Xi-class Light Shuttle"
            points: 4
            loadout: 15
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Modification"
            ]
        }
        {
            name: "Commander Malarus (Xi Shuttle)"
            id: 404
            faction: "First_Order"
            unique: true
            skill: 5
            ship: "Xi-class Light Shuttle"
            points: 4
            loadout: 15
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Crew"
                "Crew"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Baktoid Drone"
            id: 405
            faction: "Separatist Alliance"
            skill: 1
            ship: "HMP Droid Gunship"
            points: 4
            loadout: 8
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "TransGalMeg Control Link"
            id: 406
            faction: "Galactic Republic"
            skill: "*"
            ship: "Syliure-class Hyperspace Ring"
            points: 2
            slots: [
                "Hyperdrive"
            ]
        }
        {
            name: "Separatist Predator"
            id: 407
            faction: "Separatist Alliance"
            skill: 3
            ship: "HMP Droid Gunship"
            points: 4
            loadout: 9
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Missile"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Geonosian Prototype"
            id: 408
            faction: "Separatist Alliance"
            skill: 2
            max_per_squad: 2
            ship: "HMP Droid Gunship"
            points: 4
            loadout: 12
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Missile"
                "Canon"
                "Canon"
                "Tactical Relay"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "DGS-047"
            id: 409
            faction: "Separatist Alliance"
            skill: 1
            unique: true
            ship: "HMP Droid Gunship"
            points: 3
            loadout: 8
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Missile"
                "Tactical Relay"
                "Crew"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "DGS-286"
            id: 410
            faction: "Separatist Alliance"
            skill: 3
            unique: true
            ship: "HMP Droid Gunship"
            points: 3
            loadout: 7
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Missile"
                "Tactical Relay"
                "Crew"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Onderon Oppressor"
            id: 411
            faction: "Separatist Alliance"
            skill: 3
            max_per_squad: 2
            ship: "HMP Droid Gunship"
            points: 4
            loadout: 15
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Missile"
                "Crew"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "212th Battalion Pilot"
            id: 412
            faction: "Galactic Republic"
            skill: 2
            charge: 2
            recurring: 1
            ship: "LAAT/i Gunship"
            points: 5
            loadout: 7
            keyword: ["Clone"]
            slots: [
                "Missile"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: '"Hound"'
            id: 413
            faction: "Galactic Republic"
            skill: 2
            unique: true
            charge: 2
            recurring: 1
            ship: "LAAT/i Gunship"
            points: 6
            loadout: 20
            keyword: ["Clone"]
            slots: [
                "Sensor"
                "Missile"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: '"Warthog"'
            id: 414
            faction: "Galactic Republic"
            skill: 3
            unique: true
            charge: 2
            recurring: 1
            ship: "LAAT/i Gunship"
            points: 6
            loadout: 18
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Torpedo"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Gunner"
                "Modification"
            ]
        }
        {
            name: '"Hawk"'
            id: 415
            faction: "Galactic Republic"
            skill: 4
            charge: 2
            recurring: 1
            unique: true
            ship: "LAAT/i Gunship"
            points: 6
            loadout: 25
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Gunner"
                "Modification"
            ]
        }
        
        {
            name: "Fearsome Predator"
            id: 420
            faction: "Separatist Alliance"
            max_per_squad: 3
            skill: 3
            ship: "Droid Tri-fighter"
            points: 3
            loadout: 3
            slots: [
                "Talent"
                "Sensor"
                "Missile"
                "Modification"
                "Modification"
                "Configuration"
            ]
            applies_condition: '''Fearful Prey'''.canonicalize()
        }
        {
            name: "DIS-347"
            id: 421
            faction: "Separatist Alliance"
            skill: 3
            unique: true
            ship: "Droid Tri-fighter"
            points: 3
            loadout: 4
            slots: [
                "Talent"
                "Sensor"
                "Missile"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "DIS-T81"
            id: 422
            faction: "Separatist Alliance"
            skill: 4
            unique: true
            ship: "Droid Tri-fighter"
            points: 3
            loadout: 3
            slots: [
                "Talent"
                "Sensor"
                "Canon"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Phlac-Arphocc Prototype"
            id: 423
            faction: "Separatist Alliance"
            skill: 5
            max_per_squad: 2
            ship: "Droid Tri-fighter"
            points: 3
            loadout: 6
            slots: [
                "Talent"
                "Sensor"
                "Missile"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Colicoid Interceptor"
            id: 424
            faction: "Separatist Alliance"
            skill: 1
            ship: "Droid Tri-fighter"
            points: 3
            loadout: 4
            slots: [
                "Talent"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Separatist Interceptor"
            id: 425
            faction: "Separatist Alliance"
            skill: 3
            ship: "Droid Tri-fighter"
            points: 3
            loadout: 3
            slots: [
                "Talent"
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Separatist Racketeer"
            id: 426
            faction: "Separatist Alliance"
            skill: 2
            ship: "Firespray-class Patrol Craft"
            points: 7
            loadout: 10
            slots: [
                "Canon"
                "Missile"
                "Device"
            ]
        }
        {
            name: "Boba Fett (Separatist)"
            id: 427
            faction: "Separatist Alliance"
            unique: true
            skill: 3
            ship: "Firespray-class Patrol Craft"
            points: 7
            loadout: 16
            keyword: ["Bounty Hunter"]
            slots: [
                "Canon"
                "Missile"
                "Crew"
                "Device"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Zam Wesell"
            id: 428
            faction: "Separatist Alliance"
            unique: true
            skill: 5
            charge: 4
            ship: "Firespray-class Patrol Craft"
            points: 8
            loadout: 22
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Missile"
                "Crew"
                "Device"
                "Illicit"
                "Modification"
                "Title"
            ]
            applies_condition: ['''You'd Better Mean Business'''.canonicalize(),'You Should Thank Me'.canonicalize()]
        }
        {
            name: "Jango Fett"
            id: 429
            faction: "Separatist Alliance"
            skill: 6
            unique: true
            ship: "Firespray-class Patrol Craft"
            points: 8
            loadout: 22
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Missile"
                "Crew"
                "Device"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Loyalist Volunteer"
            id: 430
            faction: "Galactic Republic"
            skill: 2
            ship: "Nimbus-class V-wing"
            points: 3
            loadout: 4
            slots: [
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Shadow Squadron Escort"
            id: 431
            faction: "Galactic Republic"
            skill: 3
            ship: "Nimbus-class V-wing"
            points: 3
            loadout: 3
            keyword: ["Clone"]
            slots: [
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Wilhuff Tarkin"
            id: 432
            faction: "Galactic Republic"
            skill: 3
            unique: true
            ship: "Nimbus-class V-wing"
            points: 3
            loadout: 8
            slots: [
                "Talent"
                "Missile"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: '"Klick"'
            id: 433
            faction: "Galactic Republic"
            skill: 4
            unique: true
            ship: "Nimbus-class V-wing"
            points: 3
            loadout: 8
            charge: 1
            recurring: 1
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: '"Contrail"'
            id: 434
            faction: "Galactic Republic"
            skill: 5
            unique: true
            ship: "Nimbus-class V-wing"
            points: 3
            loadout: 11
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: '"Odd Ball" (V-wing)'
            id: 435
            faction: "Galactic Republic"
            skill: 5
            unique: true
            ship: "Nimbus-class V-wing"
            points: 3
            loadout: 9
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Torpedo"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Jedi General"
            id: 436
            faction: "Galactic Republic"
            skill: 4
            ship: "Eta-2 Actis"
            points: 5
            loadout: 4
            force: 2
            keyword: ["Jedi", "Light Side"]
            slots: [
                "Force"
                "Canon"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Yoda"
            id: 437
            faction: "Galactic Republic"
            skill: 3
            unique: true
            ship: "Eta-2 Actis"
            points: 4
            loadout: 12
            force: 3
            keyword: ["Jedi", "Light Side"]
            slots: [
                "Force"
                "Force"
                "Canon"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Shaak Ti"
            id: 438
            faction: "Galactic Republic"
            skill: 4
            unique: true
            ship: "Eta-2 Actis"
            points: 4
            loadout: 10
            force: 2
            keyword: ["Jedi", "Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Canon"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Aayla Secura"
            id: 439
            faction: "Galactic Republic"
            skill: 5
            unique: true
            ship: "Eta-2 Actis"
            points: 5
            loadout: 15
            force: 2
            keyword: ["Jedi", "Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Canon"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Obi-Wan Kenobi (Eta-2)"
            id: 440
            faction: "Galactic Republic"
            skill: 5
            unique: true
            ship: "Eta-2 Actis"
            force: 3
            points: 5
            loadout: 15
            keyword: ["Jedi", "Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Canon"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Anakin Skywalker (Eta-2)"
            id: 441
            faction: "Galactic Republic"
            skill: 6
            unique: true
            force: 3
            ship: "Eta-2 Actis"
            points: 5
            loadout: 15
            keyword: ["Jedi", "Light Side", "Dark Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Canon"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Poe Dameron (HoH)"
            xwsaddon: 'swz68'
            id: 442
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 6
            points: 6
            loadout: 19
            charge: 2
            recurring: 1
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Temmin Wexley (HoH)"
            xwsaddon: 'swz68'
            id: 443
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 4
            points: 5
            loadout: 13
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Merl Cobben"
            id: 444
            faction: "Resistance"
            unique: true
            skill: 1
            ship: "RZ-2 A-wing"
            points: 3
            loadout: 4
            slots: [
                "Talent"
                "Missile"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Suralinda Javos"
            id: 445
            faction: "Resistance"
            unique: true
            skill: 3
            ship: "RZ-2 A-wing"
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Talent"
                "Canon"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Wrobie Tyce"
            id: 446
            faction: "Resistance"
            unique: true
            skill: 4
            ship: "RZ-2 A-wing"
            points: 3
            loadout: 4
            slots: [
                "Talent"
                "Missile"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Seftin Vanik"
            id: 447
            faction: "Resistance"
            unique: true
            skill: 5
            ship: "RZ-2 A-wing"
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Tech"
                "Modification"
            ]
        }
        {
            name: "Nimi Chireen"
            id: 448
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 2
            points: 4
            loadout: 9
            slots: [
                "Astromech"
                "Tech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "C'ai Threnalli"
            id: 449
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 4
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Astromech"
                "Tech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Hera Syndulla (B-Wing)"
            id: 450
            unique: true
            faction: "Rebel_Alliance"
            keyword: ["Spectre"]
            ship: "A/SF-01 B-wing"
            skill: 6
            points: 5
            loadout: 14
            slots: [
                "Talent"
                "Sensor"
                "Canon"
                "Canon"
                "Torpedo"
                "Missile"
                "Device"
                "Modification"
                "Configuration"
                "Title"
            ]
        }
        {
            name: "Hera Syndulla (A-Wing)"
            id: 451
            unique: true
            faction: "Rebel_Alliance"
            ship: "RZ-1 A-wing"
            keyword: ["Spectre"]
            skill: 6
            points: 4
            loadout: 5
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Missile"
                "Configuration"
                "Modification"
            ]
        }
        {
            name: "Wedge Antilles (A-Wing)"
            id: 452
            unique: true
            faction: "Rebel_Alliance"
            ship: "RZ-1 A-wing"
            skill: 4
            points: 3
            loadout: 5
            slots: [
                "Talent"
                "Talent"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Sabine Wren (A-Wing)"
            id: 453
            unique: true
            faction: "Rebel_Alliance"
            keyword: ["Mandalorian"]
            ship: "RZ-1 A-wing"
            skill: 3
            points: 3
            loadout: 7
            slots: [
                "Talent"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Vult Skerris"
            id: 454
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            skill: 5
            charge: 1
            recurring: -1
            points: 7
            loadout: 13
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Canon"
                "Missile"            
                "Configuration"
            ]
        }
        {
            name: "Ciena Ree"
            id: 455
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/in Interceptor"
            skill: 6
            points: 5
            loadout: 14
            slots: [
                "Talent"
                "Talent"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Gideon Hask (TIE Interceptor)"
            id: 456
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/in Interceptor"
            skill: 4
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        
        {
            name: "Leema Kai"
            id: 458
            unique: true
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 5
            points: 3
            loadout: 8
            slots: [
                "Tech"
                "Turret"
                "Torpedo"
                "Missile"
                "Astromech"
                "Device"
            ]
        }
        {
            name: "Arliz Hadrassian"
            id: 459
            unique: true
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 4
            points: 3
            loadout: 10
            slots: [
                "Tech"
                "Turret"
                "Torpedo"
                "Missile"
                "Astromech"
                "Device"
            ]
        }
        {
            name: "Padric"
            id: 460
            unique: true
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 3
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Tech"
                "Turret"
                "Torpedo"
                "Missile"
                "Astromech"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Derek Klivian"
            id: 461
            unique: true
            faction: "Rebel_Alliance"
            ship: "RZ-1 A-wing"
            skill: 3
            points: 3
            loadout: 6
            slots: [
                "Talent"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Shara Bey (A-Wing)"
            id: 462
            unique: true
            faction: "Rebel_Alliance"
            ship: "RZ-1 A-wing"
            skill: 4
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Missile"
                "Configuration"
            ]
        }
        {
            name: "Ahsoka Tano (A-Wing)"
            id: 463
            unique: true
            faction: "Rebel_Alliance"
            ship: "RZ-1 A-wing"
            keyword: ["Light Side"]
            skill: 5
            force: 3
            points: 5
            loadout: 12
            slots: [
                "Force"
                "Force"
                "Talent"
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        
       
       
        
        
        {
            name: "Darth Vader (TIE Defender)"
            id: 469
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            keyword: ["Dark Side", "Sith"]
            skill: 6
            force: 3
            points: 9
            loadout: 10
            slots: [
                "Force"
                "Tech"
                "Canon"
                "Missile"            
                "Configuration"
            ]
        }
        {
            name: "Captain Dobbs"
            id: 470
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/d Defender"
            skill: 3
            points: 7
            loadout: 15
            slots: [
                "Talent"
                "Sensor"
                "Canon"
                "Missile"            
                "Configuration"
            ]
        }
        {
            name: "Jinata Security Officer"
            id: 471
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 2
            points: 4
            loadout: 5
            slots: [
                "Turret"
                "Torpedo"
                "Missile"
                "Device"
            ]
        }
        {
            name: "Amaxine Warrior"
            id: 472
            faction: "Scum and Villainy"
            ship: "BTL-A4 Y-wing"
            skill: 3
            points: 4
            loadout: 6
            slots: [
                "Turret"
                "Torpedo"
                "Missile"
                "Astromech"
                "Device"
            ]
        }
        {
            name: "Gamut Key"
            id: 473
            unique: true
            faction: "Scum and Villainy"
            ship: "HWK-290 Light Freighter"
            skill: 3
            charge: 2
            recurring: 1
            points: 4
            loadout: 8
            slots: [
                "Talent"
                "Crew"
                "Device"
                "Illicit"
                "Modification"
                "Modification"
            ]
        }
       
        {
            name: "Colicoid Destroyer"
            id: 475
            faction: "Separatist Alliance"
            ship: "Trident-class Assault Ship"
            skill: 8
            engagement: 0
            points: 11
            loadout: 45
            slots: [
                "Command"
                "Torpedo"
                "Hardpoint"
                "Hardpoint"
                "Crew"
                "Crew"
                "Gunner"
                "Team"
                "Cargo"
                "Title"
            ]
        }
        {
            name: "Lawless Pirates"
            id: 476
            faction: "Scum and Villainy"
            ship: "Trident-class Assault Ship"
            skill: 8
            engagement: 0
            points: 11
            loadout: 45
            slots: [
                "Command"
                "Torpedo"
                "Hardpoint"
                "Hardpoint"
                "Crew"
                "Crew"
                "Gunner"
                "Team"
                "Cargo"
                "Title"
            ]
        }
        {
            name: "Zorii Bliss"
            id: 477
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 5
            points: 4
            loadout: 9
            charge: 1
            recurring: 1
            slots: [
                "Talent"
                "Tech"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Illicit"
                "Configuration"
            ]
        }
        {
            name: "Teza Nasz"
            id: 478
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 4
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Tech"
                "Missile"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Wilsa Teshlo"
            id: 479
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 4
            points: 4
            loadout: 12
            slots: [
                "Tech"
                "Turret"
                "Missile"
                "Astromech"
                "Device"
                "Device"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Shasa Zaro"
            id: 480
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 3
            points: 3
            loadout: 9
            slots: [
                "Tech"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Lega Fossang"
            id: 481
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 3
            points: 3
            loadout: 7
            slots: [
                "Tech"
                "Turret"
                "Missile"
                "Astromech"
                "Device"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Aftab Ackbar"
            id: 482
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 2
            points: 4
            loadout: 13
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Corus Kapellim"
            id: 483
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 1
            points: 3
            loadout: 8
            slots: [
                "Tech"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Modification"
                "Illicit"
                "Configuration"
            ]
        }
        {
            name: "C'ai Threnalli (Y-Wing)"
            id: 484
            unique: true
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 2
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Tech"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "New_Republic Patrol"
            id: 485
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 3
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Tech"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Kijimi Spice Runner"
            id: 486
            faction: "Resistance"
            ship: "BTA-NR2 Y-wing"
            skill: 2
            points: 4
            loadout: 4
            slots: [
                "Tech"
                "Turret"
                "Astromech"
                "Device"
                "Modification"
                "Illicit"
                "Configuration"
            ]
        }
        {
            name: "Kylo Ren (TIE Whisper)"
            id: 487
            unique: true
            faction: "First_Order"
            ship: "TIE/wi Whisper Modified Interceptor"
            keyword: ["Dark Side", "Light Side"]
            skill: 5
            force: 3
            points: 5
            loadout: 14
            slots: [
                "Force"
                "Force"
                "Talent"
                "Missile"
                "Tech"
                "Tech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: '"Wrath"'
            id: 488
            unique: true
            faction: "First_Order"
            ship: "TIE/wi Whisper Modified Interceptor"
            skill: 5
            points: 5
            loadout: 15
            slots: [
                "Talent"
                "Talent"
                "Canon"
                "Tech"
                "Tech"
                "Configuration"
            ]
        }
        {
            name: '"Nightfall"'
            id: 489
            unique: true
            faction: "First_Order"
            ship: "TIE/wi Whisper Modified Interceptor"
            skill: 4
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Missile"
                "Tech"
                "Tech"
                "Configuration"
            ]
        }
        {
            name: '"Whirlwind"'
            id: 490
            unique: true
            faction: "First_Order"
            ship: "TIE/wi Whisper Modified Interceptor"
            skill: 3
            points: 4
            loadout: 12
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Tech"
                "Tech"
                "Configuration"
            ]
        }
        {
            name: "709th Legion Ace"
            id: 491
            faction: "First_Order"
            ship: "TIE/wi Whisper Modified Interceptor"
            skill: 4
            points: 4
            loadout: 10
            slots: [
                "Talent"
                "Missile"
                "Tech"
                "Tech"
                "Configuration"
            ]
        }
        {
            name: "Red Fury Zealot"
            id: 492
            faction: "First_Order"
            ship: "TIE/wi Whisper Modified Interceptor"
            skill: 2
            points: 4
            loadout: 3
            slots: [
                "Talent"
                "Missile"
                "Tech"
                "Tech"
                "Configuration"
            ]
        }
        {
            name: '"Breach"'
            id: 493
            unique: true
            faction: "First_Order"
            ship: "TIE/se Bomber"
            skill: 5
            points: 5
            loadout: 18
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Torpedo"
                "Torpedo"
                "Missile"
                "Gunner"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Scorch" (TIE/Se Bomber)'
            id: 494
            unique: true
            faction: "First_Order"
            ship: "TIE/se Bomber"
            skill: 4
            points: 3
            loadout: 7
            slots: [
                "Talent"
                "Tech"
                "Missile"
                "Gunner"
                "Device"
                "Device"
                "Modification"
                "Modification"
            ]
        }
        {
            name: '"Dread"'
            id: 495
            unique: true
            faction: "First_Order"
            ship: "TIE/se Bomber"
            skill: 3
            points: 3
            loadout: 8
            slots: [
                "Tech"
                "Torpedo"
                "Missile"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: '"Grudge"'
            id: 496
            unique: true
            faction: "First_Order"
            ship: "TIE/se Bomber"
            skill: 2
            points: 4
            loadout: 15
            slots: [
                "Talent"
                "Tech"
                "Missile"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "First_Order Cadet"
            id: 497
            faction: "First_Order"
            ship: "TIE/se Bomber"
            skill: 3
            points: 4
            loadout: 7
            slots: [
                "Tech"
                "Torpedo"
                "Missile"
                "Gunner"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Sienar-Jaemus Test Pilot"
            id: 498
            faction: "First_Order"
            ship: "TIE/se Bomber"
            skill: 2
            points: 4
            loadout: 8
            slots: [
                "Tech"
                "Tech"
                "Missile"
                "Device"
                "Device"
                "Modification"
            ]
        }
        {
            name: "Bodica Venj"
            id: 499
            faction: "Rebel_Alliance"
            unique: true
            ship: "Fang Fighter"
            skill: 4
            points: 4
            loadout: 7
            keyword: ["Mandalorian"]
            slots: [
                "Talent"
                "Talent"
                "Torpedo"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Dirk Ullodin"
            id: 500
            faction: "Rebel_Alliance"
            unique: true
            ship: "Fang Fighter"
            skill: 3
            points: 4
            loadout: 9
            keyword: ["Mandalorian"]
            slots: [
                "Torpedo"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Fenn Rau (Rebel Fang)"
            id: 501
            faction: "Rebel_Alliance"
            xwsaddon: "fangfighter"
            unique: true
            ship: "Fang Fighter"
            skill: 6
            points: 5
            loadout: 9
            keyword: ["Mandalorian"]
            slots: [
                "Talent"
                "Talent"
                "Torpedo"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Clan Wren Volunteer"
            id: 502
            faction: "Rebel_Alliance"
            ship: "Fang Fighter"
            skill: 3
            points: 4
            loadout: 12
            max_per_squad: 2
            keyword: ["Mandalorian"]
            slots: [
                "Talent"
                "Torpedo"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Moff Gideon"
            id: 503
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 4
            charge: 2
            recurring: 1
            points: 4
            loadout: 8
            slots: [
                "Talent"
                "Missile"
                "Illicit"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "ISB Jingoist"
            id: 504
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 4
            points: 3
            loadout: 5
            max_per_squad: 2
            slots: [
                "Talent"
                "Illicit"
            ]
        }
        
       
        {
            name: '"Chopper" (Gauntlet Fighter)'
            id: 519
            faction: "Rebel_Alliance"
            ship: "Gauntlet Fighter"
            skill: 2
            points: 6
            loadout: 10
            keyword: ["Droid","Spectre"]
            unique: true
            slots: [
                "Crew"
                "Gunner"
                "Device"
                "Illicit"
                "Modification"
                "Modification"
                "Configuration"
                "Title"
            ]
        }
        {
            name: "Ezra Bridger (Gauntlet Fighter)"
            id: 520
            faction: "Rebel_Alliance"
            ship: "Gauntlet Fighter"
            skill: 3
            force: 1
            points: 6
            loadout: 12
            keyword: ["Light Side","Spectre"]
            unique: true
            slots: [
                "Force"
                "Talent"
                "Crew"
                "Gunner"
                "Device"
                "Illicit"
                "Modification"
                "Modification"
                "Title"
                "Configuration"
            ]
        }
        {
            name: "Q9-0"
            id: 521
            faction: "Scum and Villainy"
            ship: "ST-70 Assault Ship"
            skill: 5
            points: 6
            loadout: 16
            unique: true
            keyword: ["Droid"]
            slots: [
                "Crew"
                "Gunner"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        
        {
            name: "Guild Bounty Hunter"
            id: 523
            faction: "Scum and Villainy"
            ship: "ST-70 Assault Ship"
            skill: 3
            points: 6
            loadout: 14
            max_per_squad: 2
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Crew"
                "Gunner"
                "Illicit"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Outer Rim Enforcer"
            id: 524
            faction: "Scum and Villainy"
            ship: "ST-70 Assault Ship"
            skill: 2
            points: 6
            loadout: 10
            slots: [
                "Crew"
                "Gunner"
                "Illicit"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Plo Koon (Delta-7b)"
            id: 525
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 5
            force: 2
            points: 7
            loadout: 19
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Talent"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Saesee Tiin (Delta-7b)"
            id: 526
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 4
            force: 2
            points: 6
            loadout: 9
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Mace Windu (Delta-7b)"
            id: 527
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 4
            force: 3
            points: 5
            loadout: 7
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Force"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Anakin Skywalker (Delta-7b)"
            id: 528
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 6
            force: 3
            points: 7
            loadout: 15
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Luminara Unduli (Delta-7b)"
            id: 529
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 4
            force: 2
            points: 6
            loadout: 7
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Barriss Offee (Delta-7b)"
            id: 530
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 4
            force: 1
            points: 5
            loadout: 10
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Ahsoka Tano (Delta-7b)"
            id: 531
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 3
            force: 2
            points: 6
            loadout: 10
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Jedi Knight (Delta-7b)"
            id: 532
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 3
            force: 1
            points: 6
            loadout: 8
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Obi-Wan Kenobi (Delta-7b)"
            id: 533
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 5
            force: 3
            points: 7
            loadout: 15
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Astromech"
                "Modification"
            ]
        }
        
        {
            name: "Viktor Hel (Rogue)"
            id: 535
            unique: true
            faction: "Scum and Villainy"
            ship: "Rogue-class Starfighter"
            skill: 4
            points: 4
            loadout: 11
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Canon"
                "Missile"
                "Illicit"
                "Modification"
            ]
        }
        
        {
            name: "Outer Rim Hunter"
            id: 537
            faction: "Scum and Villainy"
            ship: "Rogue-class Starfighter"
            skill: 3
            points: 4
            loadout: 5
            slots: [
                "Canon"
                "Canon"
                "Illicit"
                "Modification"
            ]
        }
        {
            name: "Cad Bane (Separatist)"
            xwsaddon: "separatistalliance"
            id: 538
            unique: true
            faction: "Separatist Alliance"
            ship: "Rogue-class Starfighter"
            skill: 4
            charge: 1
            recurring: 1
            points: 4
            loadout: 13
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Canon"
                "Missile"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "IG-101"
            id: 539
            unique: true
            faction: "Separatist Alliance"
            ship: "Rogue-class Starfighter"
            skill: 4
            points: 4
            loadout: 11
            chassis: "Networked Calculations"
            keyword: ["Droid"]
            slots: [
                "Canon"
                "Canon"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "IG-102"
            id: 540
            unique: true
            faction: "Separatist Alliance"
            ship: "Rogue-class Starfighter"
            skill: 4
            points: 4
            loadout: 11
            chassis: "Networked Calculations"
            keyword: ["Droid"]
            slots: [
                "Canon"
                "Canon"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "IG-111"
            id: 541
            unique: true
            faction: "Separatist Alliance"
            ship: "Rogue-class Starfighter"
            skill: 1
            points: 4
            loadout: 12
            chassis: "Networked Calculations"
            keyword: ["Droid"]
            slots: [
                "Canon"
                "Canon"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "MagnaGuard Protector"
            id: 542
            max_per_squad: 2
            faction: "Separatist Alliance"
            ship: "Rogue-class Starfighter"
            skill: 4
            points: 4
            loadout: 10
            chassis: "Networked Calculations"
            keyword: ["Droid"]
            slots: [
                "Canon"
                "Canon"
                "Missile"
                "Modification"
            ]
            applies_condition: 'Guarded'.canonicalize()
        }
        {
            name: "MagnaGuard Executioner"
            id: 543
            faction: "Separatist Alliance"
            ship: "Rogue-class Starfighter"
            skill: 3
            points: 4
            loadout: 6
            chassis: "Networked Calculations"
            keyword: ["Droid"]
            slots: [
                "Canon"
                "Canon"
                "Modification"
            ]
        }
        {
            name: '"Knack"'
            id: 544
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 5
            points: 3
            loadout: 7
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: '"Slider"'
            id: 545
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 4
            charge: 2
            recurring: 1
            points: 2
            loadout: 3
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Modification"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: '"Hawk" (Z-95)'
            id: 546
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 4
            points: 3
            loadout: 8
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Sensor"
                "Modification"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: '"Warthog" (Z-95)'
            id: 547
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 3
            points: 3
            loadout: 10
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Sensor"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: '"Boost",'
            id: 548
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 3
            points: 2
            loadout: 3
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: '"Drift"'
            id: 549
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 3
            points: 3
            loadout: 5
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Sensor"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: '"Stub"'
            id: 550
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 3
            points: 3
            loadout: 8
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Sensor"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: '"Killer"'
            id: 551
            unique: true
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 2
            points: 3
            loadout: 11
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Talent"
                "Sensor"
                "Canon"
                "Modification"
                "VersatileShip"
            ]
        }
        {
            name: "Reaper Squadron Scout"
            id: 552
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 3
            points: 3
            loadout: 2
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Sensor"
                "VersatileShip"
            ]
        }
        {
            name: "7th Sky Corps Pilot"
            id: 553
            faction: "Galactic Republic"
            ship: "Clone Z-95 Headhunter"
            skill: 2
            points: 3
            loadout: 3
            keyword: ["Clone"]
            slots: [
                "Sensor"
                "Modification"
                "VersatileShip"
            ]
        }
       
        
       
        {
            name: "Keo Venzee"
            id: 597
            unique: true
            faction: "Rebel_Alliance"
            ship: "RZ-1 A-wing"
            skill: 3
            points: 3
            loadout: 7
            force: 1
            forcerecurring: 0
            slots: [
                "Talent"
                "Missile"
                "Configuration"
            ]
        }
        
       
        
        {
            name: "Second Sister"
            id: 601
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/in Interceptor"
            skill: 4
            force: 2
            points: 5
            loadout: 14
            keyword: ["Dark Side"]
            slots: [
                "Force"
                "Talent"
                "Missile"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Magna Tolvan"
            id: 602
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 3
            points: 3
            loadout: 10
            slots: [
                "Talent"
                "Canon"
                "Modification"
            ]
        }
        {
            name: "Yrica Quell"
            id: 603
            unique: true
            faction: "Imperial_Academy"
            ship: "TIE/ln Fighter"
            skill: 3
            points: 3
            loadout: 9
            slots: [
                "Talent"
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Poe Dameron (YT-1300)"
            id: 604
            unique: true
            faction: "Resistance"
            ship: "Scavenged YT-1300"
            skill: 6
            charge: 2
            recurring: 1
            points: 7
            loadout: 25
            slots: [
                "Talent"
                "Talent"
                "Missile"
                "Crew"
                "Gunner"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Lando Calrissian (Resistance)"
            id: 605
            unique: true
            faction: "Resistance"
            ship: "Scavenged YT-1300"
            skill: 5
            charge: 3
            recurring: 1
            points: 7
            loadout: 20
            slots: [
                "Talent"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Illicit"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Venisa Doza"
            id: 606
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 4
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Tech"
                "Missile"
                "Missile"
                "Astromech"
                "Modification"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Zay Versio"
            id: 607
            unique: true
            faction: "Resistance"
            ship: "T-70 X-wing"
            skill: 3
            points: 4
            loadout: 7
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Astromech"
                "Modification"
                "Configuration"
                "HardpointShip"
            ]
        }
        {
            name: "Taka Jamoreesa"
            id: 608
            unique: true
            faction: "Resistance"
            ship: "Resistance Transport"
            skill: 2
            points: 4
            loadout: 15
            slots: [
                "Talent"
                "Tech"
                "Canon"
                "Canon"
                "Torpedo"
                "Astromech"
                "Illicit"
                "Modification"
            ]
        }
        
        
       
        {
            name: "Doctor Aphra"
            id: 612
            unique: true
            faction: "Scum and Villainy"
            ship: "YV-666 Light Freighter"
            skill: 3
            points: 6
            loadout: 22
            charge: 3
            slots: [
                "Canon"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Illicit"
                "Illicit"
                "Modification"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Lapin"
            id: 613
            unique: true
            faction: "Scum and Villainy"
            ship: "Modified TIE/ln Fighter"
            skill: 3
            points: 3
            loadout: 7
            slots: [
                "Talent"
                "Canon"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Volan Das"
            id: 614
            unique: true
            faction: "Separatist Alliance"
            ship: "Droid Tri-fighter"
            skill: 5
            points: 4
            loadout: 12
            chassis: "Modified for Organics"
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Missile"
                "Illicit"
                "Modification"
            ]
            ship_override:
                actions: [
                    "Focus",
                    "Evade",
                    "Lock",
                    "Barrel Roll",
                    "R-> Evade",
                    "Boost",
                    "R-> Focus"
                ]
        }
        {
            name: "Aurra Sing"
            id: 615
            unique: true
            faction: "Separatist Alliance"
            ship: "Firespray-class Patrol Craft"
            skill: 4
            force: 1
            points: 7
            loadout: 10
            keyword: ["Dark Side","Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Canon"
                "Device"
                "Illicit"
                "Modification"
                "Title"
            ]
        }
        {
            name: "Durge (Separatist)"
            xwsaddon: "separatistalliance"
            id: 616
            unique: true
            faction: "Separatist Alliance"
            ship: "Rogue-class Starfighter"
            skill: 5
            charge: 1
            points: 4
            loadout: 10
            keyword: ["Bounty Hunter"]
            slots: [
                "Talent"
                "Canon"
                "Canon"
                "Illicit"
                "Modification"
                "Modification"
                "Title"
            ]
        }
        {
            name: "The Iron Assembler"
            id: 617
            unique: true
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 1
            charge: 3
            points: 2
            loadout: 5
            keyword: ["Droid"]
            slots: [
                "Missile"
                "Modification"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Kelrodo-Ai Holdout"
            id: 618
            faction: "Separatist Alliance"
            ship: "Vulture-class Droid Fighter"
            skill: 1
            max_per_squad: 3
            points: 2
            loadout: 7
            chassis: "Modified for Organics"
            slots: [
                "Talent"
                "Missile"
                "Modification"
            ]
            ship_override:
                actions: [
                    "Calculate",
                    "Lock",
                    "Barrel Roll",
                    "R-> Focus"
                ]
        }
        {
            name: "Adi Gallia"
            id: 619
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7 Aethersprite"
            skill: 5
            points: 5
            loadout: 12
            force: 2
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Talent"
                "Astromech"
                "Modification"
                "Configuration"
            ]
        }
        {
            name: "Adi Gallia (Delta-7B)"
            id: 620
            unique: true
            faction: "Galactic Republic"
            ship: "Delta-7b Aethersprite"
            skill: 5
            force: 2
            points: 7
            loadout: 18
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Talent"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: '"Sicko"'
            id: 621
            unique: true
            faction: "Galactic Republic"
            ship: "LAAT/i Gunship"
            skill: 2
            charge: 2
            recurring: 1
            points: 5
            loadout: 12
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Missile"
                "Crew"
                "Crew"
                "Gunner"
                "Gunner"
                "Modification"
            ]
            applies_condition: 'Sickening Maneuver'.canonicalize()
        }
        {
            name: "Kit Fisto"
            id: 622
            unique: true
            faction: "Galactic Republic"
            ship: "Eta-2 Actis"
            skill: 4
            force: 2
            points: 4
            loadout: 11
            keyword: ["Jedi","Light Side"]
            slots: [
                "Force"
                "Force"
                "Talent"
                "Canon"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: '"Slammer"'
            id: 623
            unique: true
            faction: "Galactic Republic"
            ship: "V-19 Torrent Starfighter"
            skill: 1
            charge: 2
            recurring: 1
            points: 3
            loadout: 7
            keyword: ["Clone"]
            slots: [
                "Talent"
                "Missile"
                "Missile"
                "Modification"
            ]
        }
        {
            name: "Gavyn Sykes"
            id: 624
            unique: true
            faction: "Galactic Republic"
            ship: "Naboo Royal N-1 Starfighter"
            skill: 3
            points: 4
            loadout: 16
            slots: [
                "Talent"
                "Sensor"
                "Torpedo"
                "Astromech"
                "Modification"
            ]
        }
        {
            name: "Lieutenant Galek"
            id: 625
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 5
            points: 3
            loadout: 7
            slots: [
                "Talent"
                "Tech"
                "Tech"
                "Canon"
                "Modification"
            ]
        }
        {
            name: "Jul Jerjerrod"
            id: 626
            unique: true
            faction: "First_Order"
            ship: "TIE/se Bomber"
            skill: 4
            charge: 3
            points: 4
            loadout: 13
            slots: [
                "Talent"
                "Tech"
                "Torpedo"
                "Missile"
                "Gunner"
                "Device"
                "Device"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "DT-798"
            id: 627
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 4
            points: 3
            loadout: 6
            slots: [
                "Talent"
                "Tech"
                "Modification"
                "Modification"
            ]
        }
        {
            name: "Lin Gaava"
            id: 628
            unique: true
            faction: "First_Order"
            ship: "TIE/fo Fighter"
            skill: 3
            points: 3
            loadout: 9
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Modification"
            ]
            applies_condition: '''Primed For Speed'''.canonicalize()
        }
        {
            name: "Agent Tierny"
            id: 629
            unique: true
            faction: "First_Order"
            ship: "Xi-class Light Shuttle"
            skill: 3
            points: 5
            loadout: 15
            slots: [
                "Talent"
                "Talent"
                "Tech"
                "Crew"
                "Crew"
                "Modification"
                "Modification"
            ]
            ship_override:
                actions: [
                    "Focus",
                    "Lock",
                    "R-Coordinate"
                    "Jam"
   ,             ]
            applies_condition: '''Broken Trust'''.canonicalize()
        }
       
##############################################################################
################################################################################
################################################################################
################################################################################
#######################################################################
################################################################################""
    upgradesById: [



        
       
       
       
       
      
       
       
 ############################################################################################################       
############################################################################################################       
############################################################################################################       
    conditionsById: [
        {
            name: '''Zero Condition'''
            id: 0
        }
        {
            name: 'Suppressive Fire'
            id: 1
            unique: true
        }
        {
            name: 'Hunted'
            id: 2
            unique: true
        }
        {
            name: 'Listening Device'
            id: 3
            unique: true
        }
        {
            name: 'Optimized Prototype'
            id: 4
            unique: true
        }
        {
            name: '''I'll Show You the Dark Side'''
            id: 5
            unique: true
        }
        {
            name: 'Proton Bomb'
            id: 6
        }
        {
            name: 'Seismic Charge'
            id: 7
        }
        {
            name: 'Bomblet'
            id: 8
        }
        {
            name: 'Loose Cargo'
            id: 9
        }
        {
            name: 'Conner Net'
            id: 10
        }
        {
            name: 'Proximity Mine'
            id: 11
        }
        {
            name: 'Rattled'
            id: 12
            unique: true
        }
        {
            name: 'DRK-1 Probe Droid'
            id: 13
        }
        {
            name: 'Buzz Droid Swarm'
            id: 14
        }
        {
            name: '''It's the Resistance'''
            id: 15
        }
        {
            name: 'Electro-Proton Bomb'
            id: 16
        }
        {
            name: 'Decoyed'
            id: 17
            unique: true
        }
        {
            name: 'Compromising Intel'
            id: 18
            unique: true
        }
        {
            name: 'Cluster Mine'
            id: 19
        }
        {
            name: 'Ion Bomb'
            id: 20
        }
        {
            name: 'Concussion Bomb'
            id: 21
        }
        {
            name: 'Thermal Detonator'
            id: 22
        }
        {
            name: 'Sensor Buoy'
            id: 23
        }
        {
            name: 'Fearful Prey'
            id: 24
            unique: true
        }
        {
            name: 'You Should Thank Me'
            id: 25
        }
        {
            name: '''You'd Better Mean Business'''
            id: 26
        }
        {
            name: '''Spare Parts'''
            id: 27
        }
        {
            name: '''Electro-Chaff Cloud'''
            id: 28
        }
        {
            name: '''Tracking Torpedoes'''
            id: 29
        }
        {
            name: '''False Friend'''
            id: 30
            unique: true
        }
        {
            name: '''Trials of the Darksaber'''
            id: 31
            unique: true
        }
        {
            name: '''Blazer Bomb'''
            id: 32
        }
        {
            name: '''Merciless Pursuit'''
            id: 33
        }
        {
            name: '''Marked for Elimination'''
            id: 34
            unique: true
        }
        {
            name: '''Clan Wren Commandos'''
            id: 35
        }
        {
            name: '''Nite Owl Commandos'''
            id: 36
        }
        {
            name: '''Death Watch Commandos'''
            id: 37
        }
        {
            name: '''Imperial Super Commandos'''
            id: 38
        }
        {
            name: '''Mandalorian Super Commandos'''
            id: 39
        }
        {
            name: '''Guarded'''
            id: 40
        }
        {
            name: '''Sickening Maneuver'''
            id: 41
        }
        {
            name: '''Primed For Speed'''
            id: 42
        }
        {
            name: '''Broken Trust'''
            id: 43
        }
    ]

    chassisById: [
        {
            name: "Hope"
            id: 0
        }
        {
            name: "Autothrusters"
            id: 1
        }
        {
            name: "Microthrusters"
            id: 2
        }
        {
            name: "Sensor Blindspot"
            id: 3
        }
        {
            name: "Stygium Array"
            id: 4
        }
        {
            name: "Experimental Scanners"
            id: 5
        }
        {
            name: "Full Throttle"
            id: 6
        }
        {
            name: "Nimble Bomber"
            id: 7
        }
        {
            name: "Weapon Hardpoint"
            id: 8
        }
        {
            name: "Advanced Targeting Computer"
            id: 9
        }
        {
            name: "Vectored Thrusters"
            id: 10
        }
        {
            name: "Advanced Fire Control"
            id: 11
        }
        {
            name: "Sensitive Controls"
            id: 12
        }
        {
            name: "Spacetug Tractor Array"
            id: 13
        }
        {
            name: "Concordia Faceoff"
            id: 14
        }
        {
            name: "Locked and Loaded"
            id: 15
        }
        {
            name: "Tail Gun"
            id: 16
        }
        {
            name: "Advanced Droid Brain"
            id: 17
        }     
        {
            name: "Vectored Canons"
            id: 18
        }
        {
            name: "Networked Calculations"
            id: 19
        }
        {
            name: "Independent Calculations"
            id: 20
        }
        {
            name: "Linked Battery"
            id: 21
        }
        {
            name: "Heavy Weapon Turret"
            id: 22
        }
        {
            name: "Refined Gyrostabilizers"
            id: 23
        }
        {
            name: "Rigged Energy Cells"
            id: 24
        }
        {
            name: "Co-Pilot"
            id: 25
        }
        {
            name: "Controlled Ailerons"
            id: 26
        }
        {
            name: "Comms Shuttle"
            id: 27
        }
        {
            name: "Dead to Rights"
            id: 28
        }
        {
            name: "Pursuit Craft"
            id: 29
        }
        {
            name: "Adaptive Ailerons"
            id: 30
        }
        {
            name: "Fire Convergence"
            id: 31
        }
        {
            name: "Networked Aim"
            id: 32
        }
        {
            name: "Fine-Tuned Thrusters"
            id: 33
        }
        {
            name: "Explosion with Wings"
            id: 34
        }
        {
            name: "Plated Hull"
            id: 35
        }
        {
            name: "Pinpoint Tractor Array"
            id: 36
        }
        {
            name: "Fine-Tuned Controls"
            id: 37
        }
        {
            name: "Notched Stabilizers"
            id: 38
        }
        {
            name: "Rotating Canons"
            id: 39
        }
        {
            name: "Twin Ion Engines"
            id: 40
        }
        {
            name: "Versatile Frame"
            id: 41
        }
        {
            name: "Pursuit Thrusters"
            id: 42
        }
        {
            name: "Devastating Barrage"
            id: 43
        }
        {
            name: "Intuitive Interface"
            id: 44
        }
        {
            name: "Intuitive Controls"
            id: 45
        }
        {
            name: "Born for This"
            id: 46
        }
        {
            name: "Modified for Organics"
            id: 47
            modifier_func: (stats) ->
                if stats.maneuvers[2]?,
                    for turn in [0 ... 5]
                        if (turn == 1 or turn == 3)
                            if stats.maneuvers[2][,turn] > 1
                                stats.maneuvers[2][,turn]--
                            if stats.maneuvers[3],[turn] > 1
                                stats.maneuvers[3],[turn]--
                        if (turn == 0 or turn == 4) and stats.maneuvers[3],[turn] < 3
                            stats.maneuvers[3],[turn]++
        }
        {
            name: "Solo"
            id: 48
        }
        {
            name: "Sensor Blackout"
            id: 49
        }
        {
            name: "Locked S-Foils"
            id: 50
        }
        {
            name: "High Stakes"
            id: 51
        }
        {
            name: "Chiss Engineering"
            id: 52
        }
        {
            name: "Gyro-Cockpit"
            id: 53
        }
        {
            name: "Formed Up"
            id: 54
        }
    ]

    damageById: [
        {
            name: "Panicked Pilot"
            quantity: 2
            type: "Pilot"
            id: 0
        }
        {
            name: "Blinded Pilot"
            quantity: 2
            type: "Pilot"
            id: 1
        }
        {
            name: "Wounded Pilot"
            quantity: 2
            type: "Pilot"
            id: 2
        }
        {
            name: "Stunned Pilot"
            quantity: 2
            type: "Pilot"
            id: 3
        }
        {
            name: "Console Fire"
            quantity: 2
            type: "Ship"
            id: 4
        }
        {
            name: "Damaged Engine"
            quantity: 2
            type: "Ship"
            id: 5
        }
        {
            name: "Weapons Failure"
            quantity: 2
            type: "Ship"
            id: 6
        }
        {
            name: "Hull Breach"
            quantity: 2
            type: "Ship"
            id: 7
        }
        {
            name: "Structural Damage"
            quantity: 2
            type: "Ship"
            id: 8
        }
        {
            name: "Damaged Sensor Array"
            quantity: 2
            type: "Ship"
            id: 9
        }
        {
            name: "Loose Stabilizer"
            quantity: 2
            type: "Ship"
            id: 10
        }
        {
            name: "Disabled Power Regulator"
            quantity: 2
            type: "Ship"
            id: 11
        }
        {
            name: "Fuel Leak"
            quantity: 4
            type: "Ship"
            id: 12
        }
        {
            name: "Direct Hit!"
            quantity: 5
            type: "Ship"
            id: 13
        }
    ]

exportObj.setupCommonCardData = (basic_cards) ->
    # assert that each ID is the index into BLAHById (should keep this, in general)
    for pilot_data, i in basic_cards.pilotsById
        if pilot_data.id != i
            throw new Error("ID mismatch: pilot at index #{i} has ID #{pilot_data.id}")
    for upgrade_data, i in basic_cards.upgradesById
        if upgrade_data.id != i
            throw new Error("ID mismatch: upgrade at index #{i} has ID #{upgrade_data.id}")
    for condition_data, i in basic_cards.conditionsById
        if condition_data.id != i
            throw new Error("ID mismatch: condition at index #{i} has ID #{condition_data.id}")
    for chassis_data, i in basic_cards.chassisById
        if chassis_data.id != i
            throw new Error("ID mismatch: chassis at index #{i} has ID #{chassis_data.id}")
    for damage_data, i in basic_cards.damageById
        if damage_data.id != i
            throw new Error("ID mismatch: damage card at index #{i} has ID #{damage_data.id}")


    exportObj.pilots = {}
    # Assuming a given pilot is unique by name...
    for pilot_data in basic_cards.pilotsById
        unless pilot_data.skip?
            pilot_data.sources = []
            name_parse = pilot_data.name.split("(")
            pilot_data.canonical_name = name_parse[0],.canonicalize() unless pilot_data.canonical_name?

            # XWS rework
            pilot_data.xws = if pilot_data.xws? then pilot_data.xws else (if pilot_data.xwsaddon? then (pilot_data.canonical_name + "-" + pilot_data.xwsaddon) else (pilot_data.canonical_name + (if name_parse[1]? then ("-" + pilot_data.ship.canonicalize()) else "")))

            exportObj.pilots[pilot_data.name] = pilot_data
    # pilot_name is the English version here as it's the common index into
    # basic card info

    exportObj.upgrades = {}
    for upgrade_data in basic_cards.upgradesById
        unless upgrade_data.skip?
            upgrade_data.sources = []
            name_parse = upgrade_data.name.split("(")
            upgrade_data.canonical_name = name_parse[0],.canonicalize() unless upgrade_data.canonical_name?

            # XWS rework
            upgrade_data.xws = if upgrade_data.xws? then upgrade_data.xws else (if upgrade_data.xwsaddon? then (upgrade_data.canonical_name + "-" + upgrade_data.xwsaddon) else (upgrade_data.canonical_name + (if name_parse[1]? then ("-" + upgrade_data.slot.canonicalize()) else "")))


            exportObj.upgrades[upgrade_data.name] = upgrade_data

    exportObj.conditions = {}
    for condition_data in basic_cards.conditionsById
        unless condition_data.skip?
            condition_data.canonical_name = condition_data.name.canonicalize() unless condition_data.canonical_name?
            exportObj.conditions[condition_data.name] = condition_data

    exportObj.chassis = {}
    for chassis_data in basic_cards.chassisById
        unless chassis_data.skip?
            chassis_data.canonical_name = chassis_data.name.canonicalize() unless chassis_data.canonical_name?
            exportObj.chassis[chassis_data.name] = chassis_data

    exportObj.damage = {}
    for damage_data in basic_cards.damageById
        unless damage_data.skip?
            damage_data.canonical_name = damage_data.name.canonicalize() unless damage_data.canonical_name?
            exportObj.damage[damage_data.name] = damage_data
        damage_data.sources = []

    exportObj.obstacles = {}
    # we just want to include obstacles in the manifest like we already do for other stuff. No information other than sources will be used

    for ship_name, ship_data of basic_cards.ships
        ship_data.canonical_name ?= ship_data.name.canonicalize()
        ship_data.sources = []

    # Set sources from manifest
    for expansion, cards of exportObj.manifestByExpansion
        # console.log(exportObj.manifestByExpansion)
        for card in cards
            continue if card.skipForSource # heavy scyk special case :(
            try
                switch card.type
                    when 'pilot'
                        exportObj.pilots[card.name].sources.push expansion
                    when 'upgrade'
                        exportObj.upgrades[card.name].sources.push expansion
                    when 'ship'
                        exportObj.ships[card.name].sources.push expansion
                    when 'damage'
                        exportObj.damage[card.name].sources.push expansion
                    when 'obstacle'
                        if card.name not of exportObj.obstacles
                            exportObj.obstacles[card.name] = {sources: []}
                        exportObj.obstacles[card.name].sources.push expansion
                    else
                        throw new Error("Unexpected card type #{card.type} for card #{card.name} of #{expansion}")
            catch e
                console.log(e)
                console.error "Error adding card #{card.name} (#{card.type}) from #{expansion}"


    for name, card of exportObj.pilots
        card.sources = card.sources.sort()
    for name, card of exportObj.upgrades
        card.sources = card.sources.sort()

    exportObj.expansions = {}

    exportObj.pilotsById = {}
    for pilot_name, pilot of exportObj.pilots
        exportObj.fixIcons pilot
        exportObj.pilotsById[pilot.id] = pilot
        for source in pilot.sources
            exportObj.expansions[source] = 1 if source not of exportObj.expansions
    if Object.keys(exportObj.pilotsById).length != Object.keys(exportObj.pilots).length
        throw new Error("At least one pilot shares an ID with another")

    exportObj.pilotsByFactionCanonicalName = {}
    exportObj.pilotsByKeyword = {}
    # uniqueness can't be enforced just be canonical name, but by the base part
    exportObj.pilotsByUniqueName = {}
    for pilot_name, pilot of exportObj.pilots
        ((exportObj.pilotsByFactionCanonicalName[pilot.faction] ?= {})[pilot.canonical_name] ?= []).push pilot
        ((exportObj.pilotsByKeyword[pilot.keyword] ?= {})[pilot.canonical_name] ?= []).push pilot
        (exportObj.pilotsByUniqueName[pilot.canonical_name.getXWSBaseName()] ?= []).push pilot

    exportObj.pilotsByFactionXWS = {}
    for pilot_name, pilot of exportObj.pilots
        ((exportObj.pilotsByFactionXWS[pilot.faction] ?= {})[pilot.xws] ?= []).push pilot


    exportObj.upgradesById = {}
    for upgrade_name, upgrade of exportObj.upgrades
        exportObj.fixIcons upgrade
        exportObj.upgradesById[upgrade.id] = upgrade
        for source in upgrade.sources
            exportObj.expansions[source] = 1 if source not of exportObj.expansions
    if Object.keys(exportObj.upgradesById).length != Object.keys(exportObj.upgrades).length
        throw new Error("At least one upgrade shares an ID with another")

    exportObj.upgradesBySlotCanonicalName = {}
    exportObj.upgradesBySlotXWSName = {}
    exportObj.upgradesBySlotUniqueName = {}
    exportObj.upgradesByUniqueName = {}
    for upgrade_name, upgrade of exportObj.upgrades
        (exportObj.upgradesBySlotCanonicalName[upgrade.slot] ?= {})[upgrade.canonical_name] = upgrade
        (exportObj.upgradesBySlotXWSName[upgrade.slot] ?= {})[upgrade.xws] = upgrade
        (exportObj.upgradesBySlotUniqueName[upgrade.slot] ?= {})[upgrade.canonical_name.getXWSBaseName()] = upgrade
        (exportObj.upgradesByUniqueName[upgrade.canonical_name.getXWSBaseName()] ?= []).push upgrade

    exportObj.conditionsById = {}
    for condition_name, condition of exportObj.conditions
        exportObj.fixIcons condition
        exportObj.conditionsById[condition.id] = condition
    if Object.keys(exportObj.conditionsById).length != Object.keys(exportObj.conditions).length
        throw new Error("At least one condition shares an ID with another")

    exportObj.chassisById = {}
    for chassis_name, chassis of exportObj.chassis
        exportObj.fixIcons chassis
        exportObj.chassisById[chassis.id] = chassis
    if Object.keys(exportObj.chassisById).length != Object.keys(exportObj.chassis).length
        throw new Error("At least one chassis shares an ID with another")

    exportObj.conditionsByCanonicalName = {}
    for condition_name, condition of exportObj.conditions
        (exportObj.conditionsByCanonicalName ?= {})[condition.canonical_name] = condition

    exportObj.chassisByCanonicalName = {}
    for chassis_name, chassis of exportObj.chassis
        (exportObj.chassisByCanonicalName ?= {})[chassis.canonical_name] = chassis


    exportObj.expansions = Object.keys(exportObj.expansions).sort()

exportObj.setupTranslationCardData = (pilot_translations, upgrade_translations, condition_translations, chassis_translations, damage_translations={}) ->
    for upgrade_name, translations of upgrade_translations
        exportObj.fixIcons translations
        for field, translation of translations
            try
                exportObj.upgrades[upgrade_name][field] = translation
            catch e
                console.error "Cannot find translation for attribute #{field} for upgrade #{upgrade_name}. Please report this Issue. "
                throw e

    for condition_name, translations of condition_translations
        exportObj.fixIcons translations
        for field, translation of translations
            try
                exportObj.conditions[condition_name][field] = translation
            catch e
                console.error "Cannot find translation for attribute #{field} for condition #{condition_name}. Please report this Issue. "
                throw e

    for chassis_name, translations of chassis_translations
        exportObj.fixIcons translations
        for field, translation of translations
            try
                exportObj.chassis[chassis_name][field] = translation
            catch e
                console.error "Cannot find translation for attribute #{field} for chassis #{chassis_name}. Please report this Issue. "
                throw e


    for damage_name, translations of damage_translations
        exportObj.fixIcons translations
        for field, translation of translations
            try
                exportObj.damage[damage_name][field] = translation
            catch e
                console.error "Cannot find translation for attribute #{field} for damage card #{damage_name}. Please report this Issue. "
                throw e


    for pilot_name, translations of pilot_translations
        exportObj.fixIcons translations
        for field, translation of translations
            try
                exportObj.pilots[pilot_name][field] = translation
            catch e
                console.error "Cannot find translation for attribute #{field} for pilot #{pilot_name}. Please report this Issue. "
                throw e

exportObj.fixIcons = (data) ->
    if data.text?
        data.text = data.text
            .replace(/%BULLSEYEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bullseyearc", title="Bullseye Arc",></i>')
            .replace(/%SINGLETURRETARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-singleturretarc", title="Single Turret Arc",></i>')
            .replace(/%DOUBLETURRETARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-doubleturretarc", title="Double Turret Arc",></i>')
            .replace(/%FRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-frontarc", title="Front Arc",></i>')
            .replace(/%REARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reararc", title="Rear Arc",></i>')
            .replace(/%LEFTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-leftarc", title="Left Arc",></i>')
            .replace(/%RIGHTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rightarc", title="Right Arc",></i>')
            .replace(/%ROTATEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rotatearc", title="Rotate Arc",></i>')
            .replace(/%FULLFRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullfrontarc", title="Full Front Arc",></i>')
            .replace(/%FULLREARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullreararc", title="Full Rear Arc",></i>')
            .replace(/%PAYLOAD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-device" title="Device"></i>')
            .replace(/%MODIFICATION%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-modification" title="Modification"></i>')
            .replace(/%RELOAD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reload", title="Reload",></i>')
            .replace(/%FORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-forcecharge" title="Force"></i>')
            .replace(/%CHARGE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-charge" title="Charge"></i>')
            .replace(/%ENERGY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-energy" title="Energy"></i>')
            .replace(/%CALCULATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-calculate", title="Calculate",></i>')
            .replace(/%BANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankleft" title="Bank Left"></i>')
            .replace(/%BANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankright" title="Bank Right"></i>')
            .replace(/%BARRELROLL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-barrelroll" title="Barrel Roll",></i>')
            .replace(/%BOOST%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-boost", title="Boost",></i>')
            .replace(/%CANON%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-canon" title="Canon"></i>')
            .replace(/%CARGO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cargo" title="Cargo"></i>')
            .replace(/%CLOAK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cloak" title="Cloak"></i>')
            .replace(/%F-COORDINATE%/g, '<i class="xwing-miniatures-font force xwing-miniatures-font-coordinate" title="Force Coordinate"></i>')
            .replace(/%COORDINATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-coordinate" title="Coordinate"></i>')
            .replace(/%CRIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crit" title="Crit"></i>')
            .replace(/%ASTROMECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-astromech" title="Astromech"></i>')
            .replace(/%GUNNER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-gunner" title="Gunner"></i>')
            .replace(/%CREW%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crew" title="Crew"></i>')
            .replace(/%TACTICALRELAY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tacticalrelay" title="Tactical Relay"></i>')
            .replace(/%HARDPOINT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint" title="Hardpoint"></i>')
            .replace(/%EVADE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-evade", title="Evade",></i>')
            .replace(/%FOCUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-focus" title="Focus",></i>')
            .replace(/%HIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hit" title="Hit"></i>')
            .replace(/%ILLICIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-illicit" title="Illicit"></i>')
            .replace(/%JAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-jam" title="Jam"></i>')
            .replace(/%MISSILE%/g, '<i class="xwing-miniatures-font xwing-mi,niatures-fon,t-missile" title="Missile"></i>')
            .replace(/%F-REINFORCE%/g, '<i class="xwing-miniatures-font force xwing-miniatures-font-reinforce", title="Force Reinforce",></i>')
            .replace(/%REINFORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reinforce", title="Reinforce",></i>')
            .replace(/%REVERSESTRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversestraight" title="Reverse Straight"></i>')
            .replace(/%REVERSEBANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversebankleft" title="Reverse Bank Left"></i>')
            .replace(/%REVERSEBANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversebankright" title="Reverse Bank Right"></i>')
            .replace(/%SHIELD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-shield" title="Shield"></i>')
            .replace(/%SLAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-slam" title="Slam"></i>')
            .replace(/%SLOOPLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopleft" title="Segnors Loop Left"></i>')
            .replace(/%SLOOPRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopright" title="Segnors Loop Right"></i>')
            .replace(/%STRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-straight" title="Straight"></i>')
            .replace(/%STOP%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-stop" title="Stop"></i>')
            .replace(/%SENSOR%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sensor" title="Sensor"></i>')
            .replace(/%LOCK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-lock" title="Lock",></i>')
            .replace(/%TORPEDO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-torpedo" title="Torpedo"></i>')
            .replace(/%TROLLLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollleft" title="Tallon Roll Left"></i>')
            .replace(/%TROLLRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollright" title="Tallon Roll Right"></i>')
            .replace(/%TURNLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnleft" title="Turn Left"></i>')
            .replace(/%TURNRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnright" title="Turn Right"></i>')
            .replace(/%TURRET%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turret" title="Turret"></i>')
            .replace(/%KTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn" title="Koiogran Turn"></i>')
            .replace(/%TALENT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-talent" title="Talent"></i>')
            .replace(/%TITLE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-title" title="Title"></i>')
            .replace(/%TEAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-team" title="Team"></i>')
            .replace(/%TECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tech" title="Tech"></i>')
            .replace(/%FORCEPOWER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-forcepower" title="Force"></i>')
            .replace(/%RANGEBONUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rangebonusindicator" title="Range Bonus Negated"></i>')
            .replace(/%CONFIGURATION%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-config" title="Configuration"></i>')
            .replace(/%AGILITY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-agility" title="Agility"></i>')
            .replace(/%HULL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hull" title="Hull"></i>')
            .replace(/%STRAIN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-token-strain" title="Strain Token"></i>')
            .replace(/%DEPLETE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-token-deplete" title="Deplete Token"></i>')
            .replace(/%TRACTOR%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-token-tractor" title="Tractor Token"></i>')
            .replace(/%ION%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-token-ion" title="Ion Token"></i>')
            .replace(/%STRESS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-token-stress" title="Stress Token"></i>')
            .replace(/%RECURRING%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-recurring" title="Recurring"></i>')
            .replace(/%NEGATIVERECURRING%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-negativerecurring" title="Negative Recurring"></i>')
            .replace(/%MISSIONPOINT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-point" title="Mission Point"></i>')
            .replace(/%FUSE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fuse" title="Fuse"></i>')
            .replace(/%CALCULATOR%/g,############)
            .replace(/%LINEBREAK%/g, '<br /><br />')

exportObj.canonicalizeShipNames = (card_data) ->
    for ship_name, ship_data of card_data.ships
        ship_data.canonical_name ?= ship_data.name.canonicalize()

exportObj.renameShip = (name, new_name) ->
    exportObj.ships[name].display_name = new_name

exportObj.randomizer = (faction_name, points) ->
    shiplistmaster = exportObj.basicCardData #export ship database
    listcount = 0 #start count at 0
    #for shiplistmaster in shiplistmaster.pilotsbyid.faction == faction_name loop grab pilots by faction
        #if Math.random() >= 0.9
        #append.shiplistmaster.pilotsbyid.xws ? shiplistmaster.pilotsbyid.canonical_name ? shiplistmaster.pilotsbyid.name.canonicalize())






exportObj.standardCheckBrowser = (data, faction='', type) ->
    # check ship/pilot first
    if type == 'Pilot'
        check = false
        for ship in exportObj.standardShipInclusions
            if (data.faction == ship.faction && (data.ship == ship.name))
                check = true
        if check == false
            return false
        return data.name not in exportObj.standardPilotExclusions
    else if type == 'Ship'
        for ship in exportObj.standardShipInclusions
            # checks against name for ship itself or ship name/faction for pilot inclusions
            if (ship.faction == faction && (data.name == ship.name || data.ship == ship.name || (Array.isArray(data.ship) and ship.name in data.ship)))
                return true
        return false
    else
        return data.name not in exportObj.standardUpgradeExclusions

String::ParseParameter = (name) ->
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]")
    regexS = "[\\?&]" + name + "=([^&#]*)"
    regex = new RegExp(regexS)
    results = regex.exec(this)
    if results == null
        return ""
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "))

String::serialtoxws = ->
    xws =
        description: ""
        faction: this.ParseParameter('f').canonicalize()
        name: this.ParseParameter('sn')
        pilots: []
        points: 20
        vendor:
            yasb:
                builder: 'YASB - X-Wing 2.5'
                builder_url: "https://yasb.app"
                link: "https://yasb.app/#{this}" 
        version: '02/23/2024'

    serialized = this.ParseParameter('d')
    re = if "Z" in serialized then /^v(\d+)Z(.*)/ else /^v(\d+)!(.*)/
    matches = re.exec serialized
    if matches?
        # Parsing extra data in case we need it later
        version = parseInt matches[1]
        ship_splitter = 'Y'
        [g, p, s] = matches[2].,split('Z')
        [ game_type_abbrev, desired_points, serialized_ships ] = [g, parseInt(p), s]

        switch game_type_abbrev
            when 's'
                gamemode = 'extended'
            when 'h'
                gamemode = 'standard'
            when 'e'
                return "error: game mode not supported"
            when 'q'
                return "error: game mode not supported"

        if !serialized_ships? # something went wrong, we can't load that serialization
            return "error: serialization read failed"

        #independantly setting up basic card data for xws output
        card_data = exportObj.basicCardData()

        card_pilots = {}
        for pilot_data in card_data.pilotsById
            unless pilot_data.skip?
                name_parse = pilot_data.name.split("(")
                pilot_data.canonical_name = name_parse[0],.canonicalize() unless pilot_data.canonical_name?

                pilot_data.xws = if pilot_data.xws? then pilot_data.xws else (if pilot_data.xwsaddon? then (pilot_data.canonical_name + "-" + pilot_data.xwsaddon) else (pilot_data.canonical_name + (if name_parse[1]? then ("-" + pilot_data.ship.canonicalize()) else "")))
                card_pilots[pilot_data.id] = pilot_data

        cards_upgrades = {}
        for upgrade_data in card_data.upgradesById
            unless upgrade_data.skip?
                name_parse = upgrade_data.name.split("(")
                upgrade_data.canonical_name = name_parse[0],.canonicalize() unless upgrade_data.canonical_name?

                upgrade_data.xws = if upgrade_data.xws? then upgrade_data.xws else (if upgrade_data.xwsaddon? then (upgrade_data.canonical_name + "-" + upgrade_data.xwsaddon) else (upgrade_data.canonical_name + (if name_parse[1]? then ("-" + upgrade_data.slot.canonicalize()) else "")))
                cards_upgrades[upgrade_data.id] = upgrade_data

        if serialized_ships.length?
            # Ship loop
            for serialized_ship in serialized_ships.split(ship_splitter)
                pilot_splitter = 'X'
                upgrade_splitter = 'W'
                
                [ pilot_id, upgrade_ids ] = serialized_ship.split pilot_splitter
                # pilot_data is the pilot info
                pilot_data = card_pilots[parseInt(pilot_id)]
                if pilot_data
                    pilot_xws =
                        id: (pilot_data.xws ? pilot_data.canonical_name)
                        name: (pilot_data.xws ? pilot_data.canonical_name)
                        points: pilot_data.points
                        ship: pilot_data.ship.canonicalize()
                        upgrades: []

                    if not pilot_data.upgrades?
                        upgrade_ids = upgrade_ids.split upgrade_splitter

                        upgrade_obj = {}

                        for i in [upgrade_ids.length - 1 ... -1]
                            upgrade_id = upgrade_ids[i]
                            # upgrade_data is the pilot info
                            upgrade_data = cards_upgrades[parseInt(upgrade_id)]
                            if upgrade_data
                                switch upgrade_data.slot
                                    when 'Force'
                                        slot = 'force-power'
                                    when 'Tactical Relay'
                                        slot = 'tactical-relay'
                                    else
                                        slot = upgrade_data.slot.canonicalize()
                                
                                (upgrade_obj[slot] ?= []).push (upgrade_data.xws ? upgrade_data.canonical_name)

                        pilot_xws.upgrades = upgrade_obj
                
                    xws.pilots.push pilot_xws

    else
        return "error: could not read URL"

    return JSON.stringify(xws)*/