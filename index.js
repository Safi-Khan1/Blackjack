

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let secEl = document.querySelector("#sec-el")
let sum = 0
let cards = []
let gameOver = true

function random() {
    randomNumber = Math.ceil(Math.random() * 13)
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
function startGame() {
    if(sum < 21){
    sum = 0
    cards = []
    cardsEl.textContent = `Cards : ${cards}`
    firstNumber = random();
    secondNumber = random();
    sum = firstNumber + secondNumber
    cards = [firstNumber, secondNumber];
    randerGame()
}

}
function randerGame() {

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += ` ${cards[i]} `
    }
    sumEl.textContent = `Sum : ${sum}`
    if (sum === 21) {
        message = "You won a Blackjack";
        setTimeout(() => secEl.textContent = "You Won The Game ", 2000);
    }
    else if (sum < 21) {
        message = "Add new Card";
    }
    else {
        message = "You Lose the Game"
        setTimeout(() => secEl.textContent = "Game Over", 2000);
        gameOver = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (gameOver === true) {
        let card = random()
        cards = []
        cards.push(card)
        sum += card
        randerGame()
    }
}
