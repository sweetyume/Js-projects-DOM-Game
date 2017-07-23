
function gamePlay() {
    currentScore ++;
    var dice = Math.floor(Math.random()*6+1);
    var dice2 = Math.floor(Math.random()*6+1);
    var score;
    if (dice == 1 || dice2 == 1) {
      score = 0;
    }
    else if (dice == dice2) {
      score = (dice + dice2) * 2;
    }
    else {
      score = dice + dice2;
    }

    document.getElementById("currentScore").textContent = score;
    document.getElementById("dice").textContent = dice;
    document.getElementById("dice2").textContent = dice2;

}

var currentScore = 0;
// var score = 0;

document.getElementById("gamePlay").addEventListener("click", gamePlay);

document.getElementById("desactiver").addEventListener("click", function () {
    document.getElementById("gamePlay").removeEventListener("click", clic);
});


// var dice = Math.floor(Math.random()*6+1);
// var dice2 = Math.floor(Math.random()*6+1);
// var score;
// if (dice == 1 || dice2 == 1) {
//   score = 0;
// }
// else if (dice == dice2) {
//   score = (dice + dice2) * 2;
// }
// else {
//   score = dice + dice2;
// }
//
// console.log("vous avez obtenu un " + dice + ' et un ' + dice2 + " pour un score de " + score);

// function gamePlay() {
//   var dice = Math.floor(Math.random()*6+1);
//   var dice2 = Math.floor(Math.random()*6+1);
//   var score;
//   if (dice == 1 || dice2 == 1) {
//     score = 0;
//   }
//   else if (dice == dice2) {
//     score = (dice + dice2) * 2;
//   }
//   else {
//     score = dice + dice2;
//   }
//   console.log("vous avez obtenu un " + dice + ' et un ' + dice2 + " pour un score de " + score);
//
//
// }
//
// var boutonElt = document.getElementById("btn");
// // Ajout d'un gestionnaire pour l'événement click
// boutonElt.addEventListener("click", gamePlay());
