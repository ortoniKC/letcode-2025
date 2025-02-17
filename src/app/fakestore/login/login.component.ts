import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/fakestore/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  isLoggedIn = false;

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
      const response = await this.authService.login(this.username, this.password);
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
