const array = ['a', 'b', 'c', 'd', 'e'];

// 1. Função nomeada vs função anônima atribuída a variável
function ola() {
  console.log('Olá!');
}

const olaAnonima = function () {
  console.log('Olá, sou anônima!');
};

console.log('1. Função nomeada e função anônima atribuída:');
ola();
olaAnonima();

// 2. Funções anônimas precisam estar associadas para serem usadas
const soma = function (a, b) {
  return a + b;
};

console.log('\n2. Função anônima atribuída a variável soma:');
console.log('soma(2, 3) =', soma(2, 3));

// 3. Arrow function equivalente à função anônima soma
const somaArrow = (a, b) => a + b;

console.log('\n3. Arrow function somaArrow:');
console.log('somaArrow(2, 3) =', somaArrow(2, 3));

// 4. Mostrar função anônima sem executar e executando
const func = (x) => x * 2;

console.log('\n4. Mostrando a função func:');
console.log(func); // Mostra a definição da função
console.log('func(5) =', func(5)); // Executa a função e mostra o resultado

// 5. Usando função anônima com forEach para iterar array
console.log('\n5. Iterando array com função anônima e forEach:');
array.forEach(function (item, index) {
  console.log(`Item: ${item}, Index: ${index}`);
});
