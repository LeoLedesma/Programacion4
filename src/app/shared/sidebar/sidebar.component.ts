import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Clase } from '../shared.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  clases:Clase[] = [];
  sideDeBarOpen:boolean = false;
  busqueda:string = '';

 constructor(private sharedService:SharedService){
  this.clases = [...sharedService.Clases];
 }

 buscar()
 {
   this.clases = [...this.sharedService.busqueda(this.busqueda)];
 }
}
