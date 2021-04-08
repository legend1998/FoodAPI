const mongoose = require("mongoose");

let restaurant = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  phone: { type: Number, required: true, minlength: 10, maxlength: 10 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: Object },
  details: { type: Object },
  open: { type: Boolean, default: true },
  daysOpen: { type: [Object] },
});

module.exports = mongoose.model("restaurant", restaurant);
