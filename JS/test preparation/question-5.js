/**

In The Netherlands, many people go crazy about ice skating on the natural lakes.
Unfortunately for those people it doesn't happen very often that this is possible.

Complete the function below that takes an array of weather data and gives the first date when it will be possible to skate.
If it is not possible it should return the string 'Helaas pindakaas'. Which in Dutch literally means 'Too bad peanutbutter', the peanutbutter is just there for the rhyme.
**/

/**
 * This function calculates the first day it will be possible to skate in the given data or sends back 'Helaas pindakaas' if it is not possible.
 * 
 * The data parameter should be an array of objects. Those objects should have 3 properties:
 *   - date: The date that the temperatures are for
 *   - lowestTemperature: The lowest temperature measured on that day
 *   - highestTemperature: The highest temperature measured on that day
 * 
 * To determine if you can skate weeronline says that the temperature should not go above 0 (so 0 is fine) for 5 consecutive days. It is then possible to skate on the day after those 5 days
 */
const possibleSkateDays = (data) => {

}


/**
 * TEST CODE. DO NOT EDIT
 */

const weatherData = [{
    date: '2021-02-07',
    lowestTemperature: -4,
    highestTemperature: 2,
}, {
    date: '2021-02-08',
    lowestTemperature: -1,
    highestTemperature: 2,
}, {
    date: '2021-02-09',
    lowestTemperature: -1,
    highestTemperature: 9,
}, {
    date: '2021-02-10',
    lowestTemperature: 6,
    highestTemperature: 10,
}, {
    date: '2021-02-11',
    lowestTemperature: 3,
    highestTemperature: 9,
}, {
    date: '2021-02-12',
    lowestTemperature: 5,
    highestTemperature: 9,
}, {
    date: '2021-02-13',
    lowestTemperature: -1,
    highestTemperature: 6,
}, {
    date: '2021-02-14',
    lowestTemperature: -5,
    highestTemperature: -1,
}, {
    date: '2021-02-15',
    lowestTemperature: -5,
    highestTemperature: -3,
}, {
    date: '2021-02-16',
    lowestTemperature: -2,
    highestTemperature: -6,
}, {
    date: '2021-02-17',
    lowestTemperature: -1,
    highestTemperature: -7,
}, {
    date: '2021-02-19',
    lowestTemperature: -11,
    highestTemperature: 0,
}, {
    date: '2021-02-20',
    lowestTemperature: -8,
    highestTemperature: -3,
}, {
    date: '2021-02-21',
    lowestTemperature: -1,
    highestTemperature: -9,
}];

console.log(possibleSkateDays([])) // Should log 'Helaas, pindakaas'
console.log(possibleSkateDays(weatherData)) // Should log the dates [ '2021-02-20', '2021-02-21' ]