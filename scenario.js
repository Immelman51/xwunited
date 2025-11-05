


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

for(i=1; i<3 ; i++){
    document.getElementById('binarysuns'+i).setAttribute('src','img/scenario/Env_BinarySuns'+i+'_'+language+'.png');
}
for(i=1; i<3 ; i++){
    document.getElementById('intergalacticvoid'+i).setAttribute('src','img/scenario/Env_Intergalacticvoid'+i+'_'+language+'.png');
}
for(i=1; i<3 ; i++){
    document.getElementById('junkyard'+i).setAttribute('src','img/scenario/Env_Junkyard'+i+'_'+language+'.png');
}
for(i=1; i<3 ; i++){
    document.getElementById('oldwreckage'+i).setAttribute('src','img/scenario/Env_OldWreckage'+i+'_'+language+'.png');
}
for(i=1; i<3 ; i++){
    document.getElementById('planetaryring'+i).setAttribute('src','img/scenario/Env_PlanetaryRing'+i+'_'+language+'.png');
}

document.getElementById('cosmicanomaly1').setAttribute('src','img/scenario/Wild_CosmicAnomaly_'+language+'.png');
document.getElementById('avoidTheWreckage').setAttribute('src','img/scenario/Wild_AvoidTheWreckage_'+language+'.png');
document.getElementById('outpost1').setAttribute('src','img/scenario/Wild_Outpost_'+language+'.png');
document.getElementById('solarwinds1').setAttribute('src','img/scenario/Wild_SolarWinds_'+language+'.png');
document.getElementById('supply').setAttribute('src','img/scenario/Wild_Supply_'+language+'.png');

}


//we listen to the language menu. If it changes, we change the language by switching the web adresses of the picture cards.
document.getElementById('language').addEventListener('input',update_language);

update_language();


let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > lastScrollY) {
    // Scroll vers le bas
    header.classList.add('hide');
  } else {
    // Scroll vers le haut
    header.classList.remove('hide');
  }

  lastScrollY = window.scrollY;
});