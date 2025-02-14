import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { JokeService } from '../service/jokes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { YtComponent } from './yt/yt.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [CommonModule, RouterModule],
  styleUrl: 'style.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainComponent implements OnInit {
  constructor(private jokes: JokeService) {}

  joke: any = 'You are my heart’s greatest joy. Wishing you a Valentine’s Day as wonderful as you!'
  ngOnInit(): void {
    /*this.jokes.getJoke().subscribe(
      (joke) => {
        this.joke = joke;
      },
      (err) => {
        this.joke = undefined;
      }
    );*/
  }

  header =
    'Insights on software testing videos like Selenium, Protractor, Playwright, Cypress & WebDriver IO';
}
