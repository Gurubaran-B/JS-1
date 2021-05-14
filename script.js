let score = 20;
let highscore = 0;
let random = Math.floor(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  let input = Number(document.querySelector('.guess').value);
  if (!input) 
  {
    document.querySelector('.message').textContent = 'Please enter a Number.';
  }
  else 
  {
    if (input == random) 
    {
      document.querySelector('h1').textContent = 'You Won!';
      document.querySelector('.number').textContent = `${random}`;
      document.querySelector('.message').textContent = 'Correct Answer..';
      document.querySelector('body').style.backgroundColor = 'green';
      if (score > highscore)
      {
        highscore = score;
        document.querySelector('.highscore').textContent = `${highscore}`;
      }
    }
    else if (score >= 1)
    {
      document.querySelector('.message').textContent = input > random ? 'Too high..' : 'Too low..';
      score--;
      document.querySelector('.score').textContent = `${score}`;
    }
    else
    {
      document.querySelector('h1').textContent = 'You Lost!';
      document.querySelector('.message').textContent = 'Game Over.';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  random = Math.floor(Math.random() * 20 + 1);
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = `${score}`;
  document.querySelector('.guess').value = '';
});