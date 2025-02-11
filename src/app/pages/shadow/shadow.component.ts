import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-shadow',
  imports: [CommonModule, PageheaderComponent, LearningPointComponent],
  templateUrl: './shadow.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShadowComponent implements OnInit {
  lp = [
    'What is shadow DOM?',
    'What is open & close Shadow DOM',
    'How to interact with open & close Shadow DOM',
  ];
  link = 'shadow';

  constructor() {}

  ngOnInit(): void {
    const ele = document.querySelector('#open-shadow');
    const s = ele?.attachShadow({ mode: 'open' });
    if (s)
      s.innerHTML = `<div class="control">
    <label for="name" class="label">Enter your first name</label>
    <input type="text" id="fname" class="field">
    </div>`;
    const elem = document.querySelector('#close-shadow');
    const myS = elem?.attachShadow({ mode: 'closed' });
    if (myS)
      myS.innerHTML = `<div class="control">
    <label for="name" class="label">Enter your email</label>
    <input type="text" id="email" class="field">
    </div>`;
    let exists = window.customElements.get('my-web-component');
    if (!exists)
      window.customElements.define('my-web-component', MyWebComponent);
  }
}

class MyWebComponent extends HTMLElement {
  myRoot: any;
  constructor() {
    super();
    this.myRoot = this.attachShadow({
      mode: 'closed',
    });
  }
  connectedCallback() {
    this.myRoot.innerHTML = `<div class="control">
          <label for="name" class="label">Enter your last name</label>
          <input type="text" id="lname" class="field">
          </div>`;
  }
}
