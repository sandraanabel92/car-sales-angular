import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import {Router} from "@angular/router";
import {Vehiculo} from "../../utilitarios/modelos/Vehiculo";

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  mostrarImagen= true;
  private _filtro:string = "";
  @Input() valor:string ='';
  listaVehiculos:Array<Vehiculo> = [];
  vehiculosPorPagina: number = 5; // Número inicial de filas por página
  paginaActual: number = 1;
  totalVehiculos: number = 0; // Asumiendo que esta propiedad se actualiza con la respuesta del backend
  numeroPaginas: number = 0;


  constructor(
    private vehiculoService: VehiculoService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.consultaVehiculos();

  }

  get filtro(){
    return this._filtro
  }

  set filtro( data:string){
    this._filtro = data;
    this.consultaVehiculos();
  }


  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  consultaVehiculos(){
    this.vehiculoService.getVehiculos(this.paginaActual, 5,this.filtro).subscribe(valor =>{
      console.log('Valor:',valor);
      console.log('DATA:',valor.data);
      this.numeroPaginas = valor.pages;
      this.listaVehiculos = valor.data;
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

  getArrayDePaginas(): Array<number> {
    return Array.from({ length: this.numeroPaginas }, (_, index) => index + 1);
  }

  cambiarPagina(nuevaPagina: number): void {
    if (nuevaPagina < 1 || nuevaPagina > this.numeroPaginas) {
      return;
    }
    this.paginaActual = nuevaPagina;
    // Aquí deberías llamar a la función que actualiza la lista de vehículos
    this.consultaVehiculos();
  }

}
