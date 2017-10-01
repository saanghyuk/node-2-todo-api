//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server'); //나머지 function실행 안되게 함
    }
    console.log('Connect to Mongodb server');

    //deleteMany
    //db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=> {console.log(result);})
    //
    // //Delete One
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //
    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result)=>{
    //     console.log(result)
    // });
    db.collection('Users').deleteMany({ name:'sangwon' }).then((result)=>{
        console.log(result)
    });
    db.collection('Users').findOneAndDelete({_id:new ObjectID("59d12c1ac76b543712c388d0")})
        .then((result)=>{
        console.log(JSON.stringify(result, undefined, 2))
        });
    db.close();
    });
