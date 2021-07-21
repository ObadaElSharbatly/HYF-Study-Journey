/**
 * Credit to https://adventofcode.com/ for this exercise
In the list below you have an array of numbers. The goal is to find the three numbers that add up to 2020.
Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 1456, 675];

console.log(list[list.length -1])
let chosenNumbers = []
function filterNumbersEqualTo2020 () {
    for (let i = 0; i < list.length ; i++) {
        for (let x = 0; x < list.length ; x++){
            if (x === i) {}
            else if (list[i]+list[x] < 2020) {
                for (let j = 0; j < list.length ; j++ ) {
                    if (j === x || j === i) {}
                    else if (list[i] + list[x] + list[j] === 2020) {
                        return chosenNumbers.push(list[i], list[x], list[j]) 
                    
                    } 
                }
            }
        } 
    } return "You don't have three numbers equal to 2020" 
}
console.log(filterNumbersEqualTo2020())
console.log(chosenNumbers)
const result = chosenNumbers.length > 0 ? chosenNumbers.reduce((a, b) => a * b) : "result : chosenNumbers variable is an empty array"
console.log(result);
                      
// Write your code here


// TEST CODE, do not change
console.assert(result === 241861950, `The result is not correct, it is ${result}, but should be 241861950`);
