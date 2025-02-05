import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file',
  imports: [PageheaderComponent, LearningPointComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './file.component.html',
})
export class FileComponent {
  ngOnInit(): void {}
  lp = [
    'How to download & upload files',
    'ChromeOption class',
    'SetFileDetector',
  ];
  link = '/video/File';
  fileName: string = '';

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.fileName = file.name; // Save file name
    }
  }
}
