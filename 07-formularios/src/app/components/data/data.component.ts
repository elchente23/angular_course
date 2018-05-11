import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: "",
      apellido: ""
    },
    email: "",
    // pasatiempos: [
    //   //"uno",
    //   // "dos",
    //   // "tres"
    // ]
  };

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup ({      
        'nombre': new FormControl('Hola', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('mundo', [Validators.required, this.noApellidoHola])
      }),
      'email': new FormControl('algo@algo.com', [
                Validators.required, 
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
              ]),
      'pasatiempos': new FormArray([
        new FormControl('uno', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl(''),
      'password2': new FormControl('')
    });

    //this.forma.setValue(this.usuario);

    this.forma.controls["password2"].setValidators([
      Validators.required,
      this.passIgual.bind(this.forma)
    ]);
  }

  ngOnInit() {
  }

  guardar() {
    console.log(this.forma.value);
    console.log(this.forma);

    //this.forma.reset(this.usuario);
  }

  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl("", Validators.required)
    );
  }

  noApellidoHola(control: FormControl): { [s:string]:boolean } {
    if(control.value === "hola") {
      return {
        nohola: true
      }
    }

    return null;
  }

  passIgual(control: FormControl): { [s:string]:boolean } {
    let forma: any = this;
    if(control.value !== forma.controls["password1"].value){
      return {
        passigual: true
      }
    }

    return null;
  }

  existeUsuario(control: FormControl): Promise<any>|Observable<any> {
    let promesa = new Promise((resolve, reject)=> {
      setTimeout(() => {
        if(control.value === "usuario123"){
          resolve({existe: true});
        } else {
          resolve(null);
        }
      }, 3000);
    });

    return promesa;
  }

}
