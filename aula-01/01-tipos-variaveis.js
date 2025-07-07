42; // número
('Olá, mundo!'); // string com aspas simples
('Test'); // string com aspas duplas
true; // booleano
null; // valor nulo
undefined; // indefinido

['1', 2, 3, true]; // array

{
  nome: 'Ana';
  idade: 20;
} // objeto

// Válidos
/*
nome;
_idade;
$usuario;
quantidadeDeProdutos;
*/

// Não válidos
// 1nome // começa com número
// function // palavra reservada
// meu-nome // hífen não é permitido

/*
Olá mundo
Esse é um comentário em bloco
*/

let idade = 25; // idade é o identificador, 25 é o literal
const nome = 'Lucas'; // constante (não muda)
// nome = 'Mateus'
var ativo = true; // estilo antigo

const nomes = ['Ana', 'João'];
nomes.push('Carlos');
// nomes = [];

/* Objetos */
let pessoa = {
  nome: 'Ana',
  idade: 25,
};

let lista = [1, 2, 3, 4];

function saudacao() {
  console.log('Olá!');
}

saudacao();

/* Valor vs Referência */
let a = 10;
let b = a;
b = 20;

console.log(a);
console.log(b);

let obj1 = { nome: 'Lucas' };
let obj2 = obj1;

obj2.nome = 'João';

console.log(obj1.nome);
