// Tipos de recicláveis
type Metal = {
  magnetize: () => string;
};

type Glass = {
  melt: () => string;
};

// Objetos que implementam os tipos
const iron: Metal = {
  magnetize: () => 'Electromagnet activated',
};

const bottle: Glass = {
  melt: () => 'Furnace set to 2,700 degrees',
};

// Função com type guard sem else
function recycle(trash: Metal | Glass) {
  if ('magnetize' in trash) {
    return trash.magnetize(); // Metal
  }

  return trash.melt(); // Glass
}

// Testes
console.log(recycle(iron));
console.log(recycle(bottle));
