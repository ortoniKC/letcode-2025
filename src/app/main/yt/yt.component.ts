import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Injectable,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-yt',
  imports: [],
  templateUrl: './yt.component.html',
})
export class YtComponent implements AfterViewInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    const script = this.renderer.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.document.body, script);
  }
}
