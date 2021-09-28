const Logger = require('./logger');


const logger = new Logger()

 logger.on("message", (data)=> {
    console.log(data);
 })

 logger.on("delete message", (data)=> {
    console.log('message has been deleted', data);
 })
 logger.sendMsg("I am sending this message specially to you")
 logger.delMesg("I am sending this message specially to you")