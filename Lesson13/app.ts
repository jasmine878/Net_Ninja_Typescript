//classes SHORTHAND with acess modifiers
class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

const invoice1 = new Invoice('mario', 'work on the mario website', 250);
const invoice2 = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];

invoices.push(invoice1);
invoices.push(invoice2);

invoices.forEach(invoice => {
  console.log(invoice.client, invoice.amount, invoice.format());
})
