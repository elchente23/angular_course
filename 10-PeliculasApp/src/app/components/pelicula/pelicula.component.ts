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

  constructor(private ps: PeliculasService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(param => {
      this.ps.getPelicula(param["id"])
        .subscribe(movie => {
          this.pelicula = movie;
          console.log(movie);
        });
    });
   }

  ngOnInit() {
  }

}
