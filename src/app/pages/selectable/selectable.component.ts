import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-selectable',
  imports: [CommonModule, PageheaderComponent, LearningPointComponent],
  templateUrl: './selectable.component.html',
  styleUrl: './style.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SelectableComponent {
  @ViewChild('container') container: ElementRef;
  name = 'Angular';
  items = [
    'Playwright',
    'Kurimurai',
    'Selenium',
    'Protractor',
    'Appium',
    'TestNg',
    'Postman',
    'Cypress',
    'Webdriver.io',
    'LetCode',
  ];
  selectable: any;

  learningPoint = ['Actions', 'Mouse Actions()', 'Keyboard Actions'];
  link = '/video/selectable';
  selection = new SelectionModel<string>(true); // Allows multiple selections

  toggleSelection(item: string) {
    this.selection.toggle(item);
  }

  isSelected(item: string): boolean {
    return this.selection.isSelected(item);
  }
}
