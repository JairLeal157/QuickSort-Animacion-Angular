import { Component, Input, OnInit } from '@angular/core';
import Chart  from 'chart.js/auto';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent  {
  constructor(private servicio: ServicioService) { }

  get datosG():number[]{
    return this.servicio.getDatos()
  }

  myChart!: Chart;

  swap(arr:number[], i:number, j:number){
    let aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
    //retorne un promise despues 1 segundo
    this.cargarDatos(i,j)
    return new Promise((resolve, reject):void => {
      setTimeout(() => {
        resolve("swap")
      }, 10);
    })
  }

  async pos_pivote(arr:number[], ini:number, fin:number){
    let pivote:number = arr[fin]
    let i = ini 
    let j = ini
    while(j < fin){
      if(arr[j] < pivote){
        let a = await this.swap(arr, i, j)
        i++
      }
      j++
    }
    let a = await this.swap(arr, i, fin)

    return i
  }
  async quickSort(arr:number[], ini:number, fin:number){
    let i:number;
    if(ini < fin){
      i = await this.pos_pivote(arr, ini, fin)
      this.quickSort(arr, ini, i-1)
      this.quickSort(arr, i+1, fin)
    }
  }

  ordenamiento(){
    this.quickSort(this.servicio.getDatos(), 0, this.servicio.getDatos().length-1)
    this.cargarDatos(0,0)
  }


  cargarDatos(i:number, j:number){

    if(this.myChart){
      this.myChart.clear()
      this.myChart.destroy()
    }
    let color:string[] = []
    for(let p = 0; p < this.servicio.getDatos().length; p++){
      color.push("white")
    }
    color[i] = "red"
    color[j] = "blue"
    this.myChart = new Chart("canvas", {
      type: 'bar',
      data: {
          labels: this.servicio.getDatos(),
          datasets: [{
              label: "Datos",
              data: this.servicio.getDatos(),
              backgroundColor: color,
              borderColor: color,
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          animation: false
      }
  });
  }
}
