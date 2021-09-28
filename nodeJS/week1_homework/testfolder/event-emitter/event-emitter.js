const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');


class MyEmitter extends EventEmitter {}

const firstEmitter = new MyEmitter();
firstEmitter.on('event', (data) => {
    console.log('an event occurred!', data);
});

firstEmitter.on('send msg to client', (name , id) => {
    console.log('message has been fired!', {"sent to": name, "id": id});
})
firstEmitter.emit('send msg to client', "obada", uuidv4());