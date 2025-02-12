import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { ActivatedRoute } from '@angular/router';
import { UpdateMetaTag } from '../../service/updateMeta';

@Component({
  selector: 'app-interview',
  imports: [CommonModule, SafeUrlPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './interview.component.html',
})
export class InterviewComponent {
  allquestions = [
    {
      title: 'Q & A Part 1',
      datavid: 'selenium-interview-videos-part1',
      vid: 'hQvU3DW8T_k',
      Question1:
        'In a table, there are few items with prices, How do you sum up all the prices?',
      Question2:
        'How do you click on an element providing the property like it has a name & title?',
      Question3:
        'When you click on a button, a text appears on the screen, let’s say it will appear after 10, 20 seconds, or even 1 minute. So how do you handle this situation?',
    },
    {
      title: 'Q & A Part 2',
      datavid: 'selenium-interview-videos-part2',
      vid: 'i-t7COgw7_o',
      Question1: 'How to switch between 2 tabs? Is tab or window are same?',
      Question2: 'Difference between Checked and Unchecked Exception?',
      Question3: 'Can you explain the concept of overloading and override?',
    },
    {
      title: 'Q & A Part 3',
      datavid: 'selenium-interview-videos-part3',
      vid: 'BLhHxj9YqLw',
      Question1: 'How to prevent a method from override?',
      Question2: 'What is Given, When & Then ?',
      Question3: 'What is the output ?',
    },
    {
      title: 'Q & A Part 4',
      datavid: 'selenium-interview-videos-part4',
      vid: 'aKEK5ly5k0c',
      Question1: 'Name few exception that you faced in automation?',
      Question2: 'When we cannot use @FIndBY?',
      Question3:
        'Write a program to find the largest number in the given array?',
    },
    {
      title: 'Q & A Part 5',
      datavid: 'selenium-interview-videos-part5',
      vid: 'E8CU1Wsemwk',
      Question1: 'What is the difference between close and quit?',
      Question2: 'When we will get failure and skip in TestNG?',
      Question3: 'What will be the output?',
    },
    {
      title: 'Q & A Part 6',
      datavid: 'selenium-interview-videos-part6',
      vid: 'm2K9yY_4O_0',
      Question1: 'Where do you use Enum in your framework?',
      Question2: 'How to print all the dropdown values?',
      Question3: 'How to print the page title without using getTitle function?',
    },
    {
      title: 'Q & A Part 7',
      datavid: 'selenium-interview-videos-part6',
      vid: 'WkjGgWhBWTw',
      Question1:
        'There is an alert with 4 buttons OK, Cancel, Yes, No. How do you handle it',
      Question2:
        'You are doing a click action using Selenium, After the click no response in the UI. What you’ll do?',
      Question3:
        'As soon as you load the QA it’s asking for username and password in the Alert. How to handle this?',
    },
  ];
  private route = inject(ActivatedRoute);
  private seoService = inject(UpdateMetaTag);
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.seoService.updateMetaTags(data);
    });
  }
}
