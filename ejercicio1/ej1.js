let base
let altura
let area

base=Number(prompt("ingrese la medida de la base del rectángulo"))
altura=Number(prompt("ingrese la medida de la altura del rectángulo"))

 function calculararea(base,altura){
     return base*altura
    
}
area=calculararea
alert("el area del rectángulo es " + area(base,altura))
console.log("el area del rectángulo es " + area(base,altura))