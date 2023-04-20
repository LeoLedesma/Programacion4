import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Ejercicio1Component } from "./Clase-1/ejercicio1/ejercicio1.component";
import { ErrorComponent } from "./Clase-1/ejercicio2/error/error.component";
import { InicioComponent } from "./inicio/inicio.component";


//Aca se definen todas las rutas de la aplicación
//Path, component
const routes:Routes = [
    {path: '',component:InicioComponent},
    {path:'clase1/ejercicio1',component: Ejercicio1Component}, 
    {path:'clase2',loadChildren: () => import("./Clase-2/clase-2.module").then(m=> m.Clase2Module)},
    // {path:'clase3',loadChildren: () => import("./Clase-2/clase-2.module").then(m=> m.Clase2Module)},        
    {path:'**',component: ErrorComponent,pathMatch: 'full'},     //Crear en shared
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}