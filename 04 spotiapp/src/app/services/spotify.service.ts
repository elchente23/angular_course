import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  artists: any[] = [];
  private urlSpotify: string = 'https://api.spotify.com/v1/';

  private token: string = 'BQDYFFluFjDxLaLuXMssZPYRt-M7WE480rOhZBnGlupFIcAy6Bmo2YbnaRwwudTHI8KcAuHf664ylGX7vyQ';

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': `Bearer ${this.token}`
    });

    return headers;
  }

  getArtists (term: string) {

    let url = `${this.urlSpotify}search?query=${term}&type=artist&limit=20`;

    return this._http.get(url, { headers: this.getHeaders() })
      .map((resp:any) => {
        this.artists = resp.artists.items;
        return this.artists;
      });
  };

  getArtist (id: string) {
    let url = `${this.urlSpotify}artists/${id}`;

    return this._http.get(url, { headers: this.getHeaders()});
  }

  getTop (id: string) {
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=MX`;

    return this._http.get(url, { headers: this.getHeaders() });
  }

}
