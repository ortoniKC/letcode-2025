import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  SafeResourceUrl,
  DomSanitizer,
  Title,
  Meta,
} from '@angular/platform-browser';
import { UpdateTag } from '../../metaTags';
import { CommonModule } from '@angular/common';
import { PageheaderComponent } from '../../pages/pageheader/pageheader.component';

@Component({
  selector: 'app-test-practice',
  imports: [CommonModule, PageheaderComponent],
  templateUrl: './test-practice.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestPracticeComponent implements OnInit {
  data = 'https://www.youtube.com/embed/';
  pre!: SafeResourceUrl;
  v1!: SafeResourceUrl;
  v3!: SafeResourceUrl;
  v2!: SafeResourceUrl;
  v4!: SafeResourceUrl;
  v5!: SafeResourceUrl;
  v6!: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    const tags = new UpdateTag(this.title, this.meta);
    tags.updateTags(
      'Practice like a Pro - LetCode',
      'selenium test practice, how to learn selenium, selenium learning resources',
      'If you want to learn you have to practice'
    );
    this.pre = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data + 't1etgfBmBf8'
    );
    this.v1 = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data + 'NKFBGpQ4EPY'
    );
    this.v2 = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data + 'DIQqgm3qU7o'
    );
    this.v3 = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data + '3V8ejGFa5A0'
    );
    this.v4 = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data + 'N9uJlLaSR5M'
    );
    this.v5 = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data + 'rU2WVZbzgow'
    );
    this.v6 = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.data + 'DlrBk6TyZww'
    );
  }

  tc06 = [
    'User should see the GitHub star button',
    'Note down the count of the stars',
    'Click on the GitHub star button',
    'The user should see a new window',
    'Click on the star button',
    'User should see the sign-in page',
    'Sign in and click the start button',
    'Close the active tab',
    'The no. of stars should increase',
    'Verify the number of products available message is the same as the number of the product available',
    'Change the size to s',
    'Repeat the step 10',
    'Mouse hover on the first product & verify the add to cart button has amber background',
    'add to cart',
    'Click on the checkout and accept the alert ',
  ];
}
