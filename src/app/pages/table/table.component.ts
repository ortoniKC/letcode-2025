import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { LearningPointComponent } from '../learning-point/learning-point.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';
import { SelectableComponent } from '../selectable/selectable.component';
import { AdsHorizontalComponent } from '../../main/ads/ads-horizontal.component';
import { AdsVerticalComponent } from '../../main/ads-vertical/ads-vertical.component';
export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
  Cholesterol: number;
}
@Component({
  selector: 'app-table',
  imports: [
    CommonModule,
    PageheaderComponent,
    LearningPointComponent,
    MatSortModule,
    MatTableModule,
    AdsHorizontalComponent,
    AdsVerticalComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './table.component.html',
})
export class TableComponent {
  lp = [
    'Web Table concept',
    'WebElement Interface',
    'Chaining of locators',
    'Comparable (Java)',
  ];
  link = 'table';

  desserts: Dessert[] = [
    {
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4,
      Cholesterol: 70,
    },
    {
      name: 'Ice cream',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4,
      Cholesterol: 40,
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16,
      carbs: 24,
      protein: 6,
      Cholesterol: 80,
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 4,
      carbs: 67,
      protein: 4,
      Cholesterol: 50,
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16,
      carbs: 49,
      protein: 4,
      Cholesterol: 60,
    },
  ];

  sortedData: Dessert[];

  constructor() {
    this.sortedData = this.desserts.slice();
  }
  sortData(sort: any) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        case 'Cholesterol':
          return compare(a.Cholesterol, b.Cholesterol, isAsc);
        default:
          return 0;
      }
    });
  }
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
