// Enums em TypeScript
// Strings podem ter infinitos valores, o que pode causar erros difíceis de detectar.
// Arrays de booleanos também podem variar demais.
// Enums permitem enumerar explicitamente os valores válidos, facilitando a validação e segurança de tipos.
// Definição do enum Direction com valores automáticos começando em 0
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
// Variável do tipo Direction
var whichWayToArcticOcean;
// Atribuição correta sem erro de tipo
whichWayToArcticOcean = Direction.North;
// Atribuição incorreta — valor não definido no enum, causa erro de compilação
// whichWayToArcticOcean = Direction.Southeast; // ❌ Type error
// Atribuição incorreta — sintaxe errada, deve usar o prefixo Direction.
// whichWayToArcticOcean = West; // ❌ Syntax error
// Por baixo dos panos, os enums são representados como números
console.log(whichWayToArcticOcean === 0); // true, pois North é 0
// Podemos alterar a numeração inicial do enum
var DirectionStartingAt7;
(function (DirectionStartingAt7) {
    DirectionStartingAt7[DirectionStartingAt7["North"] = 7] = "North";
    DirectionStartingAt7[DirectionStartingAt7["South"] = 8] = "South";
    DirectionStartingAt7[DirectionStartingAt7["East"] = 9] = "East";
    DirectionStartingAt7[DirectionStartingAt7["West"] = 10] = "West";
})(DirectionStartingAt7 || (DirectionStartingAt7 = {}));
console.log(DirectionStartingAt7.North); // 7
console.log(DirectionStartingAt7.South); // 8
// --------------------------------------------------
// Exemplo com enum para limitar valores possíveis em um array
// --------------------------------------------------
// Array original com strings que podem conter erros de digitação
var petOnSale = 'chinchilla';
var ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50],
];
// Enum que define os pets válidos para evitar erros de digitação e valores inválidos
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
// Variável usando enum para valor seguro
var petOnSaleTS = Pet.Chinchilla;
// Array de pedidos usando tuplas com enum e número para garantir segurança de tipos
var ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50],
];
// Exemplo de uso prático
function printOrders(orders) {
    orders.forEach(function (_a) {
        var pet = _a[0], quantity = _a[1];
        console.log("Order: ".concat(Pet[pet], " x").concat(quantity));
    });
}
printOrders(ordersArrayTS);
// Output:
// Order: Rat x2
// Order: Chinchilla x1
// Order: Hamster x2
// Order: Chinchilla x50
