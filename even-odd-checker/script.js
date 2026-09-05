// EVEN ODD CHECKER
console.log("This is a even-odd-checker program!")

const prompt = require("prompt-sync")()

const user = prompt("Enter the number: ")

if(isNaN(user)){
    throw new Error("Please enter a number!")
        
}
if(user%2==0){
    console.log("This is an Even number..")
}
else{
    console.log("This is an Odd number")
}