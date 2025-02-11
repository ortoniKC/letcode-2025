import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../../service/updateMeta';

@Component({
  selector: 'app-frame-content',
  imports: [FormsModule, CommonModule],
  templateUrl: './frame-content.component.html',
})
export class FrameContentComponent {
  constructor(private ref: ChangeDetectorRef) {}

  fname: string;
  lname: string;

  onSubmit() {
    this.ref.detectChanges();
  }
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
