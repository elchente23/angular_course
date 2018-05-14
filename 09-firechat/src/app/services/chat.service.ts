import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable()
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) { 

  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', 
        ref => ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges()
        .map((mensajes: Mensaje[]) => {
          
          this.chats = [];

          for(let mensaje of mensajes) {
            this.chats.unshift(mensaje);
          }
          
          return this.chats;
        });
  }

  agregarMensaje (texto: string) {

    let mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    };

    return this.itemsCollection.add(mensaje);

  }
}
