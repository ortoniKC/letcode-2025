import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
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

@Component({
  selector: 'app-home',
  imports: [
    PageheaderComponent,
    LearningPointComponent,
    UsercardComponent,
    CommonModule,
    ReposComponent,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
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
  link = '/video/elements';

  constructor(
    private ref: ChangeDetectorRef,
    private githibService: GithubService // private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {}

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
