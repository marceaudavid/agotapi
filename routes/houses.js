const express = require("express");
const router = express.Router();

const House = require("../models/house");

const Dao = require("../mongo/dao");

// Get all houses :
router.get("/", (req, res) => {
  Dao.getAllDocument(House, req.query)
    .then(house => res.json(house))
    .catch(err => res.sendStatus(500));
});

// Get one house :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(House, req.params.id)
    .then(house => res.status(200).json(house))
    .catch(err => res.sendStatus(500));
});

// Add one house :
router.post("/", (req, res) => {
  Dao.addOneDocument(House, req.body)
    .then(house => res.send(house))
    .catch(err => res.sendStatus(500));
});

// Update one house :
router.put("/:id", (req, res) => {
  Dao.updateOneDocument(House, req.params.id, req.body)
    .then(house => res.status(200).json(house))
    .catch(err => res.sendStatus(500));
});

// Delete one house:
router.delete("/:id", (req, res) => {
  Dao.deleteOneDocument(House, req.params.id)
    .then(house => res.status(200).json(house))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
