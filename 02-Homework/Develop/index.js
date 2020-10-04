const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        message: "What is the title of your project?",
        name: "title"
    },
    {
        message: "Please describe your project:",
        name: "description"
    },
    {
        message: "How does a user install your project?",
        name: "installation"
    },
    {
        message: "Please enter instructions for use:",
        name: "usage"
    },
    {
        message: "What is your project's liscense number?",
        name: "liscense"
    },
    {
        message: "Please enter contribution guidelines",
        name: "contributing"
    },
    {
        message: "Please enter test instructions:",
        name: "testInst"
    },
    {
        message: "Please enter answers to common questions:",
        name: "questions"
    }

];

// function to initialize program
async function init() {
    const answers = await inquirer.prompt(questions);
    const htmlString = generateMarkdown(answers);



    await writeAsync(answers.name + ".md", htmlString)
}

// function call to initialize program
init();
