import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  mostrarImagen= true;
  //filtro:string="";
  private _filtro:string = "";

  get filtro(){
    return this._filtro
  }

  set filtro( data:string){
    this._filtro = data;
    this.consultaVehiculos();
  }


  @Input() valor:string ='';
  listaVehiculos:Array<any> = [];


  constructor(
    private vehiculoService: VehiculoService,
    private router: Router,

  ) {

   }

  ngOnInit() {
    this.consultaVehiculos();

  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro).subscribe(data =>{
      this.listaVehiculos = data;
    });
  }

  recepcion(dato:number){
    console.log('Dato:',dato);

  }

  editarVehiculo(codigo: string) {
    this.router.navigate(['/vehiculo', codigo], { queryParams: { modo: 'editar' } });
  }

  eliminarVehiculo(codigo: string) {
    if (confirm('¿Estás seguro de querer eliminar este vehículo?')) {
      this.vehiculoService.eliminarVehiculo(codigo).subscribe(() => {
        alert('Vehículo eliminado correctamente');
        this.consultaVehiculos(); // Recargar la lista de vehículos
      }, error => {
        console.error('Error al eliminar el vehículo:', error);
        alert('Ocurrió un error al eliminar el vehículo.');
      });
    }
  }

}
