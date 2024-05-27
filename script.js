'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent = '23';
// document.querySelector('.number').textContent = '10';

// document.querySelector('.guess').value = '10';
// console.log(document.querySelector('.guess').value);

//Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Initial Score
let score = 20;

//HighScore
let highScore = 0;
//Again Button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';

  //Field where the correct number will bedisplayed once the user win
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start Guessing....';
});

//Check Button
document.querySelector('.check').addEventListener('click', function () {
  //Storing the input in guess variable
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //If guess is not empty check if user choose the correct vale
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }
  if (score > 1) {
    //If user selected the correct answer
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
    //If user selected a number greater than the secret answer
    else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    //If user selected a number smaller than the secret Number
    else {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  //Message to be displayed when user won the game
  else {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent =
      'You Lost the game, you might want to restart the webpage :(';
  }
});
