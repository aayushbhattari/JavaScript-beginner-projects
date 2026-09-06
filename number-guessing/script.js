// Number-Guessing

console.log("Welcome to Number-Guessing Game!")
const prompt = require("prompt-sync")()

let play = true

while (play) {

    // Generate a new number for each new game
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Keep guessing until the number is correct
    while (true) {

        const userNumber = Number(prompt("Enter a number between 1-100: "))

        if (userNumber == randomNumber) {
            console.log("You got it 🎉")
            break
        }

        else if (userNumber < randomNumber) {
            console.log("Too Low! Try again..")
        }

        else if (userNumber > randomNumber) {
            console.log("Too High! Try again..")
        }
    }

    // Ask whether to start a new game
    const user = prompt("Do you wanna play again (y/n)?: ")

    if (user == "n") {
        play = false
    }
}