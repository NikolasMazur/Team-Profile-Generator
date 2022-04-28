const Manager = require('../lib/Manager')

test("Checking Employee.js library", () => {
    const em = new Employee("jared", 1, "jared@fakemail.com");
    expect(em.name).toBe("Jared");
    expect(em.id).toBe("1");
    expect(em.email).toBe("jared@fakemail.com")
})