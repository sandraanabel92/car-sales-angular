import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./PagListaVehiculos/PagListaVehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports:[
    CommonModule,
    FormsModule
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
