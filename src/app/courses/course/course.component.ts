import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../service/courseservice.service';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { UpdateMetaTag } from '../../service/updateMeta';
import { YtComponent } from '../../main/yt/yt.component';
import { MarkdownModule } from 'ngx-markdown';
import { NotFoundComponent } from '../../main/not-found/not-found.component';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';

@Component({
  standalone: true,
  selector: 'app-course',
  imports: [
    CommonModule,
    SafeUrlPipe,
    YtComponent,
    MarkdownModule,
    NotFoundComponent,
    AdsHorizontalComponent,
  ],
  templateUrl: './course.component.html',
  styleUrl: 'style.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CourseComponent implements OnInit {
  course: any;

  constructor(private courseService: CourseService, private router: Router) {}
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.course = this.courseService.getCourseById(courseId);
    } else {
      this.router.navigate(['/not-found']);
    }
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
