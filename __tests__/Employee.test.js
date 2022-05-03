const Employee = require ('../lib/Employee');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const employee = new Employee('Kermit The', 'Frog', 1);

test('creates a employee object', () => {
    expectToBe(employee.firstName,'Kermit The');
    expectToBe(employee.lastName, 'Frog');
    expectNum(employee.id);
    expectStr(employee.email, '@');
    expectToBe(employee.role, 'Employee');
    expectToBe(employee.icon, 'fa-thin fa-person-ski-jumping');
});

test('gets first and last name', () => {
    expectStr(employee.getName(), `${employee.firstName} ${employee.lastName}`);
});

test('gets employee ID', () => {
    expectStr(employee.getId(), `${employee.id}`);
});

test('gets email address', () => {
    expectStr(employee.getEmail(), employee.email);
});

test('gets employee role', () => {
    expectStr(employee.getRole(), employee.role);
});

test('generates the icon', () => {
    expectStr(employee.getIcon(), employee.icon);
});