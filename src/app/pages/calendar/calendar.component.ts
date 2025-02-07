import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-calendar',
  imports: [FormsModule, PageheaderComponent, LearningPointComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {
  lp = [
    'How to handle calendar elements',
    'How to set dynamic dates',
    'Java calendar & moment.js',
  ];
  link = '/video/Calender';
  birthday: string = '';

  onSubmit() {
    console.log('Selected Birthday:', this.birthday);
  }
}
