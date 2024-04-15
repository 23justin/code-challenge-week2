const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to input a string
rl.question('Enter a string: ', (inputString) => {
    // Output the result based on the word
    console.log(switch_case(inputString));
    rl.close();
});

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
