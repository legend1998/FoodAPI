const mongoose = require("mongoose");

let deliveryboy = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true, minlength: 10, maxlength: 10 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: [Object], maxlength: 2 },
});

module.exports = mongoose.model("deliveryboys", deliveryboy);
