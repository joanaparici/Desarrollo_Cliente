"use strict"  // Utiliza el modo estricto de JavaScript para prevenir errores comunes

// Obtiene el elemento con el ID "main" del documento y lo asigna a la variable "capa"
let capa = document.getElementById("main")

// Define una función llamada "creaP"
function creaP(){
    // Crea un nuevo elemento de párrafo y lo asigna a la variable "p"
    let p = document.createElement("p")
    

    // Solicita al usuario que ingrese un texto a través de un cuadro de diálogo y crea un nodo de texto con ese valor
    let t= document.createTextNode(prompt("Dime texto"))
    
    // Agrega el nodo de texto al elemento de párrafo
    p.appendChild(t)
    
    // Agrega el elemento de párrafo al elemento "capa" (que es el elemento con el ID "main")
    capa.appendChild(p)
    
    // Muestra una alerta al usuario indicando que se ha creado un párrafo
    alert("Creamos Parrafo")
}

function creaImg(){

    let i = document.createElement("img")
    i.src="./Assets/IA_img.jpg"
    capa.appendChild(i)

}

function seleccionar(){
    let parrafos = document.getElementsByTagName("p")
    console.log(parrafos)
    Array.from(parrafos).forEach(p=>console.log(p.innerHTML))
    Array.from(parrafos).forEach(p=>console.log(p.firstChild.nodeValue))
}

function seleccionarPorCapas(){
    let capaSel=prompt("Dime c1 o c2")
    let c=document.getElementById(capaSel)
    console.log(c)

    let parrafos=c.getElementsByTagName("p")
    Array.from(parrafos).forEach(p=>console.log(p.innerHTML))
}

function seleccionarPorClase(){
    let textos=document.getElementsByClassName("text-primary")
    Array.from(textos).forEach(p=>console.log(p.innerHTML))
}

function creaBoton(){
    let btn=document.createElement("button")
    btn.innerHTML="Pulsame"
    document.body.appendChild(btn)

    // //funcion anonima "sintaxis tradicional"
    // btn.onclick=function(){
    //     alert("Pulsaste con cariño")
    // }
    //btn.onclick=()=>alert("has pulsado con mucho cariño en fat arrow")
    // btn.onclick=function(){
    //     creaP2("Texto desde boton")
    // }
    btn.onclick=()=>creaP2("Texto desde boton con fat arrow")
}


function creaP2(texto){
    let p = document.createElement("p")

    p.textContent=texto

    capa.appendChild(p)
}

function asignarEvento(){

    let tit = document.getElementById("titulo")
    tit.onclick=()=>alert("Ahora tengo click...")
}

function cambiarTodo(){
    let btns= document.getElementsByTagName("button")
    Array.from(btns).forEach(b=>b.onclick=()=>alert("hola"))
}
