let radio
let pi
let area

radio=Number (prompt("ingrese el radio de la circunferencia"))
pi=3.1416

function calculararea(radio,pi){
    return pi*radio**2
}
area= calculararea
alert("el area de la circunferencia es " + area(radio,pi))
console.log("el area de la circunferencia es " + area(radio,pi))