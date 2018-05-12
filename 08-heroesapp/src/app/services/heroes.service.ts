import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe} from '../interfaces/heroe.interface';
import 'rxjs/Rx';

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
        .map((res) => {
          return res.json();
        });
  }

  actualizarHeroe(heroe: Heroe, key$: string) {

    let body = JSON.stringify(heroe),
        headers = new Headers({
          'Content-Type': 'application/json'
        });

    let url = `${this.HEROEURL}/${ key$ }.json`;

    return this.http.put(url, body, { headers })
        .map((res) => {
          return res.json();
        });
  }
}
