import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { IndexComponent } from "./index/index.component";


//Aca se definen todas las rutas de la aplicación
//Path, component
const routes:Routes = [
    //Por defecto, primer componente
    //Estoy en local/Clase2/Ejercicio3/...
    {
        //Para aplicar un componente en todos los componentes hijos,
        //se declara el / de ingreso, y dentro otro <router-outlet></router-outlet> 
        path:'', component: IndexComponent,
        children:[
        {path: '', component: BienvenidoComponent},
        {path: 'bienvenido',component: BienvenidoComponent},
        {path:'login',component: LoginComponent},
        {path:'error',component: ErrorComponent}, 
        {path:'**',redirectTo:'error'}                       
        ]
    }     


    // {path:'', component: BienvenidoComponent,pathMatch: 'full'},
    // {path:'Login',component: LoginComponent},
    // {path:'Error',component: ErrorComponent},                           //Ruta por defecto cuando no se encontro la ruta ingresada. Siempre ultima    
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class Ejercicio3RoutingModule{}