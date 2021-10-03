// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./utils/generateMarkdown.js");
// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please breifly describe this prject.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the installation process (if any).',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will this project be used?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your Github Url?',
            choices: [
                'MIT',
                'ISC',
                'Open',
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Does this project include a test?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])

    .then((answers) => {
        const generateDoc = generateReadMe(answers);

        fs.writeFile('README.md', generateDoc, (err) =>
          err ? console.log(err) : console.log('Successfuly created a README!')
        );
    }
);