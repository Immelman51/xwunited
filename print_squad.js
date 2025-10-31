let pilotdata = [[],[],[],[],[],[],[],[]];
let indexes = [];
let hash2 = '';
let hash = "";
let elementsToPrintArray = [false,false,[[],[],[],[],[],[],[],[]],[]];
let element = document.getElementById("content");
let listValidity = true;




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
    hash = window.location.hash.substring(1);

    // Split the hash into an array
    indexes = hash.split(',');

    //If there are any undefined values (for example no Pilot ID), we'll extract the value undefined from the array indexes
    for (k=0 ; k<indexes.length ; k++){
        if(indexes[k]==='undefined'){
            indexes.splice(k, 1);
        }
    }

    return indexes; // The array 'indexes' contains ! ["leaderID","pilotID+u+upgrade1ID+u+upgrade2ID","pilotID"....]
}

async function getPilotData(x){ //we take indexes[x], and we are going to extract all datas from pilot x
    const pilotx = indexes[x].split('u');
    
    pilotdata[x] = pilotx;
}

async function testListValidity() {
    //Test if the pilots talent slots exceed the skill of the pilot (TAL)
    let totalcostvalue = 0;
    for (k=1;k<indexes.length;k++){
        let talentTotalValue = 0;
        let logisticTotalValue = 0;
        getPilotData(k); 
        //Test if the cost of all ships exceed 30, the limit for a squad
        const pid = pilotdata[k][0]; 
        totalcostvalue += pilots[pid]["points"];
        //Test if the number of upgrades equipped points exceed the logistic value of the leader
        //we are going to seperate (Talents and forces), and other upgrades.
        for (l=1;l<pilotdata[k].length;l++){
        let uid = pilotdata[k][l];
        switch (upgrades[uid]["slot"]){
            case "Talent-shooting":
            case "Talent-piloting":
            case "Talent-elite":
            case "Talent-special":
            case "Talent-leadership":
            case "Force":
                talentTotalValue += upgrades[uid]["talent_points"];
                break;
            default :                 
                logisticTotalValue += upgrades[uid]["points"];
                break;
        }

        if (logisticTotalValue > leaders[indexes[0]]["logistic"]){
            listValidity=false;
            return;
        }
        if (talentTotalValue > pilots[pid]["skill"]){
            listValidity=false;
            return;
        }
    }   
    }
     if(totalcostvalue>50){
        listValidity=false;
        return;
        }
   
   
    }
   


async function displayLeader(){
const lID = indexes[0];
testListValidity();

const leaderName = document.getElementById('lname');
const faction = document.getElementById('leaderfaction');
const leaderAbility = document.getElementById('lability');
const leaderCharge = document.getElementById('lcharge');
leaderName.textContent = leaders[lID]['leadername'];
    
    if(listValidity===false){
        leaderName.textContent += ' (NOT VALID)';
    }
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
        case "Yellow" :
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




function displayPilotActions(x){
    const pilotID = pilotdata[x][0];
    const shipID = pilots[pilotID]['shipId'];
    const actionsArray = ships[shipID]['actions'];
    actionlist = document.getElementById('actions'+(x));
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
    const imgPilot = document.getElementById('pilot'+(x)); //x because the pilots begins after indexes 2. Example indexes 2, we have pilot number 1 (in the html page)
    const pilotSkill = document.getElementById('pskill'+(x));
    const pilotFaction = document.getElementById('plogo'+(x));
    const pilotName = document.getElementById('name'+(x));
    const pilotShip = document.getElementById('ship'+(x));
    const pilotCost = document.getElementById('cost'+(x));
    const pilotstat = document.getElementById('stat'+(x));

    //const pilotAttack1 = document.getElementById('attack1'+x);
    //const pilotAttack2 = document.getElementById('attack2'+x);
    //const pilotAgility = document.getElementById('agility'+x);
    //const pilotHull = document.getElementById('hull'+x);
    //const pilotShield = document.getElementById('shield'+x);
    const pilotAbility = document.getElementById('ability'+(x));
    //const pilotActions = document.getElementById('actions'+x);
    
    getPilotData(x);
    const pid = pilotdata[x][0] //We store the PilotID we got from indexes and stored into pilotdata thanks with pilotdata()

    //let's display the pilot jpg
    newimage = document.createElement('div');
    newimage.setAttribute('class','pilotImg');
    newimage.setAttribute('style', "background-image: url('img/pilots/"+pid+".jpg');");
    //imgPilot.insertBefore(newimage, imgPilot.firstChild);
    imgPilot.appendChild(newimage);


    pilotSkill.textContent = pilots[pid]['skill'];
    
    //we load the faction image
    let factionlogo = document.createElement('img');
    factionlogo.setAttribute("src",'img/'+pilots[pid]['faction']+'mini.jpg');
    factionlogo.setAttribute("class",'factionimg');
    pilotFaction.appendChild(factionlogo);

    pilotName.textContent = pilots[pid]['name'];
    pilotAbility.textContent = pilots[pid]['ability']; 
    pilotCost.innerHTML = "<span>"+pilots[pid]['points']+"<span>"; //allows to have a white background on the cost. Sometimes, the background image makes the number unreadable.
        
    const sid = pilots[pid]['shipId']; //We store the ship ID
    pilotShip.textContent = ships[sid]['name'];
    
    //Attack 1 and Attack 2
    pilotstat.innerHTML = '<div><span class="attack">' +ships[sid]["attack"][0][1] + '</span> <img src="img/attack'+ships[sid]["attack"][0][0] +'.jpg" class="logo"/></div>' ;
    if(ships[sid]["attack"].length === 2){
    pilotstat.innerHTML = pilotstat.innerHTML + '<div><span class="attack">' + ships[sid]["attack"][1][1] + '</span> <img src="img/attack'+ships[sid]["attack"][1][0] +'.jpg" class="logo"/></div>' ;
    }
    //Agility
    pilotstat.innerHTML = pilotstat.innerHTML + '<div><span class="agility">' + ships[sid]["agility"] + '</span> <img src="img/agility.jpg" class="logo"/></div>' ;

    //Hull
    pilotstat.innerHTML = pilotstat.innerHTML + '<div><span class="hull">' + ships[sid]["hull"] + '</span> <img src="img/hull.jpg" class="logo"/></div>' ;

    //shield
    pilotstat.innerHTML = pilotstat.innerHTML + '<div><span class="shield">' + ships[sid]["shields"] + '</span> <img src="img/shield.jpg" class="logo"/></div>' ;

    
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
            removeElementById("chassis"+(x)+"_1");
            removeElementById("chassis"+(x)+"_2");
            removeElementById("chassis"+(x)+"_3");
            }

            if(chassis[cid[0]]["nbrOfEffects"]===1){
            document.getElementById('chassis'+(x)+'_'+1).innerHTML = chassis[cid[0]]['effect1'];
            document.getElementById('chassis'+(x)+'_'+1).setAttribute('class','chassis C'+cid[0]+' chs1'); //We change the class of this chassis, so we can remove it with functions contained in title such as Millenium Falcon.
            removeElementById("chassis"+(x)+"_2");
            removeElementById("chassis"+(x)+"_3");
            }
            
            if(chassis[cid[0]]["nbrOfEffects"]===2){
            document.getElementById('chassis'+(x)+'_'+2).innerHTML = chassis[cid[0]]['effect2'];
            document.getElementById('chassis'+(x)+'_'+3).innerHTML = chassis[cid[0]]['effect3'];
            removeElementById("chassis"+(x)+"_1");
            }
            break;
        case 2 : 
            if(chassis[cid[0]]["nbrOfEffects"]===2){ //rules to display several chassis on 1 ship. We have to take in account the case where we need more than 3 div to display thoses abilities. In that case, we display 2 chassis ability in chassis0
                document.getElementById('chassis'+(x)+'_'+1).innerHTML = chassis[cid[1]]['effect1']
                document.getElementById('chassis'+(x)+'_'+1).setAttribute('class','chassis C'+cid[1]+' chs1'); //We change the class of this chassis, so we can remove it with functions contained in title such as Millenium Falcon.
                document.getElementById('chassis'+(x)+'_'+2).innerHTML = chassis[cid[0]]['effect2'];
                document.getElementById('chassis'+(x)+'_'+3).innerHTML = chassis[cid[0]]['effect3'];
            }
            if(chassis[cid[1]]["nbrOfEffects"]===2){ //rules to display several chassis on 1 ship. We have to take in account the case where we need more than 3 div to display thoses abilities. In that case, we display 2 chassis ability in chassis0
                document.getElementById('chassis'+(x)+'_'+1).innerHTML = chassis[cid[0]]['effect1'];
                document.getElementById('chassis'+(x)+'_'+2).innerHTML = chassis[cid[1]]['effect2'];
                document.getElementById('chassis'+(x)+'_'+3).innerHTML = chassis[cid[1]]['effect3'];
            }
            if((chassis[cid[0]]["nbrOfEffects"]===1) && (chassis[cid[1]]["nbrOfEffects"]===1)){ //if the 2 chassis abilities has 1 effect, then we display then into chassis2 and chassis3 and we leave chassis1 blank
                document.getElementById('chassis'+(x)+'_'+2).innerHTML = chassis[cid[0]]['effect1'];
                document.getElementById('chassis'+(x)+'_'+3).innerHTML = chassis[cid[1]]['effect1'];
                removeElementById("chassis"+(x)+"_1");

            }
            break;
        default :
            break;
        }

        //We now tackle upgrades equipped. 
    
    for(i=0; i< pilotdata[x].length-1 ; i++){ 
        
        let uid = pilotdata[x][i+1] //we start i+1 because at 0, there's the pilotID
        mdiv = document.getElementById('upgrade'+(x)+'_'+i);
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
            
            case 'add_action' :
                console.log("add_action");
                const actionlist = document.getElementById('actions'+(x));
                const actionToAdd = upgrades[uid]['add_Data'][1];
                    switch(actionToAdd[0]){
                        case 0 : //if 0 is the first value, it is a simple action
                        newaction = document.createElement('img');
                        newaction.setAttribute('class','action '+x+''+actionToAdd[1]);
                        newaction.setAttribute('src', 'img/'+actionToAdd[1]+'.jpg');
                        actionlist.appendChild(newaction);
                        break;
                        case 1 : //if 1 is the first value, then it is a linked action
                        newaction = document.createElement('div');
                        newaction.setAttribute('class','action');
                        
                        newaction1 = document.createElement('img');
                        newaction1.setAttribute('src', 'img/'+actionToAdd[1]+'.jpg');
                        newaction1.setAttribute('class','linked action '+x+''+actionToAdd[1]);
                        
                        newlink = document.createElement('img');
                        newlink.setAttribute('src', 'img/fleche.jpg');
                        newlink.setAttribute('class','linked action');
                        
                        newaction2 = document.createElement('img');
                        newaction2.setAttribute('src', 'img/'+actionToAdd[2]+'.jpg');
                        newaction2.setAttribute('class','linked action '+x+''+actionToAdd[2]);

                        newaction.appendChild(newaction1);
                        newaction.appendChild(newlink);
                        newaction.appendChild(newaction2);
                        actionlist.appendChild(newaction);
                        break;
                        default :
                        console.log('there is a mistake in add_data in pilots.json') ;
                        break;
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
    for(i=pilotdata[x].length; i<10 ; i++){ //we remove the upgrade divs that are empty
        removeElementById("upgrade"+(x)+"_"+i);
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
    addBaseAndDialsToPrint();
    
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



/////////////////////////////////////////////////////////
//We create the PopMenu to select the elements to print
//////////////////////////////////////////////////////////


//We code the print link that opens a pop up window to select elements to print. Those elements will be sent to a printable pdf.
const popupOverlayPrint = document.getElementById('popupOverlayPrint');
const printBtn = document.getElementById('printBtn');
const cancelBtn = document.getElementById('cancelBtn');
const printform = document.getElementById('printform');


function addBaseAndDialsToPrint() {
    
    console.log('function addBaseAndDialsToPrint');
    for (i=2 ; i<indexes.length ; i++) {
        let divInput = document.createElement('div');
        let baseInput = document.createElement('input');
        baseInput.setAttribute('id','baseInput'+i);
        baseInput.setAttribute('type','checkbox');
        baseInput.setAttribute('name','PrintBase'+i);
        baseInput.setAttribute('value',pilotdata[i][0]); //we get the data baseInput:48
        let baseInputLabel = document.createElement('label');
        baseInputLabel.setAttribute('for','baseInput'+i);
        baseInputLabel.innerHTML="BASE de "+pilots[pilotdata[i][0]]['name'];
        divInput.appendChild(baseInput);
        divInput.appendChild(baseInputLabel);
        printform.appendChild(divInput);
    }


    for (i=2 ; i<indexes.length ; i++) {
        let divInput = document.createElement('div');
        let dialInput = document.createElement('input');
        dialInput.setAttribute('id','dialInput'+i);
        dialInput.setAttribute('type','checkbox');
        dialInput.setAttribute('name','PrintDial');
        dialInput.setAttribute('value',pilots[pilotdata[i][0]]['shipId']);
        let dialInputLabel = document.createElement('label');
        dialInputLabel.setAttribute('for','dialInput'+i);
        dialInputLabel.innerHTML="DIAL de "+pilots[pilotdata[i][0]]['ship'];
        divInput.appendChild(dialInput);
        divInput.appendChild(dialInputLabel);
        printform.appendChild(divInput);

    }
}

const squadInput = document.getElementById('squadInput');
const upgradeInput = document.getElementById('upgradeInput');

printButton.addEventListener('click', function(e){
console.log('clic sur Print');
    e.preventDefault();
popupOverlayPrint.setAttribute('class','overlay');
popupOverlayPrint.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
popupOverlayPrint.style.display = 'none';
});



printBtn.addEventListener('click', () => {
    if(squadInput.checked){
        elementsToPrintArray[0]=true;
    }else{ elementsToPrintArray[0]=false;}
    
    if(upgradeInput.checked){
        elementsToPrintArray[1]=true;
    }else{elementsToPrintArray[1]=false;}
    
    for (i=2 ; i<indexes.length ; i++){
        const base = document.getElementById('baseInput'+i);
        if (base.checked) {
            elementsToPrintArray[2][i-1].push(base.value) //the value of the checkbox is equal to the ID of the pilot. Objective, elementsToPrintArray[3] will be : [[shipId1,"large"],[shipId2,"small"],[shipId3,"medium"],[],[],[],[],[]]
            elementsToPrintArray[2][i-1].push(ships[pilots[pilotdata[i][0]]['shipId']]['base'])
        }
        
        
        const dial = document.getElementById('dialInput'+i);
        if (dial.checked) {
            elementsToPrintArray[3].push(dial.value); //the value of the checkbox is equal to the ID of the pilot.
            
        }
        
    }
    
    // Now we have to add the HTML code and CSS code that displays the dials and bases. Let's a create the addHTMLandCSSforDialsAndBases function

    
    addHTMLandCSSforDialsAndBases();
    
    let pilotsID='';
    for(j=1 ; j<pilotdata.length ; j++){
        if(pilotdata[j].length===0){
            break;
        }
        pilotsID += pilotdata[j][0] + 'p';
    }
          const opt = {
            margin:       0.5,
              filename:     leaders[indexes[0]]['leadername']+pilotsID+'.pdf',
              image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
          };
          html2pdf().set(opt).from(element).save();
    /*html2pdf().set(opt).from(element).toPdf().get('pdf').then(pdf => {
          try {
            pdf.save(opt.filename);
          } catch (e) {
            const blob = pdf.output('blob');
            const url = URL.createObjectURL(blob);
            window.open(url); // ouvre le PDF si le téléchargement est bloqué
          }
        }).catch(console.error);*/
});
    
function addHTMLandCSSforDialsAndBases() {
    /*
     We analyse elementsToPrintArray.
     [Ø] : print squad : true or false. if true there's nothing to do, if false, then we have to remove the innerHTML of the current 'content' div.
     [1] : print upgrades : true or false. if false, there's nothing to do. if true, then we have to add the print upgrade html
     [2] : print bases : [x,y...] : contains the ids of the pilots whom we want to print their bases
     [3] : print dials : [w,z...] : containes the ids of the pilots whom we want to print their dials
     */
    if (elementsToPrintArray[0]===false){
        element.innerHTML = "";
    }
    
    const upgradeContainer = document.getElementById('upgrade-container');
    upgradeContainer.innerHTML = ""; //we re-initialize this div in case you click several time on print. (without this it's going to write again the upgrades descriptions.
    if (elementsToPrintArray[1]===true){
        for (j=1 ; j<indexes.length ; j++){
            if(indexes[j].length > 1){
                newpilot = document.createElement('div');
                newpilot.setAttribute('class','pilot');
                newpilot.innerHTML = "<font size='15'>"+pilots[pilotdata[j][0]]['name']+"</font><br>";
                for ( k=1 ; k<pilotdata[j].length ; k++){ //we begin at 1 because the entry 0 is the pilotID
                    upg = upgrades[pilotdata[j][k]]
                    newupgrade = document.createElement('div');
                    newupgrade.setAttribute('class', 'upgradeText');
                    newupgrade.innerHTML = '<b>' + upg['name'] +'</b>' + ' (' + upg['slot'] + ') - ';
                    /*switch (upg['slot']) {
                        case 'Canon' :
                        case 'Turret' :
                        case 'Torpedo' :
                        case 'Missile' :
                        case 'Weapon Hardpoint' :
                            newupgrade.innerHTML +=  'Portée : ' + upg['range'][0]+'/'+upg['range'][1] + ' - ';
                            newupgrade.innerHTML += '<img src="img/attack'+ upg['attack'][0] +'.jpg" class="logo"/> ' + upg['attack'][1] + '<br>';
                        default :*/
                        newupgrade.innerHTML += upg['effect'];
                        newpilot.appendChild(newupgrade);
                    }
                    
                }
                upgradeContainer.appendChild(newpilot);
            }
        }
    
    const baseContainer = document.getElementById('base-container');
    baseContainer.innerHTML = ""; //we re-initialize this div in case you click several time on print. (without this it's going to write again the bases png.
    if (elementsToPrintArray[2].length > 0){
        baseToPrint = document.createElement('div');
        for (j=0 ; j<elementsToPrintArray[2].length ; j++){
            newbase = document.createElement('img');
            newbase.setAttribute('src','img/pilots/base/'+elementsToPrintArray[2][j][0]+'.png');
            newbase.setAttribute('class','base '+elementsToPrintArray[2][j][1]);
            baseToPrint.appendChild(newbase);
            baseContainer.appendChild(baseToPrint);
        }
        
    }
    
    const dialContainer = document.getElementById('dial-container');
    dialContainer.innerHTML = ""; //we re-initialize this div in case you click several time on print. (without this it's going to write again the bases png.
    if (elementsToPrintArray[3].length > 0){
        dialToPrint = document.createElement('div');
        for (j=0 ; j<elementsToPrintArray[3].length ; j++){
            newdial = document.createElement('img');
            newdial.setAttribute('src','img/dial/'+elementsToPrintArray[3][j]+'.png');
            newdial.setAttribute('class','dial');
            dialToPrint.appendChild(newdial);
            dialContainer.appendChild(dialToPrint);
        }
        
    }
    
}


// Permet de fermer la popup en cliquant hors de la fenêtre
popupOverlayPrint.addEventListener('click', (e) => {
if (e.target === popupOverlayPrint) {
  popupOverlayPrint.style.display = 'none';
}
}
)














