import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-file',
  imports: [
    PageheaderComponent,
    LearningPointComponent,
    CommonModule,
    AdsVerticalComponent,
    AdsHorizontalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './file.component.html',
})
export class FileComponent {
  lp = [
    'How to download & upload files',
    'ChromeOption class',
    'SetFileDetector',
  ];
  link = 'file';
  fileName: string = '';

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileName = file.name; // Save file name
    }
  }
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
