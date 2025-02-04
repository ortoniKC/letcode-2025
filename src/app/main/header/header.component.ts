import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleTheme() {
    const currentTheme =
      this.document.documentElement.getAttribute('data-theme') === 'light'
        ? 'dark'
        : 'light';
    this.document.documentElement.setAttribute('data-theme', currentTheme);
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
