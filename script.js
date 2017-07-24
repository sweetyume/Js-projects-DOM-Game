var isActive = true;

// Quand on clique sur new game, réinitialise, jeu commence
function init() {
  // pour cacher le dé au début du jeu
  document.querySelector('.dice').style.display = 'none';
  // pour remettre tout à O
  document.querySelector('.currentScore').innerHTML = '0';
  document.querySelector('.totalScore').innerHTML = '0';
  document.getElementById('totalScore-player-2').innerHTML = '0';
  document.getElementById('player-1').innerHTML = "Player 1";
  document.getElementById('player-2').innerHTML = "Player 2";
  document.getElementById('player-1').removeAttribute("style");
  document.getElementById('player-2').removeAttribute("style");



}
//  Lance du dé

function rollDice() {

  var dice = Math.floor(Math.random() * 6 + 1);
  if (isActive) {
    // si dé = 1, on change de joueur
    if (dice == 1) {
      switchPlayers();
    } else {
      document.getElementById("currentScore-player-1").innerHTML =
        Number(document.getElementById("currentScore-player-1").innerHTML) + dice;
    }


  } else {
    if (dice == 1) {
      switchPlayers();
    } else {
      document.getElementById("currentScore-player-2").innerHTML =
        Number(document.getElementById("currentScore-player-2").innerHTML) + dice;
    }
  }
  document.getElementById('dice').src = `images/dice-${dice}.png`;
  var diceDOM = document.getElementById('dice');
  diceDOM.style.display = "block";
};
// Stocker score

function hold() {
  // var totalSum = Number(document.getElementById("currentScore-player-1").innerHTML);
  // document.getElementById('totalScore-player-1').innerHTML =
  // Number(document.getElementById("totalScore-player-1").innerHTML) + totalSum;
  // document.getElementById('currentScore-player-1').innerHTML = 0;

  if (isActive) {
    var totalSum = document.getElementById("currentScore-player-1");
    document.getElementById('totalScore-player-1').innerHTML =
      Number(document.getElementById("totalScore-player-1").innerHTML) + Number(totalSum.innerHTML);
    document.getElementById('currentScore-player-1').innerHTML = 0;
    if (Number(document.getElementById('totalScore-player-1').innerHTML) >= 100) {
      document.getElementById('player-1').innerHTML = "Winner!";
      document.getElementById('player-1').style.fontWeight = "400";
      document.getElementById('player-1').style.fontSize = "30px";
      document.getElementById('player-1').style.color = "red";

    }
    switchPlayers();
  } else {
    var totalSum2 = document.getElementById("currentScore-player-2");
    document.getElementById('totalScore-player-2').innerHTML =
      Number(document.getElementById("totalScore-player-2").innerHTML) + Number(totalSum2.innerHTML);
    document.getElementById('currentScore-player-2').innerHTML = 0;
    if (Number(document.getElementById('totalScore-player-2').innerHTML) >= 100) {
      document.getElementById('player-2').innerHTML = "Winner!";
      document.getElementById('player-2').style.fontWeight = "400";
      document.getElementById('player-2').style.fontSize = "30px";
      document.getElementById('player-2').style.color = "red";

    }
    switchPlayers();
  }

};

function switchPlayers() {
  if (isActive) {
    isActive = false;
    document.getElementById('currentScore-player-1').innerHTML = 0;
    document.querySelector('.player-1-box').classList.remove('isActive');
    document.querySelector('.player-2-box').classList.add('isActive');
    // document.querySelector('.ion-record').style.display = 'block';

    // document.getElementById('player-2').classList.add('ion-record');
    // document.getElementById('player-1').classList.remove('ion-record');


  } else {
    isActive = true;
    document.getElementById('currentScore-player-2').innerHTML = 0;
    document.querySelector('.player-2-box').classList.remove('isActive');
    document.querySelector('.player-1-box').classList.add('isActive');
    // document.querySelector('.ion-record').style.display = 'none';

    // document.getElementById('player-1').classList.add('ion-record');
    // document.getElementById('player-2').classList.remove('ion-record');

  }

};

// var diceDOM = document.getElementById('dice');
// diceDOM.style.display = "block";
// diceDOM.src = 'images/dice-' + dice + '.png';

//
// var currentScore = 0;
// document.getElementById("roll-dice-btn").addEventListener('click', rollDice());
//
// function holdScore() {
//
// }

// console.log("vous avez obtenu un " + dice " pour un score de " + score);


// randomimage = "images" +dice +".png";
// document.getElementById('dice').src=randomImage;
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
