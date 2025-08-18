// Tipos de pets
type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

// Objetos que implementam os tipos
const siameseCat: Cat = {
  name: 'Proxie',
  run: () => 'pitter pat',
};

const bettaFish: Fish = {
  name: 'Neptune',
  swim: () => 'bubble blub',
};

// Função com type guards usando "in"
function move(pet: Cat | Fish) {
  if ('run' in pet) return pet.run(); // se for Cat
  if ('swim' in pet) return pet.swim(); // se for Fish
}

// Testes
console.log(move(siameseCat));
console.log(move(bettaFish));
