import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    genero: "",
    aceptar: false
  };

  paises =  [{
    codigo: "",
    pais: "Seleccione un país"
  },{
    codigo: "CRI",
    pais: "Costa Rica"
  }, {
    codigo: "MEX",
    pais: "México"
  }];

  generos = [{
    codigo:"M",
    genero: "Masculino"
  }, {
    codigo: "F",
    genero: "Femenino"
  }];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log("ngForm", forma);
    console.log("valor", forma.value);
    console.log("usuario", this.usuario);
  }

}
