//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj=new ObjectID();
// console.log(obj);
//
// var user= {name:'sanghyuk', age:25};
// var {name, age} = user; //destructure
// console.log(name, age);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server'); //나머지 function실행 안되게 함
    }
    console.log('Connect to Mongodb server');

    db.collection('Users').insertOne({
        name: 'sangwon',
        age: 24, //
        location: 'Seoul'
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert todo', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2)); //ops는 모든게 들어 있어
    });

    db.collection('Users').insertOne({
        name: 'Yegeong',
        age: 22,
        location: 'Gwacheon'
    }, (err, result)=>{
        if(err){
            return console.log('Unalbe to insert todo', err)
        }
        //console.log(JSON.stringify(result.ops, undefined, 2))
        console.log(result.ops[0]._id.getTimestamp());
    });
    db.collection('Users').insertOne({
        name: 'Yegeong2',
        age: 22,
        location:'Seoul'
    });
    db.close()
});
