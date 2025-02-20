import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-waits',
  imports: [PageheaderComponent, LearningPointComponent, AdsVerticalComponent],
  templateUrl: './waits.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WaitsComponent {
  lp = ['ExpectedConditions', 'Waits for an alert'];
  link = 'waits';

  simple() {
    setTimeout(() => {
      alert("Finally I'm here, just to say Hi :)");
    }, 4500);
  }

  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
