// Variables for logic-operations
let c = 0;
let random = 0;
let score = [0, 0];
let max_score = 100;

//Variables for place-holding Clases
let player = [document.querySelector('.player--0'), document.querySelector('.player--1')];
let current_score = [document.getElementById('current--0'), document.getElementById('current--1')];
let player_score = [ document.getElementById('score--0'), document.getElementById('score--1')];

// Refactored Functions

// Player's Status Check
let is_player0_active = function()
{
    return player[0].classList.contains('player--active');
}

// Players Switch Function
let player_switch = function (x) 
{
  player[x].classList.remove('player--active');
  x === 0 ? player[x + 1].classList.add('player--active') : player[x - 1].classList.add('player--active');
};

// Current score counting Function
let current_score_counter = function (x, y) 
{
  if (random === 1) 
  {
    player_switch(x);
    c = 0;
  } 
  else 
  {
    c += y;
  }
  current_score[x].textContent = `${c}`;
};

// Hold Function
let hold_switch = function (x, c) 
{
  score[x] += c;
  c = 0;
  score[x] >= max_score ? player[x].classList.add('player--winner') : player_switch(x);
  current_score[x].textContent = `${c}`;
  player_score[x].textContent = `${score[x]}`;
  return c;
};

// Main Program

//Rolling the dice on click
document.querySelector('.btn--roll').addEventListener('click', function () 
{
  if (score[0] < max_score && score[1] < max_score) 
  {
    random = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice').src = `dice-${random}.png`;
    is_player0_active() ? current_score_counter(0, random) : current_score_counter(1, random);
  }
});

//Holding the score on click
document.querySelector('.btn--hold').addEventListener('click', function () 
{
  is_player0_active() ? c = hold_switch(0, c) : c = hold_switch(1, c);
});

//Resetting the Game
document.querySelector('.btn--new').addEventListener('click', function () 
{
  c = 0;
  random = 0;
  document.querySelector('.dice').src = ` `;

  is_player0_active() ? player[0].classList.remove('player--winner') : player[1].classList.remove('player--winner');

  if (!is_player0_active()) 
  {
    player_switch(1);
  }

  for (let i = 0; i < player.length; i++) 
  {
    score[i] = 0;
    current_score[i].textContent = `0`;
    player_score[i].textContent = `0`;
  }
});

// End of Main Program