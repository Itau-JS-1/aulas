// ------------------------------------------------------
// Type Aliases em TypeScript
// ------------------------------------------------------

// Permitem criar um “apelido” para tipos, evitando repetição e deixando o código mais limpo.

// Exemplo simples: alias para string
type MyString = string;
let myVar: MyString = 'Hi'; // válido

// Exemplo mais complexo: tipos compostos por outros tipos
type PersonType = {
  name: string;
  age: number;
};

type CompanyType = {
  companyName: string;
  boss: PersonType;
  employees: PersonType[];
  employeeOfTheMonth: PersonType;
  moneyEarned: number;
};

let aCompany: CompanyType;

// ------------------------------------------------------
// Aplicando alias ao exemplo da função de aniversário
// ------------------------------------------------------

// Tipo para os objetos de pessoas que receberão os parabéns
interface BirthdayPerson {
  name: string;
  giftWish: string;
  age: number;
  success: boolean;
}

// Função com parâmetro tipado com o alias BirthdayPerson
function sayHappyBirthdayWithObject(personObject: BirthdayPerson): void {
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

// Array tipado com o alias BirthdayPerson[]
let birthdayBabies: BirthdayPerson[] = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];

// Chamando a função para cada pessoa do array
birthdayBabies.forEach(sayHappyBirthdayWithObject);
