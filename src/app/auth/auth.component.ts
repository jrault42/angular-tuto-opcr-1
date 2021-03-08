import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
  }

  onSignIn() {
    return this.authService.signIn()
      .then(() => {
        this.isAuth = this.authService.isAuth;
        this.router.navigate(['appareils']);
      });
  }

  onSignOut() {
    this.authService.signOut();
    this.isAuth = this.authService.isAuth;
  }
}
