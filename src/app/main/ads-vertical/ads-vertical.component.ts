import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-ads-vertical',
  imports: [],
  templateUrl: './ads-vertical.component.html',
})
export class AdsVerticalComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (e) {
        // console.error('AdSense error:', e);
      }
    }
  }
}
