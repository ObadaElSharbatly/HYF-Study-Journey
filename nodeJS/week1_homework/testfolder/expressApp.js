const express = require('express');
const app = express();


app.get('/', function (req, res) {
  res.send('Hello World I am')
})

const port = 3000
app.listen(port);