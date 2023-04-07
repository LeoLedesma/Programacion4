import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',  
})
export class Ejercicio1Component {
  edadUno: number = 0;
  edadDos: number = 0;  
  promedio:number = 0;
  suma:number = 0;

  sumar()
  {    
    this.suma = this.edadDos+this.edadUno;
    console.log(this.suma);
  }

  promediar()
  {
    this.promedio = (this.edadDos+this.edadUno)/2;
  }

  limpiar (){
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
    
  }

}
