import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: "",
    bio: "",
    casa: "Marvel"
  };

  nuevo: boolean = false;
  id: string;

  constructor(private heroeService: HeroesService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(param => {
      this.id = param['id'];

      if(this.id !== 'nuevo'){
        this.heroeService.getHeroe(this.id).subscribe((res: any) => {
          this.heroe = res;
        });
      }
    });
  }

  ngOnInit() {
  }

  guardar() {

    if(this.id == 'nuevo') {
      this.heroeService.nuevoHeroe(this.heroe).subscribe((data) => {
        this.router.navigate(['/heroe', data.name]);
      }, (error) => {
        console.error(error);
      });
    } else {
      this.heroeService.actualizarHeroe(this.heroe, this.id).subscribe((data) => {
        
      }, (error) => {
        console.error(error);
      });
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);

    forma.reset({
      casa: "Marvel"
    });
  }
}
