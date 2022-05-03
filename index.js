const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js')

const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Employee - first name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('(First name required.)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Employee - last name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('(Last name required.)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee - ID number:',
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('(ID number required.)');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select this employees role:',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Manager - office number:',
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log('(Office number required.)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Engingeer - Github username:',
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('(Github username required.)');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `Intern - attending school:`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Interns school required.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Add another employee?',
        default: true
    }
];

const promptUser = (employeeData) => {

    // Generate array for all employee data
    if (!employeeData) {
        employeeData = [];
    }

    return inquirer.prompt(questions)
    .then(userResponse => {

        //Send input into employee data array
        employeeData.push(userResponse);

        //Adds another employee to arrays
        if (userResponse.addEmployee) {
            return promptUser(employeeData);
        } else {
            return employeeData;
        };
    });
};

const writePage = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Team profile - page generated successfully!');
    });
};

console.log(`
Create a profile of your team: to start, add your team members...
`);

promptUser()
    .then(data => generatePage(data))
    .then(generatedHtml => writePage(generatedHtml))
    .catch(err => console.log(err));