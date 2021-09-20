
const {argv} = require('process');

const filterFilesFn = require('./mymodule.js');



const dirName = argv[2]; /* || path.dirname(__filename); */
const fileExt = argv[3]; /* || '.js'; */

const dealWithErrors = (err, filteredFiles) => {
    if (err) throw err;
    
    filteredFiles.forEach((file) => console.log(file));
    return filteredFiles;
}

filterFilesFn(dirName, fileExt, dealWithErrors)

