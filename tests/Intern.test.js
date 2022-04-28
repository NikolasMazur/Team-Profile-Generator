const Intern = require('../lib/Intern')

test("Checking Employee.js library", () => {
    expect(e.name).toBe("John");
    expect(e.id).toBe("5");
    expect(e.email).toBe("john@fakemail.com")
})