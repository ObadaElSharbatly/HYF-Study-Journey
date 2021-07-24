/**
 * Because of certain regulations it has become a little hard to decide who passed their driver's license.
 * You have been tasked to write a function that determines if someone has passed, the criteria are written in a comment next to the function (to keep it close to the code!)
 */

/**
 * To get your driver's license you need to:
 * - Have a `scoreTheory` of at least 90
 * - Have `passedPractical` be equal to true
 * 
 * There are some exceptions though:
 * - If you have `dyslexia`, your `scoreTheory` is allowed to be 80 or higher
 * - If you have `adhd`, your `scoreTheory` is allowed to be 80 or higher
 * - If you have both `dyslexia` and `adhd`, your `scoreTheory` is allowed to be 70 or higher
 * 
 * The function returns `true` if the student has passed according to these criteria, `false` if not
 */
const defaultExceptionInfo = {
    dyslexia: false,
    adhd: false,
}
const hasPassed = (scoreTheory = 0, passedPractical = false, exceptionInfo = defaultExceptionInfo) => {
        // first we need to check if the driver has both of dyslexia & adhd  if yes we check the criteria.
    if (exceptionInfo.dyslexia === true && exceptionInfo.adhd === true) {
        return (scoreTheory >= 70 && passedPractical === true) ? true : false;
    }

        // if No, we need to check if the driver has one of (dyslexia & adhd)  if yes we check the criteria.
     else if (exceptionInfo.dyslexia === true) {
        return (scoreTheory >= 80 && passedPractical === true ) ? true : false;
    }
    
    else if (exceptionInfo.adhd === true) {
        return (scoreTheory >= 80 && passedPractical === true ) ? true : false;
    } 
        // if he/she doesn't have both we check the criteria.

    else {
        return (scoreTheory >= 90 && passedPractical === true ) ? true : false;
    }
}


/**
 * TEST CODE. DO NOT EDIT
 */
console.assert(hasPassed(93, false) === false, '93, false'); // Should pass practical
console.assert(hasPassed(90, true) === true, '90, true'); // All good
console.assert(hasPassed(89, true) === false, '89, true'); // Too low scoreTheory
console.assert(hasPassed(80, true, { dyslexia: true }) === true, '80, true, dyslexia'); // Dyslexia exception
console.assert(hasPassed(79, true, { dyslexia: true }) === false, '79, true, dyslexia'); // Dyslexia exception only allows 80+
console.assert(hasPassed(80, true, { adhd: true }) === true, '80, true, adhd'); // ADHD exception
console.assert(hasPassed(79, true, { adhd: true }) === false, '79, true, adhd'); // ADHD exception only allows 80+
console.assert(hasPassed(70, true, { dyslexia: true, adhd: true }) === true, '70, true, dyslexia/adhd'); // ADHD and dyslexia exception
console.assert(hasPassed(69, true, { dyslexia: true, adhd: true }) === false, '69 ,true, dyslexia/adhd'); // ADHD and dyslexia exception only allows 70+