import { Component } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { UpdateTag } from '../../metaTags';

@Component({
  selector: 'app-edit',
  imports: [
    PageheaderComponent,
    LearningPointComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './edit.component.html',
})
export class EditComponent {
  learningPoint = [
    'sendKeys()',
    'Keyboard TAB',
    'getAttribute()',
    'clear()',
    'isEnabled()',
  ];
  link = '/video/edit';

  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
    const tag = new UpdateTag(this.titleService, this.meta);
    tag.updateTags(
      'Interact with Input fields',
      'test automation practice sites, automation test practice website, automation testing practice site, automation testing selenium practice sites, automation practice site, automation test site, automation testing exam, automation testing practice website, qa automation test engineer, qa automation selenium interview questions, ui automation testing selenium, ui automation testing using selenium, automation web testing',
      'Interact with different types of inputs'
    );
  }
}
