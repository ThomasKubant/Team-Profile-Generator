const employee = require("./lib/employee.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");
const manager = require("./lib/manager.js");
const inquirer = require("inquirer");
inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    },
    
])