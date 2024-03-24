import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {


  formulario:FormGroup

  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {


    this.formulario  = this.formBuilder.group({
      "codigo": [],
      "marca": [],
      "modelo": [],
      "anio": [],
      "kilometraje": [],
      "precio": [],
      "calificacion": [],
      "foto":""
    });
  }

  ngOnInit() {
  }

  guardar(){
    let vehiculo:Vehiculo = {...this.formulario.value};
    this.vehiculoServicio.addvehiculo(vehiculo).subscribe(data =>{
      console.log('Data:',data);
      if (!data){
        alert('Error al guardar');
        return;
      }
    });
    console.log('Formulario',this.formulario.value);
    this.router.navigate(['/vehiculos']);
  }

}
