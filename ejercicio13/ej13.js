let sueldo
let semana
let ahorro


sueldo =Number(prompt("ingrese sueldo mensual"))


function ahorrosemanal(sueldo){
    semana=(sueldo/4)*0.15
    return semana
}
alert("el ahorro semanal es " + ahorrosemanal(sueldo) + "$")

function ahorroanual(sueldo){
    ahorro=sueldo*12*0.15
    return ahorro
}
ahorro=ahorroanual
alert(" el ahorro anual es" + ahorroanual(sueldo) + "$")