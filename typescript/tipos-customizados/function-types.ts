// -------------------------------------------------
// Funções atribuídas a variáveis em JS/TS
// -------------------------------------------------

// Podemos atribuir funções a variáveis, sem chamar elas (sem parênteses)
let myFavoriteFunction = console.log;
myFavoriteFunction('Hello World'); // Imprime: Hello World

// -------------------------------------------------
// Controlando o tipo da função atribuída
// -------------------------------------------------

// Tipo para funções que recebem duas strings e retornam número
type StringsToNumberFunction = (arg0: string, arg1: string) => number;

// Variável que só aceita funções do tipo StringsToNumberFunction
let myFunc: StringsToNumberFunction;

// Atribuição válida (nome dos parâmetros pode variar, desde que os tipos batam)
myFunc = function (firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function (whatever: string, blah: string) {
  return whatever.length - blah.length;
};

// -------------------------------------------------
// Exercício: Função tutor que recebe callback de operações matemáticas
// -------------------------------------------------

// Operações matemáticas simples
function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number {
  return a / b;
}
function wrongAdd(a: number, b: number): string {
  return a + b + '';
} // Retorna string, errado

// Definindo o tipo da função callback: recebe dois números e retorna número
type OperatorFunction = (a: number, b: number) => number;

// Função tutor que aceita um callback do tipo OperatorFunction
function mathTutor(operationCallback: OperatorFunction): void {
  console.log("Let's learn how to", operationCallback.name, '!');
  let value25 = operationCallback(2, 5);
  console.log(
    'When we',
    operationCallback.name,
    '2 and 5, we get',
    value25,
    '.'
  );
  console.log(
    'When we',
    operationCallback.name,
    value25,
    'and 7, we get',
    operationCallback(value25, 7),
    '.'
  );
  console.log('Now fill out this worksheet.');
}

// Chamadas válidas
mathTutor(multiply);

// Chamadas inválidas - gera erro de tipo porque wrongAdd não retorna número
// mathTutor(wrongAdd); // ❌ Erro: Argument of type '(a: number, b: number) => string' is not assignable to parameter of type 'OperatorFunction'.
