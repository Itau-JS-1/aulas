// --- Erros comuns no JS sem tipagem (detectados só em runtime)
var obj = { width: 10, height: 15 };
// Erro de digitação: "heigth" não existe → NaN
// const area = obj.width * obj.heigth;
// console.log('Área:', area); // NaN
// --- Verificando tipo e métodos disponíveis
var message = 'HELLO';
// Só funciona se message for string
if (typeof message === 'string') {
    console.log(message.toLowerCase()); // hello
}
// Só funciona se message for uma função
if (typeof message === 'function') {
    message(); // executaria a função
}
// --- Inferência de tipos em variáveis
var order = 'first'; // TS infere que é string
// order = 1; // ❌ Erro: number não é atribuível a string
// --- Tipos ajudam a detectar erros de digitação
var firstName = 'muriel!';
// Métodos válidos de string
console.log(firstName.toUpperCase()); // MURIEL!
console.log(firstName.length); // 7
// Métodos inválidos (TS aponta erro)
// console.log(firstName.toUppercase()); // ❌
// console.log(firstName.lenght);        // ❌
// --- Tipo any (evita checagem de tipo)
var guess; // Tipo inferido como any
guess = 'blue'; // válido
guess = 42; // válido, mas perigoso
// --- Tipagem explícita
var phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
}
else {
    phoneNumber = '7167762323';
}
console.log('Telefone:', phoneNumber);
// --- Todos os exemplos acima funcionam com TypeScript
// TS ajuda a evitar erros comuns antes da execução
