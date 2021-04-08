const mongoose = require("mongoose");

let orders = new mongoose.Schema({
  status: {
    type: String,
    enum: ["in queue", "preparing", "packed", "on the way", "delivered"],
    required: true,
  },
  address: { type: Object, required: true },
  deliveryBoy: { type: mongoose.Types.ObjectId, ref: "deliveryboys" },
  customer: { type: mongoose.Types.ObjectId, ref: "customers" },
  food: { type: mongoose.Types.ObjectId, ref: "foods" },
  restauarnt: { type: mongoose.Types.ObjectId, ref: "restaurant" },
});

module.exports = mongoose.model("orders", orders);
