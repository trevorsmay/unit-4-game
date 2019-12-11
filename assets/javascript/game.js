$(document).ready(function() {

let userScore=0;
let wins=0;
let losses=0;

//max of 100 min of 10
let targetNumber = Math.floor(Math.random() * 100) + 10;  

console.log(targetNumber);

$(".random-number").text(targetNumber);

let teamValues= {};
teamValues[1] = Math.floor(Math.random() * 10) + 1;
teamValues[2] = Math.floor(Math.random() * 10) + 1;
teamValues[3] = Math.floor(Math.random() * 10) +1;
teamValues[4] = Math.floor(Math.random() * 10) +1;
console.log(teamValues);

// for (let i= 0; i< teamValues.length; i++) {
// // counter=(teamValues[i] + userScore);

// // $(".total").text(counter);

// // console.log(counter);
// };

function reset() {
    targetNumber = Math.floor(Math.random() * 100) + 10;  
    $(".random-number").text(targetNumber);
    teamValues= {};
    teamValues[1] = Math.floor(Math.random() * 10) + 1;
    teamValues[2] = Math.floor(Math.random() * 10) + 1;
    teamValues[3] = Math.floor(Math.random() * 10) +1;
    teamValues[4] = Math.floor(Math.random() * 10) +1;
    console.log(teamValues);
    userScore=0;
};

function winner() {
    alert("You won!");
    wins ++;
    $("#wins").append(wins);
    reset();
};

function loser() {
    alert("You lose!");
    losses++;
    $("#losses").append(losses);
    reset();
};

$("#team1").on("click", function(){
  userScore += teamValues[1];

    $(".total").text(userScore);
    
    if (userScore === targetNumber) {
        winner();
    } else if (userScore >= targetNumber){
        loser();
    }
    
});

$("#team2").on("click", function() {
    userScore += teamValues[2];

    $(".total").text(userScore);

    if(userScore === targetNumber) {
        winner();
    } else if 
        (userScore >= targetNumber) {
        loser();
    }
    
});

$("#team3").on("click", function() {
    userScore += teamValues[3];

    $(".total").text(userScore);

    if(userScore === targetNumber) {
        winner();
    } else if (userScore >= targetNumber){
        loser();
    }
    
});

$("#team4").on("click", function() {
    userScore += teamValues[4];

    $(".total").text(userScore);

    if(userScore === targetNumber) {
        winner();
    } else if (userScore >= targetNumber) {
        loser();
    }
});


});