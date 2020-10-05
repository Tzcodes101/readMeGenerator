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
        type: "input-list",
        name: "license",
        message: "Select a license number:",
        choices: ["1.0", "1.1", "1.2", "1.3", "1.4"]
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
    const answers = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers);



    await writeAsync( "README.md", htmlString)
}

// function call to initialize program
init();

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
