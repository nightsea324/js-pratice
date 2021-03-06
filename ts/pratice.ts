// ts練習
// Hello World
function helloWorld(name: string): string {
    return `Hello world
    Hello ${name}`;
}
console.log(helloWorld('NightSea'));

// Q1
//console.log('Q1');
//export interface User {
//name: string;
//age: number;
//occupation: string;
//}

//export const users: User[] = [
//{
//name: 'Max Mustermann',
//age: 25,
//occupation: 'Chimney sweep',
//},
//{
//name: 'Kate Müller',
//age: 23,
//occupation: 'Astronaut',
//},
//];

//export function logPerson(user: User) {
//console.log(` - ${user.name}, ${user.age}`);
//}

//console.log('Users:');
//users.forEach(logPerson);

// Q2
//interface User {
//name: string;
//age: number;
//occupation: string;
//}

//interface Admin {
//name: string;
//age: number;
//role: string;
//}

//export type Person = User | Admin;

//export const persons: Person[] [> <- Person[] <] = [
//{
//name: 'Max Mustermann',
//age: 25,
//occupation: 'Chimney sweep',
//},
//{
//name: 'Jane Doe',
//age: 32,
//role: 'Administrator',
//},
//{
//name: 'Kate Müller',
//age: 23,
//occupation: 'Astronaut',
//},
//{
//name: 'Bruce Willis',
//age: 64,
//role: 'World saver',
//},
//];

//export function logPerson(user: Person) {
//console.log(` - ${user.name}, ${user.age}`);
//}

//persons.forEach(logPerson);

// Q3
//interface User {
//name: string;
//age: number;
//occupation: string;
//}

//interface Admin {
//name: string;
//age: number;
//role: string;
//}

//export type Person = User | Admin;

//export const persons: Person[] = [
//{
//name: 'Max Mustermann',
//age: 25,
//occupation: 'Chimney sweep',
//},
//{
//name: 'Jane Doe',
//age: 32,
//role: 'Administrator',
//},
//{
//name: 'Kate Müller',
//age: 23,
//occupation: 'Astronaut',
//},
//{
//name: 'Bruce Willis',
//age: 64,
//role: 'World saver',
//},
//];

//export function logPerson(person: Person) {
//let additionalInformation: string;
//if ('role' in person) {
//additionalInformation = person.role;
//} else {
//additionalInformation = person.occupation;
//}
//console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
//}

//persons.forEach(logPerson);

// Q4
//interface User {
//type: 'user';
//name: string;
//age: number;
//occupation: string;
//}

//interface Admin {
//type: 'admin';
//name: string;
//age: number;
//role: string;
//}

//export type Person = User | Admin;

//export const persons: Person[] = [
//{
//type: 'user',
//name: 'Max Mustermann',
//age: 25,
//occupation: 'Chimney sweep',
//},
//{ type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
//{ type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
//{ type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
//];

//export function isAdmin(person: Person): person is Admin {
//return person.type === 'admin';
//}

//export function isUser(person: Person):person is User {
//return person.type === 'user';
//}

//export function logPerson(person: Person) {
//let additionalInformation: string = '';
//if (isAdmin(person)) {
//additionalInformation = person.role;
//}
//if (isUser(person)) {
//additionalInformation = person.occupation;
//}
//console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
//}

//console.log('Admins:');
//persons.filter(isAdmin).forEach(logPerson);

//console.log();

//console.log('Users:');
//persons.filter(isUser).forEach(logPerson);

// Q5
//interface User {
//type: 'user';
//name: string;
//age: number;
//occupation: string;
//}

//interface Admin {
//type: 'admin';
//name: string;
//age: number;
//role: string;
//}

//export type Person = User | Admin;

//export const persons: Person[] = [
//{
//type: 'user',
//name: 'Max Mustermann',
//age: 25,
//occupation: 'Chimney sweep',
//},
//{
//type: 'admin',
//name: 'Jane Doe',
//age: 32,
//role: 'Administrator',
//},
//{
//type: 'user',
//name: 'Kate Müller',
//age: 23,
//occupation: 'Astronaut',
//},
//{
//type: 'admin',
//name: 'Bruce Willis',
//age: 64,
//role: 'World saver',
//},
//{
//type: 'user',
//name: 'Wilson',
//age: 23,
//occupation: 'Ball',
//},
//{
//type: 'admin',
//name: 'Agent Smith',
//age: 23,
//role: 'Administrator',
//},
//];

//export const isAdmin = (person: Person): person is Admin =>
//person.type === 'admin';
//export const isUser = (person: Person): person is User =>
//person.type === 'user';

//export function logPerson(person: Person) {
//let additionalInformation = '';
//if (isAdmin(person)) {
//additionalInformation = person.role;
//}
//if (isUser(person)) {
//additionalInformation = person.occupation;
//}
//console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
//}

//export function filterUsers(
//persons: Person[],
//criteria: Partial<User>
//): User[] {
//return persons.filter(isUser).filter(user => {
//const criteriaKeys = Object.keys(criteria) as (keyof User)[];
//return criteriaKeys.every(fieldName => {
//return user[fieldName] === criteria[fieldName];
//});
//});
//}

//console.log('Users of age 23:');

//filterUsers(persons, {
//age: 23,
//}).forEach(logPerson);

// Q6
//interface User {
//type: 'user';
//name: string;
//age: number;
//occupation: string;
//}

//interface Admin {
//type: 'admin';
//name: string;
//age: number;
//role: string;
//}

//export type Person = User | Admin;

//export const persons: Person[] = [
//{
//type: 'user',
//name: 'Max Mustermann',
//age: 25,
//occupation: 'Chimney sweep',
//},
//{ type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
//{ type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
//{ type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
//{ type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
//{
//type: 'admin',
//name: 'Agent Smith',
//age: 23,
//role: 'Anti-virus engineer',
//},
//];

//export function logPerson(person: Person) {
//console.log(
//` - ${person.name}, ${person.age}, ${
//person.type === 'admin' ? person.role : person.occupation
//}`
//);
//}

//export function filterPersons(
//persons: Person[],
//personType: 'admin',
//criteria: Partial<Person>
//): Admin[];
//export function filterPersons(
//persons: Person[],
//personType: 'user',
//criteria: Partial<Person>
//): User[];
//export function filterPersons(
//persons: Person[],
//personType: string,
//criteria: Partial<Person>
//): Person[] {
//return persons
//.filter(person => person.type === personType)
//.filter(person => {
//let criteriaKeys = Object.keys(criteria) as (keyof Person)[];
//return criteriaKeys.every(fieldName => {
//return person[fieldName] === criteria[fieldName];
//});
//});
//}

//export const usersOfAge23 = filterPersons(persons, 'user', { age: 23 });
//export const adminsOfAge23 = filterPersons(persons, 'admin', { age: 23 });

//console.log('Users of age 23:');
//usersOfAge23.forEach(logPerson);

//console.log();

//console.log('Admins of age 23:');
//adminsOfAge23.forEach(logPerson);

// Q7
//interface User {
//type: 'user';
//name: string;
//age: number;
//occupation: string;
//}

//interface Admin {
//type: 'admin';
//name: string;
//age: number;
//role: string;
//}

//function logUser(user: User) {
//const pos = users.indexOf(user) + 1;
//console.log(
//` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`
//);
//}

//function logAdmin(admin: Admin) {
//const pos = admins.indexOf(admin) + 1;
//console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
//}

//const admins: Admin[] = [
//{
//type: 'admin',
//name: 'Will Bruces',
//age: 30,
//role: 'Overseer',
//},
//{
//type: 'admin',
//name: 'Steve',
//age: 40,
//role: 'Steve',
//},
//];

//const users: User[] = [
//{
//type: 'user',
//name: 'Moses',
//age: 70,
//occupation: 'Desert guide',
//},
//{
//type: 'user',
//name: 'Superman',
//age: 28,
//occupation: 'Ordinary person',
//},
//];

//export function swap<U, T>(v1: T, v2: U): [U, T] {
//return [v2, v1];
//}

//function test1() {
//console.log('test1:');
//const [secondUser, firstAdmin] = swap(admins[0], users[1]);
//logUser(secondUser);
//logAdmin(firstAdmin);
//}

//function test2() {
//console.log('test2:');
//const [secondAdmin, firstUser] = swap(users[0], admins[1]);
//logAdmin(secondAdmin);
//logUser(firstUser);
//}

//function test3() {
//console.log('test3:');
//const [secondUser, firstUser] = swap(users[0], users[1]);
//logUser(secondUser);
//logUser(firstUser);
//}

//function test4() {
//console.log('test4:');
//const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
//logAdmin(firstAdmin);
//logAdmin(secondAdmin);
//}

//function test5() {
//console.log('test5:');
//const [stringValue, numericValue] = swap(123, 'Hello World');
//console.log(` - String: ${stringValue}`);
//console.log(` - Numeric: ${numericValue}`);
//}

//[test1, test2, test3, test4, test5].forEach(test => test());

// Q8
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type PowerUser = Omit<User, 'type'> &
    Omit<Admin, 'type'> & { type: 'powerUser' };

export type Person = User | Admin | PowerUser;

export const persons: Person[] = [
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

function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

function isUser(person: Person): person is User {
    return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
    return person.type === 'powerUser';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
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

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);

console.log();

console.log('Power users:');
persons.filter(isPowerUser).forEach(logPerson);
