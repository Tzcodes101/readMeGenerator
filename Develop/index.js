//Dependencies and var declarations
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
const writeAsync = util.promisify(fs.writeFile);

// array of questions for user to populate README.md
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please describe your project:",
        name: "description"
    },
    {   
        type: "input",
        message: "How does a user install your project?",
        name: "install"
    },
    {
        type: "input",
        message: "Please enter instructions for use:",
        name: "usage"
    },
    {
        type: "list",
        name: "license",
        message: "Select a license:",
        choices: [
            "MIT",
            "Apache",
            "lgpl_2_1",
            "MIT/Apache-2.0",
            "GPL"
        ]
        
    },
    {   
        type: "input",
        message: "Please enter project contributors:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please enter test instructions, if any:",
        name: "testInst"
    },
    {
        type: "input",
        message: "What should a user do with questions about your project?",
        name: "questions"
    },
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your e-mail:",
        name: "email"
    },

];

// function to initialize program
async function init() {
    //as user answers questions, store answers in a var
    const answers = await inquirer.prompt(questions);
    //use question answers to populate the README.md
    const htmlString = generateMarkdown(answers);


    //as user answers questions, write the answers to the README.md
    await writeAsync( "README.md", htmlString)
}

// function call to initialize program
init();


