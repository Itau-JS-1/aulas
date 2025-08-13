var customersArray = [
    'João da Silva',
    'Marina Dias',
    'Pedro Cabral',
    123456,
    'Ian Souza',
    456789,
    'Mateus Queirós',
];
function checkCustomersArray(arr) {
    arr.map(function (el) {
        if (typeof el !== 'string') {
            console.log("Type error: ".concat(el, " should be a string!"));
        }
    });
}
function stringPush(val) {
    if (typeof val === 'string') {
        customersArray.push(val);
    }
    else {
        console.log("Cannot add ".concat(val, " -- value must be a string!"));
    }
}
checkCustomersArray(customersArray);
stringPush('New customer');
stringPush(12345);
