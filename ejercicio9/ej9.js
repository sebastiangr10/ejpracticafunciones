let distancia;
let velocidad;
let tiempo;

distancia= Number(prompt("ingrese la distancia entre las ciudades en km"))
velocidad=Number(prompt("¿a cuantos km/h va?"))

function tiempollegada(distancia,velocidad){
    tiempo=distancia/velocidad
    return tiempo
}
alert("el tiempo que tarda es " + tiempollegada(distancia,velocidad) + " horas")