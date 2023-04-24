import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.css']  
})
export class LoginComponent {

  modo:string = 'login';
  titulo:string = "Iniciar Sesión";
  enlace:string = "Registrarse";

  @Input() usuario:string = '';
  @Input() constrasenia:string ='';
  @Input() constrasenia2:string ='';

  cambiarModo()
  {
    this.modo = this.modo === "login"? "registro" : "login"

    if(this.modo === "login")
    {
      this.enlace = "Registrarse"
      this.titulo = "Iniciar Sesión";
    }else
    {
      this.enlace = "Iniciar Sesión";
      this.titulo = "Registrarse";
    }

    this.limpiarInputs();
  }

  limpiarInputs()
  {
    this.usuario ="";
    this.constrasenia = "";
    this.constrasenia2 = "";
  }

  accion(){
    if(this.modo === "login")
    {
      this.iniciarSesion();
    }else{
      this.registro();
    }
  }

  iniciarSesion()
  {

  }

  registro()
  {
    this.limpiarInputs();
  }

}
