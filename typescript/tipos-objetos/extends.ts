// Exemplo de uso do extends
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const mySquare: Square = { sideLength: 10, color: 'blue' };
console.log(mySquare);

// Interface base Human
interface Human {
  name: string;
  hobbies: string[];
}

// Developer agora estende Human
interface Developer extends Human {
  code: () => void;
}

// Objeto que implementa Developer (e portanto também Human)
const me: Developer = {
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina',
  hobbies: ['Building rockets'],
};

me.code();
console.log(me.name, me.hobbies);
