import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ads-vertical',
  imports: [],
  templateUrl: './ads-vertical.component.html',
})
export class AdsVerticalComponent implements AfterViewInit {
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
