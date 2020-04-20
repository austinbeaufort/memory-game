'use strict'

import { back, cardContainer, newGameButton, scoreBoard, winMessage } from './model';
import { drop } from './libs/ez-read';
import maybeFlip from './flip-card';
import maybeCheckMatch from './check-match';



cardContainer.addEventListener('click', runGame);
newGameButton.addEventListener('click', resetGame);

let lastTwoFlipped = [];
let lastTwoIds = [];
let score = 0;

function runGame(event) 
{
    const card = event.target.id;
    const cardNum = Number(drop(5, card));
    const source = event.target.src;

    const isFlipped = maybeFlip(card, cardNum, source);

    if (isFlipped)
    {
        lastTwoFlipped.push(event.target.src);
        lastTwoIds.push(card);
        const isMatch = maybeCheckMatch(lastTwoFlipped);
        runMatchLogic(isMatch)
        if (score === 4)
        {
            console.log('win!')
            winMessage.innerHTML = 'You Win!';
        }
    }
}


function runMatchLogic(isMatch)
{
    if (isMatch === null)
    {
        return;
    }
    else if (isMatch === true)
    {
        score++;
        updateScore();
        clearLastTwoArrays();
    }
    else
    {
        resetLastTwoCards();
        clearLastTwoArrays();
    }
}



function updateScore()
{
    scoreBoard.innerHTML = `Score: ${score}`;
}

function resetLastTwoCards()
{
    const item1 = document.querySelector(`#${lastTwoIds[0]}`);
    const item2 = document.querySelector(`#${lastTwoIds[1]}`);
    setTimeout(() => {
        item1.src = back;
        item2.src = back;
    }, 500);
}


function clearLastTwoArrays()
{
    lastTwoFlipped = [];
    lastTwoIds = [];
}


function resetGame()
{
    resetCards()
    score = 0;
    scoreBoard.innerHTML = `Score: 0`;
    winMessage.innerHTML = '';
}

function resetCards()
{
    for (let i = 0; i <= 7; i++)
    {
        const img = document.querySelector(`#card-${i}`);
        img.src = back;
    }
}