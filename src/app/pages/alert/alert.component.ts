import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-alert',
  imports: [CommonModule, PageheaderComponent, LearningPointComponent],
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  constructor() {}

  learningPoint = [
    'switchTo()',
    'accept()',
    'dismiss()',
    'getText()',
    'sendKeys()',
    'Sweet Alert',
  ];
  link = '/video/alert';

  ngOnInit(): void {}
  simple() {
    alert('Hey! Welcome to LetCode');
  }
  bool: boolean = false;
  myConfirm() {
    let bool = confirm('Are you happy with LetCode?');
    if (bool) {
      this.bool = bool;
    } else {
      bool = false;
    }
  }
  myName: string = '';
  myPrompt(name: any) {
    this.myName = prompt('Enter your name') || '';
    console.log(this.myName);
  }
  onclick() {
    let modal = document.getElementsByClassName('modal')[0];
    modal.classList.add('is-active');
  }
  onClose() {
    let modal = document.getElementsByClassName('modal')[0];
    modal.classList.remove('is-active');
  }
}
