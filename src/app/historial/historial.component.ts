import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  historial=[];
  consulta:any;
  nombre:string;
  descripcion:string;
  mascota:string;
  veterinario:string;
  visita:number;
  precio:number;
  error:number;

  constructor() { }

  ngOnInit(): void {
  }
  ingresar()
  {}

}
