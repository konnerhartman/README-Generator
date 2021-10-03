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
            message: 'Please breifly describe this project.',
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'reason',
            message: 'Why did you build this product?',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem(s) does it solve?',
        },
        {
            type: 'input',
            name: 'lesson',
            message: 'What did you learn while builing this?',
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
                'The MIT License',
                'ISC License (ISC)',
                'Open Database License (ODbL)',
                'Public Domain Dedication and License (PDDL)',
                'Mozilla Public License 2.0',
                'IBM Public License Version 1.0',
                'Eclipse Public License 1.0',
                'Apache 2.0 License',
                'The Unlicense',
            ]
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Please enter your repository name (for licensing).',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Who would you like to give credit to on this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'If any, what tests does this project include?',
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