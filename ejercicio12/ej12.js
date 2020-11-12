let articulo
let descuento
let iva 
let preciodesc
let total

articulo=Number(prompt("ingrese el precio del articulo"))

descuento= articulo*0.20

preciodesc=articulo-descuento
alert("el precio con descuento es " + preciodesc + "$")
 iva= articulo*0.19

 function precio(articulo,descuento,iva){
     total=(articulo+iva)-descuento
     return total
 }
 alert("el total a pagar es " + precio(articulo,descuento,iva) + "$")