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
