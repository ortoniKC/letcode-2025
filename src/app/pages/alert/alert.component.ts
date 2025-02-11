import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

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
  link = 'alert';

  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
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
