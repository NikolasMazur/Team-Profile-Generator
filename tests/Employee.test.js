const Employee = require('../lib/Employee')

test("Checking Employee.js library", () => {
    expect(e.name).toBe("Jared");
    expect(e.id).toBe("1");
    expect(e.email).toBe("jared@fakemail.com")
})