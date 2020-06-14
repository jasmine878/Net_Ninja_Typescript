"use strict";
var anchor = document.querySelector('a');
// console.log(anchor.href);
if (anchor) {
    console.log(anchor.href);
}
var anchor1 = document.querySelector('a');
console.log(anchor1.href);
var form = document.querySelector('form');
var form1 = document.querySelector('.new-item-form');
//Typecasting
var form2 = document.querySelector('.new-item-form');
console.log(form2.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//create an event listener to the form
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
