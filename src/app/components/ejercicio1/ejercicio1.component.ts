import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {

  edadUno:number = 0;
  edadDos:number = 0;
  promedio:number = 0;
  

  

  Promedio(){
    this.promedio = (this.edadUno+this.edadDos)/2;
  }

  LimpiarForm(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
  }

}
