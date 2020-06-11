//infer as type Function
let greet = () => console.log('hello, world');

//explicitly type as Function
let greet2: Function;

greet2 = () => console.log('hello, again');

//function with optional parameter
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
}

add(5, 10);
