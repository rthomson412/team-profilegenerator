const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const formatName = require('../utils/format.js');


const addEmployee = employeeInfo => {
    //Switch to generate string for html
    let allCards = '';
    employeeInfo.forEach(employee => {    
        
        const { firstName, lastName, id, role } = employee;
        let newEmployee = '';
        let extraInfo = '';
        switch (role) {
            case 'Manager':
                newEmployee = new Manager(formatName(firstName), formatName(lastName), id, employee.officeNumber);
                extraInfo = newEmployee.getOfficeNumber();
                break;
            case 'Engineer': 
                newEmployee = new Engineer(formatName(firstName), formatName(lastName), id, employee.github);
                extraInfo = newEmployee.getGithub();
                break;
            case 'Intern':
                newEmployee = new Intern(formatName(firstName), formatName(lastName), id, employee.school);
                extraInfo = newEmployee.getSchool();
                break;
            default:
                newEmployee = new Employee(formatName(firstName), formatName(lastName), id);
        };

        //Concatenate strings for all employees
        allCards += `
<div class="column is-one-quarter-desktop">
${newEmployee.getIcon()}
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content message is-warning">
                    <p class="title is-4 message-header">${newEmployee.getName()}</p>
                    <p class="subtitle is-6">${newEmployee.getRole()}</p>
                </div>
            </div>
            <div class="content">
                <p>${newEmployee.getId()}<br />
                ${newEmployee.getEmail()}<br />
                ${extraInfo}</p>
            </div>
        </div>
    </div>
</div>`  
    });
    return allCards;
};

const generatePage = templateData => {
    //Template HTML
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>The Team - Profiled</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <section class="hero is-success is-bold">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">My Team</h1>
                </div>
            </div>
        </section>
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
             ${addEmployee(templateData)}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = generatePage;
