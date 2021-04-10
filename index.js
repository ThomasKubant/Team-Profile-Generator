const employee = require("./lib/employee.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");
const manager = require("./lib/manager.js");
const inquirer = require("inquirer");
const Employee = require("./lib/employee.js");
const Intern = require("./lib/intern.js");
const Engineer = require("./lib/engineer.js");
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
]).then(({ userAction }) => {
    if (userAction == "Add Employee") {addEmployee()};
    if (userAction == "Add Intern") {addIntern()};
    if (userAction == "Add Engineer") {addEngineer()};
    if (userAction == "Finish Team") {finishTeam()};
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
        if (answers.userAction == "Finish Team") {finishTeam()}
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
        if (answers.userAction == "Finish Team") {finishTeam()}
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
        if (answers.userAction == "Finish Team") {finishTeam()}
    })
}
var finishTeam = () => {
    console.log(employeeArr);
    console.log(engineerArr);
    console.log(internArr);
}