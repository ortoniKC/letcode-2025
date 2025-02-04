import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'letcode';
}
