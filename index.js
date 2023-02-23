const inquirer = require('inquirer');
const fs = require('fs');

const menu_questions =
    {
        type: 'list',
        name: 'menu',
        message: 'Select an option:',
        choices: ['Add a manager', 'Add an engineer', 'Add an intern', 'Exit'],
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
        message: 'Enter the name of the engineer',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the name of the school of the engineer',
    },
]


//TODO:
//add engineer
//new enginer
//add manager 
//add intern


