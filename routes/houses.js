const express = require("express");
const router = express.Router();

const House = require("../models/house");

const Dao = require("../database/dao");

// Get all house :
router.get("/", (req, res) => {
  Dao.getAll(House)
    .then(house => res.json(house))
    .catch(err => res.sendStatus(500));
});

// Get one house :
router.get("/:id", (req, res) => {
  House.findOne({ _id: req.params.id })
    .then(house => res.status(200).json(house))
    .catch(err => res.sendStatus(500));
});

// Create one house :
router.post("/", (req, res) => {
  const house = new House(req.body)
    .save()
    .then(house => res.send(house))
    .catch(err => res.sendStatus(500));
});

// Update one house :
router.put("/:id", (req, res) => {
  House.updateOne({ _id: req.params.id }, req.body)
    .then(house => res.status(200).json(house))
    .catch(err => res.sendStatus(500));
});

// Delete one house:
router.delete("/:id", (req, res) => {
  House.deleteOne({ _id: req.params.id })
    .then(house => res.status(200).json(house))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
