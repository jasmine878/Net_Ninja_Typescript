const anchor = document.querySelector('a');
// console.log(anchor.href);

if (anchor) {
  console.log(anchor.href);
}

const anchor1 = document.querySelector('a')!;
console.log(anchor1.href);

const form = document.querySelector('form');
const form1 = document.querySelector('.new-item-form');

//Typecasting
const form2 = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form2.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

