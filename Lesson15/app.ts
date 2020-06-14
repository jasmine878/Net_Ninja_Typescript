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
