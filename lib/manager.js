const Employee = require('./employee')

class Manager extends Employee{    

    constructor(name, email, officeNumber){

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {        
            throw new Error("Expected parameter 'office number' to be a non-negative number");

          }

        super(name, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;