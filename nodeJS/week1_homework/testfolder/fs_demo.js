const fs = require('fs');
const path = require('path');

// create folder
/* fs.mkdir(path.join(__dirname, 'test'), {}, (err)=> {
    if (err) throw err;
    console.log('folder created');
}); */

// create and write to file
// fs.writeFile(path.join(__dirname, 'test','hello.txt'),
//  'hello world!',
//  (err)=> {
//     if (err) throw err;
//     console.log('file written to');

// });

// // append file
// fs.appendFile(path.join(__dirname, 'test','hello.txt'),
// ' I love node.js',
// (err)=> {
// if (err) throw err;
// console.log('file written to');
// });

// **read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data)=> {
//     if (err) throw err;
//     console.log(data);
//     console.log(' data has been showed ');
// });

// ** rename the file
// fs.rename(path.join(__dirname, 'test', 'hello.txt'), 
//     path.join(__dirname, 'test', 'helloworld.txt'),
//     (err)=> {
//         if (err) throw err;
//         console.log('file renamed successfully!');
// }
// );

// delete and force folder
// fs.rm( path.join(__dirname, 'test'), { recursive: true, force: true },
//     (err)=>{
//         if (err) throw err;
//         console.log('Directory has been deleted ... ');
//     }
    
// )
