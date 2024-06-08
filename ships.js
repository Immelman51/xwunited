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