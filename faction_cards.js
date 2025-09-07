
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



const element = document.getElementById('content');



function displayLeaders() { //on va d'abord faire afficher les leaders de la faction sélectionnée
    
    

    let pLeader = document.createElement('div'); //permet d'accéder à la section leaders via le menu du header
    pLeader.setAttribute("id", "leaders");
    element.appendChild(pLeader);
    
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

        element.appendChild(newleader);

    
        
    }
}
};

function displayShipsandPilots() { //on va d'abord faire afficher les ships et les pilots associés

    
    let pPilots = document.createElement('div'); //permet d'accéder à la section pilots via le menu du header
    pPilots.setAttribute("id", "pilots");
    element.appendChild(pPilots);

for (let i=0 ; i<ships.length; i++){ //on va afficher d'abord le vaisseau/chassis.... puis après les pilotes associés
    if (ships[i]["factions"].includes(factionSelected)){
        let newship = document.createElement('p');
        newship.setAttribute("class","ship");
        newship.setAttribute("id","ship"+i);

        let newshipname = document.createElement('div');
        newshipname.setAttribute("class", "ship name");
        newshipname.innerHTML = ships[i]["name"];        
        newship.appendChild(newshipname);

        let shipsizecontainer = document.createElement('div');
        shipsizecontainer.setAttribute("class", "size");
        shipsizetext = document.createElement('div'); //we create a div in the div to apply him some style wit css
        shipsizetext.setAttribute("class", "size");
        switch(ships[i]['base'][0]){
            case 'Small' :
                shipsizetext.innerHTML = "Sml ";
                break;
            case 'Medium' :
                shipsizetext.innerHTML = "Med " ;
                break;
            case 'Large' :
                shipsizetext.innerHTML = "Lrg ";
                break;
            case 'Huge' :
                shipsizetext.innerHTML = "Hug ";
                break;
            default : 
                console.log("error ship size logo " + i) ;   
                break;
        }
       
        shipsizecontainer.appendChild(shipsizetext);
        newship.appendChild(shipsizecontainer);

        
        let shipattackContainer = document.createElement('div');
        shipattackContainer.setAttribute("class","attack container");
        shipattackContainer.innerHTML = '<span style="color: black" class="attack value">' +ships[i]["attack"][0][1] + '</span> <img src="img/attack'+ships[i]["attack"][0][0] +'.jpg" class="attack logo"/>' ;
    if(ships[i]["attack"].length === 2){
        shipattackContainer.innerHTML +=  "<img class='attack logo' src='img/attack"+ships[i]["attack"][1][0] +".jpg'/><span style='color: black' class='attack value'>" + ships[i]["attack"][1][1] + "</span>"  ;
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
    actionlist.setAttribute("class","container actionBar");
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
            newaction.setAttribute('class','linkedcontainer');
            
            newaction1 = document.createElement('img');
            newaction1.setAttribute('src', 'img/'+actionsArray[g][1]+'.jpg');
            newaction1.setAttribute('class','linkedimg '+i+''+actionsArray[g][1]);
            
            newlink = document.createElement('img');
            newlink.setAttribute('src', 'img/fleche.jpg');
            newlink.setAttribute('class','linkedimgarrow');
            
            newaction2 = document.createElement('img');
            newaction2.setAttribute('src', 'img/'+actionsArray[g][2]+'.jpg');
            newaction2.setAttribute('class','linkedimg '+i+''+actionsArray[g][2]);

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
        
     

        shipSlots = document.createElement('div');
        shipSlots.setAttribute("class","slots container");
        for (let m=0; m<ships[i]["slots"].length; m++){ //on va développer tous les slots associés au vaisseau
            newshipslots = document.createElement('img');            
            newshipslots.setAttribute("class", "slot");
            newshipslots.setAttribute("src", 'img/'+ships[i]["slots"][m]+'.png');
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
    console.log(ships[i]['name']+' no maneuvers at '+g+' speed');
     
    }else{
    manspeed = document.createElement('div');
    manspeed.setAttribute('class','man'+g+'sp');
    
    manspeedimg = document.createElement('img');
    manspeedimg.setAttribute('src','img/man'+g+'.jpg');
    manspeedimg.setAttribute('class','manlogo');
    manspeed.appendChild(manspeedimg);
    maneuversDiv.appendChild(manspeed);
    
    for(h=0 ; h<shipManeuvers[g].length; h++){
        
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
            console.log('no man');
        }else{
            man = document.createElement('div');
            man.setAttribute('class','man'+g+h);
            manimg = document.createElement('img');
            manimg.setAttribute('class','manlogo');
            manimg.setAttribute('src','img/man'+mantype+shipManeuvers[g][h]+'.jpg');
            man.appendChild(manimg);
            maneuversDiv.appendChild(man);
        }
   
}
   }
}
newship.appendChild(maneuversDiv);

//We display the chassis ability
chassisShip = document.createElement('div');
chassisShip.setAttribute('id','chassisShip'+i);
chassisShip.setAttribute('class','chassisShip');
if(ships[i]['chassis'][0]!==0){
for(c=0;c<ships[i]['chassis'].length;c++){
    chassisShip.innerHTML += chassis[ships[i]['chassis'][c]]['effect1']+'<br>';
    if(chassis[ships[i]['chassis'][c]]['nbrOfEffects']===2){
    chassisShip.innerHTML += chassis[ships[i]['chassis'][c]]['effect2']+'<br>';  
    chassisShip.innerHTML += chassis[ships[i]['chassis'][c]]['effect3']+'<br>';
    }
}
}
newship.appendChild(chassisShip);

   
element.appendChild(newship);

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
                for(k=0 ; k<pilots[j]["force"] ; k++){
                    let newpilotForce = document.createElement('img')
                    newpilotForce.setAttribute("class", "chargeforceimg");
                    newpilotForce.setAttribute("src", 'img/forcestat.png');
                    newpilotname.appendChild(newpilotForce);
                }
            }
            
            if (pilots[j]["charge"][0]>0){
                for(k=0 ; k<pilots[j]["charge"][0] ; k++){
                    let newpilotCharge = document.createElement('img');
                    newpilotCharge.setAttribute("class", "chargeforceimg");
                    newpilotCharge.setAttribute("src", 'img/chargestat.png');
                    newpilotname.appendChild(newpilotCharge);
                }
                
                let newpilotChargeLogo = document.createElement('img');
                switch(pilots[j]["charge"][1]){
                        case "0":
                        break;
                        case "+":
                        newpilotChargeLogo.setAttribute("class","chargeforceimg");
                        newpilotChargeLogo.setAttribute('src', 'img/chargeplus.png');
                        break;
                        case "-":
                        newpilotChargeLogo.setAttribute("class","chargeforceimg");
                        newpilotChargeLogo.setAttribute('src', 'img/chargeminus.png');
                        break;
                        default:
                        break;
                }
                newpilotname.appendChild(newpilotChargeLogo);
                    
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
            newpilotslots = document.createElement('div');
            newpilotslots.setAttribute("class", "slotpilot");
            for (let k=0; k<pilots[j]["slots"].length; k++){ //on va développer tous les slots du pilote
                newpilotslotslogo = document.createElement('img');                            
                newpilotslotslogo.setAttribute("src", 'img/'+pilots[j]["slots"][k]+'.png');
                newpilotslots.appendChild(newpilotslotslogo);
                
            } 
            
            newpilot.appendChild(newpilotslots);
            

            let newpilotability = document.createElement('div');
            newpilotability.setAttribute("class", "pilot ability");
            newpilot.appendChild(newpilotability); 
            if (typeof pilots[j]["ability"] !== 'undefined'){ //certains pilotes n'ont pas d'ability (pilotes génériques)
            newpilotability.innerHTML = pilots[j]["ability"];
            }

            element.appendChild(newpilot);
            

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
    element.appendChild(pUpgradesfaction);

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
        newupgradetypelogo.setAttribute('src',  'img/'+upgrades[i]["slot"]+'.png')       
        newupgrade.appendChild(newupgradetype);
        newupgrade.appendChild(newupgradetypelogo);

        let newupgradepoints = document.createElement('div');
        newupgradepoints.setAttribute("class", "upgrade points");
        newupgradepoints.innerHTML = upgrades[i]["points"];        
        newupgrade.appendChild(newupgradepoints);

        let newupgradeeffect = document.createElement('div');
        newupgradeeffect.setAttribute("class", "upgrade ability");
        newupgradeeffect.innerHTML = upgrades[i]["effect"];        
        newupgrade.appendChild(newupgradeeffect);

        element.appendChild(newupgrade);



        
        }
    }
  
}






// Load all data and then execute the rest
    loadAllData();


    const printBtn = document.getElementById('printButton');
    

    printBtn.addEventListener('click', () => {
          const opt = {
            margin:       0.5,
              filename:     factionSelected+'.pdf',
              image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(element).save();
        });

