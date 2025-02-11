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
      id: 'javascript-test-automation',
    },
    {
      title: 'TypeScript',
      description:
        'Learn the basics of TypeScript, curated for test automation',
      id: 'typescript-test-automation',
    },
    {
      title: 'Selenium',
      description:
        'Learn the in-depth concetps of Selenium Webdrivwer with Java - Basic to advance concepts',
      id: 'selenium',
    },
    {
      title: 'Protractor',
      description:
        'The most adavanced course available in online for free (Protractor is deprecated)',
      id: 'protractor',
    },
    {
      title: 'Playwright - TypeScript',
      description:
        'Come and fall in love with Playwright - Typescript with depth knowledge',
      id: 'playwright-tyepescript',
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
      id: 'chrome-extension',
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

    {
      title: 'Automation Interview Preparation',
      description: 'Prepare for automation testing job interviews.',
      id: 'automation-interview',
    },
    {
      title: 'XPath Tutorial',
      description: 'Learn XPath techniques for test automation.',
      id: 'xpath-tutorial',
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Learn the fundamentals of RPA.',
      id: 'rpa',
    },
    {
      title: 'Selenium Cucumber',
      description: 'Behavior-driven testing using Selenium and Cucumber',
      id: 'cucumber-selenium',
    },
  ];
}
