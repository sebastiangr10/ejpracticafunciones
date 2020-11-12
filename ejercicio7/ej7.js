let litros;
let galones;
let valorgalon;
let ganancia;

litros=Number(prompt("ingrese los litros vendidos"))
galones=litros/3785
alert("galones vendidos= "+ galones)
valorgalon=Number(prompt("precio por galon"))
function pago(valorgalon, galones){
    ganancia=galones*valorgalon
    return ganancia
}
alert("su ganancia es " + pago(valorgalon,galones) + "$")