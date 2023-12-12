
"use strict"

//Calendario rellenando la primera fila primero y luego el resto

let nombreMeses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let nombreDias=["L","M","X","J","V","S","D"]
let diasMes=[31,28,31,30,31,30,31,31,30,31,30,31]


let fechaHoy=new Date()
fechaHoy.setDate("01")
let anyo=fechaHoy.getFullYear()

let mes=fechaHoy.getMonth()
let dias=diasMes[mes]
let diaSemana=fechaHoy.getDay()==0?7:fechaHoy.getDay()

//Encabezado
let miCalendario=`<h2>${nombreMeses[mes]} de ${anyo}  </h2>`
miCalendario+="<table border=1><tr><td>L<td>M<td>X<td>J<td>V<td>S<td>D<tr>"

//Primera fila->blancos
let blancos=diaSemana-1
for(let i=1;i<=blancos;i++){
    miCalendario+="<td>"
}
//Primera fila->numeros
for(let i=1;i<=7-blancos;i++){
    miCalendario+="<td>"+i
}

//Resto de filas
miCalendario+="<tr>"
let diasEnFila=1; 
for(let i=7-blancos+1;i<=diasMes[mes];i++){
    miCalendario+="<td>"+i
    if (diasEnFila%7==0)
        miCalendario+="<tr>"
    diasEnFila++;
} 

miCalendario+="</table>"
document.getElementById("calendario").innerHTML=miCalendario

