
let requestURLships = "https://raw.githubusercontent.com/Immelman51/xwunited/main/ships.json";
let requestURLchassis = "https://raw.githubusercontent.com/Immelman51/xwunited/main/chassis.json";
let requestURLpilots = "https://raw.githubusercontent.com/Immelman51/xwunited/main/pilots.json";
let requestURLupgrades = "https://raw.githubusercontent.com/Immelman51/xwunited/main/upgrades.json";
let requestURLleaders = "https://raw.githubusercontent.com/Immelman51/xwunited/main/leaders.json";
let ships, chassis, pilots, upgrades, leaders;

async function fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function loadAllData() {
    
   

    try {
        ships = await fetchData(requestURLships);
        chassis = await fetchData(requestURLchassis);
        pilots = await fetchData(requestURLpilots);
        upgrades = await fetchData(requestURLupgrades);
        leaders = await fetchData(requestURLleaders);
        console.log(leaders);
        console.log(ships);
        console.log(chassis);
        console.log(pilots);
        console.log(upgrades);

        // Call function to handle the DOM manipulation after data is loaded
        displayLeaders();
   
        displayShipsandPilots();

        displayUpgrades();
      

        // Vous pouvez maintenant utiliser les variables ships, chassis, pilots, et upgrades ici ou dans d'autres fonctions
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
};


    let factionSelected = "";

if(window.location.hash) {
    // Mettez le hash dans une variable et supprimer le caractère #
    factionSelected = window.location.hash.substring(1);
    
} else {
    // Aucun hash n'est trouvé
}
function displayLeaders() { //on va d'abord faire afficher les leaders de la faction sélectionnée
    
    

    let pLeader = document.createElement('div'); //permet d'accéder à la section leaders via le menu du header
    pLeader.setAttribute("id", "leaders");
    document.body.appendChild(pLeader);
    
for (let i = 0; i<leaders.length; i++){ 
    if (leaders[i]["leaderfaction"].includes(factionSelected)){
        let newleader = document.createElement('p');
        newleader.setAttribute("class", "leader");
        

        let newleadername = document.createElement('div');
        newleadername.setAttribute("class", "leader name");
        newleadername.innerHTML = leaders[i]["leadername"];        
        newleader.appendChild(newleadername);



        let newleadercharge = document.createElement('div');
        newleadercharge.setAttribute("class", "leader charge");
        newleadercharge.innerHTML = leaders[i]["charge"];
        newleader.appendChild(newleadercharge);

        for (let j=0; j<3 ; j++){
            let factions = leaders[i]["leaderfaction"][j];
            let factionlogo = document.createElement("div");
            factionlogo.setAttribute("class", "leader faction");
            factionlogo.setAttribute("src",'img/'+factions+'mini.jpg');
            newleader.appendChild(factionlogo);
        }
        let newleaderability = document.createElement("div");
        newleaderability.innerHTML = leaders[i]["leaderability"];
        newleaderability.setAttribute("class", "leader ability");
        newleader.appendChild(newleaderability);

        document.body.appendChild(newleader);

    
        
    }
}
};

function displayShipsandPilots() { //on va d'abord faire afficher les ships et les pilots associés

    
    let pPilots = document.createElement('div'); //permet d'accéder à la section pilots via le menu du header
    pPilots.setAttribute("id", "pilots");
    document.body.appendChild(pPilots);

for (let i=0 ; i<ships.length; i++){ //on va afficher d'abord le vaisseau/chassis.... puis après les pilotes associés
    if (ships[i]["factions"].includes(factionSelected)){
        let newship = document.createElement('p');
        newship.setAttribute("class","ship");
        newship.setAttribute("id","ship"+i);

        let newshipname = document.createElement('div');
        newshipname.setAttribute("class", "ship name");
        newshipname.innerHTML = ships[i]["name"];        
        newship.appendChild(newshipname);

        
        let shipattackContainer = document.createElement('div');
        shipattackContainer.setAttribute("class","ship attack container");
        shipattackContainer.innerHTML = '<span style="color: black" class="attack value">' +ships[i]["attack"][0][1] + '</span> <img src="img/attack'+ships[i]["attack"][0][0] +'.jpg" class="attack logo"/>' ;
    if(ships[i]["attack"].length === 2){
    newshipattack.innerHTML = newshipattack.innerHTML + "<img class='attack logo' src='img/attack"+ships[i]["attack"][1][0] +".jpg'/><span style='color: black' class='attack'>" + ships[i]["attack"][1][1] + "</span>"  ;
    } 
    newship.appendChild(shipattackContainer);


let shipagilityContainer = document.createElement('div');
let shipagilitylogo = document.createElement('img');
let shipagility = document.createElement('div');
shipagility.setAttribute("class", "agility value");
shipagilitylogo.setAttribute("src", 'img/agility.jpg');
shipagilitylogo.setAttribute("class", "agility logo");
shipagility.innerHTML = ships[i]["agility"];
shipagilityContainer.setAttribute("class", "ship agility container");
shipagilityContainer.appendChild(shipagilitylogo);
shipagilityContainer.appendChild(shipagility);
newship.appendChild(shipagilityContainer);


let shiphullContainer = document.createElement('div');
let shiphulllogo = document.createElement('img');
let shiphull = document.createElement('div');
shiphull.setAttribute('class','hull value');
shiphulllogo.setAttribute("src", 'img/hull.jpg');
shiphulllogo.setAttribute("class", "hull logo");
shiphull.innerHTML = ships[i]["hull"];
shiphullContainer.setAttribute("class", "ship hull container");

shiphullContainer.appendChild(shiphulllogo);
shiphullContainer.appendChild(shiphull);
newship.appendChild(shiphullContainer);

let shipshieldContainer = document.createElement('div');
let shipshield = document.createElement('div');
let shipshieldlogo = document.createElement('img');
shipshield.setAttribute("class", "shield value");
shipshieldlogo.setAttribute("src", 'img/shield.jpg');
shipshieldlogo.setAttribute("class", "shield logo");
shipshield.innerHTML = ships[i]["shields"];   
shipshieldContainer.setAttribute("class", "ship shield container");
     
shipshieldContainer.appendChild(shipshieldlogo);
shipshieldContainer.appendChild(shipshield);
newship.appendChild(shipshieldContainer);

//We show ship actions
const actionsArray = ships[i]['actions'];
    let actionlist = document.createElement('div');
    actionlist.setAttribute('id','action'+i);
    actionlist.setAttribute("class","ship container action");
    for(g=0 ; g<actionsArray.length ; g++){
        switch(actionsArray[g][0]){
            case 0 : //if 0 is the first value, it is a simple action
            newaction = document.createElement('img');
            newaction.setAttribute('class','actionlogo '+i+''+actionsArray[g][1]);
            newaction.setAttribute('src', 'img/'+actionsArray[g][1]+'.jpg');
            actionlist.appendChild(newaction);
            break;
            case 1 : //if 1 is the first value, then it is a linked action
            newaction = document.createElement('div');
            newaction.setAttribute('class','actionlogo');
            
            newaction1 = document.createElement('img');
            newaction1.setAttribute('src', 'img/'+actionsArray[g][1]+'.jpg');
            newaction1.setAttribute('class','linked actionlogo '+i+''+actionsArray[g][1]);
            
            newlink = document.createElement('img');
            newlink.setAttribute('src', 'img/fleche.jpg');
            newlink.setAttribute('class','linked actionlogo');
            
            newaction2 = document.createElement('img');
            newaction2.setAttribute('src', 'img/'+actionsArray[g][2]+'.jpg');
            newaction2.setAttribute('class','linked actionlogo '+i+''+actionsArray[g][2]);

            newaction.appendChild(newaction1);
            newaction.appendChild(newlink);
            newaction.appendChild(newaction2);
            actionlist.appendChild(newaction);
            break;
            default :
            console.log('there is a mistake in ships.json for ship ID n°'+shipID);
            break;
        }
    }   
newship.appendChild(actionlist);



        
//Second line flexbox
//let shipSecondLine = document.createElement('div');
//shipSecondLine.setAttribute("class","container");
        
        let shipsizecontainer = document.createElement('div');
        shipsizecontainer.setAttribute("class", "size logo");
        switch(ships[i]['base'][0]){
            case 'Small' :
                shipsizecontainer.innerHTML = "<img src='img/smallbase.jpg'/>";
                break;
            case 'Medium' :
                shipsizecontainer.innerHTML = "<img src='img/mediumbase.jpg'/>" ;
                break;
            case 'Large' :
                shipsizecontainer.innerHTML = "<img src='img/largebase.jpg'/>";
                break;
            case 'Huge' :
                shipsizecontainer.innerHTML = "<img src='img/hugebase.jpg'/>";
                break;
            default : 
                console.log("error ship size logo " + i) ;   
                break;
        }
        
        newship.appendChild(shipsizecontainer);

        shipSlots = document.createElement('div');
        shipSlots.setAttribute("class","slots container");
        for (let m=0; m<ships[i]["slots"].length; m++){ //on va développer tous les slots associés au vaisseau
            newshipslots = document.createElement('img');            
            newshipslots.setAttribute("class", "slot");
            newshipslots.setAttribute("src", 'img/'+ships[i]["slots"][m]+'.jpg');
            shipSlots.appendChild(newshipslots);
        } 
newship.appendChild(shipSlots);

//we show the ship's maneuvers
let shipManeuvers = ships[i]['maneuvers'];
maneuversDiv = document.createElement('div');
maneuversDiv.setAttribute('class','ship maneuvers');
maneuversDiv.setAttribute('id',"maneuvers"+i);
for(g=0; g<shipManeuvers.length; g++){
   //if there is no maneuver at 'g' speed, we don't create a new div. Let's test this :
   let sum = 0;
   for(s=0;s<shipManeuvers[g].length;s++){
        sum += shipManeuvers[g][s];
   }
   if (sum===0){
    console.log('no maneuvers at '+g+' speed');
     
    }else{
    manspeed = document.createElement('div');
    manspeed.setAttribute('class','man'+g+'sp');
    manspeedimg = document.createElement('img');
    manspeedimg.setAttribute('src','img/man'+g+'.jpg');
    manspeedimg.setAttribute('class','manlogo');
    manspeed.appendChild(manspeedimg);
    maneuversDiv.appendChild(manspeed);
    for(h=0 ; h<shipManeuvers[g].length; h++){
        man = document.createElement('div');
        man.setAttribute('class','man'+g+h);
        manimg = document.createElement('img');
        manimg.setAttribute('class','manlogo');
        let mantype = '';
        if(g===0){
            mantype = 'Op' //Stop maneuver
        }else{
        switch (h){
            case 0 :
                mantype = 'Tl'; //Turn Left
                break;
            case 1 :
                mantype = 'Bl'; //Bank Left
                break;
            case 2 :
                mantype = "St"; //Straight
                break;
            case 3 : 
                mantype = "Br"; //Bank Right
                break;
            case 4 : 
                mantype = 'Tr'; //Turn Right
                break;
            case 5 :
                mantype = 'Ko'; //Koyogran turn
                break;
            case 6 :
                mantype = 'Sl'; //Segnor loop Left
                break;
            case 7 :
                mantype = 'Sr'; //Segnor Loop right
                break;
            case 8 :
                mantype = "Al"; //tallon roll left
                break;
            case 9 :
                mantype = "Ar"; //Tallon roll Right
                break;
            case 10 :
                mantype = 'Rl'; //Reverse Left
                break;
            case 11 :
                mantype = 'Rs'; // Reverse Straight
                break;
            case 12 :
                mantype = 'Rr'; // Reverse Right
                break;
            default :
                mantype = 'Blank';
                break;
        }
        }
        if(shipManeuvers[g][h]===0){
            manimg.setAttribute('src','img/manBlank.jpg');
        }else{
            manimg.setAttribute('src','img/man'+mantype+shipManeuvers[g][h]+'.jpg');
        }
    man.appendChild(manimg);
    maneuversDiv.appendChild(man);
}
   }
}
newship.appendChild(maneuversDiv);


   
document.body.appendChild(newship);

// On a fini de décrire le ship   
// Maintenant on va afficher les pilotes !! Grosse boucle for ! et en voilà une autre qui l'est tout autant
// on est toujours dans la boucle if qui teste que le vaisseau appartient à la faction
    for (let j = 0; j<pilots.length; j++){
        
        if ((pilots[j]['shipId']===ships[i]['id']) && pilots[j]['faction']===factionSelected){ //si le pilote a le bon ship Id et qu'il appartient à la faction sélectionnée, alors...
            
            let newpilot = document.createElement('p');
            newpilot.setAttribute("class","pilot");
            
            let limitNumber = "";
            switch(pilots[j]['max_per_squad']){
                case 1 : 
                limitNumber = "*";
                break;
                case 2 :
                limitNumber = "**";
                break; 
                case 3 :
                limitNumber = "***";
                break; 
                default : 
                break;  
            }


            let newpilotname = document.createElement('div');
            newpilotname.setAttribute("class", "pilot name");
            newpilotname.innerHTML = limitNumber+" "+pilots[j]["name"]+ " ("+pilots[j]["skill"]+")";   // on écrit le limitNumber = Max_per_Squad avant le nom du pilote  , puis le skill entre parenthèses   
            newpilot.appendChild(newpilotname);

            if (pilots[j]["force"]>0){
                let newpilotforcelogo = document.createElement('div');
                let newpilotforce = document.createElement('div');
                newpilotforce.setAttribute("class", "pilot force");
                newpilotforcelogo.setAttribute("src", 'img/forcestat.jpg');
                newpilotforce.innerHTML = pilots[j]["force"];
                newpilot.appendChild(newpilotforcelogo);
                newpilot.appendChild(newpilotforce);
            }
            if (pilots[j]["charge"]>0){
                let newpilotchargelogo = document.createElement('div');
                let newpilotcharge = document.createElement('div');
                newpilotcharge.setAttribute("class", "pilot charge");
                newpilotchargelogo.setAttribute("src", 'img/chargestat.jpg');
                newpilotcharge.innerHTML = pilots[j]["charge"];
                newpilot.appendChild(newpilotchargelogo);
                newpilot.appendChild(newpilotcharge);
            }

            let newpilotvalue = document.createElement('div');
            newpilotvalue.setAttribute("class", "pilot points");
            newpilotvalue.innerHTML = pilots[j]["points"];
            newpilot.appendChild(newpilotvalue);

            
            if (typeof pilots[j]["title"] !== 'undefined'){ //certains pilotes n'ont pas de title
                let newpilottitle = document.createElement('div');
                newpilottitle.setAttribute("class", "pilot title");
                newpilot.appendChild(newpilottitle);
                newpilottitle.innerHTML = pilots[j]["title"];
            
            }
            
            for (let k=0; k<pilots[j]["slots"]; k++){ //on va développer tous les slots du pilote
                newpilotslotslogo = document.createElement('div');
                newpilotslots = document.createElement('div');
                newpilotslots.setAttribute("class", "pilot slot");
                newpilotslotslogo.setAttribute("src", 'img/'+pilots[j]["slots"][k]+'.jpg');
                newpilot.appendChild(newpilotslotslogo);
                newpilot.appendChild(newpilotslots);
            } 
            
            
            

            let newpilotability = document.createElement('div');
            newpilotability.setAttribute("class", "pilot ability");
            newpilot.appendChild(newpilotability); 
            if (typeof pilots[j]["ability"] !== 'undefined'){ //certains pilotes n'ont pas d'ability (pilotes génériques)
            newpilotability.innerHTML = pilots[j]["ability"];
            }

            document.body.appendChild(newpilot);
            

        }
    }        
    }
}

}

//Maintenant on va afficher les upgrades réservées à la faction, puis les upgrades génériques
//C'est parti !

function displayUpgrades() {
    let pUpgradesfaction = document.createElement('div'); //permet d'accéder à la section upgrades via le menu du header
    pUpgradesfaction.setAttribute("id", "upgradesfaction");
    document.body.appendChild(pUpgradesfaction);

    for (let i = 0; i<upgrades.length; i++){
        if (upgrades[i]["faction"].includes(factionSelected)){
            let newupgrade = document.createElement('p');
            newupgrade.setAttribute("class", "upgrade faction");
        

            let limitNumber = "";
            switch(upgrades[i]['max_per_squad']){
                case 1 : 
                limitNumber = "*";
                break;
                case 2 :
                limitNumber = "**";
                break; 
                case 3 :
                limitNumber = "***";
                break; 
                default : 
                break;  
            }
        
            let newupgradename = document.createElement('div');
        newupgradename.setAttribute("class", "upgrade name");
        newupgradename.innerHTML = limitNumber+" "+upgrades[i]["name"];        
        newupgrade.appendChild(newupgradename);

        
        let newupgradetype = document.createElement('div');
        let newupgradetypelogo = document.createElement('div');
        newupgradetype.setAttribute("class", "upgrade type");
        newupgradetype.innerHTML = upgrades[i]["slot"]; 
        newupgradetypelogo.setAttribute('src',  'img/'+upgrades[i]["slot"]+'.jpg')       
        newupgrade.appendChild(newupgradetype);
        newupgrade.appendChild(newupgradetypelogo);

        let newupgradepoints = document.createElement('div');
        newupgradepoints.setAttribute("class", "upgrade value");
        newupgradepoints.innerHTML = upgrades[i]["points"];        
        newupgrade.appendChild(newupgradepoints);

        let newupgradeeffect = document.createElement('div');
        newupgradeeffect.setAttribute("class", "upgrade ability");
        newupgradeeffect.innerHTML = upgrades[i]["effect"];        
        newupgrade.appendChild(newupgradeeffect);

        document.body.appendChild(newupgrade);



        
        }
    }
    let pUpgradesGen = document.createElement("div");
    pUpgradesGen.setAttribute("id", "upgradesgen");
    document.body.appendChild(pUpgradesGen);
    
    for (let j = 0; j<upgrades.length; j++) { //on va maintenant afficher les upgrades génériques
        if (upgrades[j]["faction"]===""){
            let newupgrade = document.createElement('p');
            newupgrade.setAttribute("class", "upgrade generic");
        

            let limitNumber = "";
            switch(upgrades[j]['max_per_squad']){
                case 1 : 
                limitNumber = "*";
                break;
                case 2 :
                limitNumber = "**";
                break; 
                case 3 :
                limitNumber = "***";
                break; 
                default : 
                break;  
            }
        
            let newupgradename = document.createElement('div');
        newupgradename.setAttribute("class", "upgrade name");
        newupgradename.innerHTML = limitNumber+" "+upgrades[j]["name"];        
        newupgrade.appendChild(newupgradename);

        
        let newupgradetype = document.createElement('div');
        let newupgradetypelogo = document.createElement('div');
        newupgradetype.setAttribute("class", "upgrade type");
        newupgradetype.innerHTML = upgrades[j]["slot"]; 
        newupgradetypelogo.setAttribute('src',  'img/'+upgrades[j]["slot"]+'.jpg')       
        newupgrade.appendChild(newupgradetype);
        newupgrade.appendChild(newupgradetypelogo);

        let newupgradepoints = document.createElement('div');
        newupgradepoints.setAttribute("class", "upgrade points");
        newupgradepoints.innerHTML = upgrades[j]["points"];        
        newupgrade.appendChild(newupgradepoints);

        let newupgradeeffect = document.createElement('div');
        newupgradeeffect.setAttribute("class", "upgrade ability");
        newupgradeeffect.innerHTML = upgrades[j]["effect"];        
        newupgrade.appendChild(newupgradeeffect);

        document.body.appendChild(newupgrade);
        }
}
}


function displayactions(shipID) {

}

function displaymaneuvers(shipID) {

}




// Load all data and then execute the rest
    loadAllData();
