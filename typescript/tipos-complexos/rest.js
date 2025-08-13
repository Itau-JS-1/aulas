function smush(firstString) {
    var otherStrings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStrings[_i - 1] = arguments[_i];
    }
    var output = firstString;
    for (var i = 0; i < otherStrings.length; i++) {
        output = output.concat(otherStrings[i]);
    }
    return output;
}
var result = smush('Mateus', ['Marcos', 'Lucas', 'João']);
console.log(result);
