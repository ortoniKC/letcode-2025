import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

@Component({
  selector: 'app-frame',
  imports: [LearningPointComponent, PageheaderComponent, CommonModule],
  templateUrl: './frame.component.html',
  styles: `iframe {
    display: block;
    border: none;
    height: 100vh;
    width: -webkit-fill-available;
}`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FrameComponent {
  lp = [
    'Target Locator',
    'switchTo()',
    'defaultContent()',
    'parentFrame()',
    'Overloading concept - JAVA',
  ];
  link = 'frames';
  myLoadEvent(e: { contentDocument: any }) {
    var a = e.contentDocument;
    a.querySelectorAll('body > app-root > app-header')[0].style.display =
      'none';
    a.querySelectorAll('body > app-root > app-footer')[0].style.display =
      'none';
  }
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
