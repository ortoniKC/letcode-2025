import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { JokeService } from '../service/jokes.service';
import { UpdateTag } from '../metaTags';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [CommonModule, RouterModule],
})
export class MainComponent implements OnInit {
  constructor(
    private jokes: JokeService,
    private title: Title,
    private meta: Meta
  ) {}

  joke: any;
  // show: boolean = false;
  ngOnInit(): void {
    this.jokes.getJoke().subscribe(
      (joke) => {
        this.joke = joke;
      },
      (err) => {
        console.log('KOUSHIK: ' + err);
        this.joke = undefined;
      }
    );
    const tags = new UpdateTag(this.title, this.meta);
    tags.updateTags(
      'LetCode with Koushik',
      'letcode, letcode koushik, selenium,protractor, testing, practice site, automation practice site',
      'Self Learning - Automation Testing Platform'
    );
    // this.show = !this.show;
  }
  // onclick() {
  // const ele = document.getElementById("riddle");
  // ele.classList.add("is-hidden")
  // }
  header =
    'Insights on software testing videos like Selenium, Protractor, Playwright, Cypress & WebDriver IO';
}
