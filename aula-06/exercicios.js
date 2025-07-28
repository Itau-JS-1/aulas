// 01
const book = {
  title: 'Clean Code',
  author: 'Robert C. Martin',
  pages: 464,
};

// 02
const person = new Object();
person.name = 'Ana';
person.age = 30;

// 03
const animal = {
  species: 'generic',
};

const dog = Object.create(animal);
dog.breed = 'Labrador';

// 04
let x = 10;
let y = x;

y = 20;
console.log('Valor de X:', x);

// 05
const user = {
  loggedIn: false,
};

const admin = user;
admin.loggedIn = true;

console.log('User loggedIn:', user.loggedIn);

// 06
const a = [1, 2, 3];
const b = a;
b.push(4);

console.log('Valor de A:', a);
