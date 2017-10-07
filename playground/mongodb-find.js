//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server'); //나머지 function실행 안되게 함
    }
    console.log('Connect to Mongodb server');

    db.collection('Users').find({name: 'sangwon'}, {age:1}).toArray().then((docs)=>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
       console.log('Unable to return todo', err);
    });

    // db.collection('Todos').find({
    //     _id:new ObjectID('59d11643564d153456c014b0')}).toArray({completed: false}).then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=>{
    //     console.log('Unable to fetch todos', err)
    // });
    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos count:',count);
        //console.log(JSON.stringify(count, undefined, 2));
    }, (err)=>{
        console.log('Unable to count todos', err)
    });

    db.close()
});
