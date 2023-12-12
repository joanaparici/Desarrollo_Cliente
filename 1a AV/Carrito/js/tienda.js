criterios = ["Sin ordenar", "Ascendente por precio", "Descendente por precio"]


window.onload = () => {
    let carrito = new Carrito();  // Crea una instancia de Carrito
    creaListaCriterios(carrito);
    pintaArticulos(carrito);
    verCarro(carrito)

    window.carrito = carrito;  // Asigna la instancia a la ventana global para acceder a ella desde otros lugares

    const dialogo = document.getElementById('miDialogo');
    document.getElementById('btnCierraDialog').addEventListener('click', () => {
        dialogo.close();
    })
    document.getElementById('btnEfectuaPedido').addEventListener('click', efectuaPedido);
}


function creaListaCriterios() {
    let selectOrder = document.getElementById("criteriosOrdenacion");
    criterios.forEach(p => {
        let criteriosName = document.createElement("option");
        let text = document.createTextNode(p);
        criteriosName.appendChild(text);
        selectOrder.appendChild(criteriosName);
    });

    // Mueve el evento de escucha fuera del bucle forEach
    selectOrder.addEventListener("change", function () {
        let selectedValue = selectOrder.value;
        pintaArticulos(selectedValue);
    });
}


function pintaArticulos(orden) {
    const container = document.getElementById('contenedor');

    if (orden === "Sin ordenar") {
        listaArticulos = [...listaArticulosOriginal];
    } else if (orden === "Ascendente por precio") {
        listaArticulos.sort((a, b) => a.precio - b.precio);
    } else if (orden === "Descendente por precio") {
        listaArticulos.sort((a, b) => b.precio - a.precio);
    }

    // Itera sobre cada artículo en listaArticulos
    container.innerHTML = '';
    listaArticulos.forEach(articulo => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col';

        const productCard = document.createElement('div');
        productCard.className = 'card flex';

        const productImage = document.createElement('img');
        productImage.src = `assets/${articulo.codigo}.jpg`;
        productImage.className = 'card-img-top';
        productCard.appendChild(productImage);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = articulo.nombre;
        cardBody.appendChild(title);

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = articulo.descripcion;
        cardBody.appendChild(description);

        const price = document.createElement('p');
        price.className = 'card-text text-center';
        price.textContent = `${articulo.precio}€`;
        cardBody.appendChild(price);

        productCard.appendChild(cardBody);

        const btn = document.createElement('button');
        btn.id = articulo.codigo;
        btn.className = 'btn btn-success';
        btn.textContent = 'Comprar';
        btn.addEventListener('click', function () {
            ponArticuloEnCarrito(articulo.codigo);
        });
        productCard.appendChild(btn);

        colDiv.appendChild(productCard);
        container.appendChild(colDiv);
    });

}

function ponArticuloEnCarrito(codigo) {
    let articulo = listaArticulos.find(a => a.codigo === codigo)
    carrito.anyadeArticulo(articulo)
}


function verCarro(carrito) {
    document.getElementById("imagenCarrito").addEventListener("click", function () {
        if (carrito.articulos.length === 0) {
            alert("El carrito está vacío")
        } else {
            carrito.verCarrito();
        }

    })
}


function efectuaPedido() {

    alert("¡Gracias por tu pedido!");
    let carritoComprado = (JSON.stringify(carrito));
    carrito.articulos = [];

    console.log(carritoComprado)

    const dialogo = document.getElementById('miDialogo');
    dialogo.close();
}




