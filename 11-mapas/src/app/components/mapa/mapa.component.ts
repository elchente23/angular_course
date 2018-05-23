import { Component } from '@angular/core';
import { Marcador } from '../../clases/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

  marcadores: Marcador[] = [];

  lat: number = 51.678418;
  lng: number = 7.8090007;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    if(localStorage.getItem('marcadores')) {
      this.marcadores = <Marcador[]>JSON.parse(localStorage.getItem('marcadores'));
    }
   }

  agregarMarcador( event ) {

    const marcador = new Marcador(event.coords.lat, event.coords.lng);

    this.marcadores.push(marcador);

    this.guardarStorage();
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  borrarMarcador(index) {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000 });
  }

  editarMarcador(marcador: Marcador) {
    let dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });
      
    });
  }
}