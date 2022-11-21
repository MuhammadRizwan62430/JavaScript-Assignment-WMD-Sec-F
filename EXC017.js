/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

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

console.log("Sorry I have invited only 2 Guests");

while (Guests.length > 2) {
    console.log(Guests.pop() + ", I'm sorry I can't invite you to dinner.");

}
console.log(message, Guests[0]);
console.log(message, Guests[1]);
while (Guests.length > 0) {
    console.log(Guests.pop() + ", I'm sorry I can't invite you to dinner.");
}
console.log(Guests)
