import { Component } from '@angular/core';
import { GoogleAdComponent } from '../../shared/google-ad/google-ad.component';

@Component({
  selector: 'app-ads-vertical',
  standalone: true,
  imports: [GoogleAdComponent],
  templateUrl: './ads-vertical.component.html',
})
export class AdsVerticalComponent {}
