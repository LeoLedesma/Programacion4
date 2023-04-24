import { Injectable } from '@angular/core';
import { Usuario } from './interfaces/usuario.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  sesion_iniciada: boolean = false;
  usuario_iniciado: string = '';

  constructor(private router: Router,private route:ActivatedRoute) { }


  obtenerUsuariosRegistrados() : Usuario[]{
    return JSON.parse(localStorage.getItem('usuarios')!) || [];    
  }

  iniciarSesion(usuario: Usuario):boolean
  {    
    if(this.validarSiExisteUsuario(usuario)){
      this.sesion_iniciada = true;
      this.usuario_iniciado = usuario.usuario!;
      localStorage.setItem('usuario_logueado', JSON.stringify(usuario.usuario));      
    }
    return this.sesion_iniciada;
  }

  registar(usuario:Usuario):boolean
  {
    if(!this.validarSiExisteUsuario(usuario))
    {
      let usuarios = this.obtenerUsuariosRegistrados();
      usuarios.push(usuario);

      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      return true;
    }
    return false;
  }

  validarSiExisteUsuario(usuario: Usuario):boolean
  {
    return this.obtenerUsuariosRegistrados().some(a => a.usuario === usuario.usuario && a.contrasenia === usuario.contrasenia)
  }

  CerrarSesion()
  {
    this.sesion_iniciada = false;
    this.usuario_iniciado = '';
    localStorage.removeItem('usuario_logueado');
  }

}
