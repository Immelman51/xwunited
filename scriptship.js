
let requestURLships = "https://raw.githubusercontent.com/Immelman51/xwunited/main/ships.json";
let requestURLchassis = "https://raw.githubusercontent.com/Immelman51/xwunited/main/chassis.json";
let requestURLpilots = "https://raw.githubusercontent.com/Immelman51/xwunited/main/pilots.json";
let requestURLupgrades = "https://raw.githubusercontent.com/Immelman51/xwunited/main/upgrades.json";

let ships, chassis, pilots, upgrades;

async function fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

(async () => {
    try {
        
        ships = await fetchData(requestURLships);
        chassis = await fetchData(requestURLchassis);
        pilots = await fetchData(requestURLpilots);
        upgrades = await fetchData(requestURLupgrades);
        
        console.log(ships);
        console.log(chassis);
        console.log(pilots);
        console.log(upgrades);

        // Vous pouvez maintenant utiliser les variables ships, chassis, pilots, et upgrades ici ou dans d'autres fonctions
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();

// Vous pouvez également accéder aux variables ships, chassis, pilots, et upgrades ici après que les données ont été chargées





let shipquantity = -1; //compteur qui ne sert pas à compter mais à numéroter les id des menus
 let ship_available = [];
 let ship_selected_list = ["","","","","","","",""]; // Dans ce tableau, on va stocker la valeur sélectée de chaque menu_ship
 let pilot_id_available =[];
 let factionno1 = "";
 let factionno2 = "";
 let factionno3 = "";
 let totalcostvalue = 0;
 let logisticvalue = 0; 
 let logisticEquipped = [0,0,0,0,0,0,0,0];
 let leader_ID = 0; 

 let pilot_selected_list = ["","","","","","","",""]; // Dans ce tableau, on va stocker la valeur sélectée de chaque menu_pilot
 let pilot_list = [{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0}]; //Dans ce tableau, on stocker les objets pilotes
 let pilot_objects = [[],[],[],[],[],[],[],[]]; //va contenir tous les objets pilotes disponibles pour chaque ligne
 let upgrades_Type = [[],[],[],[],[],[],[],[]]; //va contenir tous les slots pour chaque pilote
 let upgrades_Objects= [[],[],[],[],[],[],[],[]]; // va contenir la liste des contenus des menus slots mais sous forme d'objet
 let upgrades_Objects_Val= [[],[],[],[],[],[],[],[]]; // va contenir la liste des contenus des menus slots après validation mais sous forme d'objet
 let upgradesSelected = [[],[],[],[],[],[],[],[]]; //va contenir les nom des upgrades sélectionnées
 let upgradesSelected_ID = [[],[],[],[],[],[],[],[]]; //va contenir les id des upgrades sélectionnées (si rien n'est sélectionné, alors la valeur est -1)
 //let overCostTab = [0,0,0,0,0,0,0,0]; //Cette variable va stocker les augmentations des couts des pilotes dûs aux emports d'upgrade supérieurs au loadout de base
 let y= "0"; //valeur qui indique l'index du pilote podifié
 let z= "0"; //valeur qui indique l'index dans le menu de l'élément sélectionné
let x= "0"; //valeur qui indique l'index du menu d'amélioration sélectionné (sloty_x)
 let restrict = false;
let restricted_List = [[0],[1],[2],[3],[4],[5],[6],[7],[8]]; //va contenir les noms des upgrades (8 premiers sous tableaux) et pilotes uniques (9eme sous tableau)

let shipObject_available = []; //comme ship_available, mais contient les objets au lieu des noms
let hash = "";
let faction_hash = "";


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
        
}

function removeElementsByClass(classname) {//permet de supprimer tous les éléments qui possèdent la class "new". Utile lorsqu'on change de leader
            // Get all elements with the specified class name
            const elements = document.getElementsByClassName(classname);
        
            // Convert HTMLCollection to array for easier manipulation
            const elementsArray = Array.from(elements);
        
            // Remove each element from its parent node
            elementsArray.forEach(element => {
                element.parentNode.removeChild(element);
            });
            
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
    skillLvl = document.getElementById("initiative"+yy);
    //loadoutcount= document.getElementById("shiploadout"+yy);
    totalcount= document.getElementById("totalcost");
    totalcostvalue = 0; //remise à 0 sinon il s'incrémente à chaque saisie de pilote
    /*for (i=0; i<pilots.length; i++) {
        let endIndex = pilot_selected_list[yy].indexOf(" ("); // Find the index of " (" 
        let nomPilote = pilot_selected_list[yy].substring(0, endIndex); //On retire les parenthèses avec le cout pour pouvoir faire une comparaison stricte dans la ligne d'après
        if (nomPilote===pilots[i]["name"]) {
            pilot_list[yy] = pilots[i];*/
            pilot_list[yy] = pilot_objects[yy][z-1];
            skillLvl.textContent = "I "+pilot_list[yy]["skill"];
            //loadoutcount.textContent = pilot_list[yy]["loadout"];
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
    slotmenu.setAttribute('class', 'slotElement'+yy);//+' '+pilot_list[yy]["slots"][i]);
    shipslot.appendChild(slotmenu);
    slotmenu.addEventListener("input", function(event) {//cette fonction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            identifyElement(event);
            check_restricted_List(event);
            checkUpgradeModifier(event);
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
        slotmenu.setAttribute('class', 'slotElement'+y+' '+ships[pilot_list[yy]["shipId"]]["slots"][j] );
        shipslot.appendChild(slotmenu);
        slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            identifyElement(event); 
            check_restricted_List(event);    
            checkUpgradeModifier(event);
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
    upgradesSelected_ID[yy] = [];
    
    for (let i=0; i<upgrades_Type[y].length ; i++){
        slotM = document.getElementById("slot"+yy+"_"+i);
        upgradesSelected[yy].push(slotM.value);
        
        if (slotM.selectedIndex>0){
            upgradesSelected_ID[yy].push(upgrades_Objects_Val[yy][i][slotM.selectedIndex-1]['id']); // on met les id des upgrades si elles sont sélectionnées, sinon on va mettre -1
        }else{
            upgradesSelected_ID[yy].push(-1); // comme écrit au dessus, si aucune upgrade n'est sélectionnée (e.g : <Talent>, selectedIndex 0 du menu), alors on met -1
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

function updateTotalCost() { //update total cost AND logistic value
    totalcostvalue = 0 ;
    logisticvalue = leaders[leader_ID]["logistic"];
    for (j=0; j<8; j++){
        totalcostvalue = totalcostvalue + pilot_list[j]["points"];
        logisticvalue = logisticvalue - logisticEquipped[j]; 
    }
    totalcount= document.getElementById("totalcost");
    totalcount.textContent = totalcostvalue; 
    totallogistic = document.getElementById("logistic_value");
    totallogistic.textContent = logisticvalue;
}

function updateUpgradeCount(yy) { //update the table logistic_Equipped
    
    logisticEquipped[yy] = 0;
    
    for (j=0; j<upgradesSelected_ID[yy].length ; j++){
        
        if (upgradesSelected_ID[yy][j]>-1) {
            if ((upgrades[upgradesSelected_ID[yy][j]]["slot"]!=="Talent") && (upgrades[upgradesSelected_ID[yy][j]]["slot"]!=="Force")) { //cette condition permet de ne pas compter les couts des talents et force
                logisticEquipped[yy]= logisticEquipped[yy] + upgrades[upgradesSelected_ID[yy][j]]["points"];
                
            }
        
    }
    
}

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
        varlist = ships[pilot_list[yy]['shipId']]['base'];
        break;
    case 'keyword' :
        varlist =  ships[pilot_list[yy]['shipId']]['keyword']; 
        break;
    case 'action' :
        varlist = ships[pilot_list[yy]['shipId']]['actions'];
        break;
    case 'ship' :
        varlist = ships[pilot_list[yy]['shipId']]['name'];
        break;
    default :
        console.log('error testRestriction and varlist'); 
        break;
        
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
                switch (upgrades_Objects[yy][i][j]['slot']) {
                    case 'Talent' :
                    case 'Force' :
                        slotmenucontent.push(upgrades_Objects[yy][i][j]['name']+" "+upgrades_Objects[yy][i][j]['points']);
                        slotmenuobjects.push(upgrades_Objects[yy][i][j]);
                        break;
                    default :    
                        slotmenucontent.push(upgrades_Objects[yy][i][j]['name']+" ("+upgrades_Objects[yy][i][j]['points']+")");
                        slotmenuobjects.push(upgrades_Objects[yy][i][j]);
                break
                }
            }else{
                
                testRestriction(yy,upgrades_Objects[yy][i][j]['restrictions']);
                
                if (restrict===true) {
                    switch (upgrades_Objects[yy][i][j]['slot']) {
                        case 'Talent' :
                        case 'Force' :
                            slotmenucontent.push(upgrades_Objects[yy][i][j]['name']+" "+upgrades_Objects[yy][i][j]['points']);
                            slotmenuobjects.push(upgrades_Objects[yy][i][j]);
                            break;
                        default :    
                            slotmenucontent.push(upgrades_Objects[yy][i][j]['name']+" ("+upgrades_Objects[yy][i][j]['points']+")");
                            slotmenuobjects.push(upgrades_Objects[yy][i][j]);
                    break
                    }
            }
            }
            
        }
        
        upgrades_Objects_Val[yy][i] = slotmenuobjects;
        populateMenu('slot'+yy+'_'+i,slotmenucontent);
        
    }
    fillUpgradesSelected(yy)

}

function checkPilotModifier() { //va checker s'il existe des fonctions dans modifier_func du pilote sélectionné et va les executer
	 
    if (pilot_list[y]['modify'] === true){
        for (let m = 0; m<pilot_list[y]['modifier_func'].length ; m++){
            switch (pilot_list[y]['modifier_func'][m][0]) { //on va vérifier le numéro à l'index 0 de chaque table dans modifier_func. Ce numéro indique une fonction à exectuer
                case 0 :
                    break;
                case 1: 
                    auto_equip(pilot_list[y]['modifier_func'][m][1], pilot_list[y]['modifier_func'][m][2], pilot_list[y]['modifier_func'][m][3]);
                    break;
                case 2 :
                    add_slots(pilot_list[y]['modifier_func'][m][1]);
                    break;
                case 3 : 
                    also_Occupies(pilot_list[y]['modifier_func'][m][1]); //, pilot_list[y]['modifier_func'][m][2]);
                    break;
                case 10 :
                    may_remove_slots(pilot_list[y]['modifier_func'][m][1]);
                    break;   
                default :
                    alert("There's a bug that should be reported");
                    break;
                   
            }
        }
    }
}

function checkUpgradeModifier() { //va checker s'il existe une fonction modify liée à l'upgrade, et va lancer les modifs éventuelles type add_slots ou change_stat
   fillUpgradesSelected(y);
    /*let field = e.target.id; // "slotyy_i"
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
    }*/
   let upgradeID = upgradesSelected_ID[y][x];
   if (upgradeID>-1){
        if (upgrades[upgradeID]["modify"] === true){
            for(m = 0; m<upgrades[upgradeID]["modifier_func"].length; m++){
                switch (upgrades[upgradeID]['modifier_func'][m][0]) { //on va vérifier le numéro à l'index 0 de chaque table dans modifier_func. Ce numéro indique une fonction à exectuer
            case 0 :
                break;
            case 1: 
                auto_equip(upgrades[upgradeID]['modifier_func'][m][1], upgrades[upgradeID]['modifier_func'][m][2], upgrades[upgradeID]['modifier_func'][m][3]);
                break;
            case 2 :
                add_slots(upgrades[upgradeID]['modifier_func'][m][1]);
                break;
            case 3 : 
                also_Occupies(upgrades[upgradeID]['modifier_func'][m][1]);//, upgrades[upgradeID]['modifier_func'][m][2]);
                break;
            /*case 4 :
                free_upg(upgrades[upgradeID]['modifier_func'][m][1]);
                break;
           */
            /*case 6 : 
                weapon_Hardpoint();
                break;*/
            
        
         
            case 10 :
                may_remove_slots(upgrades[upgradeID]['modifier_func'][m][1]);
                break;
            default :
                alert("There's a bug that should be reported");
                break;
                }
            }
}

}
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
        if (x=== -1){ //il faut remettre à jour certaines listes
            pilot_selected_list[y] =  { name: "", points: 0 };
        }else{
            upgradesSelected[y][x] = event.target.value;
        }
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
    
function auto_equip(Slot, indexMenu, indexUpgrade){ //action n°1
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

function  add_slots (targetSlot){ //Action n°2 : A utiliser si une upgrade rajoute des slots
    console.log('adding '+targetSlot);
    let nbrSlots = upgrades_Type[y].length;
    shipslot = document.getElementById('shipslots'+y);
    slotmenu = document.createElement('select');
    slotmenu.setAttribute('id', 'slot'+y+"_"+nbrSlots);
    slotmenu.setAttribute('class', 'slotElement'+y+' '+targetSlot);
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
        switch (upgrades_Objects[y][i][j]['slot']) {
            case 'Talent' :
            case 'Force' :
                slotmenucontent.push(upgrades_Objects[y][i][j]['name']+" "+upgrades_Objects[y][i][j]['points']);
                slotmenuobjects.push(upgrades_Objects[yy][i][j]);
                break;
            default :    
                slotmenucontent.push(upgrades_Objects[y][i][j]['name']+" ("+upgrades_Objects[y][i][j]['points']+")");
                slotmenuobjects.push(upgrades_Objects[y][i][j]);
        break
        }
    }else{
        
        testRestriction(y,upgrades_Objects[y][nbrSlots][j]['restrictions']);
        
        if (restrict===true) {
            switch (upgrades_Objects[y][i][j]['slot']) {
                case 'Talent' :
                case 'Force' :
                    slotmenucontent.push(upgrades_Objects[y][i][j]['name']+" "+upgrades_Objects[y][i][j]['points']);
                    slotmenuobjects.push(upgrades_Objects[y][i][j]);
                    break;
                default :    
                    slotmenucontent.push(upgrades_Objects[y][i][j]['name']+" ("+upgrades_Objects[y][i][j]['points']+")");
                    slotmenuobjects.push(upgrades_Objects[y][i][j]);
            break
            }
    }
    }
    fillUpgradesSelected(y);
}
upgrades_Objects_Val[y].push(slotmenuobjects);
populateMenu('slot'+y+'_'+nbrSlots,slotmenucontent);

//fin de la recopie du code
//On va rajouter 1 index à upgradesSelected_ID[y]. On rajoute un '-1' qui correspond à un menu où on n'a pas sélectionné d'upgrade
upgradesSelected_ID[y].push(-1);

        slotmenu.addEventListener("mouseover", function(event){
            displayDescriptionUpgrade(event);
        })

        slotmenu.addEventListener("input", function(event) {//cette faction décrit le calcul des mises à jour des points pour le loadout et le cout du pilote
            identifyElement(event);
            check_restricted_List(event);
            fillUpgradesSelected(y)
            updateUpgradeCount(y);
            updateTotalCost();
            displayDescriptionUpgrade(event);
            checkUpgradeModifier(event);
            fillUpgradesSelected(y)
    })

}

function also_Occupies(targetSlot){ //Action n°3 : A utiliser lorsqu'une upgrade utilise un slot de plus. On va en plus écouter le menu qui a été rempli pour inverser l'opération si l'upg est retirée.
    
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
   
    let upgslot = document.getElementById('slot' + y + '_' + x);
          
        
        if (!field) {
        alert('Not Available. <' + targetSlot + '> required.');
        if (upgslot) {
            upgslot.selectedIndex = 0;
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

function may_remove_slots(slot){ //Action n°10 : permet de retirer des slots
        //WARNING ! The order of the slots to remove is very important. You have to start removing the last slot, and keep on removing them starting from the last one. Or Else the function 'may_remove_slot' will fail. The reason is a bit tricky, but to make it simple, this function will remove (splice) elements in the array upgrades_Objets and upgrades_Type thinking the position is the last digit of the slotmenu.id. 
       
        let upgslot = document.getElementById('slot'+y+'_'+x);
                
    
        let fieldtoremove = document.getElementsByClassName('slotElement'+y+' '+slot);
        
        
        let listenfunction = function(){
                
                idfield = fieldtoremove[fieldtoremove.length-1].id; //besoin de connaitre la position de champ pour pouvoir l'extraire de upgrades_Object et upgrades_Type. 
                positionfield = idfield.substring(6);
                upgrades_Objects[y].splice(positionfield, 1);
                upgrades_Type[y].splice(positionfield, 1);
                upgrades_Objects_Val[y].splice(positionfield, 1);
                fieldtoremove[fieldtoremove.length-1].parentNode.removeChild(fieldtoremove[fieldtoremove.length-1]);
                fillUpgradesSelected(y);
                console.log('removing'+slot); 
                upgslot.removeEventListener('input', listenfunction);
                upgradesSelected_ID[y].pop(); //On va retirer la dernière valeur de upgradesSelected_ID car il n'y a plus d'élément à cet endroit
                updateUpgradeCount(y);
                updateTotalCost();
            }
            if (upgslot) {
                   
                upgslot.addEventListener('input', listenfunction)  ;
            }
        fillUpgradesSelected(y); 
        updateUpgradeCount(y);
        
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
    const squad = document.getElementById("squad");
    let newpara = document.createElement('p');
    let newdiv = document.createElement('div');
    let newship = document.createElement('select');
    let newpilot = document.createElement('select');
    let newslots = document.createElement('div');
    let newinitiative = document.createElement('div');
    let newremovebutton = document.createElement('button');
    
    newpara.setAttribute('id','p'+shipquantity);
    newpara.setAttribute('class','new '+shipquantity);
    newdiv.setAttribute('id','ship'+numero);
    newdiv.setAttribute('class','ship');
    newship.setAttribute('id','menu_ship_'+numero );
    newship.setAttribute('class','menu shipmenu' );
    newpilot.setAttribute('id','menu_pilot_'+numero);
    newpilot.setAttribute('class','menu shipmenu pilotmenu');
    newslots.setAttribute('id','shipslots'+numero);
    newslots.setAttribute('class','slot '+numero);
    newinitiative.setAttribute('id','initiative'+numero);
    newinitiative.setAttribute('class','initiative');
    newremovebutton.setAttribute('id','removeB'+numero);
    newremovebutton.setAttribute('class','bouton removeB'+numero);
    

    squad.appendChild(newpara);
    newpara.appendChild(newdiv);
    newdiv.appendChild(newship);
    newdiv.appendChild(newpilot);
    newpara.appendChild(newslots);
    newdiv.appendChild(newinitiative);
    newdiv.appendChild(newremovebutton);
   
    
    populateMenu("menu_ship_"+numero, ship_available);
    //ajout de l'écoute d'un input sur le nouveau menu newship
    newship.addEventListener('input', function(event) {
       //y = event.target.id.slice(10,11);  
       identifyElement(event);
       pilot_objects[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
       select_pilot_list(numero);
       displayDescriptionShip(event);
       removeElementsByClass("slotElement"+numero);
      restricted_List[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      restricted_List[8][numero] = ""; //Il faut aussi retirer le nom du pilote
      upgradesSelected[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      upgrades_Objects[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      upgrades_Objects_Val[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      upgrades_Type[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      pilot_list[numero]= {name:"",points:0}; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      
      
    }) ;
    newship.addEventListener('mouseover', function(event){
        displayDescriptionShip(event);

    })
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
        updateTotalCost();
    });  
    newremovebutton.textContent = 'Delete';
   newremovebutton.addEventListener('click', function(event){ //we code the remove button located on the same line as the pilot and ship
    let buttonID = event.target.id;
    xB = buttonID.slice(-1);
    yB = Number(xB);
    sQ = shipquantity;
    remove_ship(xB);
    
    while (yB < sQ){
    pilot_objects[yB]=pilot_objects[yB+1];
    pilot_selected_list[yB]=pilot_selected_list[yB+1];
    upgrades_Type[yB] = upgrades_Type[yB+1];
    upgrades_Objects[yB]= upgrades_Objects[yB+1];
    upgradesSelected[yB] = upgradesSelected[yB+1];
    upgrades_Objects_Val[yB]= upgrades_Objects_Val[yB+1];
    restricted_List[yB] = restricted_List[yB+1]; 
    restricted_List[8][yB] = restricted_List[8][yB+1];  
    pilot_list[yB] = pilot_list[yB+1];

    div_pxB1 = document.getElementById("p"+(yB+1));
    div_pxB1.setAttribute('class', 'new '+yB);
    div_pxB1.setAttribute('id', 'p'+yB);
    div_shipxB1 = document.getElementById("ship"+(yB+1));
    div_shipxB1.setAttribute('id','ship'+yB);
    div_shipslotsxB1 = document.getElementById('shipslots'+(yB+1));
    div_shipslotsxB1.setAttribute('id', 'shipslots'+yB);
    
    menu_shipxB1 = document.getElementById('menu_ship_'+(yB+1));
    menu_shipxB1.setAttribute('id','menu_ship_'+yB);
    
   
    menu_pilotxB1 = document.getElementById('menu_pilot_'+(yB+1));
    menu_pilotxB1.setAttribute('id','menu_pilot_'+yB);
   
    initiativexB1 =document.getElementById('initiative'+(yB+1));
    initiativexB1.setAttribute('id','initiative'+yB);    

    for(h=0 ; h<upgrades_Objects[yB].length ; h++){
        slotxB1 = document.getElementById('slot'+(yB+1)+'_'+h);
        slotxB1.setAttribute('id','slot'+yB+'_'+h);
        slotxB1.setAttribute('class','slotElement'+yB);
    }
        yB++;
    }
    

   })
    
}

function remove_ship(n) { //fonction qui permet de retirer le dernier vaisseau. S'active via le bouton Removeship
    
    /*// Get all elements with the specified class name
    const elements = document.getElementsByClassName("new "+shipquantity);
        
    // Convert HTMLCollection to array for easier manipulation
    const elementsArray = Array.from(elements);

    // Remove each element from its parent node
    elementsArray.forEach(element => {
        element.parentNode.removeChild(element);
    });*/
    removeElementsByClass("new "+n); //retire la balise <p> qui contient tous les éléments
    
    pilot_objects[n]=[];
    pilot_selected_list[n]="";
    upgrades_Type[n] = [];
    upgrades_Objects[n]= [];
    upgradesSelected[n] = [];
    upgrades_Objects_Val[n]= [];
    restricted_List[n] = [n]; //retrait des upgrades du dernier vaisseau
    restricted_List[8][n] = "";  //retrait du nom du pilote du dernier vaisseau
    pilot_list[n] = {name:"",points:0};
   
    if (shipquantity>0){
        shipquantity--;
    }
        
    updateTotalCost();
    
}       

function displayDescriptionPilot(i) { //permet d'afficher la capacité du pilote en bas de page
    description_upg_pil_Field=document.getElementById("descript_upg");
    description_upg_pil_Field.innerHTML="";
    description_upg_pil_Field.innerHTML = pilot_list[i]["ability"];

}

function displayDescriptionShip(event){ //displays ship'stats and chassis abilities (and maneuvers ?)
    description_upg_pil_Field=document.getElementById("descript_upg");
    description_upg_pil_Field.innerHTML="";
    
    for (k=0; k<ships.length; k++){
        if (event.target.value === ships[k]["name"]) { //il faut pas oublier de virer les (x) dans les menus
            description_upg_pil_Field.innerHTML = '<span style="color: red">' +ships[k]["attack"][0][1] + '</span> <img src="img/attack'+ships[k]["attack"][0][0] +'.jpg" class="logo"/>';
            if (ships[k]['attack'].length>1){
                description_upg_pil_Field.innerHTML =  description_upg_pil_Field.innerHTML+'<span style="color: red">' +ships[k]["attack"][1][1] + '</span> <img src="img/attack'+ships[k]["attack"][1][0] +'.jpg" class="logo"/>';     
            }
            description_upg_pil_Field.innerHTML =  description_upg_pil_Field.innerHTML+'<span style="color: green">' +ships[k]["agility"] + '<span class="logo"/>';
            description_upg_pil_Field.innerHTML =  description_upg_pil_Field.innerHTML+'<span style="color: yellow">' +ships[k]["hull"] + '<span class="logo"/>';
            description_upg_pil_Field.innerHTML =  description_upg_pil_Field.innerHTML+'<span style="color: skyblue">' +ships[k]["shields"] + '<span class="logo"/><br>';
            
            let chassisEq = ships[k]['chassis'];
            for(ch=0;ch<chassisEq.length;ch++){
                description_upg_pil_Field.innerHTML +=  chassis[chassisEq[ch]]['effect1']+'<br>';
                description_upg_pil_Field.innerHTML +=  chassis[chassisEq[ch]]['effect2']+'<br>';
                description_upg_pil_Field.innerHTML +=  chassis[chassisEq[ch]]['effect3']+'<br>';
            }
            


   
            return;
        
    }
}
}

function displayDescriptionUpgrade(event){ //permet d'afficher l'effet de l'amélioration sélectionée
    description_upg_pil_Field=document.getElementById("descript_upg");
    description_upg_pil_Field.innerHTML="";
    
    for (k=0; k<upgrades.length; k++){
        if (event.target.value.slice(0, -4) === upgrades[k]["name"]) { //il faut pas oublier de virer les (x) dans les menus
            description_upg_pil_Field.innerHTML = upgrades[k]["effect"];
                  
            return
        }
}
}



//On écoute les changements sur selection leader pour "populate" préparer réinitialiser les valeurs
leaderselect = document.getElementById("menu_leader");
leaderselect.addEventListener("input", function() {
    removeElementsByClass("new")
    select_ship_list();
    leader_ID = leaderselect.selectedIndex ; 
    
    document.getElementById("descript_upg").innerHTML="";
    shipquantity = -1;

    y= 0;
    x=0;
    z=0;
    pilot_selected_list=[];
    upgrades_Type = [[],[],[],[],[],[],[],[]];
    upgrades_Objects= [[],[],[],[],[],[],[],[]];
    upgradesSelected = [[],[],[],[],[],[],[],[]];
    upgrades_Objects_Val= [[],[],[],[],[],[],[],[]];
    pilot_objects = [[],[],[],[],[],[],[],[]];
    restricted_List = [[0],[1],[2],[3],[4],[5],[6],[7],[8]];
    pilot_list = [{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0}];
    updateTotalCost();
}); 

    

//permet d'associer la fonction add_ship au bouton addship
const addMenuButton = document.getElementById("addshipbutton");
addMenuButton.addEventListener('click', add_ship);

//permet d'associer la fonction faction_cards au bouton faction
const factionCards = document.getElementById('faction');
factionCards.addEventListener('click', function() {
    let selected_faction = document.getElementById("menu_faction").value;
    const pageURL = "https://github.com/Immelman51/xwunited/faction_cards.html";
    // Construct the full URL with the hash
    let fullUrl = `faction_cards.html#${selected_faction}`;
    //let fullUrl = `${pageURL}#${selected_faction}`;
    // Navigate to the URL
    window.location.href = fullUrl;
});


function hasher(){ //on inscrit dans hash le nombre de vaisseaux (shipquantity+1) on va transformer tous les ids du ship pilote et upgrades séparés par la lettre "z", chaque info différente (pilot, upgrades, modifiers) est séparée par des x, puis chaque vaisseaux différents séparés par ",".
    hash = String(leaderID) + ',';
    
    
    for(i = 0; i<shipquantity+1; i++) {
        
        let string_pilot_ID = String(pilot_list[i]['id']);
        hash = hash + string_pilot_ID +"u"; // 
        
        for (let j = 0; j < upgradesSelected_ID[i].length; j++){
            if (upgradesSelected_ID[i][j]>-1){
                hash = hash + upgradesSelected_ID[i][j] + "u"; // les u correspondent à un changement d'upgrade
            } }
    
    hash = hash.slice(0,-1); //on retire le u final
    hash = hash + "," ; // la virgule correspond à un changement de vaisseau
    }
    

hash = hash.slice(0,-1); //on retire la virgule finale
}

//Voici le lien de printsquad avec le hash à sa suite (qui permettra de savoir quoi imprimer)
const linkToPrintSquad = document.getElementById('printsquad');
linkToPrintSquad.addEventListener('click', function(e){
    e.preventDefault();
    hasher();
window.location.href =  `print_squad.html?#${hash}`
})