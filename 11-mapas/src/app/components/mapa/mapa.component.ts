import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  title: string = "My map app";
  lat: number = 51.678418;
  lng: number = 7.8090007;

}
