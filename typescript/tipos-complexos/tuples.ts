// Tuplas em TypeScript
// - Permitem definir arrays com múltiplos tipos específicos.
// - Também definem a ordem e o comprimento exato dos elementos.
// - Diferente de arrays normais, onde todos os elementos têm o mesmo tipo.
// - Um array comum não pode ser atribuído a uma tupla, mesmo que tenha o mesmo número de elementos.

// Exemplo de tupla:
let ourTuple: [string, number, string, boolean] = [
  'Is',
  7,
  'our favorite number?',
  false,
];

// Tupla com dois elementos string
let tup: [string, string] = ['hi', 'bye'];

// Array comum de strings
let arr: string[] = ['there', 'there'];

// Isso funciona (mesmos tipos e ordem)
tup = ['there', 'there'];

// Isso dá erro — array comum não é compatível com tupla
// tup = arr; // ❌ Type Error!

// Exemplo com função
function getUserInfo(): [string, number] {
  return ['Mateus', 21];
}

// -------------------
// Exemplo: coordenadas favoritas
// -------------------

// Tipo: número, número, string, número, número, string
let favoriteCoordinates: [number, number, string, number, number, string] = [
  40,
  43.2,
  'N',
  73,
  59.8,
  'W',
];
