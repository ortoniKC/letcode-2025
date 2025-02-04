import { Component, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-window',
  imports: [PageheaderComponent, LearningPointComponent],
  templateUrl: './window.component.html',
})
export class WindowComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Window handling - LetCode');
  }
  openRequestedPopup() {
    var myWindow = window.open(
      '/test',
      'test-site',
      'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes'
    );
  }
  openRequestedPopup2() {
    var myWindow = window.open(
      '/alert',
      'alert',
      'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes'
    );
    var myWindow = window.open(
      '/dropdowns',
      'dropdowns',
      'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes'
    );
  }

  lp = [
    'Window Handling concept',
    'close()',
    'quit()',
    'getTitle()',
    'List',
    'Set - LinkedHashSet',
    'Iterator or loop',
  ];
  link = '/video/window';
  ngOnInit(): void {}
}
