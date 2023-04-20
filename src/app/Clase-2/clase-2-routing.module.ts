import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./Ejercicio3/error/error.component";

//Aca se definen todas las rutas de la aplicación
//Path, component
const routes:Routes = [
    //Por defecto, primer componente
    {path:'ejercicio3',loadChildren: () => import('./Ejercicio3/ejercicio3.module').then(m=> m.Ejercicio3Module)},        
    // {path:'**',redirectTo: 'ejercicio3'} //lleva al path
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class Clase2RoutingModule{}