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

        
        displayUpgrades("Talent-shooting","talent");
        displayUpgrades("Talent-piloting","talent");
        displayUpgrades("Talent-leadership","talent");
        displayUpgrades("Talent-elite","talent");
        displayUpgrades("Force","talent");
        displayUpgrades("Crew","");
        displayUpgrades("Gunner","");
        displayUpgrades("Tech","");
        displayUpgrades("Astromech","");
        displayUpgrades("Sensor","");
        displayUpgrades("Illicit","");
        displayUpgrades("Payload","");
        displayUpgrades("Missile","");
        displayUpgrades("Torpedo","");
        displayUpgrades("Cannon","");
        displayUpgrades("Turret","");
        displayUpgrades("Calculator","");
        displayUpgrades("Modification","");
        displayUpgrades("Tie mod","");


    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
};

//We get the language selected
let languageMenu = document.getElementById("language");
let language = languageMenu.value;
languageMenu.addEventListener("input", function(){
    console.log("Language Input");
    language = languageMenu.value;
    element.innerHTML = "";
    loadAllData();
});

const element = document.getElementById('content');

function displayUpgrades(slotName,slotType,){
let pUpgradesGen = document.createElement("div");
    pUpgradesGen.setAttribute("id", "upgradesgen");
    element.appendChild(pUpgradesGen);
    
    for (let j = 0; j<upgrades.length; j++) { //on va maintenant afficher les upgrades génériques
        if ((upgrades[j]["faction"]==="") && (upgrades[j]['slot']===slotName)){
            let newupgrade = document.createElement('p');
            if(slotType==="talent"){
                newupgrade.setAttribute("class", "upgrade generic talent");
            }else{
                newupgrade.setAttribute("class", "upgrade generic other");

            }
            
        

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
        newupgradename.innerHTML = limitNumber+" "+upgrades[j]["name_"+language];
        newupgrade.appendChild(newupgradename);

        
        let newupgradetype = document.createElement('div');
        let newupgradetypelogo = document.createElement('div');
        newupgradetype.setAttribute("class", "upgrade type");
        newupgradetype.innerHTML = upgrades[j]["slot"]; 
        newupgradetypelogo.setAttribute('src',  'img/'+upgrades[j]["slot"]+'.png')       
        newupgrade.appendChild(newupgradetype);
        newupgrade.appendChild(newupgradetypelogo);

        let newupgradepoints = document.createElement('div');
        newupgradepoints.setAttribute("class", "upgrade points");
            if(slotType==="talent"){
                newupgradepoints.innerHTML = upgrades[j]["points"]+" ("+upgrades[j]["talent_points"]+")";
            }else{
                newupgradepoints.innerHTML = upgrades[j]["points"];
                            }
        newupgrade.appendChild(newupgradepoints);
        let newupgradeeffect = document.createElement('div');
        newupgradeeffect.setAttribute("class", "upgrade ability");
        newupgradeeffect.innerHTML = upgrades[j]["effect_"+language];        
        newupgrade.appendChild(newupgradeeffect);

        element.appendChild(newupgrade);
        }
}
}

loadAllData() ;


 const printBtn = document.getElementById('printButton');
   

    printBtn.addEventListener('click', () => {
          const opt = {
            margin:       0.5,
              filename:     'GenericUpgrades.pdf',
              image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(element).save();
        });
