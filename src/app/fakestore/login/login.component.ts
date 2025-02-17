import { Component } from '@angular/core';
import { AuthService } from '../../service/fakestore/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
    username = '';
    password = '';
  
    constructor(private authService: AuthService) {}
  
    login() {
      this.authService.login(this.username, this.password).then(response => {
        if (response.token) alert('Login Successful');
        else alert('Login Failed');
      });
    }
  }