import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-pwrunner',
  imports: [CommonModule, AdsHorizontalComponent],
  templateUrl: './pwrunner.component.html',
})
export class PwrunnerComponent {
  code = `"ENV_NAME": "TEST_ENV=stagingNational \${--config=play.config.ts --headed}"`;
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
