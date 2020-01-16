// Card variables
var turnedCard = false;
var firstCard, secondCard;
var stopGame = false; 
var library = document.querySelectorAll(".card");

// --- Shuffle on loading the game page
window.onload = function(){
    flipAdd();
    library.forEach(card => {   
        var randomNumber = Math.floor(Math.random() * (library.length));     
        card.style.order = randomNumber;
        
})
};

// --- Shuffle the library via the reset button and reset Timer
$("#resetBoard").click(function() {
    setTimer = time;
    document.getElementById("flip-counter").innerHTML = flip;
    stopGame = false;
    library.forEach(card => {   
        var randomNumber = Math.floor(Math.random() * (library.length));     
        card.style.order = randomNumber;
        flipBack();      
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
        flipAdd();

    } else {
        console.log("Do they match? No! Wait for next turn");
        setTimer -= 1;
        stopGame = true;
        flipAdd();
        setTimeout(function () {
            firstCard.classList.toggle("flip");
            secondCard.classList.toggle("flip");
            stopGame = false;
        }, 1500)
    }
}; 


// ---Start Time
var time = 20; // make options for 20 / 30 / 40 seconds

// --- Timer 
var gameTimer = document.getElementById("game-timer");
var setTimer = time;
var timer = setInterval(function(){    
  gameTimer.innerHTML = setTimer + "sec";
  setTimer -= 1;
  if(setTimer <= 0){
    gameTimer.innerHTML = "- Game over! Board is locked! Reset to try again! -";
    stopGame = true;
  }
}, 1000);

// --- Flip counter
var flip = 0;
var flipCounter = document.getElementById("flip-counter");
var flipTotal = flip;


function flipAdd(){
    flipCounter.innerHTML = flipTotal + " flips";
    flipTotal += 1;
}

