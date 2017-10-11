const {SHA256}=require('crypto-js');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = 'tkdgur123123!';

bcrypt.genSalt(10, (err, salt)=>{
    bcrypt.hash(password, salt, (err, hash)=>{
        console.log(hash);
    })
});

var hashPassword='$2a$10$LcxSrDirfwmHGQjSiW24g.dqT5a3symXz0NRo/7Bu1fWgzCzZ9sXC'

bcrypt.compare(password, hashPassword, (err, res)=>{
    console.log(res)
}); //실제로 true가 나옴


// var data={
//     id:10
// };
//
// var token = jwt.sign(data, '123abc'); //return token
// console.log(token);
//
//
// var decoded=jwt.verify(token, '123abc');
// console.log('decoded:', decoded);
//





// var message='I am user number3';
//
// var hash =SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data={
//   id: 4
// };
// var token={
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// };
//
//
// token.data.id=5;
// token.hash=SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if(resultHash===token.hash){
//     console.log('Data was not changed')
// }else{
//     console.log('Data was changed. Do not trust!')
// }
