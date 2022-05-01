const inquirer = require("inquirer");
const fs = require("fs");

// Employee classes
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

// Prompt for creating engineer
const addEngineer = async () => {
    const { name, id, email, github, addEmployee } = await inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the engineer's name? (Required)",
          validate: validateName
        },
        {
          type: "input",
          name: "id",
          message: "What is the engineer's ID? (Required)",
          validate: validateId
        },
        {
          type: "input",
          name: "email",
          message: "What is the engineer's email? (Required)",
          validate: validateEmail
        },
        {
          type: "input",
          name: "github",
          message: "What's your engineer's GitHub username?",
          validate: (githubInput_1) => {
            if (githubInput_1) {
              return true;
            } else {
              console.log("Please enter the engineer's GitHub username!");
              return false;
            }
          },
        },
        {
          type: "confirm",
          name: "addEmployee",
          message: "Do you want to add another employee?",
          default: "true",
        },
      ]);
    employeesArr.push(new Engineer(name, id, email, github));
    if (addEmployee) {
      return addUser();
    }
    return employeesArr;
};

const addIntern = async () => {
    const { name, id, email, school, addEmployee } = await inquirer
        .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the intern's name? (Required)",
              validate: (nameInput) => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Enter intern's name.");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "id",
              message: "What is the intern's ID? (Required)",
              validate: (idInput) => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Enter intern's ID.");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "email",
              message: "What is the intern's email? (Required)",
              validate: (emailInput) => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Enter intern's email.");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "school",
              message: "What's your intern's school?",
              validate: (schoolInput_1) => {
                if (schoolInput_1) {
                  return true;
                } else {
                  console.log("Enter the intern's school.");
                  return false;
                }
            },
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Do you want to add another employee?",
            default: "true",
        },
       ]);
    employeesArr.push(new Intern(name, id, email, school));
    if (addEmployee) {
       return addUser();
    }
    return employeesArr;
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