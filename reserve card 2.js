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