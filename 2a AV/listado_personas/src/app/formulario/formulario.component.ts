import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();
  nombreImput: string = '';
  apellidoImput: string = '';

  agregarPersona() {
    console.log('Persona agregada');
    let persona1 = new Persona(this.nombreImput, this.apellidoImput);
    this.personaCreada.emit(persona1);
  }

}
