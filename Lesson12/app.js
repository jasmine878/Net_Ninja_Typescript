//classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invoice1 = new Invoice('mario', 'work on the mario website', 250);
var invoice2 = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invoice1, invoice2);
var invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
console.log(invoices);
invoice1.client = 'yoshi';
invoice2.amount = 400;
console.log(invoice1, invoice2);
