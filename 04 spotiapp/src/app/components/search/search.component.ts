import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  term: string = '';

  constructor(private _spotify: SpotifyService) { 
    
  };

  searchArtist() {

    if(this.term.length === 0) {
      return;
    }

    this._spotify.getArtists(this.term).subscribe((artists) => {
      
    });
  };
}
