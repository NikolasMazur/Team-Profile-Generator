const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const start = async () => {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "startUp",
        message: "What would you like to do?",
        choices: ["Add a team", "Close"],
      },
    ]);
    // Switch to either start team or close application
    switch (answer.menu) {
        case "Add a team":
          return addManager();
        case "Close":
          console.log("Application closed.");
          break;
      }
};