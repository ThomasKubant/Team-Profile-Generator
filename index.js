const employee = require("./lib/employee.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");
const manager = require("./lib/manager.js");
const inquirer = require("inquirer");
const Employee = require("./lib/employee.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const fs = require('fs');
let currentManager;
let employeeArr = [];
let internArr = [];
let engineerArr = [];
inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'managerID',
        message: "What is the manager's work ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the manager's office number?"
    },
    {
        type: 'list',
        name: 'userAction',
        message: 'What would you like to do now?',
        choices: ['Add Employee', 'Add Intern', 'Add Engineer', 'Finish Team']
    }
]).then(answers => {
    currentManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber, "Manager");
    if (answers.userAction == "Add Employee") {addEmployee()};
    if (answers.userAction == "Add Intern") {addIntern()};
    if (answers.userAction == "Add Engineer") {addEngineer()};
    if (answers.userAction == "Finish Team") {finishTeam(answers)};
})
var addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "What is the employee's employee ID?"
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is the employee's email address?"
        },
        {
            type: 'list',
            name: 'userAction',
            message: 'What would you like to do now?',
            choices: ['Add Employee', 'Add Intern', 'Add Engineer', 'Finish Team']
        }
    ]).then(answers => {
        let newEmployee = new Employee(answers.employeeName, answers.employeeID, answers.employeeEmail);
        employeeArr.push(newEmployee);
        console.log(employeeArr);
        if (answers.userAction == "Add Employee") {addEmployee()};
        if (answers.userAction == "Add Intern") {addIntern()};
        if (answers.userAction == "Add Engineer") {addEngineer()};
        if (answers.userAction == "Finish Team") {finishTeam(answers)}
    })
}
var addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What school does the intern attend?"
        },
        {
            type: 'list',
            name: 'userAction',
            message: 'What would you like to do now?',
            choices: ['Add Employee', 'Add Intern', 'Add Engineer', 'Finish Team']
        }
    ]).then(answers => {
        let newIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        internArr.push(newIntern);
        if (answers.userAction == "Add Employee") {addEmployee()};
        if (answers.userAction == "Add Intern") {addIntern()};
        if (answers.userAction == "Add Engineer") {addEngineer()};
        if (answers.userAction == "Finish Team") {finishTeam(answers)}
    })
}
var addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerID",
            message: "What is the engineer's employee ID?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's gitHub?"
        },
        {
            type: 'list',
            name: 'userAction',
            message: 'What would you like to do now?',
            choices: ['Add Employee', 'Add Intern', 'Add Engineer', 'Finish Team']
        }
    ]).then(answers => {
        let newEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
        engineerArr.push(newEngineer);
        if (answers.userAction == "Add Employee") {addEmployee()};
        if (answers.userAction == "Add Intern") {addIntern()};
        if (answers.userAction == "Add Engineer") {addEngineer()};
        if (answers.userAction == "Finish Team") {finishTeam(answers)}
    })
}
var finishTeam = (answers) => {
    const generatePage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="src/style.css">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
    </head>
    <body>
        <header class="grid-x">
            <div class="cell">
                Teamly
            </div>
        </header>
        <div class="grid-x align-center">
            <div class="cell medium-5 card managerCard">
                <div class="card-divider">
                    <h2>${currentManager.name}</h2>
                </div>
                <ul>
                    <li><h3>Role: Manager</h3></li>
                    <li>Employee ID: ${currentManager.id}</li>
                    <li>Email Address: ${currentManager.email}</li>
                    <li>Office Number: ${currentManager.officeNumber}</li>
                </ul>
            </div>
        </div>
        <div class="grid-x align-spaced">
            <div class="cell medium-5 card">
                <div class="card-divider">
                    <h2>${employeeArr[0].name}</h2>
                </div>
                <ul>
                    <li><h3>Role: ${employeeArr[0].role}</h3></li>
                    <li>Employee ID: ${employeeArr[0].id}</li>
                    <li>Email Address: ${employeeArr[0].email}</li>
                </ul>
            </div>
            <div class="cell medium-5 card">
                <div class="card-divider">
                    <h2>${employeeArr[1].name}</h2>
                </div>
                <ul>
                    <li><h3>Role: ${employeeArr[1].role}</h3></li>
                    <li>Employee ID: ${employeeArr[1].id}</li>
                    <li>Email Address: ${employeeArr[1].email}</li>
                </ul>
            </div>
        </div>
        <div class="grid-x align-spaced">
            <div class="cell medium-5 card">
                <div class="card-divider">
                    <h2>${engineerArr[0].name}</h2>
                </div>
                <ul>
                    <li><h3>Role: ${engineerArr[0].role}</h3></li>
                    <li>Employee ID: ${engineerArr[0].id}</li>
                    <li>Email Address: ${engineerArr[0].email}</li>
                    <li>Github: ${engineerArr[0].github}</li>
                </ul>
            </div>
            <div class="cell medium-5 card">
                <div class="card-divider">
                    <h2>${internArr[0].name}</h2>
                </div>
                <ul>
                    <li><h3>Role: ${internArr[0].role}</h3></li>
                    <li>Employee ID: ${internArr[0].id}</li>
                    <li>Email Address: ${internArr[0].email}</li>
                    <li>School: ${internArr[0].school}</li>
                </ul>
            </div>
        </div>
    </body>
    `
    createFile(generatePage);
}

var createFile = (generatePage) => {
    fs.writeFile("./index.html", generatePage, function (err) {
    if (err) throw err;})
}