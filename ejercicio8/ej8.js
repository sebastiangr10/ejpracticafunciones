let kms;
let costokm;
let boleto;


kms=Number(prompt("ingrese cantidad de kms del viaje"))
costokm=Number(prompt("ingrese el costo por km"))

function costobol(kms,costokm){
    boleto=kms*costokm
    return boleto;

    
}
 alert("el costo del boleto es " + costobol(kms,costokm) + "$")