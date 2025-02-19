import {
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  selector: 'app-sortable',
  imports: [
    CommonModule,
    PageheaderComponent,
    LearningPointComponent,
    CdkDropList,
    DragDropModule,
    AdsVerticalComponent,
    AdsHorizontalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sortable.component.html',
  styleUrl: './style.css',
})
export class SortableComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Sortable - LetCode');
  }
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  lp = ['Actions', 'getLocation()', 'moveToElement()', 'moveByOffset()'];
  link = 'sortable';

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
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
