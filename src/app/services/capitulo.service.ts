import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, Observable, of } from 'rxjs';
import { CapituloResponse } from '../interfaces/capitulo.interface';

@Injectable({providedIn: 'root'})
export class CapituloService {

  //url desarrollo
  private url:string=environment.url

  constructor(private httpClient: HttpClient) { }

  getAllCapitulos():Observable<CapituloResponse[]>{
    return this.httpClient.get<CapituloResponse[]>(`${this.url}/capitulos`).pipe(
      catchError( ()=> of([]) )
    )
  }

  getAllCapitulosById(id:string):Observable<CapituloResponse[]>{
    return this.httpClient.get<CapituloResponse[]>(`${this.url}/capitulos/${id}`)
  }

}
