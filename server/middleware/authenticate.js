var {User}=require('./../models/user');


var authenticate = (req, res, next)=>{
    var token = req.header('x-auth');

    User.findByToken(token).then((user)=>{
        if(!user){
            return Promise.reject //이것도 아래에서 에러 부분으로 가는거지
        }

        req.user=user;
        req.token=token;
        next();
    }).catch((e)=>{
        res.status(401).send()
    })
};

module.exports={
    authenticate
};