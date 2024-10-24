import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PersonajeResponse } from '../../../interfaces/personaje.interface';
import { CommonModule } from '@angular/common';

import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-crear-page',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule,CommonModule,InputGroupModule, InputGroupAddonModule, InputTextModule,ButtonModule],
  templateUrl: './crear-page.component.html',
  styleUrl: './crear-page.component.css'
})
export default class CrearPageComponent implements OnInit {

  personajes:PersonajeResponse[]=[]

  nuevoString:string="";


  ngOnInit(): void {
    this.personajes=[
      // lista de personajes disponibles?
    ];
  }

  fb = inject(FormBuilder)

  @Input()
  public formulario:FormGroup= this.fb.group({
    numero:[,Validators.required],
    nombre:[,Validators.required],
    serie:[,Validators.required],
    selectedCity: new FormControl<PersonajeResponse | null>(null)

  })

  onSubmit(){}

}
