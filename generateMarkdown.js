// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `[License](#license)`
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      Licensed under the ${license} license`
    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# <${data.name}>  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  ${renderLicenseBadge(data.license)}  

  ## Description  
  ### What was your motivation?  
    - ${data.motivation}  
  ### Why did you build this project?  
    - ${data.reason}  
  ### What problem does it solve?  
    - ${data.problem}  
  ### What did you learn making this project?  
    - ${data.learn}  
   
  ## Table of Contents 
  - [Installation](#installation)  
  - [Usage](#usage)  
  - [Credits](#credits)  
  - ${renderLicenseLink(data.license)}  

  ## Installation  
  ### The application will be invoked by using the following command:  
      ${data.install}  

  ## Usage  
  ![screenshot](assets/images/screenshot.png)  
      
  ## Credits  
  Contact me at: [email](${data.email} "email")  
  Github can be located at: [Github](https://github.com/${data.github} "Github")  
    
  ${renderLicenseSection(data.license)}  
  ---`;
}

module.exports = generateMarkdown;
