import { Component, inject, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ComponetsModuleModule } from '../../components/componets-module.module';
import { PersonajeService } from '../../services/personaje.service';
import { RouterModule } from '@angular/router';
import { PersonajeResponse } from '../../interfaces/personaje.interface';



@Component({
  selector: 'app-usuarios-page',
  standalone: true,
  imports: [CardModule,ComponetsModuleModule,RouterModule],
  templateUrl: './usuarios-page.component.html',
  styleUrl: './usuarios-page.component.css'
})
export default class UsuariosPageComponent implements OnInit {

private httpPersonaje=inject(PersonajeService)

@Input()
public listaPersonajes:PersonajeResponse[]=[];

  ngOnInit(): void {
    this.httpPersonaje.getAllPersonajes()
    .subscribe(per => this.listaPersonajes=per);

  }

  searchPersonajeById(id:string){
    this.httpPersonaje.searchPersonajebyId(id)
    .subscribe( per =>{
      this.listaPersonajes= per
    });
    console.log("se esta lanzando buscar personaje por id")
  }

}
