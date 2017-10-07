const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User}=require('./../server/models/user');


//Todo.remove({})
Todo.remove({}).then((result)=>{
   console.log(result)
});



//Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '59d7c5488cd831505d852a09'}).then((result)=>{
    console.log(result)
});

//Todo.findByIDAndRemove
Todo.findByIdAndRemove('59d7c5488cd831505d852a09').then((todo)=>{
    console.log(todo)
});