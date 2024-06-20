# xwunited
 Custom xw

ABOUT JSON DATABASES :
ships : 

"actions" : [0,"Fo", "W"], 
 0 means simple action, Fo means Focus, and "W" is white.

 [1,"Fo", "W", "Br", "R"],
  1 means linked action, Focus White into Barrell Roll Red.

 [0,"Ev", "F"],
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


  Pilots :
  //ne pas mettre de parenthèses ( ou ) dans les noms de pilotes car elles sont utilisées pour les cout dans les menus pilote

  About modifier_func :
  () => auto_equip("Title",1), //le chiffre correspond à l'index de l'upgrade dans le menu

  keys to function :
  0 : () => droid()
  1 : () => auto_equip("Title",1,147),
  2 : () => add_slots("Illicit"),
  3 : () => also_Occupies("Modification",146)
  4 : () => free_upg("Modification")
  5 : () => change_chassis("Rigged Energy Cells")
  6 : () => weapon_Hardpoint()
  7 : () => change_stat("attackt",3),