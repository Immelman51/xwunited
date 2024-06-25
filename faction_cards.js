
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
        console.log(leaders);
        console.log(ships);
        console.log(chassis);
        console.log(pilots);
        console.log(upgrades);

        // Vous pouvez maintenant utiliser les variables ships, chassis, pilots, et upgrades ici ou dans d'autres fonctions
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();

let factionSelected = "";

if(window.location.hash) {
    // Mettez le hash dans une variable et supprimer le caractère #
    factionSelected = window.location.hash.substring(1);
    
} else {
    // Aucun hash n'est trouvé
}

for (let i = 0; i<leaders.length; i++);
    if (leaders[i]["leaderfaction"].includes(factionSelected)){
        let newleader = document.createElement('p');
        newleader.setAttribute("id", "leader"+i);
        newleader.setAttribute("class", "leader");
        let newleadername = document.createElement('h1');
        newleadername.texcontent = leaders[i]["leadername"];
        let newleaderability = document.createElement("div");
        newleaderability.textContent = leaders[i]["leaderability"];
        let
    }