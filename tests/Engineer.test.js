const Engineer = require('../lib/Engineer')

test("Checking Employee.js library", () => {
    const en = new Engineer("Tammer", 4, "tammer@fakemail.com");
    expect(en.name).toBe("Tammer");
    expect(en.id).toBe("4");
    expect(en.email).toBe("tammer@fakemail.com")
})