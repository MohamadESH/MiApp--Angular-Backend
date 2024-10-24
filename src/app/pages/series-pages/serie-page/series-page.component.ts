import { Component, inject, Input, OnInit } from '@angular/core';
import { SerieResponse } from '../../../interfaces/serie.interface';
import { ComponentsModule } from '../../../components/componets-module.module';
import { SerieService } from '../../../services/serie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-series-page',
  standalone: true,
  imports: [ComponentsModule,RouterModule],
  templateUrl: './series-page.component.html',
  styleUrl: './series-page.component.css'
})
export default class SeriesPageComponent implements OnInit {


  public httpSerie=inject(SerieService)

  @Input()
  public listaSeries:SerieResponse[]=[]

  ngOnInit(): void {
    this.httpSerie.getAllSeries().subscribe( ser => this.listaSeries=ser)
  }

  searchSerieById(id:string){
    this.httpSerie.getAllSeriesById(id).subscribe( ser => this.listaSeries = ser)
  }

}
