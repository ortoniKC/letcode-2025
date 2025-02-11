import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

@Component({
  selector: 'app-letxpath',
  imports: [CommonModule],
  templateUrl: './letxpath.component.html',
})
export class LetxpathComponent {
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
