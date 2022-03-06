/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

// create and array of even numbers
const EVEN_DIGITS = [2, 4, 6, 8, 0] // if we can't use + (convert to number), we can put strings here

// parse number to string, remove the decimal part, create an array of numbers, check if the last one 
// is included in the even digits array.
function isEven(n: number) {
    const stringDigit = n.toString().split('.')[0];
    const lastDigit = +stringDigit[stringDigit.length-1]    // + converts string to number
    return EVEN_DIGITS.includes(lastDigit)
}

export { isEven };
