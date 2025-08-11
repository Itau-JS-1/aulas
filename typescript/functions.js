function printLengthOfText(text) {
    console.log(text.length);
}
printLengthOfText('string');
function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log("".concat(greeting, ", ").concat(triple(value)));
}
greetTripled('Hello', 5);
function greet(name) {
    if (name === void 0) { name = 'Anonymous'; }
    console.log("Hello, ".concat(name, "!"));
}
greet('Mateus');
greet();
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 0; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm ".concat(status));
    }
}
function createGreeting(name) {
    return "Hello, ".concat(name, "!");
}
var myGreeting = createGreeting('Mateus');
var createArrowGreeting = function (name) {
    return "Hello, ".concat(name || 'Anonymous');
};
function logGreeting(name) {
    console.log('(logGreeting)', "Hello ".concat(name));
}
var retorno = logGreeting('João');
console.log('(retorno)', retorno);
var obj = {
    name: 'Mateus',
    age: 21,
};
console.log(obj.dog);
