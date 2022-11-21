// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
let favorite_pizza= ["fajita", "cheese", "bar-b Q", "pepperoni"];
for (let i=0; i<favorite_pizza.length; i++){
    console.log("I love " + favorite_pizza[i] + " pizza")
}
console.log("I love these pizzas because of unique taste");