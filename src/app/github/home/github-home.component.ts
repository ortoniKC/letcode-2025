import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  NgModule,
  OnInit,
} from '@angular/core';
import { PageheaderComponent } from '../../pages/pageheader/pageheader.component';
import { LearningPointComponent } from '../../pages/learning-point/learning-point.component';
import { UsercardComponent } from '../usercard/usercard.component';
import { ReposComponent } from '../repos/repos.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { GithubService } from '../../service/github.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-home',
  imports: [
    PageheaderComponent,
    LearningPointComponent,
    UsercardComponent,
    CommonModule,
    ReposComponent,
    FormsModule,
    AdsVerticalComponent,
    AdsHorizontalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './github-home.component.html',
})
export class GithubHomeComponent implements OnInit {
  user: any;
  username!: string;
  error: string | null | undefined;
  lp = [
    'findElements',
    'List (Java)',
    'Enhanced for loop',
    'To validate image is exists',
    'Assert (Validation)',
  ];
  link = 'elements';

  constructor(
    private ref: ChangeDetectorRef,
    private githibService: GithubService // private spinner: NgxSpinnerService
  ) {}
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }

  findUser() {
    // this.spinner.show();
    this.githibService.getUserDetail(this.username).subscribe(
      (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
        // this.spinner.hide();
      },
      (err) => {
        // this.spinner.hide();
        this.user = null;
        this.error = 'User not found';
        this.ref.detectChanges();
      }
    );
  }
}
