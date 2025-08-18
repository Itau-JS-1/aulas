// Exemplos de uniões em arrays
const dateNumber = new Date().getTime(); // retorna number
const dateString = new Date().toString(); // retorna string

const timesList: (string | number)[] = [dateNumber, dateString];
console.log(timesList);

// Exercício: função com tipo explícito no parâmetro
function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

// Teste
const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);
