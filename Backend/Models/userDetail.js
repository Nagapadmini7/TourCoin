const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
  uid: String,
  name: String,
  email: {
    type: String,
    unique: true,
  },
  image: String,
});

module.exports = mongoose.model("userDetail", userDetailSchema);
