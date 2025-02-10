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
import { TestPracticeComponent } from './grooming/test-practice/test-practice.component';
import { InterviewComponent } from './grooming/interview/interview.component';
import { HomeComponent } from './github/home/home.component';
import { FrameContentComponent } from './pages/frame/frame-content/frame-content.component';
import { InnerframeComponent } from './pages/frame/innerframe/innerframe.component';
import { ContactComponent } from './main/contact/contact.component';
import { OrtoniComponent } from './products/ortoni/ortoni.component';
import { LetxpathComponent } from './products/letxpath/letxpath.component';
import { PwrunnerComponent } from './products/pwrunner/pwrunner.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'product/ortoni-report',
    component: OrtoniComponent,
  },
  {
    path: 'product/letxpath',
    component: LetxpathComponent,
  },
  {
    path: 'product/playwright-runner',
    component: PwrunnerComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
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
    path: 'droppable',
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
    component: HomeComponent,
  },
  {
    path: 'frameUI',
    component: FrameContentComponent,
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
  {
    path: 'interview',
    component: InterviewComponent,
  },
  {
    path: 'innerFrame',
    component: InnerframeComponent,
  },
  {
    path: 'test-practice',
    component: TestPracticeComponent,
  },
  {
    path: 'shadow',
    component: ShadowComponent,
  },
];
