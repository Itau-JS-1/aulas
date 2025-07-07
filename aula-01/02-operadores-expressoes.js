let total = 4 * (2 + 3);
let mod = 10 % 3;

console.log(mod); // 1 (resto da divisão)

total += 10;
total += 10;
total += 10;
console.log(total);

/* Operadores de incremento/decremento */

let i = 5;
console.log(++i); // 6 -> incrementa antes
console.log(i); // 6

let j = 5;
console.log(j++); // 5 -> incrementa depois
console.log(j); // 6

/* Operadores lógicos */
let ativo = true;
console.log(!ativo); // NÃO (NOT)

console.log(true && true); // E (AND) -> todos verdadeiros

console.log(true || false); // OU (OR) -> algum verdadeiro

/* Precedência */
let resultado = 2 + 3 * 4; // 3 * 4 = 12 → 2 + 12 = 14
