//regular function
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);

  return {...obj, uid};
}

let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne);
// console.log(docOne.name);


//Generics - any type
const addUID1 = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
}

let docOne1 = addUID1({ name: 'yoshi', age: 40 });

console.log(docOne1);
console.log(docOne1.name);

let docTwo = addUID1('hello');
console.log(docTwo);


//Generics - specific type
const addUID2 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
}

let docOne2 = addUID2({ name: 'yoshi', age: 40 });

console.log(docOne2);
console.log(docOne2.name);

// let docTwo2 = addUID2('hello');
// console.log(docTwo2);


//Generics - specific type with specific properties and its types
const addUID3 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);

  return { ...obj, uid };
}

let docOne3 = addUID3({ name: 'yoshi', age: 40 });

console.log(docOne3);
console.log(docOne3.name);


//Generics with Interface
interface Resource<T> {
  uid: number;
  resouceName: string;
  data: T;
}

const docFour: Resource<string> = {
  uid: 1,
  resouceName: 'person',
  data: 'shaun'
}

const docFive: Resource<string[]> = {
  uid: 2,
  resouceName: 'shoppingList',
  data: ['bread', 'milk', 'toilet roll']
}

console.log(docFour, docFive);
