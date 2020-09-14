const { longestWord } = require('../ka_functionToFindLongestWord');

let message;
let longestW;

// Initialises the values passed to each function
beforeAll(() => {
    message = "I wish I could travel to Australia";
   longestW = "Australia";
})

test('The longest word should be Australia', () => {
    expect(longestWord(message)).toBe(longestW);
});
