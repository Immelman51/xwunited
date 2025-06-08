# xwunited
 Custom xw
TEST 20/12/24
ABOUT JSON DATABASES :

##########################################################################################################################################################################
ships : 

"actions" : [0,"Fo W"], 
 0 means simple action, Fo means Focus, and "W" is white.

 [1,"Fo W","Br R"],
  1 means linked action, Focus White into Barrell Roll Red.

 [0,"Ev F"],
 0 means simple action, Ev means Evade, and "F" stands for Force (Purple action)

  Fo = Focus, 
  Lo = Target Lock,
  Ev = Evade,
  Br = Barell Roll, 
  Bo = Boost, 
  Ja = Jam, 
  Rd = Reload, 
  Re = Reinforce, 
  Ra = Rotate Arc, 
  Sl = Slam, 
  Co = Coordinate, 
  Ck = Cloak
  Cc = Calculate


  "maneuvers": [
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], => Speed 0
                [ 2, 1, 1, 1, 2, 2, 0, 0, 0, 0, 2, 2, 2 ], => Speed 1
                [ 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] => Speed 2
  ]             
  Column Description : [L-Turn, L-Bank, Straight, R-Bank, R-Turn, K-Turn, S-Loop L, S-Loop R, T-Roll L, T-Roll R, L-Reverse, Straight Reverse, R-Reverse]

########################################################################################################################################################################
  Pilots :
  //ne pas mettre de parenthèses ( ou ) dans les noms de pilotes car elles sont utilisées pour les cout dans les menus pilote

  About modifier_func :
  // little functions in the pilots JSON. 
  To be triggered when the pilot is selected, its 'modify' key has to be 'true'. 
  In the 'modifier_func' key, functions has to be coded this way :
  "modifier_func": [
    ["function identification number (see below)","function parameter(s)"],
    ["function identification number (see below)","function parameter(s)"]
  ]
  

 function identification number :
  0 : () => multiple functions that triggers when you print your squad : "droid" "add_action" "add_condition" "changeChassis"
  1 : () => auto_equip("Title Name", "Title ID"),
  2 : () => add_slots("Slot Type"),
  3 : () => also_Occupies("Slot type to be occupied")
  4 : () => change_chassis("chassis ID 1","chassis ID 2"), // this replaces the chassis key in the ships JSON in the same order. Write a parameter 0 if there's no change, or if there's no second chassis.
  10 : () => may_remove_slots("Slot Type") //Has to be there if there's a 'add-slot' function in case the upgrade is unequipped. WARNING ! The order of the "slot"s to remove is very important. You have to start removing the last "slot", and keep on removing them starting from the last one. Or Else the function 'may_remove_"slot"' will fail. The reason is a bit tricky, but to make it simple, this function will remove (splice) elements in the array upgrades_Objets and upgrades_Type thinking the position is the last digit of the "slot"menu."id". 

  Example : {
            "name": "Gooti Terez",
            "id": 155,
            "max_per_squad": 1,
            "faction": "Phoenix_Cell",
            "ship": "YT-2400 Light Freighter",
            "charge":[0],
            "force": 0,
            "shipId": 16,
            "skill": 1,
            "points": 8,
            "modify": true,
		        "title": ["Sato's Hammer"],
            "titleID": 200,           
            "ability": "Après avoir défendu contre une attaque portée 1, l'attaquant reçoit 1 jeton de contrainte.",
            "ability_ENG": "After you defend against a Range 1 attack, the attacker gains 1 strain token.",
            "slots": [
                "Title" ,
                "Talent",
                "Illicit"                               
            ],
            "modifier_func": [
            	[1,"Title",200],
               [3,"Modification"]
             ]
        },

#########################################################################################################################################################################
Upgrades :
If 'available' is false, there's a 'restrictions' key (array) to fill : 
"restrictions":[n,"where to look","target required 1","target required 2]
n:number of target needed to be available
where to look : - 'title'
                - 'upgrade'
                - 'action'
                - 'ship'
target required : just write the name of the restricted upgrade

Exemples:
- Purge Troopers is a crew upgrade but need to occupy also a Gunner Slot.
We select modify=true and the "modifier_func" at the end to auto equip this upgrade in the gunner slot as well.
{
            "name": "Purge Troopers",
             "name_ENG": "Purge Troopers",
             "id":361,
             "max_per_squad":1,
             "available":false,
             "modify":true,
             "slot":"Crew",
             "add_Data": [0],
             "force":0,
             "charge": [0],
             "points": 0,
             "effect": "??",
             "effect_ENG": "??",
             "faction": ["Imperial_Remnants"],
             "restrictions":[1,"upgrade","Gunner",""],
             "modifier_func":[
                [3,"Gunner",361]
             ]
                                     
             
         } 
- Bomblet Generator is a Payload  upgrade that occupies a second payload Slot. That's why n=2. Same as above, we select 'modify' = true, and auto equip this upgrade in the second Payload slot.
{
            "name": "Générateur de Sous-Munitions",
            "name_ENG": "Bomblet Generator",
            "id": 40,
            "max_per_squad": 8,
            "available":false,
            "modify":true,
            "slot": "Payload",
            "points": 2,
            "add_Data": [0],
            "force": 0,
            "charge": [2,"0"],
            "effect": "Pendant la phase de système, vous pouvez dépenser 1 #ch# pour larguer une sous-munition avec le gabarit 1#straight#. Au début de la phase d’activation, vous pouvez dépenser 1 bouclier pour récupérer 2 #ch#.",
            "effect_ENG": "",
            "restrictions": [2,"upgrade", "Payload",""],
            "faction": "",
            "modifier_func": [
                [3,"Payload",40]
            ]
                                     
             
         }, 
- Tactical Scrambler is a Modification Slot that can only be equipped on Medium or Large ships.
{
            "name": "Brouilleur Tactique",
            "name_ENG": "Tactical Scrambler",
            "id": 65,
            "max_per_squad": 8,
            "available": false,
            "modify": false,
            "slot": "Modification",
            "add_Data": [0],
            "charge": [0],
            "points": 2,
            "effect": "Tant que vous gênez l’attaque d’un vaisseau ennemi, le défenseur lance 1 dé de défense supplémentaire.",
            "restrictions": [1,"base", "Medium", "Large"],
            "faction": ""
        },




#########################################################################################################################################################################""

GENERAL DESCRIPTION OF SCRIPTSHIP.JS

# First, it loads all the json files needed for the different datas (ships, leaders, pilots, upgrades, chassis)

# We listen to the leader selection menu (id "menu_leader") (over line 865)
When a leader is selected, it removes all previous selected pilots, clean every tables and variables, and you start back from a clean sheet using the function [removeElementsByClass("new")] : all the pilots and upgrades slots added to the squad are created with the html class "new".
It runs also the function [factionnameget()] to display the factions names and logos.
Then it runs the function [select_ship_list()] which is going to populate the ship menus with the ships your leader allows.
The tables [ship_available] and [shipObject_available] are filled.
We record the ID of the selected leader in [leader_ID].


# You click on add ship. I creates a ship menu and a pilot menu. 
The ship menu is already populated, the pilot menu is not. Both menus are listened to thanks to the [add_ship()] function, triggered when you click on the add ship button.
When you select a ship, it populates the pilot menu thanks to [select_pilot_list(y)].
The tables [pilot_available] and [pilot_objects] are filled : [ [ pilots1 ],[ pilots2 ],[ pilots3 ]...]

# You select a pilot.
Because it is listened to, descriptions are displayed when you "mouse over" the menu thanks to [displayDescriptionPilot(y)].
Other functions are triggered when you select a pilot:
- [dataGetFromPilot(event)] : updates the costcount value // # updates the logistic total // fills the table [pilot_selected_list] which contains the pilots'names // updates the table [pilot_list] which contains the pilots'objects //

- [displayslots(y)] : creates the slot menus beginning by the slots from the pilot, then the slots from the ship // updates the table [upgrades_Type] which contains the names of the differents slots available for each pilots & ships // listen to those menus (Cf below)

- [upgradeListGet(y)] : fills the table [upgrade_Objects] which contains all upgrade objects available for all slots for the ship y

- [checkUpgRestriction(y)] : populates the slot menus by displaying them with their names and their values // checks if the value 'available' of each upgrades is true or false. If it's false, we are going to check if the upgrade is valid or not for this pilot/ship thanks to [testRestriction()] function // updates the table [upgrades_Objects_Val] which is upgrades_Objects without the invalid upgrades // Runs [fillUpgradesSelected()] which fills the tables [upgradesSelected] and [upgradesSelected_ID]

- [check_restricted_List(event)] : checks if the pilots selected or the upgrades selected are restricted or not (max_per_squad in pilots and upgrades objects), and if not, it fills the table[restricted_List] via the [upgrade_restriced_List(y)] function

- [checkPilotModifier(event)] : checks if the value 'modify' in the selected pilot object is true or false. If it's true, then selecting this pilot should trigger some functions such as : auto_equip, add_slots, also_Occupies ...

- [checkUpgRestriction(y)] : If we have equipped some upgrade with auto_equip, then we check again if it's valid (example : you select Han Solo in the Millenium Falcon, and then you select Chewbacca which also flies the Millenium Falcon)

- [updateTotalCost(y)] : sum of all pilots' cost from pilot_list[ cost ]. (updates also the logistic part, see below)

# You select an upgrade
Because those menus are listened thanks to displayslots(y) function, when you select an upgrade, some functions are triggered :
- [check_restricted_List(event)] : look above

- [checkUpgradeModifier(event)] : it is the equivalent of checkPilotModifier(event) but for the upgrades ; if the value of modify is true, it will trigger some other functions.

- [updateUpgradeCount(y)] : update the table [logisticEquipped] which contains the sum of all equipped upgrades minus the eventual logistic bonus of the pilot (default 0) 

- [updateTotalCost(y)] : updates the logistic total : logistic total (leader's logistic) minus all logisticEquipped (see above)

- [displayDescriptionUpgrade(event)] : same goal as displayDescriptionPilot but for upgrades. It is also listened when "moused over".

- [fillUpgradesSelected(y)] : explained above



# Thanks to the identifyElement(event) function, we know everytime you click on a menu what menu it is. It records 3 coordinates :

- x = -1 if a pilot menu has been selected or x=-2 if a ship has been selected. Else, it is an upgrade menu, and x is equal to the number of the upgrade menu in the html page between 0 and 11. (cf example below)
- y indicates which ship number is modified (pilot or its upgrades) between 0 and 7.
- z is the index of the menu element you selected. (if the menu displays Element 0, Element 1, Element 2, in this order, z is equal to 0 1 or 2).

Exemple in the html page : 
- I select Hondo ohnaka as a leader
- I select Z95 as a ship, and N'dru Suhlak as a pilot (id menu_ship_0 and id menu_pilot_0) (menu_ship_y and menu_pilot_y)
- Some upgrade menus are displayed (Talent id slot0_0  Missile id slot0_1   Illicit id slot0_2) (sloty_x)

#  


