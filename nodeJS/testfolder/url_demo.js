// const url = require('url');
const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// serialize URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host root domain
 console.log(myUrl.host);

 //Hostname
 console.log(myUrl.hostname);

myUrl.searchParams.append('username', 'the monster');
console.log(myUrl.searchParams);

// loop through
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
console.log(typeof myUrl.searchParams);