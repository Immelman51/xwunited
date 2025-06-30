let requestURLupgrades = "https://raw.githubusercontent.com/Immelman51/xwunited/main/ships.json";
let requestURLpilots = "https://raw.githubusercontent.com/Immelman51/xwunited/main/pilots.json";

let pilots;
let ships;

let indexes;

let upgradeData = [];

async function fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

(async () => {
    try {
        
        pilots = await fetchData(requestURLpilots);
        ships = await fetchData(requestURLupgrades);
        
        
        

   

async function getIndexesFromHash() { // Function to get the indexes from the URL hash
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    indexes = hash.split('p');

    return indexes; // The array 'indexes' contains ! ["upgrade1ID,upgrade2ID",...]
}

async function getUpgradeData(){ //we fill upgradeData with all the upgrades Id
    for (j=0 ; j<indexes.length ; j++){
    const upgradex = indexes[j].split(',');
    upgradeData.push(upgradex);
    }
}



async function displayDials() { //This is the function that will display all the ships dials
    dials = document.getElementById('dials');
    for (i=0 ; i<indexes.length ; i++){
        if(indexes[i]!==""){
            newpilot = document.createElement('img');
            newpilot.setAttribute('class','dials');
            newpilot.setAttribute('src','');
            
                }
            }
            dials.appendChild(newpilot);
        }
 
        
        
    

async function executeFunctions(){ //on crée une fonction asynchrone pour que tout se lance dans l'ordre
        console.log(pilots);
        console.log(upgrades);
         
        await getIndexesFromHash();
        await getUpgradeData();
        await displayDials()
                    
        
    }


//on execute enfin la fonction finale
executeFunctions();

} catch (error) {
    console.error("Failed to fetch data: ", error);
}
})();
