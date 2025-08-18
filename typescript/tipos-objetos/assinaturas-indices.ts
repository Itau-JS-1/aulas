// Exemplo de assinatura de índice com SolarEclipse
interface SolarEclipse {
  [latitude: string]: boolean;
}

// Objeto de exemplo
const eclipses: SolarEclipse = {
  '40.712776': true,
  '41.203323': true,
  '40.417286': false,
};

console.log(eclipses);

// Exercício: criar interface Budget usando assinatura de índice
interface Budget {
  [item: string]: number;
}

// Função que retorna resultado de orçamento
function getResult() {
  return {
    '1.shopping': 150,
    '2.food': 210,
    '3.utilities': 100,
  };
}

// Função que usa a interface Budget
function getBudget() {
  const result: Budget = getResult(); // resultado tipado como Budget
  console.log(result);
}

getBudget();
