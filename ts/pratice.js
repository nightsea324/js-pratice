"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
// ts練習
// Hello World
function helloWorld(name) {
    return `Hello world
    Hello ${name}`;
}
console.log(helloWorld('NightSea'));
exports.persons = [
    {
        type: 'user',
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    {
        type: 'powerUser',
        name: 'Nikki Stone',
        age: 45,
        role: 'Moderator',
        occupation: 'Cat groomer',
    },
];
function isAdmin(person) {
    return person.type === 'admin';
}
function isUser(person) {
    return person.type === 'user';
}
function isPowerUser(person) {
    return person.type === 'powerUser';
}
function logPerson(person) {
    let additionalInformation = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    if (isPowerUser(person)) {
        additionalInformation = `${person.role}, ${person.occupation}`;
    }
    console.log(`${person.name}, ${person.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
console.log('Admins:');
exports.persons.filter(isAdmin).forEach(logPerson);
console.log();
console.log('Users:');
exports.persons.filter(isUser).forEach(logPerson);
console.log();
console.log('Power users:');
exports.persons.filter(isPowerUser).forEach(logPerson);
