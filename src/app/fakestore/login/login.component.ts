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
  
    async login() {
      try {
      const response = await this.authService.login(this.username, this.password);
      if (response.token) alert('Login Successful');
      else alert('Login Failed');
      } catch (error) {
      alert('Login Failed');
      }
    }
      // this.authService.login(this.username, this.password).then(response => {
      //   if (response.token) alert('Login Successful');
      //   else alert('Login Failed');
      // });
    // }
  }