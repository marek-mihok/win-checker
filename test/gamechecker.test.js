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

test("Test win in line", () =>{
    let arr = [
        ["X", "X", "X"],
        ["", "", "O"],
        ["O", "", ""]
    ];
    expect(checkWin(arr)).toBe("WIN");
});