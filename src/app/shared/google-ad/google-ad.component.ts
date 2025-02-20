import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-google-ad',
  template: `
    <div class="google-ad-container">
      <ins
        class="adsbygoogle"
        style="display:block"
        [attr.data-ad-client]="'ca-pub-6251538267574677'"
        [attr.data-ad-slot]="adSlot"
        [attr.data-ad-format]="adFormat"
        [attr.data-full-width-responsive]="fullWidth ? 'true' : 'false'"
      >
      </ins>
    </div>
  `,
  styles: [
    `
      .google-ad-container {
        text-align: center;
        margin: 10px 0;
      }
    `,
  ],
})
export class GoogleAdComponent implements AfterViewInit {
  @Input() adSlot!: string;
  @Input() adFormat: string = 'auto';
  @Input() fullWidth: boolean = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    // Ensure this only runs in the browser, not during SSR
    if (isPlatformBrowser(this.platformId)) {
      try {
        // Check if AdSense script is available
        if (typeof (window as any).adsbygoogle !== 'undefined') {
          // Prevent duplicate loading
          const ads = this.el.nativeElement.querySelectorAll('.adsbygoogle');
          ads.forEach((ad: any) => {
            if (!ad.hasAttribute('data-ads-loaded')) {
              ad.setAttribute('data-ads-loaded', 'true'); // Mark as loaded
              (window as any).adsbygoogle.push({});
            }
          });
        }
      } catch (e) {
        console.error('AdSense failed to load:', e);
      }
    }
  }
}
