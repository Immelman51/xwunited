/*let indexes;

let requestURLships = "https://raw.githubusercontent.com/Immelman51/xwunited/main/ships.json";

let requestURLpilots = "https://raw.githubusercontent.com/Immelman51/xwunited/main/pilots.json";


let ships, pilots;

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
        pilots = await fetchData(requestURLpilots);
        

async function getIndexesFromHash() { // Function to get the indexes from the URL hash
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    indexes = hash.split(',');

    return indexes; // The array 'indexes' contains ! ["upgrade1ID,upgrade2ID",...]
}

async function getUpgradeData(){ //we fill upgradeData with all the upgrades Id
    
    for (j=0 ; j<indexes.length ; j++){
    const upgradex = indexes[j].split('u');
    indexes[j]=upgradex;
    console.log('upgradex : '+upgradex);
    }
  console.log('indexes : '+indexes)
}



async function displaybases() { //This is the function that will display all the ship bases needed in the squad
    bases = document.getElementById('bases');
    for (i=1 ; i<indexes.length ; i++){
        if(indexes[i]!==""){
            let pid = indexes[i];
            let sid = pilots[pid]['shipId'];
            let sSize = ships[sid]['base'];
            newbase = document.createElement('img');
            newbase.setAttribute('class',sSize);
            newbase.setAttribute('src','img/pilots/base/'+indexes[i][0]+'.png');
            bases.appendChild(newbase);
            
        }
    }
}

async function executeFunctions(){ //on crée une fonction asynchrone pour que tout se lance dans l'ordre
       
         
        getIndexesFromHash();
        getUpgradeData();
        displaybases()
                    
        
    }


//on execute enfin la fonction finale
executeFunctions();

    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();*/

let indexes;
let ships, pilots;

let requestURLships = "https://raw.githubusercontent.com/Immelman51/xwunited/main/ships.json";
let requestURLpilots = "https://raw.githubusercontent.com/Immelman51/xwunited/main/pilots.json";

async function fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function getIndexesFromHash() {
    const hash = window.location.hash.substring(1);
    indexes = hash.split(',');
    return indexes;
}

async function getUpgradeData() {
    for (let j = 0; j < indexes.length; j++) {
        const upgradex = indexes[j].split('u');
        indexes[j] = upgradex[0];
        console.log('upgradex : ' + upgradex);
    }
    console.log('indexes : ' + indexes);
}

async function displaybases() {
    let bases = document.getElementById('bases');
    for (let i = 1; i < indexes.length; i++) {
        if (indexes[i] !== "") {
            let pid = indexes[i];
            let sid = pilots[pid]['shipId'];
            let sSize = ships[sid]['base'];
            let newbase = document.createElement('img');
            newbase.setAttribute('class', 'wrapper '+sSize);
            newbase.setAttribute('src', 'img/pilots/base/' + pid + '.png');
            bases.appendChild(newbase);
        }
    }
}

(async () => {
    try {
        ships = await fetchData(requestURLships);
        pilots = await fetchData(requestURLpilots);

        await getIndexesFromHash();
        await getUpgradeData();
        await displaybases();
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();

