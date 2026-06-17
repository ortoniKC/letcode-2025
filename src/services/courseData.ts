export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  englishPlaylist?: string;
  tamilPlaylist?: string;
  description?: string;
}

export const coursesData: Course[] = [
  {
    id: "selenium-vs-playwright",
    title: "Selenium VS Playwright",
    description:
      "In this playlist, we will discuss all the tiny things about Playwright and why I think it is better compared to Selenium.",
    englishPlaylist: "PL699Xf-_ilW7k8dTrvjwha4aD1BnZf7FH",
    shortDescription: "The practical way of learning Selenium VS Playwright",
  },
  {
    id: "npm-package",
    title: "NPM Package - Ortoni Report",
    shortDescription: "Recommended to follow the playlist as listed",
    englishPlaylist: "PL699Xf-_ilW4c56ykW3Iu9QwGziilv3RQ",
    description:
      "In this playlist, we dive into the **basics of npm packages**, the building blocks of modern JavaScript development.  \nWhether you're **new to web development, testing, or just getting started with Node.js**, this guide will help you understand:  \n\n✔ **What npm packages are**  \n✔ **How they work**  \n✔ **Why they're essential for your projects**  \n",
  },
  {
    id: "java",
    title: "Java Basic",
    shortDescription: "Recommended to follow the playlist as listed",
    tamilPlaylist: "PL699Xf-_ilW6vI9FHmePi1TvKyzYATgXi",
    englishPlaylist: "PL699Xf-_ilW569-6sPgZLreeUjbHi41xc",
    description: `# Welcome to the Full Basic Course on Selenium WebDriver (Tamil Language) 🎉  \n\nThe intent of this course is to provide content that is **easy to understand**, and using the **native language (Tamil)** will help in better comprehension.  \n\nWe will start from the **basics of programming**, and our language of choice is **Java**.  \n\n---\n\n## 📺 **Video Content Overview**  \n1️⃣ **Course Introduction**  \n2️⃣ **JDK, Eclipse & Maven Setup**  \n3️⃣ **Hello World Program**  \n4️⃣ **Data Types**  \n5️⃣ **Methods in Java**  \n6️⃣ **Local & Instance Variables + \`this\` Keyword**  \n7️⃣ **Use of Constructors**  \n8️⃣ **Static Variables**  \n9️⃣ **Arrays**  \n🔟 **Static Methods**  \n1️⃣1️⃣ **Interfaces**  \n1️⃣2️⃣ **Abstract Classes**  \n1️⃣3️⃣ **List & Set**  \n1️⃣4️⃣ **Throw vs Throws**  \n1️⃣5️⃣ **Exception Handling**  \n\n---\n\n### 🔥 **Why Take This Course?**  \n✅ Designed to help you understand **basics easily & thoroughly**  \n✅ Simple explanations with **real-world examples**  \n✅ Learn Java programming **step by step**  \n\n🚀 **Trust me!** This course will ensure you build a **strong foundation** in Java and Selenium.  \n`,
  },
  {
    id: "appetize",
    title: "Mobile App Testing using Playwright & Appetize",
    shortDescription: "Learn mobile automation testing using Playwright.",
    englishPlaylist: "PL699Xf-_ilW4WTaDxk44cMoOMSP6kqarj",
    description:
      "**Hello everyone!** 👋\n\nJoin me in this **informative playlist** as we explore **Native Mobile App Testing** in **Android and iOS** using **Playwright** and **Appetize**. 🚀\n\n**What is Appetize?**\nAppetize offers the **fastest way to access mobile apps** in the workplace. It allows you to **instantly run mobile apps in your browser** for **any application**, making mobile testing more accessible and efficient. 📱💻\n\nStay tuned as we dive deep into **mobile automation testing** with these powerful tools! 🔥\n\n#MobileTesting #Playwright #Appetize #Android #iOS #AutomationTesting #QA",
  },
  {
    id: "api-testing",
    title: "API Testing Course",
    shortDescription: "Learn API testing with various tools and frameworks.",
    englishPlaylist: "PL699Xf-_ilW49SXbSmnSuL2tq-3ab_6qL",
    tamilPlaylist: "PLQP9SC4Infiyqrluvp-q7ZW1ERn3RlcyL",
    description:
      "What are API’s?  \nAPI stands for **Application Programming Interface**  \nAn API is a set of rules and tools that allows different software applications to **communicate with each other**  \nIt is used to **request and exchange information**  \n\n---\n\n## 🔹 Why Test APIs?  \n\n✅ **Functionality**: Ensure that the API functions as intended. Test that it returns the correct data, performs the expected actions, and handles errors appropriately.  \n\n✅ **Integration**: APIs are often used to integrate different services or components of a system. API testing ensures that these integrations work smoothly and that data is exchanged correctly.  \n\n✅ **Reliability**: Verify the reliability and stability of the API under various conditions, such as **high loads, concurrent requests, and unexpected inputs**.  \n\n✅ **Security**: Identify and address potential **security vulnerabilities**, ensuring that the API is protected against **unauthorized access, data breaches, and other security threats**.  \n\n✅ **Compatibility**: Ensure that the API is compatible with **various client applications, devices, and browsers**.  \n",
  },
  {
    id: "playwright-cucumber",
    title: "Playwright - Cucumber - TypeScript",
    shortDescription: "Learn Playwright with Cucumber for automation testing.",
    englishPlaylist: "PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk",
    description:
      "In this playlist, we will explore how to use **Cucumber with TypeScript**.  \n\nCucumber is a popular **Behavior-Driven Development (BDD) tool** that allows developers and stakeholders to collaborate on defining and testing application requirements in a **human-readable format**.  \n**TypeScript** is a powerful superset of JavaScript that adds **optional static typing**, making it easier to catch errors before runtime. By combining these two tools, we can create **more reliable and maintainable tests**.  \n\n---\n\n## 🔹 **What You Will Learn**  \n✔ **Basics of BDD and Cucumber**  \n✔ **How to write feature files and step definitions**  \n✔ **Setting up a TypeScript project and integrating Cucumber**  \n✔ **Writing step definitions in TypeScript**  \n✔ **Using cucumber-js to run tests**  \n✔ **Generating reports with cucumber-html-reporter**  \n\n---\n\nBy the end of this video series, you will have a **solid understanding** of how to use **Cucumber with TypeScript** to write **robust and maintainable tests** for your applications.  \n\nWhether you are a **seasoned developer** or just **getting started with testing**, this tutorial will provide you with the knowledge and skills you need to be successful.  \n\n☕ **So, grab your favorite beverage, and let's get started!** 🚀  \n",
  },
  {
    id: "playwright-java",
    title: "Playwright Java",
    shortDescription: "Using Playwright with Java for end-to-end testing.",
    englishPlaylist: "PL699Xf-_ilW7qlOrCGqwsWkgNkHQTqaBb",
    tamilPlaylist: "PLQP9SC4InfiyBhXnft7eqzE95QdVyTQGg",
    description:
      "What is **Playwright**?\n\nPlaywright is a **Node.js library** to automate **Chromium, Firefox, and WebKit** with a single API. Playwright is built to enable **cross-browser web testing**.\n\n---\n\n### **Playwright by Microsoft**\nPlaywright initially started as a **fork of Puppeteer**.\nPuppeteer is a Node.js library used to **automate Chromium browsers** with a **JavaScript API**.\n\n---\n\n## 🚀 **Capabilities:**\n- ✅ **Spans multiple pages, domains, and iframes**\n- ✅ **Intercept network activity** for stubbing and mocking requests\n- ✅ **Emulate mobile devices, geolocation, and permissions**\n- ✅ **Native input events** for mouse and keyboard\n- ✅ **Upload & download support**\n\nPlaywright enables **fast, reliable, and capable automation** across all modern browsers.\n\n---\n\n## 🌍 **Support for All Browsers:**\n- 🖥️ Test on **Chromium, Firefox, and WebKit**\n- 📱 Test for **mobile (device emulation)**\n- 🏎️ Supports **headless and headful execution**\n\n---\n\n## ⚡ **Fast and Reliable Execution:**\n- 🔹 **Auto-wait APIs** (clicks, types, etc.)\n- 🔹 **Timeout-free automation**\n- 🔹 **Lean parallelization** with **browser contexts**\n- 🔹 **Wide variety of selectors (locators) & shadow-DOM support**\n- 🔹 **Handles single-page applications (SPA) efficiently**\n\n---\n\n## 🛠 **Pre-requirements:**\n1️⃣ **JDK 11**\n2️⃣ **Eclipse Editor**\n3️⃣ **Maven**\n\n---\n\n#playwright #letcode\n",
  },
  {
    id: "playwright-tyepescript", // Kept original Angular ID typo
    title: "Playwright with Typescript",
    shortDescription: "Using Playwright with Typescript for end-to-end testing.",
    englishPlaylist: "PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD",
    description:
      "What is **Playwright**?\n\nPlaywright is a **Node.js library** to automate **Chromium, Firefox, and WebKit** with a single API. Playwright is built to enable **cross-browser web testing**.\n\n---\n\n### **Playwright by Microsoft**\nPlaywright initially started as a **fork of Puppeteer**.\nPuppeteer is a Node.js library used to **automate Chromium browsers** with a **JavaScript API**.\n\n---\n\n## 🚀 **Capabilities:**\n- ✅ **Spans multiple pages, domains, and iframes**\n- ✅ **Intercept network activity** for stubbing and mocking requests\n- ✅ **Emulate mobile devices, geolocation, and permissions**\n- ✅ **Native input events** for mouse and keyboard\n- ✅ **Upload & download support**\n\nPlaywright enables **fast, reliable, and capable automation** across all modern browsers.\n\n---\n\n## 🌍 **Support for All Browsers:**\n- 🖥️ Test on **Chromium, Firefox, and WebKit**\n- 📱 Test for **mobile (device emulation)**\n- 🏎️ Supports **headless and headful execution**\n\n---\n\n## ⚡ **Fast and Reliable Execution:**\n- 🔹 **Auto-wait APIs** (clicks, types, etc.)\n- 🔹 **Timeout-free automation**\n- 🔹 **Lean parallelization** with **browser contexts**\n- 🔹 **Wide variety of selectors (locators) & shadow-DOM support**\n- 🔹 **Handles single-page applications (SPA) efficiently**\n\n---\n\n## 🛠 **Pre-requirements:**\n1️⃣ **JDK 11**\n2️⃣ **Eclipse Editor**\n3️⃣ **Maven**\n\n---\n\n#playwright #letcode\n",
  },
  {
    id: "cucumber-selenium",
    title: "Cucumber + Selenium Java",
    shortDescription: "Behavior-driven testing using Selenium and Cucumber.",
    englishPlaylist: "PL699Xf-_ilW6oK3_otMtu7BPqiy0VlkE-",
    tamilPlaylist: "PLQP9SC4InfixONdn-TY-1Fp7t0kxHaGh1",
    description:
      "## **What is Cucumber?** 🥒\nA **Cucumber** is a software tool that supports **Behavior-Driven Development (BDD)**.\n- Uses **Gherkin language** as a parser\n- Supports various languages like **Java, JavaScript, Ruby & Python**\n- **Free to use** and widely adopted in the industry\n\n## **What is BDD?** 📝\n- **BDD** (Behavior-Driven Development) focuses on writing test cases based on **software behavior**.\n- Written in **simple English language statements**, not typical programming syntax.\n- Improves **communication** between technical & non-technical teams.\n\n## **What is Gherkin?** ✍️\n- **Gherkin** is a language used in **Cucumber** to define tests.\n- Uses **plain English** to describe **use cases** for software systems.\n- Helps make tests **readable and understandable** for everyone.\n\n🎥 **Tamil Playlist**: [Watch here](https://www.youtube.com/playlist?list=PLQP9SC4InfixONdn-TY-1Fp7t0kxHaGh1)\n\n#cucumber #letcode #kurimurai",
  },
  {
    id: "selenium",
    title: "Selenium Java - Tamil",
    shortDescription: "Learn Selenium in Tamil language.",
    tamilPlaylist: "PL699Xf-_ilW6vI9FHmePi1TvKyzYATgXi",
    englishPlaylist: "PL699Xf-_ilW47NUWNLs_5kNP2pFdsE_XV",
    description: `## Chapters covered in this course:\n\n### Chapter 0: Installation  \nIn this chapter, we'll learn how to install **JDK 11** and **Eclipse**. Then we are going to create a **Maven Project** and add the Selenium dependencies.  \n\n### Chapter 1: First Script  \nWe'll write our first test script and execute it using the **Java main method**. Before writing the script, we'll understand the **WebDriver concept** and how to download or update browser drivers. The chapter starts with a **basic login test script**.\n\n### Chapter 2: Close vs Quit  \nWe'll explore the difference between the **close()** and **quit()** functions in Selenium WebDriver.\n\n### Chapter 3: System SetProperty  \nWe'll learn what \`System.setProperty\` means and whether it's mandatory.\n\n### Chapter 4: Maximize  \nWe'll understand the syntax for maximizing the browser and the Java concept behind it.\n\n### Chapter 5: Inputs  \nWe'll learn how to interact with different types of **input fields**.\n\n### Chapter 6: Buttons  \nWe'll learn how to interact with various **button elements**.\n\n### Chapter 7: Drop-down  \nWe'll learn how to handle different types of **dropdowns**.\n\n### Chapter 8: Alert  \nWe'll learn how to interact with various **alert popups**.\n\n### Chapter 9: Frame  \nWe'll learn how to handle different types of **frames**.\n\n### Chapter 10: UI Validation  \nWe'll explore **basic UI validation** using Selenium.\n\n### Chapter 11: Window Handling  \nWe'll learn how to work with multiple **browser windows and tabs**.\n\n### Chapter 12: Find Elements  \nWe'll explore how to find **multiple elements** using Selenium.\n\n### Chapter 13: Web Table  \nWe'll learn how to handle **web tables** in Selenium.\n\n### Chapter 14: Navigation  \nWe'll explore how to navigate between pages using **back, forward, and refresh**.\n\n### Chapter 15: Implicit Wait  \nWe'll learn how to use **implicit wait** and understand why it’s essential.  \n\n### Chapter 16: Explicit Wait  \nWe'll learn how to use **explicit wait** and why it's necessary.  \n\n### Chapter 17: Actions  \nWe'll explore the **Actions class** in Selenium and perform actions like **drag and drop, mouse, and keyboard interactions**.\n\n### Chapter 18: Title  \nWe'll learn how to validate the **page title**.\n\n### Chapter 19: Page Object Model (POM)  \nWe'll understand what **POM (Page Object Model)** is and how to use it.\n\n### Chapter 20: Page Factory  \nWe'll explore **Page Factory** and how it simplifies Selenium test scripts.\n\n### Chapter 21: Using a Base Class  \nThroughout the course, we created a **base class**—let's see how to use it effectively in Selenium.\n\n### Chapter 22: Conclusion  \n🎉 **Congratulations!** You’ve learned Selenium. What’s next?  \n\n---\n\n## 🔥 **Practice ⏳**  \nFeel free to use the LetCode website:  \n🔗 [LetCode](https://www.letcode.in)  \n\nFor more practice tests:  \n🔗 [LetCode Test Practice](https://letcode.in/test-practice)  \n\n### 🛠 **XPath Extension Used**  \n✅ **LetXPath**  \n\n### 🎯 **Preparing for an Interview?**  \nYes!  \n\n---\n\n## 📌 **TODO Checklist ☑**\n- Complete the test pages  \n- And the most important—**subscribe to LetCode** 😉  \n`,
  },
  {
    id: "automation-interview",
    title: "Automation Interview Preparation",
    shortDescription: "Prepare for automation testing job interviews.",
    englishPlaylist: "PL699Xf-_ilW5sBApdx9qEqQUmHWkmyrCu",
  },
  {
    id: "xpath-tutorial",
    title: "XPath Tutorial",
    shortDescription: "Learn XPath techniques for test automation.",
    englishPlaylist: "PL699Xf-_ilW4sqC76skEN5vHT0M1YNXoU",
    tamilPlaylist: "PLQP9SC4InfiyHD8s6_NUV6Gg6m2kmISMY",
    description:
      "**Welcome to the XPath Learning Playlist!** 🎯\n\nThis playlist will contain **all the videos related to XPath learning in Tamil**. 🇮🇳🗣️\n\nWe will cover everything from **basic to advanced XPath concepts**, helping you master **XPath for automation testing**. 🚀\n\nStay tuned and enhance your XPath skills with practical examples and real-world scenarios! 💡\n\n#XPath #AutomationTesting #Tamil #Selenium #LetCode",
  },
  {
    id: "rpa",
    title: "Robotic Process Automation (RPA)",
    shortDescription: "Learn the fundamentals of RPA.",
    englishPlaylist: "PL699Xf-_ilW77kc-XKGNdVXyR6N5c-Ryp",
    description:
      "**Hello Guys!** 👋\n\nIn this video, we'll learn the **basics of UiPath Studio**. 🚀\n\n### **What is UiPath Studio?**\nUiPath Studio is an **advanced automation software** that empowers everyone—from **business users to advanced RPA developers**—to create **powerful software robots**. 🤖✨\n\nWith UiPath Studio, organizations get the **right automation canvas** to build great bots and the **right governance tools** to manage them efficiently. 🏢🔧\n\nStay tuned and let's dive into the world of **RPA with UiPath**! 🔥\n\n#UiPath #RPA #Automation #UiPathStudio #LetCode",
  },
  {
    id: "typescript-test-automation",
    title: "TypeScript for Test Automation",
    shortDescription: "Learn TypeScript for automation scripting.",
    englishPlaylist: "PL699Xf-_ilW5VXRsJwBJLmDGrsrYxBjQT",
    description:
      "# Introduction to TypeScript 🚀  \n\nTypeScript is a **strongly typed superset** of JavaScript that compiles to plain JavaScript. It adds **static typing, interfaces, and better tooling support**.\n\n---\n\n## 📦 **Installation Steps**  \n\n### ✅ **Installing Node.js & TypeScript**  \n1. Download **Node.js** from the official site: [Node.js](https://nodejs.org/)  \n2. Install the **LTS version** for better stability  \n3. Install TypeScript globally using npm:  \n   ```sh\n   npm install -g typescript\n   ```  \n4. Verify installation by running:  \n   ```sh\n   tsc -v   # Check TypeScript version\n   ```  \n\n### ✅ **Installing VS Code**  \n1. Download **Visual Studio Code**: [VS Code](https://code.visualstudio.com/)  \n2. Install the **TypeScript and Prettier extensions** for better coding experience  \n\n---\n\n## 📚 **TypeScript Fundamentals**  \n\n1️⃣ **Course Introduction**  \n2️⃣ **Setting Up a TypeScript Project**  \n3️⃣ **Type Annotations & Basic Types**  \n4️⃣ **Interfaces & Type Aliases**  \n5️⃣ **Functions & Optional Parameters**  \n6️⃣ **Classes & Inheritance**  \n7️⃣ **Access Modifiers (public, private, protected)**  \n8️⃣ **Generics in TypeScript**  \n9️⃣ **Enums & Tuples**  \n🔟 **Asynchronous Programming (Promises & Async/Await)**  \n1️⃣1️⃣ **TypeScript with DOM Manipulation**  \n1️⃣2️⃣ **Modules & Namespaces**  \n1️⃣3️⃣ **Error Handling in TypeScript**  \n1️⃣4️⃣ **TypeScript with Angular**  \n1️⃣5️⃣ **Compiling & Running TypeScript Code**  \n",
  },
  {
    id: "javascript-test-automation",
    title: "JavaScript for Test Automation",
    shortDescription: "Using JavaScript in test automation frameworks.",
    englishPlaylist: "PL699Xf-_ilW6kwrOg4Wm87ZJ-idHubBrG",
    tamilPlaylist: "PLQP9SC4Infiy2ztb9-TJx8gSym2JbQYCx",
    description:
      "# Introduction to JavaScript 🚀  \n\nJavaScript is a **lightweight, interpreted language** used to make web pages interactive. It is widely used for **frontend and backend development**.\n\n---\n\n## 📦 **Installation Steps**  \n\n### ✅ **Installing Node.js**  \n1. Download **Node.js** from the official site: [Node.js](https://nodejs.org/)  \n2. Install the **LTS version** for better stability  \n3. Verify installation by running:  \n   ```sh\n   node -v   # Check Node.js version\n   npm -v    # Check npm version\n   ```\n\n---\n\n## 📚 **JavaScript Fundamentals**  \n\n1️⃣ **Course Introduction**  \n2️⃣ **Setting Up a JavaScript Project**  \n3️⃣ **Variables & Data Types**  \n4️⃣ **Operators in JavaScript**  \n5️⃣ **Functions & Scope**  \n6️⃣ **Arrays & Objects**  \n7️⃣ **Loops & Conditional Statements**  \n8️⃣ **ES6 Features (let, const, arrow functions, etc.)**  \n9️⃣ **Event Handling in JavaScript**  \n🔟 **Promises & Async/Await**  \n1️⃣1️⃣ **DOM Manipulation**  \n1️⃣2️⃣ **Fetching Data with APIs**  \n1️⃣3️⃣ **Error Handling in JavaScript**  \n1️⃣4️⃣ **Introduction to JavaScript Frameworks (Angular)**  \n1️⃣5️⃣ **Node.js Basics & Using npm**  \n",
  },
  {
    id: "letxpath-plugin",
    title: "LetXPath - XPath Plugin",
    shortDescription: "Learn how to build and use the LetXPath extension.",
    englishPlaylist: "PL699Xf-_ilW76WC_FIcE8TqqkzpB9dhy3",
  },
  {
    id: "chrome-extension",
    title: "Chrome Extension Development - Build XPath Extension",
    shortDescription: "Learn how to build a Chrome extension for XPath.",
    englishPlaylist: "PL699Xf-_ilW7aQ6lBWXjaIheZsduOpcR5",
    description:
      "Have you ever wondered **how Chrome extensions work**, especially **XPath Finder extensions**?\n\nThere are **many XPath Finder extensions** in the Chrome Web Store—some are really good, but **most are outdated or not reliable**.\n\nHowever, **no single product suits every application**.\n\n---\n\n## ❓ **Who Knows Your Application Best?**\n- **Who else understands your application better than you?**\n- **Who else can determine the best XPath strategy for your needs?**\n\nThe answer is: **None other than you!** 🚀\n\n---\n\n## 🔧 **Let's Build an XPath Finder Extension!**\nWe will create an **open-source Chrome extension** specifically **by testers, for testers**.\n\nIt’s **easier than you think** to develop a Chrome extension! 🎯\n\nStarting **May onwards**, I will release **video tutorials** on how to build a **Chrome extension from scratch**.\n\n---\n\n## 📚 **What Will We Cover?**\n- ✅ **Setting up the development environment**\n- ✅ **JavaScript tutorials focused on the DOM & document**\n- ✅ **How to find XPath using Vanilla JavaScript**\n- ✅ **Exploring Chrome Extension APIs in detail**\n- ✅ **And much more!**\n\n---\n\n## 🤔 **Need Help with Open Source?**\nSince I am **new to open-source projects**, I am **seeking guidance** on:\n- How to start contributing to **open-source repositories**\n- Best practices for managing an **open-source project**\n- Licensing, documentation, and community involvement\n\nIf you have experience with **open-source**, please **comment or DM me** to help both **me and the community**! 🙌\n\n---\n\n#XPath #ChromeExtension #OpenSource #Automation #Testing #XPathFinder\n",
  },
  {
    id: "protractor",
    title: "Protractor Tutorial - LetCode",
    shortDescription: "Learn how to use Protractor for Angular testing.",
    englishPlaylist: "PL699Xf-_ilW63aUN3w4HS9IgmPYOGI2hK",
    description:
      "## Learn from Scratch to Advanced 🚀  \n\nIn this tutorial, you'll learn everything about **Protractor API, JavaScript (ES6), and TypeScript**.  \n\n### 📌 **JavaScript (ES6) Topics**  \n- **let, var & const**  \n- **String**  \n- **Functions**  \n- **OOPS**  \n- **if-else**  \n- **Loops**  \n- **And more...**  \n\n### 📌 **Protractor Topics**  \n- **Everything about Protractor**  \n- **How to run scripts**  \n- **How to debug**  \n- **Jenkins Integration**  \n- **Git**  \n\n### 📌 **Jasmine Topics**  \n- **Detailed Jasmine concepts**  \n- **Integration with Protractor**  \n\n---\n\n## 🌟 What is Protractor?  \nProtractor is an **end-to-end test framework** for **Angular and AngularJS applications**. It runs tests against your application **in a real browser**, interacting with it **as a user would**.\n\n### 🔹 **Key Features**  \n✅ **Test Like a User**: Protractor is built on **WebDriverJS**, using native events and browser-specific drivers.  \n✅ **For Angular Apps**: Supports **Angular-specific locators** for effortless testing.  \n✅ **Automatic Waiting**: No need for explicit waits and sleeps—Protractor **automatically syncs with the page**.  \n\n📌 **Official Link**: [Protractor Official Site](http://www.protractortest.org/#/)  \n\n---\n\n## 🔎 **Search by Keywords**  \nprotractor tutorial, typescript, angular testing, selenium, visual studio code, best IDE, angular, unit testing, automation testing, angularjs, javascript, protractor automation, e2e testing, jasmine protractor, selenium vs protractor, karma, automation testing tutorial, testing, software testing material.  \n",
  },
  {
    id: "flutter",
    title: "Flutter",
    shortDescription: "Learn Flutter app development from scratch.",
    englishPlaylist: "PL699Xf-_ilW7PTWJ6QAUoUJ4gr3o4QpJn",
  },
  {
    id: "tiny-projects",
    title: "Tiny Projects",
    shortDescription: "Small automation projects to practice coding.",
    englishPlaylist: "PL699Xf-_ilW475XF5g1Q8mtXnXmK-JZt1",
  },
];

export const getCourseById = (id: string): Course | undefined => {
  return coursesData.find((course) => course.id === id);
};
