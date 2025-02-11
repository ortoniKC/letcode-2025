import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-video-detail',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './video-detail.component.html',
})
export class VideoDetailComponent {
  link: string | null = '';
  selectedVideo: any = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.link = params.get('link');
      if (this.link && this.videos[this.link]) {
        this.selectedVideo = this.videos[this.link];
      }
    });
  }
  data = 'https://www.youtube.com/embed/';
  videos: any = {
    edit: {
      selenium: this.data + 'ZT-IeKZiy5s',
      protractors: this.data + '4Xd9shK8iOc',
      playwright: this.data + 'Slv5fuTrIZg',
      title: 'Interact with Inputs',
    },
    button: {
      selenium: this.data + 'ovImXEsKz1M',
      protractors: this.data + 'u3M6Ofm839c',
      playwright: null,
      title: 'Interact with Button',
    },
    dropdowns: {
      selenium: this.data + 'AePUqXdnJUo',
      protractors: this.data + '_AIX58lGuFs',
      playwright: this.data + 'IubdSQFOdiU',
      title: 'Interact with Drop-Downs',
    },
    alert: {
      selenium: this.data + 'KOiSz_50rIU',
      protractors: this.data + 'VztGNaaBSh4',
      playwright: this.data + 'RzBlwacFIl0',
      title: 'Interact with Alerts',
    },
    frames: {
      selenium: this.data + 'TPolii6kKWo',
      protractors: this.data + 'rr7VMTizgGs',
      playwright: this.data + 'Vqm-8G81W8w',
      title: 'Interact with Frames',
    },
    radio: {
      selenium: null,
      protractors: this.data + '1Ej2Bx8V7mQ',
      playwright: this.data + '340d_Kkl9Eg',
      title: 'Interact with radioButton',
    },
    window: {
      selenium: this.data + 'YmqHlHpP3Xo',
      protractors: this.data + 'N1nYNky7zwk',
      playwright: this.data + 'DyHQ3G442jY',
      title: 'Interact with Windows',
    },
    elements: {
      selenium: this.data + 'AzCzzPWfrl0',
      protractors: this.data + 'DND7KaQS2To',
      playwright: this.data + '54OwsiRa_eE',
      title: 'Interact with Elements',
    },
    draggable: {
      selenium: this.data + 'DnXlb8Toz8Q',
      protractors: this.data + '03xNi6HIbx8',
      playwright: null,
      title: 'Interact with Drag And Drop By',
    },
    droppable: {
      selenium: this.data + '0YPbAlPHj9I',
      protractors: this.data + 'FavXQLVy4w4',
      playwright: this.data + '0wFkhkdcT8A',
      title: 'Interact with Drag And Drop',
    },
    sortable: {
      selenium: null,
      protractors: this.data + 'wzMy1uGN9Dg',
      playwright: null,
      title: 'Interact with Sortable',
    },
    selectable: {
      selenium: null,
      protractors: this.data + 'Kcc9_t-BL2s',
      playwright: null,
      title: 'Interact with Selectable',
    },
    webTable: {
      selenium: this.data + 'A8DLNSWJdbU',
      protractors: this.data + 'qjBEc6FIKoY',
      playwright: null,
      title: 'Interact with WebTable',
    },
    advancetable: {
      selenium: null,
      protractors: this.data + '46Fn5g_C1d8',
      playwright: null,
      title: 'Interact with AdvancedTable',
    },
    calender: {
      selenium: null,
      protractors: this.data + 'WABPZ29p5Hw',
      playwright: null,
      title: 'Interact with Calender',
    },
    waits: {
      selenium: null,
      protractors: this.data + 'BV6SRxDSr3Q',
      playwright: null,
      title: 'Interact with Waits',
    },
    forms: {
      selenium: null,
      protractors: null,
      playwright: null,
      title: 'Interact with Forms',
    },
    file: {
      selenium: this.data + 'Xg0DVe61kbY',
      protractors: null,
      playwright: this.data + 'e8jfjV71E6Q',
      title: 'Interact with FileUploads',
    },
    shadow: {
      selenium: this.data + 'lj9A73okFb8',
      protractors: null,
      playwright: this.data + '4v8iPJH8_hg',
      title: 'Interact with ShadowElements',
    },
    slider: {
      title: 'Interact with Slider',
      playwright: this.data + 'OKsPOxNYQWI',
    },
  };
}
