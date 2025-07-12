let homeScore = document.getElementById("homeScore")
let awayScore = document.getElementById("awayScore")
let scoreHome = 0
let scoreAway = 0

function home1Plus(){
    scoreHome += 1
    homeScore.textContent = scoreHome
}

function home2Plus(){
    scoreHome += 2
    homeScore.textContent = scoreHome
}

function home3Plus(){
    scoreHome += 3
    homeScore.textContent = scoreHome
}

function away1Plus(){
    scoreAway += 1
    awayScore.textContent = scoreAway
}

function away2Plus(){
    scoreAway += 2
    awayScore.textContent = scoreAway
}

function away3Plus(){
    scoreAway += 3
    awayScore.textContent = scoreAway
}

function resetScore(){
    homeScore.textContent = 0
    awayScore.textContent = 0
    scoreHome = 0
    scoreAway = 0
}

// Challenge Section
// Conditional .leader CSS effct //

// function scoreLeaderEffect() {
//     if 
//     else if 
//     else 
// }