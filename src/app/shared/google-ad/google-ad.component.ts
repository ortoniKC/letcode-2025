import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-google-ad',
  template: `<div class="google-ad-container">
    <ins
      class="adsbygoogle"
      style="display:block"
      [attr.data-ad-client]="'ca-pub-6251538267574677'"
      [attr.data-ad-slot]="adSlot"
      [attr.data-ad-format]="adFormat"
      [attr.data-full-width-responsive]="fullWidth ? 'true' : 'false'"
    >
    </ins>
  </div>`,
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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    try {
      setTimeout(() => {
        if (window && (window as any).adsbygoogle) {
          (window as any).adsbygoogle.push({});
        }
      }, 500); // Delay to ensure AdSense script is ready
    } catch (e) {
      console.error('AdSense failed to load:', e);
    }
  }
}
