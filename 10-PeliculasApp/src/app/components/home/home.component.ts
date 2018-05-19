import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  private carteleras: any[] = [];
  private populares: any[] = [];
  private infantiles: any[] = [];

  constructor(private ps: PeliculasService) { 
    this.ps.getCarteleras()
        .subscribe(data => {
          this.carteleras = data.results.slice(0,6);
        });

    this.ps.getPopulares()
        .subscribe(data => {
          this.populares = data.results.slice(0, 6);
        });

    this.ps.getPopularesInfantiles()
        .subscribe(data => {
          this.infantiles = data.results.slice(0, 6);
        });
  }

}
