const { model, Schema } = require('mongoose');
const crypto = require('crypto');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
      unique: true,
      index: true,
      lowercase: true
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true
    },
    hashed_password: {
      type: String,
      required: true
    },
    salt: Number,
    role: {
      type: Number,
      trim: true
    },
    resetPasswordLink: {
      data: String,
      default: ''
    }
  },
  { timestamp: true }
);

module.exports = model('User', userSchema);
