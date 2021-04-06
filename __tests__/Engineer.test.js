const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/engineer.js');
test('Creates an Engineer object', () => {
    const testObj = new Engineer('thomas', 1, 'thomaskubant@gmail.com', 'ThomasKubant');
    expect(testObj.name).toEqual(expect.any(String));
    expect(testObj.id).toEqual(expect.any(Number));
    expect(testObj.email).toEqual(expect.any(String));
    expect(testObj.github).toEqual(expect.any(String));
})