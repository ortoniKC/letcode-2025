import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AdsSquareComponent } from '../ads-square/ads-square.component';
import { AdsenseModule } from 'ng2-adsense';

@Component({
  selector: 'app-ads',
  imports: [CommonModule, AdsSquareComponent, AdsenseModule],
  templateUrl: './ads-horizontal.component.html',
})
export class AdsHorizontalComponent implements AfterViewInit, OnDestroy {
  adLoaded = false;
  adId: string = 'ad-' + Math.random().toString(36).substring(2, 10);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadAd();
    }
  }

  loadAd() {
    if (
      !this.adLoaded &&
      typeof window !== 'undefined' &&
      (window as any).adsbygoogle
    ) {
      setTimeout(() => {
        try {
          console.log(`Loading Ad ID: ${this.adId}`);
          (window as any).adsbygoogle.push({});
          this.adLoaded = true; // Prevent multiple loads
        } catch (e) {
          console.error('AdSense error:', e);
        }
      }, 500);
    }
  }

  ngOnDestroy(): void {
    this.adLoaded = false;
  }
}
