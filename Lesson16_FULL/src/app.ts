import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

//set two variables to type Interface
let docOne: HasFormatter;
let docTwo: HasFormatter;

//initialize the two variables with values that match the interface type
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);

