# PROJECT FORGE CLI

# What is this?
- This is an opensource library which aims to make project initialization easier and more user friendly. 

- The inspiration came to make this when I wanted to create a new mobile app and was annoyed at the fact that I had to use the basic npx create commands. So I decided to make templates for most common use cases that already has most of the popular and commonly used libraries installed with projects formatted in somewhat of the "correct" way. 

- These templates will also include more of the common pages(in the case of react) that includes a signup and login with the build in features to make your call. All you need to do is tweak it to your liking and input your request url. In the case of a server, it will include basic setup for database connections and routing included using Express. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

### Installing the CLI
- Clone this repo using the SSH method
- Run the `npm install` command at the root of the directory after installation (where the index.js exists). 
- From the root, in your terminal, run the command `npm install -g`, this will install the projectforge-cli globally to your machine.

### Installing the templates (for contributors)
- To install the requirements of the templates to run and test them, you should `cd templates/DESIRED TEMPLATE`, and then run the `npm install` command inside of you desired template to use. 
- You should now be able to use the `npm start` command to either fire up your server/application. 
- Template requirements may vary, you should read the README.md inside of each project to see how to run them.

## Usage
- This project will eventually be uploaded to npm as a package. Look out for future instructions on where to get this from NPM.

- For now, If you installed the CLI the right way, you should be able to call the `projectforge-cli` from any directory on you machine and choose which template to install. Watch the progress bar go and happy hacking!


## <strong>Features</strong>
## React Templates

#### As of right now there is only 1 React template which is Vanilla React. The TSX verison is currently being developed and worked on.

### <u>Vanilla React</u>
**Included Libraries:**

- **[@fortawesome/fontawesome-free](https://www.npmjs.com/package/@fortawesome/fontawesome-free):** FontAwesome icons library.
- **[@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons):** FontAwesome regular style icons.
- **[@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons):** FontAwesome solid style icons.
- **[@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome):** FontAwesome integration for React.
- **[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom):** Jest matchers for DOM.
- **[@testing-library/react](https://www.npmjs.com/package/@testing-library/react):** Testing utilities for React components.
- **[@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event):** Simulate user events for testing.
- **[bootstrap](https://www.npmjs.com/package/bootstrap):** Bootstrap CSS framework.
- **[jwt-decode](https://www.npmjs.com/package/jwt-decode):** JWT token decoder.
- **[mdb-react-ui-kit](https://www.npmjs.com/package/mdb-react-ui-kit):** Material Design Bootstrap components for React.
- **[react](https://www.npmjs.com/package/react):** React library.
- **[react-bootstrap](https://www.npmjs.com/package/react-bootstrap):** Bootstrap components built with React.
- **[react-dom](https://www.npmjs.com/package/react-dom):** React DOM package.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom):** React router library for web applications.
- **[react-scripts](https://www.npmjs.com/package/react-scripts):** Create React App scripts.
- **[react-toastify](https://www.npmjs.com/package/react-toastify):** Toast notifications for React applications.
- **[web-vitals](https://www.npmjs.com/package/web-vitals):** Web vitals monitoring.

### Scripts

- **start:** Start the development server.
- **build:** Build the application for production.
- **test:** Run tests.
- **eject:** Eject configuration from Create React App.

### ESLint Configuration

Extends the following ESLint configurations:

- react-app
- react-app/jest

### Browserslist

Specifies browser support for production and development environments.

- **Production:** >0.2%, not dead, not op_mini all
- **Development:** last 1 chrome version, last 1 firefox version, last 1 safari version


## React_Native Templates
### <u>React_Native Expo</u>
**Included Libraries:**
- **[@expo/vector-icons](https://www.npmjs.com/package/@expo/vector-icons):** Customizable icon library for Expo.
- **[@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native):** Routing and navigation for React Native apps.
- **[expo](https://www.npmjs.com/package/expo):** Tools and libraries for building and deploying React Native apps.
- **[expo-constants](https://www.npmjs.com/package/expo-constants):** Provides system information constants for Expo projects.
- **[expo-font](https://www.npmjs.com/package/expo-font):** Manage and load fonts in Expo projects.
- **[expo-linking](https://www.npmjs.com/package/expo-linking):** Deep linking and handling URLs in Expo apps.
- **[expo-router](https://www.npmjs.com/package/expo-router):** Routing library optimized for Expo projects.
- **[expo-splash-screen](https://www.npmjs.com/package/expo-splash-screen):** Splash screen API for Expo apps.
- **[expo-status-bar](https://www.npmjs.com/package/expo-status-bar):** Customizable status bar component for Expo projects.
- **[expo-system-ui](https://www.npmjs.com/package/expo-system-ui):** Access to system UI components in Expo apps.
- **[expo-web-browser](https://www.npmjs.com/package/expo-web-browser):** Launch and manage web browser instances in Expo apps.
- **[react](https://www.npmjs.com/package/react):** React library for building user interfaces.
- **[react-dom](https://www.npmjs.com/package/react-dom):** React DOM library for web applications.
- **[react-native](https://www.npmjs.com/package/react-native):** Framework for building native apps using React.
- **[react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler):** Gesture handling library for React Native.
- **[react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated):** React Native library for smooth animations.
- **[react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context):** Access to safe area insets in React Native.
- **[react-native-screens](https://www.npmjs.com/package/react-native-screens):** Native navigation primitives for React Native.
- **[react-native-web](https://www.npmjs.com/package/react-native-web):** React Native for web applications.
- **[@expo/metro-runtime](https://www.npmjs.com/package/@expo/metro-runtime):** Metro runtime for Expo projects.

#### Scripts:

- **start:** `expo start`
- **reset-project:** `node ./scripts/reset-project.js`
- **android:** `expo start --android`
- **ios:** `expo start --ios`
- **web:** `expo start --web`
- **test:** `jest --watchAll`
- **lint:** `expo lint`

#### Browserlist:
  - "production": [">0.2%", "not dead", "not op_mini all"],
  - "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]


## How to Contribute

Thank you for considering contributing to our project! We welcome contributions from everyone, regardless of their experience level. By participating in this project, you agree to abide by the [Code of Conduct](./code-of-conduct.md).

### Reporting Bugs

If you find a bug, please open an issue on our [GitHub repository](https://github.com/your-username/your-repository). Please include a detailed description of the bug, steps to reproduce it, and any relevant screenshots or error messages.

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