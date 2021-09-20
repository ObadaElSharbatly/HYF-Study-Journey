const express = require('express');
const path = require('path');
const router = require('./routes/api/members');

const app = express();

// app.use(logger);

// body parser middleware
app.use(express.json());
// app.use(express.urlencoded({extended: false}))


// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api route
app.use('/api/members', router)


const PORT = process.env.PORT || 5000 ;
app.listen(PORT, ()=>console.log(`server started on ${PORT}`));