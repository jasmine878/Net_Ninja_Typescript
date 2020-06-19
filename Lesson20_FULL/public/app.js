import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
//Typecasting
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//unordered list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
//create an event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //use a tuple to declare element types
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//array
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
//tuples
let tuple = ['ryu', 25, true];
tuple[0] = 'ken';
tuple[1] = 30;
let student;
student = ['chun-li', 223423];
