const Employee = require('./employee')

class Engineer extends Employee{
    constructor(name, email, github){
    
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
          }

        super(name, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
    
}
module.exports = Engineer;