//CON INNER.HTML

// function getCharacterName(character) {           // Obtiene el nombre del personaje
//     return character.name;
// }

// function getCharacterImage(character) {          // Obtiene la imagen del personaje
//     return character.image;
// }

// function displayCharacter(character) {           // Muestra un personaje en la página
//     const container = document.querySelector('.characterContainer');  // Selecciona el contenedor del personaje

//     //Crea la tarjeta del personaje con su información
//     const characterCard = `                     
//         <div class="character-card">
//             <img onclick="alert('¡Hola,soy ${character.name}')" src="${character.image}" alt="${character.name}">
//             <p>${character.name}</p>
//             <p>${character.species}</p>
//         </div>
//     `;

//     container.innerHTML += characterCard;        // Añade la tarjeta del personaje al contenedor
// }

// function displayAllCharacters() {                // Muestra todos los personajes
//     personajes.results.forEach(character => {    // Itera sobre cada personaje
//         const simplifiedCharacter = {           // Crea un objeto simplificado del personaje
//             name: character.name,
//             image: character.image,
//             species: character.species
//         };
//         displayCharacter(simplifiedCharacter);   // Muestra el personaje simplificado
//     });
// }

// displayAllCharacters();                         // Llama a la función para mostrar todos los personajes


function displayCharacter(character) {
    const container = document.querySelector('.characterContainer');  // Selecciona el contenedor principal

    // Crear el contenedor de la tarjeta del personaje
    const characterCard = document.createElement('div');
    characterCard.className = 'character-card';                      // Establece la clase de la tarjeta
    characterCard.setAttribute('data-id', character.id);             // Añade el ID del personaje como atributo

    // Crear y configurar la imagen del personaje
    const characterImage = document.createElement('img');
    characterImage.src = character.image;                            // Establece la fuente de la imagen
    characterImage.onclick = fichaPersonaje            // Añade evento al hacer clic
    characterCard.appendChild(characterImage);                       // Añade la imagen a la tarjeta

    // Añadir nombre, ID y especie del personaje a la tarjeta
    [character.name, character.id, character.species].forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;                                // Establece el texto del párrafo
        characterCard.appendChild(paragraph);                        // Añade el párrafo a la tarjeta
    });

    container.appendChild(characterCard);                            // Añade la tarjeta al contenedor principal
}

function fichaPersonaje() {
    let id = this.parentElement.getAttribute('data-id')
    let personaje = personajes.results.find(p => p.id === Number(id));

    console.log(personaje)
    document.querySelector(".imagenFicha").src = personaje.image
    document.querySelector(".idFicha").innerHTML = "Id: " + personaje.id
    document.querySelector(".nombreFicha").innerHTML = "Nombre: " + personaje.name
    document.querySelector(".statusFicha").innerHTML = "Estado: " + personaje.status
    document.querySelector(".speciesFicha").innerHTML = "Especies: " + personaje.species
    document.querySelector(".genderFicha").innerHTML = "Genero: " + personaje.gender


    document.querySelector(".fichaPersonaje").showModal()

    document.querySelector(".close").addEventListener("click", () => document.querySelector(".fichaPersonaje").close());

}


function displayAllCharacters() {
    personajes.results.forEach(character => {                        // Itera sobre cada personaje
        displayCharacter({                                          // Llama a la función para mostrar cada personaje
            id: character.id,
            name: character.name,
            image: character.image,
            species: character.species
        });
    });
}

displayAllCharacters();                                             // Llama a la función para mostrar todos los personajes


//MODO DE RAFA
// "use strict"
//
// console.log(personajes)
//
//
// let lista = document.getElementById("personajes-lista");  // Obtiene el elemento con el ID "personajes-lista" y lo asigna a la variable "lista".
//
// personajes.results.forEach(personaje => {               // Itera sobre cada elemento en el arreglo "results" dentro del objeto "personajes".
//     let divPersonaje = document.createElement('div');     // Crea un nuevo elemento <div> y lo asigna a la variable "divPersonaje".
//     divPersonaje.classList.add('personaje')
//
//     let imagen = document.createElement('img');           // Crea un nuevo elemento <img> y lo asigna a la variable "imagen".
//     imagen.src = personaje.image;                         // Establece el atributo "src" de la imagen con la URL de la imagen del personaje.
//     imagen.classList.add('personaje__img');
//
//     imagen.id = personaje.id;                         // asigna el valor del atributo id del elemento img (imagen) con el valor del id del personaje. Por ejemplo, si el personaje.id es 42, entonces el img tendrá id="42"
//     imagen.addEventListener('click', function(){
//         alert(`ID: ${personaje.id}\nName: ${personaje.name}\nStatus: ${personaje.status}\nSpecies: ${personaje.species}`);  //cuando escribimos this.id, estamos accediendo al atributo id de la imagen en la que se hizo clic. Esto significa que si la imagen tenía un id específico (que en este caso fue establecido como el ID del personaje), entonces this.id nos dará ese valor.
//         //console.log(`ID: ${personaje.id}\nName: ${personaje.name}\nStatus: ${personaje.status}\nSpecies: ${personaje.species}`);
//     })
//
//     let idPersonaje = document.createElement('p');          // Crea un nuevo elemento <p> y lo asigna a la variable "idElement".
//     idPersonaje.textContent = `ID: ${personaje.id}`;         // Establece el texto del elemento <p> con el ID del personaje.
//     idPersonaje.classList.add('personaje__id');
//
//     let namePersonaje = document.createElement('p');         // Crea un nuevo elemento <p> y lo asigna a la variable "nameElement".
//     namePersonaje.textContent = `Nombre: ${personaje.name}`; // Establece el texto del elemento <p> con el nombre del personaje.
//     namePersonaje.classList.add('personaje__name');
//
//     let botones = document.createElement('button');
//     botones.textContent = "Información";
//     botones.classList.add('btn');
//
//     let boton = document.getElementsByClassName("btn");
//     Array.from(boton).forEach(b=> b.addEventListener('click', ()=> alert(this.id)))
//
//     divPersonaje.appendChild(imagen);                 // Agrega la imagen como hijo del elemento <div> "divPersonaje".
//     divPersonaje.appendChild(idPersonaje);              // Agrega el elemento <p> con el ID como hijo del elemento <div> "divPersonaje".
//     divPersonaje.appendChild(namePersonaje);
//     divPersonaje.appendChild(botones);          // Agrega el elemento <p> con el nombre como hijo del elemento <div> "divPersonaje".
//
//     lista.appendChild(divPersonaje);                  // Agrega el elemento <div> "divPersonaje" como hijo del elemento con el ID "personajes-lista".
//
// });
