import { Component } from '@angular/core';


@Component({
  selector: 'app-mision',
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionComponent {
  
  //mision: any;
  mision = {
      titulo: 'Misión',
      texto: 'En nuestra página web, nos dedicamos a ofrecer a nuestros clientes una amplia selección de videojuegos de consolas a precios más accesibles, y si es necesario, restaurados. Nos esforzamos por ser una plataforma confiable y segura para la compra y venta de videojuegos, y brindamos un servicio de alta calidad a los coleccionistas de videojuegos.'
  };

  
  //ngOnInit(): void {
  //  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //  //Add 'implements OnInit' to the class.
  //  console.log('Test de mision')
  //  this.bs.getMision().subscribe(
  //    data => {
  //      this.mision = data;
  //    }
  //  );
  //  console.log(this.mision)
  // }

}
