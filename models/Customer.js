const mongoose= require('mongoose');
const jwt = require('jsonwebtoken')

const CustomerSchema= mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    companyName:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    city:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    town:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    adress:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    sector:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    }
})

//jwt
CustomerSchema.methods.getSignedToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE})
}  

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;