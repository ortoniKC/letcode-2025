import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { Meta } from '@angular/platform-browser';
import { UpdateMetaTag } from './service/updateMeta';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'LetCode with Koushik';
  private route = inject(ActivatedRoute);
  private metaService = inject(Meta);
  private seoService = inject(UpdateMetaTag);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // ✅ Update Meta Tags
    this.metaService.updateTag({
      property: 'og:image',
      content:
        'https://raw.githubusercontent.com/ortoniKC/ortoniKC/refs/heads/main/letcode.png',
    });
    this.metaService.updateTag({
      name: 'twitter:image',
      content:
        'https://raw.githubusercontent.com/ortoniKC/ortoniKC/refs/heads/main/letcode.png',
    });

    // ✅ Listen for route changes (Meta Updates + Ad Refresh)
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.getChildRoute(this.activatedRoute);
        currentRoute.data.subscribe((data) => {
          this.seoService.updateMetaTags(data);
        });

        // ✅ Refresh Google Ads when navigating to a new page
        this.refreshAds();
      });
  }

  // ✅ Refresh Google AdSense Ads (Clears old ads before loading new)
  private refreshAds() {
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      setTimeout(() => {
        try {
          console.log('Refreshing Google Ads');
          document.querySelectorAll('.adsbygoogle').forEach((ad) => {
            (ad as HTMLElement).innerHTML = ''; // Remove old ads
          });
          (window as any).adsbygoogle.push({});
        } catch (e) {
          console.error('AdSense error:', e);
        }
      }, 500);
    }
  }

  // ✅ Recursive function to get the last activated child route
  private getChildRoute(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChildRoute(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
