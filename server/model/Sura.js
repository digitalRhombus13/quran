// models/sura.js
const mongoose = require("mongoose");

const verseSchema = new mongoose.Schema({
  no: { type: Number },
  arabic: { type: String },
  transliteration: { type: String },
  translations: {
    English: { type: String },
    Urdu: { type: String },
    French: { type: String },
    Spanish: { type: String },
    Hindi: { type: String },
  },
});

const suraSchema = new mongoose.Schema({
  no: { type: Number },
  name: { type: String },
  verses: [verseSchema],
});

module.exports = mongoose.model("sura", suraSchema);
