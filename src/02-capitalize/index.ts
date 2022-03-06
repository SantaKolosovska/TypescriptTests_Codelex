/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

// split string into an array of words, map to a new array while capitalizing the first letter 
// of each word and adding the rest of the word as a substring. Join the elements of the array to 
// create a string.
function capitalize(str: string): string {
    return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}

// same approach in more steps
function capitalize2(str: string): string {
    let arrayOfWords = str.split(' ')
    let newArrayOfWords: string[]
    newArrayOfWords = []

    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i]
        newArrayOfWords.push(word[0].toUpperCase() + word.substring(1))
    }

    return newArrayOfWords.join(' ')
}

export { capitalize };
