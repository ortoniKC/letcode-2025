import { Component, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-radio',
  imports: [PageheaderComponent, LearningPointComponent],
  templateUrl: './radio.component.html',
})
export class RadioComponent implements OnInit {
  constructor() {}
  lp = ['click()', 'isSelected()', 'isEnabled()'];
  link = '/video/radio';

  ngOnInit(): void {}
}
