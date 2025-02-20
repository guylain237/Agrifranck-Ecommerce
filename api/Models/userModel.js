const mongoose = require('mongoose');

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
  verify: { type: Boolean},
});

//
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
