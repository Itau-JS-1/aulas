// --------------------------------------------------
// Tipos Genéricos em TypeScript
// --------------------------------------------------

// Tipos genéricos permitem criar estruturas que funcionam com vários tipos,
// usando um parâmetro genérico T para representar o tipo que será usado.

// Exemplo de tipo genérico Family que pode armazenar qualquer tipo T
type Family<T> = {
  parents: [T, T]; // Tupla de dois elementos do tipo T
  mate: T; // Um único elemento do tipo T
  children: T[]; // Array de elementos do tipo T
};

// Definição de tipos específicos para usar no exemplo
type Human = { name: string; job: string };
type Dog = { name: string; tailWagSpeed: number };

// --------------------------------------------------
// Variáveis usando o tipo genérico Family com diferentes tipos T
// --------------------------------------------------

// Família de números
let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121],
};

// Família de booleanos
let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true],
};

// Família de humanos (objetos com nome e trabalho)
let aFamily: Family<Human> = {
  parents: [
    { name: 'Mom', job: 'software engineer' },
    { name: 'Dad', job: 'coding engineer' },
  ],
  mate: { name: 'Matesky', job: 'engineering coder' },
  children: [{ name: 'Babesky', job: 'none' }],
};

// Família de cachorros (objetos com nome e velocidade do balanço de cauda)
let anotherFamily: Family<Dog> = {
  parents: [
    { name: 'Momo', tailWagSpeed: 3 },
    { name: 'Dado', tailWagSpeed: 100 },
  ],
  mate: { name: 'Cheems', tailWagSpeed: 7 },
  children: [
    { name: 'Puppin', tailWagSpeed: 0.001 },
    { name: 'Puppenaut', tailWagSpeed: 0.0001 },
    { name: 'Puppenator', tailWagSpeed: 0.01 },
  ],
};
