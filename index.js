// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = (answers) =>
  `# <${answers.name}>
    ## Description
    - ${answers.motivation}
    - ${answers.reason}
    - ${answers.problem}
    - ${answers.learn}
    ## Table of Contents (Optional)
    If your README is long, add a table of contents to make it easy for users to find what they need.
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    ## Installation
    - ${answers.install}
    ## Usage
        ![alt text](assets/images/screenshot.png)
        
    ## Credits
    List your collaborators, if any, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.
    ## License
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    ---
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    ## Badges
    ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    ## How to Contribute
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.`;
inquirer
  .prompt([
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
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const readmeInfo = generateReadme(answers);
    fs.writeFile('readme.md', readmeInfo, (err) =>
      err ? console.log(err) : console.log('Successfully created readme.md!')
    );
  });



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
