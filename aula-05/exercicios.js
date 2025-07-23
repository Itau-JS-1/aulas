// 01
function mostrarMensagem() {
  console.log('Olá, mundo!');
}

mostrarMensagem();

// 02
function cumprimentar(nome) {
  console.log(`Olá, ${nome}`);
}

cumprimentar('Mateus');

// 03
function cumprimentarOpcional(nome = 'Visitante') {
  console.log('Olá,', nome);
}

cumprimentarOpcional('João');
cumprimentarOpcional();

// 04
function informarPessoa(nome, idade) {
  console.log('Nome:', nome, 'Idade:', idade);
}
informarPessoa('Lucas', 40);
informarPessoa(40, 'Lucas');

// 05
function mostrarMensagem(texto = 'Oi', usuario = 'Anonimo') {
  console.log(`${texto}, ${usuario}!`);
}
mostrarMensagem(undefined, 'Marcos');

// 06
function criarProduto({ nome = 'Produto', preco = 0, disponivel = true }) {
  console.log('Nome:', nome, 'Preço:', preco, 'Disponível:', disponivel);
}
criarProduto({});
