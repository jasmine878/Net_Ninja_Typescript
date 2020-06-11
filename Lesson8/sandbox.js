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
