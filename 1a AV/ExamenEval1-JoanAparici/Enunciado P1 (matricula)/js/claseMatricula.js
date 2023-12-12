// Definicion clase Matricula		
class Matricula {
    constructor() {
        let dni = null;
        let nombre = null;
        let modulos = [];

        const listaProfes = document.getElementById('listaProfes');
        profesores.forEach(profesor => {
            const option = document.createElement('option');
            option.value = profesor;
            option.textContent = profesor;
            listaProfes.appendChild(option);
        });
    }

    anyadeModulo(codigo) {
        const modulo = modulos.find(modulo => modulo.codigo === codigo);
        if (modulo) {
            alert('Ya has matriculado este modulo');
        } else {
            modulos.push(modulo);
            this.verMatricula();
        }
    }


    borraModulo(codigo) {
        this.modulo = modulos.filter(modulo => modulo.codigo !== codigo);

    }

    verMatricula() {
        const capaMatricula = document.getElementById('capamatricula');

        capaMatricula.innerHTML = '';

        capaMatricula.innerHTML = ` <table class='table table-bordered table-striped'>
                <tr>
             <td> <td>${modulos.nombre} <td>${modulos.creditos}<td><button class='btn btn-danger'>Borrar</button>
                </table>`;
    }
}