import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-ads-square',
  imports: [],
  templateUrl: './ads-square.component.html',
})
export class AdsSquareComponent implements AfterViewInit {
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
