//set variable type as function
let greet: Function;

//Function signature

//example 1
let greet1: (a: string, b: string) => void;

greet1 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

//example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numTwo - numTwo;
  }
}

//example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}
