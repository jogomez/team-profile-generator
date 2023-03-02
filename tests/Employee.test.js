const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create Employee with a name and age if provided valid arguments", () => {
            const employee = new Employee("Marie Curie", "mariec@email.com");

            expect(employee.name).toEqual("Marie Curie");
            expect(employee.email).toEqual("mariec@email.com");
    });

    it("should throw an error if provided no arguments", () => {
        const cb = () => new Employee();
        expect(cb).toThrow();
    });

    it("should throw an error if the email does not contain @", () => {
        const cb = () => new Employee("Sarah", "emailstring");
        const err = new Error("Expected parameter 'email' to be a non-empty string and contain @");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Employee(3, "email@email.com");
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });
  });
});
