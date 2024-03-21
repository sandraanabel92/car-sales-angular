import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor() { }

getVehiculos(){
  return this.listaVehiculos;
}

private listaVehiculos: Array<Vehiculo> = [
  {"codigo": "A001","marca":"Chevrolet","modelo":"Sail","anio":2023,"color":"Azul","kilometraje":"50000","precio":17000,"foto":"https://cdn.wheel-size.com/thumbs/ec/f6/ecf621fed78cb8c359014c36565c8996.jpg","calificacion":3},
  {"codigo": "A002","marca":"Hyundai","modelo":"Creta","anio":2022,"color":"Blanco","kilometraje":"41000","precio":21999,"foto":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_952fec4786af4f06acb20a7997d0ebae.jpg","calificacion":4},
  {"codigo": "A003","marca":"Chevrolet","modelo":"Captiva","anio":2020,"color":"Negro","kilometraje":"31123","precio":23700,"foto":"https://www.motor.com.co/__export/1692896039941/sites/motor/img/2023/08/24/captiva1.png_554688468.png","calificacion":2},
  {"codigo": "A004","marca":"Chery","modelo":"Tiggo - 2","anio":2022,"color":"Rojo","kilometraje":"16500","precio":12900,"foto":"https://www.maresacenter.com/hubfs/CHERY/Landings%20Lanzamientos/Tiggo%202%20Pro/WEB/tiggo-2-pro---menu.jpg","calificacion":1},
  {"codigo": "A005","marca":"Hyundai","modelo":"Tucson","anio":2023,"color":"Negro","kilometraje":"19841 ","precio":30500,"foto":"https://www.autoasesor.com/hyundai/imagenes/tucson2023.jpg","calificacion":5},
  {"codigo": "A006","marca":"Kia","modelo":"Sportage ","anio":2023,"color":"Blanco","kilometraje":"27000","precio":26000,"foto":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_58c0b68954894031be6ec39be4da528f.webp","calificacion":5},
  {"codigo": "A007","marca":"Kia","modelo":"Sportage ","anio":2023,"color":"Blanco","kilometraje":"27000","precio":26000,"foto":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_58c0b68954894031be6ec39be4da528f.webp","calificacion":3}
]

}
