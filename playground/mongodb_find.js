// START SERVER
// ./mongod --dbpath ~/mongo_data

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b0fcae2d54ad20e0e5ddd57')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:', count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'Tobi'
    }).count().then((count) => {
        console.log('Todos count from Tobi:', count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //client.close();
});