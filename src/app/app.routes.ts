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
import { FrameContentComponent } from './pages/frame/frame-content/frame-content.component';
import { InnerframeComponent } from './pages/frame/innerframe/innerframe.component';
import { ContactComponent } from './main/contact/contact.component';
import { OrtoniComponent } from './products/ortoni/ortoni.component';
import { LetxpathComponent } from './products/letxpath/letxpath.component';
import { PwrunnerComponent } from './products/pwrunner/pwrunner.component';
import { CourseComponent } from './courses/course/course.component';
import { VideoDetailComponent } from './pages/video-detail/video-detail.component';
import { CourseMain } from './courses/coursemain/coursemain.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { HomeComponent } from './fakestore/home/home.component';
import { ProductListComponent } from './fakestore/productlist/product-list.component';
import { CartComponent } from './fakestore/cart/cart.component';
import { LoginComponent } from './fakestore/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: 'LetCode with Koushik',
      description: 'Testing Hub, a platform to learn',
      keywords: 'LetCode, LetCode koushik, selenium, playwright',
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
      title: 'Courses | LetCode with Koushik',
      description: 'Free courses offered by LetCode with Koushik',
      keywords:
        'free test automation course, best automation course, free playwright, selenium',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact | LetCode with Koushik',
      description: "Check out Koushik's public information ",
      keywords: 'LetCode with koushik, LetCode koushik, koushik',
    },
  },
  {
    path: 'test',
    component: TestComponent,
    data: {
      title: 'Workspace | LetCode with Koushik',
      description: 'Practice and learn test automation',
      keywords: 'test automation, selenium practice site',
    },
  },
  {
    path: 'table',
    component: TableComponent,
    data: {
      title: 'WebTable | LetCode with Koushik',
      description: 'Practice the web table concept',
      keywords:
        'selenium web table, playwright web table, protractor web table',
    },
  },
  {
    path: 'sortable',
    component: SortableComponent,
    data: {
      title: 'Sortable | LetCode with Koushik',
      description: 'Practice the sortable table concept',
      keywords:
        'selenium sortable table, playwright sortable table, protractor sortable table',
    },
  },

  {
    path: 'droppable',
    component: DropableComponent,
    data: {
      title: 'Droppable | LetCode with Koushik',
      description: 'Practice the droppable interaction concept',
      keywords:
        'selenium droppable, playwright droppable, protractor droppable',
    },
  },
  {
    path: 'draggable',
    component: DraggableComponent,
    data: {
      title: 'Draggable | LetCode with Koushik',
      description: 'Practice the draggable interaction concept',
      keywords:
        'selenium draggable, playwright draggable, protractor draggable',
    },
  },
  {
    path: 'button',
    component: ButtonsComponent,
    data: {
      title: 'Buttons | LetCode with Koushik',
      description: 'Practice button interactions and events',
      keywords:
        'selenium button click, playwright button click, protractor button click',
    },
  },
  {
    path: 'alert',
    component: AlertComponent,
    data: {
      title: 'Alert | LetCode with Koushik',
      description: 'Practice handling alert pop-ups',
      keywords:
        'selenium alert handling, playwright alert handling, protractor alert handling',
    },
  },
  {
    path: 'window',
    component: WindowComponent,
    data: {
      title: 'Windows | LetCode with Koushik',
      description: 'Practice handling multiple windows and tabs',
      keywords:
        'selenium window handling, playwright window handling, protractor window handling',
    },
  },
  {
    path: 'dropdowns',
    component: DropdownComponent,
    data: {
      title: 'Dropdowns | LetCode with Koushik',
      description: 'Practice working with dropdown selections',
      keywords:
        'selenium dropdown select, playwright dropdown select, protractor dropdown select',
    },
  },
  {
    path: 'edit',
    component: EditComponent,
    data: {
      title: 'Edit Fields | LetCode with Koushik',
      description: 'Practice interacting with input fields',
      keywords:
        'selenium input field, playwright input field, protractor input field',
    },
  },
  {
    path: 'radio',
    component: RadioComponent,
    data: {
      title: 'Radio Buttons | LetCode with Koushik',
      description: 'Practice selecting radio buttons',
      keywords:
        'selenium radio button, playwright radio button, protractor radio button',
    },
  },

  {
    path: 'elements',
    component: HomeComponent,
    data: {
      title: 'Elements | LetCode with Koushik',
      description: 'Practice working with different web elements',
      keywords:
        'selenium web elements, playwright web elements, protractor web elements',
    },
  },
  {
    path: 'frameUI',
    component: FrameContentComponent,
    data: {
      title: 'Frame UI | LetCode with Koushik',
      description: 'Practice handling frames and embedded content',
      keywords: 'selenium frames, playwright frames, protractor frames',
    },
  },
  {
    path: 'frame',
    component: FrameComponent,
    data: {
      title: 'Frame | LetCode with Koushik',
      description: 'Practice switching between frames',
      keywords:
        'selenium frame switching, playwright frame switching, protractor frame switching',
    },
  },
  {
    path: 'selectable',
    component: SelectableComponent,
    data: {
      title: 'Selectable | LetCode with Koushik',
      description:
        'Practice selecting and interacting with selectable elements',
      keywords:
        'selenium selectable elements, playwright selectable elements, protractor selectable elements',
    },
  },
  {
    path: 'waits',
    component: WaitsComponent,
    data: {
      title: 'Waits | LetCode with Koushik',
      description: 'Practice handling waits and synchronization',
      keywords: 'selenium waits, playwright waits, protractor waits',
    },
  },

  {
    path: 'advancedtable',
    component: AdvtableComponent,
    data: {
      title: 'Advanced Table | LetCode with Koushik',
      description: 'Practice working with advanced web tables',
      keywords:
        'selenium advanced table, playwright advanced table, protractor advanced table',
    },
  },
  {
    path: 'slider',
    component: SliderComponent,
    data: {
      title: 'Slider | LetCode with Koushik',
      description: 'Practice interacting with sliders',
      keywords: 'selenium slider, playwright slider, protractor slider',
    },
  },
  {
    path: 'forms',
    component: FormsComponent,
    data: {
      title: 'Forms | LetCode with Koushik',
      description: 'Practice filling out and validating forms',
      keywords:
        'selenium form automation, playwright form automation, protractor form automation',
    },
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: {
      title: 'Calendar | LetCode with Koushik',
      description: 'Practice working with date pickers and calendars',
      keywords:
        'selenium calendar handling, playwright calendar handling, protractor calendar handling',
    },
  },
  {
    path: 'file',
    component: FileComponent,
    data: {
      title: 'File Upload | LetCode with Koushik',
      description: 'Practice handling file uploads and downloads',
      keywords:
        'selenium file upload, playwright file upload, protractor file upload',
    },
  },
  {
    path: 'course/:id',
    component: CourseComponent,
    data: {
      title: 'Course | LetCode with Koushik',
      description: 'Explore detailed course content',
      keywords: 'LetCode course, automation learning, testing tutorials',
    },
  },
  {
    path: 'video/:link',
    component: VideoDetailComponent,
    data: {
      title: 'Test Automation Learning | LetCode with Koushik',
      description: 'Watch videos on test automation concepts',
      keywords:
        'selenium tutorial, playwright tutorial, protractor tutorial, API testing',
    },
  },
  {
    path: 'interview',
    component: InterviewComponent,
    data: {
      title: 'Interview Questions | LetCode with Koushik',
      description: 'Practice common automation testing interview questions',
      keywords:
        'selenium interview questions, playwright interview questions, protractor interview questions',
    },
  },
  {
    path: 'innerFrame',
    component: InnerframeComponent,
    data: {
      title: 'Inner Frame | LetCode with Koushik',
      description: 'Practice handling nested frames',
      keywords:
        'selenium nested frames, playwright nested frames, protractor nested frames',
    },
  },
  {
    path: 'test-practice',
    component: TestPracticeComponent,
    data: {
      title: 'Test Practice | LetCode with Koushik',
      description: 'Practice real-world test automation scenarios',
      keywords:
        'selenium practice tests, playwright practice tests, protractor practice tests',
    },
  },
  {
    path: 'shadow',
    component: ShadowComponent,
    data: {
      title: 'Shadow DOM | LetCode with Koushik',
      description: 'Practice handling shadow DOM elements',
      keywords:
        'selenium shadow DOM, playwright shadow DOM, protractor shadow DOM',
    },
  },
  { path: 'home', component: HomeComponent,
    data: {
      title: 'Fake Store | LetCode with Koushik',
      description: 'Practice Page Object Model with Fake Store',
      keywords:
        'selenium page object model, playwright page object model, protractor page object model',
    },
   },
  {
    path: 'product/:id',
    component: ProductListComponent,
    data: {
      title: 'Product - Fake Store | LetCode with Koushik',
      description: 'Check out the product details',
      keywords:
        'selenium tutorial, playwright tutorial, protractor tutorial, API testing',
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: {
      title: 'Cart - Fake Store | LetCode with Koushik',
      description: 'Check out the cart items',
      keywords:
        'selenium tutorial, playwright tutorial, protractor tutorial, API testing',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login - Fake Store | LetCode with Koushik',
      description: 'Login to Fake Store',
      keywords:
        'selenium tutorial, playwright tutorial, protractor tutorial, API testing',
    },
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];
