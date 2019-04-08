$(document).ready (function() {

var userScore = 0;
var wins = 0;
var losses = 0;

//Declare the global variables.
//Randomize number ranges for computerNumber && crystals.
var targetNumber = Math.floor(Math.random() * 102) + 19;
console.log(targetNumber);

$(".random-number").text(targetNumber);



var crystalValue = {};
crystalValue[1] = Math.floor(Math.random()*12+1);
crystalValue[2] = Math.floor(Math.random()*12+1);
crystalValue[3] = Math.floor(Math.random()*12+1);
crystalValue[4] = Math.floor(Math.random()*12+1);
console.log(crystalValue);

function reset() {
    targetNumber=Math.floor(Math.random() * 102 + 19);
    $(".random-number").text(targetNumber); 
    var crystalValue = {};
    crystalValue[1] = Math.floor(Math.random()*12+1);
    crystalValue[2] = Math.floor(Math.random()*12+1);
    crystalValue[3] = Math.floor(Math.random()*12+1);
    crystalValue[4] = Math.floor(Math.random()*12+1);
    userScore= 0;
    console.log(crystalValue);
}

function winner () {
    $(".wins-losses").prepend("You Win!");
    wins ++;
    $("#wins").text(wins);
    reset();
}
// it's prepend not append.
function loser () {
    $(".wins-losses").prepend("You Loser.");
    losses ++;
    $("#losses").text(losses);
    reset();
}

$("#crystal1").on("click", function() {
    userScore += crystalValue[1];
    $(".score").text(userScore);
    if(userScore === targetNumber){
        winner();
    }
    else if (userScore > targetNumber) {
        loser();
    }
})
$("#crystal2").on("click", function() {
    $(".score").text(userScore);
    userScore += crystalValue[2];
    if(userScore === targetNumber){
        winner();
    }
    else if (userScore > targetNumber) {
        loser();
    }
})

$("#crystal3").on("click", function() {
    $(".score").text(userScore);
    userScore += crystalValue[3];
    if(userScore === targetNumber){
        winner();
    }
    else if (userScore > targetNumber) {
        loser ();
    }
})

$("#crystal4").on("click", function() {
    $(".score").text(userScore);
    userScore += crystalValue[4];
    if(userScore === targetNumber){
        winner();
    }
    else if (userScore > targetNumber) {
        loser();
    }
});


   






//still to do; add up crystal numbers till win or lose.
//add score to div
//alert You win or you lose.


});

