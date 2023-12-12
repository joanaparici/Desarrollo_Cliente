"use strict"
function creaBotones(pizza){
    let botones = document.createElement('button');

    botones.textContent = pizza.nombre
    botones.id = pizza.codigo
    botones.classList.add("btn")


    document.querySelector('.botones').appendChild(botones)
}

    pizzas.forEach(pizza => {
        creaBotones(pizza)
    })



let botons = document.querySelectorAll(".btn")
console.log(botons)
Array.from(botons).forEach(b => b.addEventListener("click", mostrarPizza))

function mostrarPizza(){

    document.querySelector(".fotopizza").innerHTML = ""  //Limpia la foto cada vez que llamo a mostrarPizza
    let id = this.id
    console.log(id)
    let fotopizza = document.createElement("img")
    fotopizza.classList.add("imagencss")
    fotopizza.src = ("./assets/" + id +".jpg")
    document.querySelector('.fotopizza').appendChild(fotopizza)
}


mostrarPizza()