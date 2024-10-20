let pilotdata = [[],[],[],[],[],[],[],[]];
let indexes = [];

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

for(j=0; j<leaders[lID]['charge'];j++){ //We display as many charge logos as the number of charges the leader has
    newcharge = document.createElement('img');
    newcharge.setAttribute("class","chargeimg");
    newcharge.setAttribute("src","img/chargestat.jpg");
    leaderCharge.appendChild(newcharge);

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
    
    pilotAttack1.innerHTML = ''; //We empty the DOM elements because it can freeze the page if we don't
    pilotAttack2.innerHTML = ''; //We empty the DOM elements because it can freeze the page if we don't
    pilotAttack1.textContent = ships[sid]["attack"][0][1]+' '; // "attack": [["F",3],["B",3]],
    attack1img = document.createElement('img');
    attack1img.setAttribute("class","logo");
    attack1img.setAttribute("src","img/attack"+ships[sid]["attack"][0][0]+".jpg");
    pilotAttack1.appendChild(attack1img);
    if(ships[sid]["attack"].length === 2){
        pilotAttack2.textContent = ships[sid]["attack"][1][1]+' ';
        attack2img = document.createElement('img');
        attack2img.setAttribute("class","logo");
        attack2img.setAttribute("src","img/attack"+ships[sid]["attack"][1][0]+".jpg");
        pilotAttack2.appendChild(attack2img);
    }
   
    pilotAgility.innerHTML = ''; //We empty the DOM elements because it can freeze the page if we don't
    pilotAgility.textContent = ships[sid]["agility"]+' ';
    agilityimg = document.createElement('img');
    agilityimg.setAttribute("class","logo");
    agilityimg.setAttribute("src","img/agility.jpg");
    pilotAgility.appendChild(agilityimg);
   
    pilotHull.innerHTML = ''; //We empty the DOM elements because it can freeze the page if we don't
    pilotHull.textContent = ships[sid]["hull"]+' ';
    hullimg = document.createElement('img');
    hullimg.setAttribute("class","logo");
    hullimg.setAttribute("src","img/hull.jpg");
    pilotHull.appendChild(hullimg);
  
    pilotShield.innerHTML = ''; //We empty the DOM elements because it can freeze the page if we don't
    pilotShield.textContent = ships[sid]["shields"]+' ';
    shieldimg = document.createElement('img');
    shieldimg.setAttribute("class","logo");
    shieldimg.setAttribute("src","img/shield.jpg");
    pilotShield.appendChild(shieldimg);
   
    //displayPilotActions(x);
    
    pilotCharge.innerHTML = ''; // Vide l'élément avant d'ajouter de nouveaux éléments 
    for(j=0; j<pilots[pid]['charge'][0];j++){ //We are going to display as many charge pictures as the charge value of the pilot
        newcharge = document.createElement('img');
        newcharge.setAttribute("class","chargeimg");
        newchage.setAttribute("src","img/chargestat.jpg");
        newchargeEvolution = document.createElement('img'); // the index 1 of the charge tables indicates if it's recurring or not. We have to display it, and there's a jpg for every case.
        newchargeEvolution.setAttribute("class","chargeimg");
        switch(pilots[pid]['charge'][1]){
            case "+" :
                newchageEvolution.setAttribute("src","img/chargeplus.jpg");
                break;
            case "-" :   
            newchageEvolution.setAttribute("src","img/chargeminus.jpg");
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
  

    for(i=1; i<pilotdata[x].length; i++){ //We now tackle upgrades equipped. we start i at 1 because at 0, there's the pilotID
        let uid = pilotdata[x][i];
        document.getElementById('upgrade'+x+'_'+(i-1)).textContent = upgrades[uid]['name'];
        let nbrcharge = upgrades[uid]['charge'];
        for(j=0; j<nbrcharge;j++){ //is going to display as many charge logos as the number of charges the upgrade has
            newcharge = document.createElement('img');
            newcharge.setAttribute("class","chargeimg");
            newcharge.setAttribute("src","img/chargestat.jpg");
            document.getElementById('upgrade'+x+'_'+(i-1)).appendChild(newcharge);
        }
    }
    
    //And now, let's display thoses chassis abilities !
    let cid = ships[sid]['chassis']; //cid is an array this time!!
    
    for(i=0; i<cid.length; i++){
    document.getElementById('chassis'+x+'_'+i).innerHTML = chassis[cid[i]]['effect1']; //this covers 2 cases and a half : 1) there's only 1 chassis ability with a simple effect ; 2) there are 2 chassis abilities : 3) if the chassis ability has 2 effects, then it writes the first effect
    }
    if(chassis[cid[0]]["nbrOfEffectsnbr"]===2){
    document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[0]]['effect2']; //this finishes the case 3) just above : we write the second effect of the chassis ability   
    }
   
    console.log(`Pilot ${x} displayed successfully`); 
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
        
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();












