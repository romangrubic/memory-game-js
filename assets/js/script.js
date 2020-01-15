var turnedCard = false;
var firstCard, secondCard;
var stopGame = false; 
var library = document.querySelectorAll(".card");

//Shuffle on loading the game page
window.onload = function(){
    library.forEach(card => {   
        var randomNumber = Math.floor(Math.random() * 16);     
        card.style.order = randomNumber;
})
};

// Shuffle the library via the reset button 
$("#resetBoard").click(function() {
    library.forEach(card => {   
        var randomNumber = Math.floor(Math.random() * 16);     
        card.style.order = randomNumber;
    $("div").filter(".flip").removeClass("flip");      
    })
});

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