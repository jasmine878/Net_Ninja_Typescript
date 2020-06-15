import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
//set two variables to type Interface
let docOne;
let docTwo;
//initialize the two variables with values that match the interface type
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);
