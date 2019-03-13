const express = require("express");
const router = express.Router();

const Quote = require("../models/quote");

const Dao = require("../mongo/dao");

// Get all place :
router.get("/", (req, res) => {
  Dao.getAllDocument(Quote)
    .then(quote => res.json(quote))
    .catch(err => res.sendStatus(500));
});

// Get one place :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(Quote, req.params.id)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.sendStatus(500));
});

// Add one place :
router.post("/", (req, res) => {
  Dao.addOneDocument(Quote, req.body)
    .then(quote => res.send(quote))
    .catch(err => res.sendStatus(500));
});

// Update one place :
router.put("/:id", (req, res) => {
  Dao.updateOneDocument(Quote, req.params.id, req.body)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.sendStatus(500));
});

// Delete one place:
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(Quote, req.params.id)
    .then(quote => res.status(200).json(quote))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
