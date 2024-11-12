// TODO: Include packages needed for this application Done
import inquirer from "inquirer";
import fs from "fs"
import generateMarkdown from "./utils/generateMarkdown.js"
import Choices from "inquirer/lib/objects/choices.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How to install?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage Instructions?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'contributing guidelines?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Testing Instructions',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Whats your github?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Whats your email?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'choose a license',
        choices: ["none", "MIT", "APACHE 2.0", "GPL 3.0"]
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created a REadMe file')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data)=>{
            console.log(data)
            const ReadMecontent = generateMarkdown (data)
            writeToFile("ReadMe.md",ReadMecontent)
        })
}

// Function call to initialize app
init();
