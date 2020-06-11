//infer as type Function
var greet = function () { return console.log('hello, world'); };
//explicitly type as Function
var greet2;
greet2 = function () { return console.log('hello, again'); };
//function with optional parameter
var add = function (a, b, c) {
    console.log(a + b);
};
add(5, 10);
