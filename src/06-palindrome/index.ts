/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

// string characters are compared in a for loop starting from the first and last element. 
// If elements that are not matching are found, counter is increased by one, and loop is broken
function palindrome(str: string): boolean {
    let counter = 0;
    for (var i = 0; i < str.length; i ++) {
        if (str[i] == str [str.length-1-i]) {
            counter = 0
        } else {
            counter = 1
            break;
        }
    }
    return counter == 0
}

export { palindrome };
