import { Meta, Title } from '@angular/platform-browser';
import { Renderer2 } from '@angular/core';

export class UpdateTag {
  constructor(private titleService: Title, private meta: Meta) {}

  updateTags(title: string, keyword: string, description: string) {
    this.titleService.setTitle(title);
    this.meta.updateTag({ name: 'keywords', content: keyword });
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
