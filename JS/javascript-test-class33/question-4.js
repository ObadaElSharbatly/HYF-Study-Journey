/**
 * Our international offices are sending us contact data in many different formats. We need you to complete the createContactList function.
 * The `createContactList` provides a function for anyone to send in a list and define how to get the data we need with functions as a parameter.
 */

/**
 * This function creates the contact list in a format that we can use in the rest of the application.
 * - `list` -> the list to look through
 * - `nameGetter` -> a function to grab the name from an element in the list
 * - `emailGetter` -> a function to grab the email from an element in the list
 * 
 * The function will return an array of contacts that are structured as follows:
 *   {
 *     name: '',
 *     email: '',
 *   }
 */


const createContactList = (list = [], nameGetter = (item) => item.name, emailGetter = (item) => item.email ) => {
    // this is the final organized contact list
    let OrganizedContactList = [];
    // normal for loop .. with every element in the list argument we need to open a new empty object
    //then add the values in our form and our own property.
    for (let i = 0; i<list.length ; i++) {
        OrganizedContactList.push({});
        OrganizedContactList[i].name = nameGetter(list[i]);
        OrganizedContactList[i].email = emailGetter(list[i]);
    }
    return OrganizedContactList;
}


/**
 * TEST CODE. DO NOT EDIT
 */
const spanishTestData = [
    {
        nombre: 'Rob',
        mail: 'rob@hackyourfuture.net',
    }, {
        nombre: 'Wouter',
        mail: 'wouter@hackyourfuture.net',
    }
];
const dutchTestData = [
    {
        naam: 'Tjebbe',
        emailadres: 'tjebbe@hackyourfuture.net',
    }, {
        naam: 'Federico',
        emailadres: 'federico@hackyourfuture.net',
    }
];
const testConvertedSpanishData = createContactList(spanishTestData, (item) => item.nombre, (item) => item.mail);
console.assert(testConvertedSpanishData.length === 2);
console.assert(testConvertedSpanishData[0].name === 'Rob');
console.assert(testConvertedSpanishData[0].email === 'rob@hackyourfuture.net');
console.assert(testConvertedSpanishData[1].name === 'Wouter');
console.assert(testConvertedSpanishData[1].email === 'wouter@hackyourfuture.net');

const testConvertedDutchData = createContactList(dutchTestData, (item) => item.naam, (item) => item.emailadres);
console.assert(testConvertedDutchData.length === 2);
console.assert(testConvertedDutchData[0].name === 'Tjebbe');
console.assert(testConvertedDutchData[0].email === 'tjebbe@hackyourfuture.net');
console.assert(testConvertedDutchData[1].name === 'Federico');
console.assert(testConvertedDutchData[1].email === 'federico@hackyourfuture.net');