const express = require("express");
require("dotenv").config();

const app = express();

// API Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/yugesh", (req, res) => {
  res.send("Instagram username: yugeshpoudel45");
});

app.get("/info", (req, res) => {
  res.send("<h1>K xa khabar</h1>");
});

const githubJson = {
  login: "yugeshpoudel45",
  id: 104973762,
  node_id: "U_kgDOBkHFwg",
  avatar_url: "https://avatars.githubusercontent.com/u/104973762?v=4",
  // other fields...
};

app.get("/github", (req, res) => {
  res.json(githubJson);
});

// Export the app for Vercel
module.exports = app;
