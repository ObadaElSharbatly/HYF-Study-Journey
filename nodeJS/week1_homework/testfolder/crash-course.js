const path = require('path');

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__dirname));

// file ext
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename).ext);

// create path object
console.log(path.parse(__filename).name);

// concatenate paths
console.log(path.join(__filename));
console.log(path.join(__dirname));
