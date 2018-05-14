import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService) { 
    this.heroesService.getHeroes().subscribe(res => {
      setTimeout(() => {
        this.heroes = res;
        this.loading = false;
      }, 1000);
    });
  }

  ngOnInit() {
  }

  eliminarHeroe(key$: string) {
    this.heroesService.deleteHeroe(key$).subscribe(res => {
      if(!res) {
        delete this.heroes[key$];
      }
    });
  }

}
