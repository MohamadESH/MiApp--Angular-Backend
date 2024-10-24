import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabMenuComponent } from './tabMenu/tab-menu.component';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    SearchBoxComponent,
    TableModule,
    TabMenuComponent,
    InputTextModule,
  ],
  exports:[
    ButtonModule,
    CommonModule,
    SearchBoxComponent,
    TableModule,
    TabMenuComponent,
    InputTextModule
  ]
})
export class ComponentsModule { }
