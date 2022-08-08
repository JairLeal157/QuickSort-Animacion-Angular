import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { TablaComponent } from '../tabla/tabla.component';
import Chart from 'chart.js/auto';

@Component({
  providers:[TablaComponent ],
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private servicio: ServicioService, private TablaComponent: TablaComponent) { }
  datos:string =""
  enviar(){
    if(this.datos.length > 0){
      this.servicio.setDatos(this.datos)
      this.TablaComponent.cargarDatos(0,0)
    }
  }
  ordenar(){
    this.TablaComponent.ordenamiento();
  }
    
}



