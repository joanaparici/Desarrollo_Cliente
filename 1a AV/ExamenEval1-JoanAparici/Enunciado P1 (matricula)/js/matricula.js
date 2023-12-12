// Implementar lógica de la página
let profesores = ['Salva', 'Cesar', 'Lorenzo', 'Eva'];


window.onload = () => {

    let matricula = new Matricula();
    matricula.verMatricula();
    window.matricula = matricula;

    const dialogo = document.getElementById('formDatos');
    const btnAbreDatosPersonales = document.getElementById('btnAbreDatosPersonales');
    btnAbreDatosPersonales.addEventListener('click', () => {
        dialogo.showModal();
    });

    const btnCierraDatosPersonales = document.getElementById('btnCierraDatosPersonales');
    btnCierraDatosPersonales.addEventListener('click', () => {
        dialogo.close();
    });

    const container = document.getElementById('contenedor');
    container.innerHTML = '';

    modulos.forEach(modulo => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';

        const productCard = document.createElement('div');
        productCard.className = 'card flex';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const image = document.createElement('img');
        image.src = `assets/${modulo.nombre}.png`;
        image.className = 'card-img-top';
        cardBody.appendChild(image);


        productCard.appendChild(cardBody);

        const btn = document.createElement('button');
        btn.id = modulo.codigo;
        btn.className = 'btn btn-danger';
        btn.textContent = modulo.nombre;
        btn.addEventListener('click', function () {
            matricula.anyadeModulo(modulo.codigo);
        });
        productCard.appendChild(btn);

        colDiv.appendChild(productCard);
        container.appendChild(colDiv);
    });
}