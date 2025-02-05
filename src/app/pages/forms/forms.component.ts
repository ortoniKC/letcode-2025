import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-forms',
  imports: [
    CommonModule,
    FormsModule,
    PageheaderComponent,
    LearningPointComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  lp = [
    'All the WebDriver basic actions',
    'Find the bugs',
    'How to validate form',
    'How to generate random test data',
  ];
  link = '/videos';
}
