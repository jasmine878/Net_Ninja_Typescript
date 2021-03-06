//classes
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invoice1 = new Invoice('mario', 'work on the mario website', 250);
const invoice2 = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invoice1, invoice2);

let invoices: Invoice[] = [];

invoices.push(invoice1);
invoices.push(invoice2);

console.log(invoices);

invoice1.client = 'yoshi';
invoice2.amount = 400;

console.log(invoice1, invoice2);
