const checkWin = require("../js/gamechecker");

test("Test empty array", () => {
    let arr = [[]];
    expect(checkWin(arr)).toBe("IN PROGRESS");
});