import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
//set two variables to type Interface
let docOne;
let docTwo;
//initialize the two variables with values that match the interface type
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
//create an array of interface type elements
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
//Typecasting
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//create an event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
