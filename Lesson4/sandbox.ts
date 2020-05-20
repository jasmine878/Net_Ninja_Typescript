// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');

//cannot push a number to a string array
// names.push(3);

let numbers = [10, 20, 30, 40];

numbers.push(25);

//cannot push a string to a numbers array
// numbers.push('shaun');

let mixedArr = ['ken', 4, 'chun-li', 8, 9];

mixedArr.push('ryu');
mixedArr.push(10);
mixedArr[0] = 3;

//objects
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
}

ninja.age = 40;
ninja.name = 'ryu';

//cannot add a new property to an object
// ninja.skills = ['fighting', 'sneaking'];
