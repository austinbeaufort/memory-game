import { shuffledCardFronts } from './model';


function maybeFlip(card, cardNum, source)
{
    if (source === 'http://localhost:1234/card-back.d677e786.png')
    {

        flipCard(card, cardNum)
        return true;
    }
    else
    {
        return false;
    }
}


function flipCard(card, cardNum)
{
    document.querySelector(`#${card}`).src = shuffledCardFronts[cardNum];
}

export default maybeFlip;