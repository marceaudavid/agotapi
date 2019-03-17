const express = require("express");
const router = express.Router();

const Quote = require("../models/quote");

const Dao = require("../mongo/dao");
const fs = require("fs");

// Get all quote :
router.get("/", (req, res) => {
  Dao.getAllDocument(Quote, req.query)
    .then(quote => res.json(quote))
    .catch(err => res.status(err.code).json(err.err));
});

// Get one quote :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(Quote, req.params.id)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.status(err.code).json(err.err));
});

// Add one quote :
router.post("/", (req, res) => {
  Dao.addOneDocument(Quote, req.body)
    .then(quote => res.send(quote))
    .catch(err => res.status(err.code).json(err.err));
});

// Update one quote :
router.put("/:id", (req, res) => {
  Dao.updateOneDocument(Quote, req.params.id, req.body)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.status(err.code).json(err.err));
});

// Delete one quote :
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(Quote, req.params.id)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.status(err.code).json(err.err));
});

// Get a random quote :

const randomNumber = max => {
  return Math.floor(Math.random() * max) + 1;
};

router.get("/random/:random", (req, res) => {
  Quote.countDocuments().then(count => {
    req.params.random = randomNumber(count).toString();
    const request = req.params.random;
    console.log(request);
    Dao.getOneDocument(Quote, request)
      .then(quote => res.status(200).json(quote))
      .catch(err => res.sendStatus(500));
  });
});

module.exports = router;
