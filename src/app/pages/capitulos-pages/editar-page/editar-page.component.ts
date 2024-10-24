import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PersonajeResponse } from '../../../interfaces/personaje.interface';

@Component({
  selector: 'app-editar-page',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule,CommonModule,InputGroupModule, InputGroupAddonModule, InputTextModule,ButtonModule],
  templateUrl: './editar-page.component.html',
  styleUrl: './editar-page.component.css'
})
export default class EditarPageComponent implements OnInit {
  ngOnInit(): void {

    //todo rellenar lista depersonajes con servicio?
    this.listapersonajes=[]
  }


  //todo mirar si es solo numbers[] o PersoneResponse[]
  listapersonajes=[]

  //todo rellenar porpiedades de inputs con datos de llamada capitulobyid



}
