// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color = prompt("Enter Alien Color: Green, Orange, Red, Sky, Yellow, White, Blue, Other").toLowerCase()
if (alien_color=="green"){
    console.log("You have just earned 5 points")
}
else if (alien_color=="yellow"){
    console.log("You have just earned 10 points")
}
else if (alien_color=="red"){
    console.log("You have just earned 15 points")
}
else{
    console.log("You haven't earned any point")
}