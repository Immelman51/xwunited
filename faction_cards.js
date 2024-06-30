
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
function displayLeaders() { //on va d'abord faire afficher les leaders de la faction sélectionnée
    
    let pLeader = document.createElement('div'); //permet d'accéder à la section leaders via le menu du header
    pLeader.setAttribute("id", "leaders");
    
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
        newleaderability.textContent = leaders[i]["leaderability"];
        newleaderability.setAttribute("class", "leader ability");
        newleader.appendChild(newleaderability);

        document.body.appendChild(newleader);
        
    }
}
};
function displayShipsandPilots() { //on va d'abord faire afficher les ships et les pilots associés

    let pPilots = document.createElement('div'); //permet d'accéder à la section pilots via le menu du header
    pPilots.setAttribute("id", "pilots");

for (let i=0 ; i<ships.length; i++){
    if (ships[i]["factions"].includes(factionSelected)){
        let newship = document.createElement('p');
        newship.setAttribute("class","ship");

        let newshipname = document.createElement('div');
        newshipname.setAttribute("class", "ship name");
        newshipname.innerHTML = ships[i]["name"];        
        newship.appendChild(newshipname);

        let newshipattack = document.createElement('div');
        newshipattack.setAttribute("class", "ship attack");
        let attributesNames = ships[i].getAttributeNames(); //on va voir tester les différents les noms des différents noms d'attributs pour détecter ceux qui visent les attaques
        for (let j = 0 ; attributesNames.length ; j++){
            switch(attributesNames[j]){
                case 'attack': 
                let attack1 = createElement('div');
                attack1.setAttribute("src",'img/attack.jpg');
                attack1.innerHTML = ships[i]["attack"];
                break;
                case 'attackt' :
            }
        }
        newship.appendChild(newshipattack);

        for (let j=0; j<3 ; j++){
            let factions = leaders[i]["leaderfaction"][j];
            let factionlogo = document.createElement("div");
            factionlogo.setAttribute("class", "leader faction");
            factionlogo.setAttribute("src",'img/'+factions+'mini.jpg');
            newleader.appendChild(factionlogo);
        }
        let newleaderability = document.createElement("div");
        newleaderability.textContent = leaders[i]["leaderability"];
        newleaderability.setAttribute("class", "leader ability");
        newleader.appendChild(newleaderability);

        document.body.appendChild(newleader);
    }
}

}

// Load all data and then execute the rest
loadAllData();
