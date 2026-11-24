let requestURLleaders = "https://raw.githubusercontent.com/Immelman51/xwunited/main/leaders.json";

let leaders =[];
let menuLeader = [];
let leaderObjectSelected = [];
/*on écoute les saisies dans les menus pour délcencher les fonctions*/
leaderselect = document.getElementById("menu_leader");
//factionselect = document.getElementById("menu_faction");
//let factionIndex = factionselect.selectedIndex;
//let leaderID = 0;

//We get the language selected
let languageMenu = document.getElementById("language");
let language = languageMenu.value;
languageMenu.addEventListener("input", function(){
console.log("Language Input");
language = languageMenu.value;
//We reinitialize the leader menu
    menuLeader = [];
    for (let i = 0; i < leaders.length; i++) {
        menuLeader.push(leaders[i]["leadername_"+language]);
    }
populateMenu("menu_leader",menuLeader);
leaderselect.selectedIndex = leaderObjectSelected['leaderid'];
selection_leader();
description_leader();

});

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
            if(leaders[i]["leaderfaction"][1] === ""){
                menuLeader.push(leaders[i]["leadername_"+language]+' ['+leaders[i]["leaderfaction"][0]+"]");
            }
            if(leaders[i]["leaderfaction"][1] !== ""){
                menuLeader.push(leaders[i]["leadername_"+language]+' ['+leaders[i]["leaderfaction_mini"]+"]");
            }
            
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


let leader
// Populate menus after initializing data
async function populateMenus() {
    await initializeData();
    //populateMenu("menu_faction", menuFaction);
    populateMenu("menu_leader", menuLeader);
}

// Run populateMenus after DOM content is loaded
window.addEventListener("DOMContentLoaded", function() {
    populateMenus();
});




//This function is going to find the id of the leader selected based on the index of the select menu.
function getLeaderObject(){
    let leaderIndex = leaderselect.index;
   leaderObjectSelected = leaders[leaderIndex];

}

/*fonction qui permet de modifier les noms et logos des faction appartenant au leader sélectionné*/
function selection_leader () {

    
    let factionval1 = leaders[leaderObjectSelected['leaderid']]["leaderfaction"][0];
    let factionval2 = leaders[leaderObjectSelected['leaderid']]["leaderfaction"][1];
    let factionval3 = leaders[leaderObjectSelected['leaderid']]["leaderfaction"][2];

    
    factionIndex = 0; /*on remet à 0 le deuxième menu car il est inutile*/
document.querySelector(".faction1").textContent = factionval1;
document.getElementById("faction1logo").setAttribute("src",'img/'+factionval1+'mini.png') ;
document.getElementById("faction1logo").setAttribute("class",'inline-img') ;
document.querySelector(".faction2").textContent = factionval2;
document.getElementById("faction2logo").setAttribute("src",'img/'+factionval2+'mini.png') ;
document.getElementById("faction2logo").setAttribute("class",'inline-img') ;
document.querySelector(".faction3").textContent = factionval3;
document.getElementById("faction3logo").setAttribute("src",'img/'+factionval3+'mini.png') ;
document.getElementById("faction3logo").setAttribute("class",'inline-img') ;

};



/*rechecher les leaders qui appartiennent à la faction concernée et modifier le menu déroulant en fonction*/

/*function selection_faction () {
let factionbutton = document.getElementById("faction");

if (factionIndex === 0) {
    populateMenu("menu_leader", menuLeader);
    factionbutton.setAttribute("disabled","");
    return; // Exit the function early
};

var listeleader= ["<Select Leader>"];
for (let i = 0; i < leaders.length; i++) {
if (leaders[i]["leaderfaction"].includes(factionselect.value)) {
listeleader.push(leaders[i]["leadername_"+language]+" ("+leaders[i]["logistic"]+')') ;
}
}
factionbutton.removeAttribute("disabled");
populateMenu("menu_leader",listeleader);
}
*/

function description_leader() {
    descriptionLeaderField = document.querySelector(".abilityLeader"); //description est le nom de la classe où se trouve le champ description leader
    //We are going to create a variable that will containe the charge logos
    descriptionLeaderField.innerHTML = ""; // Clear previous content
    for(let i=0; i<leaders[leaderObjectSelected['leaderid']]["charge"][0]; i++){
        
        if(leaders[leaderObjectSelected['leaderid']]["charge"][1] === "Yellow"){
            descriptionLeaderField.innerHTML += "<img class='chargeforceimg' src='img/chargestat.png'>";
        } else if (leaders[leaderObjectSelected['leaderid']]["charge"][1] === "Red"){
            descriptionLeaderField.innerHTML += "<img class='chargeforceimg' src='img/chargestatRed.png'>";
        }
    }
    descriptionLeaderField.innerHTML += leaders[leaderObjectSelected['leaderid']]["leaderability_"+language];
    
}




leaderselect.addEventListener("input", function() {
    getLeaderObject();
    selection_leader();
    description_leader()
    let logisticvalue = document.getElementById("logisticCounter");
    logisticvalue.innerHTML = leaders[leaderObjectSelected['leaderid']]['logistic'];
});


