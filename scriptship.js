let shipquantity = -1; //compteur qui ne sert pas à compter mais à numéroter les id des menus
 let ship_available = [];
 let ship_selected_list = ["","","","","","","",""]; // Dans ce tableau, on va stocker la valeur sélectée de chaque menu_ship
 let pilot_id_available =[];
 let factionno1 = "";
 let factionno2 = "";
 let factionno3 = "";
 let totalcostvalue = 0;

 let pilot_selected_list = ["","","","","","","",""]; // Dans ce tableau, on va stocker la valeur sélectée de chaque menu_pilot
 let pilot_list = [{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0}]; //Dans ce tableau, on stocker les objets pilotes
 let pilot_objects = [[],[],[],[],[],[],[],[]]; //va contenir tous les objets pilotes disponibles pour chaque ligne
 let upgrades_Type = [[],[],[],[],[],[],[],[]]; //va contenir tous les slots pour chaque pilote
 let upgrades_Objects= [[],[],[],[],[],[],[],[]]; // va contenir la liste des contenus des menus slots mais sous forme d'objet
 let upgrades_Objects_Val= [[],[],[],[],[],[],[],[]]; // va contenir la liste des contenus des menus slots après validation mais sous forme d'objet
 let upgradesSelected = [[],[],[],[],[],[],[],[]]; //va contenir les upgrades sélectionnées
 let overCostTab = [0,0,0,0,0,0,0,0]; //Cette variable va stocker les augmentations des couts des pilotes dûs aux emports d'upgrade supérieurs au loadout de base
 let y= "0"; //valeur qui indique l'index du pilote podifié
 let z= "0"; //valeur qui indique l'index dans le menu de l'élément sélectionné
let x= "0"; //valeur qui indique l'index du menu d'amélioration sélectionné (sloty_x)
 let restrict = false;
let restricted_List = [[0],[1],[2],[3],[4],[5],[6],[7],[8]]; //va contenir les noms des upgrades (8 premiers sous tableaux) et pilotes uniques (9eme sous tableau)

let shipObject_available = [];
let listFull = []; //va contenir toutes les informations de chaque vaisseau sous forme d'objet (shipObject) dans le but de faire des preview de liste ou de les présenter sous une autre forme
const shipObject = {
    ship_name: "",
    ship_id:"",
    ship_attack:"",
    ship_attackt:"",
    ship_attackb:"",
    ship_agility:"",
    ship_hull:"",
    ship_shields:"",
    ship_actions:[],
    ship_chassis:[],
    pilot_name:"",
    pilot_id:"",
    pilot_max_per_squad:"",
    pilot_skill:"",
    pilot_points:"",
    pilot_force:"",
    pilot_ability:"",
    pilot_loadout:"",
    upgrade_list:[],
}

//description des chassis


const chassis = [
    {
        name: "Docking Ship",
        id: 0,
        effect1: "<em><strong>Vaisseau-Mère :</strong></em> MISE EN PLACE: vous <mark>DEVEZ</mark> avoir un vaisseau arrimé avec vous avec la capacité <em>Co-Pilot</em>. Considérez les boucliers de votre vaisseau arrimé comme les vôtres.",
    },
    {
        name: "Copilot",
        id: 1,
        effect1: "<em><strong>Copilote :</strong></em> Tant que vous êtes arrimé, votre Vaisseau-Mère considère aussi votre capacité de pilote comme étant le sien."
    },
    {
        name: "Sensor Blindspot",
        id: 2,
        effect1: "<em><strong>Angle-Mort des Senseurs :</strong></em> Tant que vous effectuez une attaque principale à portée 0-1, lancez 1 dé d'attaque en moins. Tant que vous défendez à portée 1, lancez 1 dé de défense en moins"

    },
    {
        name: "Servomotor S-Foils",
        id: 3,
        effect1: "<em><strong>Servomoteurs S-Foils :</strong></em> Avant de vous activez, vous pouvez retourner cette carte",
        effect2: ""
    },
    {
        name: "Pivot Wing",
        id: 4,
        effect1: "<em><strong>Aile Pivot (Baissée):</strong></em> ",
        effect2: "<em><strong>Aile Pivot (Relevée):</strong></em> "
    },
    {
        name: "Vectored Thrusters",
        id: 5,
        effect1: "<em><strong>Propulseurs Vectorisés :</strong></em> "
    },
    {
        name: "Stabilized S-Foils",
        id: 6,
        effect1: "<em><strong>S-Foils Stabilisés :</strong></em> ",
        effect2: "<em><strong>S-Foils Stabilisés :</strong></em> "
    },
    {
        name: "Advanced Targetting Computer",
        id: 7,
        effect1: "<em><strong>Ordinateur de Visée Avancé:</strong></em> Tant que vous effectuez une attaque principale contre un défenseur que vous avez vérouillé, lancez 1 dé d'attaque supplémentaire et changez 1 résultat #hit# en un résultat #crit#"
    },
    {
        name: "Nimble Bomber",
        id: 8,
        effect1: "<em><strong>Bombardier Agile :</strong></em> Si vous devez utiliser un gabarit #straight# pour larguer un engin, vous pouvez utiliser un gabarit #Lbank# ou #Rbank# de même vitesse à la place."
    },
    {
       name: "Swivel Wing",
    id: 9,   
    effect1: "<em><strong>Aile Basculante (Baissée):</strong></em> Après avoir executé une manoeuvre [0#stop#], vous pouvez pivoter votre vaisseau de 90° ou 180°. Dans ce cas vous <strong>devez</strong> retourner cette carte.",
       effect2: "<em><strong>Aile Basculante (Relevée):</strong></em> Tant que vous défendez, lancez 1 dé de défense en moins. Après avoir entièrement executé une manoeuvre non-stationnaire [0#stop#], vous pouvez retourner cette carte." 
    },
    {
        name: "Autothrusters",
        id: 10,
        effect1: "<em><strong>Autopropulseurs :</strong></em> Après avoir effectué une action, vous pouvez effectuer une action #BR# rouge ou #BO# rouge."
    },
    {
        name: "Full Throttle",
        id: 11,
        effect1: "<em><strong>Plein Gaz :</strong></em> Après avoir entièrement executé une manoeuvre à vitesse 3-5, vous pouvez gagner un jeton évasion."
    },
    {
        name: "Controlled Ailerons",
        id: 12,
        effect1: "<em><strong>Ailerons Contrôlables :</strong></em> Avant de révéler votre cadran, si vous n'êtes pas stressé, vous pouvez accélérer."
    },
    {
        name: "Rotating Cannons",
        id: 13,
        effect1: "<em><strong>Canons Rotatifs :</strong></em> Vous pouvez pivoter votre indicateur #tur# uniquement, vers votre #Farc# ou #Barc#. Vous <strong>devez</strong> considérer le prérequis #Farc# de cos améliorations #can# équipées comme étant #tur#."
    },
    {
        name: "Adaptative Ailerons",
        id: 14,
        effect1: "<em><strong>Ailerons Adaptables :</strong></em> Avant de révéler votre cadran, si vous n'êtes pas stressé, vous <strong>devez</strong> accélérer."
    },
    {
        name: "Rigged Energy Cells",
        id: 15,
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
            attackt: 0,
            attackb: 0,
            agility: 2,
            keyword: [],
            hull: 4,
            shields: 2,
            actions: [
                [0,"Fo", "W"], //0 means simple  action, Fo eans Focus, and "W" is white
                [0,"Lo", "W"],
                [0, "Br","W"]
            ],
            chassis: ["Servomotor S-Foils"],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 2, 2, 2, 2, 0, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0]
            ],
            slots: ["Torpedo", "Astromech", "Modification"],
            base: ["Small"]
        },
        {    
            
            name: "BTL-A4 Y-wing",
            factions: [ "Rebel_Alliance", "Hutt_Cartel", "Shadow_Specialists" ],
            
            id: 1,
            keyword: [],
            attack: 2,
            attack: 0,
            attackb: 0,
            agility: 1,
            hull: 6,
            shields: 2,
            actions: [
                [0,"Fo", "W"],
                [0,"Lo", "W"],
                [0,"Br", "R"], //R means red
                [0,"Rd", "R"],
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 0, 1, 1, 1, 0, 0],
                [ 2, 2, 1, 2, 2, 0],
                [ 3, 2, 2, 2, 3, 0],
                [ 0, 0, 3, 0, 0, 3]
            ],
            base: ["Small"],
            slots: ["Torpedo", "Turret", "Payload", "Astromech", "Modification"]
        },
        {
        
            name: "RZ-1 A-wing",
            factions: [ "Rebel_Alliance", "Phoenix_Cell" ],
            attack: 2,
            attackt: 0,
            attackb: 0,
            id:2,
            agility: 3,
            keyword: [],
            hull: 2,
            shields: 2,
            chassis: ["Vectored Thrusters"],
            actions: [
                [0,"Fo", "W"],
                [0,"Ev", "W"],
                [0,"Lo", "W"],
                [0,"Br", "W"],
                [0,"Bo", "W"]
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0, 0, 0],
                [ 1, 1, 1, 1, 1, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 3, 3],
                [ 0, 0, 1, 0, 0, 0, 0, 0],
                [ 0, 0, 1, 0, 0, 3, 0, 0]
            ],
            base: ["Small"],
            slots: ["Missile", "Modification"]
        },
        {
        
            name: "YT-1300 Light Freighter",
            factions: [ "Pirates_and_Smugglers", "Resistance" ],
            id: 3,
            keyword: [],
            attackt: 2,
            attack: 0,
            attackb: 0,
            agility: 1,
            hull: 8,
            shields: 5,
            chassis: ["Docking Ship"],
            chassisid: 0,
            actions: [
                [0,"Fo", "W"],
                [0,"Lo", "W"],
                [0,"Ro", "W"],
                [0,"Bo", "R"],
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 2, 1, 2, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0]
            ],
            base: ["Large"],
            slots: ["Missile", "Crew", "Crew", "Gunner", "Modification"]
        },
        {
        
            name: "TIE/ln Fighter",
            factions: ["Phoenix_Cell", "Imperial_Academy", "Imperial_Elite_Forces", "Imperial_Remnants"],
            id: 4,
            attack: 2,
            attackt: 0,
            attackb: 0,
            agility: 3,
            hull: 3,
            shields: 0,
            keyword: ["TIE"],
            actions: [
                [0,"Fo", "W"],
                [0,"Br", "W"],
                [0,"Ev", "W"],
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0],
                [ 2, 0, 0, 0, 2, 0],
                [ 2, 1, 1, 1, 2, 0],
                [ 2, 2, 1, 2, 2, 3],
                [ 0, 0, 2, 0, 0, 3],
                [ 0, 0, 2, 0, 0, 0]
            ],
            base: ["Small"],
            slots: ["Modification"]
        },
        {
    
            name: "TIE Advanced x1",
            factions: [ "Imperial_Academy" ],
            id: 5,
            attack: 2,
            attackt: 0,
            attackb: 0,
            agility: 3,
            hull: 3,
            shields: 2,
            keyword: ["TIE"],
            chassis: ["Advanced Targeting Computer"],
            actions: [
                [1,"Fo", "W", "Br", "R"], //1 means linked action
                [0,"Lo", "W"],
                [0,"Br", "W"],
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [ 0, 1, 2, 1, 0, 0, 0, 0, 0, 0],
                [ 2, 1, 1, 1, 2, 0, 0, 0, 0, 0],
                [ 2, 2, 1, 2, 2, 0, 0, 0, 3, 3],
                [ 0, 0, 2, 0, 0, 3, 0, 0, 0, 0],
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
            ],
            base: ["Small"],
            slots: ["Tech", "Missile", "Sensor", "Modification"]
        },
        {
        
            name: "TIE/in Interceptor",
            factions: [ "Imperial_Academy", "Imperial_Elite_Forces", "Imperial_Remnants" ],
            id: 6,
            attack: 3,
            attackt: 0,
            attackb: 0,
            agility: 3,
            hull: 3,
            shields: 0,
            keyword: ["TIE"],
            chassis: ["Autothrusters"],
            actions: [
                [0,"Fo", "W"],
                [0,"Br", "W"],
                [0,"BO", "W"],
                [0,"Ev", "W"]
            ],
            base: ["Small"],
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
            attackt: 0,
            agility: 2,
            hull: 6,
            shields: 4,
            base: ["Medium"],
            keyword: [],
            actions: [
                [0,"Fo", "W"],
                [0,"Lo", "W"],
                [0,"Bo", "W"],
                [0,"Re", "R"]
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
            keyword: [],
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
            base: ["Small"],
            slots: ["Crew", "Payload", "Turret", "Modification","Calculator"]
        },
        {
        
            name: "Lambda-class T-4a Shuttle",
            factions: [ "Imperial_Academy", "ISB", "Colossus" ],
            id: 9,
            attack: 3,
            agility: 1,
            hull: 6,
            shields: 4,
            keyword: [],
            chassis: ["Tail Cannon"],
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
            base: ["Large"],
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
            keyword: [],
            chassis: ["Stabilized S-Foils"],
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
            base: ["Small"],
            slots: ["Sensor", "Cannon", "Cannon", "Torpedo", "Gunner", "Payload", "Modification"]
        },
        {
            
            name: "TIE/sa Bomber",
            factions: [ "Imperial_Academy" ],
            id: 11,
            attack: 2,
            base: ["Small"],
            agility: 2,
            hull: 6,
            shields: 0,
            keyword: ["TIE"],
            chassis: ["Nimble Bomber"],
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
            base: ["Small"],
            keyword: [],
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
            base: ["Small"],
            keyword: ["TIE"],
            chassis: ["Full Throttle"],
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
            base: ["Small"],
            keyword: [],
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
            base: ["Small"],
            keyword: ["TIE"],
            chassis: ["Stygium Array"],
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
            chassis: ["Sensor Blackout"],
            keyword: [],
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "Rotate Arc"
            ],
            base: ["Large"],
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
            keyword: [],
            actions: [
                "Focus",
                "Lock",
                "Reinforce",
                "Rotate Arc",
                "R-Coordinate"
            ],
            base: ["Large"],
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
            chassis: ["Microthrusters"],
            keyword: [],
            actions: [
                "Focus",
                "Lock",
                "Barrel Roll",
                "R-> Focus",
                "Boost",
                "R-> Focus"
            ],
            base: ["Small"],
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
            chassis: ["Weapon Hardpoint"],
            keyword: [],
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
            base: ["Small"],
            slots: ["Modification"]
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
            base: ["Medium"],
            keyword: [],
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
            base: ["Large"],
            keyword: [],
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
            slots: ["Crew", "Crew", "Illicit", "Illicit", "Modification"]
        },
        {
    
       
            name: "Kihraxz Fighter",
            factions: ["Black_Sun", "Hutt_Cartel", "Bounty_Hunters_Guild"],
            id: 22,
            attack: 3,
            agility: 2,
            hull: 5,
            shields: 1,
            keyword: [],
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
            base: ["Small"],
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
            base: ["Medium"],
            keyword: [],
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
            id: 24,
            attack: 2,
            agility: 1,
            hull: 6,
            shields: 3,
            keyword: ["TIE"],
            base: ["Medium"],
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
            id: 25,
            attack: 4,
            agility: 0,
            hull: 10,
            shields: 4,
            base: ["Large"],
            keyword: [],
            chassis: ["Ghost"],
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
            ],
            slots: ["Crew","Crew","Gunner","Torpedo","Turret","Modification","Sensor"]
        },
        {
     
      
            name: "Attack Shuttle",
            factions: ["Phoenix_Cell"],
            id: 26,
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 1,
            chassis: ["Locked and Loaded"],
            keyword: [],
            actions: [
                "Focus",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
            ],
            base: ["Small"],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0 ],
                [ 3, 1, 1, 1, 3, 0 ],
                [ 2, 2, 1, 2, 2, 0 ],
                [ 3, 2, 2, 2, 3, 0 ],
                [ 0, 0, 2, 0, 0, 3 ]
            ],
            slots: ["Crew","Turret","Modification"]
        },
        {
  
            name: "TIE Advanced v1",
            factions: ["Imperial_Elite_Forces"],
            id: 27,
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
            base: ["Small"],
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
            id: 28,
            attack: 3,
            agility: 1,
            hull: 5,
            shields: 4,
            base: ["Medium"],
            keyword: [],
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
            id: 29,
            base: ["Large"],
            attackt: 2,
            agility: 2,
            hull: 6,
            shields: 3,
            keyword: [],
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
            id: 30,
            attack: 3,
            attackb: 2,
            agility: 1,
            hull: 6,
            shields: 3,
            base: ["Medium"],
            keyword: [],
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
            id: 31,
            attack: 3,
            agility: 3,
            hull: 4,
            shields: 0,
            chassis: ["Concordia Faceoff"],
            keyword: [],
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
            base: ["Small"],
            slots: ["Torpedo", "Modification", "Modification"]
        },
        {
    
            name: "Lancer-Class Pursuit Craft",
            factions: ["Black_Sun", "Crime_Syndicates"],
            id: 32,
            base: ["Large"],
            attack: 3,
            attackt: 2,
            agility: 2,
            hull: 8,
            shields: 2,
            keyword: [],
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
            id: 33,
            factions: ["Hutt_Cartel"],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            chassis: ["Spacetug Tractor Array"],
            keyword: [],
            actions: [
                "Focus",
                "R-Evade",
                "Barrel Roll",
            ],
            base: ["Small"],
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
            id: 34,
            base: ["Medium"],
            attack: 3,
            agility: 2,
            hull: 5,
            shields: 3,
            chassis: ["Pivot Wing"],
            keyword: [],
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
            id: 35,
            factions: ["ISB"],
            attack: 3,
            agility: 2,
            hull: 4,
            shields: 0,
            base: ["Small"],
            keyword: ["TIE"],
            chassis: ["Adaptive Ailerons"],
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
            id: 36,
            attackf: 3,
            agility: 1,
            hull: 6,
            shields: 2,
            base: ["Small"],
            keyword: [],
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
            id: 37,
            attack: 3,
            agility: 1,
            hull: 6,
            shields: 4,
            base: ["Medium"],
            keyword: [],
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
            id: 38,
            factions: ["ISB"],
            attack: 2,
            agility: 2,
            hull: 4,
            base: ["Small"],
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
            id: 39,
            factions: ["ISB"],
            attack: 2,
            agility: 2,
            hull: 4,
            shields: 3,
            base: ["Small"],
            keyword: [],
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
            id: 40,
            factions: ["Hutt_Cartel"],
            attack: 3,
            agility: 1,
            hull: 7,
            shields: 2,
            base: ["Medium"],
            chassis: ["Dead to Rights"],
            keyword: [],
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
            id: 41,
            attack: 2,
            attackb: 2,
            agility: 2,
            hull: 4,
            shields: 1,
            base: ["Small"],
            chassis: ["Comms Shuttle"],
            keyword: [],
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
            ],
            slots: ["Crew","Modification","Astromech","Calculator"]
        },
        {
    

            name: "TIE Reaper",
            id: 42,
            factions: ["ISB"],
            attack: 3,
            agility: 1,
            hull: 6,
            shields: 2,
            base: ["Medium"],
            keyword: ["TIE"],
            chassis: ["Controlled Ailerons"],
            keyword: ['TIE'],
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
            id: 43,
            attack: 1,
            agility: 2,
            hull: 2,
            shields: 2,
            chassis: ["Co-Pilot"],
            base: ["Small"],
            keyword: [],
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
            id: 44,
            attack: 3,
            agility: 2,
            hull: 4,
            shields: 3,
            base: ["Small"],
            keyword: [],
            chassis: ["Integrated S-Foils"],
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
            ],
            slots: ['Tech','Modification','Astromech']
        },
        {
           

            name: "RZ-2 A-wing",
            factions: ["Resistance", "New_Republic"],
            id: 45,
            attackt: 2,
            agility: 3,
            hull: 2,
            shields: 2,
            base: ["Small"],
            keyword: [],
            chassis: ["Refined Gyrostabilizers"],
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
            ],
            slots: ['Tech','Missile','Modification']
        },
        {
      

            name: "TIE/fo Fighter",
            factions: ["First_Order", "Shadow_Specialists"],
            id: 46,
            attack: 2,
            agility: 3,
            hull: 3,
            keyword: ["TIE"],
            shields: 1,
            base: ["Small"],
            slots: ["Tech","Modification"],
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
            id: 47,
            attack: 3,
            agility: 3,
            hull: 4,
            shields: 2,
            base: ["Small"],
            keyword: ["TIE"],
            chassis: ["Autothrusters"],
            slots: ["Tech","Torpedo","Modification","Sensor"],
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
            id: 48,
            attack: 2,
            attackt: 2,
            agility: 2,
            hull: 3,
            shields: 3,
            base: ["Small"],
            slots: ["Gunner","Tech","Missile","Modification"],
            keyword: ["TIE"],
            chassis: ["Heavy Weapon Turret"],
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
            id: 49,
            factions: ["First_Order"],
            attack: 4,
            agility: 1,
            hull: 6,
            shields: 6,
            chassis: "???",
            keyword: [],
            slots: ["Crew","Crew","Modification","Modification","Sensor","Calculator","Calculator"],
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
            base: ["Large"]
        },
        {
    
   
            name: "MG-100 StarFortress",
            id: 50,
            factions: ["Resistance"],
            attack: 3,
            attackt: 2,
            agility: 1,
            hull: 9,
            shields: 3,
            keyword: [],
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
            base: ["Large"],
            slots: ['Crew','Gunner','Tech','Tech','Payload','Payload','Turret','Modification']
        },
        {
      
 
            name: "Modified TIE/ln Fighter",
            factions: ["Crime_Syndicates"],
            id: 51,
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 0,
            base: ["Small"],
            chassis: ["Notched Stabilizers"],
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
            id: 52,
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            base: ["Small"],
            keyword: [],
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
            id: 53,
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 1,
            base: ["Small"],
            keyword: ["Hyperspace Ring"],
            chassis: ["Fine-Tuned Controls"],
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
            id: 54,
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 3,
            base: ["Small"],
            keyword: ["Hyperspace Ring"],
            chassis: ["Fine-Tuned Controls"],
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
            id: 55,
            attack: 3,
            agility: 1,
            hull: 6,
            base: ["Large"],
            keyword: ["Scimitar"], //power of the former Scimitar Title
            shields: 4,
            actions: [
                "Focus",
                "Lock",
                "R-Barrel Roll",
                "R-Cloak",
                "R-Jam"
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
            id: 56,
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 0,
            base: ["Small"],
            keyword: [],
            chassis: ["Grappling Struts"],
            slots: ["Missile"],
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
            id:57,
            factions: ["C.I.S"],
            attack: 3,
            agility: 2,
            hull: 3,
            shields: 2,
            base: ["Small"],
            keyword: [],
            slots: ["Modification","Modification","Calculator"],
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
            id:58,
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 2,
            chassis: ["Full Throttle"],
            base: ["Small"],
            keyword: [],
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
            slots: ["Torpedo", "Astromech", "Sensor"]
        },
        {

            name: "Hyena-class Droid Bomber",
            id: 59,
            factions: ["C.I.S"],
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 0,
            base: ["Small"],
            keyword: [],
            chassis: ["Landing Struts"],
            slots: ["Missile","Torpedo","Payload","Modification","Sensor"],
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
            id: 60,
            attack: 2,
            agility: 2,
            hull: 3,
            shields: 1,
            base: ["Small"],
            keyword: [],
            chassis: ["Co-Pilot"],
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
            ],
            slots: ['Crew','Tech','Modification']
        },
        {
     
 
            name: "Resistance Transport",
            factions: ["Resistance"],
            id: 61,
            attack: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            base: ["Small"],
            keyword: [],
            chassis: ["Docking Ship"],
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
            ],
            slots: ['Crew','Crew','Tech','Cannon','Modification','Astromech']
        },
        {
    
            name: "Nantex-Class Starfighter",
            factions: ["Agents_of_Chaos"],
            id: 62,
            attackbull: 3,
            attackt: 2,
            agility: 3,
            hull: 4,
            shields: 0,
            base: ["Small"],
            keyword: [],
            chassis: ["Pinpoint Tractor Array"],
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
            id: 63,
            attack: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            base: ["Small"],
            keyword: [],
            chassis: ["Plated Hull"],
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
            id: 64,
            attack: 2,
            agility: 2,
            hull: 6,
            shields: 0,
            base: ["Small"],
            keyword: [],
            chassis: ["Explosion with Wings"],
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
            id: 65,
            attack: 3,
            agility: 3,
            hull: 2,
            shields: 2,
            base: ["Small"],
            keyword: ["TIE"],
            chassis: ["Fine-Tuned Thrusters"],
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
            id: 66,
            attack: 2,
            agility: 2,
            hull: 5,
            shields: 2,
            base: ["Medium"],
            keyword: [],
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
            id: 67,
            attackf: 2,
            agility: 1,
            hull: 5,
            shields: 3,
            base: ["Small"],
            keyword: [],
            chassis: ["Repulsorlift Stabilizers"],
            slots: ["Crew","Missile","Missile","Payload","Modification","Calculator"],
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
            factions: ["Galactic_Senate","Partisans"],
            id: 68,
            attackt: 1,
            agility: 1,
            hull: 8,
            shields: 2,
            base: ["Medium"],
            keyword: [],
            chassis: ["Fire Convergence"],
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
            id: 69,
            attackt: 2,
            agility: 1,
            hull: 8,
            shields: 0,
            base: ["Medium"],
            keyword: ["TIE"],
            chassis: ["Rotating Cannons"],
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
            id: 70,
            factions: ["C.I.S"],
            attack: 3,
            agility: 3,
            hull: 3,
            shields: 0,
            base: ["Small"],
            keyword: [],
            chassis: ["Networked Calculations"],
            slots: ["Modification","Sensor","Calculator","Calculator"],
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
            id: 71,
            attack: 2,
            agility: 3,
            hull: 2,
            shields: 2,
            keyword: ["TIE", "Hyperspace Ring"],
            base: ["Small"],
            chassis: ["Twin Ion Engines"],
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
            id: 72,
            attackbull: 3,
            attack: 2,
            agility: 3,
            hull: 3,
            shields: 0,
            base: ["Small"],
            keyword: ["Hyperspace Ring"],
            chassis: ["Intuitive Controls"],
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
            id: 73,
            factions: ["J"],
            agility: 1,
            hull: 1,
            shields: 2,
            keyword: ["Hyperspace Ring"],
            base: ["Small"],
            actions: [
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
            ]
        },
        {
     
            name: "BTA-NR2 Y-wing",
            factions: ["Resistance"],
            id: 74,
            attack: 2,
            agility: 1,
            hull: 4,
            shields: 3,
            base: ["Small"],
            keyword: [],
            chassis: ["Intuitive Interface"],
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
            ],
            slots: ['Tech','Torpedo','Payload','Turret','Illicit','Modification','Astromech']
        },
        {
     
 
            name: "TIE/wi Whisper Modified Interceptor",
            id: 75,
            factions: ["Shadow_Specialists"],
            attackbull: 3,
            attackt: 2,
            agility: 2,
            hull: 3,
            shields: 2,
            keyword: ["TIE"],
            base: ["Small"],
            chassis: ["Heavy Weapon Turret"],
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
            id: 76,
            attack: 2,
            agility: 2,
            hull: 4,
            shields: 2,
            base: ["Small"],
            keyword: ["TIE"],
            chassis: ["Pursuit Thrusters"],
            slots: ["Gunner","Missile","Torpedo","Payload","Payload","Modification"],
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
            factions: ["Mandalorian_Clans","Phoenix_Cell"],
            id: 77,
            attack: 3,
            attackb: 2,
            agility: 2,
            hull: 9,
            shields: 2,
            base: ["Large"],
            keyword: [],
            chassis: ["Troop Bay , Swivel Wing"] ,
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
            id: 78,
            attack: 3,
            agility: 2,
            hull: 7,
            shields: 2,
            base: ["Medium"],
            keyword: [],
            chassis: ["Hidden Devices"],
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
            factions: [ "Jedi_Order" ],
            id: 79,
            attack: 2,
            agility: 2,
            base: ["Small"],
            keyword: [],
            hull: 2,
            shields: 2,
            chassis: ["Versatile Frame"],
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
            id: 80,
            attack: 2,
            agility: 2,
            base: ["Small"],
            keyword: [],
            hull: 5,
            shields: 2,
            chassis: ["Dead to Rights"],
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
            id: 81,
            sattack: 2,
            srange: [1,2],
            agility: 2,
            base: ["Small"],
            keyword: [],
            hull: 2,
            shields: 0,
            chassis: ["Boarding","Multiple Targets"],
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
        },
        {
        	name: "T6 Shuttle",
            factions: [ "Partisans", "Jedi_Order", "New_Republic" ],
            id: 82,
            attack: 2,
            attackb: 2,
            agility: 3,
            base: ["Large"],
            keyword: [],
            hull: 6,
            shields: 2,
            actions: [
                "Focus",
                "Evade",
                "R-Coordinate"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 2, 2, 1, 2, 2, 0,0,0],
                [ 0, 2, 1, 2, 0, 0,3,3],
                [ 0, 0, 2, 0, 0, 0,0,0]
            ],
            slots: ["Crew","Gunner","Modification","Astromech","Calculator"]
        },
        {
        	name: "Supa Starfighter",
            factions: [ "Crime_Syndicates", "Black_Sun"],
            id: 83,
            attack: 3,
            agility: 1,
            base: ["Medium"],
            keyword: [],
            hull: 7,
            shields: 1,
            chassis: ["Plated Hull"],
            actions: [
                "Focus",
                "Lock",
                "R-> Reload",
                "Reinforce"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 0, 2, 1, 2, 0, 0,0,0],
                [ 2, 2, 1, 2, 2, 0,0,0],
                [ 0, 2, 1, 2, 0, 0,0,0],
                [ 0, 0, 3, 0, 0, 3,0,0]
            ],
            slots: ["Torpedo","Modification","Modification"]
        },
        {
        	name: "Crimson Starfighter",
            factions: [ "Crime_Syndicates" ],
            id: 84,
            attack: 2,
            agility: 2,
            base: ["Small"],
            keyword: ["Crimson_Dawn"],
            hull: 2,
            shields: 1,
            chassis: ["Hit & Run"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Illicit","Modification"]
        },
        {
        	name: "Sarissa-Class Gunship",
            factions: [ "Crime_Syndicates" ],
            id: 85,
            attack: 3,
            agility: 1,
            base: ["Medium"],
            keyword: ["Pyke_Syndicate"],
            hull: 5,
            shields: 2,
            chassis: ["Tractor Constrictor"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0,0,0],
                [ 0, 1, 1, 1, 0, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 3, 2, 1, 2, 3, 3,3,3],
                [ 0, 0, 2, 0, 0, 0,0,0],
                [ 0, 0, 0, 0, 0, 0,0,0]
            ],
            slots: ["Gunner","Missile","Cannon","Modification","Sensor"]
        },
        {
        	name: "Rihkxyrk Attack Ship",
            factions: [ "Black_Sun" ],
            id: 86,
            agility: 0,
            base: ["Medium"],
            keyword: [],
            hull: 9,
            shields: 3,
            chassis: ["Advanced Bomber"],
            actions: [
                "Focus",
                "Lock",
                "Reload",
                "R-Boost"
            ],
            maneuvers: [
                [ 0, 0, 3, 0, 0, 0,0,0],
                [ 0, 2, 1, 2, 0, 0,0,0],
                [ 3, 2, 1, 2, 3, 3,0,0],
                [ 3, 2, 1, 2, 3, 0,0,0]

            ],
            slots: ["Tech","Missile","Torpedo","Payload","Payload"]
        },
        {
        	name: "Blue Ace",
            factions: [ "Colossus" ],
            id: 87,
            attack: 2,
            agility: 3,
            base: ["Small"],
            keyword: [],
            hull: 4,
            shields: 0,
            chassis: ["Full Throttle","Overdrive Thrusters"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Astromech","Modification"]
        },
        {
        	name: "Red Ace",
            factions: [ "Colossus" ],
            id: 88,
            attack: 2,
            agility: 3,
            base: ["Small"],
            keyword: [],
            hull: 5,
            shields: 0,
            chassis: ["Calibrated Laser Targeting","Fine-Tuned Thrusters"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Astromech","Calculator"]
        },
        {
        	name: "Yellow Ace",
            factions: [ "Colossus" ],
            id: 89,
            attack: 1,
            attackt: 1,
            agility: 2,
            base: ["Small"],
            keyword: [],
            hull: 5,
            shields: 0,
            chassis: ["Microthrusters","Pinpoint Tractor Array"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Astromech","Sensor"]
        },
        {
        	name: "Green Ace",
            factions: [ "Colossus" ],
            id: 90,
            attack: 2,
            agility: 3,
            base: ["Small"],
            keyword: [],
            hull: 4,
            shields: 0,
            chassis: ["Autothrusters","Intuitive Interface"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Astromech","Illicit"]
        },
        {
        	name: "Black Ace",
            factions: [ "Colossus" ],
            id: 91,
            attack: 3,
            agility: 2,
            base: ["Small"],
            keyword: [],
            hull: 4,
            shields: 0,
            chassis: ["Controlled Ailerons","Pursuit Thrusters"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Astromech","Tech"]
        },
        {
        	name: "Fanblade Starfighter",
            factions: [ "Agents_of_Chaos" ],
            id: 92,
            attackbull: 3,
            agility: 3,
            base: ["Small"],
            keyword: [],
            hull: 2,
            shields: 2,
            chassis: ["Turbo Thrusters","Folding Wings"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Modification"]
        },
        {
        	name: "Tie Echelon",
            factions: [ "First_Order" ],
            id: 93,
            attack: 3,
            agility: 2,
            base: ["Medium"],
            keyword: ["TIE"],
            hull: 5,
            shields: 1,
            chassis: [],
            actions: [
                "Focus",
                "R-> Barrel Roll",
                "Lock",
                "R-> Boost"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Crew","Gunner","Tech","Turret","Sensor"]
        },
        {
        	name: "Oubliette Class Transport",
            factions: [ "Shadow_Specialists" ],
            id: 94,
            attack: 3,
            agility: 2,
            base: ["Large"],
            keyword: [],
            hull: 7,
            shields: 3,
            chassis: ["Night Buzzard"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Crew","Gunner","Turret","Cannon","Modification"]
        },
        {
        	name: "Omicron Class Shuttle",
            factions: [ "Imperial_Remnants","Galactic_Senate" ],
            id: 95,
            attack: 2,
            agility: 1,
            base: ["Large"],
            keyword: [],
            hull: 6,
            shields: 5,
            chassis: ["Tail Laser Turret"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Crew","Crew","Gunner","Payload","Turret","Modification","Calculator"]
        },
        {
        	name: "RP82 Fighter",
            factions: [ "Imperial_Remanants" ],
            id: 96,
            attack: 2,
            attackbull: 3,
            agility: 3,
            base: ["Small"],
            keyword: [],
            hull: 3,
            shields: 1,
            chassis: ["Overdrive Thrusters"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Tech"]
        },
        {
        	name: "Laat/Le Patrol Gunship",
            factions: [ "Imperial_Remnants" ],
            id: 97,
            attackt: 2,
            agility: 2,
            base: ["Medium"],
            keyword: [],
            hull: 6,
            shields: 2,
            chassis: ["Troop Bay"],
            actions: [
                "Focus",
                "R-> Cloak",
                "Cloak",
                "Evade",
                "Barrel Roll",
                "R-> Evade",
                "Boost",
                "R-> Evade"
            ],
            maneuvers: [
                [ 0, 0, 0, 0, 0, 0,0,0],
                [ 2, 2, 0, 2, 2, 0,0,0],
                [ 2, 1, 1, 1, 2, 0,0,0],
                [ 1, 1, 1, 1, 1, 0,3,3],
                [ 0, 0, 1, 0, 0, 0,0,0],
                [ 0, 0, 1, 0, 0, 3,0,0]
            ],
            slots: ["Crew","Gunner","Gunner","Missile","Turret","Modification"]
        }
        
        
    ];
      
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
                modifier_func: [
                    [() => change_stat,["points",1]],
                    [() => change_stat,["loadout",5]]
                ]
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
                modifier_func: [
                    [() => change_stat,["points",1]],
                    [() => change_stat,["loadout",5]]
                ]
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
    
    ship_available = ["<Select Ship>"];
    shipObject_available = [];
    for (let i = 0; i < ships.length; i++) {
        if (ships[i]["factions"].includes(factionno1) || ships[i]["factions"].includes(factionno2) || ships[i]["factions"].includes(factionno3)) {
        ship_available.push(ships[i]["name"]) ;
        shipObject_available.push(ships[i]);
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
            shipquantity = -1;
            
            overCostTab = [0,0,0,0,0,0,0,0];
            totalcostvalue = 0;
            y= 0;
            x=0;
            z=0;
            upgrades_Type = [[],[],[],[],[],[],[],[]];
            upgrades_Objects= [[],[],[],[],[],[],[],[]];
            upgradesSelected = [[],[],[],[],[],[],[],[]];
            upgrades_Objects_Val= [[],[],[],[],[],[],[],[]];
            pilot_objects = [[],[],[],[],[],[],[],[]];
            restricted_List = [[0],[1],[2],[3],[4],[5],[6],[7],[8]];
            pilot_list = [{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0}];
            listFull = [];
        }       

function select_pilot_list(x){ //permet de remplir la liste des pilotes disponibles correspondant au vaisseau sélectionné
    factionnameget();
    let pilot_available = ["<Select Pilot>"];
    ship_selected_list[x] = document.getElementById("menu_ship_"+ x).value;
    for (let i= 0; i< pilots.length; i++) {
    if ((pilots[i]["faction"]===factionno1 || pilots[i]["faction"]===factionno2 || pilots[i]["faction"]===factionno3) && (pilots[i]["ship"]===ship_selected_list[x])) {
        pilot_available.push(pilots[i]["name"] + ' (' + pilots[i]["points"] + ')' );//on ajoute dans la liste le nom des pilotes avec leur cout
        pilot_objects[x].push(pilots[i]);
   } 
   populateMenu("menu_pilot_" + x, pilot_available);
  
  
}
}

function dataGetFromPilot(yy) { //On prend le pilote et on recopie l'objet pilote dans pilot_list, et on va incrémenter le totalcost
    pilot_selected_list[yy] = document.getElementById("menu_pilot_"+yy).value;
    costcount = document.getElementById("shipcost"+yy);
    loadoutcount= document.getElementById("shiploadout"+yy);
    totalcount= document.getElementById("totalcost");
    totalcostvalue = 0; //remise à 0 sinon il s'incrémente à chaque saisie de pilote
    /*for (i=0; i<pilots.length; i++) {
        let endIndex = pilot_selected_list[yy].indexOf(" ("); // Find the index of " (" 
        let nomPilote = pilot_selected_list[yy].substring(0, endIndex); //On retire les parenthèses avec le cout pour pouvoir faire une comparaison stricte dans la ligne d'après
        if (nomPilote===pilots[i]["name"]) {
            pilot_list[yy] = pilots[i];*/
            pilot_list[yy] = pilot_objects[yy][z-1];
            costcount.textContent = pilot_list[yy]["points"];
            loadoutcount.textContent = pilot_list[yy]["loadout"];
            for (j=0; j<8 ;j++) {
                totalcostvalue = totalcostvalue + pilot_list[j]["points"];
                };
         totalcount.textContent = totalcostvalue;   
         return
            }
    



function displayslots(yy) { //crée les menus de slot et contient l'écoute des "modification" des slots
     // Get the parent element
    shipslot = document.getElementById('shipslots'+yy);
     // Clear any existing child elements
     shipslot.innerHTML = '';
      // Create and append new select elements
      let index = 0;
    upgrades_Type[yy] = [];    
      try{  //permet de supprimer les risques d'erreur lorsqu'il n'y a pas de slots pour le pilote (undefined)
        if  (typeof pilot_list[yy]["slots"][0] === 'undefined') {
            console.log("no display slots");
        }else{
        for (i = 0 ; i<pilot_list[yy]["slots"].length; i++)  {
        upgrades_Type[yy].push(pilot_list[yy]["slots"][i]);
    slotmenu = document.createElement('select');
    slotmenu.setAttribute('id', 'slot'+yy+"_"+i);
    slotmenu.setAttribute('class', 'slotElement'+' '+pilot_list[yy]["slots"][i]);
    shipslot.appendChild(slotmenu);
    slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            identifyElement(event);
            check_restricted_List(event);
            checkUpgradeValidation(event);
            updateUpgradeCount(y);
            updateTotalCost();
            displayDescriptionUpgrade(event);
            fillUpgradesSelected(y);
	    

            })
    slotmenu.addEventListener("mouseover", function(event){
        
        displayDescriptionUpgrade(event);
    })    
        index++;  
         }
        } 
    }catch(error){
        console.log("no display slots");
    } 
   
    for (j= 0 ; j<ships[pilot_list[yy]["shipId"]]["slots"].length ; j++) { //on ajoute aussi les slots liés au chassis que l'on va chercher grace au 
        
        upgrades_Type[yy].push(ships[pilot_list[yy]["shipId"]]["slots"][j]);
        slotmenu = document.createElement('select');
        slotmenu.setAttribute('id', 'slot'+yy+"_"+(j+index));
        slotmenu.setAttribute('class', 'slotElement'+' '+ships[pilot_list[yy]["shipId"]]["slots"][j] );
        shipslot.appendChild(slotmenu);
        slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            identifyElement(event); 
            check_restricted_List(event);    
            checkUpgradeValidation(event);
            updateUpgradeCount(y);
            updateTotalCost();
            displayDescriptionUpgrade(event);
            fillUpgradesSelected(y);
	    
        });
        slotmenu.addEventListener("mouseover", function(event){
            displayDescriptionUpgrade(event)
        })
       
    }  
   
    
}
function fillUpgradesSelected(yy){
    upgradesSelected[yy] = [];
    listFull[yy].upgrade_list = [];
    for (let i=0; i<upgrades_Type[y].length ; i++){
        slotM = document.getElementById("slot"+yy+"_"+i);
        upgradesSelected[yy].push(slotM.value);
        
        if (slotM.selectedIndex>0){
            
            listFull[yy].upgrade_list.push(upgrades_Objects_Val[yy][i][slotM.selectedIndex-1]['id'])
        }
            
    }
}

function identifyElement(event){ //sloty_x & index z de l'élément sélectionné, ou pilote dans ce cas x=-1
    let slotMe = event.target.id;
    if (slotMe.indexOf("pilot")>0){ //si l'id contient la chaine "pilot"
        z = event.target.selectedIndex;
        y = slotMe.substring(11);
        x = -1;
    }else{
        if (slotMe.indexOf("slot")===0)
        z = event.target.selectedIndex;
        y = slotMe.substring(4,5);
        x = slotMe.substring(6);
    }
   
     
}
function updateUpgradeCount(yy) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
    let newLoadoutValue = pilot_list[yy]["loadout"];
    costcount = document.getElementById("shipcost"+yy);
    loadoutcount= document.getElementById("shiploadout"+yy);
    for (k=0; k<upgrades_Type[y].length ; k++) {
        let slotMenu = document.getElementById('slot'+yy+"_"+k);
        let slotString = slotMenu.value;
        let startIndex = slotString.indexOf("(") + 1; // Find the index of '(' and add 1 to skip '('
        let endIndex = slotString.indexOf(")"); // Find the index of ')'
        let extractedString = slotString.substring(startIndex, endIndex); // Extract the substring between '(' and ')'
        let upgValue = parseInt(extractedString) || 0; //transforme la chaine en entier, et si elle est vide elle renvoir 0 (utile pour toutes les string type <"crew"> qui ne contiennent pas de parenthèses)
        newLoadoutValue = newLoadoutValue - upgValue;
    }
    loadoutcount.textContent = newLoadoutValue;
    if (newLoadoutValue>=0) {
	    overCostTab[yy]=0;
	    costcount.textContent = pilot_list[yy]["points"] //Si le loadout value est supérieur à 0, le cost doit être égal a la valeur initiale du pilote sans modificateur
        listFull[yy].pilot_points = costcount + overCostTab[yy];
	    return;
	}
	if ((newLoadoutValue<0) && (newLoadoutValue>-6) ) {
        overCostTab[yy]=1;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy]; //Si le loadout value est entre -1 et -5 compris, le cost du pilote augmente de 1
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
    }
    if ((newLoadoutValue<-5) && (newLoadoutValue>-11) ) {
        overCostTab[y]=2;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy] ; //Si le loadout value est entre -6 et -9 compris, le cost du pilote augmente de 2
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
    }
    if ((newLoadoutValue<-10) && (newLoadoutValue>-16) ) {
        overCostTab[y]=3;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy] ; //Si le loadout value est entre -10 et -15 compris, le cost du pilote augmente de 3
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
    }
    if ((newLoadoutValue<-15) && (newLoadoutValue>-21) ) {
        overCostTab[y]=4;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy]; //Si le loadout value est entre -16 et -20 compris, le cost du pilote augmente de 4
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
    }
    if ((newLoadoutValue<-20) && (newLoadoutValue>-26) ) {
        overCostTab[y]=5;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy] ; //Si le loadout value est entre -21 et -25 compris, le cost du pilote augmente de 5
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
    }
    if ((newLoadoutValue<-25) && (newLoadoutValue>-31) ) {
        overCostTab[y]=6;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy] ; 
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
     }
    if ((newLoadoutValue<-30) && (newLoadoutValue>-36) ) {
        overCostTab[y]=7;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy] ; 
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
    }
    if ((newLoadoutValue<-35) && (newLoadoutValue>-41) ) {
        overCostTab[y]=8;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy] ; 
        listFull[yy].pilot_points = costcount + overCostTab[yy];
        return;
    }
    if (newLoadoutValue<-40) {
        overCostTab[y]=9;
        costcount.textContent = pilot_list[yy]["points"] + '+' + overCostTab[yy];
        listFull[yy].pilot_points = costcount + overCostTab[yy];
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

function testRestriction (yy,tableRestrictions){//va vérifier si les restrictions sont true, et renvoie la valeur restrict=true si c'est bon
    let testR = 0;
let varlist = [];
let nbr = tableRestrictions[0];
let list = tableRestrictions[1];
let target1 = tableRestrictions[2];
let target2 = tableRestrictions[3];

switch (list) {
    case 'title':
        varlist = pilot_list[yy]["title"];
        break;
    case 'upgrade':
        varlist = upgrades_Type[yy];
        break;
    case 'base':
        force: 0,varlist = ships[pilot_list[yy]['shipId']]['base'];
        break;
    case 'keyword' :
        force: 0,varlist =  ships[pilot_list[yy]['shipId']]['keyword']; 
        break;
    case 'action' :
        force: 0,varlist = ships[pilot_list[yy]['shipId']]['actions'];
        break;
    default : 
        
}

        for (i=0; i<varlist.length; i++) {
            
    if ((varlist[i]===target1)||(varlist[i]===target2)) {
        testR++;
    }
    }
    
if (testR>=nbr){
    restrict = true;
}else{
    restrict = false;
}

}


function checkUpgRestriction(yy){ //populate les menus slots avec les bonnes upgrades
    for (let i=0; i<upgrades_Objects[yy].length;i++) {
        if (document.getElementById('slot'+yy+'_'+i).getAttribute("disabled")===""){ //si le menu est disabled par exemple à cause d'un auto_equip, on ne va pas repopulate le menu. Si le menu n'est pas disabled, le getAttribute renvoie null au lieu de "".
           
            continue;
        }
        upgrades_Objects_Val[yy][i]= []; //on le réinitialise car checkUpgRestriction est exécutée 2 fois (Cf add_ship function)
        let slotmenucontent = [];
        let slotmenuobjects = [];
        slotmenucontent.push("<"+upgrades_Type[yy][i]+">");
        
        for (let j=0; j<upgrades_Objects[yy][i].length; j++){
            
            if (upgrades_Objects[yy][i][j]['available']===true){
                slotmenucontent.push(upgrades_Objects[yy][i][j]['name']+" ("+upgrades_Objects[yy][i][j]['points']+")");
                slotmenuobjects.push(upgrades_Objects[yy][i][j]);
            }else{
                
                testRestriction(yy,upgrades_Objects[yy][i][j]['restrictions']);
                
                if (restrict===true) {
                slotmenucontent.push(upgrades_Objects[yy][i][j]['name']+" ("+upgrades_Objects[yy][i][j]['points']+")"); 
                slotmenuobjects.push(upgrades_Objects[yy][i][j]);
            }
            }
            
        }
        
        upgrades_Objects_Val[yy][i] = slotmenuobjects;
        populateMenu('slot'+yy+'_'+i,slotmenucontent);
        
    }
    fillUpgradesSelected(yy)

    }

function checkPilotModifier(e) { //va checker s'il existe des fonctions dans modifier_func du pilote sélectionné et va les executer
	 let field = e.target.id; // "menu_pilot_y"
	let pilnbr = field.substring(11, 12);
	if (pilot_list[pilnbr]["modify"]===true){
		for (let m=0; m<pilot_list[pilnbr]["modifier_func"].length ;m++){
			pilot_list[pilnbr]["modifier_func"][m](); // va executer toutes les fonctions de modifier_func du pilote
		}	    
		}
}

function also_Occupies(targetSlot,id){ //A utiliser lorsqu'une upgrade utilise un slot de plus. On va en plus écouter le menu qui a été rempli pour inverser l'opération si l'upg est retirée.
    
    fillUpgradesSelected(y);
    let field = null;
    for (let i = 0; i < upgradesSelected[y].length; i++) {
        if (upgradesSelected[y][i] === '<' + targetSlot + '>') {
            field = document.getElementById('slot' + y + '_' + i);
            field.value = '<' + targetSlot + '>';
            field.setAttribute('disabled', '');
            break;
        }
    }
    let upgname = upgrades[id]['name'];
    let p = upgrades[id]['points'];
    let upgslot = null;
    for (let k = 0; k < upgradesSelected[y].length; k++) {
        if (upgradesSelected[y][k] === upgname + ' (' + p + ')') {
            upgslot = document.getElementById('slot' + y + '_' + k);
            break;
        }
    }
    if (!field) {
        alert('Not Available. <' + targetSlot + '> required.');
        if (upgslot) {
            upgslot.value = '<' + upgrades[id]['slot'] + '>';
        }
    return;
}

let listenfunction = function () {
    field.removeAttribute('disabled');
    fillUpgradesSelected(y);
    
    upgslot.removeEventListener('input', listenfunction);
};

if (upgslot) {
    upgslot.addEventListener('input', listenfunction);
} 
}



function may_remove_slots(slot){ //permet de retirer des slots
    //WARNING ! The order of the slots to remove is very important. You have to start removing the last slot, and keep on removing them starting from the last one. Or Else the function 'may_remove_slot' will fail. The reason is a bit tricky, but to make it simple, this function will remove (splice) elements in the array upgrades_Objets and upgrades_Type thinking the position is the last digit of the slotmenu.id. 
   
    let upgslot = document.getElementById('slot'+y+'_'+x);
            

    let fieldtoremove = document.getElementsByClassName('slotElement'+' '+slot+' '+y);
    let listenfunction = function(){
            
            idfield = fieldtoremove[fieldtoremove.length-1].id; //besoin de connaitre la position de champ pour pouvoir l'extraire de upgrades_Object et upgrades_Type. 
            positionfield = idfield.substring(6);
            upgrades_Objects[y].splice(positionfield, 1);
            upgrades_Type[y].splice(positionfield, 1);
            upgrades_Objects_Val[y].splice(positionfield, 1);
            fieldtoremove[fieldtoremove.length-1].parentNode.removeChild(fieldtoremove[fieldtoremove.length-1]);
            fillUpgradesSelected(y);
            console.log('remonving'+slot); 
            upgslot.removeEventListener('input', listenfunction);
        }
        if (upgslot) {
               
            upgslot.addEventListener('input', listenfunction)  ;
        }
        fillUpgradesSelected(y);  
}



function checkUpgradeValidation(e) { //va checker s'il existe une fonction modify liée à l'upgrade, et va lancer les modifs éventuelles type add_slots ou change_stat
   fillUpgradesSelected(y);
    let field = e.target.id; // "slotyy_i"
    let pilnbr = field.substring(4, 5);
    let upgnbr = field.substring(6, 7);
    let slotlist = upgrades_Objects[pilnbr][upgnbr];
    for (let k=0; k<slotlist.length;k++) {
        if (e.target.value.slice(0, -4)===slotlist[k]['name']) {
            if (slotlist[k]['modify']===true) {
                for (let m=0; m<slotlist[k]['modifier_func'].length ; m++){
                    slotlist[k]['modifier_func'][m](); //va executer chaque fonction qui se trouve dans modifier_func
               }
            }
        }
    }

}


function  add_slots (targetSlot){ //A utiliser si une upgrade rajoute des slots
    console.log('adding '+targetSlot);
    let nbrSlots = upgrades_Type[y].length;
    shipslot = document.getElementById('shipslots'+y);
    slotmenu = document.createElement('select');
    slotmenu.setAttribute('id', 'slot'+y+"_"+nbrSlots);
    slotmenu.setAttribute('class', 'slotElement'+' '+targetSlot+' '+y);
    shipslot.appendChild(slotmenu);
        //Il faut créer la liste des upgrades pour populate les nouveaux menus
    let upgObjList = [];
    
        for (let k=0 ; k<upgrades.length ; k++) {
            if ((targetSlot===upgrades[k]["slot"]) && ((upgrades[k]["faction"]==="")||(upgrades[k]["faction"].includes(factionno1))||(upgrades[k]["faction"].includes(factionno2))||(upgrades[k]["faction"].includes(factionno3)))) {
                upgObjList.push(upgrades[k]); //on va prendre tous les objets et les mettre dedans
                  }
        }
        
        upgrades_Objects[y].push(upgObjList);
        upgrades_Type[y].push(targetSlot);
        let slotmenucontent = ['<'+targetSlot+'>'];
        let slotmenuobjects = [];
//on reprend une partie du code checkUpgRestriction(). On n'appelle pas la fonction car le slotmenu est réinitialisé entièrement, ce qui fait perdre toutes les upgrades sélectionnées
for (let j=0; j<upgrades_Objects[y][nbrSlots].length; j++){
            
    if (upgrades_Objects[y][nbrSlots][j]['available']===true){
        slotmenucontent.push(upgrades_Objects[y][nbrSlots][j]['name'] + " ("+upgrades_Objects[y][nbrSlots][j]['points'] + ")");
        slotmenuobjects.push(upgrades_Objects[y][nbrSlots][j]);
    }else{
        
        testRestriction(y,upgrades_Objects[y][nbrSlots][j]['restrictions']);
        
        if (restrict===true) {
        slotmenucontent.push(upgrades_Objects[y][nbrSlots][j]['name'] + " ("+upgrades_Objects[y][nbrSlots][j]['points'] + ")"); 
        slotmenuobjects.push(upgrades_Objects[y][nbrSlots][j]);
    }
    }
    fillUpgradesSelected(y);
}
upgrades_Objects_Val[y].push(slotmenuobjects);
populateMenu('slot'+y+'_'+nbrSlots,slotmenucontent);

//fin de la recopie du code
        slotmenu.addEventListener("mouseover", function(event){
            displayDescriptionUpgrade(event);
        })

        slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            identifyElement(event);
            check_restricted_List(event);
            updateUpgradeCount(y);
            updateTotalCost();
            displayDescriptionUpgrade(event);
            checkUpgradeValidation(event);
            fillUpgradesSelected(y)
    })

}

function check_restricted_List(event){ //check si l'upgrade ou le pilote est déjà utilisé par un(e) autre du même nom
    let newname = '';
    let maxnbr = 8;
    if (z===0){ //si on séléctionne la valeur vide d'un menu (la ligne 0), il faut arrêter la vérif et mettre à jour les menus
        upgrade_restricted_List(y);
        return;
    }
    if (x === -1){ //si c'est un pilote
        newname = pilot_list[y]['name'];
        maxnbr = pilot_list[y]['max_per_squad']
    }else{ // si c'est une upgrade
        newname = upgrades_Objects_Val[y][x][z-1]['name'];
        maxnbr = upgrades_Objects_Val[y][x][z-1]['max_per_squad'];
    }
    if (maxnbr === 8){
        return; // si il n'y a pas de limitation on arrête
    }

    while (maxnbr>0) {
    for (let i=0 ; i<9 ; i++){
        for (let j = 0 ; j<restricted_List[i].length ; j++){
            if (restricted_List[i][j]===newname){
                maxnbr = maxnbr -1 ;
            }
        }
        }
        break;
    }
    
    if (maxnbr <= 0) { // cela arrive si on a excédé le nombre d'exemplaires de l'upgrade/pilote
        alert(newname +' is no more available in your squad');
        event.target.selectedIndex = 0;
        return; //va arrêter tout processus par exemple le check_upgrade_validation qui va lancer des modifs de menus
    }else{
        upgrade_restricted_List(y); //l'upgrade ou le pilote est accepté donc on peut mettre à jour cette restricted_List
    }
    
 }
    
 
function upgrade_restricted_List(yy){ //va mettre à jour la restricted_List. les pilotes sont mis dans une 9 ème table, sinon les upgrades sont mises dans les 7 premières tables
    
    let namepil = "menu_pilot"+yy;
    if (pilot_list[yy]['max_per_squad'] < 8){
        namepil = pilot_list[yy]['name'];
    }
    restricted_List[8][yy]= namepil;
    
    for (let i=0 ; i<upgradesSelected[yy].length ; i++){
        slotmenu = document.getElementById('slot'+yy+'_'+i);
        z = slotmenu.selectedIndex;
        let nameupg = 'slot'+yy+'_'+i;
        if ((z > 0) && (upgrades_Objects_Val[yy][i][z-1]['max_per_squad'] < 8)) { // si ce n'est pas une upgrade limitée, alors max per squad = 8 et il n'y a pas besoin de renseigner la restrited List
            nameupg = upgrades_Objects_Val[yy][i][z-1]['name'];
        }
        restricted_List[yy][i]= nameupg;
        }
    }
    

function auto_equip(Slot, indexMenu, indexUpgrade){
    // on va faire un check si l'upgrade est limitée. On ne peut pas se servir de la fonction check_restricted_List car le champ visé par l'event est celui du pilote et non de l'upgrade. On va donc recopier une partie de son code et l'adapter
    nameUpgrade = upgrades[indexUpgrade]['name']; 
    maxNbrUpgrade = upgrades[indexUpgrade]['max_per_squad'];
    while (maxNbrUpgrade>0) {
        for (let i=0 ; i<9 ; i++){
            for (let j = 0 ; j<restricted_List[i].length ; j++){
                if (restricted_List[i][j]===nameUpgrade){
                    maxNbrUpgrade = maxNbrUpgrade -1 ;
                }
            }
            }
           
            break;
        }
    if (maxNbrUpgrade <= 0) {
        alert(nameUpgrade +' is no more available in your squad');
        document.getElementById('menu_pilot_'+y).selectedIndex = 0; //on refuse la prise en compte du pilote
        return;
    }
    // fin du check
    let numero_slot = 0; 
    for(let i = 0;i<upgrades_Type[y].length;i++){
        if (upgrades_Type[y][i]===Slot){
            numero_slot=i;
        }
    }
    let slotToEquip = document.getElementById('slot'+y+'_'+numero_slot);
    options = slotToEquip.options;
    slotToEquip.selectedIndex = indexMenu;
    slotToEquip.setAttribute("disabled","");
    fillUpgradesSelected(y);
    upgrade_restricted_List(y);
    console.log(slotToEquip.value);
}

function weapon_Hardpoint(){
    add_slots("Cannon");
    add_slots("Torpedo");
    add_slots("Missile");
    let cannon_menu = null;
    let missile_menu = null;
    let torpedo_menu = null;
    for (let j = 0; j<upgradesSelected[y].length;j++){
        if(upgradesSelected[y][j]==='<Cannon>'){
            cannon_menu = document.getElementById("slot"+y+"_"+j);
            torpedo_menu = document.getElementById("slot"+y+"_"+(j+1));
            missile_menu = document.getElementById("slot"+y+"_"+(j+2));
        
            break;
        }
        }
     cannon_menu.addEventListener("input", function () {
        also_Occupies("Torpedo");
        also_Occupies("Missile");
        if (cannon_menu.value === "<Cannon>"){
            torpedo_menu.removeAttribute('disabled');
            missile_menu.removeAttribute('disabled');
        }
     })
     missile_menu.addEventListener("input", function() {
        also_Occupies("Cannon");
        also_Occupies("Torpedo");
        if (missile_menu.value === "<Missile>"){
            cannon_menu.removeAttribute('disabled');
            torpedo_menu.removeAttribute('disabled');
        }
     })
     torpedo_menu.addEventListener("input",function () {
        also_Occupies("Cannon");
        also_Occupies("Missile");
        if (torpedo_menu.value === "<Torpedo>"){
            cannon_menu.removeAttribute('disabled');
            missile_menu.removeAttribute('disabled');
        }
     })   
    }



function add_action (act){

}
function add_condition(con){

}
function change_stat(stat, value){
    let shipOrPilot = true; //si c'est une stat ship qui est modifiée, alors shipOrPilot == true. Si c'est une stat pilot qui est modifiée, alors shipOrPilot == false.
    switch (stat){
    case 'points' : 
    pilot_list[y]['points'] = pilot_list[y]['points'] + value;
    updateUpgradeCount(y);
    updateTotalCost();
    listFull[y].pilot_points = pilot_list[y]['points'];
    shipOrPilot = false;
    break;
    case 'loadout' :
    pilot_list[y]['loadout'] =  pilot_list[y]['loadout'] + value;
    updateUpgradeCount(y);
    updateTotalCost();
    listFull[y].pilot_loadout = pilot_list[y]['loadout'];
    shipOrPilot = false;
    break;
    case 'attack' :
    listFull[y].ship_attack = listFull[y].ship_attack + value;
    shipOrPilot = true;
    break;
    case 'attackt' : 
    listFull[y].ship_attackt = listFull[y].ship_attackt + value;
    shipOrPilot = true;
    break;
    case 'force' :
    listFull[y].pilot_force = listFull[y].pilot_force + value;
    shipOrPilot = false;
    break;
    case 'hull' :
    listFull[y].ship_hull = listFull[y].ship_hull + value;
    shipOrPilot = true;
    break;
    case 'shield' :
    listFull[y].ship_shield = listFull[y].ship_shield + value;
    shipOrPilot = true;
    break;
    default : 
    alert(stat + ' has to be added in change_stat function');
    }
    //il faut que tout revienne dans l'ordre lorsque l'upgrade est changée
    if (x>-1) { //si la carte qui modifie n'est pas un pilote, alors c'est une upgrade
        targetupg = document.getElementById('slot'+y+'_'+x);
        let listenfunction = function() {
            if (shipOrPilot === false){ //si c'est une stat pilot
            listFull[y]['pilot_'+stat] = pilots[pilot_list[y]['id']][stat];
            pilot_list[y][stat] = pilot_list[y][stat] - value;
            updateUpgradeCount(y);
            updateTotalCost();
            }else{ // si c'est une stat ship
            force: 0,listFull[y]['ship_'+stat] = ships[pilot_list[y]['shipId']][stat];
            }
        targetupg.removeEventListener('input', listenfunction);
        }
    if (targetupg) {
    targetupg.addEventListener('input', listenfunction)  ;
    }
    }
      
}

function lose_chassis(){

}
function add_chassis(chas){
    
    }
function droid() {

}
    
function upgradeListGet(yy) { //va chercher les options pour populate les menus de slots crées avec displaylots(), et remplit la var upgrades_Objects
  
  let index = 0; 
  upgrades_Objects[yy] = [];
  upgrades_Objects_Val[yy] = [];
  
try { //Si on ne met pas ça, le fait d'avoir une valeur non définie fait planter la fonction
    if  (typeof pilot_list[yy]["slots"][0] === 'undefined') { //la valeur 0 a été mise dans tous endroits où il n'y avait pas de slot (exemple: les pilotes génériques)
        console.log('no slots')
        }
        else{
        for (let i=0 ; i<pilot_list[yy]["slots"].length;i++) {
        let upgObjList = [];
        for (let k=0 ; k<upgrades.length ; k++) {
            if ((pilot_list[yy]["slots"][i]===upgrades[k]["slot"]) && ((upgrades[k]["faction"]==="")||(upgrades[k]["faction"].includes(factionno1))||(upgrades[k]["faction"].includes(factionno2))||(upgrades[k]["faction"].includes(factionno3)))) {
                     upgObjList.push(upgrades[k]); //on va prendre tous les objets et les mettre dedans
              }
            }
        upgrades_Objects[yy].push(upgObjList); //Ainsi, ce tableau aura cette structure : [['pilote1' [Objets talent][objets torpille][objets modifications]]['pilote2' [objets talent][objets modification]]....] 
        index++;
    }
    }
} catch (error) {
        console.log("no slots"+index)
    } 
      
  console.log('entre 2 boucles'+index)  
  for (let i=0 ; i<ships[pilot_list[yy]["shipId"]]["slots"].length;i++) {
    upgObjList = [];   
    
        for (let k=0 ; k<upgrades.length ; k++) {
        if ((ships[pilot_list[yy]["shipId"]]["slots"][i]===upgrades[k]["slot"]) && ((upgrades[k]["faction"]==="")||(upgrades[k]["faction"].includes(factionno1))||(upgrades[k]["faction"].includes(factionno2))||(upgrades[k]["faction"].includes(factionno3)))) {
                      
            upgObjList.push(upgrades[k]); //on va prendre tous les objets et les mettre dedans
    }   
}
upgrades_Objects[yy].push(upgObjList); //Ainsi, ce tableau aura cette structure : [[[Objets talent pil 1][objets torpille pil 1][objets modifications pil 1]][[objets talent pil 2][objets modification pil 2]]....] 
}
}

function add_ship() {//fonction qui permet d'ajouter un nouveau vaisseau. S'active via le bouton Addship
    shipquantity++;
    let numero = String(shipquantity);
    listFull.push(shipObject);
    const squad = document.getElementById("squad");
    let newpara = document.createElement('p');
    let newdiv = document.createElement('div');
    let newship = document.createElement('select');
    let newpilot = document.createElement('select');
    let newslots = document.createElement('div');
    let newcost = document.createElement('div');
    let newloadout = document.createElement('div');
    newpara.setAttribute('class','new '+shipquantity);
    newdiv.setAttribute('id','ship'+numero);
    newdiv.setAttribute('class','ship');
    newship.setAttribute('id','menu_ship_'+numero );
    newship.setAttribute('class','menu shipmenu' );
    newpilot.setAttribute('id','menu_pilot_'+numero);
    newpilot.setAttribute('class','menu shipmenu pilotmenu');
    newslots.setAttribute('id','shipslots'+numero);
    newslots.setAttribute('class','slot new');
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
    newship.addEventListener('input', function(event) {
       y = event.target.id.slice(10,11); 
       select_pilot_list(numero);
       fill_listFull_Ship(numero);
    }) ;
    newpilot.addEventListener("mouseover", function(event){
        y = event.target.id.slice(11,12); //y = numéro du pilote modifié
        displayDescriptionPilot(numero);
    })
    newpilot.addEventListener('input', function(event) {
        identifyElement(event);
        dataGetFromPilot(numero);
        displayslots(numero)  ;
        upgradeListGet(numero);
        checkUpgRestriction(numero);
        check_restricted_List(event);
        displayDescriptionPilot(numero);
	    checkPilotModifier(event);
        checkUpgRestriction(numero); //on le refait car il peut y avoir des upgrades disponibles suite à check pilot modfier (exemple : Emon gagne 2 slot de payload ce qui lui permet d'équiper les générateurs de sous munitions)
        fill_listFull_Pilot(numero);
    });  
   
    
}
function fill_listFull_Pilot(yy){ // fonction qui renseigne la partie pilote de l'objet shipObject dans listFull
    listFull[yy].pilot_name = pilot_list[yy]['name'];
    listFull[yy].pilot_id = pilot_list[yy]['id'];
    listFull[yy].pilot_max_per_squad = pilot_list[yy]['max_per_squad'];
    listFull[yy].pilot_skill = pilot_list[yy]['skill'];
    listFull[yy].pilot_points = pilot_list[yy]['points'];
    listFull[yy].pilot_force = pilot_list[yy]['force'];
    listFull[yy].pilot_ability = pilot_list[yy]['ability'];
    
}
function fill_listFull_Ship(yy){ //fonction qui renseigne la partie ship de l'objet shipObject dans listFull
    shipmenu = document.getElementById('menu_ship_'+yy);
    shipindex = shipmenu.selectedIndex;
    listFull[yy].ship_name = shipObject_available[shipindex-1]['name'];
    listFull[yy].ship_id = shipObject_available[shipindex-1]['id'];
    listFull[yy].ship_attack = shipObject_available[shipindex-1]['attack'];
    listFull[yy].ship_attackt = shipObject_available[shipindex-1]['attackt'];
    listFull[yy].ship_attackb = shipObject_available[shipindex-1]['attackb'];
    listFull[yy].ship_agility = shipObject_available[shipindex-1]['agility'];
    listFull[yy].ship_hull = shipObject_available[shipindex-1]['hull'];
    listFull[yy].ship_shields = shipObject_available[shipindex-1]['shields'];
    listFull[yy].ship_actions = shipObject_available[shipindex-1]['actions'];
    listFull[yy].ship_chassis = shipObject_available[shipindex-1]['chassis'];
}


function remove_ship() { //fonction qui permet de retirer le dernier vaisseau. S'active via le bouton Removeship
    
    // Get all elements with the specified class name
    const elements = document.getElementsByClassName("new"+shipquantity);
        
    // Convert HTMLCollection to array for easier manipulation
    const elementsArray = Array.from(elements);

    // Remove each element from its parent node
    elementsArray.forEach(element => {
        element.parentNode.removeChild(element);
    });
    
    overCostTab[shipquantity] = 0;
    upgrades_Type[shipquantity] = [];
    upgrades_Objects[shipquantity]= [];
    upgradesSelected[shipquantity] = [];
    upgrades_Objects_Val[shipquantity]= [];
    restricted_List[shipquantity] = [shipquantity];
    pilot_list[shipquantity] = {name:"",points:0};
    listFull.slice(0,-1);
    shipquantity--;
    updateTotalCost();
    
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



//On écoute les changements sur selection leader pour "populate" préparer réinitialiser les valeurs
leaderselect = document.getElementById("menu_leader");
leaderselect.addEventListener("input", function() {
    removeElementsByClass()
    select_ship_list();
    document.getElementById("descript_upg").innerHTML="";
   upgrades_Objects= [[],[],[],[],[],[],[],[]];
    overCostTab = [0,0,0,0,0,0,0,0]
    upgradesSelected = [[],[],[],[],[],[],[],[]]
    upgrades_Type = [[],[],[],[],[],[],[],[]]
}); 




//permet d'associer la fonction add_ship au bouton addship
const addMenuButton = document.getElementById("addshipbutton");
addMenuButton.addEventListener('click', add_ship);
//permet d'associer la fonction remove_ship au bouton remove ship
const removeMenuButton = document.getElementById('removeshipbutton');
removeMenuButton.addEventListener('click', remove_ship);






 
 
 
