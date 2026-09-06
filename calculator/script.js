// CALCULATOR

console.log("THIS IS A TERMINAL-BASED CALCULATOR!")

const prompt = require("prompt-sync")()
const n1 = Number(prompt("Enter the number: "))
const n2 = Number(prompt("Enter the number: "))
const Operation=prompt("What Operation would you like to do(+,-,*,/): ")

// FUNCTIONS

function add(n1 ,n2){
    c = n1+n2
    return c
}

function subtract(n1,n2){
    c = n1 -n2
    return c
}

function multiply(n1,n2){
    c= n1*n2
    return c
}

function divide(n1,n2){
    c = n1/n2
    return c
}

// MAIN CODE/OUTPUT

if(isNaN(n1)|| isNaN(n2)){
    throw new Error("Please enter a Valid number")
}

if(Operation =="+"){
    add(n1, n2)
    console.log(`The value is ${add(n1,n2)}`)
    
}
else if(Operation =="-"){
    subtract(n1,n2)
    console.log(`The value is ${subtract(n1,n2)}`)
}    

else if(Operation == "*"){
    multiply(n1,n2)
    console.log(`The value is ${multiply(n1,n2)}`)

}

else if(n1,n2){
    divide(n1,n2)
    console.log(`The value is ${divide(n1,n2)}`)
}