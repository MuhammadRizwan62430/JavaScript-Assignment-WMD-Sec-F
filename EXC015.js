//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list

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

