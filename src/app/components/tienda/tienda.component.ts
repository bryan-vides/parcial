import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  tienda = {
    productos: [
      {
        nombre: 'Producto 1',
        precio: 100,
        imagen: 'ruta/a/imagen1.jpg'
      },
      {
        nombre: 'Producto 2',
        precio: 200,
        imagen: 'ruta/a/imagen2.jpg'
      },
      {
        nombre: 'Producto 3',
        precio: 300,
        imagen: 'ruta/a/imagen3.jpg'
      }
    ]
  };
}
