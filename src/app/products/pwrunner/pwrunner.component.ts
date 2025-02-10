import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pwrunner',
  imports: [CommonModule],
  templateUrl: './pwrunner.component.html',
})
export class PwrunnerComponent {
  code = `"ENV_NAME": "TEST_ENV=stagingNational \${--config=play.config.ts --headed}"`;
}
