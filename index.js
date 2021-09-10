// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const markdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the documents Title Name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Users Email?",
    } ,
    {
        type: "input",
        name: "description",
        message: "What is the description?",
    },
    {
        type: "input",
        name: "table of contents",
        message: "Define the contents",
    },
    {
        type: "input",
        name: "installtion",
        message: "What type installations?",
    },
    {
        type: "input",
        name: "liscense",
        message: "What type of license used?",
    },
    {
        type: "input",
        name: "contributing",
        message: "The contribution?",
    },
    {
        type: "input",
        name: "tests",
        message: "What is the tests?",
    },
    {
        type: "input",
        name: "questions",
        message: "What is the questions?",
    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log(answers)
        writeToFile("readME.md",markdown({...answers}))
    })
}

// Function call to initialize app
init();

