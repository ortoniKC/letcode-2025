import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdsHorizontalComponent } from '../ads/ads-horizontal.component';

@Component({
  selector: 'app-not-found',
  imports: [RouterModule, AdsHorizontalComponent],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
