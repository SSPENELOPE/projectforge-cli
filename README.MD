# PROJECT FORGE CLI

# What is this?
- This is an opensource library which aims to make project initialization easier and more user friendly. 

- The inspiration came to make this when I wanted to create a new mobile app and was annoyed at the fact that I had to use the basic npx create commands. So I decided to make templates for most common use cases that already has most of the popular and commonly used libraries installed with projects formatted in somewhat of the "correct" way. 

- These templates will also include more of the common pages(in the case of react) that includes a signup and login with the build in features to make your call. All you need to do is tweak it to your liking and input your request url. In the case of a server, it will include basic setup for database connections and routing included using Express. 

- To view all the updates, head over to the [Changelog](./Changelog.md) and check out the updates

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#how-to-contribute)
- [Credits](#credits)
- [License](#license)
- [Testing](#testing)

## Installation

### Installing the CLI
- Clone this repo using the SSH method and `cd package` into the package folder
- Run the `npm install` command at the root of the directory after installation (where the index.js exists). 
- From the root, in your terminal, run the command `npm install -g`, this will install the projectforge-cli globally to your machine.
- You may now run `projectforge-cli` from any folder on your machine and install the template of your choosing. 
- I am currently in the process of uploading this to npm so this will change eventually and you should be able to just install this using `npm install -g projectforge-cli` 

### Installing the templates (for contributors)
- Follow the steps above, then:
- To install the requirements of the templates to run and test them, you should `cd package/templates/DESIRED TEMPLATE`, and then run the `npm install` command inside of you desired template to use. 
- You should now be able to use the `npm start` command to either fire up your server/application. 
- Template requirements may vary, you should read the README.md inside of each project to see how to run them.
- Please use the test folder to test the release of the package 

## Usage
- This project will eventually be uploaded to npm as a package. Look out for future instructions on where to get this from NPM.

- For now, If you installed the CLI the right way, you should be able to call the `projectforge-cli` from any directory on you machine and choose which template to install. Watch the progress bar go and happy hacking!

## Features
### React Templates
Here are two React templates that you can use:

1. Vanilla React Template:
  - This template provides a basic setup for a React application.
  - It includes React Router DOM for handling routing.
  - It also includes CSS libraries for styling your application.
  - Additionally, it has user login and signup functionality.

2. TypeScript React Template:
  - This template is similar to the Vanilla React Template but with TypeScript support.
  - It includes React Router DOM for routing.
  - It also includes CSS libraries for styling.
  - It has user login and signup features.

Both templates are designed to make it easier for you to start building your React applications with the necessary features. You can choose the template that suits your needs and customize it according to your preferences.


### Express servers
Here are the four Express servers available:

1. MongoDB with TypeScript:
  - This server template includes a MongoDB database connection and is written in TypeScript.
  - It provides basic setup for an Express server with MongoDB integration.
  - You can use this template to quickly start building an Express server with MongoDB as the database.

2. MongoDB with Vanilla JavaScript:
  - Similar to the previous server, this template also includes a MongoDB database connection.
  - However, it is written in vanilla JavaScript instead of TypeScript.
  - You can use this template if you prefer working with JavaScript instead of TypeScript.

3. SQL with TypeScript:
  - This server template includes a SQL database connection and is written in TypeScript.
  - It provides basic setup for an Express server with SQL integration.
  - You can use this template to quickly start building an Express server with SQL as the database.

4. SQL with Vanilla JavaScript:
  - Similar to the previous server, this template also includes a SQL database connection.
  - However, it is written in vanilla JavaScript instead of TypeScript.
  - You can use this template if you prefer working with JavaScript instead of TypeScript.

Remember to install the projectforge-cli globally on your machine and then run `projectforge-cli` from any directory to install the desired template.

### React-Native-Expo
This is just a vanilla React-Native Expo app that I will be updating soon to include more modern features that should be in mobile apps so you can focus on whats most important.

## How to Contribute

Thank you for considering contributing to our project! We welcome contributions from everyone, regardless of their experience level. By participating in this project, you agree to abide by the [Code of Conduct](./code-of-conduct.md).

If you would like to be added as a contributor, please email me at sspenelope23@gmail.com. Detail how you plan to contribute and why you want to contribute.

### Reporting Bugs

If you find a bug, please open an issue on our [GitHub repository](https://github.com/SSPENELOPE/projectforge-cli). Please include a detailed description of the bug, steps to reproduce it, and any relevant screenshots or error messages.

### Requesting Features

If you have a feature request, feel free to open an issue on our [GitHub repository](https://github.com/sspenelope). Provide as much detail as possible about the feature you'd like to see and why you think it would be beneficial.

### Contributing Code

1. Fork the repository and create a new branch for your contribution.
2. Make your changes and ensure they follow our [coding standards](./coding-standards.md).
3. Write tests to cover your changes, if applicable.
4. Ensure all tests pass by running `npm test`.
5. Submit a pull request with a clear title and description explaining your changes.
6. Be open to feedback and be willing to make additional changes if necessary.

### Code of Conduct

We expect all contributors to adhere to our [Code of Conduct](./code-of-conduct.md). Please read it carefully before participating in our project.

### License

By contributing to this project, you agree that your contributions will be licensed under the project's [license](./LICENSE).

## Credits
- All of the people before me who have created and continue to update their wonderful NPM packages included in this project

## Testing
There are no test for the main project quite yet. I am in the process of framing and getting ready to implement those test in the future. Keep an eye out for the testing update to be released in the future