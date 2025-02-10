import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterModule],
  templateUrl: './coursemain.component.html',
})
export class CourseMain {
  courses = [
    {
      title: 'Java Basic',
      description: 'Learn the basics of Core Java, curated for test automation',
      id: 'java',
    },
    {
      title: 'JavaScript',
      description:
        'Learn the basics of JavaScript, curated for test automation',
      id: '',
    },
    {
      title: 'TypeScript',
      description:
        'Learn the basics of TypeScript, curated for test automation',
      id: '',
    },
    {
      title: 'Selenium',
      description:
        'Learn the in-depth concetps of Selenium Webdrivwer with Java - Basic to advance concepts',
      id: '',
    },
    {
      title: 'Protractor',
      description:
        'The most adavanced course available in online for free (Protractor is deprecated)',
      id: '',
    },
    {
      title: 'Playwright - TypeScript',
      description:
        'Come and fall in love with Playwright - Typescript with depth knowledge',
      id: '',
    },
    {
      title: 'Playwright - Java',
      description:
        'Learn the basics of Playwright with Java, concepts are explained with simple terms',
      id: 'playwright-java',
    },
    {
      title: 'Chrome extension development',
      description: 'Learn how to build chrome extension with hands-on project',
      id: '',
    },
    {
      title: 'Develop NPM package',
      description: 'Learning based on real-time projects, build Ortoni Report',
      id: 'npm-package',
    },
    {
      title: 'Appetize',
      description: 'Native mobile app testing using Playwright Typescript',
      id: 'appetize',
    },
    {
      title: 'API testing',
      description: 'Learn API testing in and out with Postman and automation ',
      id: 'api-testing',
    },
    {
      title: 'Playwright Cucumber',
      description:
        'Utilize the BDD tool Cucumber, the easiest way of integration',
      id: 'playwright-cucumber',
    },
  ];
}
