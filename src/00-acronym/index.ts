/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
    const cleanInput = input.replace("'", '').replace(/[^A-Za-z0-9]/g, ' ')
    const words = cleanInput.split(' ')
    console.log(words)
    const result = words.map(word => 
        word[0] && word[0].toUpperCase()).join("");
    return result;
}

// function parse(input: string) {
//     const cleanInput = input.replace("'", "").replace(/[^A-Za-z]/g, " ");
//     const words = cleanInput.split(" ");
//     const result = words.map((word) => word[0] && word[0].toUpperCase()).join("");
//     return result;
//   }
  
  

export { parse };
