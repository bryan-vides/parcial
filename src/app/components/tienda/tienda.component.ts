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
        "nombre": "The Legend of Zelda: Breath of the Wild",
        "consola": "Nintendo Switch",
        "precio": 599.99,
        "imagen": "assets/imgs/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        "descripcion": "Explora un mundo abierto lleno de aventuras y peligros en el último juego de la saga de Zelda."
      },
      {
        "nombre": "Red Dead Redemption 2",
        "consola": "PlayStation 4",
        "precio": 549.99,
        "imagen": "assets/imgs/Red_Dead_Redemption_II.jpg",
        "descripcion": "Únete a la banda de forajidos liderada por Arthur Morgan y sobrevive en el lejano oeste."
      },
      {
        "nombre": "Super Mario Odyssey",
        "consola": "Nintendo Switch",
        "precio": 564.99,
        "imagen": "assets/imgs/Super_Mario_Odyssey.jpg",
        "descripcion": "Únete a Mario en una aventura épica para rescatar a la princesa Peach de las garras de Bowser."
      },
      {
        "nombre": "God of War",
        "consola": "PlayStation 4",
        "precio": 339.99,
        "imagen": "assets/imgs/God_of_War_4_cover.jpg",
        "descripcion": "Acompaña a Kratos y a su hijo Atreus en una emocionante aventura llena de mitología nórdica."
      },
      {
        "nombre": "Animal Crossing: New Horizons",
        "consola": "Nintendo Switch",
        "precio": 549.99,
        "imagen": "assets/imgs/Animal_Crossing_New_Horizons.jpg",
        "descripcion": "Construye tu propia isla paradisíaca y vive la vida de tus sueños en este juego de simulación relajante y divertido."
      },
      {
        "nombre": "The Last of Us Part II",
        "consola": "PlayStation 4",
        "precio": 244.99,
        "imagen": "assets/imgs/TLOU_P2_Box_Art_2.png",
        "descripcion": "Acompaña a Ellie en su viaje por un mundo post-apocalíptico lleno de peligros y dilemas morales."
      },
      {
        "nombre": "Super Smash Bros. Ultimate",
        "consola": "Nintendo Switch",
        "precio": 356.99,
        "imagen": "assets/imgs/Super_Smash_Bros._Ultimate.jpg",
        "descripcion": "Únete a tus personajes favoritos de Nintendo en la pelea más épica de todos los tiempos."
      },
      {
        "nombre": "Horizon Zero Dawn",
        "consola": "PlayStation 4",
        "precio": 429.99,
        "imagen": "assets/imgs/Horizon_Zero_Dawn.jpg",
        "descripcion": "Explora un mundo post-apocalíptico lleno de máquinas gigantes en este juego de aventuras y acción."
      },
      {
        "nombre": "Mario Kart 8 Deluxe",
        "consola": "Nintendo Switch",
        "precio": 554.99,
        "imagen": "assets/imgs/MarioKart8Boxart.jpg",
        "descripcion": "Compite contra tus amigos en el juego de carros mas amado de todos."
      }
    ]
  };

  buscarEnGoogle(nombreImagen: string) {
    window.open(`https://www.google.com/search?q=${nombreImagen}`);
  }
  
}
