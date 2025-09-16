const countVowels = require('./countVowels.js')

describe('countVowels', () => {
    test("should return the number of vowels in a string", () => {
        expect(countVowels("hello")).toEqual(2); //positive
        expect(countVowels("world")).toEqual(1); //positive
        expect(countVowels("bcdfg")).toEqual(0); //negative
        expect(countVowels("123-456")).toEqual(0); //negative
        expect(countVowels("aEiOu")).toEqual(5); //edge
    })
})