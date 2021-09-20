const http = require('http');
http.createServer((req, res) => {
    res.write('Hello Obada');
    res.end();

})
.listen(3000, ()=>{console.log("don't worry your server is running");})
