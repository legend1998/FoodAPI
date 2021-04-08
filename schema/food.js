const mongoose = require("mongoose");

let foods = new mongoose.Schema({
  name: { type: String, required: true },
  serveType: { type: String },
  details: { type: Object },
  status: { type: Boolean, default: true },
  restauarnt: { type: mongoose.Types.ObjectId, ref: "restaurant" },
});

module.exports = mongoose.model("foods", foods);
