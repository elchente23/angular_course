import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  profile: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if(this.authService.userProfile) {
      this.profile = this.authService.userProfile;
      console.log(this.authService.userProfile);
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        console.log(profile);
      });
    }
  }

}
