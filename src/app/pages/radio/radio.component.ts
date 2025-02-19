import { Component, inject, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';

@Component({
  selector: 'app-radio',
  imports: [
    PageheaderComponent,
    LearningPointComponent,
    AdsHorizontalComponent,
    AdsVerticalComponent,
  ],
  templateUrl: './radio.component.html',
})
export class RadioComponent implements OnInit {
  constructor() {}
  lp = ['click()', 'isSelected()', 'isEnabled()'];
  link = 'radio';

  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
