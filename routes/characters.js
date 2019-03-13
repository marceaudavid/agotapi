const express = require("express");
const router = express.Router();

const Character = require("../models/character");

const Dao = require("../database/dao");

// Get all characters :
router.get("/", (req, res) => {
  Dao.getAllDocument(Character)
    .then(character => res.json(character))
    .catch(err => res.sendStatus(500));
});

// Get one character :
router.get("/:id", (req, res) => {
  Dao.getOneDocument(Character, req.params.id)
    .then(character => res.json(character))
    .catch(err => res.sendStatus(500));
});

// Add one character :
router.post("/", (req, res) => {
  Dao.addOneDocument(Character, req.body)
    .then(character => res.send(character))
    .catch(err => res.sendStatus(500));
});

// Update one character :
router.put("/:id", (req, res) => {
  Character.updateOneDocument(Character, req.params.id, req.body)
    .then(character => res.status(200).json(character))
    .catch(err => res.sendStatus(500));
});

// Delete one character:
router.delete("/:id", (req, res) => {
  Character.deleteOneDocument(Character, req.params.id)
    .then(character => res.status(200).json(character))
    .catch(err => res.sendStatus(500));
});

module.exports = router;
