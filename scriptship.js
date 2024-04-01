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
            id: 0,
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
            ],
            slots: ["Torpedo", "Astromech", "Modification"],
            base: "Small"
        },
        {    
            
            name: "BTL-A4 Y-wing",
            factions: [ "Rebel_Alliance", "Hutt_Cartel", "Shadow_Specialists" ],
            
            id: 1,
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
            ],
            base: "Small",
            slots: ["Torpedo", "Turret", "Payload", "Astromech", "Modification"]
        },
        {
        
            name: "RZ-1 A-wing",
            factions: [ "Rebel_Alliance", "Phoenix_Cell" ],
            attack: 2,
            id:2,
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
            ],
            base: "Small",
            slots: ["Missile", "Modification"]
        },
        {
        
            name: "YT-1300 Light Freighter",
            factions: [ "Pirates_and_Smugglers", "Resistance" ],
            id: 3,
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
            base: "Large",
            slots: ["Missile", "Crew", "Crew", "Modification"]
        },
        {
        
            name: "TIE/ln Fighter",
            factions: ["Phoenix_Cell", "Imperial_Academy", "Imperial_Elite_Forces", "Imperial_Remnants"],
            id: 4,
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
            ],
            base: "Small",
            slots: ["Modification"]
        },
        {
    
            name: "TIE Advanced x1",
            factions: [ "Imperial_Academy" ],
            id: 5,
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
            ],
            base: "Small",
            slots: ["Tech", "Missile", "Sensor", "Modification"]
        },
        {
        
            name: "TIE/in Interceptor",
            factions: [ "Imperial_Academy", "Imperial_Elite_Forces", "Imperial_Remnants" ],
            id: 6,
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
            base: "Small",
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 3, 3],
                [ 0, 0, 1, 0, 0, 3, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0]
            ],
            slots: ["Modification"]
        },
        {
        
            name: "Firespray-class Patrol Craft",
            factions: [ "Pirates_and_Smugglers", "Bounty_Hunters_Guild", "Agents_of_Chaos"],
            id: 7,
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
            ],
            slots: ["Crew", "Torpedo", "Payload", "Modification"]
        },
        {
        
            name: "HWK-290 Light Freighter",
            factions: [ "Rebel_Alliance", "Pirates_and_Smugglers", "Hutt_Cartel" ],
            id: 8,
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
            ],
            base: "Small",
            slots: ["Crew", "Payload", "Turret", "Illicit", "Modification", "Modification", "Calculator"]
        },
        {
        
            name: "Lambda-class T-4a Shuttle",
            factions: [ "Imperial_Academy", "ISB" ],
            id: 9,
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
            base: "Large",
            slots: ["Sensor", "Crew", "Gunner", "Cannon", "Modification", "Modification"]

        },
        {
   
            name: "A/SF-01 B-wing",
            factions: [ "Rebel_Alliance" ],
            id: 10,
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
            ],
            base: "Small",
            slots: ["Sensor", "Cannon", "Cannon", "Torpedo", "Gunner", "Payload","Modification"]
        },
        {
            
            name: "TIE/sa Bomber",
            factions: [ "Imperial_Academy" ],
            id: 11,
            attack: 2,
            base: "Small",
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
            ],
            slots: ["Torpedo", "Missile", "Payload", "Gunner", "Modification"]
        },
        {
      
        
            name: "Z-95-AF4 Headhunter",
            factions: [ "Partisans", "Bounty_Hunters_Guild", "Black_Sun", "Pirates_and_Smugglers"  ],
            id: 12,
            attack: 2,
            base: "Small",
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
            ],
            slots: ["Missile", "Illicit"]
        },
        {
    
        
            name: "TIE/d Defender",
            factions: [ "Imperial_Elite_Forces" ],
            id: 13,
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 4,
            base: "Small",
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
            ],
            slots: []
        },
        {
     
    
            name: "E-wing",
            factions: [ "New_Republic" ],
            id: 14,
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 3,
            base: "Small",
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
            id: 15,
            factions: [ "ISB" ],
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 2,
            base: "Small",
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
            id: 16,
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
            ],
            slots: ["Crew", "Gunner", "Cannon", "Turret", "Illicit", "Modification"]
        },
        {
       
            name: "VT-49 Decimator",
            factions: [ "Imperial_Elite_Forces" ],
            id: 17,
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
            id: 18,
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
            base: "Small",
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
            id: 19,
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
            ],
            base: "Small",
            slots: ["Modification", "Weapon_Hardpoint"]
        },
        {
    
       
            name: "Aggressor Assault Fighter",
            factions: [ "Bounty_Hunters_Guild", "Mandalorian_Clans" ],
            id: 20,
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
            ],
            slots: ["Sensor", "Cannon", "Cannon", "Modification"]
        },
        {
    
            name: "YV-666 Light Freighter",
            factions: [ "Hutt_Cartel", "Crime Syndicate", "Bounty_Hunters_Guild" ],
            id: 21,
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
            ],
            slots: ["Crew", "Crew", "Gunner", "Illicit", "Cannon", "Modification"]
        },
        {
    
       
            name: "Kihraxz Fighter",
            factions: ["Black_Sun", "Hutt_Cartel", "Bounty_Hunters_Guild"],
            id: 22,
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
            ],
            base: "Small",
            slots: ["Missile", "Illicit", "Modification"]
        },
        {
  
            name: "BTL-S8 K-wing",
            factions: ["New_Republic"],
            id: 23,
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
            id: 25,
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
            id: 26,
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
            id: 27,
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
            base: "Small",
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
            id: 28,
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
            base: "Small",
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
            id: 27,
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
            ],
            slots: ["Sensor", "Crew", "Illicit", "Modification", "Calculator"]
        },
        {
    
            name: "JumpMaster 5000",
            factions: ["Bounty_Hunters_Guild"],
            id: 28,
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
            ],
            slots: ["Torpedo", "Crew", "Gunner", "Illicit", "Modification"]
        },
        {
 
            name: "ARC-170 Starfighter",
            factions: ["Rebel_Alliance","Galactic_Senate"],
            id: 29,
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
            ],
            slots: ["Crew", "Gunner", "Astromech", "Modification"]
        },
        {
   
      
            name: "Fang Fighter",
            factions: ["Mandalorian_Clans"],
            id: 30,
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
            ],
            base: "Small",
            slots: ["Torpedo", "Modification", "Modification"]
        },
        {
    
            name: "Lancer-Class Pursuit Craft",
            factions: ["Black_Sun", "Crime_Syndicates"],
            id: 31,
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
            id: 31,
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
            base: "Small",
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
            id: 32,
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
            ],
            slots: ["Sensor", "Crew", "Crew", "Modification"]
        },
        {
           
    
            name: "TIE/sk Striker",
            id: 33,
            factions: ["ISB"],
            attack: 3,
            agility: 2,
            hull: 4,
            shields: 0,
            base: "Small",
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
            id: 34,
            attackf: 3,
            agility: 1,
            hull: 6,
            shields: 2,
            base: "Small",
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
            id: 35,
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
            ],
            slots: ["Turret", "Crew", "Gunner", "Payload", "Payload", "Modification"]
        },
        {
  
 
            name: "TIE/ag Aggressor",
            id: 36,
            factions: ["ISB"],
            attack: 2,
            agility: 2,
            hull: 4,
            base: "Small",
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
            id: 37,
            factions: ["ISB"],
            attack: 2,
            agility: 2,
            hull: 4,
            shields: 3,
            base: "Small",
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
            id: 38,
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
            id: 39,
            attack: 2,
            attackb: 2,
            agility: 2,
            hull: 4,
            shields: 1,
            base: "Small",
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
            id: 40,
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
            id: 41,
            attack: 1,
            agility: 2,
            hull: 2,
            shields: 2,
            chassis: "Co-Pilot",
            base: "Small",
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
            ],
            slots: ["Crew", "Illicit"]
        },
        {
  

            name: "T-70 X-wing",
            factions: [ "Resistance", "Colossus"],
            id: 42,
            attack: 3,
            agility: 2,
            hull: 4,
            shields: 3,
            base: "Small",
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
            id: 43,
            attackt: 2,
            agility: 3,
            hull: 2,
            shields: 2,
            base: "Small",
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
            id: 44,
            attack: 2,
            agility: 3,
            hull: 3,
            keyword: ["TIE"],
            shields: 1,
            base: "Small",
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
            id: 45,
            attack: 3,
            agility: 3,
            hull: 4,
            shields: 2,
            base: "Small",
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
            id: 46,
            attack: 2,
            attackt: 2,
            agility: 2,
            hull: 3,
            shields: 3,
            base: "Small",
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
            id: 47,
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
            id: 48,
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
            id: 49,
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 0,
            base: "Small",
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
            id: 50,
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            base: "Small",
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
            id: 51,
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 1,
            base: "Small",
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
            id: 52,
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 3,
            base: "Small",
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
            id: 53,
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
            id: 54,
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 0,
            base: "Small",
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
            id:55,
            factions: ["C.I.S"],
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 2,
            base: "Small",
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
            id:56,
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 2,
            chassis: "Full Throttle",
            base: "Small",
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
            ],
            slots: ["Torpedo", "Astromech", "Illicit", "Sensor"]
        },
        {

            name: "Hyena-class Droid Bomber",
            id: 57,
            factions: ["C.I.S"],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            base: "Small",
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
            id: 58,
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 1,
            base: "Small",
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
            id: 59,
            attack: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            base: "Small",
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
            id: 60,
            attackbull: 3,
            attackt: 2,
            agility: 3,
            hull: 4,
            shields: 0,
            base: "Small",
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
            id: 61,
            attack: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            base: "Small",
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
            id: 62,
            attack: 2,
            agility: 2,
            hull: 6,
            shields: 0,
            base: "Small",
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
            id: 63,
            attack: 3,
            agility: 3,
            hull: 2,
            shields: 2,
            base: "Small",
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
            id: 64,
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
            id: 65,
            attackf: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            base: "Small",
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
            id: 66,
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
            id: 67,
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
            ],
            slots: ["Cannon", "Cannon", "Modification", "Calculator"]
        },
        {
     
            name: "Droid Tri-fighter",
            id: 68,
            factions: ["C.I.S"],
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 0,
            base: "Small",
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
            id: 69,
            attack: 2,
            agility: 3,
            hull: 2,
            shields: 2,
            keyword: ["TIE"],
            base: "Small",
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
            id: 70,
            attackbull: 3,
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 0,
            base: "Small",
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
            id: 71,
            factions: ["Jedi_Order"],
            agility: 1,
            hull: 1,
            shields: 2,
            base: "Small",
            actions: [
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
     
            name: "BTA-NR2 Y-wing",
            factions: ["Resistance"],
            id: 72,
            attack: 2,
            agility: 1,
            hull: 4,
            shields: 3,
            base: "Small",
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
            id: 73,
            factions: ["Shadow_Specialists"],
            attackbull: 3,
            attackt: 2,
            agility: 2,
            hull: 3,
            shields: 2,
            keyword: ["TIE"],
            base: "Small",
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
            id: 74,
            attack: 2,
            agility: 2,
            hull: 4,
            shields: 2,
            base: "Small",
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
            id: 75,
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
            ],
            slots: ["Crew", "Gunner", "Payload", "Modification"]
        },
        {
    
            name: "ST-70 Assault Ship",
            factions: ["Bounty_Hunters_Guild", "Mandalorian_Clans"],
            id: 76,
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
            ],
            slots: ["Crew", "Tech", "Illicit", "Illicit", "Modification", "Modification"]
        },
        {
  
            name: "Clone Z-95 Headhunter",
            factions: [ "Galactic_Senate" ],
            id: 77,
            attack: 2,
            agility: 2,
            base: "Small",
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
            id: 78,
            attack: 2,
            agility: 2,
            base: "Small",
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
            ],
            slots: ["Cannon", "Cannon", "Illicit", "Illicit", "Modification"]
        },
        {

   
            name: "Commando Team",
            factions: [ "Mandalorian_Clans", "Imperial_Remnants" ],
            id: 79,
            sattack: 2,
            srange: [1,2],
            agility: 2,
            base: "Small",
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
            ],
            slots: []
        }
    ];
      
const pilots = [ //ne pas metre de parenthèses ( ou ) dans les noms de pilotes car elles sont utilisées pour les cout dans les menus pilote

//################################################################""REBEL_ALLIANCE    
        
        {
            name: "Red Squadron Veteran",
            id: 0,
            
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            shipId: 0,
            skill: 3,
            points: 6,
            loadout: 5,
            slots: []
        },
        {
            name: "Luke Skywalker",
            id: 1,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            shipId: 0,
            skill: 5,
            points: 9,
            loadout: 10,
            force: 2,
            ability: "Après être devenu le défenseur (avant que les dés ne soient lancés), vous pouvez récupérer 1 #fo# .",
            slots: [
                "Talent",
                "Force"               
            ]
        },
        
        {
            name: "Wedge Antilles",
            id: 2,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            shipId: 0,
            skill: 6,
            points: 8,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, le défenseur lance 1 dé de défense en moins.",
            slots: [
                "Talent",
                "Talent",
                "Talent"
            ]
        },
       
        {
            name: "Biggs Darklighter",
            id: 3,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            shipId: 0,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Tant qu’un autre vaisseau allié à portée 0–1 défend, avant l’étape « Neutraliser les résultats », si vous êtes dans l’arc de l’attaque, vous pouvez subir 1 dégât #hit# ou #crit# pour annuler 1 dégât correspondant.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Wes Janson",
            id: 4,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "T-65 X-wing",
            shipId: 0,
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 5,
            loadout: 15,
            ability: "Après avoir effectué une attaque, vous pouvez dépenser 1 #ch# pour assigner au défenseur 1 marqueur de brouillage. Après avoir défendu, vous pouvez dépenser 1 #ch# pour assigner à l'attaquant 1 marqueur de brouillage.",
            slots: [
                "Talent",
                "Talent"
               
            ]
        },
{
            name: "Norra Wexley",
            id: 5,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            shipId: 1,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez, si un vaisseau ennemi est à portée 0–1, ajoutez 1 résultat #evd# à vos résultats de dés.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
{
            name: "Horton Salm",
            id: 6,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            shipId: 1,
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, vous pouvez relancer 1 dé d’attaque pour chaque autre vaisseau allié à portée 0–1 du défenseur.",
            slots: [
                "Talent",
                "Talent"
              
            ]
        },
        {
            name: '"Dutch" Vander',
            id: 7,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            shipId: 1,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué l’action #TL#, vous pouvez choisir 1 vaisseau allié à portée 1–3. Ce vaisseau allié peut verrouiller l’objet que vous avez verrouillé, en ignorant les restrictions de portée",
            slots: [
                "Talent",
            
            ]
        },
        {
            name: "Evaan Verlaine",
            id: 8,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            shipId: 1,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez dépenser 1 marqueur de concentration pour choisir un vaisseau allié à portée 0–1. Dans ce cas, ce vaisseau allié lance 1 dé de défense supplémentaire tant qu’il défend, jusqu’à la fin du round.",
            slots: [
                "Talent",
                
            ]
        },
        {
            name: "Gold Squadron Veteran",
            id: 9,
            faction: "Rebel_Alliance",
            ship: "BTL-A4 Y-wing",
            shipId: 1,
            skill: 3,
            points: 5,
            loadout: 5,
            slots: [
                
            ]
        },
{
            name: "Bodhi Rook",
            id: 10,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            shipId: 32,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Les vaisseaux alliés peuvent verrouiller des objets à portée 0–3 de n’importe quel vaisseau allié.",
            slots: [
                "Talent"
                
            ]
        },
        {
            name: "Cassian Andor",
            id: 11,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            shipId: 32,
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’activation, vous pouvez choisir 1 vaisseau allié à portée 1–3. Dans ce cas, ce vaisseau allié retire 1 marqueur de stress.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
        {
            name: "Heff Tobber",
            id: 12,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "UT-60D U-wing",
            shipId: 32,
            skill: 2,
            points: 7,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a exécuté une manœuvre, s’il est à portée 0, vous pouvez effectuer une action.",
            slots: [
                "Talent"
            ]
                
        },
{
            name: "K-2SO",
            id: 13,
            faction: "Rebel_Alliance",
            unique: true,
            skill: 3,
            ship: "UT-60D U-wing",
            shipId: 32,
            points: 7,
            loadout: 10,
            ability: "Après avoir gagné un marqueur de stress, gagnez 1 marqueur de calcul.",
            slots: [

            ]
        },
        {
            name: "Jan Ors",
            id: 14,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            shipId: 8,
            skill: 5,
            points: 7,
            loadout: 15,
            title: "Moldy Crow",
            ability: "Tant qu’un vaisseau allié situé dans votre arc de tir effectue une attaque principale, si vous n’êtes pas stressé, vous pouvez gagner 1 marqueur de stress. Dans ce cas, ce vaisseau peut lancer 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "title"          
            ]
        },
        {
            name: "Roark Garnet",
            id: 15,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            shipId: 8,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau situé dans votre arc de tir. Dans ce cas, pendant cette phase, il s’engage à l’initiative 7 au lieu de le faire à sa valeur d’initiative standard.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
        {
            name: "Kyle Katarn",
            id: 16,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            shipId: 8,
            skill: 3,
            points: 6,
            loadout: 15,
            title: "Moldy Crow",
            ability: "Au début de la phase d’engagement, vous pouvez transférer 1 de vos marqueurs de concentration à un vaisseau allié situé dans votre arc de tir.",
            slots: [
                "Talent",
               "title"
                
            ]
        },
        {
            name: "Palob Godalhi",
            id: 17,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "HWK-290 Light Freighter",
            shipId: 8,
            skill: 3,
            points: 8,
            loadout: 15,
            title: "Moldy Crow",
            ability: "Au début de la phase d’engagement, vous pouvez transférer un marqueur de stress de votre vaisseau vers un vaisseau allié dans votre arc de tir. Lorsque vous retirez un marqueur de stress de votre vaisseau, vous pouvez effectuer une action.",
            slots: [
                "Talent",
                "title"
            ]
        },
        {
            name: "Jake Farrell",
            id: 18,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            shipId: 2,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué une action #BR# ou #BO#, vous pouvez choisir un vaisseau allié à portée 0–1. Ce vaisseau peut effectuer une action #FS# .",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
        {
            name: "Arvel Crynyd",
            id: 19,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            shipId: 2,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Vous pouvez effectuer des attaques principales à portée 0. Si vous deviez échouer une action #BO# qui vous amènerait à chevaucher un autre vaisseau, résolvez-la comme si vous exécutiez partiellement une manœuvre à la place.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
 {
            name: "Tycho Celchu",
            id: 20,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            shipId: 2,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous avez 2 marqueurs de stress ou moins, vous pouvez exécuter des actions, même si vous êtes stressé.",
            slots: [
                "Talent",
                "Talent",
                "Talent"
                
                
            ]
        },
        {
            name: "Gemmer Sojan",
            id: 21,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
            shipId: 2,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Tant que vous êtes à portée 1 d’un vaisseau ennemi, augmentez votre agilité de 1.",
            slots: [
                "Talent",
                "Talent"
                
                
            ]
        },
        {
            name: "Green Squadron Pilot",
            id: 22,
            faction: "Rebel_Alliance",
            ship: "RZ-1 A-wing",
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
            id: 23,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            shipId: 10,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, si vous êtes stressé, vous pouvez relancer jusqu’à 2 de vos dés.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Ten Numb",
            id: 24,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            shipId: 10,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, vous pouvez dépenser 1 marqueur de stress pour changer tous vos résultats #eye# en résultats #hit# ou #evd# .",
            slots: [
                "Talent",
                "Talent"
            ]
        },
{
            name: "Netrem Pollard",
            id: 25,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            shipId: 10,
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Après avoir effectué un tonneau, vous pouvez choisir 1 vaisseau allié qui n’est pas stressé à portée 0–1. Ce vaisseau gagne 1 marqueur de stress, puis vous pouvez pivoter à 180°.",
            slots: [
                "Talent"            
            ]
        },
{
            name: "Gina Moonsong",
            id: 26,
            faction: "Rebel_Alliance",
            unique: true,
            skill: 5,
            ship: "A/SF-01 B-wing",
            shipId: 10,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous devez transférer 1 de vos marqueurs de stress à un autre vaisseau allié à portée 0–2.", 
            slots: [
                "Talent",
                "Talent"]
               
        },
 {
            name: "Blue Squadron Pilot",
            id: 27,
            faction: "Rebel_Alliance",
            ship: "A/SF-01 B-wing",
            shipId: 10,
            skill: 2,
            points: 7,
            loadout: 5,
            slots: [ ]
        },
        {
            name: "Shara Bey",
            id: 28,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "ARC-170 Starfighter",
            shipId: 29,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque principale, vous pouvez dépenser 1 marqueur de verrouillage que vous avez sur le vaisseau ennemi pour ajouter 1 résultat #eye# aux résultats de vos dés.",
            slots: [
                "Talent",
                "Talent"                
            ]
        },
        {
            name: "Garven Dreis",
            id: 29,
            unique: true,
            faction: "Rebel_Alliance",
            ship: "ARC-170 Starfighter",
            shipId: 29,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Après avoir dépensé un marqueur de concentration, vous pouvez choisir 1 vaisseau allié à portée 1–3. Ce vaisseau allié gagne 1 marqueur de concentration.",
            slots: [
                "Talent"                
            ]
        },

//############################################################# IMPERIAL_Academy

       {
            name: "Captain Kagi",
            id: 30,
            unique: true,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            shipId: 9,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 ou plusieurs vaisseaux alliés à portée 0–3. Dans ce cas, transférez tous les marqueurs de verrouillage ennemis des vaisseaux choisis vers vous.", 
            slots: [                
                "Talent"                
            ]
        },
        {
            name: "Lieutenant Sai",
            id: 31,
            unique: true,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            shipId: 9,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Après avoir effectué une action #CO#, si le vaisseau que vous avez choisi effectue une action de votre barre d’action, vous pouvez effectuer cette action.",
            slots: [
                    ]
        },
        {
            name: "Colonel Jendon",
            id: 32,
            unique: true,
            faction: "Imperial_Academy",
            ship: "Lambda-class T-4a Shuttle",
            shipId: 9,
            skill: 3,
            charge: 2,
            points: 7,
            loadout: 10,
            ability: "Au début de la phase d’activation, vous pouvez dépenser 1 #ch#. Dans ce cas, lorsqu’un vaisseau allié verrouille une cible à ce round, il doit le faire au-delà de la portée 3 à la place de la portée 0–3.",
            slots: [
                ]
        }, 
        {
            name: "Darth Vader",
            id: 33,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            shipId: 5,
            skill: 6,
            points: 10,
            loadout: 10,
            force: 3,
            ability: "Tant que vous effectuez une attaque, vous pouvez dépenser 1 #fo# pour changer 1 résultat vierge en un résultat #hit#.",
            slots: [
                "Force",
                "Force",
                "Talent"
            ]
        },
        {
            name: "Maarek Stele",
            id: 34,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            shipId: 5,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque, si une carte de dégât devrait être attribuée face visible au défenseur, piochez 3 cartes de dégât à la place, choisissez-en 1, et défaussez les autres.",
            slots: [
                "Talent"               
            ]
        },
        {
            name: "Zertik Strom",
            id: 35,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            shipId: 5,
            skill: 3,
            points: 7,
            loadout: 10,
            ability: "Pendant la phase de dénouement, vous pouvez dépenser un marqueur de verrouillage que vous avez sur un vaisseau ennemi pour exposer 1 carte de dégât de ce dernier.",
            slots: [
                "Talent",
            ]
        },
        {
            name: "Juno Eclipse",
            id: 36,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE Advanced x1",
            shipId: 5,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Tant que vous exécutez une manœuvre, vous pouvez exécuter une manœuvre de même direction et de même difficulté mais avec une vitesse supérieure ou inférieure de 1 à la place.",
            slots: [
                "Talent"
        
            ]
        },
        {
            name: "Alpha Squadron Pilot",
            id: 37,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
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
            id: 38,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            shipId: 6,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez un tonneau, vous devez utiliser le gabarit #Lbank# ou #Rbank# à la place du gabarit #straight#.",
            slots: [
                "Talent"

            ]
        },
 {
            name: "Nash Windrider",
            id: 39,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            shipId: 6,
            skill: 2,
            charge: 1,
            recurring: 1,
            points: 6,
            loadout: 10,
            ability: "Pendant la phase d’engagement, après qu’un petit vaisseau allié à portée 0–3 a été détruit, s’il ne s’était pas déjà engagé à cette phase, vous pouvez dépenser 1 #ch#. Dans ce cas, il s’engage à l’initiative actuelle.",
            slots: [
                "Talent"
            ]
        },
{
            name: "Vult Skerris",
            id: 40,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            shipId: 6,
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 8,
            loadout: 10,
            ability: "Tant que vous défendez ou effectuez une attaque, et s’il y a un vaisseau allié à portée 1 du vaisseau ennemi attaquant ou défendant, vous pouvez dépenser 1 #ch#. Dans ce cas, vous pouvez dépenser 1 marqueur vert appartenant à ce vaisseau allié.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
 {
            name: "Commandant Goran",
            id: 41,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/in Interceptor",
            shipId: 6,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Au début de la Phase d'Engagement, choisissez un vaisseau allié à portée 0–3 avec une initiative plus faible que la vôtre. Le vaisseau choisi gagne 1 marqueur d'évasion et retire 1 marqueur rouge non-stress.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
         {
            name: "Captain Jonus",
            id: 42,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            shipId: 11,
            skill: 4,
            points: 7,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–1 effectue une attaque spéciale, il peut relancer jusqu’à 2 dés d’attaque.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Major Rhymer",
            id: 43,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            shipId: 11,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque spéciale, vous pouvez augmenter ou réduire de 1 le prérequis de portée, dans une limite de 0–3.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Tomax Bren",
            id: 44,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            shipId: 11,
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Après avoir effectué une action de rechargement, vous pouvez récupérer 1 charge d’une de vos cartes améliorations.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
        {
            name: '"Deathfire"',
            id: 45,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            shipId: 11,
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Après avoir entièrement exécuté une manœuvre à vitesse 3-5, si vous n'avez pas largué ou lancé d'engin à ce round, vous pouvez dépenser 2#ch# pour larguer ou lancer une bombe en utilisant le gabarit 3#straight#.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Scimitar Squadron Pilot",
            id: 46,
            faction: "Imperial_Academy",
            ship: "TIE/sa Bomber",
            shipId: 11,
            skill: 2,
            points: 5,
            loadout: 5,
            slots: [

            ]
        },
        {
            name: '"Howlrunner"',
            id: 47,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            shipId: 4,
            skill: 5,
            points: 5,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–1 effectue une attaque principale, il peut relancer 1 dé d’attaque.",
            slots: [
                "Talent",
                "Talent"
            ]
        },
{
            name: '"Mauler" Mithel',
            id: 48,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            shipId: 4,
            skill: 5,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, si un allié Dark Vador ou 'Backstabber' est dans votre arc #Larc# ou #Rarc# à portée 0-1, lancez 1 dé d'attaque supplémentaire.",
            slots: [
                "Talent"
            ]
        },
 {
            name: '"Backstabber"',
            unique: true,
            id: 49,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            shipId: 4,
            skill: 5,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, si un allié Dark Vador ou 'Mauler' Mithel est dans votre arc #Larc# ou #Rarc# à portée 0-1, lancez 1 dé d'attaque supplémentaire.",
            upgrades: [
                "Talent"
            ]
        },
 {
            name: '"Dark Curse"'  ,          
            unique: true,
            id: 50,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            shipId: 4,
            skill: 6,
            points: 4,
            loadout: 10,
            ability: "Tant que vous défendez, les dés de l’attaquant ne peuvent pas être modifiés.",
            upgrades: [
                "Talent"
            ]
        },
{
            name: "Academy Pilot",
            id: 51,
            faction: "Imperial_Academy",
            ship: "TIE/ln Fighter",
            shipId: 4,
            skill: 1,
            points: 3,
            loadout: 0,
            slots: [

            ]
        },
{
            name: "Carida Academy Cadet",
            id: 52,
            faction: "Imperial_Academy",
            skill: 1,
            ship: "TIE/rb Heavy",
            shipId: 67,
            points: 5,
            loadout: 5,
            slots: [
            ]
        },
        
        {
            name: "Lyttan Dree",
            id: 53,
            faction: "Imperial_Academy",
            skill: 3,
            unique: true,
            ship: "TIE/rb Heavy",
            shipId: 67,
            points: 6,
            loadout: 10,
            ability: "Tant qu’un vaisseau allié à portée 0–2 effectue une attaque, si vous êtes dans le #Larc# ou #Rarc# du défenseur, l’attaquant peut relancer 1 dé d’attaque.",
            slots: [
                "Talent"
            ]
        },
        {
            name: '"Rampage"',
            id: 54,
            faction: "Imperial_Academy",
            skill: 4,
            unique: true,
            ship: "TIE/rb Heavy",
            shipId: 67,
            points: 6,
            loadout: 10,
            ability: "Après avoir exécuté une manœuvre à vitesse 3–4, vous pouvez choisir un vaisseau situé dans votre #tur# à portée 0–1. Dans ce cas, ce vaisseau gagne 1 marqueur de contrainte, ou 2 marqueurs de contrainte si vous êtes endommagé.",
            slots: [
                "Talent"
            ]
        },
 {
            name: "Flight Leader Ubbel",
            id: 55,
            unique: true,
            faction: "Imperial_Academy",
            ship: "TIE/rb Heavy",
            shipId: 67,
            skill: 5,
            points: 6,
            loadout: 10,
            ability: "Après qu'un vaisseau allié à portée 0-2 a défendu, si une carte de dégât lui a été attribuée, vous pouvez effectuer une attaque bonus contre l'attaquant.",
            slots: [
                "Talent",
                "Talent"
            ]
        },



//############################################################ MANDALORIAN_CLANS

 {
            name: "Fenn Rau",
            id: 56,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            shipId: 30,
            skill: 6,
            points: 10,
            loadout: 10,
            ability: "Lorsque vous attaquez ou défendez, si l’attaque est à portée 1, vous pouvez lancer 1 dé supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Old Teroch",
            id: 57,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            shipId: 30,
            skill: 5,
            points: 9,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau ennemi à portée 1. Dans ce cas, et si vous êtes dans son #Farc# , il retire tous ses marqueurs verts. .",
            slots: [
                "Talent",
                "Talent"
            ]
        },
        {
            name: "Kad Solus",
            id: 58,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            shipId: 30,
            skill: 4,
            points: 8,
            loadout: 10,
            ability: "Après avoir entièrement effectué une manœuvre rouge, gagnez 2 marqueurs de concentration.",
            slots: [
                "Talent"
            ]
        },
        
        {
            name: "Skull Squadron Pilot",
            id: 59,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            shipId: 30,
            skill: 4,
            points: 7,
            loadout: 5 ,
            slots: []
        },
        {
            name: "Tor Phun",
            id: 60,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Fang Fighter",
            shipId: 30,
            skill: 3,
            points: 8,
            loadout: 10,
            ability: "Après avoir effectué une attaque, si le défenseur a été détruit, vous pouvez effectuer une action, même stressé. Puis vous pouvez recevoir 2 marqueurs de stress pour effectuer une attaque bonus.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Pre Vizsla",
            id: 61,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            shipId: 75,
            skill: 3,
            points: 11,
            loadout: 10,
            charge: 2,
            recurring: 1,
            unique: true,
            ability: "Tant que vous effectuez une attaque, si l’initiative du défenseur est égale ou plus grande que la vôtre, vous pouvez dépenser 2#ch# pour lancer 1 dé supplémentaire.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Bo-Katan Kryze",
            id: 62,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            shipId: 75,
            skill: 4,
            points: 11,
            loadout: 10,
            unique: true,
            ability: "Après avoir entièrement exécuté une manœuvre, vous pouvez gagner 1 marqueur d’épuisement pour choisir un objet dans votre #Farc# à portée 1-2. Dans ce cas, un autre vaisseau allié peut effectuer une action  #TL# pour verrouiller cet objet.",
            slots: [
                "Talent"
            ]
        },
        {
            name: "Tiber Saxon",
            id: 63,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            shipId: 75,
            skill: 4,
            points: 11,
            loadout: 10,
            unique: true,
            ability: "Après avoir effectué une attaque qui a touché, si le défenseur n’a pas de carte de dégât face visible, il gagne un marquer de contrainte.",
            slots: [
                "Talent"               
            ]
        },
        {
            name: "Ursa Wren",
            id: 64,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            shipId: 75,
            skill: 3,
            points: 11,
            loadout: 10,
            unique: true,
            ability: "Lorsque vous recevez un marqueur rouge, vous pouvez dépenser un marqueur bleu pour le retirer.",
            slots: [
                "Talent"]                
        },
        {
            name: "Nite Owl Liberator",
            id: 65,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            shipId: 75,
            skill: 2,
            points: 10,
            loadout: 5,
            unique: true,
            slots: [
                
            ]
        },
        {
            name: "Maul",
            id: 66,
            faction: "Mandalorian_Clans",
            ship: "Gauntlet Fighter",
            shipId: 75,
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
                "title"
                            ]
        },
        {
            name: "Din Djarin",
            id: 67,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            shipId: 76,
            skill: 5,
            points: 9,
            loadout: 15,
            title: "Razor Crest",
            unique: true,
            ability: "Lorsque vous défendez ou effectuez une attaque, si vous êtes dans le  #Farc#  à portée 1-2 de 2 vaisseaux ennemis ou plus, vous pouvez changer 1 de vos résultats vierges en résultat #eye#.",
            slots: [
                "Talent",
                "Talent",
                "title"
            
            ]
        },
        {
            name: "The Armorer",
            id: 68,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            shipId: 76,
            skill: 3,
            points: 8,
            loadout: 10,
            unique: true,
            title: "Razor Crest",
            ability: "MISE EN PLACE : L’amélioration  #mod# que vous équipez est gratuite. Si elle possède 1 ou plusieurs charges, ajoutez en une supplémentaire.",
            slots: [
                
                "Talent",
               "title"]
        },
        {
            name: "Paz Vizsla",
            id: 69,
            faction: "Mandalorian_Clans",
            ship: "ST-70 Assault Ship",
            shipId: 76,
            skill: 3,
            points: 7,
            loadout: 15,
            unique: true,
            title: "Razor Crest",
            ability: "Lorsque vous attaquez vous pouvez dépenser 1#ch# sur l’une de vos cartes #ill#  pour lancer 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "title",
            ]
        },
        {
            name: "Din Djarin",
            id: 70,
            faction: "Mandalorian_Clans",
            ship: "Naboo Royal N-1 Starfighter",
            shipId: 56,
            skill: 5,
            points: 6,
            loadout: 15,
            unique: true,
            title: "Din Djarin's N1",
            ability: "Lorsque vous défendez ou effectuez une attaque, si vous êtes dans le  #Farc#  à portée 1-2 de 2 vaisseaux ennemis ou plus, vous pouvez changer 1 de vos résultats vierges en résultat #eye#.",
            slots: [
                "Talent",
                "Talent",
                "title"
            ]
        },
        {
            name: "Grogu",
            id: 71,
            faction: "Mandalorian_Clans",
            ship: "Naboo Royal N-1 Starfighter",
            shipId: 56,
            force: 2,
            skill: 0,
            points: 5,
            loadout: 15,
            unique: true,
            title: "Din Djarin's N1",
            ability: "Lorsqu’un vaisseau à portée 0-2 subit des dégâts, vous pouvez récupérer 1#fo#",
            slots: [
                "Force",
                "title"
            ]
        },
        {
            name: "Sabine Wren",
            id: 72,
            faction: "Mandalorian_Clans",
             ship: "Naboo Royal N-1 Starfighter",
             shipId: 56,
            skill: 3,
            points: 5,
            loadout: 10,
            unique: true,
            ability: "Avant de vous activer, vous pouvez effectuer une action #BR# ou #BO#",
            slots: [
                "Talent"
            ]
        },
        {
            name: "R5-D4",
            id: 73,
            faction: "Mandalorian_Clans",
             ship: "Naboo Royal N-1 Starfighter",
             shipId: 56,
            skill: 2,
            points: 4,
            loadout: 15,
            unique: true,
            title: "Din Djarin's N1",
            keyword: ["Droid"],
            ability: "Lorsqu’une attaque contre vous échoue, gagnez 1 marqueur de calcul.",
            slots: [
                "title"

            ]
        },
        {
            name: "Bardan Jusik",
            id: 74,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 4,
            points: 12,
            loadout: 10,
            ability: "Après avoir effectué une attaque #can#, vous pouvez dépenser le marqueur bleu d’un vaisseau allié à portée 0-1 pour effectuer une attaque principale bonus.",
            slots: [
                "Talent"                               
            ]
        },
        {
            name: "Spar",
            id: 75,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 3,
            points: 12,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque #can# , vous pouvez relancer un dé d’attaque.",
            slots: [
                "Talent"
               
            ]
        },

        {
            name: "Fenn Shysa",
            id: 76,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 5,
            points: 13,
            loadout: 10,
            ability: "Après avoir effectué une manœuvre (même partiellement), vous pouvez recevoir un marqueur de contrainte. Dans ce cas, vous pouvez effectuer une action #BR# et passer votre phase « effectuer une action ».",
            slots: [
                "Talent",
                "Talent"               
            ]
        },
        {
            name: "Tobi Dala",
            id: 77,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 2,
            points: 12,
            loadout: 10,
            ability: "Après avoir défendu contre un vaisseau dans votre #Farc# , vous pouvez dépenser 1 #ch#. Dans ce cas, vous pouvez verrouiller l’attaquant et effectuer une attaque bonus de #can# contre lui.",
            slots: [
                "Talent"          
                
            ]
        },
        {
            name: "Rook Rast",
            id: 78,
            unique: true,
            faction: "Mandalorian_Clans",
            ship: "Commando Team",
            shipId: 79,
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
            shipId: 79,
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
            shipId: 79,
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
            shipId: 79,
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
            shipId: 16,
            skill: 5,
            points: 10,
            loadout: 15,
            title: "Outrider",
            ability: "Lorsque vous vous déplacez, ignorez les obstacles",
            slots: [
                "Talent",
                "Talent",
                "title"
            ]            
        },
        {
            name: '"Leebo"',
            id: 83,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            shipId: 16,
            skill: 3,
            points: 8,
            loadout: 15,
            title: "Outrider",
            keyword: ["Droid"],
            ability: "Après avoir défendu ou attaqué, si vous avez dépensé un marqueur de calcul, recevez un marqueur de calcul.",
            slots: [
                "Talent",
                "title"
            ]
        },
        {
            name: "Wild Space Fringer",
            id: 84,
            faction: "Pirates_and_Smugglers",
            ship: "YT-2400 Light Freighter",
            shipId: 16,
            skill: 1,
            points: 7,
            loadout: 5,
            slots: [
                
            ]
        
        },
        {
            name: "Han Solo",
            id: 85,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            shipId: 3,
            skill: 6,
            points: 9,
            loadout: 10,
            ability: "Tant que vous attaquez ou défendez, si l’attaque est obstruée par un obstacle, vous pouvez lancer un dé supplémentaire.",
            slots: [
                "Talent",
                "Talent",
                "Talent",                
                "Title"
            ]
        },
        {
            name: "Lando Calrissian",
            id: 86,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            shipId: 3,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Après avoir lancé des dés, si vous n’êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour relancer tous vos résultats vierges.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ]
        },
        {
            name: "Chewbacca",
            id: 87,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            shipId: 3,
            skill: 4,
            charge: 1,
            recurring: 1,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous devriez recevoir une carte de dégât face visible, vous pouvez dépenser 1 #ch# pour la recevoir face cachée à la place.",
            slots: [
                "Talent",
                "Title"
            ]
        },
       
 
        {
            name: "L3-37",
            id: 88,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            shipId: 3,
            skill: 2,
            points: 7,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Si vous n’êtes pas protégé, réduisez la difficulté de vos virages légers.",
            slots: [
                "Talent"               
            ]
        },
        {
            name: "Freighter Captain",
            id: 89,
            faction: "Pirates_and_Smugglers",
            ship: "YT-1300 Light Freighter",
            shipId: 3,
            skill: 1,
            points: 6,
            loadout: 5,
            slots: [
                ]
        },
        {
            name: "Lando Calrissian -Escape Craft-",
            id: 90,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            shipId: 41,
            skill: 4,
            points: 2,
            loadout: 10,
            ability: "Après avoir lancé des dés, si vous n’êtes pas stressé, vous pouvez gagner 1 marqueur de stress pour relancer tous vos résultats vierges.",
            slots: [
                "Talent",
                "Talent"                
            ]
        },
        {
            name: "Outer Rim Pioneer",
            id: 91,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            shipId: 41,
            skill: 3,
            points: 2,
            loadout: 5,
            ability: "Les vaisseaux alliés à portée 0-1 peuvent effectuer des attaques à portée 0 des obstacles.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "L3-37 -Escape Craft-",
            id: 92,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            shipId: 41,
            skill: 2,
            points: 2,
            loadout: 10,
            keyword: ["Droid"],
            ability: "Si vous n’êtes pas protégé, réduisez la difficulté de vos virages légers.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Autopilot Drone",
            id: 93,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Escape Craft",
            shipId: 41,
            skill: 1,
            charge: 3,
            points: 2,
            loadout: 0,
            keyword: ["Droid"],
            function: "changer chassis",
            slots: [
                
            ]
        },
        {
            name: "Kath Scarlet",
            id: 94,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, s’il y a au moins 1 vaisseau allié non-limité à portée 0 du défenseur, lancez 1 dé supplémentaire.",
            slots: [
                "Talent"
               ]
        },
{
            name: "Hondo Ohnaka",
            id: 95,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            skill: 1,
            points: 12,
            loadout: 15,
            title: "Slave 1",
            ability: "ACTION : Choisissez 2 vaisseaux non énormes à portée 0-3 de vous qui ne sont pas alliés l’un l’autre. Chaque vaisseau peut effectuer une action qui se trouve sur votre barre d’action, même stressé, dans l’ordre de votre choix. Puis gagner 1 marqueur de calcul.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ]
        },
{
            name: "Emon Azzameen",
            id: 96,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            skill: 4,
            points: 12,
            loadout: 15,
            title: "Andrasta",
            ability: "Si vous devez larguer un engin en utilisant un gabarit 1#straight#, vous pouvez utiliser à la place un gabarit 3#Lturn# ou 3#straight# ou 3#Rturn#",
            slots: [
                "Talent",
                "Title"
            ]
        },
         {
            name: "Sana Starros",
            id: 97,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            charge: 1,
            recurring: 1,
            skill: 4,
            points: 11,
            loadout: 10,
            ability: "À tout moment, choisissez un vaisseau allié à portée 0-1. Vous pouvez dépenser 1#ch# pour échanger une de vos améliorations avec une de ses améliorations du même type", 
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Serissu",
            id: 98,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            shipId: 19,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Lorsqu’un vaisseau allié à portée 0-1 défend, il peut relancer l’un de ses dés.",
            slots: [
                "Talent",
                "Talent"               
            ]
        },
{
            name: "Laetin A'shera",
            id: 99,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            shipId: 19,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après avoir défendu ou attaqué, si l’attaque a échoué, gagnez 1 marqueur d’évasion.",
            slots: [
                "Talent"                
            ]
        },
 {
            name: "Tansarii Point Veteran",
            id: 100,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            shipId: 19,
            skill: 3,
            points: 5,
            loadout: 5,
            slots: [
              
            ]
        },
 {
            name: "Inaldra",
            id: 101,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            shipId: 19,
            skill: 2,
            points: 6,
            loadout: 10,
            ability: "Lorsque vous attaquez ou défendez, vous pouvez subir 1 #hit# pour relancer autant de dés que souhaité.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Aleas Rans'ery",
            id: 102,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "M3-A Interceptor",
            shipId: 19,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Lorsque vous défendez, si l’attaque est à portée 3 ou obstruée, lancez un dé supplémentaire.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Captain Nym",
            id: 103,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            shipId: 35,
            skill: 5,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 10,
            ability: "Avant qu’un engin allié n’explose, vous pouvez dépenser 1 #ch# pour l’empêcher d’exploser.<br>Lorsque vous vous défendez contre une attaque obstruée par une bombe ou une mine, lancez 1 dé de défense supplémentaire.",
            slots: [
                "Talent",
                "Talent",               
                "Title"
            ]
        },
        {
            name: "Sol Sixxa",
            id: 104,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            shipId: 35,
            skill: 3,
            points: 5,
            loadout: 10,
            ability: "Lorsque vous devez larguer un engin avec le gabarit 1#straight#, vous pouvez le larguer en utilisant n’importe lequel des gabarit de vitesse 1.",
            slots: [
                "Talent"
                  ]
        },
        {
            name: "Lok Revenant",
            id: 105,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            shipId: 35,
            skill: 2,
            points: 5,
            loadout: 7,
            slots: [            
                "Title"
            ]
        },
        {
            name: "Jinkins",
            id: 106,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Scurrg H-6 Bomber",
            shipId: 35,
            skill: 1,
            charge: 1,
            recurring: 1,
            points: 9,
            loadout: 10,
            ability: "Lorsque vous larguez ou lancez une bombe, placez un marqueur « Puissance » dessus. Lorsqu’elle explose, augmentez la portée de l’explosion de 1.", 
            slots: [
                "Talent",                
                "Title"
            ]
        },
        {
            name: "N'dru Suhlak",
            id: 107,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            shipId: 12,
            skill: 4,
            points: 4,
            loadout: 10,
            ability: "Lorsque vous effectuez une attaque principale, s’il n’y a pas d’autres vaisseaux alliés à portée 0-2, lancez 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Kaa'to Leeachos",
            id: 108,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            shipId: 12,
            skill: 3,
            points: 4,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 0-2. Dans ce cas, transférez 1 marqueur concentration ou évasion de ce vaisseau vers vous.",
            slots: [
                "Talent"                
            ]
        },
{
            name: "Binayre Pirate",
            id: 109,
            faction: "Pirates_and_Smugglers",
            ship: "Z-95-AF4 Headhunter",
            shipId: 12,
            skill: 1,
            points: 3,
            loadout: 5,
            slots: [
                          ]
        },
        {
            name: "Kanan Jarrus -HWK-290-",
            id: 110,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "HWK-290 Light Freighter",
            shipId: 8,
            skill: 3,
            force: 1,
            points: 7,
            loadout: 10,
            ability: "Lorsque vous ou un vaisseau dans votre #tur# défend, vous pouvez dépenser 1#fo#. Dans ce cas, l’attaquant lance 1 dé d’attaque de moins.",
            slots: [
                "Force"            
                ]
        },
 {
            name: "Tápusk",
            id: 111,
            unique: true,
            faction: "Pirates_and_Smugglers",
            ship: "HWK-290 Light Freighter",
            shipId: 8,
            skill: 5,
            charge: 2,
            recurring: 1,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase de fin, vous pouvez dépenser 2 charges pour vous choisir ou un vaisseau dans votre #tur#  avec 1 ou plusieurs marqueurs circulaires. Pendant la phase de fin, ces jetons circulaires ne sont pas retirés.",
            slots: [
                "Talent"               
            ]
        },


//##############################################################BOUNTY_HUNTERS_Guild

 {
            name: "IG-88A",
            id: 112,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 4,
            points: 11,
            loadout: 10,
            title: "IG-2000",
            keyword: ["Droid"],
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 1–3 avec #CA# dans sa barre d’action. Dans ce cas, transférez-lui 1 de vos marqueurs de calcul.",
            slots: [
                "Talent",
                "Title"
                
            ]
        },
        {
            name: "IG-88B",
            id: 113,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 4,
            points: 11,
            title: "IG-2000",
            loadout: 10,
            keyword: ["Droid"],
            ability: "Après avoir effectué une attaque ratée, vous pouvez effectuer une attaque bonus #can#",
            slots: [
                "Talent",
                "Title"               
            ]
        },
        {
            name: "IG-88C",
            id: 114,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 4,
            points: 11,
            title: "IG-2000",
            loadout: 10,
            keyword: ["Droid"],
            ability: "Après avoir effectué une action #BO# , vous pouvez effectuer une action #EV# .",
            slots: [
                "Talent",
                "Title"
                
            ]
        },
        {
            name: "IG-88D",
            id: 115,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Aggressor Assault Fighter",
            shipId: 20,
            skill: 4,
            points: 10,
            loadout: 10,
            title: "IG-2000",
            keyword: ["Droid"],
            ability: "Tant que vous exécutez une manœuvre Boucle de Segnor #Sleft# ou #Sright# ), vous pouvez utiliser un autre gabarit de même vitesse mais de même direction à la place.",
            slots: [
                "Talent",
                "Title"
                
            ]
        },
        {
            name: "The Mandalorian",
            id: 116,
            faction: "Bounty_Hunters_Guild",
            ship: "ST-70 Assault Ship",
            shipId: 76,
            skill: 5,
            points: 8,
            loadout: 15,
            unique: true,
            title: "Razor Crest",
            ability: "Tant que vous défendez ou effectuez une attaque si vous êtes dans le #Farc# à portée 1-2 d'au moins 2 vaisseaux ennemis, vous pouvez changer 1 de vos résultats vierges en un résultat #eye#.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ]
        },
        {
            name: "Q9-0",
            id: 117,
            faction: "Bounty_Hunters_Guild",
            ship: "ST-70 Assault Ship",
            shipId: 76,
            skill: 5,
            points: 7,
            loadout: 15,
            unique: true,
            title: "Razor Crest",
            keyword: ["Droid"],
            
            ability: "Après avoir entièrement exécuté une manœuvre avancée, vous pouvez effectuer une action #CA# ou #BR#, même si vous êtes stressé. Dans ce cas, gagnez 1 marqueur de contrainte.", 
            slots: [
                "Talent",
                "Title"
            ]
        },
        {
            name: "4-LOM",
            id: 118,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "G-1A Starfighter",
            shipId: 27,
            skill: 3,
            points: 8,
            loadout: 15,
            keyword: ["Droid"] ,
            title: "Mist Hunter",
            ability: "Après avoir entièrement exécuté une manœuvre rouge, gagnez 1 marqueur de calcul. Au début de la phase de dénouement, vous pouvez choisir un vaisseau à portée 0–1. Dans ce cas, transférez 1 de vos marqueurs de stress à ce vaisseau.",
            slots: [
                "Talent",
                "Title"
            ]
        },
{
            name: "Zuckuss",
            id: 119,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "G-1A Starfighter",
            shipId: 27,
            skill: 3,
            points: 8,
            loadout: 15,
            ability: "Tant que vous effectuez une attaque principale, vous pouvez lancer 1 dé d’attaque supplémentaire. Dans ce cas, le défenseur lance 1 dé de défense supplémentaire.",
            slots: [
                "Talent",
                "Title"
            ]
        },
        {
            name: "Dengar",
            id: 120,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            shipId: 28,
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
                "Title"
            ]
        },
        {
            name: "Tel Trevura",
            id: 121,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            shipId: 28,
            skill: 4,
            charge: 1,
            points: 7,
            loadout: 10,
            ability: "Si vous devez être détruit, vous pouvez dépenser 1 #ch#. Dans ce cas, défaussez toutes vos cartes de dégât, subissez 5 dégâts #hit#, et placez-vous en réserve à la place. Au début de la prochaine phase de préparation, placez-vous intégralement à portée 1 de votre bord Joueur.",
            slots: [
                "Talent"
                
            ]
        },
{
            name: "Manaroo",
            id: 122,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            shipId: 28,
            skill: 3,
            points: 7,
            loadout: 15,
            title: "Punishing One",
            ability: "Au début de la phase d’engagement, vous pouvez choisir un vaisseau allié à portée 0–2. Dans ce cas, transférez à ce vaisseau tous vos marqueurs verts.",
            slots: [
                "Talent",
                "Title"
            ]
        },
        {
            name: "Beilert Valance",
            id: 123,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "JumpMaster 5000",
            shipId: 28,
            skill: 5,
            points: 8,
            loadout: 10,
            ability: "Lorsque vous révélez une manœuvre rouge, vous pouvez effectuer une action (avant de vous déplacer)",
            slots: [
                "Talent",
                "Talent"                
            ]
        },
        {
            name: "Graz",
            id: 124,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
            shipId: 22,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Tant que vous défendez, si vous êtes derrière l’attaquant, lancez 1 dé de défense supplémentaire.<br>Tant que vous effectuez une attaque, si vous êtes derrière le défenseur, lancez 1 dé d’attaque supplémentaire.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
{
            name: "Viktor Hel",
            id: 125,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
            shipId: 22,
            skill: 4,
            points: 6,
            loadout: 10,
            ability: "Après avoir défendu, si vous n’avez pas lancé exactement 2 dés de défense, l’attaquant gagne 1 marqueur de stress.",
            slots: [
                "Talent",
                "Talent"
                
            ]
        },
 {
            name: "Captain Jostero",
            id: 126,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Kihraxz Fighter",
            shipId: 22,
            skill: 3,
            points: 6,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a subi des dégâts, s’il n’est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Bossk",
            id: 127,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "YV-666 Light Freighter",
            shipId: 21,
            skill: 4,
            points: 10,
            loadout: 15,
            title: "Hound's Tooth",
            ability: "Tant que vous effectuez une attaque principale, après l’étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat #crit# pour ajouter 2 résultats #hit# .",
            slots: [
                "Talent",
                "Title"
            ]
        },
{
            name: "Nashtah Pup",
            id: 128,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Z-95-AF4 Headhunter",
            shipId: 12,
            skill: 0,
            points: 2,
            loadout: 0,
            ability: "Ne peut être joué que si un YV666 avec le titre Hound’s Tooth est dans votre escadron. Quand le Hound’s Tooth est détruit, vous devez vous déployer. Vous pouvez copier :<br>- Le texte de sa capacité de pilote<br>-  Le texte de l’une de ses améliorations #crew# ",
            slots: [
            ],
            restrictions: [
                ["title", "Hound's Tooth"]
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
            shipId: 12,
            points: 4,
            loadout: 10,
            ability: "Tant que vous effectuez une attaque principale, après l’étape « Neutraliser les résultats », vous pouvez dépenser 1 résultat #crit# pour ajouter 2 résultats #hit# .",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Cad Bane -Scum-",
            id: 130,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            shipId: 78,
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
                "Title"
            ]
        },
{
            name: "Nom Lumb",
            id: 131,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            shipId: 78,
            skill: 1,
            points: 6,
            loadout: 10,
            ability: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau ennemi dans votre #Farc#. Dans ce cas, considérez votre initiative comme étant égale à celle de ce vaisseau jusqu’à la fin du round.",
            slots: [
                "Talent"                
            ]
        },
 {
            name: "Durge",
            id: 132,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Rogue-class Starfighter",
            shipId: 78,
            skill: 5,
            points: 7,
            loadout: 10,
            ability: "Tant que vous défendez, après l'étape Neutraliser les Résultats, s'il y a plus de résultats #hit#/#crit# que vos boucliers actifs, vous pouvez changer 1 résultat #hit# en 1 résultat #crit# et annuler 1 résultat #hit#.",
            slots: [
                "Talent"                
            ]
        },
        {
            name: "Boba Fett",
            id: 133,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            skill: 5,
            points: 14,
            loadout: 15,
            title: "Slave 1",
            ability: "Tant que vous défendez ou effectuez une attaque, vous pouvez relancer 1 de vos dés pour chaque vaisseau ennemi à portée 0–1.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ]
        },
         {
            name: "Aurra Sing",
            id: 134,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            skill: 4,
            force: 1,
            points: 13,
            loadout: 15,
            title: "Slave 1",
            ability: "Avant de vous engager, vous pouvez dépenser 1 #fo# pour choisir 2 vaisseaux ennemis à portée 0-1. Transférez n'importe quel nombre de marqueurs orange et rouges entre ces 2 vaisseaux.",
            slots: [
                "Talent",
                "Talent",
                "Title"
            ]
        },
         {
            name: "Captain Jostero -Firespray-",
            id: 135,
            unique: true,
            faction: "Bounty_Hunters_Guild",
            ship: "Firespray-class Patrol Craft",
            shipId: 7,
            skill: 3,
            points: 12,
            loadout: 10,
            ability: "Après qu’un vaisseau ennemi a subi des dégâts, s’il n’est pas en train de défendre, vous pouvez effectuer une attaque bonus contre ce vaisseau.",
            slots: [
                "Talent"                
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
                restrictions: [],
                effect: "Après avoir révélé votre cadran, vous pouvez dépenser 1 #ch# et gagner 1 marqueur de désarmement pour récupérer 1 bouclier.",
                faction: ""
            },
            {
                name: "R3 Astromech",
                id: 1,
                slot: "Astromech",
                points: 3,
                restrictions: [],
                effect: "Vous pouvez maintenir jusqu’à 2 cibles verrouillées. Chaque verrouillage doit être sur un objet différent. Après avoir effectué une action #TL# , vous pouvez verrouiller une cible.",
                faction: ""
            },
            {
                name: "R4 Astromech",
                id: 2,
                slot: "Astromech",
                points: 2,
                restrictions: [],
                effect: "Réduisez la difficulté de vos manoeuvres de vitesse 1 et 2",
                faction: ""
                
             },
            {
                name: "R5 Astromech",
                id: 3,
                slot: "Astromech",
                points: 4,
                charge: 2,
                restrictions: [],
                effect: "Action : dépensez 1 #ch# pour réparer 1 carte de dégât face cachée.<br>Action : réparez 1 carte de dégât Vaisseau face visible.",
                faction: ""
            },
            {
                name: "Watchful Astromech",
                id: 4,
                slot: "Astromech",
                points: 2,
                restrictions: [],
                effect: "Après avoir effectué une action #RT# ou #RD#, si vous êtes dans l'arc de tir d'un vaisseau ennemi, vous pouvez effectuer une action #CA# rouge.",
                faction: ""
            },
            
     {
                name: "Crack Shot",
                id: 5,
                slot: "Talent",
                points: 3,
                charge: 1,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque principale, si le défenseur est dans votre #bulls#, avant l’étape « Neutraliser les résultats », vous pouvez dépenser 1 #ch# pour annuler 1 résultat #hit#.",
                faction: ""
            },
    {
                name: "Elusive",
                id: 6,
                slot: "Talent",
                points: 5,
                effect: "Lorsque vous défendez contre une attaque à portée 3 ou contre une attaque de #tur#, vous pouvez améliorer un dé de défense.",
                restrictions: ["slots", "Modification"],
                faction: "",
                validation_func: '(ship, upgrade_obj) -> upgrade_obj.occupiesAnUpgradeSlot ""Modification""; also_occupies_upgrades: [ ""Modification"" ] '       
            },
    {
                name: "Lone Wolf",
                id: 7,
                slot: "Talent",
                points: 3,
                recurring: 1,
                charge: 1,
                restrictions: [],
                effect: "Tant que vous défendez ou que vous effectuez une attaque, s’il n’y a aucun autre vaisseau allié à portée 0–2, vous pouvez dépenser 1 #ch# pour relancer 1 de vos dés.",
                faction: ""
            },
            {
                name: "Intimidation",
                id: 8,
                slot: "Talent",
                points: 2,
                restrictions: [],
                effect: "Tant qu’un vaisseau ennemi à portée 0 défend, il lance un dé de défense en moins.",
                faction: ""
            },
     {
                name: "Marksmanship",
                id: 9,
                slot: "Talent",
                points: 1,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque, si le défenseur est dans votre #bulls#, vous pouvez changer 1 résultat #hit# en un résultat #crit#.",
                faction: ""
            },
    {
                name: "Outmaneuver",
                id: 10,
                slot: "Talent",
                points: 8,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque #Farc#, si vous n’êtes pas dans l’arc de tir du défenseur, il lance 1 dé de défense en moins.",
                faction: ""
            },
     {
                name: "Predator",
                id: 11,
                slot: "Talent",
                points: 3,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque principale, si le défenseur est dans votre #bulls#, vous pouvez relancer 1 dé d’attaque.",
                faction: ""
            },
     {
                name: "Squad Leader",
                id: 12,
                slot: "Talent",
                points: 5,
                unique: true,
                restrictions: [],
                effect: "Tant que vous coordonnez, le vaisseau que vous avez choisi peut effectuer une action seulement si celle-ci est également dans votre barre d’action.<br>Ajoute l'action (CO)",
                faction: "",
                modifier_func: '(stats) -> stats.actions.push "R-Coordinate" if "R-Coordinate" not in stats.actions'
            },
     {
                name: "Swarm Tactics",
                id: 13,
                slot: "Talent",
                points: 2,
                restrictions: [],
                effect: "Au début de la phase d’engagement, vous pouvez choisir 1 vaisseau allié à portée 1. Dans ce cas, considérez que son initiative est égale à la vôtre jusqu’à la fin du round.",
                faction: ""
            },
    {
                name: "Trick Shot",
                id: 14,
                slot: "Talent",
                points: 3,
                restrictions: [],
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
                restrictions: [],
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
                restrictions: ["actions", "R-Coordinate"],
                faction: "",
                modifier_func: '(stats) -> stats.actions.push "Coordinate" if "Coordinate" not in stats.actions',
            },
     {
                name: "Perceptive Copilot",
                id: 17,
                slot: "Crew",
                points: 8,
                restrictions: [],
                effect: "Après avoir effectué une action #FS#, gagnez 1 marqueur de concentration.",
                faction: ""
            },
    {
                name: "Novice Technician",
                id: 18,
                slot: "Crew",
                points: 2,
                restrictions: [],
                effect: "À la fin du round, vous pouvez lancer 1 dé d’attaque pour réparer 1 carte de dégât face visible. Puis, sur un résultat #hit#, exposez 1 carte de dégât.",
                faction: ""
            },
    {
                name: 'GNK "Gonk" Droid',
                id: 19,
                slot: "Crew",
                points: 4,
                charge: 1,
                restrictions: [],
                effect: "Action : récupérez 1 #ch#.<br>Action : dépensez 1 #ch# pour récupérer 1 bouclier.",
                faction: ""
            },
    {
                name: "Freelance Slicer",
                id: 20,
                slot: "Crew",
                points: 2,
                restrictions: [],
                effect: "Tant que vous défendez et avant que les dés d’attaque ne soient lancés, vous pouvez dépenser un marqueur de verrouillage que vous avez sur l’attaquant pour lancer 1 dé d’attaque. Dans ce cas, l’attaquant gagne 1 marqueur de brouillage. Puis, sur un résultat #hit# ou #crit#, gagnez 1 marqueur de brouillage.",
                faction: ""
            },
     {
                name: "Agile Gunner",
                id: 21,
                slot: "Gunner",
                points: 1,
                restrictions: [],
                effect: "Pendant la phase de dénouement, vous pouvez faire pivoter votre indicateur #tur#",
                faction: ""
            },
     {
                name: "Hotshot Gunner",
                id: 22,
                slot: "Gunner",
                points: 6,
                restrictions: [],
                effect: "Après avoir effectué une attaque de #tur#, retirez un marqueur de concentration, de calcul, ou d’évasion du défenseur.",
                faction: ""
            },
     {
                name: "Skilled Bombardier",
                id: 23,
                slot: "Gunner",
                points: 2,
                restrictions: [],
                effect: "Si vous devez larguer ou lancer un engin, vous pouvez utiliser un gabarit de même direction mais avec une vitesse supérieure ou inférieure de 1.",
                faction: ""
            },
     {
                name: "Veteran Gunner",
                id: 24,
                slot: "Gunner",
                points: 5,
                restrictions: [],
                effect: "Après avoir effectué une attaque, vous pouvez effectuer une attaque bonus #tur# ou #can#, avec une #tur# ou un #can# que vous n’avez pas encore utilisé.",
                faction: ""
              },
      {
                name: "Weapons Systems Officer",
                id: 25,
                points: 6,
                slot: "Gunner",
                restrictions: [],
                effect: "Après avoir effectué une attaque, vous pouvez dépenser un marqueur vert ou recevoir un marqueur de stress pour verrouiller le défenseur.",
                faction: ""
            },
    {
                name: "Automated Target Priority",
                id: 26,
                slot: "Tech",
                points: 2,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque, vous devez choisir un défenseur à la plus courte portée d’attaque valide.<br>Après avoir effectué une attaque qui a raté, placez 1 marqueur de calcul sur cette carte.<br>Avant de vous engager, vous pouvez retirer 1 marqueur de calcul de cette carte pour gagner le marqueur correspondant",
                faction: ""
            },
     {
                name: "Pattern Analyzer",
                id: 27,
                slot: "Tech",
                points: 5,
                restrictions: [],
                effect: "Tant que vous exécutez entièrement une manœuvre rouge, avant l’étape « Vérifier la difficulté », vous pouvez effectuer 1 action.",
                faction: ""
            },
     {
                name: "Advanced Optics",
                id: 28,
                slot: "Tech",
                points: 5,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque, vous pouvez dépenser 1 marqueur de concentration pour changer 1 de vos résultats vierges en un résultat #hit#.",
                faction: ""
            },
     
     {
                name: "Targeting Synchronizer",
                id: 29,
                slot: "Tech",
                points: 2,
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                    ["slots", '"Missile","Missile"']
                ],
                faction: ""
                /*validation_func: (ship, upgrade_obj) ->
                    upgrade_obj.occupiesAnUpgradeSlot ""Missile""
                also_occupies_upgrades: [ ""Missile"" ]*/
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                    ["slots", '"Payload","Payload"']
                ],
                faction: ""
                /*validation_func: (ship, upgrade_obj) ->
                    upgrade_obj.occupiesAnUpgradeSlot ""Payload""
                also_occupies_upgrades: [ ""Payload"" ]*/
            },
     {
                name: "Conner Nets",
                id: 41,
                slot: "Payload",
                points: 3,
                charge: 1,
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: 
                    ["Slot", '"Cannon","Cannon"']
                ,
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
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
                restrictions: ["slots","Cannon"],
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
                restrictions: [],
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
                restrictions: [],
                effect: "Avant votre activation, vous pouvez dépenser 1 #ch#. Dans ce cas, jusqu’à la fin du round, vous pouvez effectuer des actions et exécuter des manœuvres rouges, même si vous êtes stressé.",
                faction: ""
            },
            {
                name: "Deadman's Switch",
                id: 58,
                slot: "Illicit",
                points: 2,
                restrictions: [],
                effect: "Après que vous avez été détruit, chaque autre vaisseau à portée 0–1 subit 1 dégât #hit#.",
                faction: ""
            },
     {
                name: "Coaxium Hyperfuel",
                id: 59,
                slot: "Illicit",
                points: 5,
                restrictions: [],
                effect: "ACTION : dépensez 1 #ch#. Vous pouvez effectuer une action #MASL#. Vous pouvez effectuer cette action même après avoir partiellement effectué une manoeuvre ou sous l’effet du stress. Puis exposez 1 carte de dégât ou prenez 1 dégât critique.",
                faction: ""
                
            },
     {
                name: "False Transponder Codes",
                id: 60,
                points: 3,
                charge: 1,
                slot: "Illicit",
                restrictions: [],
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
                restrictions: 
                    ["base", "Medium", "Large"]
                ,
                faction: ""
            },
    {
                name: "Afterburners",
                id: 62,
                slot: "Modification",
                points: 6,
                charge: 2,
                effect: "Après avoir entièrement exécuté une manœuvre à vitesse 3–5, vous pouvez dépenser 1 #ch# pour effectuer une action #BO#, même tant que vous êtes stressé.",
                restrictions: 
                    ["base", "Small"]
                ,
                faction: ""
            },
    {
                name: "Engine Upgrade",
                id: 63,
                slot: "Modification",
                points: 3,
                effect: "Donne l'action #BO# blanche",
                restrictions: 
                    ["actions", "R-Boost"]
                ,
                faction: ""
                /*modifier_func: (stats) ->
                    stats.actions.push 'Boost' if 'Boost' not in stats.actions*/
            },
            {
                name: "Munitions Failsafe",
                id: 64,
                slot: "Modification",
                points: 1,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque #mi# ou #to#, après avoir lancé les dés d’attaque, vous pouvez annuler tous les résultats des dés pour récupérer 1 #ch# que vous avez dépensée comme coût pour l’attaque.",
                faction: ""
            },
    {
                name: "Tactical Scrambler",
                id: 65,
                slot: "Modification",
                points: 2,
                effect: "Tant que vous gênez l’attaque d’un vaisseau ennemi, le défenseur lance 1 dé de défense supplémentaire.",
                restrictions: 
                    ["base", "Medium", "Large"]
                ,
                faction: ""
            },
    {
                name: "Hull Upgrade",
                id: 65,
                slot: "Modification",
                points: 6,
                effect: "+1 Coque",
                restrictions: [],
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
                restrictions: [],
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
                restrictions: [],
                effect: "Tant que vous défendez, si votre #ch# est active, lancez 1 dé de défense supplémentaire. Après avoir subi des dégâts, perdez 1#ch#.",
                faction: ""
            },
     {
                name: "Delayed Fuses",
                id: 68,
                slot: "Modification",
                points: 1,
                restrictions: [],
                effect: "Après avoir largué, lancé ou placé une bombe ou une mine, vous pouvez placer dessus 1 marqueur d’amorce.",
                faction: ""
            },
    {
                name: "Targeting Computer",
                id: 69,
                slot: "Modification",
                points: 2,
                restrictions: [],
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
                restrictions: [],
                effect: "Après avoir révélé votre cadran, vous pouvez effectuer 1 action. Dans ce cas, vous ne pouvez pas effectuer d’autre action pendant votre activation.",
                faction: ""
            },
            {
                name: "Collision Detector",
                id: 71,
                slot: "Sensor",
                points: 5,
                charge: 2,
                restrictions: [],
                effect: "Tant que vous accélérez ou que vous effectuez un tonneau, vous pouvez vous déplacer à travers ou chevaucher les obstacles. Après vous être déplacé à travers ou avoir chevauché un obstacle, vous pouvez dépenser 1 #ch# pour ignorer ses effets jusqu’à la fin du round.",
                faction: ""
            },
            {
                name: "Fire-Control System",
                id: 72,
                slot: "Sensor",
                points: 2,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque, si vous avez un verrouillage sur le défenseur, vous pouvez relancer 1 dé d’attaque. Dans ce cas, vous ne pouvez pas dépenser votre marqueur de verrouillage pendant cette attaque.",
                faction: ""
            },
             {
                name: "Long Range Scanner",
                id: 73,
                slot: "Sensor",
                points: 5,
                restrictions: [],
                effect: "Vous pouvez verrouiller des cibles au-delà de la portée 3. Lorsque vous verrouillez une cible à portée 2 ou moins, recevez 1 marqueur d’épuisement.",
                faction: ""
            },
             {
                name: "Sensor Jammer",
                id: 74,
                slot: "Sensor",
                points: 8,
                restrictions: [],
                effect: "Augmentez les portées de l’action brouillage de 1. Lorsque vous défendez, vous pouvez dépenser 1 #ch# pour dégrader 1 dé d’attaque.",
                faction: ""
            },
    {
                name: "Patience",
                id: 75,
                slot: "Force",
                points: 2,
                restrictions: [],
                effect: "Au début de la phase d’engagement, s’il y a un vaisseau ennemi dans votre #Farc#, vous pouvez gagner 1 marqueur d’épuisement pour récupérer 1 #fo#.",
                faction: ""           
                
            },
     {
                name: "Precognitive Reflexes",
                id: 76,
                slot: "Force",
                points: 9,
                restrictions: [],
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
                restrictions: [],
                effect: "Tant que vous défendez, si vous n’êtes pas dans le #bulls# de l’attaquant, vous pouvez dépenser 1 #fo# pour changer 2 de vos résultats #eye# en résultats #evd#.",
                faction: ""
            },
    {
                name: "Sense",
                id: 78,
                slot: "Force",
                points: 5,
                restrictions: [],
                effect: "Pendant la phase de système, vous pouvez choisir 1 vaisseau à portée 0–1 et regarder son cadran. Si vous dépensez 1 #fo#, vous pouvez choisir un vaisseau à portée 0–3 à la place.",
                faction: ""
            },
    {
                name: "Instinctive Aim",
                id: 79,
                slot: "Force",
                points: 1,
                restrictions: [],
                effect: "Tant que vous effectuez une attaque spéciale, vous pouvez dépenser 1 #fo# pour ignorer le prérequis #TL# ou #FS#.",
                faction: ""
            },
            {
                name: "Automatic Gunning System",
                id: 80,
                slot: "Calculator",
                points: 3,
                restrictions: [],
                effect: "Après avoir effectué une attaque principale, vous pouvez effectuer une attaque bonus d’arme secondaire. Lors de cette attaque, vous ne pouvez pas ajouter ou modifier des dés d’attaque.",
                faction: ""
            },
             {
                name: "Advanced Networked Calculations",
                id: 81,
                slot: "Calculator",
                points: 2,
                restrictions: [],
                effect: "Lorsque vous défendez ou attaquez, vous pouvez dépenser 1 marqueur de calcul d’un vaisseau allié à portée 0-2 pour changer 1 résultat #eye# en résultat #evd# ou #hit#.",
                faction: ""
            },
             {
                name: "Hyperspace Tacking Data",
                id: 82,
                slot: "Calculator",
                points: 4,
                unique: true,
                restrictions: [],
                effect: "Mise en place : vous pouvez considérer votre initiative comme étant 0 ou 7. A la fin de la phase de mise en place, tous les vaisseaux alliés à portée 0-2 de vous gagne 1 marqueur de calcul. Ces marqueurs de calcul ne sont pas nettoyés en phase de fin.",
                faction: ""
            },
             {
                name: "Advanced Flight Computer",
                id: 83,
                slot: "Calculator",
                points: 3,
                unique: true,
                restrictions: [],
                effect: "Mise en place : vous commencez en réserve. Vous pouvez dépenser entre 0 et 2 charges.<br>Au début de la phase de planification, s’il n’y a plus de charge sur cette carte, retournez là face cachée, puis placez votre vaisseau intégralement à portée 1 d’un bord de l’aire de jeu.",
                faction: ""
            },
             {
                name: "Encrypter",
                id: 84,
                slot: "Calculator",
                points: 5,
                restrictions: [],
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
                    '"Crew"'
                ],
                also_occupies_upgrades: [
                    '"Crew"'
                ],
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Astromech"'
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
                        slot: '"Modification"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Illicit"'
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
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]
            },
            {
                name: "Proton Torpedoes",
                id: 135,
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
                id: 136,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "Rogue-class Starfighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "Retire en emplacement #missile# et la capacité 'Vaisseau-Mère'. Ajoute #sensor# et #calculator#. Ajoute 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ] 
            },
            {
                name: "Hound's Tooth",
                id: 137,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "YV-666 Light Freighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "Retire en emplacement",
                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]   
            },
            {
                name: "Slave 1",
                id: 138,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "Firespray-class Patrol Craft",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "culseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]   
            },
            {
                name: "Andrasta",
                id: 139,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "Firespray-class Patrol Craft",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "adout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]   
            },
            {
                name: "Outrider",
                id: 140,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "YT-2400 Light Freighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]   
            },
            {
                name: "Mist Hunter",
                id: 141,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "G-1A Starfighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "oute 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]   
            },
            {
                name: "Punishing One",
                id: 142,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "JumpMaster 5000",
                ship_cost: 1,
                Loadout_value: 5,
                effect: " Ajoute 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]      
            },
            {
                name: "IG-2000",
                id: 143,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "Aggressor Assault Fighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "Ajoute 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]      
            },
            {
                name: "Din Djarin's N1",
                id: 144,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "Naboo Royal N-1 Starfighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "e 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]      
            },
            {
                name: "Razor Crest",
                id: 145,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "ST-70 Assault Ship",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "te 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
                    }
                ]       
            },
            {
                name: "Moldy Crow",
                id: 146,
                slot: "Title",
                points: 0,
                unique: true,
                faction: "",
                ship: "HWK-290 Light Freighter",
                ship_cost: 1,
                Loadout_value: 5,
                effect: "ute 5 points de Loadout et augmente le coût du vaisseau de 1",

                unequips_upgrades: [
                    '"Missile"'
                ],
                lose_chassis: [
                    'Docking Ship'
                ],
                 /*modifier_func: (attackt) ->
                    attackt=3,*/
                confersAddons: [
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Sensor"'
                    },
                    {
                        //type: exportObj.Upgrade,
                        slot: '"Calculator"'
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
 let upgrades_Type = [[],[],[],[],[],[],[],[]];
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
function displayslots(y) { //crée les menus de slot et contient l'écoute des "modification" des slots
     // Get the parent element
    shipslot = document.getElementById('shipslots'+y);
     // Clear any existing child elements
     shipslot.innerHTML = '';
      // Create and append new select elements
      let index = 0;
    upgrades_Type[y] = [];    
      for (i = 0 ; i<pilot_list[y]["slots"].length; i++)  {
        upgrades_Type[y].push(pilot_list[y]["slots"][i]);
    slotmenu = document.createElement('select');
    slotmenu.setAttribute('id', 'slot'+y+"_"+i);
    slotmenu.setAttribute('class', 'slotElement'+' '+pilot_list[y]["slots"][i]);
    shipslot.appendChild(slotmenu);
    slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            updateUpgradeCount(y);
            updateTotalCost();
            displayDescriptionUpgrade(event);

    })    
    index = i;  
    index2 = i;     // pour ne pas perdre cette valeur car après on va incrémenter index
    }  
    for (j= 0 ; j<ships[pilots[y]["shipId"]]["slots"].length ; j++) { //on ajoute aussi les slots liés au chassis que l'on va chercher grace au shipId
        upgrades_Type[y].push(ships[pilots[y]["shipId"]]["slots"][j]);
        slotmenu = document.createElement('select');
        slotmenu.setAttribute('id', 'slot'+y+"_"+(j+index2+1));
        slotmenu.setAttribute('class', 'slotElement'+' '+ships[pilots[y]["shipId"]]["slots"][j] );
        shipslot.appendChild(slotmenu);
        slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            updateUpgradeCount(y);
            updateTotalCost();
            displayDescriptionUpgrade(event);
        })
       
    }  
   
    // ICI RAJOUTER LE CODE POUR INCLURE LES TITLE AUTOMATIQUEMENT ET QU'ILS CHANGENT LES SLOTS
    //
    // 
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
        let upgValue = parseInt(extractedString) || 0; //transforme la chaine en entier, et si elle est vide elle renvoir 0 (utile pour toutes les string type <"crew"> qui ne contiennent pas de parenthèses)
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
  
  let index = 0;  
    for (i=0 ; i<pilot_list[y]["slots"].length;i++) {
        let slotlist =[];
        slotlist.push("<"+pilot_list[y]["slots"][i]+">");
        for (k=0 ; k<upgrades.length ; k++) {
            if ((pilot_list[y]["slots"][i]===upgrades[k]["slot"]) && ((upgrades[k]["faction"]==="")||(upgrades[k]["faction"].includes(factionno1))||(upgrades[k]["faction"].includes(factionno2))||(upgrades[k]["faction"].includes(factionno3)))) {
            
            slotlist.push(upgrades[k]["name"] + ' (' + upgrades[k]["points"] + ')' ); //on ajoute dans le menu slotlist le nom de l'upgrade suivi de son cout entre parenthèses      
        }
    }
    populateMenu('slot'+y+'_'+i,slotlist);
    index++;
    }      
    for (i=0 ; i<ships[pilot_list[y]["shipId"]]["slots"].length;i++) {
        let slotlist =[];
        slotlist.push("<"+ships[pilot_list[y]["shipId"]]["slots"][i]+">");
        for (k=0 ; k<upgrades.length ; k++) {
            if ((ships[pilot_list[y]["shipId"]]["slots"][i]===upgrades[k]["slot"]) && ((upgrades[k]["faction"]==="")||(upgrades[k]["faction"].includes(factionno1))||(upgrades[k]["faction"].includes(factionno2))||(upgrades[k]["faction"].includes(factionno3)))) {
            
            slotlist.push(upgrades[k]["name"] + ' (' + upgrades[k]["points"] + ')' ); //on ajoute dans le menu slotlist le nom de l'upgrade suivi de son cout entre parenthèses      
        }
    }
    populateMenu('slot'+y+'_'+(index+i),slotlist); 
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







 
 
 