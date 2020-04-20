function maybeCheckMatch(lastTwoFlipped)
{
    if (lastTwoFlipped.length === 2)
    {
        return checkForMatch(lastTwoFlipped)
    }
    else
    {
        return null;
    }
}


function checkForMatch(lastTwoFlipped)
{
    const isMatch = lastTwoFlipped[0] === lastTwoFlipped[1];
    return isMatch;
}

export default maybeCheckMatch;