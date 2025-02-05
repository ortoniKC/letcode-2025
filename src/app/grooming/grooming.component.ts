import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PageheaderComponent } from '../pages/pageheader/pageheader.component';
import {
  SafeResourceUrl,
  DomSanitizer,
  Title,
  Meta,
} from '@angular/platform-browser';
import { UpdateTag } from '../metaTags';

@Component({
  selector: 'app-grooming',
  templateUrl: './grooming.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GroomingComponent {}
