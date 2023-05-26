const express = require("express");
const router = express.Router();
const Score = require("../models/Score");

router.post("/", async (req, res) => {
  try {
    const { score, walletAddress, gameId } = req.body;
    const newScore = new Score({
      score,
      walletAddress,
      gameId,
    });
    const savedScore = await newScore.save();
    res.json(savedScore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const scores = await Score.find();
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
