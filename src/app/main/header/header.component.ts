import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,

  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  themeStatus: string = 'light';

  constructor(@Inject(DOCUMENT) private document: Document) {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.themeStatus = localStorage.getItem('theme') || 'light';
    }
    this.setTheme(this.themeStatus);
  }

  setTheme(theme: string) {
    this.document.documentElement.setAttribute('data-theme', theme);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme);
    }
  }

  toggleTheme() {
    this.themeStatus = this.themeStatus === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.themeStatus);
    this.setTheme(this.themeStatus);
  }

  openBurger() {
    let burger: any = document.querySelector('.burger');
    if (burger) {
      burger.classList.toggle('is-active');
      let nav = document.querySelector('#' + burger.dataset.target);
      nav?.classList.toggle('is-active');
    }
  }
}
