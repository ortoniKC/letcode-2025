import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { AdsSquareComponent } from '../ads-square/ads-square.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ads',
  imports: [AdsSquareComponent, CommonModule],
  templateUrl: './ads-horizontal.component.html',
})
export class AdsHorizontalComponent implements AfterViewInit, OnDestroy {
  adLoaded = false;
  adId: string = 'ad-' + Math.random().toString(36).substring(2, 10);
  ngAfterViewInit(): void {
    this.loadAd();
  }

  loadAd() {
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      setTimeout(() => {
        try {
          (window as any).adsbygoogle.push({});
          this.adLoaded = true;
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
