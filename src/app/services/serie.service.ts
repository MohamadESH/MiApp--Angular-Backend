import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SerieResponse } from '../interfaces/serie.interface';

@Injectable({providedIn: 'root'})
export class SerieService {

  //url desarollo
  private url:string=environment.url
  constructor(private httpClient: HttpClient) { }

  getAllSeries():Observable<SerieResponse[]>{
    return this.httpClient.get<SerieResponse[]>(`${this.url}/series`)
  }


  getAllSeriesById(id:string):Observable<SerieResponse[]>{
    return this.httpClient.get<SerieResponse[]>(`${this.url}/series/${id}`)
  }

}
