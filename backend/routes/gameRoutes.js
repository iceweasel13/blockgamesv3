// routes/gameRoutes.js
const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// Get all games
router.get("/", async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

// Add a new game
router.post("/", async (req, res) => {
  const newGame = new Game(req.body);
  const savedGame = await newGame.save();
  res.json(savedGame);
});

// Delete a game
router.delete("/:id", async (req, res) => {
  const deletedGame = await Game.findByIdAndDelete(req.params.id);
  res.json(deletedGame);
});

module.exports = router;
