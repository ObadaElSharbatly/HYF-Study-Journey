/**
 * We want to remove the comma's in the given string (myString), replace them with a space and log it to the console.
 * 
 * The end result should be: 
 *   hello this is a difficult to read sentence
 */

 let wordsWithComma = 'hello,this,is,a,difficult,to,read,sentence';
 /////My solution /////
function removeComma(sentence) {
    return sentence = sentence.replaceAll("," , " ");
}

myString = removeComma(wordsWithComma);


 /* --- Code that will test your solution, do NOT change. Write above this line --- */
 console.log(myString);
 console.assert(myString === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');

            //////// Another solution \\\\\\\\\\\\
 let myString2 = 'hello,this,is,a,difficult,to,read,sentence';

myString2 = myString2.split(',').join(" ");
 

console.log(myString2);
console.assert(myString2 === 'hello this is a difficult to read sentence', 'There is something wrong with your solution');
