import { Component,ElementRef,Input, Renderer2, ViewChild } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuariosService } from '../usuarios.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.css']  
})
export class LoginComponent {

  modo:string = 'login';
  titulo:string = "Iniciar Sesión";
  enlace:string = "Registrarse";
  mensaje:string = '';
  mostrarAlert:boolean = false
  
  @Input() usuario:Usuario = {contrasenia:'', usuario:''};
  @Input() contrasenia2:string ='';
  @ViewChild('alerta') alerta! : ElementRef;


  constructor(private usuariosService:UsuariosService, 
              private renderer2:Renderer2, 
              private router: Router,
              private route:ActivatedRoute){}

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
    this.usuario.usuario ="";
    this.usuario.contrasenia = "";
    this.contrasenia2 = "";
  }

  accion(){    
    this.modo === "login" ? this.iniciarSesion() : this.registro();    
  }

  iniciarSesion()
  {
    console.log("HOla")
    if(this.usuario.usuario && this.usuario.contrasenia)
    {
      if(this.usuariosService.iniciarSesion(this.usuario))
      {
        this.router.navigate(['../bienvenido'], { relativeTo: this.route});
        this.mostrarAlerta(false); 
        this.limpiarInputs();
      }else
      {
        this.mostrarAlerta(true,'alert-warning','Contraseña o usuario incorrecto')
      }
  }
        
  }

  registro()
  { 
   this.usuario.contrasenia === this.contrasenia2 ? this.usuariosService.registar(this.usuario) : '';    
  }  
  
  
  mostrarAlerta(mostrar:boolean, clase:string = '',mensaje:string = ''):void
  {
    let alerta = this.alerta.nativeElement;
    
    if(clase === 'alert-danger')
    {
      this.renderer2.removeClass(alerta,'alert-warning')
      this.renderer2.addClass(alerta,'alert-danger')
    }
    else
    {
      this.renderer2.removeClass(alerta,'alert-warning')
      this.renderer2.addClass(alerta,'alert-danger')
    }

    this.renderer2.setProperty(alerta, 'innerHTML', mensaje); 
  }

}
