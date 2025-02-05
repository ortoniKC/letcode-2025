import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { PageheaderComponent } from '../pageheader/pageheader.component';

@Component({
  selector: 'app-dropable',
  imports: [
    CommonModule,
    PageheaderComponent,
    LearningPointComponent,
    CommonModule,
    DragDropModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['style.css'],
  templateUrl: './dropable.component.html',
})
export class DropableComponent {
  lp = ['Actions', 'dragAndDrop()', 'perform()'];
  link = '/video/droppable';
  sourceList = ['Drag me to my target'];
  targetList: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
