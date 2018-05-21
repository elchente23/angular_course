import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  private pelicula: any;
  private target: string = "";
  private busqueda: string = "";

  constructor(private ps: PeliculasService, 
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(param => {

      this.target = param["target"];

      if(param["busqueda"]) {
        this.busqueda = param["busqueda"];
      }

      this.ps.getPelicula(param["id"])
        .subscribe(movie => {
          this.pelicula = movie;
        });
    });
   }

  ngOnInit() {
  }

}
