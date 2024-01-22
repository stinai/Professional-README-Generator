const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'username'
    },
    {
        type: 'input',
        message: ' Enter title of your project:',
        name: 'title'
    },
    {
        type: 'input',
        message: "Enter project's description:",
        name: 'description'
    },
    {
        type:'input',
        message: 'Enter what the user needs to know about contributing to this repo:',
        name: 'contribution'
    },
    {
        type:'input',
        message: 'Enter the command that needs to be run for testing:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select which license this project should use:',
        name: 'license',
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "None"
        ]
    }
];

function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFileSync(fileName, content, function(error) {
        if (error) {
            return console.log('Error writing to file');
        } else 
        console.log("Successfully wrote README!");
    });
}

function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = './assets/generated_readme/README.md';
        writeToFile(fileName, data)
    })
}

init();