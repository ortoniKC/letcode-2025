import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AdsSquareComponent } from '../ads-square/ads-square.component';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule, AdsSquareComponent],
  templateUrl: './ads-horizontal.component.html',
})
export class AdsHorizontalComponent implements AfterViewInit {
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
