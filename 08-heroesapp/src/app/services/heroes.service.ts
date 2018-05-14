import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe} from '../interfaces/heroe.interface';
import 'rxjs/Rx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class HeroesService {

  HEROESURL:string = "https://heroesapp-153f7.firebaseio.com/heroes.json";
  HEROEURL:string = "https://heroesapp-153f7.firebaseio.com/heroes/";

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {

    let body = JSON.stringify(heroe),
        headers = new Headers({
          'Content-Type': 'application/json'
        });

    return this.http.post(this.HEROESURL, body, { headers })
        .map(res => res.json());
  }

  actualizarHeroe(heroe: Heroe, key$: string) {

    let body = JSON.stringify(heroe),
        headers = new Headers({
          'Content-Type': 'application/json'
        });

    let url = `${this.HEROEURL}/${ key$ }.json`;

    return this.http.put(url, body, { headers })
        .map(res => res.json());
  }

  getHeroe(key$: string) {
    let url = `${this.HEROEURL}/${key$}.json`,
        headers = new Headers({
      'Content-Type': 'application/json'
    });;

    return this.http.get(url, { headers })
      .map(res => res.json());
  }

  getHeroes() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.get(this.HEROESURL, { headers })
      .map(res => res.json());
  }

  deleteHeroe(key$: string) {

    let url = `${ this.HEROEURL }/${ key$ }.json`,
        headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.delete(url, { headers })
      .map(res => res.json());

  }
}
