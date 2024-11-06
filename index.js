// TODO: Include packages needed for this application Done
import inquirer from "inquirer";
import fs from "fs"
import generateMarkdown from "./utils/generateMarkdown.js"
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data)=>{
            console.log(data)
        })
}

// Function call to initialize app
init();
