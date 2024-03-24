import {Component, OnInit} from '@angular/core';
import {Vehiculo} from '../../utilitarios/modelos/Vehiculo';
import {VehiculoService} from '../../servicios/Vehiculo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {


  formulario: FormGroup

  constructor(
    private vehiculoServicio: VehiculoService,
    private fb: FormBuilder,
    private router: Router,
  ) {


    this.formulario = this.fb.group({
      codigo: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}$/)]
      ],
      kilometraje: [
        '',
        [Validators.required, Validators.pattern(/^\d+$/)]
      ],
      precio: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]
      ],
      foto: ['', [Validators.required, Validators.pattern(/(http[s]?:\/\/.*\.(?:png|jpg|jpeg|gif|png|svg))/i)]],
      calificacion: [
        '',
        [Validators.required, Validators.min(0), Validators.max(5)]
      ]
    });
  }

  ngOnInit() {
  }

  guardar() {
    if (!this.formulario.valid) {
      console.log('Formulario inválido');
      this.formulario.markAllAsTouched();
    } else {
      let vehiculo: Vehiculo = {...this.formulario.value};
      this.vehiculoServicio.addvehiculo(vehiculo).subscribe(data => {
        console.log('Data:', data);
        if (!data) {
          alert('Error al guardar');
          return;
        }
      });
      console.log('Formulario', this.formulario.value);
      this.router.navigate(['/vehiculos']);
    }
  }

}
