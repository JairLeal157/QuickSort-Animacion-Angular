import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  datos:number[] = []
  constructor() { }
  getDatos():number[]{
    return this.datos
  }
  setDatos(datos:string){
    
    //convierte los datos entrantes en un array de numeros, separados por comas
    let datosArray = datos.split(",")
    this.datos = [];
    //recorre el array de numeros y los convierte a numeros
    for(let i = 0; i < datosArray.length; i++){
      this.datos.push(Number(datosArray[i]))
    }
  }
}
