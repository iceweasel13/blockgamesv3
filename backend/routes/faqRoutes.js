// routes/faqRoutes.js
const express = require("express");
const router = express.Router();
const FAQ = require("../models/FAQ");

// Get all faqs
router.get("/", async (req, res) => {
  const faqs = await FAQ.find();
  res.json(faqs);
});

// Add a new faq
router.post("/", async (req, res) => {
  const newFAQ = new FAQ(req.body);
  const savedFAQ = await newFAQ.save();
  res.json(savedFAQ);
});

// Delete a faq
router.delete("/:id", async (req, res) => {
  const deletedFAQ = await FAQ.findByIdAndDelete(req.params.id);
  res.json(deletedFAQ);
});

module.exports = router;
