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
    //this.visita=0;
    this.precio=0;
    this.error=0;
    this.contador=0;
    this.dui='';
    this.medicamento='';
  

  }
  ingresar()
  {
    if(this.precio>0 && this.nombre!='' && this.descripcion!='' && this.mascota!='' && this.veterinario!='' /*&& this.visita>0*/ && this.dui!='' && this.medicamento!='')
    {
      this.error=0;
        
      /*if(this.visita == 2)
        {
          this.descuento=this.precio*0.05;
          this.ttpagar=this.precio-this.descuento;
        }

        else if(this.visita>4)
        {
          this.descuento=this.precio*0.10;
          this.ttpagar=this.precio-this.descuento;
        }
        else
        {
          this.ttpagar=this.precio;

        }

  this.consulta={"dui":this.dui,"medicamento":this.medicamento,"nombre":this.nombre,"mascota": this.mascota,"veterinario":this.veterinario,"descripcion":this.descripcion,"visita":this.visita,"precio":this.precio,"ttpagar":this.ttpagar};*/
  this.onVisita();
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
    let consul:number;

    if(this.historial.length < 1){
      this.consulta={"dui":this.dui,"medicamento":this.medicamento,"nombre":this.nombre,"mascota": this.mascota,"veterinario":this.veterinario,"descripcion":this.descripcion,"visita":1,"precio":this.precio,"ttpagar":this.ttpagar};
    }else{
      for(x=0;x<this.historial.length;x++){
        if(this.historial[x].dui==this.dui){
          console.log("Si se repiten");
          consul = this.historial[x].visita++;
          
          if(consul == 2)
        {
          this.descuento=this.precio*0.05;
          this.ttpagar=this.precio-this.descuento;
        }

        else if(consul>4)
        {
          this.descuento=this.precio*0.10;
          this.ttpagar=this.precio-this.descuento;
        }
        this.consulta={"dui":this.dui,"medicamento":this.medicamento,"nombre":this.nombre,"mascota": this.mascota,"veterinario":this.veterinario,"descripcion":this.descripcion,"visita":consul,"precio":this.precio,"ttpagar":this.ttpagar};
        }else{
          console.log("No se repite");
          this.ttpagar=this.precio;
          this.consulta={"dui":this.dui,"medicamento":this.medicamento,"nombre":this.nombre,"mascota": this.mascota,"veterinario":this.veterinario,"descripcion":this.descripcion,"visita":1,"precio":this.precio,"ttpagar":this.precio};
        }
    }
  }
}

}
