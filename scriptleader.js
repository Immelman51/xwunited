const leaders =
[
{
    leadername: "<Select Leader>",
    leaderfaction: ["","",""],
    leaderid: 0,
    leaderability: ""
} ,
    {
     leadername:  "Greef Carga",
     leaderfaction: ["Bounty_Hunters_Guild","",""],
     leaderability: "Si vous avez au moins un capteur de positionnement, vous choisissez à qui vous attribuez la condition au lieu de votre adversaire. Si la cible est détruite, gagnez 2 #scenario_point#",
     leaderid: 1
     },
     {
     leadername: "Jan Dodonna",
     leaderfaction: ["Rebel_Alliance","",""],
     leaderid: 2,
     charge: 2,
     leaderability: "A chaque fois que vous effectuez une action de scénario, récupérez 1 #ch#. En phase système, vous pouvez dépenser 2 #ch# : gagnez 1 #scenario_point#"
     },
     {
     leadername: "Hondo Ohnaka",
     leaderfaction: ["Pirates_and_Smugglers","",""],
     leaderid: 3,
     charge: 3,
     leaderability: "A chaque fois qu'un de vos vaisseaux esquive parfaitement une attaque, récupérez 1 #ch# sur votre leader. En phase système, vous pouvez dépenser 3 charges : gagnez 1 #scenario_point#"
     },
     {
     leadername: "Bo Katan Kryze",
     leaderfaction: ["Mandalorian_Clans","",""],
     leaderid: 4,
     charge: 1,
     leaderability: "Au début de la phase de programmation, lancez 1 dé rouge.<br> 'vierge' : brouillez un de vos vaisseaux ;<br>#eye# : brouillez 1 vaisseau allié, assignez 1 calcul à un vaisseau.<br>#hit#: récupérez 1 #ch#.<br>#crit# : récupérez 1 #ch# et réparez une carte de dégat face ouverte.<br>Lorsque vous détruisez un vaisseau adverse, vous pouvez dépenser 1 #ch# pour gagner 1 #scenario_point#"
     },
     {
     leadername: "Grand Moff Tarkin",
     leaderfaction: ["Imperial_Academy","",""],
     leaderid: 5,
     charge: 2,
     leaderability: "A chaque fois que vous utilisez l'effet du talent 'Impitoyable', récupérez 1 #ch# sur votre carte leader. En phase Système, vous pouvez dépenser 2 #ch# : Gagnez 1 #scenario_point#."
     },
     {
     leadername: "Darth Vader",
     leaderfaction: ["Bounty_Hunters_Guild","Imperial_Academy" ,""],
     leaderid: 6,
     charge: 3,
     leaderability: "1 fois par ronde, lorsque vous attaquez un vaisseau, vous pouvez dépenser 1 #ch# pour améliorer un dé d'attaque."
     },
     {
     leadername: "Admiral Ackbar",
     leaderfaction: ["Pirates_and_Smugglers", "Rebel_Alliance", ""],
     leaderid: 7,
     charge: 2,
     leaderability: "Lorsqu'un de vos vaisseaux est déclaré défenseur lors d'un attaque, vous pouvez dépenser 1 #ch#. Dans ce cas, il peut effectuer un tonneau ou une accélération puis il reçoit un marqueur de stress. Si le vaisseau n'a pas l'action utlisée dans sa barre d'action ou qu'il était déjà stressé, il prend 1 dégat ou expose une carte de dégat. Ce mouvement peut annuler l'attaque en cours."
     },
     {
     leadername: "Jun Sato",
     leaderfaction: ["Phoenix_Cell","",""],
     leaderid: 8,
     leaderability: ""
     },
     {
     leadername: "Saw Gerrera",
     leaderfaction: ["Partisans","",""],
     leaderid: 9,
     leaderability: ""
     },
     {
     leadername: "Moff Jerjerrod",
     leaderfaction: ["Imperial_Elite_Forces","",""],
     leaderid: 10,
     leaderability: ""
     },
     {
     leadername: "Amilyn Holdo",
     leaderfaction: ["Resistance","",""],
     leaderid: 11,
     leaderability: ""
     },
     {
     leadername: "General Hux",
     leaderfaction: ["First_Order","",""],
     leaderid: 12,
     leaderability: ""
     },
     {
     leadername: "Anakin Skywalker",
     leaderfaction: ["Jedi_Order","",""],
     leaderid: 13,
     leaderability: ""
     },
     {
     leadername: "Bib Fortuna",
     leaderfaction: ["Hutt_Cartel","",""],
     leaderid: 14,
     leaderability: ""
     },
     {
     leadername: "Count Dooku",
     leaderfaction: ["Agents_of_Chaos","",""],
     leaderid: 15,
     leaderability: ""
     },
     {
     leadername: "Nute Gunray",
     leaderfaction: ["C.I.S","",""],
     leaderid: 16,
     leaderability: ""
     },
     {
     leadername: "Padme Amidala",
     leaderfaction: ["Galactic_Senate","",""],
     leaderid: 17,
     leaderability: ""
     },
     {
     leadername: "General Syndulla",
     leaderfaction: ["New_Republic","",""],
     leaderid: 18,
     leaderability: ""
     },
     {
     leadername: "Captain Doza",
     leaderfaction: ["Colossus","",""],
     leaderid: 19,
     leaderability: ""
     },
     {
     leadername: "General Pryde",
     leaderfaction: ["Shadow_Specialists","",""],
     leaderid: 20,
     leaderability: ""
     },
     {
     leadername: "Moff Gideon",
     leaderfaction: ["Imperial_Remnants","",""],
     leaderid: 21,
     leaderability: ""
     },
     {
     leadername: "Qi'Ra (C.D.)",
     leaderfaction: ["Crime_Syndicates","",""],
     leaderid: 22,
     leaderability: ""
     },
     {
     leadername: "Lom Pyke (P.S.)",
     leaderfaction: ["Crime_Syndicates","",""],
     leaderid: 23,
     leaderability: ""
     },
     {
     leadername: "Prince Xizor",
     leaderfaction: ["Black_Sun","",""],
     leaderid: 24,
     leaderability: ""
     }
     
     ];
     
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

let menuLeader = [];
let indexleader = 0;

// charger les options pour le menu leader
for(let i = 0; i<leaders.length; i++) {
    menuLeader.push(leaders[i]["leadername"]);
};

 
    
  const menuFaction = ["<Select Faction>","Rebel_Alliance","Imperial_Academy","Mandalorian_Clans","Pirates_and_Smugglers","Bounty_Hunters_Guild","Phoenix_Cell","C.I.S","Resistance","Imperial_Elite_Forces","First_Order","Partisans","Shadow_Specialists","Jedi_Order","New_Republic","Hutt_Cartel","Agent_of_Chaos","Galactic_Senate","Imperial_Remnants","Black_Sun","Crime_Syndicates","ISB","Colossus"];

//on remplit les menus au chargement
window.addEventListener("DOMContentLoaded", function() {    
    populateMenu("menu_faction",menuFaction);
    populateMenu("menu_leader",menuLeader);   
});


/*on écoute les saisies dans les menus pour délcencher les fonctions*/
leaderselect = document.getElementById("menu_leader");
factionselect = document.getElementById("menu_faction");



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
    
let factionvalue = factionselect.value;
if (factionvalue === "<Select Faction>") {
    populateMenu("menu_leader", menuLeader);
    return; // Exit the function early
};

var listeleader= ["<Select Leader>"];
for (let i = 0; i < leaders.length; i++) {
if (leaders[i]["leaderfaction"].includes(factionvalue)) {
listeleader.push(leaders[i]["leadername"]) ;
}
}
populateMenu("menu_leader",listeleader);
}

function description_leader() {
    descriptionLeaderField = document.querySelector(".eight"); //eight est le nom de la classe où se trouve le champ description leader
    descriptionLeaderField.innerHTML=""; 
    descriptionLeaderField.innerHTML = leaders[indexleader]["leaderability"];
}




leaderselect.addEventListener("input", function() {
    selection_leader();
    description_leader()
})
factionselect.addEventListener("input", selection_faction);


