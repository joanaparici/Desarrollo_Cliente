import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = '';
  titulo = 'Licenciado';

  mostrar:boolean = false

  agregarPersona() {
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }

  // modificarTitulo(event: Event) {
  //   console.log('Entrando a método modificar título');
  //   this.titulo = (event.target as HTMLInputElement).value;
  // }
}
