import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabMenuComponent } from './tabMenu/tab-menu.component';



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CommonModule,
    SearchBoxComponent,
    TableModule,
    TabMenuComponent
  ],
  exports:[
    ButtonModule,
    CommonModule,
    SearchBoxComponent,
    TableModule,
    TabMenuComponent
  ]
})
export class ComponetsModuleModule { }
