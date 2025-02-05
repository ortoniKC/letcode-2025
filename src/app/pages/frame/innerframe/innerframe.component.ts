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
  styles: './style.css',
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
