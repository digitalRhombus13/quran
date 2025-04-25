// // models/Surah.js
// const mongoose = require("mongoose");

// const verseSchema = new mongoose.Schema({
//   no:{type:Number,required:true},
//   arabic: { type: String, required: true },
//   transliteration: { type: String, required: true },
//   translations: {
//     English: { type: String, required: true },
//     Urdu: { type: String, required: true },
//     French: { type: String, required: true },
//     Spanish: { type: String, required: true },
//     Hindi: { type: String, required: true },
//   },
// });

// const surahSchema = new mongoose.Schema({
//   no:{type:Number,required:true,unique:true},
//   name: { type: String, required: true, unique: true },
//   verses: [verseSchema],
// });

// module.exports = mongoose.model("Surah", surahSchema);