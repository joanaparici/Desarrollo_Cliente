"use strict"


window.onload = function () {
    let fotos = document.getElementsByTagName("img")
    Array.from(fotos).forEach(f => {
        f.addEventListener("mouseover", verFoto)
        f.addEventListener("mouseout", quitaFoto)
    })

    document.querySelector(".total").addEventListener("click", total)
}

function verFoto() {
    document.querySelector(".blanco").src = this.src
    console.log(this.src)
}

function quitaFoto() {
    document.querySelector(".blanco").src = "./assets/blanco.png"
}


document.querySelector(".btnTotal").addEventListener("click", calcularTotal)

function calcularTotal() {
    let inputs = document.getElementsByTagName("input")
    let importe = 0
    Array.from(inputs).forEach(i => {
        if (i.type === "checkbox" && i.checked)
            importe += parseInt(i.value)
    })
    console.log(importe)
    document.querySelector(".precio").innerHTML = "TOTAL: " + importe + "€"

}