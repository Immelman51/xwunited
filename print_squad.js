let pilotdata = [[],[],[],[],[],[],[],[]];
let indexes = [];
let hash2 = '';


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
           
////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function getIndexesFromHash() { // Function to get the indexes from the URL hash
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    indexes = hash.split(',');

    //If there are any undefined values (for example no Pilot ID), we'll extract the value undefined from the aray indexes
    for (k=0 ; k<indexes.length ; k++){
        if(indexes[k]==='undefined'){
            indexes.splice(k, 1);
        }
    }

    return indexes; // The array 'indexes' contains ! ["leaderID","pilotID+u+upgrade1ID+u+upgrade2ID","pilotID"....]
}


async function displayLeader(){
const lID = indexes[0];

const leaderName = document.getElementById('lname');
const faction = document.getElementById('leaderfaction');
const leaderAbility = document.getElementById('lability');
const leaderCharge = document.getElementById('lcharge');
leaderName.textContent = leaders[lID]['leadername'];
for(i=0; i<3; i++){
    if(leaders[lID]['leaderfaction'][i] !== ""){
    let factionimg = document.createElement('img');
    factionimg.setAttribute('class', 'factionimg');
    factionimg.setAttribute("src",'img/'+leaders[lID]['leaderfaction'][i]+'mini.jpg') ;
    faction.appendChild(factionimg);
    }
}

leaderAbility.innerHTML = leaders[lID]['leaderability'];
const nbrOfLeaderCharges = leaders[lID]['charge'][0];
console.log(nbrOfLeaderCharges);

for(j=0; j<nbrOfLeaderCharges ;j++){ //We display as many charge logos as the number of charges the leader has
        switch (leaders[lID]['charge'][1]) {
        case "Red" :
            newcharge = document.createElement('img');
            newcharge.setAttribute("class","chargeforceimg");
            newcharge.setAttribute("src","img/chargestatRed.png");
            leaderCharge.appendChild(newcharge);
            break;
        case "0" :
            newcharge = document.createElement('img');
            newcharge.setAttribute("class","chargeforceimg");
            newcharge.setAttribute("src","img/chargestat.png");
            leaderCharge.appendChild(newcharge);
            break;
        default :
        console.log("This leader charge configuration has not been programmed in displayLeader() from print_squad.js. There also might be a mistake in leaders.json.")
        break;
    }

} 

}

function removeElementsByClass(classname) {//permet de supprimer tous les éléments qui possèdent la class "new". Utile lorsqu'on change de leader
    // Get all elements with the specified class name
    const elements = document.getElementsByClassName(classname);

    // Convert HTMLCollection to array for easier manipulation
    const elementsArray = Array.from(elements);

    // Remove each element from its parent node
    elementsArray.forEach(element => {
        element.parentNode.removeChild(element);
    });
    
}   

function removeElementById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
        
    } else {
        console.log(`No element found with ID "${id}".`);
    }
}


function getPilotData(x){ //we take indexes[x], and we are going to extract all datas from pilot x
    const pilotx = indexes[x].split('u');
    
    pilotdata[x] = pilotx;
}

function displayPilotActions(x){
    const pilotID = pilotdata[x][0];
    const shipID = pilots[pilotID]['shipId'];
    const actionsArray = ships[shipID]['actions'];
    actionlist = document.getElementById('actions'+x);
    for(g=0 ; g<actionsArray.length ; g++){
        switch(actionsArray[g][0]){
            case 0 : //if 0 is the first value, it is a simple action
            newaction = document.createElement('img');
            newaction.setAttribute('class','action '+x+''+actionsArray[g][1]);
            newaction.setAttribute('src', 'img/'+actionsArray[g][1]+'.jpg');
            actionlist.appendChild(newaction);
            break;
            case 1 : //if 1 is the first value, then it is a linked action
            newaction = document.createElement('div');
            newaction.setAttribute('class','action');
            
            newaction1 = document.createElement('img');
            newaction1.setAttribute('src', 'img/'+actionsArray[g][1]+'.jpg');
            newaction1.setAttribute('class','linked action '+x+''+actionsArray[g][1]);
            
            newlink = document.createElement('img');
            newlink.setAttribute('src', 'img/fleche.jpg');
            newlink.setAttribute('class','linked action');
            
            newaction2 = document.createElement('img');
            newaction2.setAttribute('src', 'img/'+actionsArray[g][2]+'.jpg');
            newaction2.setAttribute('class','linked action '+x+''+actionsArray[g][2]);

            newaction.appendChild(newaction1);
            newaction.appendChild(newlink);
            newaction.appendChild(newaction2);
            actionlist.appendChild(newaction);
            break;
            default :
            console.log('there is a mistake in ships.json for ship ID n°'+shipID);
            break;
        }
    }


}


function displayPilot(x){ 
    console.log(`Displaying pilot for index ${x}`);
    const imgPilot = document.getElementById('pilot'+x);
    const pilotSkill = document.getElementById('pskill'+x);
    const pilotFaction = document.getElementById('plogo'+x);
    const pilotName = document.getElementById('name'+x);
    const pilotShip = document.getElementById('ship'+x);
    const pilotCost = document.getElementById('cost'+x);    
    const pilotstat = document.getElementById('stat'+x);

    //const pilotAttack1 = document.getElementById('attack1'+x);
    //const pilotAttack2 = document.getElementById('attack2'+x);
    //const pilotAgility = document.getElementById('agility'+x);
    //const pilotHull = document.getElementById('hull'+x);
    //const pilotShield = document.getElementById('shield'+x);
    const pilotAbility = document.getElementById('ability'+x);
    //const pilotActions = document.getElementById('actions'+x);
    
    getPilotData(x);
    const pid = pilotdata[x][0] //We store the PilotID we got from indexes and stored into pilotdata thanks with pilotdata()

    //let's display the pilot jpg
    newimage = document.createElement('img');
    newimage.setAttribute('class','pilotImg');
    newimage.setAttribute('src', 'img/pilots/'+pid+'.jpg');
    imgPilot.insertBefore(newimage, imgPilot.firstChild);


    pilotSkill.textContent = pilots[pid]['skill'];
    pilotFaction.setAttribute("src",'img/'+pilots[pid]['faction']+'mini.jpg');
    pilotName.textContent = pilots[pid]['name'];
    pilotAbility.textContent = pilots[pid]['ability']; 
    pilotCost.textContent = pilots[pid]['points'];
        
    const sid = pilots[pid]['shipId']; //We store the ship ID
    pilotShip.textContent = ships[sid]['name'];
    
    //Attack 1 and Attack 2
    pilotstat.innerHTML = '<span class="attack">' +ships[sid]["attack"][0][1] + '</span> <img src="img/attack'+ships[sid]["attack"][0][0] +'.jpg" class="logo"/>' ;
    if(ships[sid]["attack"].length === 2){
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="attack">' + ships[sid]["attack"][1][1] + '</span> <img src="img/attack'+ships[sid]["attack"][1][0] +'.jpg" class="logo"/>' ;
    }
    //Agility
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="agility">' + ships[sid]["agility"] + '</span> <img src="img/agility.jpg" class="logo"/>' ;

    //Hull
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="hull">' + ships[sid]["hull"] + '</span> <img src="img/hull.jpg" class="logo"/>' ;

    //shield
    pilotstat.innerHTML = pilotstat.innerHTML + '<br><span class="shield">' + ships[sid]["shields"] + '</span> <img src="img/shield.jpg" class="logo"/>' ;

    
    displayPilotActions(x);
    
    for(j=0; j<pilots[pid]['charge'][0];j++){ //Pilot Ability charges : We are going to display as many charge pictures as the charge value of the pilot ability
        
        newcharge = document.createElement('img'); 
        newcharge.setAttribute("class","chargeforceimg");
        newcharge.setAttribute("src","img/chargestat.png");
        pilotAbility.appendChild(newcharge);
      }
        
       
        switch(pilots[pid]['charge'][1]){
            case "+" :
                newchargeEvolution = document.createElement('img'); // the index 1 of the charge tables indicates if it's recurring or not. We have to display it, and there's a jpg for every case.
                newchargeEvolution.setAttribute("class","recurring");
                newchargeEvolution.setAttribute("src","img/chargeplus.png");
                pilotAbility.appendChild(newchargeEvolution);
                break;
            case "-" : 
                newchargeEvolution = document.createElement('img'); // the index 1 of the charge tables indicates if it's recurring or not. We have to display it, and there's a jpg for every case.
                newchargeEvolution.setAttribute("class","recurring");  
                newchargeEvolution.setAttribute("src","img/chargeminus.png");
                pilotAbility.appendChild(newchargeEvolution);
                break;
            default :            
            break;
        }
        
        
       

    
   
    
   
    
     
    for(f=0 ; f<pilots[pid]['force'] ; f++){ //We are going to display as many force pictures as the charge value of the pilot
        
        let newforce = document.createElement('img');
        newforce.setAttribute("class","chargeforceimg");
        newforce.setAttribute("src","img/forcestat.png");
        pilotName.appendChild(newforce);
       
      
    } 

     
    
    //And now, let's display thoses chassis abilities !
    let cid = ships[sid]['chassis']; //cid is an array this time!!
   
    switch(cid.length){
        
        case 1 : //if there is only 1 chassis ability or no chassis ability : it can be simple, or it can be more complex such as 2 configurations.
            if(chassis[cid[0]]["nbrOfEffects"]===0){
            removeElementById("chassis"+x+"_1");    
            removeElementById("chassis"+x+"_2");
            removeElementById("chassis"+x+"_3");
            }

            if(chassis[cid[0]]["nbrOfEffects"]===1){
            document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[0]]['effect1'];
            document.getElementById('chassis'+x+'_'+1).setAttribute('class','C'+cid[0]+' chs1'); //We change the class of this chassis, so we can remove it with functions contained in title such as Millenium Falcon.
            removeElementById("chassis"+x+"_2");
            removeElementById("chassis"+x+"_3");            
            }
            
            if(chassis[cid[0]]["nbrOfEffects"]===2){
            document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[0]]['effect1'];
            document.getElementById('chassis'+x+'_'+2).innerHTML = chassis[cid[0]]['effect2'];
            document.getElementById('chassis'+x+'_'+3).innerHTML = chassis[cid[0]]['effect3'];    
            }
            break;
        case 2 : 
            if(chassis[cid[0]]["nbrOfEffects"]===2){ //rules to display several chassis on 1 ship. We have to take in account the case where we need more than 3 div to display thoses abilities. In that case, we display 2 chassis ability in chassis0
                document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[1]]['effect1']+'<br>'+chassis[cid[0]]['effect1']; 
                document.getElementById('chassis'+x+'_'+1).setAttribute('class','C'+cid[1]+' chs1'); //We change the class of this chassis, so we can remove it with functions contained in title such as Millenium Falcon.
                document.getElementById('chassis'+x+'_'+2).innerHTML = chassis[cid[0]]['effect2']; 
                document.getElementById('chassis'+x+'_'+3).innerHTML = chassis[cid[0]]['effect3']; 
            }
            if(chassis[cid[1]]["nbrOfEffects"]===2){ //rules to display several chassis on 1 ship. We have to take in account the case where we need more than 3 div to display thoses abilities. In that case, we display 2 chassis ability in chassis0
                document.getElementById('chassis'+x+'_'+1).innerHTML = chassis[cid[0]]['effect1']+'<br>'+chassis[cid[1]]['effect1']; 
                document.getElementById('chassis'+x+'_'+2).innerHTML = chassis[cid[1]]['effect2']; 
                document.getElementById('chassis'+x+'_'+3).innerHTML = chassis[cid[1]]['effect3']; 
            }
            if((chassis[cid[0]]["nbrOfEffects"]===1) && (chassis[cid[1]]["nbrOfEffects"]===1)){ //if the 2 chassis abilities has 1 effect, then we display then into chassis2 and chassis3 and we leave chassis1 blank
                document.getElementById('chassis'+x+'_'+2).innerHTML = chassis[cid[0]]['effect1'];
                document.getElementById('chassis'+x+'_'+3).innerHTML = chassis[cid[1]]['effect1'];
                removeElementById("chassis"+x+"_1");

            }
            break;
        default :
            break;
        }

        //We now tackle upgrades equipped. 
    
    for(i=0; i< pilotdata[x].length-1 ; i++){ 
        
        let uid = pilotdata[x][i+1] //we start i+1 because at 0, there's the pilotID
        mdiv = document.getElementById('upgrade'+x+'_'+i);
        mdivupg = document.createElement('div');
        mdivupg.setAttribute('class','upgrade');
        /*upglogo = document.createElement('img');
        upglogo.setAttribute("class","logo");
        upglogo.setAttribute("src","img/"+upgrades[uid]['slot']+".png");
        mdivupg.appendChild(upglogo);
        mdivupg.textContent = upgrades[uid]['name'];*/
        mdivupg.innerHTML = '<img src="img/'+upgrades[uid]["slot"]+'.png" class="logo"/> '+'<span>'+upgrades[uid]["name"]+'</span>'; 
        
        
        switch (upgrades[uid]['add_Data'][0]) { //we are going to process the data in add_data entry. Those may add a small picture to remind the player some specific effect of the upgrade, or remove some HTML elements such as the millenium falcon that removes a chassis ability
            case 'removeclass' : //Millenium Falcon
                removeElementsByClass(upgrades[uid]['add_Data'][1]);
                break;
            case 'changeChassis' : //Autopilot Drone
                console.log('changeChassis '+upgrades[uid]['add_Data']);
                chassisToChange = document.getElementsByClassName(upgrades[uid]['add_Data'][1]);
                chassisToChange[0].innerHTML = upgrades[uid]['add_Data'][2];
                mdiv.setAttribute('class',"toDelete");
                removeElementsByClass('toDelete');
                break;
            case 'droid' : //every droid Pilots
                let focusWActions = document.getElementsByClassName(x+'Fo W');
                console.log(focusWActions);
                let focusRActions = document.getElementsByClassName(x+'Fo R');
                for (f=0 ; f<focusWActions.length ; f++){
                    focusWActions[f].setAttribute('src','img/Cc W.jpg');
                }
                for (f=0 ; f<focusRActions.length ; f++){
                    focusRActions[f].setAttribute('src','img/Cc R.jpg');
                }
                break;
            

            default :
                break;
        }
        
        let nbrcharge = upgrades[uid]['charge'][0];
        let nbrforce = upgrades[uid]['force'];
        for(j=0; j<nbrcharge;j++){ //is going to display as many charge logos as the number of charges the upgrade has
            let newcharge = document.createElement('img');
            newcharge.setAttribute("class","chargeforceimg");
            newcharge.setAttribute("src","img/chargestat.png");
            mdivupg.appendChild(newcharge);
        }
            switch (upgrades[uid]['charge'][1]) {
                case "+" :
                    recurring = document.createElement('img');
                    recurring.setAttribute("class","recurring");
                    recurring.setAttribute("src","img/chargeplus.png");
                    mdivupg.appendChild(recurring);
                    break;
                case "-" :
                    recurring = document.createElement('img');
                    recurring.setAttribute("class","recurring");
                    recurring.setAttribute("src","img/chargeminus.png");
                    mdivupg.appendChild(recurring);
                    break;
                default :
                break;
            
        }
        for(j=0; j<nbrforce; j++){
            let newforce = document.createElement('img');
            newforce.setAttribute("class","chargeforceimg");
            newforce.setAttribute("src","img/forcestat.png");
            mdivupg.appendChild(newforce);
        }
        mdiv.appendChild(mdivupg);
    }
    for(i=pilotdata[x].length; i<11 ; i++){ //we remove the upgrade divs that aer empty
        removeElementById("upgrade"+x+"_"+i);
    }
}

     


async function executeFunctions(){ //on crée une fonction asynchrone pour que tout se lance dans l'ordre
    console.log(ships);
    console.log(chassis);
    console.log(pilots);
    console.log(upgrades);
    console.log(leaders);    
    await getIndexesFromHash();
    await displayLeader();
    
    for(k=1; k<indexes.length; k++){
        
            await displayPilot(k); 
         
        
        }
    
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
    
        executeFunctions(); // on execute la fonction ultime!!!!!!!!!
        for (k=indexes.length ; k<9 ; k++ ){ //on va supprimer les éléments des pilotes qui n'ont pas été sélectionnés
            removeElementsByClass(k);
        }
        
        
    } catch (error) {
        console.error("Failed to fetch data: ", error);
    }
})();

// prepare the hash to add at the end of the web adress for Print_upgrades
function hasher(){
hash2 = "";
for (i=1 ; i<indexes.length ; i++){
    for ( j=0 ; j<pilotdata[i].length ; j++){
            hash2 += pilotdata[i][j] + ',';
       }
       hash2 = hash2.slice(0,-1) ; //removing the additionnal coma
       hash2 += 'p';
    }
    hash2 = hash2.slice(0,-1); //on retire le ',p' final
}


//we define now the button to print upgrades
const linkToPrintUpgrades = document.getElementById('print_upgrades');
linkToPrintUpgrades.addEventListener('click', function(e){
    e.preventDefault(); 
    hasher();   
    window.location.href =  `print_upgrades.html?#${hash2}`
})

const linkToPrintDials = document.getElementById('print_dials');
linkToPrintDials.addEventListener('click', function(e){
    e.preventDefault();
    hasher();
    window.location.href =  `print_dials.html?#${hash2}`
})

const linkToPrintBases = document.getElementById('print_bases');
linkToPrintBases.addEventListener('click', function(e){
    e.preventDefault();
    hasher();
    window.location.href =  `print_bases.html?#${hash2}`
})















