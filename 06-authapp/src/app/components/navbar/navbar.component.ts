import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { 
    authService.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticate (): boolean {
    return this.authService.isAuthenticated();
  }

}
