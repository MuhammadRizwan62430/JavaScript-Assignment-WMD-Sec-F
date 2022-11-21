// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits= ["apples", "bananas", "oranges"];
for (let i = 0; i < favorite_fruits.length; i++) {
    if  (favorite_fruits[i]== "apples"){
        console.log("You really like " + favorite_fruits[i] +"!")
    }  if  (favorite_fruits[i]== "bananas"){
        console.log("You really like " + favorite_fruits[i] +"!")
    }  if  (favorite_fruits[i]== "oranges"){
        console.log("You really like " + favorite_fruits[i] +"!")
    }  if  (favorite_fruits[i]== "peach"){
        console.log("You really like " + favorite_fruits[i] +"!")
    }  if  (favorite_fruits[i]== "graps"){
        console.log("You really like " + favorite_fruits[i] +"!")
    }
}