import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(private dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder) { 
      this.forma = fb.group({
        'titulo': data.titulo,
        'desc': data.desc
      });
    }

  ngOnInit() {
  }

  guardarCambios() {
    this.dialogRef.close(this.forma.value);

  }

  onNoClick() {
    this.dialogRef.close();
  }

}
