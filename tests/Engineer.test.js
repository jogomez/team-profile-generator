const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create Engineer with a name and age if provided valid arguments", () => {
            const engineer = new Engineer("Marie Curie", "mariec@email.com", "UCI");

            expect(engineer.name).toEqual("Marie Curie");
            expect(engineer.email).toEqual("mariec@email.com");
            expect(engineer.github).toEqual("UCI");
    });

    it("should throw an error if provided no arguments", () => {
        const cb = () => new Engineer();
        expect(cb).toThrow();
    });

    it("should throw an error if not provided an email", () => {
        const cb = () => new Engineer("Sarah", "", "UCI");
        const err = new Error("Expected parameter 'email' to be a non-empty string and contain @");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if the email does not contain @", () => {
        const cb = () => new Engineer("Sarah", "emailstring", "UCI");
        const err = new Error("Expected parameter 'email' to be a non-empty string and contain @");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Engineer(3, "email@email.com", "UCI");
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });

    it("should throw an error if 'github' is empty", () => {
        const cb = () => new Engineer("Marie Curie", "mariec@email.com", "");
        const err = new Error("Expected parameter 'github' to be a non-empty string");

        expect(cb).toThrowError(err);
    });
  });
});
