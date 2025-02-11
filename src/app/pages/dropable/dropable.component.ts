import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

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
  link = 'droppable';
  sourceList = ['Drag me to my target'];
  targetList: string[] = [];
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
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
