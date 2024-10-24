import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  map, Observable, tap } from 'rxjs';
import { PersonajeResponse } from '../interfaces/personaje.interface';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class PersonajeService {

  //url desarollo
  private url:string=environment.url

  constructor(private httpClient: HttpClient) {   }

  getAllPersonajes():Observable<PersonajeResponse[]>{
    return this.httpClient.get<PersonajeResponse[]>(`${this.url}/personajes`)
  }

  searchPersonajebyId(id:string):Observable<PersonajeResponse[]>{
    return  this.httpClient.get<PersonajeResponse[]>(`${this.url}/personajes/${id}`)

  }

}
