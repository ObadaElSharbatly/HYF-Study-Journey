const EventEmitter = require('events');
const { v4: uuidv4 } = require('uuid');

class Logger extends EventEmitter {
    sendMsg(msg){
        this.emit('message', {id: uuidv4(), msg});
    }
    
    delMesg(msg){
        this.emit('delete message', {id: uuidv4(), msg});
    }

}

module.exports = Logger;