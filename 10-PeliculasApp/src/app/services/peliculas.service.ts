import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey: string = "482ff9a9d1c96fe918b5c2925f8a3c95";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  constructor(private jsonp: Jsonp) { }
//image.tmdb.org/t/p/w300 <- url para las imagenes
  getPopulares() {

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
        .map(res => res.json());
  }
}
