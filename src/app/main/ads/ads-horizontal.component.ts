import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { AdsSquareComponent } from '../ads-square/ads-square.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ads',
  imports: [AdsSquareComponent, CommonModule],
  templateUrl: './ads-horizontal.component.html',
})
export class AdsHorizontalComponent implements AfterViewInit, OnDestroy {
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
