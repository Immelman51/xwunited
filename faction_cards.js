
let requestURLships = "https://raw.githubusercontent.com/Immelman51/xwunited/main/ships.json";
let requestURLchassis = "https://raw.githubusercontent.com/Immelman51/xwunited/main/chassis.json";
let requestURLpilots = "https://raw.githubusercontent.com/Immelman51/xwunited/main/pilots.json";
let requestURLupgrades = "https://raw.githubusercontent.com/Immelman51/xwunited/main/upgrades.json";
let requestURLleaders = "https://raw.githubusercontent.com/Immelman51/xwunited/main/leaders.json";
let ships, chassis, pilots, upgrades, leaders;
let array2export = [];
let arrayObject = { //this is just a model. This object won't be used.
    type:'',
    name:'',
    cost:0,
    maxPerSquad:1,
    typeShipUpgrade:'',
    faction:'',
    description:'',
    charge:0,
    optionalSlots:[],
    title:'',

}

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
    array2export.push(factionSelected);
    
} else {
    // Aucun hash n'est trouvé
}

//We get the language selected
let languageMenu = document.getElementById("language");
let language = languageMenu.value;
languageMenu.addEventListener("input", function(){
    console.log("Language Input");
    language = languageMenu.value;
    element.innerHTML = "";
    loadAllData();
});

const element = document.getElementById('content');



function displayLeaders() { //on va d'abord faire afficher les leaders de la faction sélectionnée
    
    

    let pLeader = document.createElement('div'); //permet d'accéder à la section leaders via le menu du header
    pLeader.setAttribute("id", "leaders");
    element.appendChild(pLeader);
    
for (let i = 0; i<leaders.length; i++){ 
    if (leaders[i]["leaderfaction"].includes(factionSelected)){
        let newleader = document.createElement('p');
        newleader.setAttribute("class", "leader");
        let newObject = {
    type:'leader',
    name:'',
    cost:0,
    maxPerSquad:'',
    typeShipUpgrade:'',
    faction:'',
    skill:0,
    description:'',
    charge:0,
    optionalSlots:[],
    title:'',

}
        

        let newleadername = document.createElement('div');
        newleadername.setAttribute("class", "leader name");
        newleadername.innerHTML = leaders[i]["leadername_"+language];
        newleader.appendChild(newleadername);
        newObject.name=leaders[i]["leadername_"+language];



        let newleadercharge = document.createElement('div');
        newleadercharge.setAttribute("class", "leader charge");
        const charge_color = leaders[i]["charge"][1];
        if (charge_color==="Red") {
        newleadercharge.innerHTML = "<span style='color:red;'>"+leaders[i]["charge"][0]+"</span>";
        }
        if (charge_color==="Yellow") {
        newleadercharge.innerHTML = "<span style='color:yellow;'>"+leaders[i]["charge"][0]+"</span>";

        }
        newleader.appendChild(newleadercharge);
        newObject.charge=leaders[i]["charge"];


        for (let j=0; j<3 ; j++){
            let factions = leaders[i]["leaderfaction"][j];
            let factionlogo = document.createElement("div");
            factionlogo.setAttribute("class", "leader faction");
            factionlogo.setAttribute("src",'img/'+factions+'mini.jpg');
            newleader.appendChild(factionlogo);
        }
        let newleaderability = document.createElement("div");
        newleaderability.innerHTML = leaders[i]["leaderability_"+language];
        newleaderability.setAttribute("class", "leader ability");
        newleader.appendChild(newleaderability);

        element.appendChild(newleader);
        newObject.name=leaders[i]["leaderability_"+language];

        array2export.push(newObject);

    
        
    }
}
};

function displayShipsandPilots() { //on va d'abord faire afficher les ships et les pilots associés

    
    let pPilots = document.createElement('div'); //permet d'accéder à la section pilots via le menu du header
    pPilots.setAttribute("id", "pilots");
    element.appendChild(pPilots);

for (let i=0 ; i<ships.length; i++){ //on va afficher d'abord le vaisseau/chassis.... puis après les pilotes associés
    if (ships[i]["factions"].includes(factionSelected)){
        let newShipObject = { 
    type:'ship',
    name:'',
    cost:0,
    maxPerSquad:8,
    typeShipUpgrade:'',
    faction:'',
    description:'',
    charge:0,
    optionalSlots:[],
    title:'',

}
        let newship = document.createElement('p');
        newship.setAttribute("class","ship");
        newship.setAttribute("id","ship"+i);

        let newshipname = document.createElement('div');
        newshipname.setAttribute("class", "ship name");
        newshipname.innerHTML = ships[i]["name"];        
        newship.appendChild(newshipname);
        newShipObject.name=ships[i]["name"]; 

        let shipsizecontainer = document.createElement('div');
        shipsizecontainer.setAttribute("class", "size");
        shipsizetext = document.createElement('div'); //we create a div in the div to apply him some style wit css
        shipsizetext.setAttribute("class", "size");
        switch(ships[i]['base'][0]){
            case 'Small' :
                shipsizetext.innerHTML = "Sml ";
                newShipObject.typeShipUpgrade="Small"
                break;
            case 'Medium' :
                shipsizetext.innerHTML = "Med " ;
                newShipObject.typeShipUpgrade="Medium"
                break;
            case 'Large' :
                shipsizetext.innerHTML = "Lrg ";
                newShipObject.typeShipUpgrade="Large"
                break;
            case 'Huge' :
                shipsizetext.innerHTML = "Hug ";
                newShipObject.typeShipUpgrade="Huge"
                break;
            default : 
                console.log("error ship size logo " + i) ;   
                break;
        }
       
        shipsizecontainer.appendChild(shipsizetext);
        newship.appendChild(shipsizecontainer);

        
        let shipattackContainer = document.createElement('div');
        shipattackContainer.setAttribute("class","attack container");
        console.log("i="+i);
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
            newShipObject.optionalSlots.push(ships[i]["slots"][m]);
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
    chassisShip.innerHTML += chassis[ships[i]['chassis'][c]]['effect1_'+language]+'<br>';
    if(chassis[ships[i]['chassis'][c]]['nbrOfEffects']===2){
    chassisShip.innerHTML += chassis[ships[i]['chassis'][c]]['effect2_'+language]+'<br>';
    chassisShip.innerHTML += chassis[ships[i]['chassis'][c]]['effect3_'+language]+'<br>';
    }
}
}
newship.appendChild(chassisShip);

   
element.appendChild(newship);

array2export.push(newShipObject);

// On a fini de décrire le ship   
// Maintenant on va afficher les pilotes !! Grosse boucle for ! et en voilà une autre qui l'est tout autant
// on est toujours dans la boucle if qui teste que le vaisseau appartient à la faction
    for (let j = 0; j<pilots.length; j++){
        
        if ((pilots[j]['shipId']===ships[i]['id']) && pilots[j]['faction']===factionSelected){ //si le pilote a le bon ship Id et qu'il appartient à la faction sélectionnée, alors...
            let pilotObject = {
            type:'pilot',
            name:'',
            cost:0,
            maxPerSquad:8,
            typeShipUpgrade:'',
            skill:0,
            faction:'',
            description:'',
            charge:0,
            force:0,
            optionalSlots:[],
            title:'',
            }
            pilotObject.typeShipUpgrade=ships[i]["name"];

            let newpilot = document.createElement('p');
            newpilot.setAttribute("class","pilot");
            
            let limitNumber = "";
            switch(pilots[j]['max_per_squad']){
                case 1 : 
                limitNumber = "*";
                pilotObject.maxPerSquad=1;
                break;
                case 2 :
                limitNumber = "**";
                pilotObject.maxPerSquad=2;

                break; 
                case 3 :
                limitNumber = "***";
                pilotObject.maxPerSquad=3;
                break; 
                default : 
                break;  
            }


            let newpilotname = document.createElement('div');
            newpilotname.setAttribute("class", "pilot name");
            newpilotname.innerHTML = limitNumber+" "+pilots[j]["name_"+language]+ " ("+pilots[j]["skill"]+")";   // on écrit le limitNumber = Max_per_Squad avant le nom du pilote  , puis le skill entre parenthèses
            newpilot.appendChild(newpilotname);
            pilotObject.name=pilots[j]["name_"+language];
            pilotObject.skill=pilots[j]["skill"];


            
         
            if (pilots[j]["force"]>0){
                pilotObject.force=pilots[j]["force"];
                for(k=0 ; k<pilots[j]["force"] ; k++){
                    let newpilotForce = document.createElement('img')
                    newpilotForce.setAttribute("class", "chargeforceimg");
                    newpilotForce.setAttribute("src", 'img/forcestat.png');
                    newpilotname.appendChild(newpilotForce);
                    
                }
            }
            
            if (pilots[j]["charge"][0]>0){
                pilotObject.charge=pilots[j]["charge"];
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
            pilotObject.cost=pilots[j]["points"];


            
            if (typeof pilots[j]["title"] !== 'undefined'){ //certains pilotes n'ont pas de title
                let newpilottitle = document.createElement('div');
                newpilottitle.setAttribute("class", "pilot title");
                newpilot.appendChild(newpilottitle);
                newpilottitle.innerHTML = pilots[j]["title"];
                pilotObject.title=pilots[j]["title"];
            
            }
            let newpilotslots = document.createElement('div');
            newpilotslots.setAttribute("class", "slotpilot");
            for (let k=0; k<pilots[j]["slots"].length; k++){ //on va développer tous les slots du pilote
                newpilotslotslogo = document.createElement('img');                            
                newpilotslotslogo.setAttribute("src", 'img/'+pilots[j]["slots"][k]+'.png');
                newpilotslots.appendChild(newpilotslotslogo);
                pilotObject.optionalSlots.push(pilots[j]["slots"][k]);
                
            } 
            
            newpilot.appendChild(newpilotslots);
            

            let newpilotability = document.createElement('div');
            newpilotability.setAttribute("class", "pilot ability");
            newpilotability.innerHTML = pilots[j]["ability_"+language];
            newpilot.appendChild(newpilotability);
            pilotObject.description=pilots[j]["ability_"+language];
            

            element.appendChild(newpilot);

            array2export.push(pilotObject);
            

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
            let upgradeObject = {
            type:'upgrade',
            name:'',
            cost:0,
            maxPerSquad:8,
            typeShipUpgrade:'',
            skill:0,
            faction:'',
            description:'',
            charge:0,
            force:0,
            optionalSlots:[],
            title:'',
            }
            let newupgrade = document.createElement('p');
            newupgrade.setAttribute("class", "upgrade faction");
        

            let limitNumber = "";
            switch(upgrades[i]['max_per_squad']){
                case 1 : 
                limitNumber = "*";
                upgradeObject.maxPerSquad=1;
                break;
                case 2 :
                limitNumber = "**";
                upgradeObject.maxPerSquad=2;

                break; 
                case 3 :
                limitNumber = "***";
                upgradeObject.maxPerSquad=3;
                break; 
                default : 
                break;  
            }
        
            let newupgradename = document.createElement('div');
        newupgradename.setAttribute("class", "upgrade name");
        newupgradename.innerHTML = limitNumber+" "+upgrades[i]["name_"+language];
        newupgrade.appendChild(newupgradename);
        upgradeObject.name=upgrades[i]["name_"+language];

        
        let newupgradetype = document.createElement('div');
        let newupgradetypelogo = document.createElement('div');
        newupgradetype.setAttribute("class", "upgrade type");
        newupgradetype.innerHTML = upgrades[i]["slot"]; 
        newupgradetypelogo.setAttribute('src',  'img/'+upgrades[i]["slot"]+'.png')       
        newupgrade.appendChild(newupgradetype);
        newupgrade.appendChild(newupgradetypelogo);
        upgradeObject.typeShipUpgrade=upgrades[i]["slot"];

        let newupgradepoints = document.createElement('div');
        newupgradepoints.setAttribute("class", "upgrade points");
        newupgradepoints.innerHTML = upgrades[i]["points"];        
        newupgrade.appendChild(newupgradepoints);
        upgradeObject.cost=upgrades[i]["points"];

        let newupgradeeffect = document.createElement('div');
        newupgradeeffect.setAttribute("class", "upgrade ability");
        newupgradeeffect.innerHTML = upgrades[i]["effect_"+language];
        newupgrade.appendChild(newupgradeeffect);
        upgradeObject.description=upgrades[i]["effect_"+language];

        element.appendChild(newupgrade);

        upgradeObject.force=upgrades[i]["force"];
        upgradeObject.charge=upgrades[i]["charge"][0]+" "+upgrades[i]["charge"][2];
        array2export.push(upgradeObject);


        
        }
    }
  
}

function createArray() {
    const table = document.createElement("table");
    const cles = ["type","name","cost","maxQuantity","typeShipUpgrade","skill","charge","force","slots","title"]
    
    
    // En-tête
  const thead = table.createTHead();
  const ligneEntete = thead.insertRow();
  for (const cle of cles) {
    const th = document.createElement("th");
    th.textContent = cle;
    ligneEntete.appendChild(th);
  }

  // Corps
  const tbody = table.createTBody(); 
  for (i=1;i<array2export.length;i++){
    const ligne = tbody.insertRow();
    for (const cle of cles) {
      const cellule = ligne.insertCell();
      cellule.textContent = array2export[cle] ?? "";
    }
  }

  return table;
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

function ouvrirTableauDansOnglet() {
  const table = createArray();

  const page = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>`+ array2export[0] + `</title>
  <style>
    body { font-family: sans-serif; margin: 2rem; }
    table { border-collapse: collapse; }
    th, td { border: 1px solid #ccc; padding: 0.5rem 1rem; text-align: left; }
    th { background: #f0f0f0; }
  </style>
</head>
<body>
  ${table.outerHTML}
</body>
</html>`;

  const blob = new Blob([page], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");

  // Libère la mémoire un peu plus tard, une fois la page chargée
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

document.getElementById("tableau").addEventListener("click", () => {
  ouvrirTableauDansOnglet();
});

