
let printform = document.createElement('form');
let printdiv = document.createElement('div');
let buttondiv = document.createElement('div');
let buttonPrint = document.createElement('button');
let buttonCancel = document.createElement('button');

printform.innerHTML = 'Select the elements you want to print :';

let squadInput = document.createElement('input');
squadInput.setAttribute('id','squadInput');
squadInput.setAttribute('name','squadInput');
squadInput.setAttribute('checked',true);
let squadInputLabel = document.createElement('label');
squadInputLabel.setAttribute('for','squadInput');
squadInputLabel.innerHTML="Escadron";
printdiv.appendChild(squadInput);
printdiv.appendChild(squadInputLabel);

let upgradeInput = document.createElement('input');
upgradeInput.setAttribute('id','upgradeInput');
upgradeInput.setAttribute('name','upgradeInput');
upgradeInput.setAttribute('checked',true);
let upgradeInputLabel = document.createElement('label');
upgradeInputLabel.setAttribute('for','upgradeInput');
upgradeInputLabel.innerHTML="Détails des Améliorations";
printdiv.appendChild(upgradeInput);
printdiv.appendChild(upgradeInputLabel);



for (i=0 ; i<shipquantity+1 ; i++) {
    let baseInput = document.createElement('input');
    baseInput.setAttribute('id','baseInput'+i);
    baseInput.setAttribute('name','PrintBase');
    baseInput.setAttribute('value',pilot_list[i]['id']); //we get the data baseInput:48
    let baseInputLabel = document.createElement('label');
    baseInputLabel.setAttribute('for','baseInput'+i);
    baseInputLabel.innerHTML="BASE de "+pilot_list[i]['name'];
    printdiv.appendChild(baseInput);
    printdiv.appendChild(baseInputLabel);
}


for (i=0 ; i<shipquantity+1 ; i++) {
    let dialInput = document.createElement('input');
    dialInput.setAttribute('id','dialInput'+i);
    dialInput.setAttribute('name','PrintDial');
    dialInput.setAttribute('value',pilot_list[i]['id']);
    let dialInputLabel = document.createElement('label');
    dialInputLabel.setAttribute('for','dialInput'+i);
    dialInputLabel.innerHTML="DIAL de "+pilot_list[i]['name'];
    printdiv.appendChild(dialInput);
    printdiv.appendChild(dialInputLabel);

}

printform.appendChild('printdiv');
document.body.appendChild('printform');

