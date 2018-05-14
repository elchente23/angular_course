import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chats: Observable<any[]>;
  constructor(db: AngularFirestore) {
    const settings = {timestampsInSnapshots:true};
    db.firestore.settings(settings);
    this.chats = db.collection('chats').valueChanges();
  }
  title = 'app';
}
