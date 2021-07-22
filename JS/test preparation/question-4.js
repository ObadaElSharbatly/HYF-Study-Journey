/**
Debug and refactor time!

The code below is written without modern js functionality in mind and has some issues.
It is your job to rewrite the code so that the tests at the bottom pass, and that the code is easy to follow.

This code is meant to be hard to follow and have no explanation, 
it is part of the test to see if you can read this code and understand what it is meant to do.

TIP: After making it work, have a look at the Code style points section in your README to clean it up
TIP: Remember the ModernJS options
TIP: Read the test code at the bottom to understand what needs to be fixed
 */

function m(a, b) {
    if (a.length > b.length) {
        return 'The arrays are not of the same length. First has length ' + a.length + '. Second has length ' + b.length + '.';
    }

    const newArray = [];

    for (var i = 0; i < a.length; i = i + 1) {
    newArray[i] = a[i];
        newArray[i + 1] = b[i];
    }

    return newArray;
}

/**
 * TEST CODE. DO NOT EDIT THIS, BUT DO READ IT AS IT WILL HELP YOU UNDERSTAND WHAT IS EXPECTED
 */
console.log(m([1, 3], [2, 4, 6])) // Should log 'The arrays are not of the same length. (1 != 2)
console.log(m([1], [2])) // Should log [1, 2]
console.log(m([1, 3], [2, 4])) // Should log [1, 2, 3, 4]