const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create Intern with a name and age if provided valid arguments", () => {
            const intern = new Intern("Marie Curie", "mariec@email.com", "UCI");

            expect(intern.name).toEqual("Marie Curie");
            expect(intern.email).toEqual("mariec@email.com");
            expect(intern.school).toEqual("UCI");
    });

    it("should throw an error if provided no arguments", () => {
        const cb = () => new Intern();
        expect(cb).toThrow();
    });

    it("should throw an error if not provided an email", () => {
        const cb = () => new Intern("Sarah", "", "UCI");
        const err = new Error("Expected parameter 'email' to be a non-empty string and contain @");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if the email does not contain @", () => {
        const cb = () => new Intern("Sarah", "emailstring", "UCI");
        const err = new Error("Expected parameter 'email' to be a non-empty string and contain @");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Intern(3, "email@email.com", "UCI");
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'school' is empty", () => {
        const cb = () => new Intern("Marie Curie", "mariec@email.com", "");
        const err = new Error("Expected parameter 'school' to be a non-empty string");

        expect(cb).toThrowError(err);
    });
  });
});
