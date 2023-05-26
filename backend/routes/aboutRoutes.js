// routes/profileRoutes.js
const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// Get all profiles
router.get("/", async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

// Add a new profile
router.post("/", async (req, res) => {
  const newProfile = new Profile(req.body);
  const savedProfile = await newProfile.save();
  res.json(savedProfile);
});

// Delete a profile
router.delete("/:id", async (req, res) => {
  const deletedProfile = await Profile.findByIdAndDelete(req.params.id);
  res.json(deletedProfile);
});

module.exports = router;
