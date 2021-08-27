const fizzFunc = require('./fizzbuzz');

describe('fizzbuzz', () => {
    test('number multiple of 3 and 5', () => {
        expect(fizzFunc.fizzbuzz).toEqual("FizzBuzz")
    })
})