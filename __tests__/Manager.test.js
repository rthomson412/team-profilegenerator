const Manager = require ('../lib/Manager');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const manager = new Manager('Kermit The', 'Frog', 1, 1);

test('creates a manager object', () => {
    expectToBe(manager.firstName,'Kermit The');
    expectToBe(manager.lastName, 'Frog');
    expectNum(manager.id);
    expectStr(manager.email, '@');
    expectToBe(manager.role, 'Manager');
    expectNum(manager.officeNumber);
    expectToBe(manager.icon, 'fas fa-users');
});

test('gets first and last name', () => {
    expectStr(manager.getName(), `${manager.firstName} ${manager.lastName}`);
});

test('gets employee ID', () => {
    expectStr(manager.getId(), `${manager.id}`);
});

test('gets email address', () => {
    expectStr(manager.getEmail(), manager.email);
});

test('gets employee role', () => {
    expectStr(manager.getRole(), manager.role);
});

test('gets manager office number', () => {
    expectStr(manager.getOfficeNumber(), `${manager.officeNumber}`);
});

test('gets manager icon', () => {
    expectStr(manager.getIcon(), manager.icon);
});