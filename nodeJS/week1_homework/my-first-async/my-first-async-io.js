const fs = require('fs');
const path = require('path');
const { argv } = require('process');

const readTheFile = fs.readFile(argv[2],
    'utf-8',
    (err, data) => {
        if (err) throw err;
        const lines = data.split('\n').length-1;
        console.log(lines); 
    });

