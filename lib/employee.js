class Employee {
   constructor(name,email){
    if (typeof name !== 'string' || !name.trim().length){
        throw new Error("Expected parameter 'name' to be a non-empty string"); 
    }

    if (typeof email !== 'string' || !email.trim().length || email.indexOf('@') < 0){
        throw new Error("Expected parameter 'email' to be a non-empty string and contain @"); 
    }

    this.name = name;
    this.id = Math.floor(Math.random() * 100000) + 1;
    this.email = email;
   }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }
}

module.exports = Employee;