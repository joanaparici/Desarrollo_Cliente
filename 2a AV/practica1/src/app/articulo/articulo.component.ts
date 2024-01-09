import { Component } from '@angular/core';
import { articulos } from '../modelos/mock-articulos';
import { Articulo } from '../modelos/articulo';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-articulo,',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
})
export class ArticuloComponent {
  misArticulos: Articulo[] = articulos;
  // position:number = 2
  articulo: Articulo = this.misArticulos[2];


  botonApagado: boolean = true;

  // ngOnInit() {
  //   console.log('ngOnInit...');
  //   setTimeout(() => {
  //     alert('Activo boton...');
  //     this.botonApagado = false;
  //   }, 5000);
  // }


  
  // choosePosition(){
  //   //prompt puede devolver un string o un null
  //   let elemento:string | null = prompt("Seleccionar posición del articulo...");

  //   if(elemento==null){
  //     alert("Error. Artículo no encontrado")
  //   } else {
  //     if(isNaN(parseInt(elemento))){ // para comprobar si lo escrito es un número o no (si escribiera Pepe)
  //       alert("Error. Selección no numérica")
  //     } else {
  //       if(parseInt(elemento)>=this.misArticulos.length || parseInt(elemento) < 0){
  //         alert("Error. No existe el artículo")
  //       } else {
  //         this.articulo = this.misArticulos[parseInt(elemento)]
  //       }
  //     }
  //   }
  // }

  activar() {
    this.botonApagado = false;
  }

  desactivar() {
    this.botonApagado = true;
  }

  // articulo: Articulo = this.articulos[3];
}
