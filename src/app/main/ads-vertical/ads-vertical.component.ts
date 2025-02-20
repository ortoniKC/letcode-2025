import { Component } from '@angular/core';
import { GoogleAdComponent } from '../../shared/google-ad/google-ad.component';

@Component({
  selector: 'app-ads-vertical',
  standalone: true,
  imports: [GoogleAdComponent],
  templateUrl: './ads-vertical.component.html',
})
export class AdsVerticalComponent {}
// implements AfterViewInit {
//   adLoaded = false;
//   adId: string = 'ad-' + Math.random().toString(36).substring(2, 10);

//   constructor(@Inject(PLATFORM_ID) private platformId: any) {}

//   ngAfterViewInit(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       this.loadAd();
//     }
//   }

//   loadAd() {
//     if (
//       !this.adLoaded &&
//       typeof window !== 'undefined' &&
//       (window as any).adsbygoogle
//     ) {
//       setTimeout(() => {
//         try {
//           console.log(`Loading Ad ID: ${this.adId}`);
//           (window as any).adsbygoogle.push({});
//           this.adLoaded = true;
//         } catch (e) {
//           console.error('AdSense error:', e);
//         }
//       }, 500);
//     }
//   }

//   ngOnDestroy(): void {
//     this.adLoaded = false;
//   }
// }
