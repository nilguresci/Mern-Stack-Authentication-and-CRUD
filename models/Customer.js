const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const CustomerSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  town: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  sector: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String, //"cell"
    number: "111-222-33-33",
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please provide a valid email",
    ],
  },
});

//jwt
CustomerSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
