// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// let size= prompt("Please Enter Size of T-Shirt: Small, Medium, Large, Extra Large").toUpperCase()
// let text= prompt("Please type the Text/Massage you want to show in front of T-Shirt")
function T_Shirt(size= "Large",text= "I  Love JavaScript"){
    console.log("I want " + size + " size T-Shirt")
    console.log('The text print in front of T-Shirt is ' + '"' +text +'"')
}

T_Shirt()
T_Shirt("small")
T_Shirt("medium")
T_Shirt("large")
T_Shirt("Extra large")
T_Shirt("small", "Thats Great")


