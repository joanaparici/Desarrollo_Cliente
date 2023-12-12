
"use strict"
function pintaCalendario(mes,anyo){

let nombreMeses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let nombreDias=["L","M","X","J","V","S","D"]
let diasMes=[31,28,31,30,31,30,31,31,30,31,30,31]


let fecha=new Date()
fecha.setDate("01")
fecha.setMonth(mes)
fecha.setFullYear(anyo)


let dias=diasMes[mes]
let diaSemana=fecha.getDay()==0?7:fecha.getDay()

let miCalendario=`<h2>${nombreMeses[mes]} de ${anyo}</h2>`
miCalendario+="<table border=1><tr><td>L<td>M<td>X<td>J<td>V<td>S<td>D<tr>"

let diasEnFila=1;
for(let i=2-diaSemana;i<=diasMes[mes];i++){
    miCalendario+=(i<=0)?"<td>":"<td>"+i
    if (diasEnFila%7==0)
        miCalendario+="<tr>"
    diasEnFila++;
}

miCalendario+="</table>"
document.getElementById("calendario").innerHTML=miCalendario
}

pintaCalendario(Number(prompt("Dime mes...")),Number(prompt("Dime anyo...")))