let duracion;
let costominuto;
let total;

costominuto= Number(prompt("ingreseel costo del minuto"))
duracion=Number(prompt("¿cuantos minutos duro la llamada"))

function costo(duracion,costominuto){
    total=duracion*costominuto
    return total
}
alert("el total a pagar es  " + costo(costominuto,duracion) + "$")