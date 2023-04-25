import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';


import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    MenuComponent
  ],
  exports:[
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
