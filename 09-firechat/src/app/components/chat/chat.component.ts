import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string = "";

  constructor(private cs: ChatService) { 
    this.cs.cargarMensajes().subscribe((mensaje: any[]) => {
      console.log(mensaje);
    });
  }

  ngOnInit() {
  }

  enviar_mensaje() {
    
  }

}
