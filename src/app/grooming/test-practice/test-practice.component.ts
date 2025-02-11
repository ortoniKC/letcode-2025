import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-test-practice',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './test-practice.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestPracticeComponent {
  testCases = [
    {
      videoUrl: 't1etgfBmBf8',
      title: 'Pre-Condition',
      scenarios: [
        {
          title: 'Create a Service Now Instance and start Practice',
          steps: [
            "The tutorial isn't enough! Selenium Practice Site | Test Automation",
            "I strongly believe a tutorial isn't enough to learn anything, you need to practice to become a pro in it. I am providing you an application to do the practice and to enhance your confidence in coding.",
          ],
        },
      ],
    },

    {
      videoUrl: 'NKFBGpQ4EPY',
      id: 'TC001',
      title: 'Login Positive & Negative',
      scenarios: [
        {
          title: 'Login Positive',
          steps: [
            'Navigate to your ServiceNow instance',
            'Verify title is ServiceNow',
            'Verify username text field has label of User name',
            'Enter username (admin)',
            'Verify password text field has label of Password',
            'Enter password (instance password)',
            'Verify language dropdown has label of Language',
            'Verify language is selected as English by default',
            'Verify forgot password is visible to the user',
            'Verify user can see the login button',
            'As user clicks on the login button',
            'Verify the title as ServiceNow',
          ],
        },
        {
          title: 'Login Negative',
          steps: [
            'Navigate to your ServiceNow instance',
            'Verify title is ServiceNow',
            'User clicks on the login button',
            'Verify the error message as Invalid input in user name!',
            'Enter the username as admin',
            'User clicks on the login button',
            'Verify the error message contains User name or password invalid',
          ],
        },
      ],
    },
    {
      videoUrl: 'DIQqgm3qU7o',
      id: 'TC002',
      title: 'Forgot Password',
      scenarios: [
        {
          title: 'Forgot Password Flow',
          steps: [
            'Navigate to the ServiceNow instance',
            'User should see the forgot password',
            'Click the forgot password',
            'User should see three tabs as Identify, Verify & Reset',
            'User should see the username label and text field',
            'User should see the next button',
            'Enter the username as admin',
            'Click on the next button',
            'User should see the Request in progress popup',
            'User should see the Email field and email text box',
          ],
        },
      ],
    },
    {
      videoUrl: '3V8ejGFa5A0',
      id: 'TC003',
      title: 'Create Incident',
      scenarios: [
        {
          title: 'Incident Creation',
          steps: [
            'Navigate to the ServiceNow instance',
            'Login to the application',
            'User should see the filter navigator text box',
            'Type incident in the navigator text box',
            'User should see the Create New',
            'Click on the Create New',
            'Verify the Number text box has already an incident number',
            'Incident number should start with INC',
            'Save the incident number to use later',
            'Fill only the mandatory field',
            'Click on the search icon',
            'User should see the new window',
            'User should see the search field',
            'Type Abel Tuter in the search field',
            'Click on the Abel Tuter from the search results',
            'Popup should be closed',
            'Enter the short description (some random text)',
            'Click on the submit button',
            'User should create an Incident',
            'Confirm an incident is created',
            'User should see the search field',
            'Search with the incident number (data from step 9)',
            'Short description should be visible with the data passed in step 11',
            'Verify the title contains Incidents',
            'Logout the application',
          ],
        },
      ],
    },
    {
      videoUrl: 'N9uJlLaSR5M',
      id: 'TC004',
      title: 'Computer Database',
      scenarios: [
        {
          title: 'Database Interaction',
          steps: [
            'Navigate to Computer Database',
            'Verify the title as Computers database',
            'Verify the page header is the same as the page title',
            'User must see the filter by computer name text box',
            'User should see "Add a new computer" button',
            'User should see the filter by name button',
            'User should see the table and the headers: Computer name, Introduced, Discontinued, Company',
            'The user should see the pagination',
            'Click on "Create this computer"',
            'User should see the red background on the computer name field',
            'Enter the computer name',
            'Select the company as Nokia',
            'Submit the form',
            'Successful message should be displayed',
            'Search the created data',
            'Result should be visible (defect)',
          ],
        },
      ],
    },
    {
      videoUrl: 'rU2WVZbzgow',

      id: 'TC005',
      title: 'Sauce Demo',
      scenarios: [
        {
          title: 'E-commerce Workflow',
          steps: [
            'Navigate to Saucedemo',
            'Verify the title as Swag Labs',
            'Verify the login button text is capitalized',
            'Login with standard_user & secret_sauce',
            'Verify default filter dropdown is A-Z',
            'Add the first product to the cart',
            'Verify the cart badge has 1 product',
            'Add the last product to the cart',
            'Verify the cart badge value is increased',
            'Remove the first product from the cart',
            'Verify the cart badge has 1 product',
            'Click on the cart 🛒',
            'Verify the added product is available',
            'Click on the continue shopping',
            'Change the price filter from low to high',
            'Verify the price sorted properly',
          ],
        },
      ],
    },
    {
      videoUrl: 'DlrBk6TyZww',

      id: 'TC006',
      title: 'React Shopping Cart',
      scenarios: [
        {
          title: 'Shopping Cart Flow',
          steps: [
            'Navigate to React Shopping Cart',
            'User should see the GitHub star button',
            'Note down the count of the stars',
            'Click on the GitHub star button',
            'The user should see a new window',
            'Click on the star button',
            'User should see the sign-in page',
            'Sign in and click the star button',
            'Close the active tab',
            'The number of stars should increase',
            'Verify the number of products available message is the same as the number of the product available',
            'Change the size to S',
            'Repeat step 10',
            'Mouse hover on the first product & verify the add to cart button has an amber background',
            'Add to cart',
            'Click on the checkout and accept the alert',
          ],
        },
      ],
    },
  ];
}
