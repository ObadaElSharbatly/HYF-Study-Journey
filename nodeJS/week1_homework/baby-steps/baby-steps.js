const {argv} = require('process');

const nodeArgs = argv.slice(2, argv.length)
nodeArgs.forEach((element, index) => nodeArgs[index] = Number(element));
console.log(nodeArgs.reduce((a, b) => a+b));


