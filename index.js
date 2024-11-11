// TODO: Include packages needed for this application Done
import inquirer from "inquirer";
import fs from "fs"
import generateMarkdown from "./utils/generateMarkdown.js"
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title?',
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
