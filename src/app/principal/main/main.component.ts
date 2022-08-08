import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(
    private servicio: ServicioService
  ) { }
  get datos():number[]{
    return this.servicio.getDatos()
  }
  ngOnInit(): void {
  }

}
