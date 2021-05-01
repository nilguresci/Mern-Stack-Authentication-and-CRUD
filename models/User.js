//const crypto=require('crypto')
const mongoose= require('mongoose');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchmea= new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Please provide a username"]
    }, 
    /* /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/  */
    /* /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/  */
    email:{
        type:String,
        required: [true, "Please provide a email"],
        unique:true,
        match:[
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email"
        ]
    },
    password:{
        type:String,
        required: [true, "Please provide a password"],
        minlength:6,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date

});

UserSchmea.pre("save", async function(next) {
    if(!this.isModified("password")){
        next();
    }
 
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next();
})

UserSchmea.methods.matchPasswords= async function(password){
    return await bcrypt.compare(password,this.password);
}

//jwt
UserSchmea.methods.getSignedToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE})
}

/*
UserSchmea.methods.getResetPasswordToken=function(){
    const resetToken=crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpire=Date.now() + 10 * (60 * 1000)  //şu an + 10 dk

    return resetToken;
}  */

const User=mongoose.model("User",UserSchmea);

module.exports=User;