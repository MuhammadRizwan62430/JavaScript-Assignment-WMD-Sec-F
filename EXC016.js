//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

var Guests = ["Awais", "Majid", "Asjad", "Farooq", "Sami", "Rehman"];
var message="I would like to invite you to dinner, ";
console.log(message, Guests[0]);
console.log(message, Guests[1]);
console.log(message, Guests[2]);
console.log(message, Guests[3]);
console.log(message, Guests[4]);
console.log(message, Guests[5]);

console.log(Guests[2] + " can't make it to dinner.");

Guests[2]="Usamn";
console.log(message, Guests[0]);
console.log(message, Guests[1]);
console.log(message, Guests[2]);
console.log(message, Guests[3]);
console.log(message, Guests[4]);
console.log(message, Guests[5]);

console.log("I have find  bigger table");

Guests.unshift("Faizan");
Guests.splice(3, 0, "Adnan");
console.log(message, Guests[0]);
console.log(message, Guests[1]);
console.log(message, Guests[2]);
console.log(message, Guests[3]);
console.log(message, Guests[4]);
console.log(message, Guests[5]);
console.log(message, Guests[6]);
console.log(message, Guests[7]);
