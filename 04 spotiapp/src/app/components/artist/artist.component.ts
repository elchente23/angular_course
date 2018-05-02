import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any;
  tracks: any[] = [];

  constructor(private _activatedRouter: ActivatedRoute,
              private _spotifyService: SpotifyService) { }

  ngOnInit() {

    this._activatedRouter.params
      .map((params) => params['id'])
      .subscribe((id) => {
      this.artist = this._spotifyService.getArtist(id)
          .subscribe((artist) => {
            this.artist = artist;
            this._spotifyService.getTop(id)
                .map((response: any) => response.tracks)
                .subscribe((tracks: any) => {
                  this.tracks = tracks;
            });
          });      
    });
  }
}
