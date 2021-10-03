// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
  ## Description
  ${answers.description}
  <br/>
  <br/>
  ${answers.motivation}
  <br/>
  <br/>
  ${answers.reason}
  <br/>
  <br/>
  ${answers.problem}
  <br/>
  <br/>
  ${answers.lesson}
  
  ## Table of Contents
  - [Description](#)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.license}
  
  ## Credits
  ${answers.credits}
  
  ## Tests
  ${answers.test}
  
  ## Questions
  Any questions can be directed to:
  <br/>
  Github: [${answers.github}](https://github.com/${answers.github})
  <br/>
  Email: ${answers.email}
`;
}

module.exports = generateMarkdown;