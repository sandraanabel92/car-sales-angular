import {Component, OnInit} from '@angular/core';
import {Vehiculo} from '../../utilitarios/modelos/Vehiculo';
import {ActivatedRoute, Router} from '@angular/router';
import {VehiculoService} from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {

  esAnioInvalido: boolean = false;
  esKilometrajeInvalido: boolean = false;
  esPrecioInvalido: boolean = false;
  esMarcaInvalida: boolean = false;
  esModeloInvalido: boolean = false;

  vehiculo: Vehiculo = {
    codigo: '',
    marca: '',
    modelo: '',
    foto: '',
    anio: 0,
    kilometraje: '0',
    calificacion: 0 // Asegúrate de ajustar estos valores según tu modelo real de Vehiculo
  };

  modoEditar: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehiculoService.getvehiculo(params['codigo']).subscribe(data => {
        if (data) {
          console.log('Vehiculo:', data);
          this.vehiculo = data.data;
        }
        if (!this.vehiculo) {
          console.error('Vehículo no encontrado');
          alert('Vehículo no encontrado');
          this.router.navigate(['/vehiculos']);
        }
      });
      // this.vehiculo = this.vehiculoService.getvehiculo(params['codigo']);
    });

    this.route.queryParams.subscribe(queryParams => {
      this.modoEditar = queryParams['modo'] === 'editar';
    });

    console.log('Vehículo:', this.modoEditar);
  }

  imprimir(data: any) {
    console.log('Calificacion:', data)
    this.vehiculo.calificacion = data || 0;

  }

  toggleModoEditar() {
    this.modoEditar = !this.modoEditar;
  }

  guardarCambios() {
    if (!this.vehiculo) {
      console.error('No se encontró el vehículo');
      alert('No se encontró el vehículo');
      return;
    }
    if (this.esAnioInvalido || this.esKilometrajeInvalido || this.esPrecioInvalido || this.esMarcaInvalida || this.esModeloInvalido) {
      alert('Por favor, revisa los campos marcados en rojo');
      return;
    }
    // Implementa la llamada al servicio para guardar los cambios aquí
    console.log('Guardando cambios...', this.vehiculo);
    this.vehiculoService.actualizarVehiculo(this.vehiculo).subscribe({
      next: (data) => {
        console.log('Vehículo actualizado', this.vehiculo);
        alert('Vehículo actualizado');
        this.toggleModoEditar(); // Salir del modo de edición
        this.router.navigate(['/vehiculos']);
      },
      error: (error) => {
        console.error('Error al actualizar el vehículo', error);
        alert('Ocurrió un error al actualizar el vehículo');
      }
    });

  }

  validarCampos() {
    // Validación para el año (debe ser un número de 4 dígitos)
    if (!this.vehiculo.anio) {
      this.vehiculo.anio = 0;
    }
    this.esAnioInvalido = !(/^\d{4}$/).test(this.vehiculo.anio.toString());


    // Validación para el kilometraje (debe ser un número)
    this.esKilometrajeInvalido = isNaN(Number(this.vehiculo.kilometraje)) || this.vehiculo.kilometraje === '';

    if (this.vehiculo.precio) {
      this.esPrecioInvalido = !(/^\d+(\.\d{1,2})?$/).test(this.vehiculo.precio.toString());
    }
    if (!this.vehiculo.precio) {
      this.esPrecioInvalido = true;
    }


    // Validación para la marca (no debe estar vacía)
    this.esMarcaInvalida = this.vehiculo.marca === '';

    // Validación para el modelo (no debe estar vacío)
    this.esModeloInvalido = this.vehiculo.modelo === '';

  }


}
