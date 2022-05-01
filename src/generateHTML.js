const fs = require("fs");
const Employee = require("../lib/Employee");

const generate = (employeesArr) => {
    // Creates managers card information
    function getManagers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Manager") {
                managerCardsContent.push(employee[i].managerCard);
            }
        }
    }
    // Creates engineers card information
    function getEmgineers(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Engineer") {
                engineerCardsContent.push(employee[i].engineerCard);
            }
        }
    }
    // Creates inters card information
    function getInters(employee) {
        for (i = 0; i < employee.length; i++) {
            if (employee[i].role === "Intern") {
                internCardsContent.push(employee[i].internCard);
            }
        }
    }
    
    // Arrays to Hold HTML for Each Employee Card by Role
    let managerCardsContent = [];
    let engineerCardsContent = [];
    let internCardsContent = [];

    // Generate Arrays of Employee Cards
    getManagers(employeesArr);
    getEmgineers(employeesArr);
    getInters(employeesArr);

    return `
    <!DOCTYPE html>
    <HTML lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>My Team</title>
    </head>

    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>

        </main>
    </body>
    </html>`
};

// Funtion to write file and path
const generatePage = (employeesArr) => {
    fs.writeFile('./dist/MyTeam.html', generate(employeesArr), function(err, result) {
        (err) ? console.log('error', err): console.log(`Files successfully created.`);
        }
    );
};

module.exports = generatePage;