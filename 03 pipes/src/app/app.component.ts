import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Mike';
  nombre2 = 'joSe de jesus gutieRRez hernandez';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      numero: "19"
    }
  };

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llegó el dato');
    }, 3500);
  });

  fecha = new Date();

  video = "mOeSfOJrUIk";

  activar:boolean = true;

}
