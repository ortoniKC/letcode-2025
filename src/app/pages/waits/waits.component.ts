import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-waits',
  imports: [PageheaderComponent, LearningPointComponent],
  templateUrl: './waits.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WaitsComponent {
  lp = ['ExpectedConditions', 'Waits for an alert'];
  link = '/video/Waits';

  constructor() {}
  ngOnInit(): void {}
  simple() {
    setTimeout(() => {
      alert("Finally I'm here, just to say Hi :)");
    }, 4500);
  }
}
