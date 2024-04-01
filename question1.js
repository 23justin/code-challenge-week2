

// Prompt the user to input a sring

// Function to switch the case of each character in a string
function switch_case(inputString) {
    let switchedString = '';
    for (let i = 0; i < inputString.length; i++) {
        let letter = inputString[i];
        if (letter === letter.toUpperCase()) {
            switchedString += letter.toLowerCase();
        } else if (letter === letter.toLowerCase()) {
            switchedString += letter.toUpperCase();
        } else {
            switchedString += letter;
        }
    }
    return switchedString;
}
let word = 'The Quick Brown Fox'

// Output the result based on the word
console.log(switch_case(word));