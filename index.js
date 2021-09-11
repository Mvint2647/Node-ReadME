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
        name: "github",
        message: "What is the Users Github?",
    } ,
    {
        type: "input",
        name: "linkdin",
        message: "What is the Users Linkdin?",
    } ,
    {
        type: "input",
        name: "description",
        message: "What is the description of this ReadMe.md?",
    },
    {
        type: "input",
        name: "table of contents",
        message: "Define the table of contents of this ReadMe.md",
    },
    {
        type: "input",
        name: "installtion",
        message: "What type of installations were installed?",
    },
    {
        type: "input",
        name: "liscense",
        message: "What type of license are used?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Any other contribution added?",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the tests?",
        choices: [
            "functionality",
            "no test ran"
        ]
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

