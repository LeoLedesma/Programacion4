import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { IndexComponent } from "./index/index.component";

const routes:Routes = [
    
    {
        
        path:'', component: IndexComponent,
        children:[
        {path: '', component: BienvenidoComponent},
        {path: 'bienvenido',component: BienvenidoComponent},
        {path:'login',component: LoginComponent},
        {path:'error',component: ErrorComponent}, 
        {path:'**',redirectTo:'error'}                       
        ]
    }     
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class Ejercicio4RoutingModule{}