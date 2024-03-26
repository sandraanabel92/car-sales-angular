import { Component } from "@angular/core";
import { ClienteService } from "../../servicios/Cliente.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ClienteRegistro',
  templateUrl: './ClienteRegistro.component.html',
  styleUrls: ['./ClienteRegistro.component.css']
})
export class ClienteRegistroComponent {

  formulario: FormGroup
  constructor(
    private readonly clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.formulario = this.formBuilder.group({
      "id": ['', Validators.required],
      "nombre": ['', Validators.required],
      "apellido": ['', Validators.required],
      "password": ['', Validators.required],
      "telefono": [''],
      "email": ['', Validators.required],
    });
  }

  guardar() {
    if (!this.formulario.valid) {
      console.log('Formulario inválido');
      this.formulario.markAllAsTouched();
    } else {
      let cliente = { ...this.formulario.value };
      this.clienteService.addCliente(cliente).subscribe(data => {
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
