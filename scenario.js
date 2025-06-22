


function update_language(){

let language = document.getElementById('language').value ;

for(i=1; i<4 ; i++){
    document.getElementById('skirmish'+i).setAttribute('src','img/scenario/TheSkirmish'+i+'_'+language+'.png');
}

for(i=1; i<4 ; i++){
    document.getElementById('hunt'+i).setAttribute('src','img/scenario/TheHunt'+i+'_'+language+'.png');
}

for(i=1; i<4 ; i++){
    document.getElementById('escort'+i).setAttribute('src','img/scenario/TheEscort'+i+'_'+language+'.png');
}

for(i=1; i<4 ; i++){
    document.getElementById('salvage'+i).setAttribute('src','img/scenario/TheSalvage'+i+'_'+language+'.png');
}

for(i=1; i<4 ; i++){
    document.getElementById('assault'+i).setAttribute('src','img/scenario/TheAssault'+i+'_'+language+'.png');
}

}

//we listen to the language menu. If it changes, we change the language by switching the web adresses of the picture cards.
document.getElementById('language').addEventListener('input',update_language);

update_language();


