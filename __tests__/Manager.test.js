const { test, expect } = require('@jest/globals');
const Manager = require('../lib/manager.js');
test('Creates a Manager object', () => {
    const testObj = new Manager('thomas', 1, 'thomaskubant@gmail.com', 3);
    expect(testObj.name).toEqual(expect.any(String));
    expect(testObj.id).toEqual(expect.any(Number));
    expect(testObj.email).toEqual(expect.any(String));
    expect(testObj.officeNumber).toEqual(expect.any(Number));
})