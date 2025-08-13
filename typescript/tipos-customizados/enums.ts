// Enums em TypeScript

// Strings podem ter infinitos valores, o que pode causar erros difíceis de detectar.
// Arrays de booleanos também podem variar demais.
// Enums permitem enumerar explicitamente os valores válidos, facilitando a validação e segurança de tipos.

// Definição do enum Direction com valores automáticos começando em 0
enum Direction {
  North,
  South,
  East,
  West,
}

// Variável do tipo Direction
let whichWayToArcticOcean: Direction;

// Atribuição correta sem erro de tipo
whichWayToArcticOcean = Direction.North;

// Atribuição incorreta — valor não definido no enum, causa erro de compilação
// whichWayToArcticOcean = Direction.Southeast; // ❌ Type error

// Atribuição incorreta — sintaxe errada, deve usar o prefixo Direction.
// whichWayToArcticOcean = West; // ❌ Syntax error

// Por baixo dos panos, os enums são representados como números
console.log(whichWayToArcticOcean === 0); // true, pois North é 0

// Podemos alterar a numeração inicial do enum
enum DirectionStartingAt7 {
  North = 7,
  South,
  East,
  West,
}

console.log(DirectionStartingAt7.North); // 7
console.log(DirectionStartingAt7.South); // 8

// --------------------------------------------------
// Exemplo com enum para limitar valores possíveis em um array
// --------------------------------------------------

// Array original com strings que podem conter erros de digitação
let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50],
];

// Enum que define os pets válidos para evitar erros de digitação e valores inválidos
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula,
}

// Variável usando enum para valor seguro
let petOnSaleTS: Pet = Pet.Chinchilla;

// Array de pedidos usando tuplas com enum e número para garantir segurança de tipos
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

// Exemplo de uso prático
function printOrders(orders: [Pet, number][]) {
  orders.forEach(([pet, quantity]) => {
    console.log(`Order: ${Pet[pet]} x${quantity}`);
  });
}

printOrders(ordersArrayTS);
// Output:
// Order: Rat x2
// Order: Chinchilla x1
// Order: Hamster x2
// Order: Chinchilla x50
