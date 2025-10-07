const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/productivity", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const hoursSchema = new mongoose.Schema({
  developer: String,
  date: String,
  hours: Number,
});

const Hours = mongoose.model("Hours", hoursSchema);

// POST route
app.post("/api/hours", async (req, res) => {
  const { developer, date, hours } = req.body;
  const entry = new Hours({ developer, date, hours });
  await entry.save();
  res.send({ message: "Data saved!" });
});

// GET route
app.get("/api/hours", async (req, res) => {
  const data = await Hours.find();
  res.json(data);
});

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
