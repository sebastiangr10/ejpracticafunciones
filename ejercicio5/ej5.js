let valor
let tiempo
let cobro

valor=Number(prompt("ingrese el valor de la hora"))
tiempo=Number(prompt("ingrese las horas que estuvó estacionado"))

function calcular(valor,tiempo){
    return valor*tiempo
}
cobro=calcular
alert("debe pagar " + calcular(valor,tiempo) + "$" )
console.log("debe pagar " + calcular(valor,tiempo) + "$" )