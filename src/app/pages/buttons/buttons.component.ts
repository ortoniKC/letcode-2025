import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';

@Component({
  selector: 'app-buttons',
  imports: [PageheaderComponent, LearningPointComponent],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {
  name: string;
  timeoutHandler: any = 0;

  learningPoint = [
    'click()',
    'driver navigation commands',
    'getLocation()',
    'getCss()',
    'getSize()',
    'isEnabled()',
  ];
  link = '/video/button';
  constructor(private titleService: Title, private meat: Meta) {
    this.name = 'Hold!';
  }

  ngOnInit(): void {
    this.meat.addTags([
      {
        name: 'keywords',
        content:
          'test automation practice sites, automation test practice website, automation testing practice site, automation testing selenium practice sites, automation practice site, automation test site, automation testing exam, automation testing practice website, qa automation test engineer, qa automation selenium interview questions, ui automation testing selenium, ui automation testing using selenium, automation web testing',
      },
      {
        name: 'description',
        content: 'Interact with different types of inputs',
      },
    ]);
    this.titleService.setTitle('Interact with Buttons');
  }
  public mouseup() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  public mousedown() {
    this.timeoutHandler = setTimeout(() => {
      this.name = 'has been long pressed';
      this.timeoutHandler = null;
    }, 500);
  }
}
