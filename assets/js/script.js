var turnedCard = false;
var firstCard, secondCard;


// Function flipCard

$(".memory-card").click(function () {
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

function matchCard() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        console.log("Do they match? yes")

    } else {
        console.log("Do they match? no")
        setTimeout(function () {
            firstCard.classList.toggle("flip")
            secondCard.classList.toggle("flip")
        }, 1000)
    }
};

