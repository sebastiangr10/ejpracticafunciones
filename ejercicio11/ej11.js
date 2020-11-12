let consumo;
let preciokw;
let total;

preciokw= Number(prompt("ingrese el valor de kw"))
consumo=Number(prompt("número de kw consumidos"))

function costo(preciokw,  consumo){
    total=preciokw*consumo
    return total
}
alert("su factura este mes es de   " + costo(preciokw, consumo) + "$")