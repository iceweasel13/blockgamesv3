const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  score: {
    type: Number,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
  gameId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Score", ScoreSchema);
