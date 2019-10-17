
function checkwin(array)
{
    let player1 = 0;
    let player2 = 0;

    let pFound1 = 0;
    let pFound2 = 0;

    let pCh1 = "X";
    let pCh2 = "O";

    let wNeed = 3;

    // Check for draw first
    let someFree = false;
    let someEl = false;
    for (let line of array) {
        for (let el of line) {
            if (el == "")
                someFree = true;
            if (el == pCh2 || el == pCh1)
                someEl = true;
            if (someEl && someFree)
                break;
        }
        if (someFree && someEl)
            break;
    }

    // Check lines
    for (let line  of array) {
        let winning = "";
        for (let character of line) {
            if (winning && winning == character) {
                if (character == pCh1)
                    pFound1++;
                if (character == pCh2)
                    pFound2++;
                if (pFound1 >= wNeed) {
                    pFound1 = 0;
                    player1++;
                }
                if (pFound2 >= wNeed) {
                    pFound2 = 0;
                    player2++;
                }
            }
            else if (character) {
                winning = character;
                pFound1 = character == pCh1;
                pFound2 = character == pCh2;
            }
        }
    }

    pFound1 = 0;
    pFound2 = 0;
    // Check columns
    let len = array.length;
    for (let col = 0; col < len; ++col) {
        let winning = "";
        for (let line = 0; line < len; ++line) {
            let character = array[line][col];
            if (winning && winning == character) {
                if (character == pCh1)
                    pFound1++;
                if (character == pCh2)
                    pFound2++;
                if (pFound1 >= wNeed) {
                    pFound1 = 0;
                    player1++;
                }
                if (pFound2 >= wNeed) {
                    pFound2 = 0;
                    player2++;
                }
            }
            else if (character) {
                winning = character;
                pFound1 = character == pCh1;
                pFound2 = character == pCh2;
            }
        }
    }

    // Check diagonals
    for (let line = 0; line < len; ++line)
    {
        // Find first letter to check
        for (let col = 0; col < len; ++col)
        {
            // Now check only right down and left down
            if (array[line][col])
            {
                let winning = array[line][col];
                let wrong = false;
                let win = false;
                pFound2 = winning == pCh2;
                pFound1 = winning == pCh1;
                // Start right down
                let xCol = col;
                for (let xLine = line + 1; xLine < len; ++xLine) {
                    xCol++;
                    if (xCol >= len)
                        break;
                    if (array[xLine][xCol] != winning)
                        wrong = true;
                    else if (winning == pCh1) {
                        pFound1++;
                        if (pFound1 >= wNeed) {
                            pFound1 = 0;
                            player1++;
                            win = true;
                        }
                    } else if (winning == pCh2) {
                        pFound2++;
                        if (pFound2 >= wNeed) {
                            pFound2 = 0;
                            player2++;
                            win = true;
                        }
                    }
                    if (wrong || win)
                        break;
                }
                win = false;
                wrong = false;
                pFound2 = winning == pCh2;
                pFound1 = winning == pCh1;
                // Start right down
                xCol = col;
                for (let xLine = line + 1; xLine < len; ++xLine) {
                    xCol--;
                    if (xCol < 0)
                        break;
                    if (array[xLine][xCol] != winning)
                        wrong = true;
                    else if (winning == pCh1) {
                        pFound1++;
                        if (pFound1 >= wNeed) {
                            pFound1 = 0;
                            player1++;
                            win = true;
                        }
                    } else if (winning == pCh2) {
                        pFound2++;
                        if (pFound2 >= wNeed) {
                            pFound2 = 0;
                            player2++;
                            win = true;
                        }
                    }
                    if (wrong || win)
                        break;
                }
            }
        }
    }

    if (player1)
        return "WIN. Player X Wins!";
    if (player2)
        return "WIN. Player O Wins!";

    if (!someFree && !someEl)
        return "IN PROGRESS";

    if (someFree)
        return "IN PROGRESS";  

    return "DRAW";
}

module.exports = checkwin;