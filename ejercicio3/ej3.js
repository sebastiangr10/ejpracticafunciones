let base
let altura
let area

base=Number(prompt("ingrese la medida de la base del triángulo"))
altura=Number(prompt("ingrese la medida de la altura del triángulo"))

 function calculararea(base,altura){
     return (base*altura)/2
    
}
area=calculararea
alert("el area del triángulo es " + area(base,altura))
console.log("el area del triángulo es " + area(base,altura))