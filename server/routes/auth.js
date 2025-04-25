const express = require("express");
const router = express.Router();
const User = require("../model/User");
const jwt = require("jsonwebtoken");

// Middleware to verify JWT
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log( req.headers.authorization)
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Register and Login routes (unchanged)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    user = new User({ name, email, password });
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ message: "User registered successfully", token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ message: "Login successful", token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/", async (req, res) => {res.send({success:true})})
// Update Name Endpoint
router.put("/update-name", authMiddleware, async (req, res) => {
  const { name } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.name = name;
    await user.save();
    res.json({ message: "Name updated successfully", user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Update name error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/completed-chapters", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ completedChapters: user.completedChapters || [] });
  } catch (error) {
    console.error("Error fetching completed chapters:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update completed chapters
router.put("/update-chapters", authMiddleware, async (req, res) => {
  const { completedChapters } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    user.completedChapters = completedChapters;
    await user.save();
    res.json({ message: "Chapters updated successfully", completedChapters: user.completedChapters });
  } catch (error) {
    console.error("Error updating chapters:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;