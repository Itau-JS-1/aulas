// Tipos de pratos
type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

// Objetos que implementam os tipos
const fettuccine: Pasta = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees',
};

const steak: Meat = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees',
};

// Função com type guard usando if/else
function prepareEntree(entree: Pasta | Meat) {
  if ('boil' in entree) {
    return entree.boil(); // Pasta
  } else {
    return entree.panFry(); // Meat
  }
}

// Testes
console.log(prepareEntree(fettuccine));
console.log(prepareEntree(steak));
