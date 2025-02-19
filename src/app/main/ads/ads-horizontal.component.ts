import { AfterViewInit, Component, HostListener } from '@angular/core';
import { AdsSquareComponent } from '../ads-square/ads-square.component';

@Component({
  selector: 'app-ads',
  imports: [AdsSquareComponent],
  templateUrl: './ads-horizontal.component.html',
})
export class AdsHorizontalComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.loadAds();
  }
  @HostListener('window:resize')
  loadAds() {
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
