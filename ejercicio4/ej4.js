let metros
let pulgadas
let medida

metros=Number(prompt("ingrese medida en metros"))
pulgadas=0.0254

function conversion(metros,pulgadas){
    return metros/pulgadas

}
medida=conversion
alert(metros +  " metros " + "en pulgadas son: " + medida(metros,pulgadas) + " pulgadas")
console.log(metros +  "metros " + "en pulgadas son: " + medida(metros,pulgadas) + "pulgadas")