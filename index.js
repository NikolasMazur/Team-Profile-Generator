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

// Prompt for creating manager profile
const addManager = async () => {
    const { name, id, email, officeNumber } = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter team manager name.",
        validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Enter manager's name.");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter team manager ID.",
        validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Enter manager's ID number.");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter team manager email address.",
        validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Enter manager's email address.");
              return false;
            }
          },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter team manager office number.",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Enter manager's office number.");
            return false;
          }
        },
      },
    ]);
    // Creates manager
    const manager = new Manager(name, id, email, officeNumber);
    employeesArr.push(manager);
    return addUser();
};

// Write information to HTML page
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
        reject(err);
        return;
    }
    resolve({
        ok: true,
        message: "File successfully created.",
    });
    });
});
};
  
function init() {
    start()
    .then((response) => {
    return generate.generatePage(response);
    })
    .then((res) => {
        writeToFile(res);
        console.log("HTML page successfully generated.");
    });
}

init();