import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/fakestore/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';
import { AdsSquareComponent } from '../../main/ads-square/ads-square.component';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule,
    AdsHorizontalComponent,
    AdsSquareComponent,
    AdsVerticalComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  isLoggedIn = false;
  isLoading = false;
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    // Check if auth_token exists in localStorage to update isLoggedIn
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('auth_token');
      this.isLoggedIn = typeof token === 'string' && token.length > 1;
    }
  }

  async logout() {
    this.authService.logout();
    showSnackBar('Logged Out', this.snackBar);
    this.router.navigate(['/home']);
  }

  async login() {
    try {
      this.isLoading = true;
      const response = await this.authService.login(
        this.username,
        this.password
      );
      if (response.token) {
        showSnackBar('Login Successful', this.snackBar);
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('auth_token', response.token);
          this.isLoggedIn = true;
          this.router.navigate(['/home']);
        }
      } else {
        showSnackBar('Login Failed', this.snackBar);
      }
    } catch (error) {
      showSnackBar('Login Failed', this.snackBar);
    } finally {
      this.isLoading = false;
    }
  }
}

function showSnackBar(message: any, snackBar: MatSnackBar) {
  snackBar.open(`${message}`, 'Close', {
    duration: 3000,
    verticalPosition: 'bottom',
    horizontalPosition: 'center',
  });
}
