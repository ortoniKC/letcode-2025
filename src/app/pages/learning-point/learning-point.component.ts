import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-learning-point',
  imports: [CommonModule, RouterModule],
  templateUrl: './learning-point.component.html',
  styleUrl: 'style.css',
})
export class LearningPointComponent {
  @Input() list = [''];
  @Input() link = '';
}
