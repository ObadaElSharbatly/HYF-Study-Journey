const sum = (...args) => {
  return args.reduce((a,b)=>{
    return a + b;
  },)
}
//a = 0  b= 1 a = 0 // a = 1 b =2 a =1 // a = 4 b=3 a=4
console.log(sum(1,2,3,4,5))
console.log(sum([1,2,3]))

// another example
const numbers = [1,2,3,4,5];
const reducer = (a,b) => { return a + b};
const sumOfNumbers = numbers.reduce(reducer,0);
console.log(sumOfNumbers)

// another example
let myKidsAges= [4, 1, 0.5]
let sumOfMyKidsAges = myKidsAges.reduce((storage, age) => {
  return storage + age
})
console.log(sumOfMyKidsAges)