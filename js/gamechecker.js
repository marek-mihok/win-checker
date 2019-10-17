
function checkwin(array)
{
    let player1 = 0;
    let player2 = 0;

    let pFound1 = 0;
    let pFound2 = 0;

    let pCh1 = "X";
    let pCh2 = "O";

    let wNeed = 3;
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

    if (player1 || player2)
        return "WIN";

    return "IN PROGRESS";
}

module.exports = checkwin;