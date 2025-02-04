import { Routes } from '@angular/router';
import { TestComponent } from './main/test/test.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './pages/edit/edit.component';
import { EmbedVideoComponent } from './pages/video/embed-video/embed-video.component';
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
import { ElementsComponent } from './pages/elements/elements.component';
import { FrameComponent } from './pages/frame/frame.component';
import { AdvtableComponent } from './pages/advtable/advtable.component';
import { SliderComponent } from './pages/slider/slider.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FileComponent } from './pages/file/file.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
  {
    path: 'sortable',
    component: SortableComponent,
  },
  {
    path: 'dropable',
    component: DropableComponent,
  },
  {
    path: 'draggable',
    component: DraggableComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'alert',
    component: AlertComponent,
  },
  {
    path: 'windows',
    component: WindowComponent,
  },
  {
    path: 'dropdowns',
    component: DropdownComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },

  {
    path: 'radio',
    component: RadioComponent,
  },
  {
    path: 'elements',
    component: ElementsComponent,
  },
  {
    path: 'frameUI',
    component: FrameComponent,
  },
  {
    path: 'frame',
    component: FrameComponent,
  },
  {
    path: 'selectable',
    component: SelectableComponent,
  },
  {
    path: 'waits',
    component: WaitsComponent,
  },
  {
    path: 'advancedtable',
    component: AdvtableComponent,
  },
  {
    path: 'slider',
    component: SliderComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },

  {
    path: 'file',
    component: FileComponent,
  },
  {
    path: 'video/:name',
    component: EmbedVideoComponent,
  },
  // {
  //   path: 'interview',
  //   component: InterviewComponent,
  // },
  // {
  //   path: 'innerFrame',
  //   component: InnerframeComponent,
  // },
  // {
  //   path: 'playwright',
  //   component: PlaywrightComponent,
  // },
  // {
  //   path: 'test-practice',
  //   component: PracticeComponent,
  // },
  // {
  //   path: 'about',
  //   component: AboutComponent,
  // },
  // {
  //   path: 'selenium',
  //   component: SeleniumfcComponent,
  // },
  // {
  //   path: 'selenium-tamil',
  //   component: SeleniumtamilComponent,
  // },
  // {
  //   path: 'protractor',
  //   component: ProtractorcourseComponent,
  // },
  // {
  //   path: 'shadow',
  //   component: ShadowComponent,
  // },
  // {
  //   path: 'courses',
  //   component: CoursesComponent,
  // },
  {
    path: '',
    component: MainComponent,
  },
  // {
  //   path: 'chromeextension',
  //   component: ChromeextComponent,
  // },
  // {
  //   path: 'flutter',
  //   component: FlutterComponent,
  // },
  // {
  //   path: 'cucumber',
  //   component: CucumberComponent,
  // },
  // {
  //   path: 'cucumbervideos',
  //   component: CucumbervideosComponent,
  // },
  // {
  //   path: '**',
  //   component: PagenotfoundComponent,
  // },
];
