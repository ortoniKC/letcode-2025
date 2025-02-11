import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

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
  link = 'edit';
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
