const express = require("express");
const router = express.Router();

const Quote = require("../models/quote");

const Dao = require("../mongo/dao");
const fs = require('fs');
const path = require('path');


// Url :
router.get('/vue', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/quote.html'));
});

// Get all quote :
router.get("/", (req, res) => {
  Dao.getAllDocument(Quote)
    .then(quote => res.json(quote))
    .catch(err => res.sendStatus(500));
});

// Get a random quote :
const randomNumber = max => {
  return Math.floor(Math.random() * max) +1;
}

router.get("/random", (req, res) => {
  Quote.countDocuments().then(count => { 
    const request = randomNumber(count).toString();
    console.log(request)
    Dao.getOneDocument(Quote, request)
      .then(quote => res.status(200).json(quote))
      .catch(err => res.sendStatus(500));
  });
});

// Get one quote :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(Quote, req.params.id)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.sendStatus(500));
});

// Add one quote :
router.post("/", (req, res) => {
  Dao.addOneDocument(Quote, req.body)
    .then(quote => res.send(quote))
    .catch(err => res.sendStatus(500));
});

// Update one quote :
router.put("/:id", (req, res) => {
  Dao.updateOneDocument(Quote, req.params.id, req.body)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.sendStatus(500));
});

// Delete one quote :
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(Quote, req.params.id)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.sendStatus(500));
});







module.exports = router;
