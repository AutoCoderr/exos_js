const stringFuncs = require("../exercise-1/string");

String.prototype.ucfirst = function() {
    return stringFuncs.ucfirst(this.valueOf());
}
String.prototype.capitalize = function () {
    return stringFuncs.capitalize(this.valueOf());
}
String.prototype.camelCase = function() {
    return stringFuncs.camelCase(this.valueOf());
}
String.prototype.snake_case = function() {
    return stringFuncs.snake_case(this.valueOf());
}
String.prototype.leet = function() {
    return stringFuncs.leet(this.valueOf());
}
String.prototype.verlan = function() {
    return stringFuncs.verlan(this.valueOf());
}
String.prototype.yoda = function() {
    return stringFuncs.yoda(this.valueOf());
}
String.prototype.vig = function(code) {
    return stringFuncs.vig(this.valueOf(),code);
}
Object.prototype.prop_access = function(path) {
    return stringFuncs.prop_access(this.valueOf(),path);
}

/*console.log({
    gens: {
        prenom: "toto"
    }
}.prop_access("gens.prenom"));

console.log("julien".vig("toto"));*/