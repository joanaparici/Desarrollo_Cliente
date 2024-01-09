import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  titulo: string = 'Aplicación de calculadora';
  num1: number = 0;
  num2: number = 0;
  total: number = 0;

  sumarNumeros(): void {
    this.total = this.num1 + this.num2;
  }
}
