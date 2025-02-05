import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercard',
  imports: [CommonModule],
  templateUrl: './usercard.component.html',
})
export class UsercardComponent {
  @Input() user: any;
}
