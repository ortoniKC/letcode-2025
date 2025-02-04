import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../service/auth.service';
import { Router, RouterModule } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent implements OnInit {
  email = null;
  src = '';
  // constructor(
  //   private auth: AuthService,
  //   private router: Router,
  //   private toast: ToastrService
  // ) {
  //   auth.getUser().subscribe((user) => {
  //     this.email = user?.email;
  //     this.src = 'https://robohash.org/' + user?.displayName;
  //   });
  // }

  ngOnInit() {
    const savedTheme = '';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
  }

  // async signOut() {
  //   try {
  //     this.auth.logout().then((res) => {
  //       this.router.navigateByUrl('/');
  //       this.toast.info('Bye! See you soon :)');
  //       this.email = null;
  //       this.openBurger();
  //     });
  //   } catch (error) {
  //     this.openBurger();
  //     this.toast.error(error);
  //   }
  // }

  openBurger() {
    let burger: any = document.querySelector('.burger');
    if (burger) {
      burger.classList.toggle('is-active');
      let nav = document.querySelector('#' + burger.dataset.target);
      nav?.classList.toggle('is-active');
    }
  }
}
