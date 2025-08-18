// Tipos com propriedades comuns e específicas
type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string; // Adicionado para evitar erro
};

// Função que recebe um evento do tipo Like ou Share
function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

// Teste
const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);
