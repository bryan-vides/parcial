import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor(private router: Router) { }

  navigateToMision(): void {
    console.log('mision ... ')
    this.router.navigate(["mision"]);
  }
  
  navigateToVision(): void {
    console.log('vision ... ')
    this.router.navigate(["vision"]);
  }

  navigateToTienda(): void {
    console.log('tienda ... ')
    this.router.navigate(["tienda"]);
  }
}
