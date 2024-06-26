
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
        displayShipsandPilots();

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

for (let i=0 ; i<ships.length; i++){ //on va afficher d'abord le vaisseau/chassis.... puis après les pilotes associés
    if (ships[i]["factions"].includes(factionSelected)){
        let newship = document.createElement('p');
        newship.setAttribute("class","ship");

        let newshipname = document.createElement('div');
        newshipname.setAttribute("class", "ship name");
        newshipname.innerHTML = ships[i]["name"];        
        newship.appendChild(newshipname);

        let newshipattack = document.createElement('div');
        newshipattack.setAttribute("class", "ship attack");
        let attributesNames = Object.keys(ships[i]); //on va voir tester les différents les noms des différents noms d'attributs pour détecter ceux qui visent les attaques
        for (let j = 0 ; j<attributesNames.length ; j++){
            let attack1 = null;
            switch(attributesNames[j]){
                case 'attack': 
                    attack1 = document.createElement('div');
                    attack1.setAttribute("src",'img/attack.jpg');
                    attack1.innerHTML = ships[i]["attack"];
                break;
                case 'attackt' :
                    attack1 = document.createElement('div');
                    attack1.setAttribute("src",'img/attackt.jpg');
                    attack1.innerHTML = ships[i]["attackt"];
                    break;
                case 'attackb' :
                    attack1 = document.createElement('div');
                    attack1.setAttribute("src",'img/attackb.jpg');
                    attack1.innerHTML = ships[i]["attackb"];
                    break;
                case 'attackbull' :
                    attack1 = document.createElement('div');
                    attack1.setAttribute("src",'img/attackbull.jpg');
                    attack1.innerHTML = ships[i]["attackbull"];
                    break;
                case 'attackf' :
                    attack1 = document.createElement('div');
                    attack1.setAttribute("src",'img/attackf.jpg');
                    attack1.innerHTML = ships[i]["attackf"];
                    break;
                default :
                    break;
            }
        }
        newship.appendChild(newshipattack);

        let newshipagility = document.createElement('div');
        newshipagility.setAttribute("class", "ship agility");
        newshipagility.setAttribute("src", 'img/agility.jpg');
        newshipagility.innerHTML = ships[i]["agility"];        
        newship.appendChild(newshipagility);

        let newshiphull = document.createElement('div');
        newshiphull.setAttribute("class", "ship hull");
        newshiphull.setAttribute("src", 'img/hull.jpg');
        newshiphull.innerHTML = ships[i]["hull"];        
        newship.appendChild(newshiphull);

        let newshipshield = document.createElement('div');
        newshipshield.setAttribute("class", "ship shield");
        newshipshield.setAttribute("src", 'img/shield.jpg');
        newshipshield.innerHTML = ships[i]["shield"];        
        newship.appendChild(newshipshield);

        
        let newshipsize = document.createElement('div');
        newshipsize.setAttribute("class", "ship size");
        switch(ships[i]['base'][0]){
            case 'small' :
                newshipsize.setAttribute("src", 'img/smallbase.jpg');
                break;
            case 'medium' :
                newshipsize.setAttribute("src", 'img/mediumbase.jpg');
                break;
            case 'large' :
                newshipsize.setAttribute("src", 'img/largebase.jpg');
                break;
            case 'huge' :
                newshipsize.setAttribute("src", 'img/hugebase.jpg');
                break;
            default : 
                break;
        }
        newship.appendChild(newshipsize);

        for (let m=0; m<ships[i]["slots"]; m++){ //on va développer tous les slots associés au vaisseau
            newshipslots = document.createElement('div');
            newshipslots.setAttribute("class", "ship slot");
            newshipslots.setAttribute("src", 'img/'+ships[i]["slots"][m]+'.jpg');
            newpilot.appendChild(newshipslots);
        } 


    //On va mettre des liens pour afficher les actions, les manoeuvres ... sous forme de pop-up
        let newshipothers = document.createElement('div');
        let shipactions = document.createElement('a');
        shipactions.innerHTML = "Actions";
        newshipothers.appendChild(shipactions);    
        let shipmaneuvers = document.createElement('a');
        shipmaneuvers.innerHTML = "Maneuvers";
        newshipothers.appendChild(shipmaneuvers);
shipactions.addEventListener('click', function() {
    displayactions(ships[i]['id']); //on stocke l'ID pour retrouver rapidement les actions dans l'objet
});
shipmaneuvers.addEventListener('click', function(){
    displaymaneuvers(ships[i]['id']); //on stocke l'ID pour retrouver rapidement les manoeuvres dans l'objet
});    

// On a fini de décrire le ship   
// Maintenant on va afficher les pilotes !! Grosse boucle for ! et en voilà une autre qui l'est tout autant
// on est toujours dans la boucle if qui teste que le vaisseau appartient à la faction
    for (let j = 0; j<pilots.length; j++){
        if (pilots[j]['shipID']===ships[i]['id']){
            let newpilot = document.createElement('p');
            newpilot.setAttribute("class","pilot");
            
            let limitNumber = "";
            switch(pilots[j]['max_per_squad']){
                case '1' : 
                limitNumber = "*";
                break;
                case '2' :
                limitNumber = "**";
                break; 
                case '3' :
                limitNumber = "***";
                break; 
                default : 
                limitNumber = "";
                break;  
            }


            let newpilotname = document.createElement('div');
            newpilotname.setAttribute("class", "pilot name");
            newpilotname.innerHTML = limitNumber+" "+pilots[j]["name"]+ " ("+pilots[j]["skill"]+")";   // on écrit le limitNumber = Max_per_Squad avant le nom du pilote  , puis le skill entre parenthèses   
            newpilot.appendChild(newpilotname);

            if (pilots[j]["force"]>0){
                let newpilotforce = document.createElement('div');
                newpilotforce.setAttribute("class", "pilot force");
                newpilotforce.setAttribute("src", 'img/force.jpg');
                newpilotforce.innerHTML = pilots[j]["force"];
                newpilot.appendChild(newpilotforce);
            }
            if (pilots[j]["charge"]>0){
                let newpilotcharge = document.createElement('div');
                newpilotcharge.setAttribute("class", "pilot charge");
                newpilotcharge.setAttribute("src", 'img/charge.jpg');
                newpilotcharge.innerHTML = pilots[j]["charge"];
                newpilot.appendChild(newpilotcharge);
            }

            let newpilotvalue = document.createElement('div');
            newpilotvalue.setAttribute("class", "pilot value");
            newpilotvalue.innerHTML = pilots[j]["points"];
            newpilot.appendChild(newpilotvalue);

            let newpilotloadout = document.createElement('div');
            newpilotloadout.setAttribute("class", "pilot loadout");
            newpilotloadout.innerHTML = pilots[j]["loadout"];
            newpilot.appendChild(newpilotloadout);

            let newpilottitle = document.createElement('div');
            newpilottitle.setAttribute("class", "pilot title");
            newpilottitle.innerHTML = pilots[j]["title"];
            newpilot.appendChild(newpilottitle);

            
            for (let k=0; k<pilots[j]["slots"]; k++){ //on va développer tous les slots du pilote
                newpilotslots = document.createElement('div');
                newpilotslots.setAttribute("class", "pilot slot");
                newpilotslots.setAttribute("src", 'img/'+pilots[j]["slots"][k]+'.jpg');
                newpilot.appendChild(newpilotslots);
            } 
            
            
            

            let newpilotability = document.createElement('div');
            newpilotability.setAttribute("class", "pilot ability");
            newpilotability.innerHTML = pilots[j]["ability"];
            newpilot.appendChild(newpilotability); 

        }
    }        
    }
}

}



function displayactions(shipID) {

}

function displaymaneuvers(shipID) {

}
// Load all data and then execute the rest
loadAllData();
