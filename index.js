#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import createDirectoryContents from "./createDirectoryContent.js";
const CURR_DIR = process.cwd();
import { execSync } from "child_process";
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: "project-choice",
    type: "list",
    message: "What project template would you like to generate?",
    choices: CHOICES,
  },
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else
        return "Project name may only include letters, numbers, underscores and hashes.";
    },
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectChoice = answers["project-choice"];
  const projectName = answers["project-name"];
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  fs.mkdirSync(`${CURR_DIR}/${projectName}`);

  createDirectoryContents(templatePath, projectName);

  // Define newProjectPath after the directory is created
  const newProjectPath = `${CURR_DIR}/${projectName}`;

  // Display message indicating that removing node_modules is in progress
  // process.stdout.write("Removing node_modules... ");

  // // Execute rm command
  // execSync("rm -rf node_modules", { cwd: newProjectPath });

  // // Clear the message
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);

  // Display message indicating that npm install is in progress
  process.stdout.write("Running npm install... ");

  // Execute npm install command
  execSync("npm install", { cwd: newProjectPath });

  // Clear the message
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  console.log("npm install completed.");

  console.log("Enjoy your new app, Happy Hacking");
});
