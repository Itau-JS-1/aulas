// Introdução e length
const frutas = ['banana', 'pera', 'maçã'];
console.log(frutas.length); // 3

// Spread para copiar array
const copiaFrutas = [...frutas];
console.log(copiaFrutas);

// Spread no início
const frutasInicio = ['morango', ...frutas];
console.log(frutasInicio);

// Spread no fim
const frutasFim = [...frutas, 'kiwi'];
console.log(frutasFim);

// Imutabilidade (original não muda)
console.log(frutas); // continua ['banana', 'pera', 'maçã']
