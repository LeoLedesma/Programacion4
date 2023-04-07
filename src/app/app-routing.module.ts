import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Ejercicio1Component } from "./Clase-1/ejercicio1/ejercicio1.component";
import { InicioComponent } from "./inicio/inicio.component";

const routes:Routes = [
    //Por defecto, primer componente
    {
        path:'',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path:'Ejercicio1',
        component: Ejercicio1Component,        
    },    
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}