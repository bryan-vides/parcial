import { Component } from '@angular/core';


@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent {
  
  vision = {
    titulo: 'Visión',
    texto: 'Queremos ser la principal plataforma de compraventa de videojuegos de consolas para coleccionistas. Deseamos expandir nuestra presencia en el mercado y establecernos como una fuente confiable de videojuegos de alta calidad a precios más accesibles, y si es necesario, restaurados. Aspiramos a proporcionar a nuestros clientes una experiencia de compra satisfactoria y un servicio excepcional.'
};

  
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.bs.getVision().subscribe(
  //     data => {
  //       this.vision = data;
  //     }
  //   );
    
  // }
}
