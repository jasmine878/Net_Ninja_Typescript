var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent", amount);
        return amount;
    }
};
console.log(me);
//declare variable of interface type isPerson
var someone;
//declare a parameter of interface type isPerson
var greetPerson = function (person) {
    console.log('hello ', person.name);
};
greetPerson(me);
