// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");
const path = require('path');

// Inquirer questions
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'reason',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What are the steps to install your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license that applies to your project',
      choices: ['Apache', 'Boost', 'MIT', 'GNU', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email:',
    },
    
  ]
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      writeToFile("./README.md", generateMarkdown({ ...answers }));
    })
}

// Function call to initialize app
init();
