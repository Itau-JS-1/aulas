let list = [1, 2];

// const [first, second] = list;
// console.log(first, second);

list = [1, 2, 3, 4, 5];
// const [first, second, ...others] = list;
// console.log(first, second, others);

const [, segundo, , quarto] = list;
console.log(segundo, quarto);

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);

function mostrarPrimeiros([primeiro, segundo]) {
  console.log('primeiro: ', primeiro);
  console.log('segundo: ', segundo);
}

const frutas = ['maçã', 'banana', 'pera'];
mostrarPrimeiros(frutas);
