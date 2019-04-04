const path = require("path");
const express = require("express");
const router = express.Router();

// Root Redirection
router.get("/", (req, res) => {
  res.redirect("/home");
});

// Home page
router.get("/home", (req, res) => {
  res.sendFile(path.join(`${__dirname}"/../public/views/home.html`));
});
// Random quote view :
router.get("/random", (req, res) => {
  res.sendFile(path.join(`${__dirname}"/../public/views/quote.html`));
});

module.exports = router;
