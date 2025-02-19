import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-ads-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads-square.component.html',
})
export class AdsSquareComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadAd();
    }
  }

  loadAd() {
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      setTimeout(() => {
        try {
          (window as any).adsbygoogle.push({});
        } catch (e) {
          console.error('AdSense error:', e);
        }
      }, 500);
    }
  }
}
