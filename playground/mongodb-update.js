//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server'); //나머지 function실행 안되게 함
    }
    console.log('Connect to Mongodb server');

    //FindOneAndUPdate
    // db.collection('Users').findOneAndUpdate(
    //     {_id: new ObjectId("59d13a518b5836fccd5be22e")
    //     }, {
    //         $set :{completed: true
    //         }}, {
    //         returnOriginal: false
    //     }).then((result)=>{
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectId("59d12ed3b253a0372723c087")
        }, {
            $set :{name: "Sanghyuk"
            },
            $inc:{age: +1}
        }, {
            returnOriginal: false
        }).then((result)=>{
        console.log(result)
    });
    //challenge --> 나이 하나 업데이트하고
    //예경이 이름 내꺼로 바꾸기

    db.close();
    });
