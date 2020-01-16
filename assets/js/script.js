// Card variables
var turnedCard = false;
var firstCard, secondCard;
var stopGame = false; 
var library = document.querySelectorAll(".card");

// --- Time
var time = 5; // make options for 20 / 30 / 40 seconds

// --- Shuffle on loading the game page
window.onload = function(){
    library.forEach(card => {   
        var randomNumber = Math.floor(Math.random() * (library.length));     
        card.style.order = randomNumber;
})
};

// --- Shuffle the library via the reset button and reset Timer
$("#resetBoard").click(function() {
    library.forEach(card => {   
        var randomNumber = Math.floor(Math.random() * (library.length));     
        card.style.order = randomNumber;
        flipBack() 
        setTimer = time;
    })
});

// --- Flip card
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

// --- Flip it back
function flipBack(){
    $("div").filter(".flip").removeClass("flip");
}

// --- Does the cards match?
function matchCard() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        console.log("Do they match? Yes! Have a cookie");
        setTimer += 5;

    } else {
        console.log("Do they match? No! Wait for next turn");
        setTimer -= 1;
        stopGame = true;
        setTimeout(function () {
            firstCard.classList.toggle("flip");
            secondCard.classList.toggle("flip");
            stopGame = false;
        }, 1500)
    }
}; 

// --- Timer 
var gameTimer = document.getElementById("game-timer");
var setTimer = time;
var timer = setInterval(function(){    
  gameTimer.innerHTML = "Time left: "+ setTimer + "sec";
  setTimer -= 1;
  if(setTimer <= 0){
    gameTimer.innerHTML = "Game over! Board is locked! Reset to try again!";
    stopGame = true;
  }
}, 1000);
