const Intern = require('../lib/Intern');
const { expectToBe, expectStr, expectNum } = require('../utils/expect');

const intern = new Intern('Kermit The', 'Frog', 1, 'Hard Knocks');

test('creates an intern object', () => {
    expectToBe(intern.firstName, 'Kermit The');
    expectToBe(intern.lastName, 'Frog');
    expectNum(intern.id);
    expectStr(intern.email, '@');
    expectToBe(intern.role, 'Intern');
    expectToBe(intern.school, 'Hard Knocks');
    expectToBe(intern.icon, 'fa-thin fa-person-praying');
});

test('gets first and last name', () => {
    expectStr(intern.getName(), `${intern.firstName} ${intern.lastName}`);
});

test('gets intern ID', () => {
    expectStr(intern.getId(), `${intern.id}`);
});

test('gets email address', () => {
    expectStr(intern.getEmail(), intern.email);
});

test('gets employee role', () => {
    expectStr(intern.getRole(), intern.role);
});

test('gets college/ university', () => {
    expectStr(intern.getSchool(), intern.school);
});

test('gets intern icon', () => {
    expectStr(intern.getIcon(), intern.icon);
});