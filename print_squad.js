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

// Function to get the indexes from the URL hash
function getIndexesFromHash() {
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    const indexes = hash.split(',');

    return indexes;
}
// The array 'indexes' contains ! ["leaderID","pilotID+u+upgrade1ID+u+upgrade2ID","pilotID"....]

window.onload = getIndexesFromHash();


