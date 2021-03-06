//Interfaces
interface isPerson {
  name: string;
  age: number;
  speak(sentence: string): void;
  spend(amount: number): number;
}

const me: isPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  }
}

console.log(me);

//declare variable of interface type isPerson
let someone: isPerson;

//declare a parameter of interface type isPerson
const greetPerson = (person: isPerson) => {
  console.log('hello ', person.name);
}

greetPerson(me);
