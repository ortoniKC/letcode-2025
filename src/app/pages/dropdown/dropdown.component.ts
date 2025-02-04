import { Component, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-dropdown',
  imports: [PageheaderComponent, LearningPointComponent],
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
  learningPoint = [
    'selectByVisibleText()',
    'isMultiple()',
    'How to select mutiple values',
    'selectByIndex()',
    'getOptions()',
    'selectByValue()',
    'getFirstSelectedOption()',
  ];
  link = '/video/dropdowns';
  constructor() {}

  ngOnInit(): void {}
  changed: string = '';
  onChanged(changed: any) {
    this.changed = changed.target.selectedOptions[0].textContent;
    if (this.changed == 'Select Fruit') {
      this.changed = '';
    }
  }
  hero: string = '';
  onhero(heo: any) {
    this.hero = heo.target.selectedOptions[0].textContent;
  }
  pl: string = '';
  pgmlan(pl: any) {
    this.hero = pl.target.selectedOptions[0].textContent;
  }
}
