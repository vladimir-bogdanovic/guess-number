'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // NO INPUT
  if (!guess) {
    displayMessage('no number');
    // VICTORY
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    // implementing highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // HIGH AND LOW
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('U lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //  GUESS IS TO HIGH
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'U lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //  GUESS IS TO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'U lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('start guessing');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
