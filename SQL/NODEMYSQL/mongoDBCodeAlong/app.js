const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
app.use(express.json());
const collection = "todo";

app.get('/', (req, res)=>{
    res.send(path.join(__dirname, 'index.html'));
})

app.get('getTodos', (req, res)=> {
    db.getDB().collection(collection).find({}).toArray((err, documents) => {
        if (err) console.log(err);
        console.log(documents);
        res.json(documents);
    })
})

db.connect( err => {
    if (err) {
        console.log('unable to connet');
        process.exit(1);
    } else {
        app.listen(3000, ()=> console.log('server is connected on port 3000'));
    }
})


