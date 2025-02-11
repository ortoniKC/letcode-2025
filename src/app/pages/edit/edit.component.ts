import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [
    PageheaderComponent,
    LearningPointComponent,
    CommonModule,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './edit.component.html',
})
export class EditComponent {
  learningPoint = [
    'sendKeys()',
    'Keyboard TAB',
    'getAttribute()',
    'clear()',
    'isEnabled()',
  ];
  link = '/video/edit';
}
