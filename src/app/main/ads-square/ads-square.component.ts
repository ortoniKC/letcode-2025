import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-ads-square',
  imports: [CommonModule],
  templateUrl: './ads-square.component.html',
})
export class AdsSquareComponent implements AfterViewInit, OnDestroy {
  adLoaded = false;

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
