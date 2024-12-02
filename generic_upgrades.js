let requestURLupgrades = "https://raw.githubusercontent.com/Immelman51/xwunited/main/upgrades.json";
let upgrades;

async function fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function loadAllData() {
    
   

    try {
        
        upgrades = await fetchData(requestURLupgrades);
        console.log(upgrades);

        
        displayUpgrades();
      

    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
};


function displayUpgrades(){
let pUpgradesGen = document.createElement("div");
    pUpgradesGen.setAttribute("id", "upgradesgen");
    document.body.appendChild(pUpgradesGen);
    
    for (let j = 0; j<upgrades.length; j++) { //on va maintenant afficher les upgrades génériques
        if (upgrades[j]["faction"]===""){
            let newupgrade = document.createElement('p');
            newupgrade.setAttribute("class", "upgrade generic");
        

            let limitNumber = "";
            switch(upgrades[j]['max_per_squad']){
                case 1 : 
                limitNumber = "*";
                break;
                case 2 :
                limitNumber = "**";
                break; 
                case 3 :
                limitNumber = "***";
                break; 
                default : 
                break;  
            }
        
            let newupgradename = document.createElement('div');
        newupgradename.setAttribute("class", "upgrade name");
        newupgradename.innerHTML = limitNumber+" "+upgrades[j]["name"];        
        newupgrade.appendChild(newupgradename);

        
        let newupgradetype = document.createElement('div');
        let newupgradetypelogo = document.createElement('div');
        newupgradetype.setAttribute("class", "upgrade type");
        newupgradetype.innerHTML = upgrades[j]["slot"]; 
        newupgradetypelogo.setAttribute('src',  'img/'+upgrades[j]["slot"]+'.jpg')       
        newupgrade.appendChild(newupgradetype);
        newupgrade.appendChild(newupgradetypelogo);

        let newupgradepoints = document.createElement('div');
        newupgradepoints.setAttribute("class", "upgrade points");
        newupgradepoints.innerHTML = upgrades[j]["points"];        
        newupgrade.appendChild(newupgradepoints);

        let newupgradeeffect = document.createElement('div');
        newupgradeeffect.setAttribute("class", "upgrade ability");
        newupgradeeffect.innerHTML = upgrades[j]["effect"];        
        newupgrade.appendChild(newupgradeeffect);

        document.body.appendChild(newupgrade);
        }
}
}

loadAllData() ;
