import { Component, inject, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { AdsHorizontalComponent } from '../ads/ads-horizontal.component';

@Component({
  selector: 'app-test-site',
  templateUrl: './test.component.html',
  imports: [MenuComponent, CommonModule, AdsHorizontalComponent],
})
export class TestComponent {
  imagepath = `/assets/mainicons/`;

  menuItems = [
    {
      header: 'POM',
      title: 'Page Object Model',
      desc: 'Practice Page Object Model with fakestore',
      icon: this.imagepath + 'edit.svg',
      alt: 'product',
      link: '/home',
    },
    {
      header: 'Input',
      title: 'Edit',
      desc: 'Interact with different types of input fields',
      icon: this.imagepath + 'edit.svg',
      alt: 'edit',
      link: '/edit',
    },
    {
      header: 'Button',
      title: 'Click',
      desc: 'Interact with different types of buttons',
      icon: this.imagepath + 'buttons.svg',
      alt: 'button',
      link: '/button',
    },
    {
      header: 'Select',
      title: 'Drop-Down',
      desc: 'Interact with different types of drop-down',
      icon: this.imagepath + 'select.svg',
      alt: 'select',
      link: '/dropdowns',
    },
    {
      header: 'Alert',
      title: 'Dialog',
      desc: 'Interact with different types of dialog boxes',
      icon: this.imagepath + 'alert.svg',
      alt: 'alert',
      link: '/alert',
    },
    {
      header: 'Frame',
      title: 'Inner HTML',
      desc: 'Interact with different types of frames/iframes',
      icon: this.imagepath + 'frame.svg',
      alt: 'frame',
      link: '/frame',
    },
    {
      header: 'Radio',
      title: 'Toggle',
      desc: 'Interact with different types of radio & check boxes',
      icon: this.imagepath + 'radio.svg',
      alt: 'radio',
      link: '/radio',
    },
    {
      header: 'Window',
      title: 'Tabs',
      desc: 'Switch different types of tabs or windows',
      icon: this.imagepath + 'window.svg',
      alt: 'alert',
      link: '/window',
    },
    {
      header: 'Elements',
      title: 'Find Elements',
      desc: 'Play with element and smash them',
      icon: this.imagepath + 'elements.svg',
      alt: 'elements',
      link: '/elements',
    },
    {
      header: 'Drag',
      title: 'AUI - 1',
      desc: 'Drag me here and there',
      icon: this.imagepath + 'drag.svg',
      alt: 'drag',
      link: '/draggable',
    },
    {
      header: 'Drop',
      title: 'AUI - 2',
      desc: 'Feel free to bounce me',
      icon: this.imagepath + 'falling.svg',
      alt: 'alert',
      link: '/droppable',
    },
    {
      header: 'Sort',
      title: 'AUI - 3',
      desc: 'Sort out the problem quickly',
      icon: this.imagepath + 'filter.svg',
      alt: 'sort',
      link: '/sortable',
    },
    {
      header: 'Multi-Select',
      title: 'AUI - 4',
      desc: 'Be a multi-tasker',
      icon: this.imagepath + 'selectable.svg',
      alt: 'selectable',
      link: '/selectable',
    },
    {
      header: 'Slider',
      title: 'AUI - 5',
      desc: 'Hmm.. Can you slide me?',
      icon: this.imagepath + 'slider.svg',
      alt: 'slider',
      link: '/slider',
    },
    {
      header: 'Waits',
      title: 'Timeout',
      desc: "It's ok to wait but you know..",
      icon: this.imagepath + 'waits.svg',
      alt: 'waits',
      link: '/waits',
    },
    {
      header: 'Table',
      title: 'Simple table',
      desc: "It's all about rows & columns",
      icon: this.imagepath + 'simtable.svg',
      alt: 'table',
      link: '/table',
    },
    {
      header: 'Table',
      title: 'Advance table',
      desc: "It's little complicated but give a try",
      icon: this.imagepath + 'advtable.svg',
      alt: 'table2',
      link: '/advancedtable',
    },
    {
      header: 'Calendar',
      title: 'Date & Time',
      desc: 'My time is precious & your?',
      icon: this.imagepath + 'calendar.svg',
      alt: 'calendar',
      link: '/calendar',
    },

    {
      header: 'Forms',
      title: 'All in One',
      desc: 'Interact with everything',
      icon: this.imagepath + 'sign-form.svg',
      alt: 'forms',
      link: '/forms',
    },
    {
      header: 'File',
      title: 'File management',
      desc: 'All your data is secured!',
      icon: this.imagepath + 'download.svg',
      alt: 'file',
      link: '/file',
    },
    {
      header: 'Shadow',
      title: 'DOM',
      desc: 'Shadow never leaves us alone',
      icon: this.imagepath + 'mario.svg',
      alt: 'shadow',
      link: '/shadow',
    },
    // {
    //   header: 'Snake Game',
    //   title: 'Play it!',
    //   desc: 'Play it just for fun',
    //   icon: this.imagepath + 'mario.svg',
    //   alt: 'game',
    //   link: '/game',
    // },
  ];
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
