function generateMarkdown(answers) {
  return `# ${answers.title}
  ![License Badge]((https://img.shields.io/badge/License-${answers.license}-lightblue.svg)
  
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