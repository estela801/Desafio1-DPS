import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  medicamento:string;
  ttpagar:number;
  dui:string;
  

  constructor() { }

  ngOnInit(): void {
    this.nombre='';
    this.mascota='';
    this.veterinario='';
    this.descripcion='';
    this.visita=0;
    this.precio;
    this.error=0;
    this.contador=0;
    this.dui='';
    this.medicamento='';
  

  }
  ingresar()
  {
    let cuento:number;
    if(this.precio>0 && this.nombre!='' && this.descripcion!='' && this.mascota!='' && this.veterinario!='' /*&& this.visita>0*/ && this.dui!='' && this.medicamento!='')
    {
      this.error=0;
      cuento = this.onVisita();
      if(cuento == 2)
        {
          this.descuento=this.precio*0.05;
          this.ttpagar=this.precio-this.descuento;
        }

        else if(cuento>4)
        {
          this.descuento=this.precio*0.10;
          this.ttpagar=this.precio-this.descuento;
        }
        else
        {
          this.ttpagar=this.precio;

        }
        
        this.consulta={"dui":this.dui,"medicamento":this.medicamento,"nombre":this.nombre,"mascota": this.mascota,"veterinario":this.veterinario,"descripcion":this.descripcion,"visita":cuento,"precio":this.precio,"ttpagar":this.ttpagar};
  
  this.historial.push(this.consulta);
  console.log(this.historial);
  this.contador++;

 
    }
    else
    {
      this.error=1;
    }
  }

  onVisita(){
    let x: number;
    let veo:number = 1;
    
        if(this.historial.length > 0){
          for(x=0;x<this.historial.length;x++){
            if(this.historial[x].dui==this.dui){
              veo++;
              console.log(veo);
            }
          }
        }else{
          veo=1;
        }
    return(veo);
  }



}
