// Card variables
var turnedCard = false;
var firstCard, secondCard;
var stopGame = false;
var library = document.querySelectorAll(".card");
let numberOfGame = 0

// --- Shuffle on loading the game page
window.onload = function () {
    flipAdd();
    matchAdd();
    randomOrder();
    flipBack();
    stopGame = true;
    $("#board").hide();
    $(".counters").hide();
    $("#scoreboard").hide();
};

// --- Play/Reset button
$("#resetBoard").click(function () {
    resetFlip();
    resetMatchedCounter();
    resetScore();
    flipBack();
    randomOrder();
    if (timer > 0) { timer = 1 };
    startTime();
    stopGame = false;
    $(".head").hide();
    $("#board").show();
    $(".counters").show();
    $(".choice-btn").hide();
    $("#timeCounter").show();
    $("#score").removeClass("time-counter");
    $("#scoreboard").show();
    $(".heading").addClass("col-md-9")
    $(".list-inline").addClass("col-md-9")
    $("#score").removeClass("score");
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
        scoreNumber += 15;
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

function startTime() {
    elapsedTime = setInterval(function () {
        timeCounter.innerHTML = "- Time: " + timer + " sec -"
        timer++;
    }, 1000)
};

function stopTime() {
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
var match = 0

function resetMatchedCounter() {
    if (match > 0) { match = 1 };
    match = 0;
}

function matchAdd() {
    match++;
}

// Game finish - all matched
function allCardsMatched() {
    if (match === 8) {
        stopTime();
        calculateScore();
        stopGame = true;
        $("#resetBoard").show();
        $("#timeCounter").hide();
        $("#flip").hide();
        $("#score").addClass("score");
        numberOfGame++
        addScoreboard();
    }
};

// Score calculation
var score = document.getElementById("score");
var scoreNumber = 0

function resetScore() {
    if (scoreNumber > 0) { scoreNumber = 1 };
    document.getElementById("score").innerHTML = "Finish to reveal your score!";
}

function calculateScore() {
    document.getElementById("score").innerHTML = "Your score is " + (Math.floor(((scoreNumber * 9) / timer) * 20)) + "!";
};

/* --- Adding Scoreboard --- */
function addScoreboard() {    
    if (typeof (Storage) !== "undefined") {               
        let score = document.createElement("h4");
        score.innerHTML =[numberOfGame] + ". round: " + (Math.floor(((scoreNumber * 9) / timer) * 20)) + "pts";
        document.getElementById("scoreboard").appendChild(score);        
    } else {
        document.getElementById("scoreboard").innerHTML = "Sorry, your browser does not support web storage...";
    }
}


/* --- Submit button --- */
$("#submit").click(function () {
    $("#contactModal").modal("toggle")
});
