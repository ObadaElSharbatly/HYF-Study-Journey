const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbName = 'Crud_test';
const url = 'mongodb://localhost:27017';
const mongoOptions = { useNewUrlParser : true};

const state = {db: null};
const connect = cb => {
    if (state.db) {
        cb();
    } else {
        MongoClient.connect(url, mongoOptions, (err, client) => {
            if (err) cb(err);
            state.db = client.db(dbName);
            cb();
        })
    }
}

const getPrimaryKey = _id => ObjectID(_id);
const getDB = ()=> state.db;

module.exports = {getDB, connect, getPrimaryKey}
