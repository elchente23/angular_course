import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey: string = "482ff9a9d1c96fe918b5c2925f8a3c95";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp) { }
  getPopulares() {

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&region=MX&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
        .map(res => res.json());
  }

  getCarteleras() {

    let fechaFin = new Date(),
        fechaInicio = new Date();

    fechaInicio.setDate(fechaInicio.getDate() - 30);

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fechaInicio.getFullYear() + '-' + (fechaInicio.getMonth() + 1) + '-' + fechaInicio.getDate() }&region=MX&primary_release_date.lte=${ fechaFin.getFullYear() + '-' + (fechaFin.getMonth() + 1) + '-' + fechaFin.getDate() }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

  getPopularesInfantiles() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&certification.lte=PG-10&api_key=${ this.apikey }&language=es&region=MX&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
        .map(res => res.json());
  }

  getPelicula(id: number) {
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es&region=MX&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }
}
