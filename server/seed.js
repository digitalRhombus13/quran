require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs"); 
const Sura = require("./model/Sura"); // Import Mongoose model

// Load JSON data
 
// MongoDB Connection
const data = JSON.parse(fs.readFileSync('35.json', "utf-8"));
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));
  // Function to insert one document at a time

const seedDatabase = async () => {
  try {
      console.log("Inserting Surah:", data.name);
      
      const newSurah = new Sura(data);
      await newSurah.save();
  
      console.log(`Inserted: Surah ${data.name} (No: ${data.no})`);
 
   
    mongoose.connection.close();
  } catch (error) {
    console.error("Error Seeding Data:", error);
    mongoose.connection.close();
  }
};


// Run Seeding Function
seedDatabase();
