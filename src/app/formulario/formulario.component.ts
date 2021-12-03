import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  reactiveform!: FormGroup;
  

  constructor() { }

  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      cedula: new FormControl('',[Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required])
    });
  }

  guardarCliente(){
    console.warn(this.reactiveform.value)
  }

 

}
