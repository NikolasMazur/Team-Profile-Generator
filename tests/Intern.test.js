const Intern = require('../lib/Intern')

test("Checking Employee.js library", () => {
    const int = new Intern("John", 5, "john@fakemail.com");
    expect(int.name).toBe("John");
    expect(int.id).toBe("5");
    expect(int.email).toBe("john@fakemail.com")
})