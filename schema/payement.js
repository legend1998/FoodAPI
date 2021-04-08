const mongoose = require("mongoose");

let payment = new mongoose.Schema({
  txn: { type: String, required: true },
  amont: { type: Number, requiredLtrue },
  dateTime: { type: Date, default: Date.now() },
  customer: { type: mongoose.Types.ObjectId, ref: "customers" },
  food: { type: mongoose.Types.ObjectId, ref: "foods" },
});

module.exports = mongoose.model("payment", payment);
