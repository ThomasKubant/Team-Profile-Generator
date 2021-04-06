const { test, expect } = require('@jest/globals');
const Employee = require('../lib/employee.js');
test('Function to create employees', () => {
    const employee = new Employee('Thomas', 1, 'thomaskubant@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})
