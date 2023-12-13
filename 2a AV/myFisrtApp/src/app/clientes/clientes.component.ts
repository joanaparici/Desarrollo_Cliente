import { Component } from '@angular/core';
import { clientes } from '../Modelos/clientes';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  title = 'myFisrtApp';
  users = [
    'Ryan',
    'Joe',
    'Camille',
    'John',
    'Mike',
    'Sara',
    'Chris',
    'Jill',
    'Jack',
    'Eli',
    'Sue',
  ];

misClientes= clientes;
}
