const User = require("../model/user")
const jwt = require("jsonwebtoken")
exports.create = async (req,res)=>{
    const {email,password,name} = req.body

    if(!email||!password||!name){
        return res.status(404).json({
            status:false,
            message:"Please fill all the fields"
        })
    }

    const existingUser = await User.findOne({email:email})

    if(existingUser){
        return res.status(500).json({
            status:false,
            message:"User Already Exists"
        })
    }

    const newUser = await User.create({
        name:name,
        email:email,
        password:password
    })

    return res.status(200).json({
        status:true,
        message:"User Created Successfully"
    })
   

}

exports.login = async (req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email:email})

    if(!email||!password){
        return res.status(400).json({
            status:false,
            message:"Please Fill All Fields"
        })
    }

    if(!user){
        return res.status(400).json({
            status:false,
            message:"User not Found"
        })
    }


    if(user.password !== password){
        return res.status(400).json({
            status:false,
            message:"Wrong Password"
        })
    }

    const token =  jwt.sign({email:user.email,id:user._id},"Ecommerce",{
        expiresIn:"24h"
    })

     return res.cookie("token",token).status(200).json({
        status:true,
        user,
        token:token,
        message:"User Login"
    })
}