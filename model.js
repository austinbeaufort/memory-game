import { freeze, shuffle, seal } from './libs/ez-read';

const front1 = require('./sprites/front-1.png');
const front2 = require('./sprites/front-2.png');
const front3 = require('./sprites/front-3.png');
const front4 = require('./sprites/front-4.png');
const back = require('./sprites/card-back.png');

const cardContainer = document.querySelector('.card-container');
const newGameButton = document.querySelector('.new-game');
const scoreBoard = document.querySelector('.score');
const winMessage = document.querySelector('.win-message');

const cardFrontArray = seal([
    front1,
    front1,
    front2,
    front2,
    front3,
    front3,
    front4,
    front4,
]);

// array
const shuffledCardFronts = shuffle(cardFrontArray);

export {
    cardContainer,
    newGameButton,
    shuffledCardFronts,
    back,
    scoreBoard,
    winMessage,
}