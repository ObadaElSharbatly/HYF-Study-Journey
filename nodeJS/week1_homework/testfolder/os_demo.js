const os = require('os');

// platform
console.log('system = ', os.platform());

// CPU Arch
console.log('bits = ', os.arch());

// CPU cores
console.log('cores = ', os.cpus().length, 'cores');

// free memory
console.log('free memory = ', os.freemem()/10000);
console.log('total memory = ', os.totalmem()/10000);


// home directory
console.log('home dir = ', os.homedir());
console.log('system up time  = ', os.uptime());