import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  themeStatus: string = 'light';
  constructor(@Inject(DOCUMENT) private document: Document) {
    const storedTheme =
      document.documentElement.getAttribute('data-theme') || 'light';
    this.themeStatus = storedTheme;
  }

  toggleTheme() {
    this.themeStatus = this.themeStatus === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.themeStatus);
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
