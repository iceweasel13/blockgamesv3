// models/Profile.js
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  pfp: { type: String, required: true },
  names: { type: String, required: true },
  role: { type: String, required: true },
});

module.exports = mongoose.model("Profile", profileSchema);
