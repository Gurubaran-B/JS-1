'use strict';
// Variables for logic-operations
let c = 0;
let s_1 = 0;
let s_2 = 0;

//Variables for place-holding Clases
let current_score_1 = document.getElementById('current--0');
let current_score_2 = document.getElementById('current--1');
let score_1 = document.getElementById('score--0');
let score_2 = document.getElementById('score--1');

// Main Program

//Rolling the dice on click
document.querySelector('.btn--roll').addEventListener('click', function()
{
    if ( s_1 < 50 && s_2 < 50)
    {
        let random = Math.floor(Math.random() * 6 + 1);
        document.querySelector('.dice').src = `dice-${random}.png`

        if (document.querySelector('.player--0').classList.contains('player--active'))
        {
            if (random === 1)
            {
                document.querySelector('.player--0').classList.remove('player--active');
                document.querySelector('.player--1').classList.add('player--active');
                c = 0;
                current_score_1.textContent = `${c}`;
            }
            else
            {
                c += random;
                current_score_1.textContent = `${c}`;
            }
        }
        else if (document.querySelector('.player--1').classList.contains('player--active'))
        {
            if (random === 1)
            {
                document.querySelector('.player--1').classList.remove('player--active');
                document.querySelector('.player--0').classList.add('player--active');
                c = 0;
                current_score_2.textContent = `${c}`;
            }
            else
            {
                c += random;
                current_score_2.textContent = `${c}`;
            }
        }
    }    
});

//Holding the score on click
document.querySelector('.btn--hold').addEventListener('click', function()
{
    if (document.querySelector('.player--0').classList.contains('player--active'))
    {
        s_1 += c;
        c = 0;

        if (s_1 >= 50)
        {
            document.querySelector('.player--0').classList.add('player--winner'); 
            current_score_1.textContent = `0`;
            score_1.textContent = `${s_1}`;   
        }
        else
        {
            document.querySelector('.player--0').classList.remove('player--active');
            document.querySelector('.player--1').classList.add('player--active');
            current_score_1.textContent = `${c}`;
            score_1.textContent = `${s_1}`;
        }
    }
    else if (document.querySelector('.player--1').classList.contains('player--active'))
    {
        s_2 += c;
        c = 0;
        
        if (s_2 >= 50)
        {
            document.querySelector('.player--1').classList.add('player--winner');
            current_score_2.textContent = `0`;
            score_2.textContent = `${s_2}`;
        }
        else
        {
            document.querySelector('.player--1').classList.remove('player--active');
            document.querySelector('.player--0').classList.add('player--active');
            current_score_2.textContent = `${c}`;
            score_2.textContent = `${s_2}`; 
        }    
    } 
});

//Resetting the Game
document.querySelector('.btn--new').addEventListener('click', function()
{
    if (document.querySelector('.player--0').classList.contains('player--winner'))
    {
        document.querySelector('.player--0').classList.remove('player--winner');

    }
    else
    {
        document.querySelector('.player--1').classList.remove('player--winner');
    }

    if (!document.querySelector('.player--0').classList.contains('player--active'))
    {
        document.querySelector('.player--1').classList.remove('player--active');
        document.querySelector('.player--0').classList.add('player--active');
    }

    document.querySelector('.dice').src = ` `
    current_score_1.textContent = `0`;
    score_1.textContent = `0`;
    current_score_2.textContent = `0`;
    score_2.textContent = `0`;
    c = 0;
    s_1 = 0;
    s_2 = 0;
    random = 0;   
});

// End of Main Program