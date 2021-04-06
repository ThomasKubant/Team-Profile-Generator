const { test, expect } = require('@jest/globals');
const Intern = require("../lib/intern.js");
test('Creates an Intern object', () => {
    const testObj = new Intern('thomas', 2, 'thomaskubant@gmail.com', 'UofA');
    expect(testObj.name).toEqual(expect.any(String));
    expect(testObj.id).toEqual(expect.any(Number));
    expect(testObj.email).toEqual(expect.any(String));
    expect(testObj.school).toEqual(expect.any(String));
})