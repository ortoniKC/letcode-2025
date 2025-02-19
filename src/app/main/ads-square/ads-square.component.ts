import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-ads-square',
  imports: [],
  templateUrl: './ads-square.component.html',
})
export class AdsSquareComponent implements AfterViewInit {
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
