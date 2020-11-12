let nota1;
let nota2;
let nota3;
let promedio;

nota1=Number(prompt("ingrese la nota del primer examen"))
nota2=Number(prompt("ingrese la nota del segundo examen"))
nota3=Number(prompt("ingrese la nota del tercer examen"))

function promediar(nota1,nota2,nota3){
    promedio=(nota1*0.25)+(nota2*0.25)+(nota3*0.50)
    return promedio
}
alert("el promedio es " + promediar(nota1,nota2,nota3))