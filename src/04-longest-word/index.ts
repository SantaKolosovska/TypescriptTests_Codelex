/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

// Remove special symbols and number from the string. Split the string into an array 
// of words. Create a variable to store the longest word in. Loop through the array. 
// When an element that is longer than the current longest is found, assign it's 
// value to longest. 
function longestWord(sen: string) {
    const cleanInput = sen.replace(/[^A-Za-z0-9]/g, ' ')
    const wordsArray = cleanInput.split(' ')
    let longest = ""
    for (var i = 0; i < wordsArray.length; i++ ) {
        if (wordsArray[i].length > longest.length) {
            longest = wordsArray[i]
            console.log("longest is " + wordsArray[i])
        }
    }
    return longest
}

export { longestWord };
