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

 let pilot_selected_list = ["","","","","","","",""]; // Dans ce tableau, on va stocker la valeur sélectée de chaque menu_pilot
 let pilot_list = [{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0},{name:"",points:0}]; //Dans ce tableau, on stocker les objets pilotes
 let pilot_objects = [[],[],[],[],[],[],[],[]]; //va contenir tous les objets pilotes disponibles pour chaque ligne
 let upgrades_Type = [[],[],[],[],[],[],[],[]]; //va contenir tous les slots pour chaque pilote
 let upgrades_Objects= [[],[],[],[],[],[],[],[]]; // va contenir la liste des contenus des menus slots mais sous forme d'objet
 let upgrades_Objects_Val= [[],[],[],[],[],[],[],[]]; // va contenir la liste des contenus des menus slots après validation mais sous forme d'objet
 let upgradesSelected = [[],[],[],[],[],[],[],[]]; //va contenir les nom des upgrades sélectionnées
 let upgradesSelected_ID = [[],[],[],[],[],[],[],[]]; //va contenir les id des upgrades sélectionnées (si rien n'est sélectionné, alors la valeur est -1)
 let overCostTab = [0,0,0,0,0,0,0,0]; //Cette variable va stocker les augmentations des couts des pilotes dûs aux emports d'upgrade supérieurs au loadout de base
 let y= "0"; //valeur qui indique l'index du pilote podifié
 let z= "0"; //valeur qui indique l'index dans le menu de l'élément sélectionné
let x= "0"; //valeur qui indique l'index du menu d'amélioration sélectionné (sloty_x)
 let restrict = false;
let restricted_List = [[0],[1],[2],[3],[4],[5],[6],[7],[8]]; //va contenir les noms des upgrades (8 premiers sous tableaux) et pilotes uniques (9eme sous tableau)

let shipObject_available = []; //comme ship_available, mais contient les objets au lieu des noms
let listFull = []; //va contenir toutes les informations de chaque vaisseau sous forme d'objet (shipObject) dans le but de faire des preview de liste ou de les présenter sous une autre forme
const shipObject = {
    ship_id:"",
    pilot_id:"",
    modifiers:"", //At1 = front attack+1 ; Ag1 = Agility +1 ; Pt2 = points + 2 .... Tout sera séparé par le caractère "e"
}
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
        
};
function removeElementsByClass(classname) {//permet de supprimer tous les éléments qui possèdent la class "new". Utile lorsqu'on change de leader
            // Get all elements with the specified class name
            const elements = document.getElementsByClassName(classname);
        
            // Convert HTMLCollection to array for easier manipulation
            const elementsArray = Array.from(elements);
        
            // Remove each element from its parent node
            elementsArray.forEach(element => {
                element.parentNode.removeChild(element);
            });
            /*shipquantity = -1;
            
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
            listFull = [];*/
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
    slotmenu.setAttribute('class', 'slotElement'+y+' '+pilot_list[yy]["slots"][i]);
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
        slotmenu.setAttribute('class', 'slotElement'+y+' '+ships[pilot_list[yy]["shipId"]]["slots"][j] );
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
    upgradesSelected_ID[yy] = [];
    listFull[yy].upgrade_list = [];
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

function checkPilotModifier() { //va checker s'il existe des fonctions dans modifier_func du pilote sélectionné et va les executer
	 /*let field = e.target.id; // "menu_pilot_y"
	let pilnbr = field.substring(11, 12);
	if (pilot_list[pilnbr]["modify"]===true){
		for (let m=0; m<pilot_list[pilnbr]["modifier_func"].length ;m++){
			pilot_list[pilnbr]["modifier_func"][m](); // va executer toutes les fonctions de modifier_func du pilote
		}	    
		}*/
    if (pilot_list[y]['modify'] === true){
        for (let m = 0; m<pilot_list[y]['modifier_func'].length ; m++){
            switch (pilot_list[y]['modifier_func'][m][0]) { //on va vérifier le numéro à l'index 0 de chaque table dans modifier_func. Ce numéro indique une fonction à exectuer
                case 0:
                    droid();
                    break;
                case 1: 
                    auto_equip(pilot_list[y]['modifier_func'][m][1], pilot_list[y]['modifier_func'][m][2], pilot_list[y]['modifier_func'][m][3]);
                    break;
                case 2 :
                    add_slots(pilot_list[y]['modifier_func'][m][1]);
                    break;
                case 3 : 
                    also_Occupies(pilot_list[y]['modifier_func'][m][1], pilot_list[y]['modifier_func'][m][2]);
                    break;
                case 4 :
                    free_upg(pilot_list[y]['modifier_func'][m][1]);
                    break;
                case 5 : 
                    change_chassis(pilot_list[y]['modifier_func'][m][1]);
                    break;
                case 6 : 
                    weapon_Hardpoint();
                    break;
                case 7 : 
                    change_stat(pilot_list[y]['modifier_func'][m][1], pilot_list[y]['modifier_func'][m][2]);
                    break ; 
                case 8 : 
                    let actionArray = pilot_list[y]['modifier_func'][m][1]
                    add_action()
                    break;
                case 9 : 
                    add_condition(pilot_list[y]['modifier_func'][m][1]);
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



function checkUpgradeValidation() { //va checker s'il existe une fonction modify liée à l'upgrade, et va lancer les modifs éventuelles type add_slots ou change_stat
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
            case 0:
                droid();
                break;
            case 1: 
                auto_equip(upgrades[upgradeID]['modifier_func'][m][1], upgrades[upgradeID]['modifier_func'][m][2], upgrades[upgradeID]['modifier_func'][m][3]);
                break;
            case 2 :
                add_slots(upgrades[upgradeID]['modifier_func'][m][1]);
                break;
            case 3 : 
                also_Occupies(upgrades[upgradeID]['modifier_func'][m][1], upgrades[upgradeID]['modifier_func'][m][2]);
                break;
            case 4 :
                free_upg(upgrades[upgradeID]['modifier_func'][m][1]);
                break;
            case 5 : 
                change_chassis(upgrades[upgradeID]['modifier_func'][m][1]);
                break;
            case 6 : 
                weapon_Hardpoint();
                break;
            case 7 : 
                change_stat(upgrades[upgradeID]['modifier_func'][m][1], upgrades[upgradeID]['modifier_func'][m][2]);
                break ; 
            case 8 : 
                let actionArray = upgrades[upgradeID]['modifier_func'][m][1]
                add_action()
                break;
            case 9 : 
                add_condition(upgrades[upgradeID]['modifier_func'][m][1]);
                break;
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
    


function droid() { //Action n°0

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

function free_upg(slot){ //Action n°4

}

function change_chassis(addOrRem,chassisID){ //Action n°5
  
}

function weapon_Hardpoint(){ //Action n°6
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
        
        if (cannon_menu.selectedIndex === 0){
            torpedo_menu.removeAttribute('disabled');
            missile_menu.removeAttribute('disabled');
        }else{
            also_Occupies("Torpedo");
            also_Occupies("Missile");
        }
     })
     missile_menu.addEventListener("input", function() {
        
        if (missile_menu.selectedIndex === 0){
            cannon_menu.removeAttribute('disabled');
            torpedo_menu.removeAttribute('disabled');
        }else{
            also_Occupies("Cannon");
            also_Occupies("Torpedo");
        }
     })
     torpedo_menu.addEventListener("input",function () {
        
        if (torpedo_menu.selectedIndex === 0){
            cannon_menu.removeAttribute('disabled');
            missile_menu.removeAttribute('disabled');
        }else{
            also_Occupies("Cannon");
            also_Occupies("Missile");
        }
     })   
    }

function change_stat(stat, value){ //Action n°7
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

function add_action (link,action,color){ //Action n°8

    }

function add_condition(conditionID){ //Action n°9

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
                console.log('remonving'+slot); 
                upgslot.removeEventListener('input', listenfunction);
            }
            if (upgslot) {
                   
                upgslot.addEventListener('input', listenfunction)  ;
            }
            fillUpgradesSelected(y);  
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
    let newchassis = document.createElement('div');
    let newtitle = document.createElement('div');
    newpara.setAttribute('class','new '+shipquantity);
    newdiv.setAttribute('id','ship'+numero);
    newdiv.setAttribute('class','ship');
    newship.setAttribute('id','menu_ship_'+numero );
    newship.setAttribute('class','menu shipmenu' );
    newpilot.setAttribute('id','menu_pilot_'+numero);
    newpilot.setAttribute('class','menu shipmenu pilotmenu');
    newslots.setAttribute('id','shipslots'+numero);
    newslots.setAttribute('class','slot '+numero);
    newcost.setAttribute('id','shipcost'+numero);
    newcost.setAttribute('class','count cost');
    newloadout.setAttribute('id','shiploadout'+numero);
    newloadout.setAttribute('class','count loadout');
    newchassis.setAttribute('class','new chassis '+numero);
    newchassis.setAttribute('id','shipchassis'+numero);
    newtitle.setAttribute('class','new title '+numero);
    newtitle.setAttribute('id','title'+numero);

    squad.appendChild(newpara);
    newpara.appendChild(newdiv);
    newdiv.appendChild(newship);
    newdiv.appendChild(newpilot);
    newpara.appendChild(newslots);
    newdiv.appendChild(newcost);
    newdiv.appendChild(newloadout);
    newdiv.appendChild(newchassis);
    newdiv.appendChild(newtitle);
    
    populateMenu("menu_ship_"+numero, ship_available);
    //ajout de l'écoute d'un input sur le nouveau menu newship
    newship.addEventListener('input', function(event) {
       //y = event.target.id.slice(10,11);  
       identifyElement(event);
       pilot_objects[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
       select_pilot_list(numero);
       removeElementsByClass("slotElement"+numero);
      restricted_List[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      restricted_List[8][numero] = ""; //Il faut aussi retirer le nom du pilote
      upgradesSelected[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      upgrades_Objects[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      upgrades_Objects_Val[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      upgrades_Type[numero] = []; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      pilot_list[numero]= {name:"",points:0}; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      listFull[numero] = {}; //Il faut nettoyer toutes les infos du ship/pilot/slots précédent
      



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
        
    });  
   
    
}



function remove_ship() { //fonction qui permet de retirer le dernier vaisseau. S'active via le bouton Removeship
    
    /*// Get all elements with the specified class name
    const elements = document.getElementsByClassName("new "+shipquantity);
        
    // Convert HTMLCollection to array for easier manipulation
    const elementsArray = Array.from(elements);

    // Remove each element from its parent node
    elementsArray.forEach(element => {
        element.parentNode.removeChild(element);
    });*/
    removeElementsByClass("new "+shipquantity); //retire la balise <p> qui contient tous les éléments
    
    pilot_objects[shipquantity]=[];
    pilot_selected_list[shipquantity]="";
    overCostTab[shipquantity] = 0;
    upgrades_Type[shipquantity] = [];
    upgrades_Objects[shipquantity]= [];
    upgradesSelected[shipquantity] = [];
    upgrades_Objects_Val[shipquantity]= [];
    restricted_List[shipquantity] = [shipquantity]; //retrait des upgrades du dernier vaisseau
    restricted_List[8][shipquantity] = "";  //retrait du nom du pilote du dernier vaisseau
    pilot_list[shipquantity] = {name:"",points:0};
    listFull.slice(0,-1);
    if (shipquantity>0){
        shipquantity--;
    }
        
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
    removeElementsByClass("new")
    select_ship_list();
    document.getElementById("descript_upg").innerHTML="";
    shipquantity = -1;
    overCostTab = [0,0,0,0,0,0,0,0];
    totalcostvalue = 0;
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
    listFull = [];
}); 

function faction_cards(){ //dans scriptleader, lorsqu'une faction est sélectionnée, le bouton faction perd son attribut disabled
    let selected_faction = document.getElementById("menu_faction").value;
    faction_hash = selected_faction;
    const linkToFactionCards = document.getElementById('menu_faction');
    linkToFactionCards.href =  'faction_cards.html#${faction_hash}';
}



//permet d'associer la fonction add_ship au bouton addship
const addMenuButton = document.getElementById("addshipbutton");
addMenuButton.addEventListener('click', add_ship);
//permet d'associer la fonction remove_ship au bouton remove ship
const removeMenuButton = document.getElementById('removeshipbutton');
removeMenuButton.addEventListener('click', remove_ship);
//permet d'associer la fonction faction_cards au bouton faction
const factionCards = document.getElementById('faction');
factionCards.addEventListener('click', faction_cards);




function hasher(){ //on inscrit dans hash le nombre de vaisseaux (shipquantity+1) on va transformer tous les ids du ship pilote et upgrades séparés par la lettre "z", chaque info différente (pilot, upgrades, modifiers) est séparée par des x, puis chaque vaisseaux différents séparés par ",".
    hash = String(shipquantity+1) +',';
    
    for(i = 0; shipquantity; i++) {
        
        let string_pilot_ID = String(pilot_list[i]['id']);
        hash = hash + string_pilot_ID +"x";
        hash = hash + listFull[i].modifiers + "x"; // les x correspondent à un changement d'information du vaisseau
        for (let j = 0; j < upgradesSelected_ID[i].length; j++){
            if (upgradesSelected_ID[i][j]>-1){
                hash = hash + upgradesSelected_ID[i][j] + "z"; // les z correspondent à un changement d'upgrade
    }  
    hash = hash.slice(0,-1); //on retire le z final
    hash = hash + "," ; // la virgule correspond à un changement de vaisseau
    }
    
}
hash = hash.slice(0,-1); //on retire la virgule finale
}

//Voici le lien de printsquad avec le hash à sa suite (qui permettra de savoir quoi imprimer)
const linkToPrintSquad = document.getElementById('printsquad');
linkToPrintSquad.href =  'print_squad.html#${hash}';