import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-syb',
  imports: [],
  templateUrl: './syb.component.html',
})
export class SybComponent {
  @Input() url: SafeResourceUrl = '';
  @Input() title: string = '';
  @Input() alt: string = '';
  @Input() imageUrl: string = '';
}
