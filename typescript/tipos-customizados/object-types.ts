// Object Types em TypeScript
// São usados para descrever a estrutura de objetos, declarando os tipos das propriedades.

// Declarando uma variável com tipo objeto explícito
let aPerson: { name: string; age: number };

// Atribuições incorretas geram erro de tipo
// aPerson = { name: 'Aisle Nevertell', age: "wouldn't you like to know" }; // ❌ age deve ser number
// aPerson = { name: 'Kushim', yearsOld: 5000 }; // ❌ falta a propriedade age

// Atribuição correta
aPerson = { name: 'User McCodecad', age: 22 };

// -------------------------------------------
// Função com parâmetro anotado com object type
// -------------------------------------------
function sayHappyBirthdayWithObject(personObject: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}): void {
  let output = '';
  output += 'Happy Birthday ' + personObject.name + '! ';
  output += 'You are now ' + personObject.age + ' years old! ';
  output +=
    'Your birthday wish was to receive ' +
    personObject.giftWish +
    '. And guess what? You will ';
  if (!personObject.success) {
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

// Array de objetos com propriedades conforme o tipo esperado
let birthdayBabies: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}[] = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];

// Chamando a função para cada objeto do array
birthdayBabies.forEach(sayHappyBirthdayWithObject);
