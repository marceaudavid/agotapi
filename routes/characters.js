const express = require("express");
const router = express.Router();

const Character = require("../models/character");

const Dao = require("../database/dao");

// Get all characters :
router.get("/", (req, res) => {
  Dao.getAll(Character)
    .then(character => res.json(character))
    .catch(err => res.sendStatus(500));
});

// Get one character :
router.get("/:id", (req, res) => {
  Character.findOne({ _id: req.params.id })
    .then(character => res.status(200).json(character))
    .catch(err => res.sendStatus(500));
});

// Create one character :
router.post("/", (req, res) => {
  const character = new Character(req.body);
  Character.save()
    .then(character => res.send(character))
    .catch(err => res.sendStatus(500));
});

// Update one character :
router.put("/:id", (req, res) => {
  Character.updateOne({ _id: req.params.id }, req.body)
    .then(character => res.status(200).json(character))
    .catch(err => res.sendStatus(500));
});

// Delete one character:
router.delete("/:id", (req, res) => {
  Character.deleteOne({ _id: request.params.id })
    .then(character => res.status(200).json(character))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
