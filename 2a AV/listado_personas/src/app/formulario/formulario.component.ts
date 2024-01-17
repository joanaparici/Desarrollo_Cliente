import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  //Two way data binding

  // nombreImput: string = '';
  // apellidoImput: string = '';

  @ViewChild('nombreImput') nombreImput: ElementRef;
  @ViewChild('apellidoImput') apellidoImput: ElementRef;

  //Local reference
  agregarPersona() {
    console.log('agregado');
    let persona1 = new Persona(
      this.nombreImput.nativeElement.value,
      this.apellidoImput.nativeElement.value
    );
    this.personaCreada.emit(persona1);
  }
}