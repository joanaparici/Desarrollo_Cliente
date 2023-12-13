import { Component } from '@angular/core';
import { Articulo } from '../modelos/articulo';
import { articulos } from '../modelos/articulos';

@Component({
  selector: 'app-articulo,',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent {
  misArticulos = articulos;

  botonActivo: boolean = true;

  ngOnInit() {
    console.log('ngOnInit...');
    setTimeout(() => {
      alert('Activo boton...');
      this.botonActivo = false;
    }, 5000);
  }

  // articulo: Articulo = this.articulos[3];
}
