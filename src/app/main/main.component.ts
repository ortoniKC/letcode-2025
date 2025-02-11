import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { JokeService } from '../service/jokes.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainComponent implements OnInit {
  constructor(private jokes: JokeService) {}

  joke: any;
  ngOnInit(): void {
    this.jokes.getJoke().subscribe(
      (joke) => {
        this.joke = joke;
      },
      (err) => {
        this.joke = undefined;
      }
    );
  }

  header =
    'Insights on software testing videos like Selenium, Protractor, Playwright, Cypress & WebDriver IO';
}
