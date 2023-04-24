import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { Ejercicio4RoutingModule } from './ejercicio4-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { BackgroundComponent } from './components/background/background.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuarioComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    NavbarComponent,
    IndexComponent,
    BackgroundComponent,
    FooterComponent,    
  ],
  imports: [
    CommonModule,
    Ejercicio4RoutingModule,
    FormsModule
  ]
})
export class Ejercicio4Module {
}
