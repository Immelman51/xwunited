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
        
        console.log(ships);
        console.log(chassis);
        console.log(pilots);
        console.log(upgrades);
        console.log(leaders);

        // Vous pouvez maintenant utiliser les variables ships, chassis, pilots, et upgrades ici ou dans d'autres fonctions
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();
 let indexes = [];
// Function to get the indexes from the URL hash
function getIndexesFromHash() {
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    indexes = hash.split(',');

    return indexes;
}
// The array 'indexes' contains ! ["leaderID","pilotID+u+upgrade1ID+u+upgrade2ID","pilotID"....]


function displayLeader(){
const lID = indexes[0];

const leaderName = document.getElementById('lname');
const faction1 = document.getElementById('faction1');
const faction2 = document.getElementById('faction2');
const faction3 = document.getElementById('faction3');
const leaderAbility = document.getElementById('lability');
const leaderCharge = document.getElementById('lcharge');
leaderName.textContent = leaders[lID]['leadername'];
faction1.setAttribute("src",'img/'+leaders[lID]['leaderfaction'][0]+'mini.jpg') ;
faction2.setAttribute("src",'img/'+leaders[lID]['leaderfaction'][1]+'mini.jpg') ;
faction3.setAttribute("src",'img/'+leaders[lID]['leaderfaction'][2]+'mini.jpg') ;
leaderAbility.textContent = leaders[lID]['leaderability'];
leaderCharge.textContent = leaders[lID]['charge'];

}

function displayPilot(x){
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
    const pilotUpgrade0 = document.getElementById('upgrade'+x+'_0');
    const pilotUpgrade1 = document.getElementById('upgrade'+x+'_1');
    const pilotUpgrade2 = document.getElementById('upgrade'+x+'_2');
    const pilotUpgrade3 = document.getElementById('upgrade'+x+'_3');
    const pilotUpgrade4 = document.getElementById('upgrade'+x+'_4');
    const pilotUpgrade5 = document.getElementById('upgrade'+x+'_5');
    const pilotUpgrade6 = document.getElementById('upgrade'+x+'_6');
    const pilotUpgrade7 = document.getElementById('upgrade'+x+'_7');
    const pilotChassis1 = document.getElementById('chassis'+x+'_1');
    const pilotChassis2 = document.getElementById('chassis'+x+'_2');

}



window.onload = function(){
    getIndexesFromHash();
    displayLeader();
}



