let sandalias;
let tennis;
let mocasines;
let cliente;
let cantidadS;
let cantidadT;
let cantidadM;
let descuento;
let precioInicial;
let precioFinal;

sandalias=Number(prompt("ingrese el precio de las sandalias"));
tennis=Number(prompt("ingrese el precio de los tennis"));
mocasines=Number(prompt("ingrese el precio de los mocasines"));
cliente=(prompt("nombre del cliente"));

cantidadS=Number(prompt("ingrese la cantidad de sandalias que compró el cliente"));
cantidadT=Number(prompt("ingrese la cantidad de tennis que compró el cliente"));
cantidadM=Number(prompt("ingrese la cantidad de mocasines que compró el cliente"));

precioInicial=((sandalias*cantidadS)+(tennis*cantidadT)+(mocasines*cantidadM))*1.55;
 
 
      
 
 
 alert ("el precio inicial de la compra es " + precioInicial)

 descuento= precioInicial*0.08
 console.log(descuento)

 function calcprecio(precioInicial,descuento) {
     return(precioInicial-descuento)*1.19

    
 }
precioFinal=calcprecio
 alert("el precio de su compra es " + calcprecio(precioInicial,descuento)+"$") 
 console.log("el precio de su compra es " + calcprecio(precioInicial,descuento) + "$") 