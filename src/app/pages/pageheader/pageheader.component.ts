import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  imports: [],
  templateUrl: './pageheader.component.html',
})
export class PageheaderComponent {
  @Input() header: string = '';
}
