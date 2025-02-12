import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../service/courseservice.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { UpdateMetaTag } from '../../service/updateMeta';
import { YtComponent } from '../../main/yt/yt.component';

@Component({
  selector: 'app-course',
  imports: [CommonModule, SafeUrlPipe, YtComponent],
  templateUrl: './course.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseComponent implements OnInit {
  course: any;

  constructor(private courseService: CourseService) {}
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.course = this.courseService.getCourseById(courseId);
    }
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
