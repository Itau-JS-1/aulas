// Para anotar tipos em um array em TypeScript, existem duas formas:
// 1. Usar [] depois do tipo -> string[]
// 2. Usar a sintaxe genérica -> Array<string>
// Isso garante que apenas valores do tipo correto sejam inseridos e
// evita chamadas de métodos que não existem para aquele tipo.

// Exemplos:
// let names: string[] = ['Mateus'];
// names.push(666) // Type Error!

// -------------------
// Arrays com tipos anotados
// -------------------

// Array de números
let bestNumbers: number[] = [7, 77, 4];

// Array de strings
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];

// Outro array de strings
let bestBreakfasts: string[] = [
  'scrambled eggs',
  'oatmeal',
  'tamago kake gohan',
  'any kind of soup',
];

// Array de valores booleanos
let bestBooleans: boolean[] = [true, false];
