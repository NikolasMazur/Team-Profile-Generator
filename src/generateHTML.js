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
}

// Funtion to write file and path
const generatePage = (employeesArr) => {
    fs.writeFile('./dist/MyTeam.html', generate(employeesArr), function(err, result) {
        (err) ? console.log('error', err): console.log(`Files successfully created.`);
        }
    );
};

module.exports = generatePage;