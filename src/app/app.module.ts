import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { Clase2RoutingModule } from './Clase2/clase2-routing.module';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent, 
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    AppRoutingModule,  
    SharedModule,    
    Clase2RoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
