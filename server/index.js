require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contactRoutes");
const User = require("./model/User"); // Ensure this path is correct
const surahRoutes = require("./routes/surahRoutes");
const PORT = process.env.PORT || 8001;

// MongoDB Connection
const url = process.env.MongoConnection;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to the Database"))
  .catch((e) => console.error("❌ Database connection error:", e.message));

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(
  helmet({
    crossOriginOpenerPolicy: { policy: "unsafe-none" },
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }) 
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api", surahRoutes);

// Token to Data Endpoint
app.post("/api/user/tokentodata", async (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, result: { name: user.name, email: user.email } });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});