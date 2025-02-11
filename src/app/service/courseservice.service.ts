import { Injectable } from '@angular/core';
interface Course {
  id: string;
  title: string;
  shortDescription: string;
  englishPlaylist: string;
  tamilPlaylist?: string;
}
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = [
    {
      id: 'npm-package',
      title: 'NPM Package - Ortoni Report',
      shortDescription: 'Recommended to follow the playlist as listed',
      englishPlaylist: 'PL699Xf-_ilW4c56ykW3Iu9QwGziilv3RQ',
    },
    {
      id: 'java',
      title: 'Java Basic',
      shortDescription: 'Recommended to follow the playlist as listed',
      tamilPlaylist: 'PL699Xf-_ilW6vI9FHmePi1TvKyzYATgXi',
      englishPlaylist: 'PL699Xf-_ilW569-6sPgZLreeUjbHi41xc',
    },
    {
      id: 'appetize',
      title: 'Mobile App Testing using Playwright & Appetize',
      shortDescription: 'Learn mobile automation testing using Playwright.',
      englishPlaylist: 'PL699Xf-_ilW4WTaDxk44cMoOMSP6kqarj',
    },
    {
      id: 'api-testing',
      title: 'API Testing Course',
      shortDescription: 'Learn API testing with various tools and frameworks.',
      englishPlaylist: 'PL699Xf-_ilW49SXbSmnSuL2tq-3ab_6qL',
      tamilPlaylist: 'PLQP9SC4Infiyqrluvp-q7ZW1ERn3RlcyL',
    },
    {
      id: 'playwright-cucumber',
      title: 'Playwright - Cucumber - TypeScript',
      shortDescription:
        'Learn Playwright with Cucumber for automation testing.',
      englishPlaylist: 'PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk',
    },
    {
      id: 'playwright-java',
      title: 'Playwright Java',
      shortDescription: 'Using Playwright with Java for end-to-end testing.',
      englishPlaylist: 'PL699Xf-_ilW7qlOrCGqwsWkgNkHQTqaBb',
      tamilPlaylist: 'PLQP9SC4InfiyBhXnft7eqzE95QdVyTQGg',
    },
    {
      id: 'playwright-tyepescript',
      title: 'Playwright with Typescript',
      shortDescription:
        'Using Playwright with Typescript for end-to-end testing.',
      englishPlaylist: 'PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD',
    },
    {
      id: 'cucumber-selenium',
      title: 'Cucumber + Selenium Java',
      shortDescription: 'Behavior-driven testing using Selenium and Cucumber.',
      englishPlaylist: 'PL699Xf-_ilW6oK3_otMtu7BPqiy0VlkE-',
      tamilPlaylist: 'PLQP9SC4InfixONdn-TY-1Fp7t0kxHaGh1',
    },
    {
      id: 'selenium',
      title: 'Selenium Java - Tamil',
      shortDescription: 'Learn Selenium in Tamil language.',
      tamilPlaylist: 'PL699Xf-_ilW6vI9FHmePi1TvKyzYATgXi',
      englishPlaylist: 'PL699Xf-_ilW47NUWNLs_5kNP2pFdsE_XV',
    },
    {
      id: 'automation-interview',
      title: 'Automation Interview Preparation',
      shortDescription: 'Prepare for automation testing job interviews.',
      englishPlaylist: 'PL699Xf-_ilW5sBApdx9qEqQUmHWkmyrCu',
    },
    {
      id: 'xpath-tutorial',
      title: 'XPath Tutorial',
      shortDescription: 'Learn XPath techniques for test automation.',
      englishPlaylist: 'PL699Xf-_ilW4sqC76skEN5vHT0M1YNXoU',
      tamilPlaylist: 'PLQP9SC4InfiyHD8s6_NUV6Gg6m2kmISMY',
    },
    {
      id: 'rpa',
      title: 'Robotic Process Automation (RPA)',
      shortDescription: 'Learn the fundamentals of RPA.',
      englishPlaylist: 'PL699Xf-_ilW77kc-XKGNdVXyR6N5c-Ryp',
    },
    {
      id: 'typescript-test-automation',
      title: 'TypeScript for Test Automation',
      shortDescription: 'Learn TypeScript for automation scripting.',
      englishPlaylist: 'PL699Xf-_ilW5VXRsJwBJLmDGrsrYxBjQT',
    },
    {
      id: 'javascript-test-automation',
      title: 'JavaScript for Test Automation',
      shortDescription: 'Using JavaScript in test automation frameworks.',
      englishPlaylist: 'PL699Xf-_ilW6kwrOg4Wm87ZJ-idHubBrG',
      tamilPlaylist: 'PLQP9SC4Infiy2ztb9-TJx8gSym2JbQYCx',
    },
    {
      id: 'letxpath-plugin',
      title: 'LetXPath - XPath Plugin',
      shortDescription: 'Learn how to build and use the LetXPath extension.',
      englishPlaylist: 'PL699Xf-_ilW76WC_FIcE8TqqkzpB9dhy3',
    },
    {
      id: 'chrome-extension',
      title: 'Chrome Extension Development - Build XPath Extension',
      shortDescription: 'Learn how to build a Chrome extension for XPath.',
      englishPlaylist: 'PL699Xf-_ilW7aQ6lBWXjaIheZsduOpcR5',
    },
    {
      id: 'protractor',
      title: 'Protractor Tutorial - LetCode',
      shortDescription: 'Learn how to use Protractor for Angular testing.',
      englishPlaylist: 'PL699Xf-_ilW63aUN3w4HS9IgmPYOGI2hK',
    },
    {
      id: 'flutter',
      title: 'Flutter',
      shortDescription: 'Learn Flutter app development from scratch.',
      englishPlaylist: 'PL699Xf-_ilW7PTWJ6QAUoUJ4gr3o4QpJn',
    },
    {
      id: 'tiny-projects',
      title: 'Tiny Projects',
      shortDescription: 'Small automation projects to practice coding.',
      englishPlaylist: 'PL699Xf-_ilW475XF5g1Q8mtXnXmK-JZt1',
    },
  ];

  getCourseById(id: string) {
    return this.courses.find((course: { id: string }) => course.id === id);
  }
}
