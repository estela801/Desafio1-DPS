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
  contador:number;
  descuento:number;
  ttpagar:number;
  

  constructor() { }

  ngOnInit(): void {
    this.nombre='';
    this.mascota='';
    this.veterinario='';
    this.descripcion='';
    this.visita=0;
    this.precio=0;
    this.error=0;
    this.contador=0;

  }
  ingresar()
  {
    if(this.precio>0 && this.nombre!='' && this.descripcion!='' && this.mascota!='' && this.veterinario!=''&& this.visita>0)
    {
      this.error=0;
        if(this.visita<2)
        {
          this.ttpagar=this.precio;

        } else if(this.visita<=4)
        {
          this.descuento=this.precio*0.05;
          this.ttpagar=this.precio-this.descuento;
        }

        else if(this.visita>4)
        {
          this.descuento=this.precio*0.10;
          this.ttpagar=this.precio-this.descuento;
        }

  this.consulta={"nombre":this.nombre,"mascota": this.mascota,"veterinario":this.veterinario,"descripcion":this.descripcion,"visita":this.visita,"precio":this.precio,"ttpagar":this.ttpagar};
  this.historial.push(this.consulta);
  this.contador++;


    }
    else
    {
      this.error=1;
    }
  }

}
