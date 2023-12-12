class Carrito {
    constructor() {
        this.articulos = [];
    }

    anyadeArticulo(articulo) {
        if (this.articulos.find(a => a.codigo == articulo.codigo)) {
            articulo.unidades += 1
        } else {
            articulo.unidades = 1
            this.articulos.push(articulo)
        }
    }

    borraArticulo(codigo) {
        this.articulos = this.articulos.filter(articulo => articulo.codigo !== codigo);
        this.verCarrito()
    }

    modificaUnidades(codigo, unidadesAModificar) {
        const articulo = this.articulos.find(a => a.codigo === codigo);
        if (articulo) {
            articulo.unidades += unidadesAModificar;
            if (articulo.unidades <= 0) {
                // Si las unidades son 0 o negativas, se elimina el artículo
                this.borraArticulo(codigo);
            }
        }
        this.verCarrito()
    }


    verCarrito() {
        const dialogo = document.getElementById('miDialogo');
        const dialogContent = document.getElementById('dialogContent');
        const dialogFooter = document.getElementById('dialogFooter');
        let total = 0;

        dialogContent.innerHTML = ''; // Limpiamos el contenido existente
        const tabla = document.createElement('table');
        tabla.innerHTML = `
        <table>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Unidades</th>
                <th>Total</th>
                <th>Acciones</th>
            </tr>
        </table>
        `;

        this.articulos.forEach((articulo, index) => {
            const fila = tabla.insertRow();
            fila.innerHTML = `
                <td><img src="assets/${articulo.codigo}.jpg" alt="${articulo.nombre}" style="width: 50px;"></td>
                <td>${articulo.nombre}</td>
                <td>${articulo.descripcion}</td>
                <td>${articulo.precio}€</td>
                <td>${articulo.unidades}</td>
                <td>${(articulo.precio * articulo.unidades)}€</td>
                <td>
                    <button id="${articulo.codigo}" class="sumar button">+</button>
                    <button id="${articulo.codigo}" class="restar button">-</button>
                    <button id="${articulo.codigo}" class="eliminar button">Borrar</button>
                </td>
            `;
            total += articulo.precio * articulo.unidades;
        });

        dialogContent.appendChild(tabla);
        dialogFooter.querySelector('#total').textContent = `${total}€`;
        dialogo.showModal(); // Mostrar el diálogo como modal

        const idPedido = document.getElementById('idPedido');
        idPedido.textContent = "Nº 748" // Math.floor(Math.random() * 1000);


        let sumar = document.getElementsByClassName("sumar")
        Array.from(sumar).forEach(boton => {
            boton.addEventListener('click', () =>
                this.modificaUnidades(boton.id, +1)
            )
        });

        let restar = document.getElementsByClassName("restar")
        Array.from(restar).forEach(boton => {
            boton.addEventListener('click', () =>
                this.modificaUnidades(boton.id, -1)
            )
        });

        let eliminar = document.getElementsByClassName("eliminar")
        Array.from(eliminar).forEach(boton => {
            boton.addEventListener('click', () =>
                this.borraArticulo(boton.id)
            )
        });
    }
}
