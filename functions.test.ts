const {shuffleArray} = require('./utils')

const testArr = [1, 2, 3, 4, 5, 6]

describe('shuffleArray should', () => {
    // CODE HERE
    test("make sure that shuffleArray returns an array", () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true);
    });

    it("makes sure the array length in equals the array length out", () => {
        expect(shuffleArray(testArr)).toHaveLength(testArr.length);
    });
})