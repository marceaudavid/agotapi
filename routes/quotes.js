const path = require("path");
const express = require("express");
const router = express.Router();

const Quote = require("../models/quote");

const Dao = require("../mongo/dao");

// Get all quote :
router.get("/", (req, res) => {
  Dao.getAllDocument(Quote, req.query)
    .then(quote => res.json(quote))
    .catch(err => res.status(err.code).json(err.err));
});

// Get a random quote :
router.get("/random", (req, res) => {
  Dao.randomDocument(Quote)
    .then(quote => res.json(quote))
    .catch(err => res.status(err.code).json(err.err));
});

// Random quote view :
router.get("/random/view", (req, res) => {
  res.sendFile(path.join(`${__dirname}"/../public/html/quote.html`));
});

// Get one quote :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(Quote, req.params.id)
    .then(quote => res.json(quote))
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
    .then(quote => res.json({ status: "updated" }))
    .catch(err => res.status(err.code).json(err.err));
});

// Delete one quote :
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(Quote, req.params.id)
    .then(quote => res.json({ status: "deleted" }))
    .catch(err => res.status(err.code).json(err.err));
});

module.exports = router;
