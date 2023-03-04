import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'mision', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'mision', component: MisionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'tienda', component: TiendaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }