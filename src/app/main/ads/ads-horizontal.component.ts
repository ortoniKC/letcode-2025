import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsSquareComponent } from '../ads-square/ads-square.component';
import { GoogleAdComponent } from '../../shared/google-ad/google-ad.component';

@Component({
  selector: 'app-ads',
  imports: [AdsSquareComponent, GoogleAdComponent],
  templateUrl: './ads-horizontal.component.html',
})
export class AdsHorizontalComponent {}
