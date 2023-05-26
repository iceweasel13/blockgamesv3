// models/Game.js
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  id: { type: String, required: true },
  logo: { type: String, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model("Game", gameSchema);
