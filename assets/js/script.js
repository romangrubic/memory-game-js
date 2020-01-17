// Card variables
var turnedCard = false;
var firstCard, secondCard;
var stopGame = false;
var library = document.querySelectorAll(".card");

// --- Shuffle on loading the game page
window.onload = function () {
    flipAdd();
    matchAdd();
    randomOrder();
    flipBack();
    stopGame = true;    
};

// --- Play/Reset button
$("#resetBoard").click(function () {  
    resetFlip();
    resetMatchedCounter();
    resetScore();
    flipBack();
    randomOrder();
    if(timer > 0) {timer = 1};
    startTime();
    stopGame = false;
    document.getElementById("resetBoard").disabled = true;

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
        flipAdd();
        matchAdd();
        scoreNumber += 10;
        allCardsMatched();        
        
    } else {
        console.log("Do they match? No! Wait for next turn");
        stopGame = true;
        flipAdd();
        scoreNumber -= 2;
        setTimeout(function () {
            firstCard.classList.toggle("flip");
            secondCard.classList.toggle("flip");
            stopGame = false;
            }, 1500)
    }
};

// --- Timer   
var timeCounter = document.getElementById("timeCounter");
var timer = 1;

var startStop = false;

function startTime(){
elapsedTime = setInterval(function () {
    timeCounter.innerHTML ="- Time: " + timer + " sec -"
  timer++;
}, 1000)};   

function stopTime(){
    clearInterval(elapsedTime);
}

// --- Flip counter
var flipCounter = document.getElementById("flip-counter");
var flip = 0;

function resetFlip() {
    if (flip > 0) { flip = 1 };
    document.getElementById("flip-counter").innerHTML = 0;
}

function flipAdd() {
    flipCounter.innerHTML = flip;
    flip++;
}

// --- Matched counter
var matchCounter = document.getElementById("matched-counter")
var match = 0

function resetMatchedCounter() {
    if (match > 0) { match = 1 };
    document.getElementById("matched-counter").innerHTML = 0;
}

function matchAdd() {
    matchCounter.innerHTML = match;
    match++;
}

// Game finish - all matched
function allCardsMatched() {
    if (match === 9) {
        stopTime();
        calculateScore();
        stopGame = true;
        document.getElementById("resetBoard").disabled = false;
    }
};

// Score calculation
var score = document.getElementById("score");
var scoreNumber = 0

function resetScore() {
    if (scoreNumber > 0) { scoreNumber = 0 };
    document.getElementById("score").innerHTML = "Finish to reveal your score!" ;
}

function calculateScore() {
    document.getElementById("score").innerHTML = "Your score is " + (Math.floor(((scoreNumber * 7) / timer) * 20)) + "!";
};