import { Component } from '@angular/core';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(protected usuariosService:UsuariosService){}
}
