import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draggable',
  imports: [
    CommonModule,
    PageheaderComponent,
    LearningPointComponent,
    DragDropModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['style.css'],
  templateUrl: './draggable.component.html',
})
export class DraggableComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Draggable - LetCode');
  }
  lp = ['Actions', 'dragAndDropBy()', 'perform()'];
  link = '/video/draggable';
}
