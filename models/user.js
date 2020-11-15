const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema (
  {
    username: {
      type: String,
      trim: true, //deletes the extra spaces if people make a typo
      required: [true, 'Username is required'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    }
  }
)
module.exports = model('User', userSchema);