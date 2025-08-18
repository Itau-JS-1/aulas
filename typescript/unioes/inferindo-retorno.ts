// Tipo User
type User = {
  id: number;
  username: string;
};

// Função que pode retornar User ou string
function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' }; // retorna User
  } else {
    return 'Could not create a user.'; // retorna string
  }
}

// Variável com tipo explícito inferido do retorno
const userData: string | User = createUser();

console.log(userData);
