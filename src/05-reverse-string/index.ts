/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

// looping through string starting from the end and adding elements to a new string
function reverse(str: string) {
    let reversedString = "";
    for (var i = str.length-1; i >= 0; i--){
        reversedString += str[i]
    }
    return reversedString
}

export { reverse };
