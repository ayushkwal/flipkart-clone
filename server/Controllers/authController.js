const User = require("../models/user")

module.exports.login_get = (req,res)=>{
    res.send("hello login")
}

module.exports.signin_get = (req,res)=>{
    res.send("hello login")
}

module.exports.login_post = (req,res)=>{
    User.findOne({
        email:req.body.email,
        password:req.body.password
    }).then((data)=>{
        console.log('d',data.firstName)
        return res.json({userName:data.firstName})
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports.signin_post = async(req,res)=>{
    console.log("dd")
    console.log(req.body)
    const saveUser = await User.create({
        email: req.body.email,
        firstName: req.body.firstName,
        LastName:req.body.lastName,
        address:req.body.address,
        password:req.body.password
    })
    if(saveUser.email){
        return res.json(saveUser.firstName);
    }
}