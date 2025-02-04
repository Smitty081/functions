var input = ("That rug really tied the room together");
const vowels = ["a", "e", "i", "o", "u"];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const inputLetter = input[i];
    // console.log(i);
    if (input[i] === "e") {
        resultArray.push(input[i]);
    }
    if (input[i] === "u") {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        const vowelLetter = vowels[j];
        // console.log(j);
        if (inputLetter === vowelLetter) {
            resultArray.push(inputLetter);
        }
    }
}
let resultString = resultArray.join(" ").toUpperCase();
console.log(resultString);

// wwww