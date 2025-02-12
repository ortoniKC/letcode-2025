import { inject, Injectable, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UpdateMetaTag {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);

  constructor() {
    this.router.events.subscribe(() => {
      this.clearMetaTags();
    });
  }
  private clearMetaTags() {
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("name='keywords'");
  }
  updateMetaTags(data: Data) {
    const title = data['title'] || 'LetCode with Koushik';
    const description =
      data['description'] || 'Testing Hub - Curated for testers';
    const keywords =
      data['keywords'] || 'test automation, selenium, playwright';
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({
      property: 'og:description',
      content: description,
    });
  }
}
