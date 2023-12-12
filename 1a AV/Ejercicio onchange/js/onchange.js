// Listener para el cambio en el select de trimestre
document.getElementById("trimestre").addEventListener("change", function () {
    let selectedValue = this.value;

    // Acceder a los meses correctos basado en el trimestre seleccionado
    let mesesDelTrimestre = datos.find(d => d.trimestre === selectedValue).meses;

    // Obtener el select de meses y limpiarlo
    let selectMeses = document.getElementById("meses");
    selectMeses.innerHTML = '';

    // Llenar el select de meses con las opciones correctas usando funciones de flecha
    mesesDelTrimestre.forEach(mes => {
        let option = document.createElement("option");
        option.value = mes;
        option.innerText = mes
        selectMeses.appendChild(option);
    });
});
document.getElementById("meses").addEventListener("change", function () {
    document.getElementById("mes").innerHTML = "El mes es " + document.getElementById("meses").value;
});


// //EXPLICADO
// // Añadir un listener para el evento "change" (cambio) al elemento con id "trimestre"
// document.getElementById("trimestre").addEventListener("change", function () {
//     // Almacenar el valor seleccionado del "select" en la variable selectedValue
//     let selectedValue = this.value;
//
//     // Buscar en el array "datos" el objeto que tenga el "trimestre" igual al valor seleccionado y extraer sus "meses"
//     let mesesDelTrimestre = datos.find(d => d.trimestre === selectedValue).meses;
//
//     // Obtener el elemento "select" de meses
//     let selectMeses = document.getElementById("meses");
//     // Limpiar el "select" de meses, eliminando todas sus opciones
//     selectMeses.innerHTML = '';
//
//     // Iterar sobre cada mes del trimestre seleccionado
//     mesesDelTrimestre.forEach(mes => {
//         // Crear un nuevo elemento "option" para el "select"
//         let option = document.createElement("option");
//         // Establecer el valor de la opción con el nombre del mes
//         option.value = mes;
//         // Establecer el texto visible de la opción con el nombre del mes
//         option.innerText = mes;
//         // Añadir la opción creada al "select" de meses
//         selectMeses.appendChild(option);
//     });
// });
