/**
The function getEldest should return the name of the eldest person in the given array.

The problem is that you have 2 data sets that have different property names (one in english and one in dutch).
Luckily we have learned of a thing called Higher Order Functions that we can use!

Read the test code below and make it log the right things without editing the data sets.

TIP: you will need 3 parameters, 2 of which are functions
**/

const getEldest = () => {
  
}


/**
 * TEST CODE. DO NOT EDIT
 */
const englishData = [{
  age: 73,
  name: 'Tony',
}, {
  age: 45,
  name: 'James'
}, {
  age: 53,
  name: 'Theresa'
}];
console.log(getEldest(englishData, item => item.age, item => item.name)); // Should log Tony

const dutchData = [{
  leeftijd: 42,
  naam: 'Jan-Peter'
}, {
  leeftijd: 35,
  naam: 'Mark',
}, {
  leeftijd: 62,
  naam: 'Wim'
}];
console.log(getEldest(dutchData, item => item.leeftijd, item => item.naam)); // Should log Wim