let indexes;


function getIndexesFromHash() { // Function to get the indexes from the URL hash
    // Get the hash from the URL
    const hash = window.location.hash.substring(1);

    // Split the hash into an array
    indexes = hash.split(',');

    return indexes; // The array 'indexes' contains ! ["upgrade1ID,upgrade2ID",...]
}

function getUpgradeData(){ //we fill upgradeData with all the upgrades Id
    
    for (j=0 ; j<indexes.length ; j++){
    const upgradex = indexes[j].split('p');
    indexes[j]=upgradex;
    }
    
}



function displaybases() { //This is the function that will display all the ship bases needed in the squad
    bases = document.getElementById('bases');
    for (i=1 ; i<indexes.length ; i++){
        if(indexes[i]!==""){
            newbase = document.createElement('img');
            newbase.setAttribute('class','ship');
            newbase.setAttribute('src','img/pilots/base/'+indexes[i][0]+'.png');
            bases.appendChild(newbase);
            
        }
    }
}

function executeFunctions(){ //on crée une fonction asynchrone pour que tout se lance dans l'ordre
       
         
        getIndexesFromHash();
        getUpgradeData();
        displaybases()
                    
        
    }


//on execute enfin la fonction finale
executeFunctions();


