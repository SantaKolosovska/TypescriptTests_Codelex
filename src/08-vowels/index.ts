/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

// create a vowel array
const VOWEL_ARRAY = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// split string into an array of characters. Loop through the array and check
// if each element is contained in the vowels array. For each contained character 
// increase the counter by 1,
function vowels(s: string): number {
    let characterArray = s.split("");   
    let counter = 0
    characterArray.forEach(element => {         
        if (VOWEL_ARRAY.includes(element)) {   
            counter += 1
        }
    });
    return counter
}

export { vowels };
