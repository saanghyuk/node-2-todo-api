const {mongoose} =require('./../server/db/mongoose');
const {Todo} =require('./../server/models/todo');
const {User}=require('./../server/models/user');
const {ObjectID} = require('mongodb');

var id = "59d7828f6608013ec908e016";

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}


//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//     console.log('Todos', todos)
// });
//
// //findOne은 가장 첫번째꺼 리턴함
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todos', todo)
// }); //매치하는 애들중에 하나만 옴
//
// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo)
// }).catch((e)=> console.log(e));
//
//

var id= "59d6b3a1d30f9936b490651f"
User.findOne({
    _id: id
}).then((user)=>{
    if(!user){
        return console.log('Id note found')
    }
    console.log(JSON.stringify(user, undefined, 2))
}).catch((e)=>{
    console.log(e)
});

