import { Component, inject, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

@Component({
  selector: 'app-dropdown',
  imports: [PageheaderComponent, LearningPointComponent, CommonModule],
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
  link = 'dropdowns';
  constructor() {}

  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }

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
