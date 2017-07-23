var dice =  document.getElementById('dice')
function rollDice() {
    currentScore ++;
    var dice = Math.floor(Math.random()*6+1);
    var score;
    if (dice == 1) {
      score = 0;
    }

    else {
      score = dice;
    }
    document.getElementById("currentScore").textContent = score;
    // document.getElementById("dice").textContent = dice;
    document.GetElementById("image").src = Dossier+Nom[Numero]


}

var currentScore = 0;
// var score = 0;

document.getElementById("roll-dice-btn").addEventListener('click', rollDice());
// console.log("vous avez obtenu un " + dice " pour un score de " + score);
randomimage = "images" +dice +".png";
document.getElementById('dice').src=randomImage;
// var Dossier = 'images';
// var Numero = 1;
// var nom = new Array;
// Nom[1] = "1.jpg"
// Nom[2] = "2.jpg"
// Nom[3] = "3.jpg"
// Nom[4] = "4.jpg"
// Nom[5] = "5.jpg"
// Nom[6] = "6.jpg"


// document.getElementById("desactiver").addEventListener("click", function () {
//     document.getElementById("hold-btn").removeEventListener("click", gamePlay());
// });


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
