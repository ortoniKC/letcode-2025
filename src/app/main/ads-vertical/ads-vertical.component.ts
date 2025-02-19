import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-ads-vertical',
  imports: [CommonModule],
  templateUrl: './ads-vertical.component.html',
})
export class AdsVerticalComponent implements AfterViewInit, OnDestroy {
  adLoaded = false;
  adId: string = 'ad-' + Math.random().toString(36).substring(2, 10);
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only execute in browser
      this.loadAd();
    }
  }
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  loadAd() {
    if (
      !this.adLoaded &&
      typeof window !== 'undefined' &&
      (window as any).adsbygoogle
    ) {
      setTimeout(() => {
        try {
          (window as any).adsbygoogle.push({});
          this.adLoaded = true; // Prevent multiple loads
        } catch (e) {
          console.error('AdSense error:', e);
        }
      }, 500);
    }
  }

  ngOnDestroy(): void {
    this.adLoaded = false; // Reset the state
  }
}
