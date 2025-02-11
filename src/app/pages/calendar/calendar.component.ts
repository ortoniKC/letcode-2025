import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

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
  link = 'calender';
  birthday: string = '';

  onSubmit() {
    console.log('Selected Birthday:', this.birthday);
  }
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
