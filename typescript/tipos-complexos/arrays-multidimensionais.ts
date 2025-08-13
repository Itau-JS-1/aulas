// Arrays multidimensionais em TypeScript
// É possível criar arrays que contêm outros arrays.
// A notação segue a mesma lógica: string[][] é um array de arrays de strings.
// Cada par de colchetes [] representa um "nível" de profundidade do array.

// Exemplo simples:
let arr: string[][] = [
  ['Neo', 'Trinity'],
  ['Morpheus', 'Smith'],
];

// -------------------
// Arrays multidimensionais com tipos anotados
// -------------------

// Arrays:
let bestNumbers = [7, 77, 4];
let bestLunches = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts = [
  'scrambled eggs',
  'oatmeal',
  'tamago kake gohan',
  'any kind of soup',
];
let bestBooleans = [true, false];

// Array de arrays de strings
let bestMealPlan: string[][] = [
  bestLunches,
  bestBreakfasts,
  ['baked potato', 'mashed potato'],
];

// Array de arrays de booleanos
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];

// Array tridimensional de números
let numbersMulti: number[][][] = [
  [[1], [2, 3]],
  [[7], bestNumbers],
];
