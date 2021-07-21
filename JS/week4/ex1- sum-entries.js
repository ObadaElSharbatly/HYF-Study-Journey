  
/**
 * Credit to https://adventofcode.com/ for this exercise
In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.
Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [979, 366, 675, 1456, 1721, 299];
let result;

// Write your code here
/* for (i=0; i<list.length; i++) {
    if (list.includes(2020 - list[i])) {
        const indexOfOtherNumber = list.indexOf(2020 - list[i]);
        const targetedNumbers = [list[i], list[indexOfOtherNumber]];
        result = targetedNumbers.reduce((a, b) => a * b);
    }
}; */
list.forEach((item) => { 
    if (list.includes(2020 - item)  === true) {
        return result = item * list[list.indexOf(2020 - item)]
    }
})
console.log(result)
// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);