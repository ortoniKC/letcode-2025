import { AfterViewInit, Component } from '@angular/core';
import { AdsSquareComponent } from '../ads-square/ads-square.component';

@Component({
  selector: 'app-ads',
  imports: [AdsSquareComponent],
  templateUrl: './ads-horizontal.component.html',
})
export class AdsHorizontalComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }
}
