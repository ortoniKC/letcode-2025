import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../courseservice.service';
import { SafeUrlPipe } from '../safe-url.pipe';

@Component({
  selector: 'app-course',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.course = this.courseService.getCourseById(courseId);
    }
  }
}
