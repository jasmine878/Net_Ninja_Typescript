import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';
import { ListTemplate } from './classes/ListTemplate.js';

//Typecasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//unordered list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

//create an event listener to the form
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
})

//array
let arr = ['ryu', 25, true];

arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

//tuples

