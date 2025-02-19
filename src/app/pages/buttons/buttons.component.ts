import { Component, inject, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';

@Component({
  selector: 'app-buttons',
  imports: [
    PageheaderComponent,
    LearningPointComponent,
    RouterLink,
    AdsHorizontalComponent,
    AdsVerticalComponent,
  ],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
  name: string;
  timeoutHandler: any = 0;

  learningPoint = [
    'click()',
    'driver navigation commands',
    'getLocation()',
    'getCss()',
    'getSize()',
    'isEnabled()',
  ];
  link = 'button';
  constructor(private titleService: Title, private meat: Meta) {
    this.name = 'Hold!';
  }

  public mouseup() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown() {
    this.timeoutHandler = setTimeout(() => {
      this.name = 'has been long pressed';
      this.timeoutHandler = null;
    }, 500);
  }
}
