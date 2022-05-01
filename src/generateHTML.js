const fs = require("fs");
const Employee = require("../lib/Employee");

// Funtion to write file and path
const generatePage = (employeesArr) => {
    fs.writeFile('./dist/MyTeam.html', generate(employeesArr), function(err, result) {
        (err) ? console.log('error', err): console.log(`Files successfully created.`);
        }
    );
};

module.exports = generatePage;