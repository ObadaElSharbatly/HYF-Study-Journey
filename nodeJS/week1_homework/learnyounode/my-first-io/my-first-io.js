const fs = require('fs');
const { argv } = require('process');

const readThisFile = fs.readFileSync(argv[2], 'utf-8');
console.log(readThisFile.split('\n').length-1);
