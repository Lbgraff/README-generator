// // TODO: Include packages needed for this application
// import inquirer from "inquirer";
// import fs from "fs";
// import generateMarkdown from "./utils/generateMarkdown.js";

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = ("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter project title"
    },

    {
        type: "input",
        name: "description",
        message: "Enter project descritption"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter project installation instructions"
    },
    {
        type: "input",
        name: "testing",
        message: "Enter project testing requirements"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter project usage"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email"
    },
    {
        type: "input",
        name: "github username",
        message: "Enter github username"
    },
    {
        type: "choices",
        name: "license",
        message: "Choose project license",
        choices: ["MIT", "GPL 2.0", "APACHE", "ISC", "none"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response)
            writeToFile("README.md", response)
        })
}


// Function call to initialize app
init();
