const mongoose= require('mongoose');
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    productCategory: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    price: {
        type: Number,
        required: false,
        trim: true
    }
});

//jwt
ProductSchema.methods.getSignedToken = function() {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE})
}  
 
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;