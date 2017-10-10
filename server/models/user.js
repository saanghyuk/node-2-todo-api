const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value)=>{
                return validator.isEmail(value)
                },
            message : '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function () { //유저한테 다 보일 필요 없으니깐 오버라이드 하는거야 몽구스가 뭘 리턴할지만 주는거야
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken=function(token){//static메소드야
    var User = this; //모델 자체를 잡는거지
    var decoded;

    try{
        decoded=jwt.verify(token, 'abc123');
    }catch(e){
        // return new Promise((resolve, reject)=>{
        //     reject() //이렇게 해놓으면 받는 애가 then success case가 아예 실행이 안되지
        // });
        return Promise.reject('No!');
    }

    return User.findOne({
       '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    })
};
var User = mongoose.model('User', UserSchema);

module.exports = {User};