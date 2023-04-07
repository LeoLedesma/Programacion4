import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { Ejercicio1Component } from './Clase-1/ejercicio1/ejercicio1.component';
import { InicioComponent } from './inicio/inicio.component';
import { Ejercicio2Module } from './Clase-1/ejercicio2/ejercicio2.module';

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    SharedModule,
    FormsModule,
    Ejercicio2Module        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
