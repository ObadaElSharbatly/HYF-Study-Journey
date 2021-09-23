const http = require('http');
const { argv } = require('process');
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

const url = argv[2];
http.get(url, (res)=> {
    res.on('data', (data) => {
        console.log(data);
    });
    req.on('error', (data) => {
        console.log(data);
    });
    req.on('end', (data) => {
        console.log(data);
    });

} ) 