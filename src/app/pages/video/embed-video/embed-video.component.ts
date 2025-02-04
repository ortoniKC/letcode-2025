import { CommonModule } from '@angular/common';
import { Component, OnInit, Sanitizer } from '@angular/core';
import {
  DomSanitizer,
  Meta,
  SafeResourceUrl,
  Title,
} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SybComponent } from '../syb/syb.component';
import { PageheaderComponent } from '../../pageheader/pageheader.component';

@Component({
  selector: 'app-embed-video',
  imports: [CommonModule, SybComponent, PageheaderComponent],
  templateUrl: './embed-video.component.html',
})
export class EmbedVideoComponent implements OnInit {
  safeurlSel!: SafeResourceUrl;
  safeurlPro!: SafeResourceUrl;
  safeurlPl!: SafeResourceUrl;
  title!: string;
  routesub!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private pageTitle: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.pageTitle.setTitle('LetCode - Every problem has a solution');
    this.routesub = this.route.params.subscribe((params) => {
      if (this.VideosList[params['name']].sel != null)
        this.safeurlSel = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.VideosList[params['name']].sel
        );
      if (this.VideosList[params['name']].pro != null)
        this.safeurlPro = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.VideosList[params['name']].pro
        );
      if (this.VideosList[params['name']].pl != null) {
        this.safeurlPl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.VideosList[params['name']].pl
        );
      }
      this.title = this.VideosList[params['name']].title;
      this.meta.addTags([
        {
          name: 'keywords',
          content:
            'selenium tutorial, protractor tutorial, playwright tutorial, cypress tutorial',
        },
        { name: 'description', content: 'Automation test practice' },
        { name: 'robots', content: 'index, follow' },
      ]);
    });
  }
  ngOnDestroy(): void {
    this.routesub.unsubscribe();
  }
  data = 'https://www.youtube.com/embed/';
  VideosList: any = {
    edit: {
      sel: this.data + 'ZT-IeKZiy5s',
      pro: this.data + '4Xd9shK8iOc',
      pl: this.data + 'Slv5fuTrIZg',
      title: 'Interact with Inputs',
    },
    button: {
      sel: this.data + 'ovImXEsKz1M',
      pro: this.data + 'u3M6Ofm839c',
      pl: null,
      title: 'Interact with Button',
    },
    dropdowns: {
      sel: this.data + 'AePUqXdnJUo',
      pro: this.data + '_AIX58lGuFs',
      pl: this.data + 'IubdSQFOdiU',
      title: 'Interact with Drop-Downs',
    },
    alert: {
      sel: this.data + 'KOiSz_50rIU',
      pro: this.data + 'VztGNaaBSh4',
      pl: this.data + 'RzBlwacFIl0',
      title: 'Interact with Alerts',
    },
    frames: {
      sel: this.data + 'TPolii6kKWo',
      pro: this.data + 'rr7VMTizgGs',
      pl: this.data + 'Vqm-8G81W8w',
      title: 'Interact with Frames',
    },
    radio: {
      sel: null,
      pro: this.data + '1Ej2Bx8V7mQ',
      pl: this.data + '340d_Kkl9Eg',
      title: 'Interact with radioButton',
    },
    window: {
      sel: this.data + 'YmqHlHpP3Xo',
      pro: this.data + 'N1nYNky7zwk',
      pl: this.data + 'DyHQ3G442jY',
      title: 'Interact with Windows',
    },
    elements: {
      sel: this.data + 'AzCzzPWfrl0',
      pro: this.data + 'DND7KaQS2To',
      pl: this.data + '54OwsiRa_eE',
      title: 'Interact with Elements',
    },
    draggable: {
      sel: this.data + 'DnXlb8Toz8Q',
      pro: this.data + '03xNi6HIbx8',
      pl: null,
      title: 'Interact with Drag And Drop By',
    },
    droppable: {
      sel: this.data + '0YPbAlPHj9I',
      pro: this.data + 'FavXQLVy4w4',
      pl: this.data + '0wFkhkdcT8A',
      title: 'Interact with Drag And Drop',
    },
    sortable: {
      sel: null,
      pro: this.data + 'wzMy1uGN9Dg',
      pl: null,
      title: 'Interact with Sortable',
    },
    selectable: {
      sel: null,
      pro: this.data + 'Kcc9_t-BL2s',
      pl: null,
      title: 'Interact with Selectable',
    },
    webTable: {
      sel: this.data + 'A8DLNSWJdbU',
      pro: this.data + 'qjBEc6FIKoY',
      pl: null,
      title: 'Interact with WebTable',
    },
    AdvancedTable: {
      sel: null,
      pro: this.data + '46Fn5g_C1d8',
      pl: null,
      title: 'Interact with AdvancedTable',
    },
    Calender: {
      sel: null,
      pro: this.data + 'WABPZ29p5Hw',
      pl: null,
      title: 'Interact with Calender',
    },
    Waits: {
      sel: null,
      pro: this.data + 'BV6SRxDSr3Q',
      pl: null,
      title: 'Interact with Waits',
    },
    Forms: {
      sel: null,
      pro: null,
      pl: null,
      title: 'Interact with Forms',
    },
    File: {
      sel: null,
      pro: null,
      pl: this.data + 'e8jfjV71E6Q',
      title: 'Interact with FileUploads',
    },
    Shadow: {
      sel: null,
      pro: null,
      pl: this.data + '4v8iPJH8_hg',
      title: 'Interact with ShadowElements',
    },
  };
}
