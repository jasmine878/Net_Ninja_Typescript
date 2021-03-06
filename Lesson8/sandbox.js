//infer as type Function
var greet = function () { return console.log('hello, world'); };
//explicitly type as Function
var greet2;
greet2 = function () { return console.log('hello, again'); };
//function with an optional parameter
var add = function (a, b, c) {
    console.log(a + b);
};
console.log("optional parameter - ");
add(5, 10);
//function with a default parameter
var add2 = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
console.log("default parameter - ");
add2(5, 10);
console.log("default parameter - ");
add2(5, 10, 30);
var minus = function (a, b) {
    return a - b;
};
//infer the type based on the return type
var result = minus(10, 7);
console.log("type based on the return type of a function");
console.log(result);
//explicitly state the return type of a function
var minus2 = function (a, b) {
    return a - b;
};
console.log("explicitly state the return type of a function");
console.log(minus2(10, 7));
