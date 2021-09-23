const fs = require('fs');


 

const filterFilesFn = (fileDir, fileExtension, callbackFn) => {
    fs.readdir(fileDir, (err, files) => {
        if (err) return callbackFn(err, null)

        const filteredFiles = files.filter((file) => {
            return file.includes('.' + fileExtension);
        });
        
        callbackFn(null, filteredFiles)
    })
}

module.exports = filterFilesFn;