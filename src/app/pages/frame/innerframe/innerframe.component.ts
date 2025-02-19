import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-innerframe',
  imports: [],
  templateUrl: './innerframe.component.html',
  styles: `iframe {
    display: block;
    border: none;
    height: 100vh;
    width: -webkit-fill-available;
}`,
})
export class InnerframeComponent {
  @Input() name: string;
  constructor(private changeRef: ChangeDetectorRef) {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.name) {
      this.changeRef.detectChanges();
    }
  }
}
