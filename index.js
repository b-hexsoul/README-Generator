const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository?',
    default: 'New Repo'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project',
    default: 'This is a new repo'
  },
  {
    type: 'input',
    name: 'installation',
    message: "Please list the steps on how to install this project",
    default: 'No installation'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use this project',
    default: 'Instructions coming soon'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license for this project?'
  },
  {
    type: 'confirm',
    name: 'contributing',
    message: 'Would you like others to contribute?',
    default: false
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please list any tests that were created for this application'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Any questions?'
  }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


