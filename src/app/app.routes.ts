import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './main/test/test.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './pages/edit/edit.component';
import { TableComponent } from './pages/table/table.component';
import { AlertComponent } from './pages/alert/alert.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { DraggableComponent } from './pages/draggable/draggable.component';
import { DropableComponent } from './pages/dropable/dropable.component';
import { FormsComponent } from './pages/forms/forms.component';
import { SelectableComponent } from './pages/selectable/selectable.component';
import { ShadowComponent } from './pages/shadow/shadow.component';
import { SortableComponent } from './pages/sortable/sortable.component';
import { WaitsComponent } from './pages/waits/waits.component';
import { WindowComponent } from './pages/window/window.component';
import { DropdownComponent } from './pages/dropdown/dropdown.component';
import { RadioComponent } from './pages/radio/radio.component';
import { FrameComponent } from './pages/frame/frame.component';
import { AdvtableComponent } from './pages/advtable/advtable.component';
import { SliderComponent } from './pages/slider/slider.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FileComponent } from './pages/file/file.component';
import { TestPracticeComponent } from './grooming/test-practice/test-practice.component';
import { InterviewComponent } from './grooming/interview/interview.component';
import { HomeComponent } from './github/home/home.component';
import { FrameContentComponent } from './pages/frame/frame-content/frame-content.component';
import { InnerframeComponent } from './pages/frame/innerframe/innerframe.component';
import { ContactComponent } from './main/contact/contact.component';
import { OrtoniComponent } from './products/ortoni/ortoni.component';
import { LetxpathComponent } from './products/letxpath/letxpath.component';
import { PwrunnerComponent } from './products/pwrunner/pwrunner.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseMain } from './courses/main/coursemain.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'LetCode with Koushik',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letcode, letcode koushik, selenium, playwright',
    },
  },
  {
    path: 'product/ortoni-report',
    component: OrtoniComponent,
    data: {
      title: 'Ortoni Report for Playwright',
      description:
        'A visually appealing HTML report generator for Playwright tests.',
      keywords: 'ortoni report, playwright, playwright report',
    },
  },
  {
    path: 'product/letxpath',
    component: LetxpathComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'product/playwright-runner',
    component: PwrunnerComponent,
    data: {
      title: 'Playwright Runner - VS Code extension',
      description: 'Execute Playwright tests with one click',
      keywords: 'pw plugin, playwright koushik',
    },
  },
  {
    path: 'courses',
    component: CourseMain,
    data: {
      title: 'Courses | LetCode',
      description: 'Free courses offered by LetCode with Koushik',
      keywords:
        'free test automation course, best automation course, free playwright, selenium',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact | LetCode',
      description: "Check out Koushik's public information ",
      keywords: 'letcode with koushik, letcode koushik, koushik',
    },
  },
  {
    path: 'test',
    component: TestComponent,
    data: {
      title: 'Workspace | LetCode',
      description: 'Practice and learn test automation',
      keywords: 'selenium practice site',
    },
  },
  {
    path: 'table',
    component: TableComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'sortable',
    component: SortableComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'droppable',
    component: DropableComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'draggable',
    component: DraggableComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'alert',
    component: AlertComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'windows',
    component: WindowComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'dropdowns',
    component: DropdownComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'edit',
    component: EditComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },

  {
    path: 'radio',
    component: RadioComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'elements',
    component: HomeComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'frameUI',
    component: FrameContentComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'frame',
    component: FrameComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'selectable',
    component: SelectableComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'waits',
    component: WaitsComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'advancedtable',
    component: AdvtableComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'slider',
    component: SliderComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'forms',
    component: FormsComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },

  {
    path: 'file',
    component: FileComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'course/:id',
    component: CourseComponent,
    data: {
      title: 'LetCode - Course',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'video/:link',
    component: VideoDetailComponent,
    data: {
      title: 'Test automation learning',
      description: 'Testing Hub, a platform to learn',
      keywords: 'seleniu, playwright, protractor, api testing',
    },
  },
  {
    path: 'interview',
    component: InterviewComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'innerFrame',
    component: InnerframeComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'test-practice',
    component: TestPracticeComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
  {
    path: 'shadow',
    component: ShadowComponent,
    data: {
      title: 'LetXPath - Chrome extension',
      description: 'Testing Hub, a platform to learn',
      keywords: 'letxpath, chrome xpath plugin, chrome xpath',
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
