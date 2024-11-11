let requestURLupgrades = "https://raw.githubusercontent.com/Immelman51/xwunited/main/upgrades.json";

let upgrades;

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
        
        upgrades = await fetchData(requestURLupgrades);
        
        
        

   

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



async function displayUpgradeDescription() { //This is the function that will display all the updates selected in the squad
    descriptions = document.getElementById('descriptions');
    for (i=0 ; i<indexes.length ; i++){
        newpilot = document.createElement('div');
        newpilot.setAttribute('class','pilot');
        for ( j=0 ; j<upgradeData[i].length ; j++){
            upg = upgrades[upgradeData[i][j]]
            newupgrade = document.createElement('div');
            newupgrade.setAttribute('class', 'upgrade');
            newupgrade.innerHTML = '<b>' + upg['name'] +'</b>' + ' (' + upg['slot'] + ') - ';
            switch (upg['slot']) {
                case 'Canon' :
                case 'Turret' :
                case 'Torpedo' :
                case 'Missile' :
                case 'Weapon Hardpoint' :
                    newupgrade.innerHTML +=  'Portée : ' + upg['range'] + ' - ';
                    newupgrade.innerHTML += '<img src="img/attack'+ upg['attack'][0] +'.jpg" class="logo"/> ' + upg['attack'][1] + '<br>';
                default :
                    newupgrade.innerHTML += upg['effect'];
            }
            newpilot.appendChild(newupgrade);   
            }
            descriptions.appendChild(newpilot);
        }
        
        
    }

async function executeFunctions(){ //on crée une fonction asynchrone pour que tout se lance dans l'ordre
        
        console.log(upgrades);
         
        await getIndexesFromHash();
        await getUpgradeData();
        await displayUpgradeDescription()
                    
        
    }


//on execute enfin la fonction finale
executeFunctions();

} catch (error) {
    console.error("Failed to fetch data: ", error);
}
})();
