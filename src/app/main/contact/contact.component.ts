import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  person = {
    name: 'Koushik Chatterjee',
    email: 'koushik350@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ortoni/',
    github: 'https://github.com/ortonikc',
    youtube: 'https://www.youtube.com/@letcode',
    kurimurai: 'https://www.youtube.com/@kurimurai',
    coffee: 'https://buymeacoffee.com/letcode',
    workExperience: [
      {
        title: 'Senior Software Test Automation Engineer - Epam Systems',
        period: 'At present',
      },
      {
        title: 'Senior Software Analyst - TVS Next',
        period: 'Jul 2023 - Nov 2024',
      },
      {
        title: 'Software Test Engineer - Allegion',
        period: 'May 2021 - Jul 2022',
      },
      {
        title: 'Quality Assurance Engineer - Allegion',
        period: 'Jan 2020 - Apr 2021',
      },
      {
        title: 'SDET - TestLeaf Software Solutions Private Limited',
        period: 'Dec 2017 - Jan 2020',
      },
    ],
    products: [
      {
        name: 'Ortoni Report',
        link: 'https://www.npmjs.com/package/ortoni-report',
        description:
          'A comprehensive and visually appealing HTML report generator tailored for Playwright tests. Designed with powerful features and customizable options, Ortoni Report simplifies the process of reviewing and managing test results, making test reporting more intuitive and accessible.',
      },
      {
        name: 'LetXPath',
        link: 'https://chromewebstore.google.com/detail/letxpath/bekehlnepmijedippfibbmbglglbmlgk',
        description:
          'LetXPath is an open-source project designed to help you find XPath and CSS selectors with a single click, complete with code snippets tailored to the element type. Your Ultimate XPath & CSS Selector Finder',
      },
      {
        name: 'Playwright Runner',
        link: 'https://marketplace.visualstudio.com/items?itemName=ortoni.ortoni',
        description:
          'The Playwright Runner by Koushik VS Code extension simplifies the process of running Playwright tests directly from your editor. With this extension, you can easily execute Playwright tests & Cucumber tests, manage different test environments, and streamline your testing workflow without leaving VS Code.',
      },
    ],
  };
}
