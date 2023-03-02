const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create Manager with a name and age if provided valid arguments", () => {
            const manager = new Manager("Marie Curie", "mariec@email.com", Number(54));

            expect(manager.name).toEqual("Marie Curie");
            expect(manager.email).toEqual("mariec@email.com");
            expect(manager.officeNumber).toEqual(54);
    });

    it("should throw an error if provided no arguments", () => {
        const cb = () => new Manager();
        expect(cb).toThrow();
    });

    it("should throw an error if not provided an email", () => {
        const cb = () => new Manager("Sarah", "", Number(54));
        const err = new Error("Expected parameter 'email' to be a non-empty string and contain @");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if the email does not contain @", () => {
        const cb = () => new Manager("Sarah", "emailstring", Number(54));
        const err = new Error("Expected parameter 'email' to be a non-empty string and contain @");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Manager(3, "email@email.com", Number(54));
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'office number' is not a number", () => {
        const cb = () => new Manager("Marie Curie", "mariec@email.com", "45");
        const err = new Error("Expected parameter 'office number' to be a non-negative number");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'office number' is less than 0", () => {
        const cb = () => new Manager("Marie Curie", "mariec@email.com", Number(-54));
        const err = new Error("Expected parameter 'office number' to be a non-negative number");

        expect(cb).toThrowError(err);
    });
  });
});
