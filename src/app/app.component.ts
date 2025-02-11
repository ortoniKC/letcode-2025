import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRoute,
  Data,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'LetCode with Koushik';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      const title = data['title'] || 'LetCode with Koushik';
      const description = data['description'] || 'Test automation hub';
      const keywords =
        data['keywords'] ||
        'letcode, letcode with koushik, selenium, playwright, test automation';
      if (isPlatformBrowser(this.platformId)) {
        const url = window.location.href;
        this.metaService.updateTag({ property: 'og:url', content: url });
      }

      // Set the page title
      this.titleService.setTitle(title);

      // Update meta tags
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ name: 'keywords', content: keywords });
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({
        property: 'og:description',
        content: description,
      });
      this.metaService.updateTag({
        property: 'og:image',
        content: 'https://example.com/default-image.jpg',
      });
      this.metaService.updateTag({ name: 'twitter:title', content: title });
      this.metaService.updateTag({
        name: 'twitter:description',
        content: description,
      });
      this.metaService.updateTag({
        name: 'twitter:image',
        content: 'https://example.com/default-image.jpg',
      });
    });
  }
}
