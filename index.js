const inquirer = require('inquirer');
const fs = require('fs');

const getHTML = require ('./src/template_helper')

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employeeList = [];

const MAX_MANAGERS = 1;
const MAX_ENGINEERS = 3;
const MAX_INTERNS = 3;

const htmlFilePath = "dist/index.html";

const menuChoices = {
    manager: 'Add a manager (1 max)',
    engineer: 'Add an engineer (3 max)',
    intern: 'Add an intern (3 max)',
    exit: 'Exit and generate HTML'
}

const menu_questions = {
        type: 'list',
        name: 'menu',
        message: 'Select an option:',
        choices: [menuChoices.manager, menuChoices.engineer, menuChoices.intern, menuChoices.exit],
    }

const manager_questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the manager',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the manager',
    },
    {
        type: 'input',
        name: 'office',
        message: 'Enter the number of office of the manager',
    },
]

const engineer_questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the engineer',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the engineer',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the number of github repository of the engineer',
    },
]

const intern_questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the intern',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the intern',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the name of the school of the intern',
    },
]

let employeeCounts = {
    managers: 0,
    engineers: 0,
    interns: 0
};

function init() {
    inquirer
    .prompt(menu_questions)
    .then(data => {
        deleteFile();
        console.log('employeeCounts :>> ', employeeCounts);
        //console.log('data.menu :>> ', data.menu);
        switch (data.menu){
            case menuChoices.manager:
                if (employeeCounts.managers < MAX_MANAGERS) {
                    createManager();                
                    employeeCounts.managers++;
                }
                else{
                    console.log("You have reached the limit of Managers: ", MAX_MANAGERS);
                    init();
                }
                break;
                case menuChoices.engineer:
                if (employeeCounts.engineers < MAX_ENGINEERS) {
                createEngineer();
                employeeCounts.engineers++;
                }
                else{
                    console.log("You have reached the limit of Engineers: ", MAX_ENGINEERS);
                    init();
                }
                break;
            case menuChoices.intern:
                if (employeeCounts.interns < MAX_INTERNS) {
                createIntern();
                employeeCounts.interns++;
                }
                else{
                    console.log("You have reached the limit of Interns: ", MAX_INTERNS);
                    init();
                }
                break;
            default:
                end();
        }
    });
}

function createManager(){
    inquirer
    .prompt(manager_questions)
    .then(data => {
        const myManager = new Manager(data.name, data.email, Number(data.office));
        employeeList.push(myManager);
        console.log('Manager saved:>> ', myManager);
        init(); 
    });
}

function createEngineer(){
    inquirer
    .prompt(engineer_questions)
    .then(data => {
        const myEngineer = new Engineer(data.name, data.email, data.github);
        employeeList.push(myEngineer);
        console.log('Engineer saved:>> ', myEngineer);
        init(); 
    });
    
}

function createIntern(){
    inquirer
    .prompt(intern_questions)
    .then(data => {
        const myIntern = new Intern(data.name, data.email, data.school);
        employeeList.push(myIntern);
        console.log('Intern saved :>> ', myIntern);
        init(); 
    });
}

function end(){
    const html = getHTML(employeeList);
    fs.writeFileSync(htmlFilePath, html, err => {
        if (err){
            console.error(err);
        }
        else{
            console.log('Success');
        }
    });
}

function deleteFile(){
    if (fs.existsSync(htmlFilePath)){
        try {
            fs.unlinkSync(htmlFilePath);
            console.log("File removed:", htmlFilePath);
        } 
        catch (err) {
            console.error(err);
        }
}}

init();


