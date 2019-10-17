const checkWin = require("../js/gamechecker");

test("Test empty array", () => {
    let arr = [[]];
    expect(checkWin(arr)).toBe("IN PROGRESS");
});

test("Test non empty array not ended game", () =>{
    let arr = [
        ["X", "", ""],
        ["", "O", ""],
        ["O", "X", ""]
    ];
    expect(checkWin(arr)).toBe("IN PROGRESS");
});

test("Test win in line X", () =>{
    let arr = [
        ["X", "X", "X"],
        ["", "", "O"],
        ["O", "", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});

test("Test win in line O", () =>{
    let arr = [
        ["X", "", "X"],
        ["O", "O", "O"],
        ["", "X", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test win in column X", () =>{
    let arr = [
        ["O", "X", "O"],
        ["", "X", "O"],
        ["", "X", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});

test("Test win in column O", () =>{
    let arr = [
        ["", "X", "O"],
        ["", "X", "O"],
        ["X", "", "O"]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test win in diagonal X", () =>{
    let arr = [
        ["X", "O", "O"],
        ["", "X", "O"],
        ["", "", "X"]
    ];
    expect(checkWin(arr)).toBe("WIN. Player X Wins!");
});

test("Test win in diagonal O", () =>{
    let arr = [
        ["O", "X", "X"],
        ["", "O", "X"],
        ["", "", "O"]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test win in diagonal left O", () =>{
    let arr = [
        ["X", "X", "O"],
        ["", "O", "X"],
        ["O", "", ""]
    ];
    expect(checkWin(arr)).toBe("WIN. Player O Wins!");
});

test("Test draw", () =>{
    let arr = [
        ["O", "X", "O"],
        ["O", "X", "X"],
        ["X", "O", "O"]
    ];
    expect(checkWin(arr)).toBe("DRAW");
});