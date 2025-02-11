import { inject, Injectable, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UpdateMetaTag {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  updateMetaTags(data: Data) {
    console.log('SEO Data:', data);

    const title = data['title'] || 'Default Title';
    const description = data['description'] || 'Default description';
    const keywords = data['keywords'] || 'angular, seo';

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
