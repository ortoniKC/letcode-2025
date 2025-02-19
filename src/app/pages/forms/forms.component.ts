import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';

@Component({
  selector: 'app-forms',
  imports: [
    CommonModule,
    FormsModule,
    PageheaderComponent,
    LearningPointComponent,
    AdsHorizontalComponent,
    AdsVerticalComponent,
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
  link = 'forms';
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
