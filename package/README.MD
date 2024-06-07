# ProjectForge CLI

This is a command-line interface (CLI) tool called ProjectForge, a powerful project generation platform. The ProjectForge CLI allows you to interact with ProjectForge directly from your terminal. 

Jump ahead with pre-built project templates. The ProjectForge CLI provides a wide range of project templates that you can use as a starting point for your projects. These templates are designed to save you time and effort by providing a solid foundation with pre-configured settings and structures. Simply select the template that best suits your project requirements and start building without having to start from scratch. With the ProjectForge CLI, you can accelerate your development process and focus on what matters most - bringing your ideas to life. 

[![npm](https://img.shields.io/npm/dm/projectforge-cli.svg)](https://www.npmjs.com/package/projectforge-cli)

## Installation

To use the ProjectForge CLI, you need to install it globally on your machine. Run the following command:

```shell
npm install -g projectforge-cli
```

or

```shell
yarn global add projectforge-cli
```

NOTE: I HAVE NOT TESTED THIS PROJECT ON A MAC OS. Anyone willing to test that for me and give feedback would be greatly appreciated!
## Usage

Once installed, you can use the ProjectForge CLI to create new projects, manage tasks, and collaborate with your team. The CLI provides a set of templates that you can use as a starting point for your projects.

To create a new project, run the following command:

```shell
projectforge-cli
```

This will prompt you to select a template for your project. Choose the one that best fits your needs and follow the instructions.

![alt text](package/assets/projectforge.png)

## Templates

The ProjectForge CLI comes with a variety of templates that cover different project types and industries. These templates provide a solid foundation for your projects and help you get started quickly.

- Express Server with MongoDB: A template for creating an Express server with MongoDB as the database. This template is suitable for building backend applications with a NoSQL database.

- Express Server with SQL: A template for creating an Express server with SQL as the database. This template is suitable for building backend applications with a relational database.

- Express Server with TypeScript and MongoDB: A template for creating an Express server with TypeScript and MongoDB. This template combines the power of TypeScript with the flexibility of MongoDB for building scalable and maintainable backend applications.

- Express Server with TypeScript and SQL: A template for creating an Express server with TypeScript and SQL. This template combines the power of TypeScript with the reliability of a SQL database for building robust backend applications.

- React Application with TypeScript: A template for creating a React application with TypeScript. This template is suitable for building frontend applications with type safety and enhanced developer experience.

- React Application with Vanilla JavaScript: A template for creating a React application with Vanilla JavaScript. This template is suitable for building frontend applications with the simplicity and flexibility of JavaScript.

- React-Native expo application: A template for creating a React-Native mobile application leveraging expo. 

Choose the template that suits your project requirements and use it as a starting point.

All server templates come with functioning user models, authentication, routing and passing test's!

All React applications come prepped with a login and signup page, customize your data and add your url to send the request. Pre configured and set up with react-router-dom. They all are set up with a Navbar and Footer using popular css libraries.

## Bugs and Extra's
I am 100% certain people will find bugs. If you find bugs please add them to the issue board on the Github Repo [here](https://github.com/SSPENELOPE/projectforge-cli/issues) 

I am aware that not all templates are properly commented and as polished as I would like them to be. I am currently working on properly documenting and commenting each template to ensure each user will know how to configure it at all skill levels. This is my first NPM package so I ask that you please bear with me as I work to smooth out all the kinks. Thanks for installing my package and I hope you enjoy!

## Future Development
Coming soon

## Realease Notes
Will be adding patch notes section to the project soon 

## Documentation

For detailed instructions on how to use the ProjectForge CLI and its features, please refer to the [Github Repository](https://github.com/SSPENELOPE/projectforge-cli).

I will be adding an offical documentation page in the future

## License
Licensed under MIT
