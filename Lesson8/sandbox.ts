//infer as type Function
let greet = () => console.log('hello, world');

//explicitly type as Function
let greet2: Function;

greet2 = () => console.log('hello, again');

//function with an optional parameter
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
}

console.log("optional parameter - ")
add(5, 10);

//function with a default parameter
const add2 = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
}

console.log("default parameter - ")
add2(5, 10);
console.log("default parameter - ")
add2(5, 10, 30);

const minus = (a: number, b: number) => {
  return a - b;
}

//infer the type based on the return type
let result = minus(10, 7);

console.log("type based on the return type of a function")
console.log(result)

//explicitly state the return type of a function
const minus2 = (a: number, b: number): number => {
  return a - b;
}

console.log("explicitly state the return type of a function");
console.log(minus2(10, 7));

