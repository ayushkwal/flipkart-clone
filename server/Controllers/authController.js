const User = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var cookies = require("cookie-parser");

//CreatIng a Token
const createToken =(id)=>{
    return jwt.sign({id},'ayush secret key',{expiresIn:3*24*60*60})
}



module.exports.login_get = (req,res)=>{
    res.send("hello login")
}

module.exports.signin_get = (req,res)=>{
    res.send("hello login")
}

module.exports.login_post = async(req,res)=>{
   
    const b = await User.login(req.body.email,req.body.password);
    console.log(b);
    if(!b.data){
        return res.json({error:b.error});
    }else{
        console.log('creating token now');
        const token = await createToken(b._id);
       await res.cookie('jwt',token,{maxAge:3*24*60*60*1000,httpOnly:true})
        return res.json({data:b.data});
    }
}

module.exports.signin_post = async(req,res)=>{
    console.log("dd")
    console.log(req.body)
    try{
        const saveUser = await User.create({
            email: req.body.email, firstName: req.body.firstName,LastName:req.body.lastName, address:req.body.address,password:req.body.password
        })
        const token = createToken(saveUser._id);
        await res.cookie('jwt',token,{maxAge:3*24*60*60*1000,httpOnly:true})
        return res.json({data:saveUser});
    }catch(err){
        console.log(err,err.message);
        if(err.message.includes('shorter')){
            return res.json({error:'Minimum password is less than 6 characters'}) 
        }else if(err.message.includes('duplicate')){
            return res.json({error:'Email already exist'})
        }else if(err.message.includes('valid')){
            return res.json({error:'Enter valid email address'})
        }
        else{
            return res.json({error:'Something went wrong'})
        }
    }
}

module.exports.loginbycookie_post = async(req,res)=>{
    console.log(req.cookies);
    const token = req.cookies.jwt;
        if (token) {
        const verify = jwt.verify(token, 'ayush secret key', async function(err, decodeToken) {
            console.log(decodeToken,'ss')
            if(err) {
                console.log(err);
                return res.json({error:'Something went wrong'})
            } else {
                const saveUserFromCookie = await User.findById(decodeToken.id);
                return res.json({data:saveUserFromCookie});
            }
        })

    } else {
        return res.json({error:'Something went wrong'})
    }
        
}