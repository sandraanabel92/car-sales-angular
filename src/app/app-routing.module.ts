import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path:"vehiculos",
    component:PagListaVehiculosComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"

  },
  {
    path:"**",
    component: HomeComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
