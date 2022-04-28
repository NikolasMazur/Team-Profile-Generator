const Engineer = require('../lib/Engineer')

test("Checking Employee.js library", () => {
    expect(e.name).toBe("Tammer");
    expect(e.id).toBe("4");
    expect(e.email).toBe("tammer@fakemail.com")
})