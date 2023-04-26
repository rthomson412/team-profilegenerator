class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@company.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-street-view'
    };
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }


    getId() {
        return `<span class="has-text-weight-bold">ID:</span> ${this.id}`;
    };

    getEmail() {
        return `<span class="has-text-weight-bold">Email:</span> <a href="mailto:${
            this.email}" class="has-text-primary">${this.email}</a>`;
    }
    getRole() {  
        return this.role;
    }
    
    getIcon() {
        return `<i class="${this.icon}" style="font-size:80px;color:darkorange;display:flex;justify-content:center"></i>`
    }
};
module.exports = Employee;
