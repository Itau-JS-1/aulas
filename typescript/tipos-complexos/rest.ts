// Parâmetros rest em TypeScript permitem que a função receba múltiplos argumentos como um array.
// Na declaração, usa-se o operador ... seguido do nome do parâmetro e tipo do array.

function smush(firstString: string, ...otherStrings: string[]): string {
  let output = firstString;
  for (let i = 0; i < otherStrings.length; i++) {
    output = output.concat(otherStrings[i]);
  }
  return output;
}

console.log(smush('a', 'h', 'h', 'H', 'H', 'H', '!', '!')); // Resultado: ahhHHH!!

// ---------------------------------------------------
// Função que soma potências de números usando parâmetro rest
// ---------------------------------------------------

// Adicionando tipos para os parâmetros:
// p é número, numsToAdd é um array de números
// A função retorna um número
function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

// Exemplo correto de uso
addPower(1, 4, 5, 6); // Soma 4^1 + 5^1 + 6^1 = 15

// Exemplo incorreto (causa erro de tipo):
// addPower('a string', 4, 5, 6); // ❌ Erro: 'a string' não é number
