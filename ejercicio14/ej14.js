let dias
let hotel
let comida
let gastos
let valorhotel
let valorcomida
let valortotal

dias= Number(prompt("ingrese cuantos dias estara en bogotá"))
hotel= Number(prompt("ingrese el costo del hotel por día"))
comida= Number(prompt("ingrese el valor de la comida"))
gastos=200000*dias

function photel(dias,hotel){
    valorhotel=dias*hotel
    return valorhotel
}
alert("el valor del hotel es " + photel(dias,hotel) + " pesos ")

function pcomida(dias,comida){
    valorcomida=(comida *dias)
    return valorcomida
}
alert("la comida tiene un costo de " + pcomida(dias,comida)+ " pesos ")
alert( "otros gastos son " + gastos + " pesos ")

function total( valorhotel,valorcomida,gastos){
    valortotal=(valorhotel + valorcomida + gastos)
    return valortotal
}
alert(" el valor total de los gastos es " + total(valorhotel , valorcomida, gastos) + " pesos ")