const fs = require('fs');
const path = require('path');
const {argv} = require('process');


const dirName = argv[2];
const fileExt = '.' + argv[3];


const filterDir = fs.readdir(dirName,
    (err, files) => {
        if (err) throw err;
        const filteredFiles = files.filter((file) => {
            return file.includes(fileExt);
        }).forEach((file) => console.log(file))

    })
