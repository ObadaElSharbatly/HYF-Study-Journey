const express = require('express');
const mysql = require('mysql');

// create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'obada',
    password : 'YunusObada',
    database : 'nodemysql'
});

db.connect((err)=>{
    if (err) throw err;
    console.log('MySql connected...');
})

const app = express();

// create db
app.get('/createdb', (req, res)=> {
    
    const sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('database created');
        console.log(result);
        res.send('database create');
    })
})

// create a table
app.get('/createtb/:tableName', (req, res) => {
    const selectTablesInDb = `SHOW TABLES LIKE '${req.params.tableName}'`
    const sql = `CREATE TABLE ${req.params.tableName} (id int AUTO_INCREMENT PRIMARY KEY, title varchar(50), body varchar(50))` ;
    db.query(selectTablesInDb, (err, result) => {
        if (err) throw err;
        if (result.length < 1) {
            console.log('You can create this table');
            console.log('result ==> ', result);
            db.query(sql , (err, result) => {
                if (err) throw err;
                console.log("query result ==> ", result);
                console.log('table has been created successfully');
                res.send('table has been created successfully');
            })
        } else {
            console.log("you can't make this table because there is the same table in the database");
            console.log("duplicate table", result);
            res.send("you can't make this table because there is the same table in the database");
        }
        
    })
    
    
   
    
})


// insert post 1
app.get('/addpost1', (req, res) => {
    const post = {
        title: 'post one',
        body: 'this is post number one'
    } 

    const sql = `INSERT INTO posts SET ? `
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log('post 1 has been added successfully');
        res.send('post 1 has been added successfully');
    })
})

// UPDATE posts
app.get('/updateposts/:id', (req, res) => {
    const post = {
        title: `post ${req.params.id}`,
        body: `this is post number ${req.params.id}`
    } 

    const sql = `UPDATE posts SET ? WHERE id = ${req.params.id} `
    db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log(`post ${req.params.id} has been added successfully`);
        res.send(`post ${req.params.id} has been added successfully`);
    })
})

// get all posts
app.get('/posts', (req, res) => {
    const sql = "SELECT * FROM posts"
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        console.log('posts fetched successfully...');
        res.send('posts fetched successfully...' + result.length + " posts");
    })
})


app.listen('3000', ()=> console.log('server started on port 3000'));