// Interface com membros opcionais
interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  userName: string;
}

// Função que retorna o nome completo se firstName e lastName existirem
function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.userName);
}

// Testes
getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  userName: 'hotelowner304',
});

getUserName({
  firstName: 'Madeline',
  userName: 'mountainClimber',
});
