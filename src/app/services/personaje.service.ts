import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Observable, of } from 'rxjs';
import { PersonajeResponse } from '../interfaces/personaje.interface';

@Injectable({providedIn: 'root'})
export class PersonajeService {

  private url:string="http://localhost:8080/api"

  constructor(private httpClient: HttpClient) {   }

  getAllPersonajes():Observable<PersonajeResponse[]>{
    return this.httpClient.get<PersonajeResponse[]>(`${this.url}/personajes`)
  }

  searchPersonajebyId(id:string):Observable<PersonajeResponse[]>{
    return  this.httpClient.get<PersonajeResponse[]>(`${this.url}/personajes/${id}`)
  }

}
