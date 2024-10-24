import { Component, inject, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ComponentsModule } from '../../../components/componets-module.module';
import { PersonajeService } from '../../../services/personaje.service';
import { PersonajeResponse } from '../../../interfaces/personaje.interface';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-usuarios-page',
  standalone: true,
  imports: [CardModule,ComponentsModule,RouterModule],
  templateUrl: 'personajes-page.component.html',
})
export default class PersonajesPageComponent implements OnInit {

private httpPersonaje=inject(PersonajeService)

@Input()
public listaPersonajes:PersonajeResponse[]=[];


  ngOnInit(): void {
    this.httpPersonaje.getAllPersonajes()
    .subscribe(pers => this.listaPersonajes=pers);

  }

  searchPersonajeById(id:string){
    this.httpPersonaje.searchPersonajebyId(id)
    .subscribe(per => this.listaPersonajes=per) ;
  }

}
