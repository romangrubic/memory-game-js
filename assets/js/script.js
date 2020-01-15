var turnedCard = false;
var firstCard, secondCard;
var stopGame = false;

// Library with 16 cards (array) 
var library = document.querySelectorAll(".card");

// Shuffle the library 
$("#resetBoard").click(function shuffle() {
    library.forEach(card => {
        var randomNumber = Math.floor(Math.random() * 16);
        card.style.order = randomNumber;
        library.removeClass("flip");
    })
});


console.log(library)
// Function flip a card //

$(".card").click(function flipCard() {
    if (stopGame) return;
    this.classList.toggle("flip");
    if (!turnedCard) {
        turnedCard = true;
        firstCard = this;
    } else {
        turnedCard = false;
        secondCard = this;

        matchCard();
    }
});


// Does the cards match? //

function matchCard() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        console.log("Do they match? Yes! Have a cookie")

    } else {
        console.log("Do they match? No! Wait for next turn")
        stopGame = true;
        setTimeout(function () {
            firstCard.classList.toggle("flip");
            secondCard.classList.toggle("flip");
            stopGame = false;
        }, 1500)
    }
};






