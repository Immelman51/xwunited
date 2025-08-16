let requestURLleaders = "https://raw.githubusercontent.com/Immelman51/xwunited/main/leaders.json";

let leaders =[];
let menuLeader = [];

async function fetchData(url) {
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
// Fetch leaders data and populate menuLeader
async function initializeData() {
    try {
        leaders = await fetchData(requestURLleaders);
        console.log(leaders);
        for (let i = 0; i < leaders.length; i++) {
            menuLeader.push(leaders[i]["leadername"]);
        }
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
}







     // Function to populate dropdown menu options
 function populateMenu(menuId, options) {
    const menu = document.getElementById(menuId);
    menu.innerHTML="";
    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        menu.appendChild(optionElement);
    });
}




 
    
const menuFaction = ["<Select Faction>","Rebel_Alliance","Imperial_Academy","Mandalorian_Clans","Pirates_and_Smugglers","Bounty_Hunters_Guild","Phoenix_Cell","Trade_Federation","Resistance","Imperial_Elite_Squadrons","First_Order","Partisans","Shadow_Specialists","Jedi_Order","New_Republic","Hutt_Cartel","Agents_of_Chaos","Clone_Army","Imperial_Remnants","Black_Sun","Crime_Syndicates","ISB","Colossus","Separatist_Government",];
let leader
// Populate menus after initializing data
async function populateMenus() {
    await initializeData();
    populateMenu("menu_faction", menuFaction);
    populateMenu("menu_leader", menuLeader);
}

// Run populateMenus after DOM content is loaded
window.addEventListener("DOMContentLoaded", function() {
    populateMenus();
});


/*on écoute les saisies dans les menus pour délcencher les fonctions*/
leaderselect = document.getElementById("menu_leader");
factionselect = document.getElementById("menu_faction");

let leaderID = 0;

/*fonction qui permet de modifier les noms et logos des faction appartenant au leader sélectionné*/
function selection_leader () {
let leadervalue = leaderselect.value;
for (j=0; j<leaders.length; j++) {
    if (leaders[j]["leadername"]===leadervalue) {
        indexleader = j;
        break;
    }
}

    let factionval1 = leaders[indexleader]["leaderfaction"][0];
    let factionval2 = leaders[indexleader]["leaderfaction"][1];
    let factionval3 = leaders[indexleader]["leaderfaction"][2];

    leaderID = leaders[indexleader]["leaderid"];
    
    factionvalue="Select Faction"; /*on remet à 0 le deuxième menu car il est inutile*/
document.querySelector(".faction1").textContent = factionval1;
document.getElementById("faction1logo").setAttribute("src",'img/'+factionval1+'mini.jpg') ;
document.querySelector(".faction2").textContent = factionval2;
document.getElementById("faction2logo").setAttribute("src",'img/'+factionval2+'mini.jpg') ;
document.querySelector(".faction3").textContent = factionval3;
document.getElementById("faction3logo").setAttribute("src",'img/'+factionval3+'mini.jpg') ;

};



/*rechecher les leaders qui appartiennent à la faction concernée et modifier le menu déroulant en fonction*/

function selection_faction () {
let factionbutton = document.getElementById("faction");    
let factionvalue = factionselect.value;
if (factionvalue === "<Select Faction>") {
    populateMenu("menu_leader", menuLeader);
    factionbutton.setAttribute("disabled","");
    return; // Exit the function early
};

var listeleader= ["<Select Leader>"];
for (let i = 0; i < leaders.length; i++) {
if (leaders[i]["leaderfaction"].includes(factionvalue)) {
listeleader.push(leaders[i]["leadername"]) ;
}
}
factionbutton.removeAttribute("disabled");
populateMenu("menu_leader",listeleader);
}

function description_leader() {
    descriptionLeaderField = document.querySelector(".description"); //description est le nom de la classe où se trouve le champ description leader
    descriptionLeaderField.innerHTML=""; 
    descriptionLeaderField.innerHTML = leaders[indexleader]["leaderability"];
}




leaderselect.addEventListener("input", function() {
    selection_leader();
    description_leader()
})
factionselect.addEventListener("input", selection_faction);


