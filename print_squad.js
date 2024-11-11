let pilotdata = [[],[],[],[],[],[],[],[]];
let indexes = [];
let hash2 = '';

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




(async () => {
    
    try {
        
        ships = await fetchData(requestURLships);
        chassis = await fetchData(requestURLchassis);
        pilots = await fetchData(requestURLpilots);
        upgrades = await fetchData(requestURLupgrades);
        leaders = await fetchData(requestURLleaders);
           
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function getIndexesFromHash() { // Function to get the indexes from the URL hash
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    indexes = hash.split(',');

    //If there are any undefined values (for example no Pilot ID), we'll extract the value undefined from the aray indexes
    for (k=0 ; k<indexes.length ; k++){
        if(indexes[k]==='undefined'){
            indexes.splice(k, 1);
        }
    }

    return indexes; // The array 'indexes' contains ! ["leaderID","pilotID+u+upgrade1ID+u+upgrade2ID","pilotID"....]
}


async function displayLeader(){
const lID = indexes[0];

const leaderName = document.getElementById('lname');
const faction = document.getElementById('leaderfaction');
const leaderAbility = document.getElementById('lability');
const leaderCharge = document.getElementById('lcharge');
leaderName.textContent = leaders[lID]['leadername'];
for(i=0; i<3; i++){
    if(leaders[lID]['leaderfaction'][i] !== ""){
    let factionimg = document.createElement('img');
    factionimg.setAttribute('class', 'factionimg');
    factionimg.setAttribute("src",'img/'+leaders[lID]['leaderfaction'][i]+'mini.jpg') ;
    faction.appendChild(factionimg);
    }
}

leaderAbility.textContent = leaders[lID]['leaderability'];
const nbrOfLeaderCharges = leaders[lID]['charge'][0];
console.log(nbrOfLeaderCharges);

for(j=0; j<nbrOfLeaderCharges ;j++){ //We display as many charge logos as the number of charges the leader has
        switch (leaders[lID]['charge'][1]) {
        case "Red" :
            newcharge = document.createElement('img');
            newcharge.setAttribute("class","chargeimg");
            newcharge.setAttribute("src","img/chargestatRed.jpg");
            leaderCharge.appendChild(newcharge);
            break;
        case "0" :
            newcharge = document.createElement('img');
            newcharge.setAttribute("class","chargeimg");
            newcharge.setAttribute("src","img/chargestat.jpg");
            leaderCharge.appendChild(newcharge);
            break;
        default :
        console.log("This leader charge configuration has not been programmed in displayLeader() from print_squad.js. There also might be a mistake in leaders.json.")
        break;
    }
} 

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

function removeElementById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
        
    } else {
        console.log(`No element found with ID "${id}".`);
    }
}


function getPilotData(x){ //we take indexes[x], and we are going to extract all datas from pilot x
    const pilotx = indexes[x].split('u');
    
    pilotdata[x] = pilotx;
}

/*function displayPilotActions(x){

}
*/
function displayPilot(x){ 
    console.log(`Displaying pilot for index ${x}`);
    
    const pilotSkill = document.getElementById('pskill'+x);
    const pilotFaction = document.getElementById('plogo'+x);
    const pilotName = document.getElementById('name'+x);
    const pilotShip = document.getElementById('ship'+x);
    const pilotCost = document.getElementById('cost'+x);
    
    const pilotstat = document.getElementById('stat'+x);

    const pilotAttack1 = document.getElementById('attack1'+x);
    const pilotAttack2 = document.getElementById('attack2'+x);
    const pilotAgility = document.getElementById('agility'+x);
    const pilotHull = document.getElementById('hull'+x);
    const pilotShield = document.getElementById('shield'+x);
    const pilotAbility = document.getElementById('ability'+x);
    const pilotForce = document.getElementById('force'+x);
    const pilotCharge = document.getElementById('charge'+x);
    const pilotActions = document.getElementById('actions'+x);
    
    
    getPilotData(x);
    const pid = pilotdata[x][0] //We store the PilotID we got from indexes and stored into pilotdata thanks with pilotdata()
    pilotSkill.textContent = pilots[pid]['skill'];
    pilotFaction.setAttribute("src",'img/'+pilots[pid]['faction']+'mini.jpg');
    pilotName.textContent = pilots[pid]['name'];
    pilotAbility.textContent = pilots[pid]['ability']; 
    pilotCost.textContent = pilots[pid]['points'];
        
    const sid = pilots[pid]['shipId']; //We store the ship ID
    pilotShip.textContent = ships[sid]['name'];
    
    //Attack 1 and Attack 2
    pilotstat.innerHTML = '<span class="attack">' +ships[sid]["attack"][0][1] + '</span> <img src="img/attack'+ships[sid]["attack"][0][0] +'.jpg" class="logo"/>' ;
    if(ships[sid]["attack"].length === 2){
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="attack">' + ships[sid]["attack"][1][1] + '</span> <img src="img/attack'+ships[sid]["attack"][1][0] +'.jpg" class="logo"/>' ;
    }
    //Agility
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="agility">' + ships[sid]["agility"] + '</span> <img src="img/agility.jpg" class="logo"/>' ;

    //Hull
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="hull">' + ships[sid]["hull"] + '</span> <img src="img/hull.jpg" class="logo"/>' ;

    //shield
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="shield">' + ships[sid]["shields"] + '</span> <img src="img/shield.jpg" class="logo"/>' ;

    
    //displayPilotActions(x);
    
    for(j=0; j<pilots[pid]['charge'][0];j++){ //We are going to display as many charge pictures as the charge value of the pilot
        newcharge = document.createElement('img');
        newcharge.setAttribute("class","chargeimg");
        newcharge.setAttribute("src","img/chargestat.jpg");
        newchargeEvolution = document.createElement('img'); // the index 1 of the charge tables indicates if it's recurring or not. We have to display it, and there's a jpg for every case.
        newchargeEvolution.setAttribute("class","chargeimg");
        switch(pilots[pid]['charge'][1]){
            case "+" :
                newchargeEvolution.setAttribute("src","img/chargeplus.jpg");
                break;
            case "-" :   
            newchargeEvolution.setAttribute("src","img/chargeminus.jpg");
                break;
            default :
            break;
        }
        
        pilotCharge.appendChild(newcharge);
        pilotCharge.appendChild(newchargeEvolution);

    }
   
    
   
    
     
    for(f=0 ; f<pilots[pid]['force'] ; f++){ //We are going to display as many force pictures as the charge value of the pilot
        
        let newforce = document.createElement('img');
        newforce.setAttribute("class","forceimg");
        newforce.setAttribute("src","img/forcestat.jpg");
        pilotForce.appendChild(newforce);
       
      
    } 
  

    for(i=1; i<13 ; i++){ //We now tackle upgrades equipped. we start i at 1 because at 0, there's the pilotID
        if(i<pilotdata[x].length){
        let uid = pilotdata[x][i];
        document.getElementById('upgrade'+x+'_'+(i-1)).textContent = upgrades[uid]['name'];
        let nbrcharge = upgrades[uid]['charge'][0];
        
        for(j=0; j<nbrcharge;j++){ //is going to display as many charge logos as the number of charges the upgrade has
            newcharge = document.createElement('img');
            newcharge.setAttribute("class","chargeimg");
            newcharge.setAttribute("src","img/chargestat.jpg");
            document.getElementById('upgrade'+x+'_'+(i-1)).appendChild(newcharge);
            switch (upgrades[uid]['charge'][1]) {
                case "+" :
                    recurring = document.createElement('img');
                    recurring.setAttribute("class","chargeimg");
                    recurring.setAttribute("src","img/chargeplus.jpg");
                    document.getElementById('upgrade'+x+'_'+(i-1)).appendChild(recurring);
                    break;
                case "-" :
                    recurring = document.createElement('img');
                    recurring.setAttribute("class","chargeimg");
                    recurring.setAttribute("src","img/chargeminus.jpg");
                    document.getElementById('upgrade'+x+'_'+(i-1)).appendChild(recurring);
                    break;
                default :
                break;
            }
        }
    }else{
        removeElementById("upgrade"+x+"_"+(i-1));
    }
    }
    
    //And now, let's display thoses chassis abilities !
    let cid = ships[sid]['chassis']; //cid is an array this time!!
    switch(cid.length){
        case 1 :
            document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[0]]['effect1'];
            removeElementById("chassis"+x+"_2");
            removeElementById("chassis"+x+"_3");
            break;
        case 2 : 
            if(chassis[cid[0]]["nbrOfEffectsnbr"]===3){ //rules to display several chassis on 1 ship. We have to take in account the case where we need more than 3 div to display thoses abilities. In that case, we display 2 chassis ability in chassis0
                document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[1]]['effect1'] <br> chassis[cid[0]]['effect1']; 
                document.getElementById('chassis'+x+'_'+2).innerHTML = chassis[cid[0]]['effect2']; 
                document.getElementById('chassis'+x+'_'+3).innerHTML = chassis[cid[0]]['effect3']; 
            }
            if(chassis[cid[1]]["nbrOfEffectsnbr"]===3){ //rules to display several chassis on 1 ship. We have to take in account the case where we need more than 3 div to display thoses abilities. In that case, we display 2 chassis ability in chassis0
                document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[0]]['effect1'] <br> chassis[cid[1]]['effect1']; 
                document.getElementById('chassis'+x+'_'+2).innerHTML = chassis[cid[1]]['effect2']; 
                document.getElementById('chassis'+x+'_'+3).innerHTML = chassis[cid[1]]['effect3']; 
            }
            if((chassis[cid[0]]["nbrOfEffectsnbr"]===1) && (chassis[cid[1]]["nbrOfEffectsnbr"]===1)){ //if the 2 chassis abilities has 1 effect, then we display then into chassis2 and chassis3 and we leave chassis1 blank
                document.getElementById('chassis'+x+'_'+2).innerHTML = chassis[cid[0]]['effect1'];
                document.getElementById('chassis'+x+'_'+3).innerHTML = chassis[cid[1]]['effect1'];
                removeElementById("chassis"+x+"_1");

            }
            break;
        default :
            break;
        }

 }
 
 
 
    


async function executeFunctions(){ //on crée une fonction asynchrone pour que tout se lance dans l'ordre
    console.log(ships);
    console.log(chassis);
    console.log(pilots);
    console.log(upgrades);
    console.log(leaders);    
    await getIndexesFromHash();
    await displayLeader();
    
    for(k=1; k<indexes.length; k++){
        
            await displayPilot(k); 
         
        
        }
                
    
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
    
        executeFunctions(); // on execute la fonction ultime!!!!!!!!!
        for (k=indexes.length ; k<9 ; k++ ){ //on va supprimer les éléments des pilotes qui n'ont pas été sélectionnés
            removeElementsByClass(k);
        }
        
        
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();

// prepare the hash to add at the end of the web adress for Print_upgrades
function hasher(){

for (i=1 ; i<indexes.length ; i++){
    for ( j=1 ; j<pilotdata[i].length ; j++){
            hash2 += pilotdata[i][j] + ',';
       }
       hash2 = hash2.slice(0,-1) ; //removing the additionnal coma
       hash2 += 'p';
    }
    hash2 = hash2.slice(0,-2); //on retire le ',p' final
}


//we define now the button to print upgrades
const linkToPrintUpgrades = document.getElementById('print_upgrades');
linkToPrintUpgrades.addEventListener('click', function(e){
    e.preventDefault(); 
    hasher();   
    window.location.href =  `print_upgrades.html?#${hash2}`
})















