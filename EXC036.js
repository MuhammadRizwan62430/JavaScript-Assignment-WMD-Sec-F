// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function T_Shirt(size,text){
    console.log("I want " + size + " size T-Shirt")
    console.log('The text print in front of T-Shirt is ' + '"' + text +'"')
}

T_Shirt(prompt("Please Enter Size of T-Shirt: Small, Medium, Large, Extra Large").toUpperCase(),prompt("Please type the Text/Massage you want to show in front of T-Shirt"))
