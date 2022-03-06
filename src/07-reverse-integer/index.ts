/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */


// Parse the integer to string and split into an array of digits (as strings).
// Loop through the array backwards and add each element to new string skipping zeros.
// If the last added element is '-', create a substring thus removing the last element 
// and add a '-' at the beginning of the substring  
function reverse(int: number): number {
    let arrayOfStringDigits = int.toString().split('')
    let digitStringReversed: string = ''

    for (let i = arrayOfStringDigits.length-1; i >= 0; i--) {
        if (arrayOfStringDigits[i] == '0') {
            continue
        } 
        digitStringReversed += arrayOfStringDigits[i]
    }

    if (digitStringReversed[digitStringReversed.length-1] == '-') {
        digitStringReversed = '-' + digitStringReversed.substring(0,digitStringReversed.length-1)
    }
    
    return Number(digitStringReversed)
}


// not mine
// function reverse(int: number) {
//     return Math.sign(int)*parseInt(int.toString().split('').reverse().join(''))
// }

// not mine
// function reverse(int: number) {
// let reversedInt = int.toString().split('').reverse().join('')
//     let result = parseInt(reversedInt)
//     if (int < 0) {
//         result = result * -1
//     }
//     return result
// }

export { reverse };
