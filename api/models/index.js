//Models
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please include username."]
  },
  phone: {
    type: String,
    required: [true, "Please Include your phone number."]
  },
  clan: {
    type: String,
    required: [true, "Please Include your clanName."]
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
