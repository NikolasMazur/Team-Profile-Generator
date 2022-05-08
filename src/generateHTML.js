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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <title>My Team</title>
    </head>

    <body>
        <header class="jumbotron">
            <div class="container">
                <div class="row align-self-center">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </header>

        <main>
            <section class='container'>
                <div class='row'>
                    ${managerCardsContent.join(" ")}
                </div>
            </section>
            <hr class='mt-1 mb-4'/>
            <section class='container'>
                <div class='row'>
                    ${engineerCardsContent.join(" ")}
                </div>
            </section>
            <hr class='mt-1 mb-4'/>
            <section class='container'>
                <div class='row'>
                    ${internCardsContent.join(" ")}
                </div>
            </section>
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