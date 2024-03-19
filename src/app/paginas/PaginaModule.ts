import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports:[
    CommonModule
  ],
  declarations:[
    PagListaVehiculosComponent
  ],
  exports:[
    PagListaVehiculosComponent
  ]
})
export class PaginaModule{

}
