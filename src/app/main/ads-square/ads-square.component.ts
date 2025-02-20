import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleAdComponent } from '../../shared/google-ad/google-ad.component';

@Component({
  selector: 'app-ads-square',
  imports: [CommonModule, GoogleAdComponent],
  templateUrl: './ads-square.component.html',
})
export class AdsSquareComponent {}
