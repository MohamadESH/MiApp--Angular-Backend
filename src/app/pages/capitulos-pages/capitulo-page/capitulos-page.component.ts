import { Component, inject, OnInit } from '@angular/core';
import { CapituloResponse } from '../../../interfaces/capitulo.interface';
import { ComponentsModule } from '../../../components/componets-module.module';
import { CapituloService } from '../../../services/capitulo.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-capitulos-page',
  standalone: true,
  imports: [ComponentsModule,RouterModule],
  templateUrl: './capitulos-page.component.html',
  styleUrl: './capitulos-page.component.css'
})
export default class CapitulosPageComponent implements OnInit{

  private httpCapitulo = inject(CapituloService)

  public listCapitulos:CapituloResponse[]=[];

  ngOnInit(): void {
    this.httpCapitulo.getAllCapitulos()
    .subscribe(caps => this.listCapitulos=caps)
  }

  searchCapituloById(id:string){
    this.httpCapitulo.getAllCapitulosById(id)
    .subscribe (caps => this.listCapitulos=caps)
    console.log("se esta lanzando search cap by id")
  }

}
