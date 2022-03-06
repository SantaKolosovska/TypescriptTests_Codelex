/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */


 function anagrams(stringA: string, stringB: string): boolean {
    // remove spaces and symbols, to lower case
    let cleanA = stringA.toLowerCase().replace(/[^A-Za-z]/g, '').replace(/\s+/g, '')
    let cleanB = stringB.toLowerCase().replace(/[^A-Za-z]/g, '').replace(/\s+/g, '')
    
    // split the string to an array of characters and sort them in alphabetical order
    let arrayCOfCharsA = cleanA.split("").sort()
    let arrayCOfCharsB = cleanB.split("").sort()
    
    // compare the sorted arrays
    return arrayCOfCharsA.toString() == arrayCOfCharsB.toString()
}


// function anagrams(stringA: string, stringB: string): boolean {
//     let cleanA = stringA.toLowerCase().replace(/[^A-Za-z]/g, '').replace(/\s+/g, '')
//     let arrayCOfCharsA = cleanA.split("").sort()
//     console.log("StringA: " + cleanA + " Array A: " + arrayCOfCharsA)
//     let cleanB = stringB.toLowerCase().replace(/[^A-Za-z]/g, '').replace(/\s+/g, '')
//     let arrayCOfCharsB = cleanB.split("").sort()
//     console.log("StringB: " + cleanB + " Array B: " + arrayCOfCharsB)

//     let counter: number = 0

//     if (arrayCOfCharsA.length == arrayCOfCharsB.length) {
//     for (let i = 0; i < arrayCOfCharsA.length; i++) {
//             if (arrayCOfCharsA[i] != arrayCOfCharsB[i]) {
//                 counter = 1
//             }
//         }
//     } else {
//         counter = 1
//     }
    
//     return counter==0 
// }




export { anagrams };
