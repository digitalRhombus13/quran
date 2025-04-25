// surahRoutes.js
const express = require("express");
const router = express.Router();
const Surah = require("../model/Sura"); // Fixed typo in variable name

// Get all Surahs
router.get("/surahs", async (req, res) => {
  try {
    const surahs = await Surah.find(); // Fixed typo in model name
    if (!surahs.length) {
      return res.status(404).json({ message: "No surahs found" });
    }
    res.json(surahs);
  } catch (error) {
    console.error("Error fetching Surahs:", error);
    res.status(500).json({ message: "Error fetching Surahs", error: error.message });
  }
});

module.exports = router;