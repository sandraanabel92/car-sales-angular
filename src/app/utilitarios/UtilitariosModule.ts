import { NgModule } from "@angular/core";
import {AEspacioPipe} from "./pipes/AEspacio.pipe";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    AEspacioPipe,
    CalificacionComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
  ],
  exports:[
    AEspacioPipe,
    CalificacionComponent
  ]


})

export class UtilitariosModule{

}
