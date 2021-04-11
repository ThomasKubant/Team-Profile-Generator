const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        
    }
    
}
module.exports = Manager;