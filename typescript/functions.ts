function printLengthOfText(text: string) {
  console.log(text.length);
}

printLengthOfText('string');

function triple(value: number): number {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)!}`);
}

greetTripled('Hello', 5);

function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

greet('Mateus');
greet();

function proclaim(status = 'not ready...', repeat = 0) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

function createGreeting(name?: string): string {
  return `Hello, ${name}!`;
}

const myGreeting = createGreeting('Mateus');

const createArrowGreeting = (name?: string): string =>
  `Hello, ${name || 'Anonymous'}`;

function logGreeting(name: string): void {
  console.log('(logGreeting)', `Hello ${name}`);
}

const retorno = logGreeting('João');
// Comentário
/*
  Comentário em bloco
*/
console.log('(retorno)', retorno);

/**
 * Retorna a soma de dois números
 * @param x - Primeiro número
 * @param y - Segundo número
 * @returns Soma dos dois números
 */
function getSum(x: number, y: number): number {
  return x + y;
}
