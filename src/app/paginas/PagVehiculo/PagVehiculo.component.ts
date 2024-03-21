import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  vehiculo:Vehiculo ={
    codigo:"001",
    marca:"Chevrolet",
    modelo:"onix"



  }
  constructor() { }

  ngOnInit() {
  }

}
