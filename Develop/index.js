// // Packages needed for this application
// import inquirer from "inquirer";
// import fs from "fs";
// import generateMarkdown from "./utils/generateMarkdown.js";

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Dreates an array of questions for user input
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
        name: "github",
        message: "Enter github username"
    },
    {
        type: "list",
        name: "license",
        message: "Choose project license",
        choices: ["MIT", "GPL 2.0", "APACHE", "ISC", "none"]
    },
];

// Function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(fileName,generateMarkdown(data),function(err){
        if(err) throw err;
        console.log("Your file is generated")
    })
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response)
            writeToFile("README.md", response)
        })
}


// Function call to initialize app
init();
