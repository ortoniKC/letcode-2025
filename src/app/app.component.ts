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
import { filter } from 'rxjs/internal/operators/filter';

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
    // Listen for route changes and update meta tags
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.getChildRoute(this.activatedRoute);
        currentRoute.data.subscribe((data) => {
          this.seoService.updateMetaTags(data);
        });
      });
  }

  // Recursive function to get the last activated child route
  private getChildRoute(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChildRoute(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
  // ngOnInit() {
  //   this.route.data.subscribe((data) => {
  //     console.log(data);
  //     this.seoService.updateMetaTags(data);
  //
  //   });
  // }
}
