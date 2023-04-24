import { Component,OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private usuarioService:UsuariosService){}

  ngOnInit() {
    let usuario : Usuario[]
    usuario = JSON.parse(localStorage.getItem('usuario_logueado')!)|| [];

    if(usuario.length>0)
    {
      this.usuarioService.sesion_iniciada=true;
      this.usuarioService.usuario_iniciado= usuario[0].usuario;
    }
  }

}
