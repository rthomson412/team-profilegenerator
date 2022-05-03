const Engineer = require('../lib/Engineer');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const engineer = new Engineer('Kermit The', 'Frog', 1, 'rthomson412');

test('creates an engineer object', () => {
    expectToBe(engineer.firstName, 'Kermit The');
    expectToBe(engineer.lastName, 'Frog');
    expectNum(engineer.id);
    expectStr(engineer.email, '@');
    expectToBe(engineer.role, 'Engineer');
    expectToBe(engineer.icon, 'fa-thin fa-person-drowning');
});

test('gets first and last name', () => {
    expectStr(engineer.getName(), `${engineer.firstName} ${engineer.lastName}`);
});

test('gets employee ID', () => {
    expectStr(engineer.getId(), `${engineer.id}`);
});

test('gets email address', () => {
    expectStr(engineer.getEmail(), engineer.email);
});

test('gets employee role', () => {
    expectStr(engineer.getRole(), engineer.role);
});

test('gets github username', () => {
    expectStr(engineer.getGithub(), engineer.github);
});

test('gets engineer icon', () => {
    expectStr(engineer.getIcon(), engineer.icon);
});