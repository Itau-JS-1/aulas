// Enums numéricos x Enums de strings em TypeScript

// Até agora vimos enums baseados em números (numéricos), que são a forma padrão:
// Cada valor é um número, começando em 0 ou outro valor que você definir.
enum DirectionNumber {
  North, // 0
  South, // 1
  East, // 2
  West, // 3
}

// Exemplo de enum baseado em strings (string enums)
// Cada valor é explicitamente uma string constante.
// É boa prática usar strings em caixa alta para indicar que são constantes.
enum DirectionString {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
}

// Vantagens de usar enums baseados em strings:
// - Evita confusão com números, que podem gerar comportamento inesperado.
// - Facilita debug e logs, pois os valores são legíveis diretamente.
// - Mais explícito, melhora a clareza do código.

// ---------------------------------------------------
// Transformando o enum Pet anterior em um enum de strings
// ---------------------------------------------------

enum Pet {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA',
}

// Agora, ao usar Pet.Hamster, o valor é a string 'HAMSTER'
// Isso facilita comparações e leitura do valor direto sem precisar mapear do número.

let myPet: Pet = Pet.Chinchilla;
console.log(myPet); // Output: 'CHINCHILLA'
