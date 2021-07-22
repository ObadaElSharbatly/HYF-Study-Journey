/**
The function getEldest should return the name of the eldest person in the given array.

The problem is that you have 2 data sets that have different property names (one in english and one in dutch).
Luckily we have learned of a thing called Higher Order Functions that we can use!

Read the test code below and make it log the right things without editing the data sets.

TIP: you will need 3 parameters, 2 of which are functions
**/

const getEldest = (groupName, ageOfEldest = eldestOneInGroup(groupName)) => {
  if (groupName === englishData) {
    const eldestPerson = groupName.find((x)=> x.age === ageOfEldest);
    return eldestPerson.name;
  } else {
    const eldestPerson = groupName.find((x)=> x.leeftijd === ageOfEldest);
    return eldestPerson.naam;
  }
 }

 
const eldestOneInGroup = function (groupName) {
  const allAges = []
  let eldest = 0;
  if (groupName === englishData){
    englishData.forEach(element => {
      allAges.push(element.age);
    });
      eldest = Math.max(...allAges);
      return eldest;
  } else if (groupName === dutchData) {
    dutchData.forEach(element => {
      allAges.push(element.leeftijd);
    });
      eldest = Math.max(...allAges);
      return eldest;
  } else {
    return "You have to put a 'englishData' or 'dutchData' group name as an argument"
  }
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
console.log(getEldest(englishData)); // Should log Tony
 // Should log Tony

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
console.log(getEldest(dutchData)) // Should log Wim



