import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: 'style.css',
})
export class MenuComponent implements OnInit {
  @Input() title: string = '';
  @Input() header: string = '';
  @Input() desc: string = '';
  @Input() icon: string = '';
  @Input() alt: string = '';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
