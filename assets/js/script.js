// Card variables
var turnedCard = false;
var firstCard, secondCard;
var stopGame = false;
var library = document.querySelectorAll(".card");

// ---Start Time
var time = 40; // make options for 20 / 30 / 40 seconds

// --- Shuffle on loading the game page
window.onload = function () {
    flipAdd();
    matchAdd();
    randomOrder();
};

// --- Reset button
$("#resetBoard").click(function () {
    setTimer = time;
    resetFlip();
    matchedReset();
    flipBack();
    randomOrder();
    stopGame = false;
    
});
// --- Random order for cards
function randomOrder() {
    library.forEach(card => {
        var randomNumber = Math.floor(Math.random() * (library.length));
        card.style.order = randomNumber;
    });
};

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
function flipBack() {
    $("div").filter(".flip").removeClass("flip");
}

// --- Does the cards match?
function matchCard() {
    if (firstCard.dataset.image === secondCard.dataset.image) {
        console.log("Do they match? Yes! Have a cookie");
        setTimer += 5;
        flipAdd();
        matchAdd();
        allCardsMatched();

    } else {
        console.log("Do they match? No! Wait for next turn");
        setTimer -- ;
        stopGame = true;
        flipAdd();
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
var timer = setInterval(function () {
    gameTimer.innerHTML = "- Time left: " + setTimer + "sec -";
    setTimer --;
    if (setTimer <= 0) {
        gameTimer.innerHTML = "- Game over! Board is locked! Reset to try again! -";
        stopGame = true;
    }
}, 1000);

// --- Flip counter
var flipCounter = document.getElementById("flip-counter");
var flip = 0;

function resetFlip(){
    if (flip > 0) { flip = 1 };
    document.getElementById("flip-counter").innerHTML = 0;
}

function flipAdd() {
    flipCounter.innerHTML = flip;
    flip ++;
}

// --- Matched counter
var matchCounter = document.getElementById("matched-counter")
var match = 0

function matchedReset(){
    if (match > 0) { match = 1 };
    document.getElementById("matched-counter").innerHTML = 0;
}

function matchAdd() {
    matchCounter.innerHTML = match;
    match ++ ;
}

// Game finish - all matched
function allCardsMatched() {
    if (match === 9) {
        stopGame = true;
        clearInterval(timer);
        calculateScore();
    }};

// Score calculation
var score = document.getElementById("score");
var scoreNumber = "I love Dunja <3"

function calculateScore(){
    document.getElementById("score").innerHTML = scoreNumber;
}

// Sort out the SCORE rating system