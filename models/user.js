const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory"],
  },
  email: {
    type: String,
    required: [true, "Email is mandatory"],
    unique: true,
  },
  passwd: {
    type: String,
    required: [true, "Password is mandatory"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: [true, "You need to pick a role"],
    enum: ["ADMIN_ROLE", "USER_ROLE", "TEST_ROLE"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", UserSchema);
