import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { Ejercicio1Component } from './Clase-1/ejercicio1/ejercicio1.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { Clase2RoutingModule } from './Clase-2/clase-2-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
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
