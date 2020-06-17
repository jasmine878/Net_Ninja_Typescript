var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//regular function
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
// console.log(docOne.name);
//Generics - any type
var addUID1 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne1 = addUID1({ name: 'yoshi', age: 40 });
console.log(docOne1);
console.log(docOne1.name);
var docTwo = addUID1('hello');
console.log(docTwo);
