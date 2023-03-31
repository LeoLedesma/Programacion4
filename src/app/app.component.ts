import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Clase 1';

  //#region Clase

  variableInput = ''
  //No hay int no hay float no hay number
  numero1 : number = 0;
  numero2 : number = 0;
  resultado : number = 0;
  imagen: string = '../assets/Screenshot_1.png'
//#endregion

  edadUno:number = 0;
  edadDos:number = 0;
  promedio:number = 0;
  

  Sumar(){
    this.resultado = this.numero1 + Number(this.numero2);
  }

  Promedio(){
    this.promedio = (this.edadUno+this.edadDos)/2;
  }

  LimpiarForm(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
  }


  cambiarTitulo (tituloNuevo: any){
    this.titulo = tituloNuevo;
  }
}
